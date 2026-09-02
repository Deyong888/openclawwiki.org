---
title: 'Multi-Agent vs Single-Agent: What 260 Configurations Actually Show'
excerpt: 'A wave of 2026 benchmarks found multi-agent systems swing from +80.8% to -70.0% depending on one variable nobody talks about. Here is how to tell which side your task falls on before you spend the tokens.'
publishDate: 2026-09-02
updateDate: 2026-09-02
author: 'OpenClaw Wiki Editorial Team'
category: 'Technical Analysis'
tags: ['ai-agents', 'multi-agent', 'architecture', 'benchmarks', 'orchestration', 'reliability']
image: ~/assets/images/blog/multi-agent-vs-single-agent.png
---

The most useful thing published about multi-agent systems this year is also the least flattering: across six benchmarks and 260 configurations, multi-agent architectures averaged **-0.3%** against a single-agent baseline.

That number is real, and it is also close to meaningless on its own, because it is the average of two wildly different results. On decomposable financial reasoning, a centralized multi-agent setup beat single-agent by **+80.8%**. On sequential planning (PlanCraft), every multi-agent architecture got *worse*, with the worst dropping **-70.0%**.

The gap between those two numbers is not a modeling problem. It is a task-structure problem. And it is now measurable enough that you can decide which side you are on before writing any orchestration code.

## The variable that matters is not complexity

The study behind these numbers, *Towards a Science of Scaling Agent Systems*, compared five architectures (Single, Independent, Centralized, Decentralized, Hybrid) across benchmarks that included Finance Agent and PlanCraft.

Here is the part that should change how you architect: Finance Agent and PlanCraft scored almost identically on the paper's own complexity metric (0.407 vs 0.419). Nearly the same difficulty. Opposite outcomes.

What separated them was **sequential interdependence** - how much each step depends on state produced by the previous one.

- Finance Agent: revenue, costs, and market factors can be analysed independently, then aggregated. Parallelism is real. Multi-agent wins by +80.8%.
- PlanCraft: each planning decision depends on constraints established by earlier decisions. Every handoff loses context the next agent never saw. Multi-agent loses up to -70.0%.

This produces a four-quadrant rule you can apply at design time:

| Task structure | Multi-agent fit | Typical examples |
|---|---|---|
| High decomposability, low dependency | Excellent | Deep research, multi-source retrieval, exploring several approaches |
| High decomposability, high dependency | Conditional | Large software projects, multi-stage analysis with shared state |
| Low decomposability, low dependency | Marginal | Standalone reasoning, single-pass generation |
| Low decomposability, high dependency | Poor | Sequential planning, state-dependent reasoning |

A hundred-step task where step 50 strictly depends on the state step 49 produced will not parallelize, no matter how many agents you throw at it. A ten-step research task where eight directions are independent will.

## When you equalize compute, the advantage shrinks

There is a methodological trap in most multi-agent benchmark comparisons. If a single agent spends 10,000 tokens and a five-agent system spends 50,000, a higher score tells you nothing about architecture - it tells you the system bought more test-time compute.

A 2026 study controlled for this, aligning reasoning-token budgets across single-agent and multi-agent architectures on Qwen3, DeepSeek-R1-Distill-Llama, and Gemini 2.5. On multi-hop reasoning with budgets held constant, **single-agent consistently matched or outperformed multi-agent**. The authors' conclusion is the important part: previously reported multi-agent gains likely reflect "unaccounted computation and context effects rather than inherent architectural benefits."

The cleanest formulation:

```
observed gain = extra-compute gain + architecture gain - coordination cost
```

Which reframes what multi-agent actually is. It is not primarily a capability amplifier. It is a **technique for organizing test-time compute** - deciding which subtasks run in parallel, which contexts stay isolated, how many tokens go to each search path, and which results reach the lead agent.

So the right evaluation metric is not accuracy. It is the performance-per-cost frontier: at equal token and latency budget, does multi-agent reach results single-agent cannot?

Sometimes yes. Anthropic's research system is the honest positive case: an orchestrator with parallel subagents outperformed single-agent Claude Opus 4 by **90.2%** on their internal research eval. But read the caveats they published themselves. The gain was on breadth-first queries pursuing independent directions simultaneously, cost roughly **15x the tokens of a normal chat interaction**, and their own analysis of BrowseComp found token usage alone explained about **80%** of performance variance (tool calls and model choice brought the three together to ~95%).

Anthropic also names coding as a poor fit, even though they sell the multi-agent system: "most coding tasks involve fewer truly parallelizable tasks than research."

## More agents stop helping faster than you think

Even on genuinely parallel tasks, adding agents hits diminishing returns quickly.

Research on multi-agent scaling found that in homogeneous setups - same model, same prompt, same tools - performance plateaus fast, because similar agents reason along similar paths and return duplicate evidence. In their experiments, **2 diverse agents matched or beat 16 homogeneous agents**.

The mechanism is described as an "effective channel": if two agents produce highly correlated reasoning, they contribute roughly one channel of information between them, not two. Only non-redundant information adds capability.

