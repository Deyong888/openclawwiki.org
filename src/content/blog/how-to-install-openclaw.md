---
title: 'How to Install Openclaw (Formerly Clawdbot/Moltbot): The Ultimate Docker & VPS Setup Guide (2026)'
description: 'Step-by-step guide to installing Openclaw (previously known as Clawdbot and Moltbot). Learn the safest way to deploy this AI agent using Docker, local host, or Cloud VPS. Includes troubleshooting for common errors.'
excerpt: 'Stop searching for broken Clawdbot links. This guide covers the correct installation method for Openclaw—the rebranded, official version of the viral AI agent. We provide copy-paste Docker Compose files for a secure setup.'
publishDate: 2026-01-31
lastmod: 2026-01-31
author: 'Openclaw Wiki Editorial Team'
tags: ['openclaw install', 'clawdbot install', 'moltbot install', 'docker tutorial', 'self-hosted ai']
category: 'Tutorials'
canonical: 'https://openclawwiki.org/how-to-install-openclaw/'
featured: true
schema:
  type: 'TechArticle'
  headline: 'How to Install Openclaw: The Complete Guide for Docker and VPS'
  description: 'A technical guide on deploying the Openclaw AI agent (formerly Clawdbot/Moltbot) using Docker containers on Linux, Windows, and macOS.'
  datePublished: '2026-01-31'
  dateModified: '2026-01-31'
  author:
    '@type': 'Organization'
    name: 'Moltbot Wiki'
  image: 'https://moltbotwiki.org/images/openclaw-install-guide.png'
---

If you are searching for "Clawdbot install" or "Moltbot install," you have arrived at the right place.

Due to trademark disputes in late 2025, the viral AI agent project originally known as **Clawdbot** was briefly renamed to **Moltbot**, and has now stabilized under the community-driven name **Openclaw**.

This guide is the definitive resource for installing the official Openclaw version. We prioritize security and stability by using Docker, ensuring the AI agent runs in a sandboxed environment without risking your personal files.

## ⚠️ Important Security Warning

Before we begin the installation, please be aware of two critical points:

*   **Avoid Crypto Scams**: There is **NO** official token associated with Openclaw, Clawdbot, or Moltbot. Any Twitter account promoting a `$CLAWD` or `$MOLT` coin is a scam.
*   **Sandboxing is Mandatory**: This AI agent has the capability to execute terminal commands and write files. **Do not run this directly on your host machine (bare metal) using npm.** Always use Docker to isolate the AI from your critical system files.

## ✅ Prerequisites

To successfully deploy Openclaw, you need the following:

