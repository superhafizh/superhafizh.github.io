---
title: AI services for legal document and email work
summary: Go and Python services that analyse documents, process incoming email and power chat features for law-firm applications.
period: 2023 – now
start: "2023-04"
role: Full stack developer
org: Schutze Web Engineering
stack: [Go, Python, LLM APIs]
---

## Context

Schutze Web Engineering builds and runs applications for private law firms in Germany. A large part of a firm's day goes into reading documents and working through email: work that follows clear patterns but was still done by hand.

## What I built

- A pipeline stage, written in Go and Python, that sends documents to AI services for analysis and hands structured results back to the existing applications.
- Automated email processing on top of the same services.
- Chat features, so staff can work with their documents in plain language.

The new services had to sit next to an existing mix of Next.js, Node.js with Firebase, and Symfony applications, so I kept the boundaries simple and owned the architecture and code quality end to end.

## Outcome

Routine document analysis and email handling moved out of people's inboxes and into the pipeline, as part of a wider push to modernise the firms' tools.
