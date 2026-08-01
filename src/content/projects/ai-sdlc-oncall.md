---
title: AI-orchestrated SDLC & on-call assistant
year: 2025
stack: [Claude, Cursor, Windsurf, MCP, Agent Skills, TDD, Jira]
summary: Designed and shipped an AI delivery workflow (analysis → stories → TDD → review → Jira) and an on-call assistant that auto-triages production alerts with code-level RCA.
cover: /images/projects/observability-cover.svg
featured: true
order: 1
---

### Problem

Manual overhead across analysis, storying, implementation, review, and ticket hygiene — plus slow first response when production alerts fire.

### Approach

Custom MCP integrations, project Skills, and guiding rules wired into Claude/Cursor/Windsurf. An alert-monitoring poller watches production channels and surfaces structured, code-aware root-cause analysis for on-call engineers.

### Outcome

Less repetitive SDLC toil and faster incident reaction without trading away code quality.
