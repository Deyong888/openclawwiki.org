---
title: 'OpenClaw Setup Guide: Your First Conversation with a Self-Hosted AI Robot'
publishDate: 2026-01-15
excerpt: 'Discover how to launch your first self-hosted AI assistant with OpenClaw. A complete beginner guide to running autonomous agents on your own hardware with total privacy control.'
image: ~/assets/images/openclaw-first-conversation-guide.png
category: 'Introduction'
tags: [openclaw, guide, self-hosted, ai-agent, privacy, tutorial]
author: 'OpenClaw Wiki Team'
---

# OpenClaw Setup Guide: Your First Conversation with a Self-Hosted AI Robot

**Transform your Mac Mini or Raspberry Pi into a proactive AI assistant that respects your privacy—no cloud subscriptions required.**

The future of personal AI isn't locked behind corporate APIs. In January 2026, a project formerly known as Clawdbot (and briefly Moltbot) exploded onto the scene, accumulating over 100,000 GitHub stars in weeks. That project—now called **OpenClaw**—represents a fundamental shift in how we interact with artificial intelligence.

Unlike ChatGPT or Claude.ai, where your data travels to distant servers, OpenClaw brings the AI directly to your hardware. It's "Claude with hands"—an autonomous agent that doesn't just chat but *acts* on your behalf, running 24/7 on equipment you control [^2^].

This guide walks you through your very first setup, from unboxing hardware to having your initial conversation with what might be the closest thing to JARVIS we've seen yet.

## What Makes OpenClaw Different?

Before diving into setup, understand why OpenClaw has captivated developers and privacy advocates alike:

| Feature | Cloud AI Assistants | OpenClaw |
|---------|---------------------|----------|
| **Data Location** | External servers | Your hardware only |
| **Persistent Memory** | Session-based | Long-term Markdown storage |
| **Messaging** | Web interface only | WhatsApp, Telegram, Slack, iMessage, Discord |
| **Proactive Actions** | Reactive only | Autonomous notifications & task execution |
| **Code Access** | Closed source | MIT License (fully open) |

OpenClaw functions as a **local gateway**—a persistent Node.js service that bridges frontier AI models (Claude, GPT-4, Gemini, or local LLMs) with your existing communication channels and system tools [^4^]. It stores memories as plain Markdown files you can edit, search, or sync with Obsidian [^7^].

## Hardware Requirements: Choosing Your Deployment

OpenClaw runs on surprisingly modest hardware, though your choice affects performance:

### Recommended: Mac Mini M4
The current community favorite. Apple's M4 chip offers an optimal balance of:
- **Neural Engine performance** for local model inference
- **Energy efficiency** for 24/7 operation
- **Unix-based environment** ideal for development tools

Mac Mini sales reportedly surged specifically for OpenClaw deployments following the project's viral success [^2^].

### Budget Alternative: Raspberry Pi 5
Capable of running the gateway and handling basic messaging integrations. Best suited for:
- Lightweight messaging automation
- Local API calls with cloud models
- Learning the platform before scaling up

### Cloud Deployment (Paradoxical but Practical)
For those wanting to test before committing to hardware:
- **Railway**: One-click deployment with web-based configuration (~$5-10/month) [^5^]
- **DigitalOcean**: Hardened security images with 1-click setup [^4^]

*Note: While technically "self-hosted" on these platforms, you maintain complete data sovereignty compared to traditional SaaS AI tools.*

## Step 1: Installation & Gateway Setup

OpenClaw uses a modular architecture consisting of a **Gateway** (message router), **Agent** (AI brain), and **Skills** (capabilities). Here's how to bring them online:

### Quick Install (macOS/Linux)
Open your terminal and execute:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

This installs the openclaw CLI command (with legacy aliases moltbot and clawdbot for backward compatibility) .
Windows Installation
Windows users should deploy via:
WSL2 (Windows Subsystem for Linux) - Recommended
Docker Desktop - For containerized isolation
Initial Configuration
The installer creates a minimal configuration at ~/.clawdbot/moltbot.json (the directory retains the legacy name for compatibility):

```JSON
{
  "agent": {
    "model": "anthropic/claude-opus-4-5"
  }
}
```
Critical Decision: Choose your AI provider:
Anthropic Claude (Recommended): Use Pro/Max subscription via OAuth or API keys. Offers superior context handling and prompt injection resistance 
OpenAI GPT-4: Alternative frontier model
Local Models: Via Ollama integration for offline operation (Llama 3, Mistral, etc.)

## Step 2: The "Hatching" Ritual
OpenClaw's onboarding includes what the community calls "hatching"—a personality initialization that makes your instance unique.
During first run, the setup wizard will prompt you to:
Name your agent (e.g., "Alfred," "Friday," or "Clippy 2.0")
Define personality parameters (professional, casual, sarcastic, etc.)
Set workspace location (default: ~/clawd)
Your workspace structure follows a transparent, hackable format :
~/clawd/AGENTS.md - Core identity and behavior rules
~/clawd/SOUL.md - Personality configuration
~/clawd/TOOLS.md - Available capability definitions
~/clawd/skills/ - Community and custom skill storage
~/clawd/memory/ - Daily automated notes and context
This Markdown-based approach means you can manually edit your AI's "brain" with any text editor, or search memories using tools like Raycast.

