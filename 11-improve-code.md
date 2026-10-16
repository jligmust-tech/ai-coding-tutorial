# Improve Code

## What you will learn

By the end of this chapter, you will be able to:

- define what “improvement” means for a task;
- ask for changes without silently changing behavior;
- compare improvement options; and
- choose the smallest useful improvement.

## Define the improvement

“Make this better” can mean clearer, faster, shorter, safer, easier to maintain, or easier to use. Choose the property you want to improve and describe how you will recognize progress.

<div class="prompt-box">
<p class="prompt-label">Prompt: define better</p>
<p class="prompt-text">I want to improve this code primarily for [clarity, maintainability, performance, reliability, readability, or another goal]. Success means [observable improvement]. Preserve [behavior, interface, output, and constraints]. Identify trade-offs before suggesting changes.</p>
</div>

If you have several goals, rank them. An approach that improves speed may make the code harder to understand, and an approach that shortens the material may make the behavior less visible.

## Request an assessment before a rewrite

Ask the assistant to identify problems and prioritize them before asking it to apply changes.

<div class="prompt-box">
<p class="prompt-label">Prompt: assess first</p>
<p class="prompt-text">Review this code for the stated improvement goal. Identify the three most important issues, explain their impact, and rank them by benefit and risk. Do not rewrite the code yet.</p>
</div>

An assessment helps you reject cosmetic changes that do not address the actual difficulty.

## Ask for the smallest useful improvement

Small improvements are easier to review and less likely to hide unrelated changes.

<div class="prompt-box">
<p class="prompt-label">Prompt: make a focused improvement</p>
<p class="prompt-text">Suggest the smallest change that would produce a meaningful improvement for [goal]. Preserve current behavior and interfaces. Explain what becomes clearer or safer, what trade-off remains, and how I can verify that behavior was preserved.</p>
</div>

A small improvement is not always the final improvement. It is a controlled step that gives you evidence for the next decision.

## Compare improvement options

When the trade-off matters, ask for alternatives using criteria that reflect your actual situation.

<div class="prompt-box">
<p class="prompt-label">Prompt: compare improvements</p>
<p class="prompt-text">Compare these possible improvements for [goal]. Evaluate clarity, maintainability, performance, compatibility, complexity, and ease of verification. Recommend the option that best fits [priority], and state what it sacrifices.</p>
</div>

Do not ask for “the best” option without defining the criteria. There is rarely a best option independent of context.

## Protect behavior during simplification

Shorter code is not automatically clearer or safer. Ask the assistant to state what behavior it checked while simplifying.

<div class="prompt-box">
<p class="prompt-label">Prompt: simplify carefully</p>
<p class="prompt-text">Suggest a simplification that preserves the observable behavior. List the assumptions that make the simplification safe, identify cases where it would not be safe, and provide a verification checklist. Do not remove handling for unusual inputs merely to make the result shorter.</p>
</div>

## Practice: choose an improvement

Choose a small piece of code that feels difficult to read or maintain. Ask for an assessment and two alternatives. Select one based on explicit criteria rather than on length alone.

<div class="prompt-box">
<p class="prompt-label">Prompt: decide deliberately</p>
<p class="prompt-text">Help me choose whether to improve this code now. Identify the current problem, the likely benefit, the risks of changing it, and the cost of leaving it as it is. Recommend action, but show the reasoning and uncertainty.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before accepting an improvement</p>
<ul>
<li>Have I defined what should improve?</li>
<li>Have I stated how progress will be recognized?</li>
<li>Have I requested an assessment before a rewrite?</li>
<li>Are trade-offs and risks visible?</li>
<li>Does the change preserve required behavior?</li>
<li>Can I verify the claimed improvement?</li>
</ul>
</div>
