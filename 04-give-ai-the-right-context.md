# Give AI the Right Context

## What you will learn

By the end of this chapter, you will be able to:

- select context that can change the answer;
- provide project information in a useful order;
- protect secrets and private material; and
- ask an assistant to identify missing context before it acts.

## More context is not always better

An assistant needs enough information to distinguish your task from similar tasks. It does not need every file, every past decision, or every message in a project.

Too little context leads to guessing. Too much context hides the important facts and increases the chance that an irrelevant detail controls the answer. Aim for **relevant context**: information that could change the recommendation, the implementation, or the verification step.

## Start with a context map

Before sharing material, describe the project in a few lines:

- what the project is for;
- where the task fits;
- which files or materials are relevant;
- what must not change; and
- what result you expect.

<div class="prompt-box">
<p class="prompt-label">Prompt: provide a context map</p>
<p class="prompt-text">Here is the context for my task. Purpose: [purpose]. Relevant area: [area]. Relevant files or materials: [list]. Existing behavior to preserve: [behavior]. Desired result: [result]. First tell me whether this context is sufficient and what is missing.</p>
</div>

A context map lets the assistant tell you what it needs before you provide a large amount of material.

## Share material in layers

A useful order is:

1. the task and desired result;
2. the relevant file or excerpt;
3. related instructions or conventions;
4. the exact error or observed evidence; and
5. additional material requested by the assistant.

This order keeps the purpose visible. It also makes it easier to notice when the assistant requests material that is unrelated to the task.

<div class="prompt-box">
<p class="prompt-label">Prompt: inspect before requesting more</p>
<p class="prompt-text">Use the task description and the material I have provided. Before asking for more files, explain what question each additional file would answer. Request only the minimum additional context needed.</p>
</div>

## Describe files without exposing everything

If a task involves a project, begin with a directory or file summary rather than sending the entire project. Explain the role of each relevant item. Remove credentials, tokens, personal information, and unrelated private content.

<div class="prompt-box">
<p class="prompt-label">Prompt: identify relevant files</p>
<p class="prompt-text">Here is a summary of my project structure: [summary]. The task is [task]. Identify which items are likely relevant and explain why. Do not ask me to share secrets, credential files, private user data, or unrelated files.</p>
</div>

If the assistant needs a file that may contain sensitive material, ask what specific section or fields are needed. Replace real values with representative placeholders when their exact value is not important.

## Make assumptions visible

An assistant may fill gaps silently. Ask it to separate confirmed facts from assumptions and questions.

<div class="prompt-box">
<p class="prompt-label">Prompt: expose assumptions</p>
<p class="prompt-text">Separate your response into confirmed facts, assumptions, open questions, and recommendations. Do not present an assumption as a fact. If an assumption is important to the result, stop and ask me to confirm it.</p>
</div>

When you correct an assumption, ask the assistant to reconsider every conclusion that depended on it.

## Context for errors

An error message is valuable, but it is not the whole context. Include what you were trying to do, what happened instead, what changed recently, and whether the problem is reproducible.

<div class="prompt-box">
<p class="prompt-label">Prompt: report a problem</p>
<p class="prompt-text">I was trying to [goal]. I expected [expected behavior], but I observed [actual behavior]. The complete error or evidence is [evidence]. This last worked when [known point]. The problem is [always / sometimes / not yet confirmed] reproducible. What should I check first?</p>
</div>

Do not replace the complete error with a paraphrase if the exact wording is available. Small details can distinguish different causes.

## Context for screenshots and long files

When visual or large material is relevant, explain what the assistant should inspect. A screenshot without a question can lead to a description instead of a diagnosis. A long file without a focus can lead to a shallow summary.

<div class="prompt-box">
<p class="prompt-label">Prompt: focus an inspection</p>
<p class="prompt-text">Inspect the supplied [screenshot or document] specifically for [question]. Describe the evidence you used, distinguish visible facts from interpretation, and identify what cannot be determined from this material alone.</p>
</div>

## Practice: prepare context safely

Choose a low-risk task and prepare a context map. Remove or replace anything private. Ask the assistant to audit the context before you provide additional material.

<div class="prompt-box">
<p class="prompt-label">Prompt: context audit</p>
<p class="prompt-text">Audit the context below for relevance, missing information, ambiguity, and sensitive material. Do not solve the coding task yet. Tell me what to remove, what to clarify, and what additional context would materially change your recommendation.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before sharing context</p>
<ul>
<li>Have I stated the task and desired result first?</li>
<li>Does each shared item have a reason to be included?</li>
<li>Have I removed credentials and unnecessary private data?</li>
<li>Have I separated facts, assumptions, and questions?</li>
<li>Have I included exact errors and relevant observations?</li>
<li>Have I asked for the minimum additional context?</li>
</ul>
</div>
