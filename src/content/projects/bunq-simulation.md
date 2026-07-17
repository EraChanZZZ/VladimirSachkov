---
title: 'LLM-driven banking scenario simulator'
tagline: '2nd place at the bunq Financial API Hackathon: describe a complex banking scenario in plain English, watch it execute against the real API.'
period: 'Apr 2025'
context: 'bunq Hackathon - 2nd place'
tags: ['LLMs', 'agents', 'fintech', 'API design']
order: 4
links:
  - { label: 'Demo video', url: 'https://vimeo.com/1081099523' }
---

## In one paragraph

Testing a banking platform means reproducing messy multi-actor situations - shared
accounts, split payments, disputed transactions - which is slow to script by hand. In a
weekend, our team built a simulation engine where you describe the scenario in natural
language and an LLM plans and executes it as a sequence of real bunq API calls, with
multiple simulated users acting concurrently. It took 2nd place.

## My part

Scenario-planning core: turning free-form natural language into a validated,
executable action graph over the banking API, and keeping the LLM honest with schema
constraints and dry-run verification before any call fired.
