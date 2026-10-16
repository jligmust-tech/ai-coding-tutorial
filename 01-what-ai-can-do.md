# What AI Can Do for Coding

## What you will learn

By the end of this chapter, you will be able to:

- distinguish common roles for an AI coding assistant;
- choose a suitable request for each role;
- recognize when an answer needs verification; and
- turn a vague request into a useful first conversation.

## AI has several coding roles

An AI assistant is not only a code generator. It can support different parts of a coding task. Naming the role you want makes your request more precise.

### Tutor

Use the assistant as a tutor when you are learning a concept, library, command, or error message. Ask it to match your experience level and to check your understanding.

<div class="prompt-box">
<p class="prompt-label">Prompt: learn a concept</p>
<p class="prompt-text">I am learning [topic]. Explain it for someone with [experience level]. Use a small, concrete example in words, identify two common misunderstandings, and end with three questions I can answer to check my understanding.</p>
</div>

### Explainer

Use the assistant to understand code you already have. Start with the purpose and flow before asking about individual lines. This helps you build a map of the material instead of collecting isolated explanations.

<div class="prompt-box">
<p class="prompt-label">Prompt: understand existing code</p>
<p class="prompt-text">Explain this code at a high level first. Identify its inputs, main steps, outputs, external dependencies, and assumptions. Do not suggest changes yet. Ask me any question needed to avoid guessing about its purpose.</p>
</div>

### Writer

Use the assistant to create a first draft when you can describe the desired behavior. A useful request states what goes in, what should come out, and what must remain true.

<div class="prompt-box">
<p class="prompt-label">Prompt: draft a solution</p>
<p class="prompt-text">I need to accomplish [task]. The input is [input]. The expected result is [result]. The solution must [constraints]. First propose an approach and list your assumptions. Do not write the final solution until I confirm the approach.</p>
</div>

### Editor

Use the assistant to improve clarity, organization, or maintainability without changing behavior. State what kind of improvement you want and explicitly protect behavior that must remain unchanged.

<div class="prompt-box">
<p class="prompt-label">Prompt: improve without changing behavior</p>
<p class="prompt-text">Review this code for clarity and maintainability. Suggest the smallest useful improvements, but preserve its current behavior and interfaces. For each suggestion, explain the benefit and any possible risk. Do not apply changes yet.</p>
</div>

### Debugging partner

Use the assistant to reason about a problem, not merely to guess a replacement. Give it the expected behavior, actual behavior, and evidence you have collected.

<div class="prompt-box">
<p class="prompt-label">Prompt: investigate a problem</p>
<p class="prompt-text">The expected behavior is [expected behavior]. The actual behavior is [actual behavior]. This is the complete error message or observed evidence: [evidence]. List the most likely causes in order, explain what evidence would distinguish them, and suggest one safe diagnostic step for each.</p>
</div>

### Reviewer

Use the assistant to inspect a proposed change against requirements. A review is more useful when the requirements are explicit and the assistant is asked to report uncertainty.

<div class="prompt-box">
<p class="prompt-label">Prompt: review a change</p>
<p class="prompt-text">Review this proposed change against these requirements: [requirements]. Look for incorrect behavior, missing edge cases, unintended changes, and unclear assumptions. Report findings by severity. If you are uncertain, say what information is missing instead of guessing.</p>
</div>

## What AI cannot guarantee

An answer can be fluent, detailed, and wrong. An assistant may misunderstand the task, invent a function or option, use an outdated convention, miss an edge case, or produce a result that looks reasonable but does not answer the real question.

Treat the answer as a proposal. Your responsibility is to check whether it:

- addresses the stated task;
- matches the inputs and expected outputs;
- respects the constraints;
- handles important unusual cases; and
- works in your actual environment.

A successful run is useful evidence, but it is not proof of correctness. A result can be wrong without producing an error.

## Practice: identify the role

Choose a small coding task you already have. Before asking for help, complete these sentences:

- My goal is: `[goal]`
- The assistant should act as a: `[tutor / explainer / writer / editor / debugging partner / reviewer]`
- The information it needs is: `[context]`
- I will check the answer by: `[verification method]`

Then ask:

<div class="prompt-box">
<p class="prompt-label">Prompt: choose the right kind of help</p>
<p class="prompt-text">I need help with [task]. Before answering, identify whether this is mainly a learning, explanation, writing, editing, debugging, or review task. Tell me what information you need, what you will assume, and how I should verify the result.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before accepting an answer</p>
<ul>
<li>Have I told the assistant what role I want it to play?</li>
<li>Have I described the expected result?</li>
<li>Has it stated its assumptions?</li>
<li>Have I checked the answer against the original task?</li>
<li>Have I tested an important normal case and an unusual case?</li>
</ul>
</div>