*   **Docker Desktop**: Installed and running on your machine (Windows, Mac, or Linux). [Download here](https://www.docker.com/products/docker-desktop).
*   **Anthropic API Key**: Openclaw relies on the Claude 3.5 Sonnet model. You must have a funded API key.
    1.  Go to [console.anthropic.com](https://console.anthropic.com).
    2.  Generate a new key (starts with `sk-ant-...`).
*   **Basic Terminal Knowledge**: You will need to copy and paste commands into your Command Prompt or Terminal.

## 🚀 Method 1: Docker Compose (Recommended)

This is the gold standard for installation. It creates a "recipe" file that makes your configuration easy to manage, update, and restart.

### Step 1: Create Your Project Folder

Open your terminal and run the following commands to create a directory for your bot:

```bash
mkdir openclaw-bot
cd openclaw-bot
```

### Step 2: Create the `docker-compose.yml` File

Create a new file named `docker-compose.yml` inside this folder. Paste the following configuration.

> **Note:** This configuration uses the official `ghcr.io` image. We have mapped the internal port `18789` to your local machine and set up a persistent volume so your bot doesn't "forget" settings when restarted.

```yaml
version: '3.9'

services:
  openclaw:
    # We use the official Openclaw image.
    # If you are looking for 'moltbot', this is the same software codebase.
    image: ghcr.io/openclaw/openclaw:latest
    container_name: openclaw_agent
    restart: unless-stopped
    
    # Environment Variables
    environment:
      # REQUIRED: Replace the string below with your actual Anthropic API Key
      - ANTHROPIC_API_KEY=sk-ant-YOUR_ACTUAL_KEY_HERE
      - LOG_LEVEL=info
      # Setting HOST to 0.0.0.0 allows you to access the web UI
      - HOST=0.0.0.0
      
    # Port Mapping
    ports:
      # Map host port 18789 to container port 18789
      - "18789:18789"
      
    # Data Persistence & Security
    volumes:
      # Persist configuration (login sessions, settings)
      - ./config:/root/.openclaw
      # Isolate the AI's workspace. It can only read/write files in this folder.
      - ./workspace:/app/workspace
```

### Step 3: Launch the Agent

Save the file. In your terminal (make sure you are inside the `openclaw-bot` folder), run:

```bash
docker-compose up -d
```

*   `up`: Creates and starts the container.
*   `-d`: Detached mode (runs in the background).

### Step 4: Access the Dashboard

Once the container starts, open your browser and visit: 👉 [http://localhost:18789](http://localhost:18789)

You should see the Openclaw setup wizard.

## ☁️ Method 2: Deploying on a Cloud VPS (24/7 Availability)

If you install Openclaw on your laptop, the bot goes offline when you close your lid. To keep your agent running 24/7 (e.g., for automated Telegram/WhatsApp handling), you should deploy it on a VPS (Virtual Private Server).

### Recommended Specs

*   **OS**: Ubuntu 22.04 LTS
*   **RAM**: Minimum 2GB (4GB recommended)
*   **Provider**: DigitalOcean or Vultr

### Installation Steps for VPS

1.  Connect via SSH to your server.
2.  Install Docker (if not already installed):

    ```bash
    curl -fsSL https://get.docker.com | bash
    ```

3.  Run Openclaw using a single command line (replace `YOUR_API_KEY`):

    ```bash
    docker run -d \
      --name openclaw \
      --restart always \
      -p 18789:18789 \
      -e ANTHROPIC_API_KEY="sk-ant-YOUR_API_KEY" \
      -e HOST=0.0.0.0 \
      -v $(pwd)/openclaw_data:/root/.openclaw \
      ghcr.io/openclaw/openclaw:latest
    ```

4.  Access remotely: Open your browser and go to `http://YOUR_SERVER_IP:18789`.

> **Firewall Tip:** If you cannot access the page, ensure port 18789 is open in your server's firewall (UFW).
> ```bash
> ufw allow 18789/tcp
> ```

## 🛠️ Troubleshooting Common Issues

Here are the solutions to the most frequent "Clawdbot install" and "Openclaw setup" errors.

### Error: port is already allocated

**Cause:** You might have an old instance of Clawdbot or Moltbot running in the background.

**Fix:**

```bash
docker rm -f openclaw_agent
# Then run docker-compose up -d again
```

### Error: Connection refused on localhost

**Cause:** The container might have crashed due to an invalid API Key.

**Fix:** Check the logs to see the error message.

```bash
docker logs openclaw_agent
```

Look for "Authentication failed" or "401 Unauthorized". If you see this, check your API key in the YAML file.

### Confusion: "I downloaded Moltbot but the docs say Openclaw"

**Explanation:** As mentioned, the project was renamed. The code structure is identical. You can treat any "Moltbot install" guide as an alias for Openclaw. We recommend using the `ghcr.io/openclaw/openclaw` image to ensure you get the latest security patches.

## 🏁 Conclusion

Whether you call it Openclaw, Moltbot, or Clawdbot, you now have a fully functional AI agent running securely in Docker.

### Next Steps

*   Connect your messaging apps (WhatsApp/Telegram) via the Web UI.
*   Create your first "Playbook" to automate daily tasks.

> **Did this guide help you?** Star the official Openclaw repository to support the developers.
