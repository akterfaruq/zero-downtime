# Module 10 — Zero Downtime Kubernetes Deployments

## Overview
This repo demonstrates Blue-Green, Rolling Update, and Canary (Argo Rollouts) strategies to accomplish zero downtime deployments.

## How implemented
- App: Node.js + Express; shows version on `/`
- Docker images: pushed to Docker Hub `YOUR_DOCKERHUB_USERNAME/zero-downtime-demo`
- Blue-Green: two deployments (blue= v1, green= v2) and a single Service switched by selector
- Rolling Update: Deployment configured with `maxUnavailable: 0` and `maxSurge: 1`
- Canary: Argo Rollouts with incremental `setWeight` steps and pauses

## How zero downtime is achieved
- Readiness probe prevents pod from receiving traffic until ready.
- Blue-Green: both stacks run simultaneously; Service selector switching routes to ready pods.
- Rolling: Kubernetes ensures new pods are ready before terminating old pods (thanks to `maxUnavailable: 0`).
- Canary: traffic is shifted gradually and old pods remain available during the rollout.

## Docker Hub
Images:
- `YOUR_DOCKERHUB_USERNAME/zero-downtime-demo:v1`
- `YOUR_DOCKERHUB_USERNAME/zero-downtime-demo:v2`
- `YOUR_DOCKERHUB_USERNAME/zero-downtime-demo:latest`

## Proof
Include screenshots or a terminal recording:
- curl output showing continuous responses during updates.
- `kubectl rollout status` output (or `kubectl argo rollouts get`).

