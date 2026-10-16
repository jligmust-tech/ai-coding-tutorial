# Quick Reference for pi

This appendix is a task-oriented reference for coding conversations in Pi. Pi capabilities, model availability, configuration, and keybindings can vary by installation and version. Consult the documentation installed with your version before relying on a feature.

## Start a focused conversation

State the task, desired help, relevant context, constraints, and verification method.

<div class="prompt-box">
<p class="prompt-label">Prompt: start a coding task</p>
<p class="prompt-text">My task is [task]. I need [explanation, plan, draft, review, diagnosis, or another kind of help]. Relevant context is [context]. Constraints are [constraints]. First [requested first step]. Do not use tools or make changes until I approve the plan.</p>
</div>

## Useful conversation modes

Choose a mode that matches your immediate need:

- **Explain:** understand a concept, file, error, or change.
- **Plan:** identify steps, assumptions, risks, and checks before acting.
- **Write:** produce a bounded draft after requirements are clear.
- **Modify:** change a defined area while preserving specified behavior.
- **Review:** compare a result with requirements and evidence.
- **Debug:** investigate a failure through ranked hypotheses and checks.
- **Recover:** stop using bad assumptions and restore a reliable task state.

## Scope the context

Use project-specific instructions and context carefully. Keep stable preferences separate from temporary task details. Exclude secrets, credentials, and unrelated private material.

<div class="prompt-box">
<p class="prompt-label">Prompt: scope a Pi session</p>
<p class="prompt-text">For this session, work only on [task and approved area]. Relevant material is [material]. Exclude [sensitive or unrelated material]. State what you need to inspect, summarize proposed actions, and wait for approval before consequential changes.</p>
</div>

## Select a model

Choose from models available in your Pi configuration. Compare current capabilities and limits using provider and Pi documentation. Match the model to reasoning difficulty, context needs, tool use, speed, cost, privacy, and verification requirements.

<div class="prompt-box">
<p class="prompt-label">Prompt: choose among available models</p>
<p class="prompt-text">For [task], identify the model capabilities that matter most. Compare the available options using the same representative prompt and criteria. Include limitations, privacy considerations, cost, latency, and the checks required before relying on an answer.</p>
</div>

## Manage long work

When a conversation or file becomes large, divide the task, summarize confirmed facts and decisions, and verify a handoff before continuing.

<div class="prompt-box">
<p class="prompt-label">Prompt: prepare a handoff</p>
<p class="prompt-text">Prepare a handoff for a new Pi conversation with goal, confirmed facts, constraints, decisions, evidence, unresolved questions, and next step. Remove repetition, preserve details that could change the result, and ask the new conversation to verify the handoff before continuing.</p>
</div>

## Approve tool use

Before allowing an action that can read sensitive material, modify files, communicate externally, incur cost, or create irreversible effects, request a preview and review it. Use actual environment permissions and safeguards as well as conversation instructions.

<div class="prompt-box">
<p class="prompt-label">Prompt: approve a tool action</p>
<p class="prompt-text">Explain the proposed tool action, exact scope, affected information, possible consequences, recovery plan, and verification. Show a preview and wait for my specific approval. Afterward, report completed, skipped, partial, and uncertain effects.</p>
</div>

## Useful Pi habits

- Keep requests narrow enough to review.
- Ask for a plan before a broad change.
- Ask the assistant to distinguish observations from inferences.
- Preserve a recoverable state before consequential operations.
- Treat model output as a proposal until verified.
- Record successful prompt patterns and their limitations.
- Recheck version-sensitive features in current documentation.

## Where to check Pi details

Consult the official [terminal usage guide](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/usage.md), [model guide](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/models.md), and [security guide](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/security.md). Online documentation may describe a newer release than yours; compare it with your installed documentation.

Pi does not require approval before every tool call. Its working folder is not a sandbox, and instructions to wait do not enforce access limits. Restrict access through operating-system permissions or an isolated environment, not only through prompts.

## Quick safety checklist

<div class="checklist-box">
<p class="checklist-label">Before relying on a Pi coding conversation</p>
<ul>
<li>Is the task and mode clear?</li>
<li>Is relevant context bounded and safe to share?</li>
<li>Is the selected model appropriate for the task?</li>
<li>Are assumptions, uncertainty, and verification visible?</li>
<li>Have consequential tool actions been previewed and approved?</li>
<li>Can I recover if the result is wrong or incomplete?</li>
</ul>
</div>
