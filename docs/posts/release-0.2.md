# Release 0.2

<h5>Dec 17, 2021</h5>

Today, we're excited to announce the release of Engula 0.2! Since [demo 1](posts/demo-1), Engula has entered a formal development cycle, and Engula 0.2 is the first official release. Engula is a serverless storage engine that aims to help users build reliable and cost-effective databases.

## What's in 0.2?

**We have published a [design document][design-document] to introduce Engula's concepts and architecture.** For those who don't know much about Engula or haven't been around for a while, Engula has changed a lot, and the design document is the best place to get started.

[design-document]: https://github.com/engula/engula/blob/main/docs/design.md

Engula 0.2 comes with one engine and three kernels:

- **A hash engine that supports simple key-value operations.** This engine relies on a kernel to perform stateful operations. It can work with the three kernels below to tackle different use cases.
- **A memory kernel that stores everything in memory.** This kernel integrates a memory journal, storage, and manifest for data storage.
- **A file kernel that stores everything in local files.** This kernel integrates a file journal, storage, and manifest for data storage.
- **A gRPC kernel that stores data in remote gRPC servers.** An engine uses a kernel client to communicate with a kernel server. The kernel server can further connect to a journal server and a storage server for data storage. Engula 0.2 provides a binary to start different kinds of servers easily.

**If you want to try it out, we have prepared a [tutorial](TODO) for you. Have fun!**

## What's next in 0.3?

TODO

## Community development

Engula is an ambitious project that tries to offer a solid database infrastructure for the next decade. It requires a lot of effort and different kinds of skills. We believe that a supportive community is vital to the success of Engula, and we are glad to see that the community is going in a promising direction.

If you are interested in joining our community, we have some guidelines for you:

- Please read [the code of conduct][coc] first.
- For formal design documents, you can check the [docs][docs].
- For discussions with a specific topic, you can go to [Discussions][discussions].
- For casual discussions or just want to say hi, feel free to join [Zulip][zulip].

[coc]: https://github.com/engula/engula/blob/main/CODE_OF_CONDUCT.md
[docs]: https://github.com/engula/engula/tree/main/docs
[discussions]: https://github.com/engula/engula/discussions
[zulip]: https://engula.zulipchat.com

## FAQ

### Where is 0.1?

Version number 0.1 has been used by demo 1. It is a mistake, but we decided to make use of it and treated demo 1 as version 0.1. You can check the discussion [here][discussion-0.1] for more details.

[discussion-0.1]: https://github.com/engula/engula/discussions/41#discussioncomment-1561589

### Where is demo 2?

In the [demo 1 report](posts/demo-1), we indicated that we would have a demo 2 to explore the path toward an adaptive storage engine. While the goal is fantastic, the timing is not. We did spend some time on demo 2, though. But then we realized that Engula doesn't have a solid foundation for such an exploration yet. So we decided to abort demo 2 and start a formal development cycle. You can check the discussion [here][discussion-demo-2] for more details.

[discussion-demo-2]: https://github.com/engula/engula/discussions/29
