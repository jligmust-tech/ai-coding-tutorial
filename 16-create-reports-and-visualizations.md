# Create Reports and Visualizations

## What you will learn

By the end of this chapter, you will be able to:

- turn a question into a reporting plan;
- choose a visualization based on the question and data;
- ask AI to improve clarity without exaggerating conclusions; and
- check whether a report is reproducible and understandable.

## Start with the question

A report or chart should answer a question for a specific audience. Describe the decision or understanding the reader needs, not only the type of graphic you have in mind.

<div class="prompt-box">
<p class="prompt-label">Prompt: define a reporting question</p>
<p class="prompt-text">The audience is [audience]. They need to understand or decide [question or decision]. The available information is [data and limits]. Recommend a report structure and explain what each section should help the reader understand. Do not choose a chart before clarifying the question.</p>
</div>

A chart chosen before the question can make a convenient measure look more important than it is.

## Choose a visualization deliberately

Ask the assistant to compare visualization choices using the relationship you want readers to see.

<div class="prompt-box">
<p class="prompt-label">Prompt: choose a chart</p>
<p class="prompt-text">Recommend a visualization for showing [comparison, change over time, distribution, relationship, composition, or location]. Explain why it fits the question, what it may hide, which variables belong on each visual element, and what alternative would be suitable if the data has [important limitation].</p>
</div>

The recommendation should include limitations. A familiar chart is not automatically the clearest chart.

## Improve communication

Ask AI to review labels, units, ordering, scale, annotations, and surrounding explanation. Request clarity improvements without changing the underlying result.

<div class="prompt-box">
<p class="prompt-label">Prompt: improve a report or figure</p>
<p class="prompt-text">Review this report or figure description for clarity. Check the title, labels, units, ordering, scale, color meaning, annotations, accessibility, and explanation of uncertainty. Suggest changes that improve understanding without changing the underlying data or overstating the conclusion.</p>
</div>

A clear presentation should make important limitations visible rather than hiding them in small text.

## Separate observations from conclusions

Ask the assistant to distinguish what the data displays from what someone might infer. This prevents a visual pattern from being presented as a proven explanation.

<div class="prompt-box">
<p class="prompt-label">Prompt: separate evidence and interpretation</p>
<p class="prompt-text">Review this report text. Separate direct observations, calculations, interpretations, and claims that require additional evidence. Identify language that sounds more certain than the available information supports and suggest more precise wording.</p>
</div>

The assistant can improve wording, but it cannot supply evidence that the data does not contain.

## Make the report reproducible

A report is easier to trust when someone can identify its inputs, transformations, assumptions, and generation steps.

<div class="prompt-box">
<p class="prompt-label">Prompt: check reproducibility</p>
<p class="prompt-text">Create a reproducibility checklist for this report. Include source data, preparation steps, decisions, assumptions, package or tool requirements, generated outputs, and the checks needed to confirm that a future run produces the intended result.</p>
</div>

If a result depends on a manual decision, record that decision and the reason for it.

## Practice: plan a small report

Choose a question with synthetic or non-sensitive data. Ask the assistant to define the audience and question, recommend a visualization, review the wording, and create a reproducibility checklist.

<div class="prompt-box">
<p class="prompt-label">Prompt: review the complete report plan</p>
<p class="prompt-text">Review my report plan for question clarity, audience fit, visualization choice, unsupported claims, accessibility, uncertainty, and reproducibility. Identify the most important revision before I prepare the final report.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before sharing a report</p>
<ul>
<li>Does the report answer a clear question for a defined audience?</li>
<li>Does the visualization fit the relationship being shown?</li>
<li>Are labels, units, scales, and uncertainty clear?</li>
<li>Are observations separated from interpretations?</li>
<li>Are claims supported by the available evidence?</li>
<li>Can another person understand how the result was produced?</li>
</ul>
</div>
