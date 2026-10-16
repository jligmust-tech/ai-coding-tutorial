# Start a Useful Coding Conversation

## What you will learn

By the end of this chapter, you will be able to:

- open a coding conversation with a clear goal;
- ask the assistant to clarify missing information;
- provide enough context without telling an unnecessary story; and
- request a plan before asking for a solution.

## Begin with the task

A coding conversation should begin with the result you want, not with a demand for a particular implementation. The assistant can then help you compare approaches instead of being locked into an unexamined solution.

A useful opening usually includes four pieces:

1. **Goal:** what you want to accomplish.
2. **Situation:** what you have now.
3. **Result:** what a successful outcome looks like.
4. **Limits:** what the assistant must preserve or avoid.

<div class="prompt-box">
<p class="prompt-label">Prompt: open a task</p>
<p class="prompt-text">I want to [goal]. At the moment, [current situation]. A successful result would [describe the result]. Please respect these limits: [constraints]. Before suggesting a solution, tell me what information is missing.</p>
</div>

## Ask questions before answers

When important details are missing, a fast answer can be less useful than a short clarification. Tell the assistant to ask questions first, and set a limit so the conversation stays manageable.

<div class="prompt-box">
<p class="prompt-label">Prompt: clarify first</p>
<p class="prompt-text">Before proposing a solution, ask up to five questions that would materially change your recommendation. Group the questions by importance. Do not ask for information that is not needed for this task.</p>
</div>

Answer the questions with facts, not guesses. If you do not know an answer, say so. The assistant can then offer alternatives instead of silently treating an assumption as a fact.

## Ask for a plan before a solution

A plan gives you a chance to catch a misunderstanding early. It also separates decisions about approach from the details of implementation.

<div class="prompt-box">
<p class="prompt-label">Prompt: plan first</p>
<p class="prompt-text">Based on the information below, propose a short plan with no more than five steps. For each step, state its purpose and what I should check. List assumptions separately. Do not make changes or provide the final solution yet.</p>
</div>

After reviewing the plan, you can approve it, correct it, or ask for alternatives.

<div class="prompt-box">
<p class="prompt-label">Prompt: compare plans</p>
<p class="prompt-text">Give me two reasonable approaches for [task]. Compare them for simplicity, reliability, ease of checking, and fit with my constraints. Recommend one, but explain when the other would be better.</p>
</div>

## State your experience level

The same answer can be helpful or frustrating depending on your background. Say whether you want a beginner explanation, a concise reminder, or a detailed technical discussion.

<div class="prompt-box">
<p class="prompt-label">Prompt: set the level</p>
<p class="prompt-text">Explain this for someone who understands [known topics] but is new to [new topic]. Use precise language, define unfamiliar terms, and pause after the main idea to ask whether I want more detail.</p>
</div>

Your experience level is not a permanent label. Change it when the task changes. You might want a beginner explanation of a new library but a concise answer about a familiar language feature.

## Keep the conversation on track

When a conversation becomes long, restate the current task. Ask the assistant to separate decisions from open questions and to stop carrying irrelevant details forward.

<div class="prompt-box">
<p class="prompt-label">Prompt: reset the task</p>
<p class="prompt-text">Pause and summarize the current task, confirmed facts, decisions, assumptions, unresolved questions, and next step. Remove details that are no longer relevant. Do not propose new changes until I confirm the summary.</p>
</div>

If the assistant has misunderstood the task, correct it directly. Do not keep adding details to a wrong direction.

<div class="prompt-box">
<p class="prompt-label">Prompt: correct a misunderstanding</p>
<p class="prompt-text">Your previous response misunderstood [specific point]. The actual requirement is [correct requirement]. Re-evaluate the approach using this correction. Do not preserve a decision that depended on the earlier misunderstanding.</p>
</div>

## Practice: start a conversation

Choose a real but low-risk coding task. Write a first request using the four pieces: goal, situation, result, and limits. Ask for questions and a plan, not a final answer.

After the assistant responds, check:

- Did it understand the desired result?
- Did it ask only useful questions?
- Did it identify assumptions?
- Does its plan preserve your limits?

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">A strong opening</p>
<ul>
<li>States the goal before naming a solution.</li>
<li>Describes the current situation.</li>
<li>Defines what success means.</li>
<li>States important limits.</li>
<li>Invites clarification before implementation.</li>
<li>Requests a plan that can be reviewed.</li>
</ul>
</div>
