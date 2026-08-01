---
title: Thirty Meter Telescope control software
year: 2021
stack: [Scala, Akka, Kotlin, Redis, Event Sourcing, NodeJS, React]
summary: Control-system middleware, sequencing, and a domain DSL for scientific instrument control on one of the world’s largest telescopes under construction.
featured: false
order: 4
---

### Problem

Heterogeneous hardware and software components needed coordinated control, sequencing, and telemetry across varying protocols.

### Approach

Middleware for multi-protocol communication, sequencing applications, a DSL for domain experts, and on-prem telemetry archival using event sourcing and Redis Pub/Sub.

### Outcome

Production software for TMT instrument control in a 10–12 person team — later featured in Thoughtworks Insights for the DSL work.
