# Work with Text

## What you will learn

By the end of this chapter, you will be able to:

- distinguish exact text processing from interpretation;
- ask AI to identify patterns before extracting them;
- handle variation and ambiguous matches; and
- verify extracted or transformed text.

## Define the text task

Text tasks may involve searching, extracting, replacing, classifying, comparing, or summarizing. State which operation you want and what counts as a match.

<div class="prompt-box">
<p class="prompt-label">Prompt: define a text task</p>
<p class="prompt-text">I need to [search, extract, replace, classify, compare, or summarize] information in [text material]. A match means [definition]. The desired result is [result]. Preserve [text, order, formatting, or other requirements]. Identify ambiguities before suggesting an approach.</p>
</div>

A phrase that looks obvious to a person may have spelling, punctuation, case, or formatting variations. Describe the variation you expect.

## Find patterns before extracting

Ask the assistant to inspect representative material and describe recurring patterns before asking for a rule.

<div class="prompt-box">
<p class="prompt-label">Prompt: identify text patterns</p>
<p class="prompt-text">Inspect these representative text samples and identify recurring patterns relevant to [task]. Separate stable features from accidental examples. List variations that a reliable process should handle and examples that should not match.</p>
</div>

A pattern that matches the examples but also matches unrelated text is not reliable enough.

## Distinguish exact processing from interpretation

Searching for an exact label is different from deciding what a sentence means. Ask the assistant to state which parts are deterministic and which require judgment.

<div class="prompt-box">
<p class="prompt-label">Prompt: separate processing and interpretation</p>
<p class="prompt-text">Separate this task into exact text operations and interpretation-based decisions. Explain which results can be checked by matching text and which require a human or domain judgment. Identify ambiguous cases that should be reviewed manually.</p>
</div>

This distinction helps you avoid presenting an interpretation as if it were a directly observed fact.

## Handle uncertain matches

Ask the assistant to preserve uncertainty rather than forcing every item into a category.

<div class="prompt-box">
<p class="prompt-label">Prompt: handle ambiguous text</p>
<p class="prompt-text">For each text item, assign a category only when the evidence meets this definition: [criterion]. Otherwise mark it as uncertain and explain why. Do not force ambiguous items into the closest category. Report the uncertain items separately.</p>
</div>

A review category is useful when its criteria are visible and consistent.

## Verify extraction and transformation

Check counts, representative results, missed cases, false matches, and whether the original text remains available.

<div class="prompt-box">
<p class="prompt-label">Prompt: verify text processing</p>
<p class="prompt-text">Create a verification checklist for this text-processing task. Include expected matches, near-matches that should be rejected, empty or malformed text, repeated values, and preservation of the original material. State what evidence would indicate a false match or a missed match.</p>
</div>

## Practice: analyze a small text collection

Use synthetic or non-sensitive text. Ask the assistant to identify patterns, separate exact operations from interpretation, and define uncertain cases before processing the collection.

<div class="prompt-box">
<p class="prompt-label">Prompt: build a text workflow</p>
<p class="prompt-text">Help me design a reviewable workflow for this text task. Begin with pattern discovery, then define matching criteria, identify ambiguous cases, propose a transformation, and finish with verification checks. Do not assume that the sample represents every possible input.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before trusting a text result</p>
<ul>
<li>Is the text operation clearly defined?</li>
<li>Have stable patterns been separated from examples?</li>
<li>Are exact matches separated from interpretation?</li>
<li>Are ambiguous items preserved for review?</li>
<li>Have near-matches and malformed text been checked?</li>
<li>Is the original text still available?</li>
</ul>
</div>
