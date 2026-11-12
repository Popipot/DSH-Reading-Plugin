# DSH Reader project instructions

For work on a development batch, read the V-model workflow at `project-management/WORKFLOW.md` and the batch register at `project-management/README.md` in the authorized engineering workspace.

Use baseline requirement and verification IDs. Keep batch outcomes, defects, decisions, candidate identity, and evidence in the batch archive. Run `npm run check:engineering` in the engineering workspace before handoff. Preserve earlier runs and record unresolved verification against the original gate.

Every new feature follows the V-model workflow: record functional and non-functional requirements with measurable acceptance criteria, keep the SysML and verification trace synchronized, and archive decisions, candidate identity, failures, and evidence. Use a different process only when the user explicitly requests an exception, and record its scope and follow-up in the batch.

Theme and UI-state changes follow the same archived process. Record theme-specific color and accessibility criteria, test pointer and keyboard states in the applicable host modes and widths, and link screenshots and measurements to the affected requirements and verification cases.

## Completion and publication

At the end of each completed DSH Reader project task, synchronize both GitHub repositories before reporting completion.

1. Update the public project display in the English, Simplified Chinese, and German READMEs together. Identify the measured candidate and release gate accurately. Publish installable code and assets when the applicable release gate is met or the user has explicitly authorized their publication.
2. Update the authorized private development-process repository with the batch status, applicable baseline changes, decisions, verification results, and shareable evidence indexes. Keep restricted originals in the local evidence package.
3. Base each publication on that repository's current remote head, commit the intended files separately, and push normally. Verify both remote heads and report the published commits or any incomplete synchronization. When a repository has no meaningful diff, report its verified head.

## Whale girl artwork

Archive every new whale girl design in `images/whale-girl/` in the existing format: the next two-digit number, a transparent PNG, and a row in the trilingual gallery README that says where it appears. In the private development-process repository, record the full trace from requirement to implementation in the batch archive: requirement and verification IDs, use case, design part, how the artwork was produced and from which references, file hashes, the public commit, and the verification evidence.
