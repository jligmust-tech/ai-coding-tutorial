# The Improve-and-Simplify Workflow

## What you will learn

By the end of this chapter, you will be able to:

- define the improvement you want;
- assess before changing;
- compare simplifications and their trade-offs; and
- verify that behavior remains correct.

## Define success

Choose the property to improve and how you will recognize progress. Do not use “better” as the only requirement.

<div class="prompt-box">
<p class="prompt-label">Prompt: define improvement success</p>
<p class="prompt-text">I want to improve this code for [goal]. Success means [observable criterion]. Preserve [behavior and interfaces]. Assess the current problems first and identify trade-offs before suggesting changes.</p>
</div>

## Prioritize the problem

Ask for an assessment that separates meaningful risks from cosmetic preferences.

<div class="prompt-box">
<p class="prompt-label">Prompt: prioritize improvements</p>
<p class="prompt-text">Identify the three most important opportunities to improve this code for [goal]. Rank them by benefit, risk, and verification effort. Do not rewrite the code yet.</p>
</div>

## Compare focused options

A simplification may reduce length while making assumptions less visible. Compare options on the criteria that matter.

<div class="prompt-box">
<p class="prompt-label">Prompt: compare improvement options</p>
<p class="prompt-text">Compare two focused improvement options for [goal]. For each, explain benefits, trade-offs, assumptions, preserved behavior, and verification checks. Recommend one only in relation to my stated priorities.</p>
</div>

## Apply one controlled change

Ask for the smallest useful improvement and a clear explanation of what was deliberately left alone.

<div class="prompt-box">
<p class="prompt-label">Prompt: make one improvement</p>
<p class="prompt-text">Apply only the selected improvement. Keep unrelated behavior unchanged. Report the affected area, the improvement achieved, remaining limitations, and any assumptions that make the change safe.</p>
</div>

## Verify and reassess

Check the original behavior and the property you intended to improve. A shorter or faster result is not necessarily a safer or clearer one.

<div class="prompt-box">
<p class="prompt-label">Prompt: verify the improvement</p>
<p class="prompt-text">Create checks for preserved behavior and the stated improvement goal. Identify evidence that would show the change made things worse, not better. Recommend whether to keep, revise, or revert it.</p>
</div>

## Practice: assess a simplification

Choose a small piece of code and name one improvement goal. Request the assessment and alternatives without applying changes. Select one option, explain its trade-off in your own words, and ask for checks that could reveal a regression as well as an improvement.

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Improve-and-simplify workflow</p>
<ul>
<li>Is improvement defined by an observable goal?</li>
<li>Was the current problem assessed before changing?</li>
<li>Were options compared using relevant criteria?</li>
<li>Was one focused change applied?</li>
<li>Were assumptions and trade-offs reported?</li>
<li>Were both preserved behavior and improvement verified?</li>
</ul>
</div>
