# Relational (SQL) vs. Non-Relational Databases (NoSQL)

| **Feature**                 | **Relational Databases**                           | **Non-Relational Databases**                             |
|-----------------------------|---------------------------------------------------|---------------------------------------------------------|
| **Data Structure**          | Organized into tables (rows and columns).         | Stores data in formats like key-value pairs, documents, graphs, or column-family stores. |
| **Schema**                  | Fixed schema with predefined relationships.        | Flexible schema or schema-less; supports dynamic data structures. |
| **Relationships**           | Uses primary and foreign keys to establish relationships. | Typically embeds related data within documents or links via references. |
| **Query Language**          | SQL (Structured Query Language).                  | Varied; depends on the database (e.g., MongoDB Query Language, Cassandra Query Language). |
| **Performance**             | Optimized for complex queries and transactions.    | Optimized for high-speed, large-scale, and distributed operations. |
| **Examples**                | MySQL, PostgreSQL, Oracle, Microsoft SQL Server.   | MongoDB, DynamoDB, Cassandra, Redis, Couchbase.         |
| **ACID Compliance**         | Fully ACID-compliant for transactions.             | Often eventual consistency (some support ACID at the expense of performance). |
| **Flexibility**             | Rigid structure; changes to schema are complex.    | Highly flexible; adapts easily to changes in data structure. |
| **Data Size Handling**      | Suitable for moderate to large datasets.           | Ideal for large-scale, distributed datasets.            |
| **Indexing**                | Supports indexing for faster queries.              | Supports indexing but varies based on database type.    |
