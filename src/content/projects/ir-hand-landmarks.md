---
title: 'Domain adaptation for infrared medical imaging'
tagline: 'Bachelor thesis: adapting RGB-trained hand-landmark models to infrared cameras for early leprosy screening in Nepal. Graded 9.5/10 for content.'
period: '2024 — 2025'
context: 'TU Delft — BSc thesis (CSE3000)'
tags: ['domain adaptation', 'PyTorch', 'medical imaging', 'test-time adaptation']
order: 3
links:
  - { label: 'Thesis (TU Delft repository)', url: 'https://repository.tudelft.nl/record/uuid:dea4c671-d95f-4b1c-9c77-d298665dc224' }
chart:
  caption: 'Adaptive PCK on the infrared test set — baseline plus the gain each method adds'
  max: 0.65
  baseline: 0.498
  note: 'Values from the thesis (Table 2, full IR test set). Green shows improvement over the unadapted InterWild baseline.'
  items:
    - { label: 'InterWild (baseline)', value: 0.498 }
    - { label: 'AdaBN', value: 0.524 }
    - { label: 'SSA (body)', value: 0.543 }
    - { label: 'Deep CORAL (hand)', value: 0.585 }
    - { label: 'SSA + Deep CORAL', value: 0.617, best: true }
---

## In one paragraph

Clinicians in Nepal detect early signs of leprosy by measuring skin temperature at hand
keypoints with infrared cameras — but keypoint-detection models are trained on regular
RGB photos and degrade badly on IR. Labeling a large IR dataset was impractical, so my
thesis asked: how far can unsupervised and test-time domain adaptation carry an
RGB-trained model into the infrared domain?

## Approach

On a small custom dataset (80 labeled IR images, 5,000 unlabeled frames) I implemented
and evaluated three families of adaptation, spanning the cost spectrum:

- **AdaBN** — recalibrating batch-norm statistics on unlabeled target data (nearly free);
- **Deep CORAL** — deep feature alignment with targeted training of specific model
  components;
- **SSA** — test-time subspace alignment, adapting at inference with no training at all.

## Results

Deep CORAL gave the strongest individual gains despite the tiny dataset; combining the
methods improved correct-keypoint detection by **11 percentage points of PCK** over the
unadapted model. Supervised by Jan van Gemert's group (Zhi-Yi Lin, Thomas Markhorst).
Graded 9.5/10 for content, 8.5/10 overall.
