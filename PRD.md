# Product Requirements Document (PRD)
## The Chinese Room — Can AI Really Understand?
**Project / squad:** Squadron Searle  
**Institution field supplied:** Brandenburg University of Technology  
**Status:** Draft proposal; assignment rubric unknown  
**Version:** 0.1

## 1. Executive summary

Build an accessible, responsive educational website that introduces John Searle's Chinese Room thought experiment and lets learners interact with a transparent, deterministic rule-based simulator. The product should demonstrate the distinction between syntax (formal symbol manipulation) and semantics (meaning) as framed by Searle, without claiming to settle the philosophical debate or prove that modern AI systems lack understanding.

## 2. Problem statement

Learners can find the Chinese Room abstract and difficult to understand when it is presented only as prose. A small interactive demonstration can make the thought experiment concrete: users submit text, the simulator applies explicit keyword rules, and the interface explains that the output was produced by a rule rather than by an asserted act of comprehension. The challenge is to communicate the idea accurately while avoiding overclaiming about real AI systems.

## 3. Goals

1. Explain the setup and central claim of Searle's Chinese Room in clear language.
2. Let users inspect how a transparent rule-based simulator maps inputs to outputs.
3. Explain syntax, semantics, intentionality, and at least one response to Searle's argument.
4. Check comprehension with an accessible quiz and explanatory feedback.
5. Provide a reproducible, documented project that can be hosted as a static website.
6. Include source citations and make uncertainty / limitations explicit.

## 4. Non-goals

- Building or training a large language model.
- Claiming to measure consciousness, sentience, or genuine understanding.
- Proving or disproving Searle's argument.
- Sending user messages to an external API.
- Collecting personal data, accounts, or analytics.
- Claiming institutional approval or rubric compliance without evidence.

## 5. Target users

- Students encountering the Chinese Room for the first time.
- Instructors who need a short classroom demonstration.
- General visitors curious about AI and understanding.

## 6. Core user journeys

### Journey A: Learn the idea
Visitor opens the site → reads the introduction → reviews the room setup → compares syntax and semantics → reads limitations and debate.

### Journey B: Try the simulator
Visitor types a message → sees their message and the rule-based reply → can identify the matched rule / fallback behavior → reads a clear note that this is not a language model.

### Journey C: Check comprehension
Visitor selects a quiz answer → receives feedback and explanation → can reset and try again.

### Journey D: Run / deploy
Developer opens `index.html` locally → tests interactions and mobile layout → follows README instructions to publish through GitHub Pages.

## 7. Functional requirements

- **FR-01 Landing content:** Explain John Searle, the thought experiment, and the question it raises.
- **FR-02 Rule simulator:** Accept a bounded text input and return deterministic responses using explicit, inspectable keyword rules.
- **FR-03 Rule transparency:** Show or explain the matched rule and provide a fallback when no rule matches.
- **FR-04 Concepts:** Explain syntax and semantics; include intentionality in context.
- **FR-05 Counterpoint:** Describe at least one response, such as the systems reply, as a counterargument—not as a settled refutation.
- **FR-06 Quiz:** Provide at least one multiple-choice question with correct/incorrect feedback and a reset function.
- **FR-07 Accessibility:** Use semantic HTML, visible keyboard focus, labels, accessible feedback, sufficient contrast, and reduced-motion-aware behavior if animation is added.
- **FR-08 Responsive layout:** Work at narrow mobile and desktop viewport widths.
- **FR-09 Documentation:** README includes purpose, limitations, local run instructions, and deployment steps.
- **FR-10 Privacy:** Process simulator input in the browser only; do not persist or transmit it.
- **FR-11 Sources:** Provide a references section citing the original paper and a reputable secondary overview.
- **FR-12 Error handling:** Empty input is blocked or ignored gracefully; long input is bounded; no user input is inserted as HTML.

## 8. Non-functional requirements

- No required build tool or API key for the baseline.
- Plain HTML/CSS/JavaScript is acceptable unless assignment requirements say otherwise.
- Maintainable code with descriptive names and comments for key rule logic.
- No console errors during manual smoke testing.
- Content must distinguish Searle's claims from widely accepted facts and counterarguments.
- Avoid copyrighted full-text reproduction; cite the paper and link to the publisher-hosted page.

## 9. Content requirements

The website should cover:
- The imagined person in a room using a rulebook to respond to Chinese symbols.
- The distinction between syntactic manipulation and semantic understanding.
- Searle's conclusion that running a program alone is not sufficient for intentionality.
- A counterargument / reply, such as the systems reply.
- A clear limitation: a toy keyword simulator illustrates a structure of the thought experiment but is not equivalent to a human in the room, a contemporary language model, or empirical evidence about machine consciousness.

## 10. Technical design

- Static client-side app: `index.html`, `style.css`, `script.js`.
- No backend, database, or third-party runtime dependency.
- Simulator: deterministic rule matching, safe DOM text insertion, bounded input.
- Hosting target: GitHub Pages (optional and subject to assignment rules).

## 11. Acceptance criteria

- **AC-01:** Site loads from `index.html` without a build step.
- **AC-02:** All navigation anchors reach the intended sections.
- **AC-03:** Simulator responds to greeting, Chinese Room / Searle, meaning / understanding, AI / computer, emotion, and unknown-input examples.
- **AC-04:** The simulator visibly labels itself as rule-based and not a real AI model.
- **AC-05:** User input is rendered as text, not interpreted as HTML.
- **AC-06:** Quiz correct and incorrect answers show useful feedback; reset restores initial state.
- **AC-07:** Keyboard users can reach and operate all controls.
- **AC-08:** At mobile widths, content remains readable and does not cause horizontal overflow.
- **AC-09:** README and docs accurately describe how to run and deploy the site.
- **AC-10:** Academic references are complete enough to locate; unverified institutional rules are flagged.
- **AC-11:** Claude must report which tests it actually ran and distinguish them from suggested manual tests.
- **AC-12:** No claim of “all tests pass” unless test execution results support it.

## 12. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Actual assignment asks for something else | Treat this as a proposal until the rubric is found; ask user before major scope changes. |
| Philosophical oversimplification | Cite Searle and include counterarguments and limitations. |
| Prototype mistaken for real AI | Label simulator repeatedly as deterministic and rule-based. |
| Incomplete institutional formatting | Use placeholders; do not invent BTU requirements. |
| Unverified testing | Keep a test log and distinguish executed from not executed. |
| Deployment not configured | Provide manual GitHub Pages instructions and verify URL only after deployment. |

## 13. Suggested milestones

1. Confirm project scope and rubric.
2. Verify sources and academic framing.
3. Complete simulator and accessible interactions.
4. Run automated and manual checks available in the environment.
5. Review documentation and replace placeholders.
6. Commit and deploy only after the user confirms.

## 14. Open questions

See `docs/00_START_HERE_AND_OPEN_QUESTIONS.md`. These must be asked before Claude makes assumptions that could materially change scope or submission format.
