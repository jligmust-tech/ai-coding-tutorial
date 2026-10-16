# Compare Different Solutions

## What you will learn

By the end of this chapter, you will be able to:

- compare alternatives using relevant criteria;
- distinguish trade-offs from defects;
- ask for evidence behind a recommendation; and
- choose an option that fits your constraints.

## Define the decision criteria

Different solutions can all be valid while optimizing different things. Decide which criteria matter before asking the assistant to choose.

<div class="prompt-box">
<p class="prompt-label">Prompt: define comparison criteria</p>
<p class="prompt-text">I am choosing between approaches for [task]. My constraints are [constraints]. Rank these criteria: [correctness, simplicity, performance, compatibility, reliability, ease of verification, or others]. Explain any conflict between the criteria before comparing solutions.</p>
</div>

A comparison without criteria often rewards whichever option sounds most polished.

## Compare on equal terms

Ask the assistant to evaluate each option using the same criteria, assumptions, and task conditions.

<div class="prompt-box">
<p class="prompt-label">Prompt: compare alternatives fairly</p>
<p class="prompt-text">Compare these approaches using the same criteria and assumptions. For each, describe benefits, limitations, dependencies, risks, and verification effort. Identify information that is missing and could change the comparison.</p>
</div>

If one option was assessed using different assumptions, ask for a consistent comparison before deciding.

## Separate facts from preference

A recommendation may depend on uncertain performance estimates, ecosystem familiarity, or subjective priorities. Ask the assistant to label those distinctions.

<div class="prompt-box">
<p class="prompt-label">Prompt: expose the basis of a recommendation</p>
<p class="prompt-text">For each comparison point, label it as a fact supported by the supplied evidence, an estimate, or a preference. State what evidence would be needed to confirm estimates, and explain which preferences depend on my priorities.</p>
</div>

Performance claims in particular may require measurement in your actual environment.

## Ask what would change the recommendation

A useful recommendation states its conditions. Ask what new information or changed constraint would lead to another choice.

<div class="prompt-box">
<p class="prompt-label">Prompt: test the recommendation</p>
<p class="prompt-text">Recommend an approach for my stated priorities. Then identify the assumptions your recommendation depends on, the strongest reason to choose a different option, and the new evidence or constraint that would change your choice.</p>
</div>

This guards against treating a conditional choice as a universal rule.

## Make a decision record

For consequential choices, record the criteria, assumptions, decision, and unresolved risks. This helps you revisit the choice when circumstances change.

<div class="prompt-box">
<p class="prompt-label">Prompt: summarize the decision</p>
<p class="prompt-text">Create a concise decision record with the task, constraints, criteria, options considered, selected approach, reasons, trade-offs, verification plan, and conditions that would trigger reconsideration. Mark unresolved claims clearly.</p>
</div>

## Practice: compare two approaches

Choose a low-risk task with at least two plausible approaches. Write your criteria first, compare both approaches on equal terms, then ask what evidence might change the recommendation.

<div class="prompt-box">
<p class="prompt-label">Prompt: check my choice</p>
<p class="prompt-text">Review my selected approach against the criteria I stated. Identify any criterion I overlooked, any comparison that uses unequal assumptions, and one realistic condition under which the other option would be better.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before choosing between solutions</p>
<ul>
<li>Have I stated constraints and ranked criteria?</li>
<li>Were options compared on equal terms?</li>
<li>Are facts, estimates, and preferences distinguishable?</li>
<li>Are risks, dependencies, and verification effort included?</li>
<li>Do I know what would change the recommendation?</li>
<li>Have I recorded important assumptions and trade-offs?</li>
</ul>
</div>
