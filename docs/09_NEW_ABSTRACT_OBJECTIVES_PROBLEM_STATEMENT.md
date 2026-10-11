# Consolidated proposal text

This file collects the proposal elements in one place for convenient review. Keep the standalone versions as the editable source of truth.

## Proposed title

**The Chinese Room — Can AI Really Understand? An Interactive Educational Demonstration of Syntax and Semantics**

## Abstract

The Chinese Room thought experiment, introduced by John R. Searle, challenges the claim that executing a computer program is sufficient for understanding. It distinguishes the formal manipulation of symbols (syntax) from meaning or intentionality (semantics). This project proposes an interactive educational website that introduces the thought experiment and lets users explore a transparent, deterministic rule-based simulator. The simulator accepts text, applies a small set of predefined keyword rules, and returns prepared responses while identifying the rule used. Supporting sections explain syntax, semantics, intentionality, and a counterargument such as the systems reply. A short quiz checks users' understanding of the central distinction. The application is designed as a lightweight static website using HTML, CSS, and JavaScript, with no external AI API or backend required. The project is educational rather than experimental: it does not measure consciousness, settle the Chinese Room debate, or establish conclusions about contemporary AI systems. Its intended contribution is to make the structure of Searle's argument easier to inspect while presenting its limits and objections clearly.

## Problem statement

The Chinese Room argument can be difficult for novice learners to grasp when introduced only through abstract philosophical prose. A small interactive demonstration may help learners distinguish a system's rule-governed input/output behavior from the stronger claim that it understands meaning. The educational challenge is to make the argument tangible without misrepresenting the toy demonstration as a model of all AI systems or presenting Searle's controversial conclusion as settled fact.

**Main question:** How can an interactive, transparent rule-based website help learners explore Searle's distinction between syntax and semantics while also understanding the limits and objections to the Chinese Room argument?

## General objective

To design and implement an interactive educational website that explains John Searle's Chinese Room thought experiment and helps learners examine the distinction between syntax and semantics.

## Specific objectives

1. Summarize the original argument in clear, properly attributed language.
2. Implement a transparent keyword-based simulator that returns deterministic responses to user input.
3. Show which rule matched and provide a fallback for unknown input.
4. Explain syntax, semantics, intentionality, and at least one counterargument.
5. Implement a short multiple-choice quiz with feedback and reset behavior.
6. Create a responsive and keyboard-operable interface.
7. Document local execution, testing, limitations, and optional GitHub Pages deployment.
8. Maintain accurate citations and clearly mark missing institutional requirements.

## Research question / scope caveat

This is a proposed software project, not an empirical study. Do not claim that the website proves a philosophical position or improves learning unless a suitable evaluation is actually conducted.
