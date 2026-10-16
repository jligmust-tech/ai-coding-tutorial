# Ask for Tests and Verification

## What you will learn

By the end of this chapter, you will be able to:

- ask for checks that correspond to requirements;
- cover normal, boundary, and failure cases;
- distinguish a proposed test from an executed test; and
- interpret verification results carefully.

## Start with requirements

A test is useful when it checks a behavior that matters. Begin by asking the assistant to map requirements to observable checks.

<div class="prompt-box">
<p class="prompt-label">Prompt: map requirements to checks</p>
<p class="prompt-text">For each requirement below, propose an observable check and its expected result. Include the normal case, relevant boundary cases, invalid inputs, and failure conditions. Identify requirements that cannot be tested from the material provided.</p>
</div>

This mapping can reveal requirements that are too vague to verify. Clarify them before treating a test plan as complete.

## Cover more than the happy path

A successful ordinary example does not show what happens for empty, malformed, repeated, or unexpected input. Ask for cases based on the behavior and risks of the task.

<div class="prompt-box">
<p class="prompt-label">Prompt: expand test coverage</p>
<p class="prompt-text">Review this test plan for missing cases. Consider ordinary use, boundaries, empty or missing values, invalid input, repeated operations, interruptions, and dependency failures where relevant. Explain which cases are important for this task and why.</p>
</div>

Testing every imaginable case is not practical. Prioritize cases by likelihood and impact.

## Ask for independent expectations

A test can repeat the implementation’s assumptions and still miss a defect. Ask the assistant to derive expected behavior from the requirements before examining a proposed result.

<div class="prompt-box">
<p class="prompt-label">Prompt: derive expected outcomes</p>
<p class="prompt-text">Using only these requirements, describe the expected outcome for each case below. Do not infer expected behavior from the current implementation. Mark any case where the requirements do not specify a clear outcome.</p>
</div>

If requirements do not define an outcome, resolve the ambiguity instead of letting a test encode a guess.

## Distinguish proposed from executed checks

An assistant may suggest a test without running it. Ask it to report exactly what was executed and what evidence resulted.

<div class="prompt-box">
<p class="prompt-label">Prompt: report verification honestly</p>
<p class="prompt-text">Separate checks you actually executed from checks you only recommend. For each executed check, report the command or procedure, environment, result, and any limitation. Do not claim success for a check that was not run or whose output is unavailable.</p>
</div>

You may need to run checks yourself in your own environment. Confirm that the environment and inputs match the task.

## Interpret failures and passes

A passing check increases confidence only for the behavior it covers. A failing check may indicate a defect, a wrong expectation, or an unsuitable test.

<div class="prompt-box">
<p class="prompt-label">Prompt: interpret a test result</p>
<p class="prompt-text">Interpret this test result against the requirement it is intended to check. State what the result establishes, what it does not establish, and the next step for a failure or unexpected pass.</p>
</div>

Do not treat a passing test suite as proof that every requirement or edge case is correct.

## Practice: create a verification plan

Choose a small task and list its requirements. Ask for a requirement-to-check mapping, then review whether the expected outcomes are independent of the proposed implementation.

<div class="prompt-box">
<p class="prompt-label">Prompt: review my test plan</p>
<p class="prompt-text">Review this verification plan for coverage, clarity, independent expected outcomes, and honest reporting of what has actually been run. Identify the highest-risk gap and suggest the smallest additional check that would address it.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before trusting a test result</p>
<ul>
<li>Does each check map to a real requirement?</li>
<li>Are ordinary, boundary, and failure cases represented?</li>
<li>Were expected outcomes derived independently?</li>
<li>Is it clear which checks were actually executed?</li>
<li>Are environment and input limitations recorded?</li>
<li>Do I understand what passing checks do not prove?</li>
</ul>
</div>
