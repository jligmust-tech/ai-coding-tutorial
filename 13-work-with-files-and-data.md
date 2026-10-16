# Work with Files and Data

## What you will learn

By the end of this chapter, you will be able to:

- describe a file task precisely;
- protect original material before a bulk operation;
- ask for a preview and a recovery plan; and
- check whether the result matches the request.

## Describe the file task

File tasks can involve listing, searching, renaming, moving, copying, converting, or organizing. State the target, the selection rule, and the desired result.

<div class="prompt-box">
<p class="prompt-label">Prompt: describe a file task</p>
<p class="prompt-text">I need to [action] files in [location]. Select files that match [selection rule]. The desired result is [result]. Preserve [originals, folder structure, metadata, or other conditions]. Before changing anything, summarize the operation and list ambiguities.</p>
</div>

A selection rule should be specific enough that two people would choose nearly the same files. “Old files” is ambiguous; a date range, file type, or naming pattern is easier to check.

## Inspect before changing

Ask the assistant to inspect the current state and report what it found before asking it to perform an operation.

<div class="prompt-box">
<p class="prompt-label">Prompt: inspect first</p>
<p class="prompt-text">Inspect [location] using the selection rule [rule]. Report the number of matching items, representative names, possible conflicts, and items that need manual review. Do not rename, move, delete, or overwrite anything.</p>
</div>

An inspection can reveal unexpected names, duplicates, permissions, or assumptions about the folder structure.

## Request a preview

A preview makes a bulk operation reviewable. Ask for the proposed action for each item or for a useful summary when there are many items.

<div class="prompt-box">
<p class="prompt-label">Prompt: preview a bulk operation</p>
<p class="prompt-text">Create a preview of the proposed [operation]. For each affected item, show the current state, proposed state, and reason for inclusion. Highlight collisions, ambiguous matches, and items that would be skipped. Do not apply the operation.</p>
</div>

If the preview contains unexpected results, revise the selection rule before proceeding.

## Protect originals and plan recovery

A file operation should account for accidental selection, interruption, and name collisions. Tell the assistant what must be preserved and how you want recovery handled.

<div class="prompt-box">
<p class="prompt-label">Prompt: plan safe execution</p>
<p class="prompt-text">Suggest a safe way to perform this file operation while preserving the originals. Include how to handle duplicate names, interruptions, permission errors, and partial completion. Prefer a reversible approach and explain how I would undo it.</p>
</div>

Do not rely on a vague promise that an operation is safe. Ask what will happen in each failure case.

## Verify the result

After an operation, compare the result with the preview and check counts, names, locations, and preserved material.

<div class="prompt-box">
<p class="prompt-label">Prompt: verify a file operation</p>
<p class="prompt-text">Help me verify this completed file operation. Compare the expected and actual number of affected items, identify missing or unexpected items, confirm that originals and required metadata remain available, and list anything that needs manual review.</p>
</div>

## Practice: organize a low-risk folder

Choose a folder containing copies or synthetic files. Ask for inspection, a preview, a safe execution plan, and verification. Do not use a private or irreplaceable folder for the first attempt.

<div class="prompt-box">
<p class="prompt-label">Prompt: complete workflow</p>
<p class="prompt-text">Guide me through this file task one stage at a time: inspect, preview, confirm scope, perform safely, and verify. Stop after each stage and wait for my confirmation. Never delete or overwrite files without explicit confirmation.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before a file operation</p>
<ul>
<li>Is the selection rule precise?</li>
<li>Have I inspected the current state?</li>
<li>Have I reviewed a preview?</li>
<li>Are originals and metadata protected?</li>
<li>Are collisions and partial failures addressed?</li>
<li>Do I know how to verify or undo the result?</li>
</ul>
</div>
