---
title: Release 0.3
date: 2022-02-28
author: Richard
authorURL: https://github.com/huachaohuang
---

Today, we're excited to announce the release of Engula 0.3! Engula is a cloud-native data structure store, used as a database, cache, and storage engine.

## What's in 0.3?

**Engula has gone through a redesign in terms of its interface and architecture**. The new design is based on the lessons we learned in the past few months, and it will provide a clearer guide for future development. You can check the new design [document][document] and [discussion][discussion] for more details. 

[document]: https://github.com/engula/engula/blob/main/docs/design.md
[discussion]: https://github.com/engula/engula/discussions/358

**The most important feature in Engula 0.3 is a set of data structures.** In this release, Engula provides five data types: `Any`, `I64`, `Blob`, `List`, and `Map`. Each data type provides a set of APIs to manipulate objects of that type. For example, you can add on `I64` objects or push elements to `List` objects.

Moreover, **Engula supports ACID transactions across different data structures.** For example, you can push an element to a list and insert an index to a map in the same transaction. This feature allows users to build more advanced applications on top of Engula.

Engula 0.3 also comes with a new server and a Rust client. **You can get started with [this tutorial](/blog/tutorial-0.3).** Welcome to explore and have fun!

## The new website

As you may have noticed, this Engula website has also gone through a redesign! Special thanks to [@iNorthIsle][iNorthIsle] and [@tisonkun][tisonkun] for their nice work.

[iNorthIsle]: https://github.com/iNorthIsle
[tisonkun]: https://github.com/tisonkun