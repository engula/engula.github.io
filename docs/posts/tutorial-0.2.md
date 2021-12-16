# Tutorial 0.2

Welcome to the tutorial for Engula 0.2! In this tutorial, we'll show you how to use an Engula engine.

## Let's go

First of all, create a new project with:

```sh
cargo new hello-engula
cd hello-engula
```

Then in `Cargo.toml`, add `engula` and `tokio` to the dependencies section:

```toml
[dependencies]
engula = "0.2"
tokio = "1.14"
```

## Hash engine

Engula 0.2 comes with a hash engine that provides simple key-value storage. You can use the hash engine in `src/main.rs` like this:

```rust
use engula::engine::hash::Engine;
use engula::kernel::mem::Kernel;

#[tokio::main]
async fn main() -> Result<()> {
    let kernel = Kernel::open().await?;
    let engine = Engine::open(kernel).await?;

    let key = vec![1];
    let value = vec![2];
    engine.put(key.clone(), value.clone()).await?;
    let got = engine.get(&key).await?;
    assert_eq!(got, Some(value));
    engine.delete(key.clone()).await?;
    let got = engine.get(&key).await?;
    assert_eq!(got, None);

    Ok(())
}
```

In this example, you open a kernel and run an engine on it. The engine concept and operations should be very intuitive if you have used any other storage engines before. But what does a kernel mean here?

## Local kernel

In Engula, a kernel provides a stateful environment for an engine. An engine runs on a kernel and stores all its data in the kernel. You can run an engine on different kernels according to your use case. For example, the above example uses a memory kernel that stores everything in memory. The memory kernel is handy for tests, but if you restart the kernel, everything will be gone. If that's not what you want, Engula 0.2 also provides a file kernel that stores everything in local files.

To use the file kernel, you just need to replace `engula::kernel::mem::Kernel` with `engula::kernel::file::Kernel` like this:

```rust
use engula::engine::hash::Engine;
use engula::kernel::file::Kernel;

#[tokio::main]
async fn main() -> Result<()> {
    // Opens a file kernel that stores data in the given path.
    let kernel = Kernel::open("/tmp/engula").await?;
    let engine = Engine::open(kernel).await?;
    ...
}
```

Nice, everything just works! But a storage engine that simply stores data in memory and local files doesn't seem very exciting, right? Fine, don't worry, we get a third kernel for you, a gRPC kernel. This kernel is more interesting because it makes Engula very different from traditional storage engines.

## Remote kernel

**A gRPC kernel allows you to run an embedded engine along with your database while storing data in a remote kernel.** The remote kernel, in turn, stores data in a remote journal and a remote storage. You don't need to know how they work. You just need to understand their relationship to connect them together.

![Kernel](../images/tutorial-0.2-kernel.drawio.svg)

Simply speaking, to use a gRPC kernel, you need to start a journal server and a storage server first. Then start a kernel server that connects to the journal server and the storage server. Then you can connect to the kernel server and run your engine on it. Engula 0.2 provides an `engula` binary to start those servers. It's not complicated. Let's try it out!

You need to install the `engula` binary first:

```sh
cargo install engula
```

Then start a journal server and a storage server:

```sh
engula journal run 127.0.0.1:10001 --mem
engula storage run 127.0.0.1:10002 --mem
```

And then start a kernel server:

```sh
engula kernel run 127.0.0.1:10000 --journal 127.0.0.1:10001 --storage 127.0.0.1:10002 --mem
```

Now, we have set up the remote kernel. You may notice the `--mem` option at the end of each command. It lets you choose how to store data. Using `--mem` means that the server stores data in memory. You can also try `--file <PATH>` instead to store data in local files.

Finally, you can run the engine on the remote kernel like this:

```rust
use engula::engine::hash::Engine;
use engula::kernel::grpc::Kernel;

#[tokio::main]
async fn main() -> Result<()> {
    // Connects to the kernel server you just started.
    let kernel = Kernel::connect("127.0.0.1:10000").await?;
    let engine = Engine::open(kernel).await?;
    ...
}
```

That's it. You only need to import the `engula::kernel::grpc::Kernel` and connect to the kernel server. Then you can use the engine exactly the same as before, except that your engine is now powered by a remote kernel.

Well, the idea may not sound so exciting at this moment, as our remote kernel is very primitive for now. However, imagine that Engula provides a serverless kernel that scales automatically according to your workload in the future. Then you can build the database with the new kernel to get a serverless database instantly, without changing any other code at all!

You can build a standalone database and a serverless database in the same way. You don't need to pay any unnecessary performance penalty in either case. And we will also help you deploy the database you build. These are the goals of Engula 1.0. Watch us!

## Get more information

If you want to know more about Engula, you can start with [the design document](https://github.com/engula/engula/blob/main/docs/design.md). That's all for Engula 0.2. See you in the next release!
