# Prompt Improvement Checklist

Use this checklist before sending an important coding prompt and after reviewing the response. You do not need every item for a simple question; use the items that match the risk and complexity of the task.

## Goal and scope

- [ ] Have I stated the coding task or question in one clear sentence?
- [ ] Is the desired behavior or decision observable?
- [ ] Have I limited the files, data, or topic that matter?
- [ ] Have I said what is outside scope?
- [ ] Have I separated this task from unrelated cleanup?

## Context

- [ ] Have I provided the relevant language, tool, dependency, or environment details?
- [ ] Have I explained unfamiliar terms and domain assumptions?
- [ ] Have I provided enough surrounding material to avoid misleading conclusions?
- [ ] Have I removed secrets and unnecessary private information?
- [ ] Have I identified information that is missing or uncertain?

## Requirements and constraints

- [ ] Are must-have requirements separate from preferences?
- [ ] Have I stated inputs, outputs, formats, units, or interfaces?
- [ ] Have I said what existing behavior must remain unchanged?
- [ ] Have I included important limits such as compatibility, performance, or privacy?
- [ ] Have I identified edge cases and failure conditions?

## Output request

- [ ] Have I requested the kind of help I need: explanation, questions, plan, draft, review, or diagnosis?
- [ ] Is the desired output structure clear?
- [ ] Have I asked the assistant to label assumptions and uncertainty?
- [ ] Have I said whether it may make changes or use tools?
- [ ] For consequential actions, have I required a preview and explicit confirmation?

## Verification

- [ ] Have I asked how the result can be checked?
- [ ] Are expected outcomes independent of the proposed implementation?
- [ ] Have I requested normal, boundary, invalid, and failure cases where relevant?
- [ ] Have I asked what the answer does not establish?
- [ ] Do I have an independent source, test, or review for important claims?

## After the response

- [ ] Did the answer address the actual task rather than a nearby one?
- [ ] Did it follow the stated constraints?
- [ ] Are facts, inferences, and guesses distinguishable?
- [ ] Did it introduce unnecessary scope or unsupported details?
- [ ] Were claimed checks actually performed?
- [ ] What is the highest-priority remaining uncertainty?

## Improve one thing at a time

When a response is weak, identify the smallest missing or ambiguous element. Revise that part and compare the result. Avoid adding a long list of instructions without knowing which problem each instruction addresses.

<div class="prompt-box">
<p class="prompt-label">Prompt: improve my prompt</p>
<p class="prompt-text">Review my prompt for ambiguity, missing context, unnecessary scope, conflicting requirements, privacy risks, and missing verification. Rank the three most important improvements and explain the expected benefit of each. Do not rewrite it until you have identified the problems.</p>
</div>
