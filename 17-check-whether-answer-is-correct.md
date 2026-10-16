# Check Whether the Answer Is Correct

## What you will learn

By the end of this chapter, you will be able to:

- identify claims that need checking;
- ask for evidence and uncertainty;
- verify answers against authoritative material; and
- avoid treating confidence as proof.

## Turn an answer into checkable claims

A long answer may mix facts, assumptions, recommendations, and guesses. Ask the assistant to separate these before relying on it.

<div class="prompt-box">
<p class="prompt-label">Prompt: identify claims</p>
<p class="prompt-text">Break your answer into specific claims. For each claim, state whether it is directly supported by the material I provided, inferred, or requires an external source or test. Identify the claims most important to verify before I act.</p>
</div>

This creates a verification plan. It does not verify the claims by itself.

## Ask for evidence, not reassurance

A request such as “Are you sure?” often produces another confident answer. Ask what evidence supports the conclusion and what evidence could disprove it.

<div class="prompt-box">
<p class="prompt-label">Prompt: examine the evidence</p>
<p class="prompt-text">For each important conclusion, show the evidence that supports it, the assumptions it depends on, and evidence that would weaken or disprove it. If the information is insufficient, state what is missing rather than filling the gap.</p>
</div>

The assistant’s explanation is a guide to what to inspect, not an independent source of truth.

## Check against appropriate sources

Different claims require different checks. A language or library detail may need current documentation; a behavior claim may need a test; a requirement claim should be compared with the original request.

<div class="prompt-box">
<p class="prompt-label">Prompt: choose verification sources</p>
<p class="prompt-text">For each claim below, recommend the most appropriate way to verify it: compare with my requirements, inspect the supplied material, consult current authoritative documentation, run a focused check, or ask a qualified person. Explain why and identify any source freshness concerns.</p>
</div>

When an answer depends on version-specific behavior, include the relevant tool or dependency version in your verification request.

## Look for counterexamples

An answer that works for one ordinary case may fail in another. Ask what cases would challenge the proposed conclusion.

<div class="prompt-box">
<p class="prompt-label">Prompt: challenge the answer</p>
<p class="prompt-text">Try to find counterexamples to your conclusion. Consider empty, unusual, invalid, large, repeated, and boundary inputs where relevant. For each counterexample, say whether it changes the conclusion or exposes a limitation.</p>
</div>

Counterexamples are especially useful when the answer is broad or makes a general claim.

## Record what remains unknown

A reliable answer makes uncertainty visible. Ask for a boundary between what is established and what still requires verification.

<div class="prompt-box">
<p class="prompt-label">Prompt: state the confidence boundary</p>
<p class="prompt-text">Summarize what can be concluded from the available evidence, what remains uncertain, and what additional evidence would resolve the uncertainty. Do not express confidence as a substitute for evidence.</p>
</div>

## Practice: audit an answer

Choose a previous AI answer about a coding task. Extract its claims, identify a verification source for each important claim, and look for a counterexample before relying on it.

<div class="prompt-box">
<p class="prompt-label">Prompt: audit this answer</p>
<p class="prompt-text">Audit the answer below. Separate supported claims from assumptions and unsupported claims. For each important claim, recommend a concrete verification method and a counterexample to consider. End with what I can safely conclude now.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before relying on an AI answer</p>
<ul>
<li>Have I identified its specific claims?</li>
<li>Are evidence and assumptions separated?</li>
<li>Have I chosen an appropriate independent check?</li>
<li>Have I considered counterexamples?</li>
<li>Are version or freshness limits visible?</li>
<li>Do I know what remains uncertain?</li>
</ul>
</div>
