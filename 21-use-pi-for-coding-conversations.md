# Use pi for Coding Conversations

## What you will learn

By the end of this chapter, you will be able to:

- use pi as a focused coding conversation environment;
- carry useful instructions across turns;
- inspect proposed actions before allowing them; and
- keep a conversation organized around a clear task.

## Treat pi as a conversation workspace

Pi can support coding work through conversation, model selection, and available tools. The exact capabilities depend on your installation and configuration. Check the documentation for your installed version rather than assuming every environment has the same features.

<div class="note-box">
<p class="note-label">Pi is an example</p>
<p>This chapter uses Pi as one example of a coding conversation workspace. The approach applies to any AI coding assistant; adapt the tool-specific details to the agent you use.</p>
</div>

Start with a narrow task and state whether you want an explanation, a plan, a review, or a change proposal.

<div class="prompt-box">
<p class="prompt-label">Prompt: set the conversation mode</p>
<p class="prompt-text">For this task, act as a [tutor, code reviewer, debugging partner, or planning assistant]. My goal is [goal]. First [explain, ask clarifying questions, inspect, or propose a plan]. Do not make changes or use tools until I explicitly ask you to.</p>
</div>

A clearly stated mode helps prevent an explanation request from turning into an unsolicited implementation.

## Use persistent instructions carefully

Some Pi setups support reusable instructions or project-specific guidance. Keep persistent guidance short, stable, and relevant. Do not put temporary task details in instructions that will affect unrelated conversations.

<div class="prompt-box">
<p class="prompt-label">Prompt: define reusable preferences</p>
<p class="prompt-text">For coding conversations in this project, follow these stable preferences: [language, explanation level, scope limits, verification expectations, and privacy constraints]. Treat task-specific requirements as separate instructions. If guidance conflicts, ask me before proceeding.</p>
</div>

Review saved instructions from time to time. Remove outdated preferences and avoid storing secrets or personal data.

## Keep task context explicit

Even when a tool has access to project material, state the intended task and its boundaries. Access to files does not mean every file is relevant.

<div class="prompt-box">
<p class="prompt-label">Prompt: limit the work area</p>
<p class="prompt-text">Work only on [task or named area]. Relevant context is [files or information]. Do not inspect unrelated or sensitive material. Before making changes, summarize the files or areas you intend to use and wait for my confirmation.</p>
</div>

## Review tool actions

When a tool can inspect or change files, consider the effect before approving an action. Ask for a summary, affected area, and recovery plan for consequential operations.

<div class="prompt-box">
<p class="prompt-label">Prompt: explain a tool action</p>
<p class="prompt-text">Before using a tool for this action, explain what it will read or change, why it is needed, what could go wrong, and how I can review or reverse the result. Stop if the action affects anything outside the agreed scope.</p>
</div>

Pi does not ask for approval before every tool call. It runs with the operating-system permissions of the account that starts it; the working directory does not confine file access. A request to wait is a conversational instruction, not an enforced permission barrier. For untrusted or unattended work, use an appropriately isolated environment and expose only necessary files and services.

Use the controls provided by your actual Pi setup. Review the official [terminal usage](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/usage.md) and [security guidance](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/security.md), checking them against your installed version.

## Practice: run a bounded conversation

Choose a small, non-sensitive coding question. Set the assistant’s role, define a work boundary, ask for a plan, and review it before requesting any action.

<div class="prompt-box">
<p class="prompt-label">Prompt: bounded Pi workflow</p>
<p class="prompt-text">For this conversation, help with [small task]. Explain first, inspect only [relevant material], and make no changes until I approve a plan. Report uncertainties and distinguish observations from suggestions.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before using pi for a task</p>
<ul>
<li>Have I stated the task and requested mode?</li>
<li>Are reusable preferences separate from temporary instructions?</li>
<li>Have I limited relevant context and work areas?</li>
<li>Do I understand the available tools and permissions?</li>
<li>Will I review consequential actions before approving them?</li>
<li>Have I checked documentation for my installed version?</li>
</ul>
</div>