This is a direct critique of the most common multi-agent pattern in the wild:

```
Agent A: "You are a product manager."
Agent B: "You are a technical expert."
Agent C: "You are an industry analyst."
```

Three personas backed by one model, one context, one toolset. The personas are different. The information is not. Real diversity comes from different models, different tools, different data sources, different contexts, or different verification mechanisms - not from adjectives in a system prompt.

Before adding an agent, ask the only question that matters: **what information will this agent have that no other agent can get?** If the answer is "none," you are buying redundant tokens.

## Sending messages is easy; integrating them is not

The assumption that coordination follows automatically from communication does not survive testing.

Silo-Bench ran 1,620 experiments across 30 algorithmic tasks and 54 configurations. The finding is uncomfortable: agents generally formed sensible communication topologies and did exchange information. In many failures, the deciding agent **already had the information needed to solve the task**. It could not correctly integrate partial views into a global state.

The authors call this the communication-reasoning gap:

```
communication ≠ information integration ≠ coordination
```

A message arriving is the cheapest part. What is hard is knowing which subtask it belongs to, what environment state produced it, whether it is now stale, whether it conflicts with another agent's result, and how it should change the next decision.

The same study measured what that costs. Independent multi-agent architectures showed **17.2x** error amplification versus single-agent. Adding centralized verification dropped it to **4.4x** - a 4x improvement from one architectural change.

The lesson for implementation is blunt: anything you can structure, structure. Dependencies, state, completion conditions, and verification results belong in code and the runtime, not in an LLM's natural-language understanding of a meeting transcript.

## Where multi-agent systems actually break

The MAST taxonomy analyzed 1,642 execution traces across seven multi-agent frameworks, with 150 expert-annotated traces and an inter-annotator kappa of 0.88. Failures cluster into three buckets that single-agent testing does not catch:

- **Specification problems (41.77%)** - the task description is ambiguous, incomplete, or contradicts another agent's description. A single agent resolves ambiguity by asking the user. An agent in a pipeline resolves it by guessing, and two agents guessing differently produce inconsistency neither detects.
- **Coordination failures (36.94%)** - deadlocks, resource contention, conflicting objectives, stale state. Agent A writes; Agent B reads before the write propagates and acts on outdated information.
- **Verification gaps (21.30%)** - no mechanism catches a wrong intermediate result, so it becomes an input to the next step.

Overlapping those categories is a reliability arithmetic that every multi-agent builder should internalize. If each step succeeds 90% of the time:

- 5 steps: 59% end-to-end
- 10 steps: 35%
- 20 steps: 12%

A 20-step workflow at 95% per step succeeds **36%** of the time. Published analyses put production failure rates for multi-agent systems between **41% and 87%**. And when one agent is compromised, cascade infection rates reach **89% to 100%** - a single hallucinating agent becomes a verified fact source for everything downstream.

Perhaps the most actionable statistic: centrally orchestrated systems show **3.2x lower failure rates** than unorchestrated ones, yet only **14%** of production multi-agent deployments use formal orchestration.

## A decision procedure you can run today

1. **Write the single-agent version first.** Not as a strawman - as the baseline you will measure against. If you have not tried one loop holding full context, you do not know what complexity buys you.
2. **Score the task on decomposability and dependency.** High decomposable plus low dependency is the only quadrant where multi-agent is clearly indicated.
3. **Budget the tokens honestly.** Compare at equal compute. If your multi-agent win disappears at equal tokens, you bought compute, not architecture.
4. **Add coordination before adding agents.** Centralized verification cut error amplification from 17.2x to 4.4x. That is cheaper than another agent.
5. **Justify every new agent by information, not role.** No unique information, no new agent.
6. **Measure pass^k, not pass^1.** tau-bench found frontier agents solved under 50% of retail tasks at pass^1 and under 25% at pass^8. Your demo is pass^1. Production is pass^k.

There is a quote from Sierra's Zack Reneau-Wedeen that captures the failure mode better than any benchmark: if you want a multi-agent system so one team can own one agent and another team owns another, "you're shipping your org chart."

Architecture should follow task structure. When it follows team structure instead, you get coordination cost with no coordination benefit - and a system that is slower, more expensive, and less reliable than the single loop you started with.

## What this means if you self-host

Running your own agent stack means you own these decisions directly. There is no vendor default to inherit, and no platform quietly absorbing the token multiplier.

That cuts both ways. You can ship the simple version and measure before committing to orchestration. You can put verification in a deterministic layer rather than trusting a summary. And you can log every handoff, which is the only way to find out which of the three failure categories is actually eating your success rate.

The tooling is the easy part. The discipline is deciding how little architecture your task actually needs.

**Related reading:** [OpenClaw 2.0 Release Analysis](/blog/openclaw-2-0-release-analysis/) covers the sessions, permissions, and multi-agent changes in v2026.8.1, and the [security policy generator](/tools/security-policy-generator/) helps you write down what an assistant is allowed to touch before you give it tools.
