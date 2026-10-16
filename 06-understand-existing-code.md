# Understand Existing Code

## What you will learn

By the end of this chapter, you will be able to:

- request an overview before a detailed explanation;
- trace inputs, decisions, and outputs;
- identify dependencies and assumptions; and
- check an explanation against the actual material.

## Start with purpose and boundaries

When code is unfamiliar, a line-by-line explanation is usually the wrong first step. Ask what the code is for, what it expects, what it produces, and where its responsibility begins and ends.

<div class="prompt-box">
<p class="prompt-label">Prompt: get an overview</p>
<p class="prompt-text">Explain this code at a high level without suggesting changes. State its apparent purpose, expected inputs, main stages, outputs, external dependencies, and boundaries. Mark anything you cannot determine from the material provided.</p>
</div>

The phrase “apparent purpose” matters. Code may contain bugs, outdated comments, or behavior that differs from its original intention.

## Trace the flow

After the overview, follow one representative input through the major stages. This helps you understand how information is transformed and where decisions are made.

<div class="prompt-box">
<p class="prompt-label">Prompt: trace one input</p>
<p class="prompt-text">Trace the value [describe a representative input] through this code. For each major stage, state what information enters, what changes, what decision is made, and what leaves the stage. Stop and identify any point that cannot be determined from the supplied material.</p>
</div>

Choose an ordinary example first. Then use an unusual example to expose assumptions.

<div class="prompt-box">
<p class="prompt-label">Prompt: trace an edge case</p>
<p class="prompt-text">Now trace an input with [edge-case property]. Identify where its behavior differs from the ordinary case and whether the difference is intentional, documented, or uncertain.</p>
</div>

## Identify assumptions

Existing code often assumes a file exists, a value has a certain format, an identifier is unique, or an operation always succeeds. Ask the assistant to make those assumptions visible.

<div class="prompt-box">
<p class="prompt-label">Prompt: find assumptions</p>
<p class="prompt-text">List every important assumption this code appears to make about its inputs, environment, dependencies, ordering, uniqueness, permissions, and failures. For each assumption, state what could happen if it is false.</p>
</div>

Do not treat the list as proof that an assumption is valid. It is a checklist for further inspection.

## Separate facts from interpretation

An assistant may infer intent from names and comments. Ask it to distinguish what is directly observable from what it is interpreting.

<div class="prompt-box">
<p class="prompt-label">Prompt: separate observation and inference</p>
<p class="prompt-text">Create two sections: observable behavior and inferred intent. Put only behavior supported by the supplied material in the first section. In the second section, explain the evidence for each inference and state how I could confirm it.</p>
</div>

This is especially important when documentation is incomplete or the code has changed over time.

## Build a reading order

Large files are easier to understand when you choose a useful reading order. Ask the assistant to identify the smallest set of sections that explains the main behavior.

<div class="prompt-box">
<p class="prompt-label">Prompt: prioritize inspection</p>
<p class="prompt-text">I need to understand this material before making a change. Identify the smallest set of functions, sections, files, or dependencies I should inspect first. Explain what question each item answers and what can wait.</p>
</div>

## Practice: explain, then verify

Choose an unfamiliar but non-sensitive file or excerpt. Request an overview, a trace, and an assumptions list. Then compare the explanation with the material yourself.

<div class="prompt-box">
<p class="prompt-label">Prompt: audit an explanation</p>
<p class="prompt-text">Review your previous explanation against the supplied material. List statements that are directly supported, statements that are plausible but unconfirmed, and statements that should be removed. Do not defend an inference just because it sounded reasonable.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before relying on an explanation</p>
<ul>
<li>Have I requested the purpose, inputs, outputs, and boundaries?</li>
<li>Have I traced at least one representative input?</li>
<li>Have I considered an unusual input?</li>
<li>Are assumptions and dependencies visible?</li>
<li>Are facts separated from inferred intent?</li>
<li>Have I checked the explanation against the actual material?</li>
</ul>
</div>
