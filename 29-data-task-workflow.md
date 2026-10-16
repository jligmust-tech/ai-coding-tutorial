# The Data-Task Workflow

## What you will learn

By the end of this chapter, you will be able to:

- define a data question and unit of observation;
- inspect quality before transforming data;
- ask for reproducible analysis steps; and
- verify results without hiding uncertainty.

## Define the question and data meaning

Start with the decision or question, the audience, the unit of observation, fields, units, and limitations.

<div class="prompt-box">
<p class="prompt-label">Prompt: define the data task</p>
<p class="prompt-text">The question is [question]. The intended audience is [audience]. One row represents [unit]. Important fields and units are [details]. The desired output is [output]. Identify ambiguities, quality risks, and information needed before analysis.</p>
</div>

## Inspect before transforming

Ask for checks on missingness, duplicates, keys, formats, units, ranges, and unexpected categories.

<div class="prompt-box">
<p class="prompt-label">Prompt: inspect data quality</p>
<p class="prompt-text">Design a quality inspection for this data. Check missing values, duplicates, key uniqueness, formats, units, ranges, and unexpected categories. Separate observed problems from risks that require confirmation, and prioritize the issues by impact.</p>
</div>

## Plan the transformation

Make joins, filters, summaries, exclusions, and missing-value decisions explicit before applying them.

<div class="prompt-box">
<p class="prompt-label">Prompt: plan the data workflow</p>
<p class="prompt-text">Propose a step-by-step transformation from the supplied data to the requested output. For each step, state the input, operation, expected effect, assumptions, and verification check. Do not silently choose how to handle ambiguous or missing values.</p>
</div>

## Check interpretation

A correct calculation may still answer the wrong question. Ask the assistant to separate observations, calculations, interpretations, and claims.

<div class="prompt-box">
<p class="prompt-label">Prompt: review the interpretation</p>
<p class="prompt-text">Review the planned result. Separate direct observations, calculated results, interpretations, and claims that require additional evidence. Identify what the summary may hide and what a reader could misunderstand.</p>
</div>

## Make the work reproducible

Record sources, transformations, decisions, assumptions, and verification results so the task can be repeated and reviewed.

<div class="prompt-box">
<p class="prompt-label">Prompt: close the data task</p>
<p class="prompt-text">Create a reproducibility record with source data, preparation steps, transformations, assumptions, exclusions, outputs, checks performed, unresolved issues, and instructions for reviewing a future run.</p>
</div>

## Practice: plan a synthetic data task

Describe a small synthetic table and a question it could answer. Adapt the prompts to inspect quality, plan a transformation, and review the interpretation. Manually check the expected row counts and one summary value before approving the plan. Keep proposed checks separate from completed checks in the reproducibility record.

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Data-task workflow</p>
<ul>
<li>Is the question and unit of observation clear?</li>
<li>Were data-quality issues inspected first?</li>
<li>Are transformations and missing-value decisions explicit?</li>
<li>Are observations separated from interpretation?</li>
<li>Are assumptions and limitations recorded?</li>
<li>Can the result be reproduced and checked?</li>
</ul>
</div>
