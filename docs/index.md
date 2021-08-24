---
date: 2021-09-01
---

# ![Engula](images/logo-wide.png)

---

Building databases is hard.
Take a standalone database as an example.
We need to consider the file format, data structure, cache, optimizer, transaction, wire protocol, etc.
If this is not hard enough, then look at a distributed database.
We are talking about sharding, scheduling, consistency, availability, parallel processing, distributed transactions, etc.
If that is still not convincing, how about a distributed database on the cloud?
Disaggregated compute and storage? Multi-tenant? Serverless?

Right, it is so hard to build a database that we should avoid doing it whenever possible.
However, business innovation calls for new purpose-built databases.
We have witnessed the emergence of new databases in the last decade.
We have databases for different workloads, OLTP, OLAP, HTAP, HSAP, HTSAP (Hybrid Transactional/Serving/Analytical Processing, cool, isn't it?).
We have databases for different data models, key-value, document, relational, time series, graph, object, vector, and multi-model.
We also have domain-specific databases for the internet, medicine, manufacture, life science, machine learning, etc.
Modern businesses are so varied but also so valuable that, sometimes, it is worth customizing databases for them, either to save cost or to provide better services.

Besides that, admit it or not, we engineers just love to craft our databases.
It is so fun and proud to build a new database, make it into production, and see it runs so well.
But, on the other hand, it does require so much effort to develop, and it is not so fun to operate and maintain because of the toil and stress.
We want a solid foundation that takes care of our troubles and lets us focus on the most fun and important part.

Fortunately, open-source projects have significantly lowered the bar for homebrew databases in the last decade. Nowadays, tools like RocksDB and gRPC enable us to build a decent standalone database with much less effort. However, when it comes to distributed databases and then cloud databases, things are still very tough.

So we decided to build Engula, an extensible storage engine that leverages elastic resources to deliver reliable, cost-effective, and high-performance services.
**Engula's mission is to empower engineers to build next-generation data infrastructures with less effort and more confidence.**

We believe this is the storage engine we want when we build the next database. We are excited about this future and we welcome everyone to [join](https://github.com/engula/engula) it!

– Richard, Laurent
