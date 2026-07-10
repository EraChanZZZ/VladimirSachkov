---
title: 'Production LiDAR processing library'
tagline: 'A Python library for working with very large point clouds — C/C++ where it counts, property-based tests everywhere it matters.'
period: '2025 — now'
context: 'Clear Timber Analytics'
tags: ['Python', 'C/C++', 'CPython extensions', 'computational geometry', 'Hypothesis']
order: 2
links: []
---

## In one paragraph

Deep learning models are only one stage of a tree-analysis product. Before and after
them sits a lot of classical geometry: cleaning noisy scans, turning a segmented point
cloud into a structured geometric model, and downstream planning over that model. I
designed and shipped the production library that does all of this at very large scale.

## What's inside

- **Performance-critical paths in C/C++** via custom CPython extensions, with a
  human-readable Python API on top built around numpy, scipy, and laspy.
- **Geometry pipeline**: robust, fully algorithmic processing (Delaunay triangulation,
  KDTree queries, RANSAC fitting) that holds up on noisy, real-world scans.
- **Graph-based planning** over the extracted geometry, respecting configurable
  real-world constraints.
- **Property-based testing** with Hypothesis — geometric code has too many edge cases
  for example-based tests alone.
- **Deployment**: a system-agnostic inference engine packaged with Docker behind a REST
  API, running on on-prem hardware with logging, versioning, and a user interface.
