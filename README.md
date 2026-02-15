# smart-server-monitor_IoT

[cite_start]A fully containerized IoT proof‑of‑concept developed for **ChannelCert (PVT) Ltd**[cite: 10]. [cite_start]This system simulates environmental monitoring for mission-critical server infrastructure, replacing manual, reactive checks with an automated, proactive solution[cite: 10, 40].

[cite_start]The project demonstrates a robust **5‑layer IoT architecture** using microservices to ensure scalability, maintainability, and DevOps compatibility[cite: 11, 12].

---

## Architecture Overview

[cite_start]The system is structured into five distinct layers to ensure a clear separation of concerns[cite: 12, 80]:

1.  [cite_start]**Perception Layer:** Simulated **DHT22 sensors** (Temperature/Humidity) using Node-RED function nodes with a deterministic random walk model for realistic data generation[cite: 141, 142].
2.  [cite_start]**Transport Layer:** **MQTT (Mosquitto 2.0)** message broker using **QoS Level 1** to guarantee message delivery without data loss[cite: 115, 117].
3.  [cite_start]**Processing Layer:** **Node-RED** for IoT workflow orchestration, data validation, and routing[cite: 98, 229].
4.  [cite_start]**Middleware Layer:** **MongoDB** (NoSQL) for time-series storage with **TTL indexes** for automatic 7-day data retention and storage optimization[cite: 126, 130].
5.  [cite_start]**Business Layer:** * **React 18.2 Dashboard:** A professional SPA for real-time visualization and historical trend analysis[cite: 100, 268].
    * [cite_start]**n8n Workflow Automation:** Intelligent, multi-channel alerting (Gmail/Webhooks) with cooldown logic to prevent notification fatigue[cite: 107, 313].



---

## Quick Start

Ensure you have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed.

### 1. Spin up the stack
[cite_start]Run the following command in your terminal to deploy the 6-service microservice stack[cite: 160, 369]:

```bash
docker-compose up -d
