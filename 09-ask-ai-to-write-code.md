# Ask AI to Write Code

## What you will learn

By the end of this chapter, you will be able to:

- describe a coding task without prescribing an unclear solution;
- request a plan before a draft;
- make assumptions visible; and
- ask for a result that can be checked.

## Describe the desired behavior

A request to “write code” is incomplete unless the assistant knows what the code should do. Describe the behavior from the user’s or task’s point of view before discussing implementation details.

<div class="prompt-box">
<p class="prompt-label">Prompt: describe the behavior</p>
<p class="prompt-text">I need a solution that [describe the desired behavior]. It will be used when [situation]. It should accept [input] and produce [expected output]. Describe the behavior in your own words and ask questions about anything ambiguous before proposing an approach.</p>
</div>

A behavior description is more durable than a request for a particular function, package, or technique. If you already have a preferred technique, label it as a preference rather than a requirement.

## Define requirements and preferences

Requirements must be satisfied. Preferences are useful when they do not conflict with correctness, compatibility, or clarity.

<div class="prompt-box">
<p class="prompt-label">Prompt: separate requirements</p>
<p class="prompt-text">These are the requirements: [must-have conditions]. These are preferences: [preferred style, tool, or approach]. If a preference conflicts with a requirement, follow the requirement and explain the conflict.</p>
</div>

This prevents an assistant from treating every suggestion as equally important.

## Ask for an approach first

A plan gives you an opportunity to correct a misunderstanding before the assistant produces a large draft.

<div class="prompt-box">
<p class="prompt-label">Prompt: plan before drafting</p>
<p class="prompt-text">Before writing the solution, propose an approach in no more than five steps. Include the main decisions, assumptions, important edge cases, and how I can verify the result. Do not draft the final answer yet.</p>
</div>

Review the plan for missing cases and unnecessary complexity. Approve it only after it reflects the task you actually want.

## Request a useful delivery

Once the approach is clear, specify how you want the answer organized. Ask the assistant to explain decisions and identify anything that remains uncertain.

<div class="prompt-box">
<p class="prompt-label">Prompt: request a draft</p>
<p class="prompt-text">Using the approved approach, provide the solution and a concise explanation of each major decision. State any assumptions, identify limitations, and give me a verification checklist. Do not change unrelated behavior or introduce dependencies without explaining why.</p>
</div>

The requested explanation is part of the deliverable. It helps you review the result instead of accepting an opaque answer.

## Ask for alternatives when the choice matters

There may be several valid approaches. Ask for alternatives before implementation when simplicity, speed, compatibility, or maintainability could lead to different choices.

<div class="prompt-box">
<p class="prompt-label">Prompt: compare before choosing</p>
<p class="prompt-text">Give me two possible approaches for [task]. Compare them for simplicity, reliability, performance, compatibility, and ease of verification. Recommend one for my situation and state what new information would change the recommendation.</p>
</div>

Do not request many alternatives merely to create a longer answer. Compare alternatives when the decision has meaningful consequences.

## Practice: turn a goal into a writing request

Take a small coding task and write down its input, expected result, requirements, preferences, and verification method. Ask the assistant to inspect the request before drafting.

<div class="prompt-box">
<p class="prompt-label">Prompt: inspect before writing</p>
<p class="prompt-text">Review my coding request for ambiguity and missing requirements. Identify assumptions that could change the solution, ask only the necessary questions, and suggest a verification plan. Do not write the solution yet.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before asking AI to write</p>
<ul>
<li>Is the desired behavior clear?</li>
<li>Are inputs and expected outputs described?</li>
<li>Are requirements separate from preferences?</li>
<li>Have I requested a plan first?</li>
<li>Are important edge cases identified?</li>
<li>Can I verify the proposed result?</li>
</ul>
</div>
