---
title: 'Tree instance segmentation from LiDAR'
tagline: 'Reproduced ForestFormer3D from the paper and extended it well past the prior open-source state of the art — then made it fast enough to ship.'
period: '2025 — now'
context: 'Clear Timber Analytics'
tags: ['PyTorch', '3D deep learning', 'LiDAR', 'FlashAttention', 'MLOps']
order: 1
links:
  - { label: 'ForestFormer3D paper (Xiang et al.)', url: 'https://arxiv.org/abs/2506.16991' }
---

## In one paragraph

Forestry and urban-planning workflows need to know where each individual tree is inside
a massive 3D laser scan — hundreds of millions of points, no labels, heavy noise. I
reproduced the ForestFormer3D architecture (Xiang et al.) from the paper in PyTorch,
then extended it until it clearly outperformed the prior open-source state of the art on
our held-out evaluation scenes, and packaged it so a full training run takes a day on a
single consumer GPU.

## What I built

- **Reproduction from scratch**: the full query-based 3D transformer pipeline —
  dataloading, augmentation, model, matching, and evaluation — starting from only the
  paper.
- **Novel extensions**: designed new model-head and loss-function extensions that raised
  segmentation quality and sharply improved tree-vs-background separation in cluttered
  urban scenes.
- **Confidence calibration**: made the model's confidence scores substantially more
  predictive of true segmentation quality — which is what makes large-scale active
  learning and automatic quality assurance possible.
- **Speed**: FlashAttention integration (~2.5× faster training), a custom voxelized
  dataloader, and a much faster inference path. Full training fits in 24 hours on one
  RTX 4090.

## Results

Extended the model well past the prior open-source state of the art on our held-out
multi-scene evaluation — clear gains in segmentation F1, false-positive rate, and urban
tree-vs-background IoU. (Exact numbers are internal.)

## The platform around it

I also own the infrastructure this runs on: Azure DevOps CI/CD with self-hosted agents,
MLflow experiment tracking, DVC-versioned datasets and transformation pipelines. One
YAML file configures a complete, reproducible training/evaluation run with all metrics
and compute utilization tracked.
