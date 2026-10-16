# Work with Tables and Data

## What you will learn

By the end of this chapter, you will be able to:

- describe the structure and meaning of a table;
- ask AI to inspect data quality before transforming it;
- reason about combining and summarizing records; and
- verify counts, keys, and units.

## Describe the table

A table is more than rows and columns. Explain what one row represents, what each field means, which values are allowed, and which fields identify a record.

<div class="prompt-box">
<p class="prompt-label">Prompt: describe a table</p>
<p class="prompt-text">Review this table description. One row is intended to represent [unit of observation]. The important fields are [fields and meanings]. The identifier is [identifier or unknown]. Expected values and units are [details]. Identify ambiguities and data-quality risks before suggesting transformations.</p>
</div>

If you cannot say what one row represents, summaries and joins may not mean what you think they mean.

## Inspect quality before analysis

Ask for a structured inspection of missing values, duplicates, unexpected values, types, units, and range problems.

<div class="prompt-box">
<p class="prompt-label">Prompt: inspect data quality</p>
<p class="prompt-text">Create a data-quality review for this table. Check missingness, duplicates, unexpected categories, inconsistent formats, impossible values, unit mismatches, and suspicious ranges. For each issue, distinguish an observed problem from a possible problem that requires confirmation.</p>
</div>

Inspection should lead to decisions. Ask which problems must be corrected, which can be documented, and which need subject-matter review.

## Combine tables carefully

Combining tables depends on the meaning and uniqueness of the matching fields. Ask the assistant to reason about the relationship before suggesting a join.

<div class="prompt-box">
<p class="prompt-label">Prompt: plan a table combination</p>
<p class="prompt-text">I need to combine these tables using [matching fields]. Explain what one row represents in each table, whether each matching field is unique, and whether the relationship is one-to-one, one-to-many, or many-to-many. Predict how the row count could change and list checks for unmatched records.</p>
</div>

A matching field with repeated values can produce more rows than expected. A field with inconsistent formatting can fail to match records that should be connected.

## Summarize without hiding variation

A summary should state the grouping, measure, unit, and treatment of missing values. Ask the assistant to make those decisions explicit.

<div class="prompt-box">
<p class="prompt-label">Prompt: define a summary</p>
<p class="prompt-text">Design a summary of this table grouped by [grouping fields]. Define each measure, its unit, the treatment of missing values, and the records included or excluded. Identify what variation the summary may hide and suggest a check for it.</p>
</div>

A summary can be numerically correct while answering the wrong question. Review the unit of observation and the denominator before interpreting it.

## Verify the result

Use row counts, totals, keys, ranges, units, and representative records to check a transformation.

<div class="prompt-box">
<p class="prompt-label">Prompt: verify a data transformation</p>
<p class="prompt-text">Create a verification checklist for this data transformation. Include row-count expectations, key uniqueness, unmatched records, duplicate records, totals or ranges, units, missing values, and several representative records. Explain what a surprising result would suggest.</p>
</div>

## Practice: review a synthetic table task

Use a small, synthetic table. Ask the assistant to describe its structure, inspect quality, plan a combination or summary, and create verification checks. Do not begin with a conclusion you want the data to support.

<div class="prompt-box">
<p class="prompt-label">Prompt: work through a table task</p>
<p class="prompt-text">Guide me through this table task in order: understand the unit of observation, inspect quality, define the transformation, identify assumptions, and verify the result. At each stage, show what decision is being made and what evidence supports it.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before trusting a table result</p>
<ul>
<li>Do I know what one row represents?</li>
<li>Are field meanings, identifiers, and units clear?</li>
<li>Have quality problems been inspected first?</li>
<li>Have matching-field relationships been checked?</li>
<li>Are missing values and denominators explicit?</li>
<li>Have counts, keys, totals, and representative records been verified?</li>
</ul>
</div>
