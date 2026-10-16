# The Parts of a Good Coding Prompt

## What you will learn

By the end of this chapter, you will be able to:

- construct a prompt from reusable parts;
- distinguish requirements from preferences;
- describe inputs and outputs clearly; and
- request an answer that is easy to verify.

## A prompt is a small specification

A good coding prompt is not a performance. It is a compact specification for a conversation. It tells the assistant what problem you are solving, what information it may use, what result you want, and how the result should be constrained.

The six parts in this chapter are:

1. task;
2. context;
3. input;
4. expected output;
5. constraints; and
6. verification.

Not every prompt needs every part. The more consequential or ambiguous the task, the more useful the complete structure becomes.

## Task

State the action you want the assistant to help with. Use a concrete verb such as explain, compare, identify, draft, modify, diagnose, review, or summarize.

<div class="prompt-box">
<p class="prompt-label">Prompt part: task</p>
<p class="prompt-text">Help me identify why [specific behavior] occurs and suggest a way to investigate it without changing the rest of the task.</p>
</div>

Avoid task descriptions such as “make this better” until you define what better means. If several outcomes are possible, ask the assistant to name them before proceeding.

## Context

Context explains why the task matters and what is already true. Include the relevant environment, previous decisions, and surrounding behavior. Leave out details that cannot affect the answer.

<div class="prompt-box">
<p class="prompt-label">Prompt part: context</p>
<p class="prompt-text">This is part of [project or activity]. It is used by [audience] to [purpose]. The surrounding process already [known behavior]. The change must fit with [existing convention or limitation].</p>
</div>

Context is not the same as a complete history of the project. If a detail cannot change the recommendation, it probably does not belong in the first request.

## Input

Describe what the assistant will receive: files, values, records, messages, screenshots, or an existing piece of code. Mention the important shape and variation of that input.

<div class="prompt-box">
<p class="prompt-label">Prompt part: input</p>
<p class="prompt-text">The input consists of [type of material]. Each item contains [important fields or features]. Some items may be [missing, empty, duplicated, unusually large, or invalid].</p>
</div>

If you have a small representative example, explain what it represents. Do not assume that one clean example describes every input.

## Expected output

Describe what the assistant should produce and what a correct result should contain. If there are several outputs, list them separately.

<div class="prompt-box">
<p class="prompt-label">Prompt part: output</p>
<p class="prompt-text">The result should [desired behavior]. It should provide [required information] and should not [unwanted behavior]. Show me how I can tell whether the result is correct.</p>
</div>

An output description should be observable. “A useful result” is weaker than “a result that preserves one record per item, reports rejected items, and makes the reason for each rejection visible.”

## Constraints

Constraints are requirements the solution must respect. Preferences are things you would like if they do not conflict with requirements. Make the distinction explicit.

<div class="prompt-box">
<p class="prompt-label">Prompt part: constraints</p>
<p class="prompt-text">These are requirements: [must-have conditions]. These are preferences: [nice-to-have conditions]. Do not [prohibited action]. If the requirements conflict, stop and explain the conflict instead of choosing silently.</p>
</div>

Useful constraints can include simplicity, compatibility, performance, readability, privacy, file preservation, or limits on changing unrelated material.

## Verification

Verification tells the assistant how you will judge its answer. It also forces the prompt to define evidence instead of relying on confidence.

<div class="prompt-box">
<p class="prompt-label">Prompt part: verification</p>
<p class="prompt-text">After proposing the solution, list the checks I should perform. Include one normal case, one boundary case, and one case that should be rejected or reported. State what result each check should produce.</p>
</div>

Verification is not an invitation to invent evidence. Ask the assistant to distinguish what it knows from what you must test yourself.

## Assemble the parts

Use this template when a task is unfamiliar or important:

<div class="prompt-box">
<p class="prompt-label">Prompt template</p>
<p class="prompt-text">Task: [what I need help doing]. Context: [why this matters and what is already true]. Input: [what the task receives]. Expected output: [what success looks like]. Requirements: [must-have conditions]. Preferences: [nice-to-have conditions]. Please state your assumptions, propose an approach, and give me a verification checklist. Do not make changes until I confirm the approach.</p>
</div>

For a simple task, shorten the template. Good prompting is not about adding words; it is about including the information that changes the answer.

## Practice: strengthen a vague prompt

Start with a vague request such as “Help me fix this.” Rewrite it using at least four parts of the template. Then ask the assistant:

<div class="prompt-box">
<p class="prompt-label">Prompt: inspect the request</p>
<p class="prompt-text">Review my request as a coding task. Identify missing task, context, input, output, constraint, and verification information. Ask only the questions whose answers could change your recommendation.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before sending a detailed prompt</p>
<ul>
<li>Is the task expressed as a concrete action?</li>
<li>Does the context explain the relevant situation?</li>
<li>Have I described the input and its important variation?</li>
<li>Can I recognize the expected output?</li>
<li>Have I separated requirements from preferences?</li>
<li>Have I said how the answer will be checked?</li>
</ul>
</div>