## Step 3: Connecting Your First Messaging Channel
Here's where OpenClaw diverges from typical AI tools. Instead of opening a web browser, you'll interact through apps you already use.
Telegram (Easiest for Testing)
Message @BotFather on Telegram to create a new bot
Copy your API token
Run openclaw config and select Telegram integration
Paste your token when prompted
WhatsApp Business API
Requires Meta developer account approval but offers the most ubiquitous reach. Ideal for:
Voice message processing
Image analysis of photos sent via chat
Group chat management (with appropriate permissions)
iMessage (macOS only)
Native integration with Apple's messaging platform. Your OpenClaw instance will appear as a contact in Messages, allowing seamless conversation from iPhone, iPad, or Mac .
Discord/Slack
Perfect for team collaboration scenarios or development workflows. OpenClaw can listen to specific channels or operate via direct messages.
Pro Tip: You can enable multiple channels simultaneously. The same conversation persists across platforms—start a task in Telegram, continue in Slack, finish in iMessage .
## Step 4: Your First Conversation
With your gateway running (openclaw start or via systemd service), send your first message through your configured channel.
The Wake-Up Test
Try: "Hello, I'm [Your Name]. What can you do?"
Unlike cloud chatbots, OpenClaw will:
Acknowledge context - It knows this is your first interaction
Present capabilities - List available skills (web search, file access, calendar, etc.)
Ask clarifying questions - It may inquire about your goals to build its user model
Testing Persistence
Crucially, try this sequence:
Tell it: "Remember that I have a meeting with Sarah every Tuesday at 2 PM"
Close your messaging app completely
Reopen it hours later or the next day
Ask: "When is my next meeting with Sarah?"
OpenClaw should respond accurately, demonstrating its persistent memory—the system stores this information as a Markdown note in your workspace, not as ephemeral context .
## Step 5: Enabling Proactive Behavior
The true power of OpenClaw lies in its ability to act without prompting. To enable this:
Configure Cron Skills
OpenClaw uses standard cron syntax for scheduling. Example skill activation:
# In your skills configuration
morning_briefing:
  schedule: "0 8 * * 1-5"
  actions:
    - check_calendar
    - fetch_weather
    - summarize_emails
    - send_message: "Good morning! Today you have [calendar_summary]. Weather: [weather]. Priority emails: [email_count]."
    This sends a proactive message every weekday at 8 AM .
Browser Automation Setup
For web interaction capabilities:
Ensure your system has Chrome or Chromium installed
OpenClaw will use Playwright for browser control
Test with: "Check the price of flights to Tokyo for next month"
The agent can navigate sites, fill forms, and extract data—all running locally on your machine .
Security Best Practices
Running an autonomous AI with system access requires caution. Follow these guidelines from the security community:
Hardware Isolation
Run OpenClaw on dedicated hardware when possible. A separate Mac Mini or Linux box ensures that if the agent executes unintended commands, your primary workstation remains unaffected .
Permission Gradients
Start with restricted access:

```bash
# Run in sandbox mode initially
openclaw start --sandbox
```
Only graduate to full system access (--full-access flag) after extensive testing.
Audit Your Skills
The "Skill" ecosystem (molthub repository) offers powerful capabilities but requires scrutiny:
Review any skill's code before installation
Check for external API calls that might exfiltrate data
Monitor network traffic from your OpenClaw instance 
Prompt Injection Awareness
Because OpenClaw can execute shell commands and access files, it's vulnerable to prompt injection via processed emails or web content. The Anthropic Opus model offers better protection against these attacks than local alternatives .
Troubleshooting Common First-Time Issues
"Disconnected" in Web UI
If accessing the web interface shows "Disconnected":
Navigate to Overview → Gateway Access
Copy the OPENCLAW_GATEWAY_TOKEN from your environment variables
Paste into the connection field
Memory Not Persisting
Check workspace permissions:
```bash
ls -la ~/clawd/memory/
```
Ensure the OpenClaw process has write access to this directory.
API Rate Limits
If using Claude Pro via OAuth, you may hit rate limits during heavy testing. Switch to API key authentication for higher throughput, or enable model failover to GPT-4 in your configuration .
Real-World Use Cases to Try
Once your first conversation flows smoothly, experiment with these proven workflows:
Developer Workflow
"Review yesterday's GitHub commits and summarize what [Teammate] worked on"
"Create a new branch for the JIRA ticket I'm assigned to and scaffold the basic file structure"
Personal Productivity
"Find that PDF about tax deductions I mentioned last week and summarize the key points"
"Block out focus time on my calendar for the project we discussed yesterday"
Research Assistant
"Monitor [competitor's] pricing page and alert me if they change their Pro tier pricing"
"Draft an email to my landlord about the heating issue, referencing the temperature logs from my smart thermostat"
The Future of Your OpenClaw Instance
As you use OpenClaw, it grows with you. The system is self-improving—it can generate new skills based on your requests. Ask it to "create a skill that fetches my daily step count from Apple Health and cheers me on if I hit 10,000 steps," and it will write the necessary code and configuration .
The community around OpenClaw moves rapidly. With over 50+ integrations and growing, from Philips Hue to Notion to Spotify, your local AI assistant becomes more capable daily—without ever sending your data to a centralized server . 

## Conclusion
Starting your OpenClaw journey represents more than setting up software; it's an assertion of digital sovereignty. In an era where AI capabilities are increasingly rented rather than owned, OpenClaw offers a path to genuine ownership.
Your first conversation is just the beginning. Whether running on a Mac Mini under your desk or a VPS in the cloud, OpenClaw places the future of AI assistance firmly in your hands—or rather, on your hardware.
Ready to start? Visit openclaw.ai for the latest installation scripts, or join the community Discord to share your "hatching" experience.

Last updated: January 2026. OpenClaw is evolving rapidly—check the official repository for the latest features and security updates.
