# smart-server-monitor_IoT

A fully containerized IoT proof‑of‑concept developed for **ChannelCert (PVT) Ltd**[cite: 10]. This system simulates environmental monitoring for mission-critical server infrastructure, replacing manual, reactive checks with an automated, proactive solution.

The project demonstrates a robust **5‑layer IoT architecture** using microservices to ensure scalability, maintainability, and DevOps compatibility.

---

## Architecture Overview

The system is structured into five distinct layers to ensure a clear separation of concerns:

1.  **Perception Layer:** Simulated **DHT22 sensors** (Temperature/Humidity) using Node-RED function nodes with a deterministic random walk model for realistic data generation.
2.  **Transport Layer:** **MQTT (Mosquitto 2.0)** message broker using **QoS Level 1** to guarantee message delivery without data loss.
3.  **Processing Layer:** **Node-RED** for IoT workflow orchestration, data validation, and routing.
4.  **Middleware Layer:** **MongoDB** (NoSQL) for time-series storage with **TTL indexes** for automatic 7-day data retention and storage optimization.
5.  **Business Layer:** * **React 18.2 Dashboard:** A professional SPA for real-time visualization and historical trend analysis.
    * **n8n Workflow Automation:** Intelligent, multi-channel alerting (Gmail/Webhooks) with cooldown logic to prevent notification fatigue.



---

## Quick Start

Ensure you have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed.

### 1. Spin up the stack
Run the following command in your terminal to deploy the 6-service microservice stack:

```bash
docker-compose up -d
