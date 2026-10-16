# Common Prompt Problems

## Asking for “the best” without criteria

A request for the “best” solution hides the priorities that determine a good choice. State whether correctness, simplicity, speed, compatibility, cost, or another property matters most.

<div class="prompt-box">
<p class="prompt-label">Prompt: repair the criteria</p>
<p class="prompt-text">Replace the vague request for the “best” solution with explicit criteria for [task]. Rank the criteria, identify conflicts, and state what evidence would support a recommendation.</p>
</div>

## Providing too little context

A short prompt can be efficient for a simple question but misleading for a task with dependencies, constraints, or existing behavior. Add the minimum context that changes the answer.

<div class="prompt-box">
<p class="prompt-label">Prompt: find missing context</p>
<p class="prompt-text">Review this request and identify only the missing context that could materially change the answer. Separate necessary questions from optional background. Do not assume unknown details.</p>
</div>

## Providing everything without a focus

More context is not always better. Unrelated material can obscure the task and increase the chance of a wrong assumption. State which parts are relevant and why.

<div class="prompt-box">
<p class="prompt-label">Prompt: narrow the context</p>
<p class="prompt-text">From this material, identify the smallest relevant context for [question]. Explain what can be excluded, what must be retained, and what uncertainty exclusion creates.</p>
</div>

## Combining planning, writing, and approval

A single request that asks for interpretation, implementation, broad cleanup, and execution makes review difficult. Divide the work into stages.

<div class="prompt-box">
<p class="prompt-label">Prompt: split the task</p>
<p class="prompt-text">Divide this request into reviewable stages. For each stage, state its goal, input, output, decision point, and verification. Identify where I should approve before the next stage.</p>
</div>

## Leading the assistant toward a cause

A suggested cause can anchor the investigation even when it is wrong. Report evidence first and ask for alternatives.

<div class="prompt-box">
<p class="prompt-label">Prompt: remove anchoring</p>
<p class="prompt-text">Review my suspected cause as one hypothesis among alternatives. List evidence for and against it, identify competing explanations, and propose the safest check that distinguishes them.</p>
</div>

## Asking for certainty where evidence is missing

“Be certain” does not create evidence. Ask the assistant to state confidence limits and the evidence required for a stronger conclusion.

<div class="prompt-box">
<p class="prompt-label">Prompt: expose uncertainty</p>
<p class="prompt-text">Identify which parts of this answer are established, inferred, or unknown. State the evidence needed to resolve each important uncertainty and avoid stronger wording than the evidence supports.</p>
</div>

## Accepting a polished explanation

Clear prose can hide an incorrect assumption. Ask for a comparison with the source material, requirements, or an independent check.

<div class="prompt-box">
<p class="prompt-label">Prompt: check a polished answer</p>
<p class="prompt-text">Audit this explanation against the supplied material and original requirements. Quote evidence for important claims, identify unsupported inferences, and list the checks needed before relying on it.</p>
</div>

## Letting a conversation drift

Long conversations may accumulate outdated assumptions. Ask for a current-state summary or restart with a verified handoff.

<div class="prompt-box">
<p class="prompt-label">Prompt: recover focus</p>
<p class="prompt-text">Summarize the current goal, confirmed facts, active constraints, decisions, unresolved questions, and next step. Remove outdated assumptions and flag any uncertainty before continuing.</p>
</div>

## Problems with tool permissions

A prompt cannot replace appropriate access controls. Limit permissions in the environment, inspect previews, and require specific approval for consequential actions.

<div class="prompt-box">
<p class="prompt-label">Prompt: check tool safety</p>
<p class="prompt-text">Review this proposed tool action for scope, privacy, irreversibility, external effects, cost, and recovery. Identify the environment-level control or human approval needed before proceeding.</p>
</div>

## Problem-solving checklist

<div class="checklist-box">
<p class="checklist-label">When a prompt produces a poor result</p>
<ul>
<li>What specific requirement or assumption failed?</li>
<li>Was the task too broad or the context too narrow?</li>
<li>Did I ask for the wrong kind of output?</li>
<li>Were evidence and uncertainty visible?</li>
<li>Should I split the task or start a fresh conversation?</li>
<li>What is the smallest prompt change worth testing?</li>
</ul>
</div>
