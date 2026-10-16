# Choose the Right Model

## What you will learn

By the end of this chapter, you will be able to:

- match a model choice to a task;
- compare models using a repeatable evaluation;
- account for speed, cost, and context limits; and
- avoid assuming that one model is best for every coding task.

## Match capability to the task

A quick clarification, a long document review, a difficult debugging question, and a multimodal task may place different demands on a model. Start by describing the task, its difficulty, the information it needs, and the consequence of a mistake.

<div class="prompt-box">
<p class="prompt-label">Prompt: identify model requirements</p>
<p class="prompt-text">For this task, identify the capabilities that matter: reasoning depth, context capacity, tool use, speed, cost, modality, and reliability. Rank the requirements and explain which are essential versus convenient.</p>
</div>

Model names and capabilities change. Consult current provider and Pi documentation for availability, limits, and configuration details.

## Use a small comparison task

When choosing between available models, compare them on the same representative task with the same instructions and context. Do not infer broad quality from one result.

<div class="prompt-box">
<p class="prompt-label">Prompt: design a model comparison</p>
<p class="prompt-text">Design a fair comparison of these available models for [task type]. Keep the prompt, context, and evaluation criteria consistent. Score correctness, instruction following, clarity, uncertainty handling, latency, and cost. Explain what this small comparison can and cannot establish.</p>
</div>

Avoid sending sensitive material to a model until you understand the provider’s data handling and your organization’s rules.

## Consider total task cost

A faster response may require more follow-up. A more detailed answer may require more review. Compare the full effort needed to reach a verified result, not only the initial response time.

<div class="prompt-box">
<p class="prompt-label">Prompt: compare total effort</p>
<p class="prompt-text">Compare these model choices for the complete task, including initial response, likely follow-up, verification effort, latency, and cost. State which estimate is uncertain and what measurement would improve the comparison.</p>
</div>

## Choose proportionately

Use the least costly and complex option that can meet the task’s requirements reliably, and escalate when evidence shows the task needs more capability. High-impact work may require stronger independent review regardless of model choice.

<div class="prompt-box">
<p class="prompt-label">Prompt: choose and define escalation</p>
<p class="prompt-text">Recommend a model for [task] based on the ranked requirements. State the limitations to watch for, the checks required before relying on the result, and what difficulty signal should cause me to try another model or seek human expertise.</p>
</div>

## Practice: create a personal comparison

Choose a non-sensitive task you perform repeatedly. Compare two available options using the same task, context, and scoring criteria. Record limitations and re-evaluate when models or requirements change.

<div class="prompt-box">
<p class="prompt-label">Prompt: document a model choice</p>
<p class="prompt-text">Create a short record of this model choice: task, requirements, options tested, consistent evaluation method, results, limitations, privacy considerations, and conditions for reassessment.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before choosing a model</p>
<ul>
<li>Have I matched model capabilities to task needs?</li>
<li>Are availability and limits checked in current documentation?</li>
<li>Were alternatives compared on the same task?</li>
<li>Have latency, cost, and verification effort been considered?</li>
<li>Have I checked privacy and data-handling requirements?</li>
<li>Do I know when to escalate or reassess?</li>
</ul>
</div>
