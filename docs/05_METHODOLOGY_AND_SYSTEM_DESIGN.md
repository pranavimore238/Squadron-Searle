# Methodology and system design

## Project approach

Use an iterative software-development approach:
1. Confirm assignment requirements and stakeholders.
2. Translate the learning goal into functional requirements.
3. Implement a small static web application.
4. Verify the interaction paths and content.
5. Review accessibility, responsiveness, and academic accuracy.
6. Document the results and remaining limitations.

This is a software design and implementation project, not a controlled experiment. Do not report learning effectiveness without collecting and analyzing real participant data.

## System architecture

- **Presentation:** semantic HTML.
- **Styling:** CSS with responsive breakpoints.
- **Interaction:** vanilla JavaScript.
- **Rule engine:** local deterministic keyword matching.
- **Data handling:** input stays in the browser and is not transmitted or stored.
- **Deployment option:** GitHub Pages, if allowed by the assignment.

## Simulator flow

1. User enters a bounded text message.
2. The app normalizes text for matching.
3. A deterministic rule set checks for supported keyword groups.
4. The app returns a prepared response and indicates the matched rule.
5. If no rule matches, it returns a fallback.
6. The UI renders the input and response as text, not HTML.

## Quality strategy

- Test known keyword groups and fallback behavior.
- Test empty and long inputs.
- Confirm HTML-like user input is rendered literally.
- Verify quiz correct/incorrect states and reset.
- Check keyboard navigation, labels, focus indicators, and dynamic feedback.
- Check narrow and wide viewport layouts.
- Review academic claims against cited sources.
- Record the commands and tests actually executed.

## Evaluation boundary

If the instructor requires user evaluation, ask what protocol and consent process is expected. Do not recruit participants or claim results without performing the evaluation. A simple informal walkthrough may be reported only if it actually occurred and is described honestly.
