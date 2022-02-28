---
title: Tutorial 0.3
date: 2022-02-28
author: Richard
authorURL: https://github.com/huachaohuang
---

Welcome to the tutorial for Engula 0.3! This tutorial will show you how to use Engula with the Rust client.

## Prerequisites

- [rustup](https://rustup.rs/)
- Engula requires a nightly toolchain to build. You can install it with:
  ```
  rustup install nightly
  ```

## Start the server

First of all, let's install Engula 0.3 with:

```
cargo +nightly install engula --version 0.3.0 --locked
```

Engula 0.3 comes with a standalone server. You can start the server with:

```
engula server start
```

The server will start and listen to the default address (http://localhost:21716).

## Set up the Rust client

Engula 0.3 also comes with a Rust client. To explore the client, set up a new project first:

```
cargo new hello-engula
cd hello-engula
```

And then add the following dependencies to `Cargo.toml`:

```toml
[dependencies]
engula-client = "0.3"
anyhow = "1.0"
tokio = "1.15"
```

## Data model

Before using the client, let's introduce the data model first. An Engula deployment is called a universe. For example, the server you started above represents a universe with a single server.

A universe consists of multiple databases, each of which consists of multiple collections. A collection contains a set of objects of the same data type. Each object has an object identifier that is unique within a collection. Each data type provides a set of APIs to manipulate objects of that type.

Engula 0.3 provides the following data types:

| Type | Notes | Rust Value Type |
|------|-------|-----------------|
| `Any`     | A value of any supported type. | `Value` |
| `I64`     | A signed 64-bit integer. | `i64` |
| `Blob`    | A sequence of bytes. | `Vec<u8>` |
| `List<T>` | A sequence of values. | `Vec<T>` |
| `Map<T>`  | An unordered set of key-value pairs. | `HashMap<Vec<u8>, T>` |

For container types like `List` and `Map`, you can further specify the value type. For example, `List<Any>` contains values of `Any` type, and `Map<I64>` contains values of `I64` type.

Note that there are some limitations on type compositions. Firstly, the key type of `Map` is fixed to `Blob`. Secondly, you can not specify nested container types. For example, `List<Map<I64>>` is not allowed. These limitations are by design to prevent overly complicated use cases.

## Create databases and collections

Now you can connect to the universe you started above with:

```rust
use anyhow::Result;
use engula_client::{Any, Blob, List, Map, Universe, I64};

#[tokio::main]
async fn main() -> Result<()> {
    // The address of the server you started above.
    let url = "http://localhost:21716";
    let uv = Universe::connect(url).await?;
    let db = uv.create_database("db").await?;
    let c1 = db.create_collection::<Any>("c1").await?;
    let c2 = db.create_collection::<I64>("c2").await?;
    let c3 = db.create_collection::<Blob>("c3").await?;
    let c4 = db.create_collection::<List<Any>>("c4").await?;
    let c5 = db.create_collection::<List<I64>>("c5").await?;
    let c6 = db.create_collection::<List<Blob>>("c6").await?;
    let c7 = db.create_collection::<Map<Any>>("c7").await?;
    let c8 = db.create_collection::<Map<I64>>("c8").await?;
    let c9 = db.create_collection::<Map<Blob>>("c9").await?;
    Ok(())
}
```

This snippet creates a database and multiple collections. The collections listed above enumerate all the supported data type compositions.

## Manipulate objects

You can manipulate collections with the basic `get`/`set`/`delete` interfaces:

```rust
// Sets the Any object with i64 (I64)
c1.set("o", 1).await?;
// Sets the Any object with Vec<u8> (Blob)
c1.set("o", vec![1u8, 2u8]).await?;
// Sets the Any object with Vec<i64> (List<I64>)
c1.set("o", vec![1i64, 2i64]).await?;
// Gets and prints the object
println!("c1.o = {:?}", c1.get("o").await?);
// Deletes the object
c1.delete("o").await?;
// Sets the I64 object with i64
c2.set("o", 1).await?;
println!("c2.o = {:?}", c2.get("o").await?);
// Sets the Blob object with Vec<u8>
c3.set("o", vec![1, 2]).await?;
println!("c3.o = {:?}", c3.get("o").await?);
// Sets the List<I64> object with Vec<i64>
c5.set("o", vec![1, 2]).await?;
println!("c5.o = {:?}", c5.get("o").await?);
// Sets the Map<Blob> object with HashMap<Vec<u8>, Vec<u8>>
c9.set("o", [(vec![1], vec![1]), (vec![2], vec![2])])
    .await?;
println!("c9.o = {:?}", c9.get("o").await?);
```

Note that some collections are omitted here. You can try to explore them in your project. You can also manipulate individual objects in a collection with the `object` interface:

```rust
// Any object
c1.set("o", 1).await?;
c1.object("o").add(1).await?;
println!("c1.o = {:?}", c1.get("o").await?);
// I64 object
c2.object("o").add(2).await?;
println!("c2.o = {:?}", c2.get("o").await?);
// Blob object
c3.object("o").append(vec![3u8, 4u8]).await?;
println!("c3.o = {:?}", c3.get("o").await?);
println!("c3.o.len = {:?}", c3.object("o").len().await?);
// List<I64> object
c5.object("o").push_back(3).await?;
c5.object("o").push_front(0).await?;
println!("c5.o = {:?}", c5.get("o").await?);
println!("c5.o.len = {:?}", c5.object("o").len().await?);
// Map<Blob> object
c9.object("o").set(vec![3], vec![3]).await?;
c9.object("o").delete(vec![1]).await?;
println!("c9.o = {:?}", c9.get("o").await?);
println!("c9.o.len = {:?}", c9.object("o").len().await?);
println!("c9.o.[3] = {:?}", c9.object("o").get(vec![3]).await?);
```

As you can see, each data type provides some special APIs to manipulate objects of that type. The `Any` type is more flexible since it provides APIs of multiple data types. But it is also error-prone because it performs more implicit conversions with less type checking.

## Transactions

The data structures introduced above provide rich semantics sufficient for simple use cases. But they only allow you to manipulate individual objects. If you need to build more advanced applications, you will need transactions. For example, you may want to push a message to a list whenever a map is updated. In this case, you will need to update the list and the map atomically for data consistency.

Engula provides powerful transactions for you to build high-level data structures on top of it. Engula supports object-level, collection-level, and database-level transactions.

Object-level transactions allow you to do multiple operations on a single object. For example:

```rust
// Updates a List<I64> object in a transaction.
let mut txn = c5.object("txn").begin();
txn.push_back(1).push_front(0);
txn.commit().await?;
println!("c5.txn = {:?}", c5.get("txn").await?);
// Updates a Map<Blob> object in a transaction.
let mut txn = c9.object("txn").begin();
txn.set(vec![1], vec![1])
    .set(vec![2], vec![2])
    .delete(vec![3]);
txn.commit().await?;
println!("c9.txn = {:?}", c9.get("txn").await?);
```

Collection-level transactions allow you to do mulitple operations on multiple objects in the same collection. For example:

```rust
// Updates multiple I64 objects in a transaction.
let mut txn = c2.begin();
txn.set("a", 1);
txn.object("b").add(1).sub(2);
txn.commit().await?;
// Updates multiple List<I64> objects in a transaction.
let mut txn = c5.begin();
txn.set("a", vec![1, 2]);
txn.object("b").push_back(3).push_front(0);
txn.commit().await?;
```

Database-level transactions allow you to do multiple operations on multiple objects across different collections in the same database. For example:

```rust
// Begins a database transaction
let txn = db.begin();
{
    // Begins a collection sub-transaction
    let mut t = c5.begin_with(txn.clone());
    t.set("a", vec![1, 2]);
    t.object("b").push_back(3);
    // Commits the sub-transaction.
    // Note that the operations will not be executed until the database transaction commits.
    t.commit().await?;
}
{
    // Begins another collection sub-transaction
    let mut t = c9.begin_with(txn.clone());
    t.set("a", [(vec![1], vec![1]), (vec![2], vec![2])]);
    t.object("b").set(vec![3], vec![3]);
    t.commit().await?;
}
// Commits the database transaction and executes all the sub-transactions.
// Note that this will fail if there is any pending sub-transaction.
txn.commit().await?;
```

## Feedback

That's all for Engula 0.3. There is still a lot of work for the data APIs and internal architecture. We are looking forward to your feedback. Welcome to join us in [GitHub Discussions][discussions] and [Zulip][zulip]. See you in the next release!

[discussions]: https://github.com/engula/engula/discussions
[zulip]: https://engula.zulipchat.com
