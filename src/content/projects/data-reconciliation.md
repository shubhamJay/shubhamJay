---
title: Credit card data reconciliation
year: 2025
stack: [Scala, Spark, AWS Glue, DynamoDB, Kinesis Firehose, Lambda]
summary: End-to-end reconciliation streaming DynamoDB changes through Firehose and Lambda into Glue, then a Spark job to guarantee correctness with downstream systems.
featured: true
order: 2
---

### Problem

Internal platform records and downstream systems drifted; correctness had to be proven continuously, not spot-checked.

### Approach

Streamed DynamoDB change events via Kinesis Firehose and Lambda into an AWS Glue table; authored a Scala Spark Glue job to reconcile against downstream systems.

### Outcome

Owned the pipeline end-to-end with a clear correctness guarantee for credit-card processing data.
