# Test plan and results template

## Status

This file is a plan/template. Do not mark a test as passed until it has actually been executed and the observed result recorded.

| ID | Test | Steps | Expected result | Status / evidence |
|---|---|---|---|---|
| T-01 | Local load | Open `index.html` in a modern browser | Page loads; sections render | Not yet recorded |
| T-02 | Navigation | Click each nav link | Correct section reached | Not yet recorded |
| T-03 | Greeting rule | Submit “hello” | Greeting rule response appears | Not yet recorded |
| T-04 | Searle rule | Submit “What is the Chinese Room?” | Relevant prepared response appears | Not yet recorded |
| T-05 | Semantics rule | Submit “What is meaning?” | Meaning-related response appears | Not yet recorded |
| T-06 | Fallback | Submit an unrelated random string | Fallback response appears | Not yet recorded |
| T-07 | Empty input | Submit blank/whitespace input | No empty chat message added | Not yet recorded |
| T-08 | Unsafe-looking input | Submit `<script>alert(1)</script>` | It is shown as literal text; no script runs | Not yet recorded |
| T-09 | Input length | Paste more than maximum allowed | Input is constrained / handled gracefully | Not yet recorded |
| T-10 | Quiz correct | Choose the correct answer | Correct feedback appears | Not yet recorded |
| T-11 | Quiz incorrect | Choose a wrong answer | Incorrect feedback and explanation appear | Not yet recorded |
| T-12 | Quiz reset | Select reset | Options re-enabled and feedback reset | Not yet recorded |
| T-13 | Keyboard | Use Tab / Enter / Space only | Controls remain reachable and usable | Not yet recorded |
| T-14 | Mobile layout | Check at ~360px viewport | No unintended horizontal overflow | Not yet recorded |
| T-15 | Console | Inspect browser developer console | No unexpected errors | Not yet recorded |
| T-16 | Documentation | Follow README from clean folder | Instructions are sufficient and accurate | Not yet recorded |
| T-17 | Deployment | Publish only if authorized; open generated URL | Live page works | Not deployed / not verified |

## Results log

- Date/time:
- Environment / browser:
- Commit or version:
- Tests executed:
- Passes:
- Failures:
- Tests not run and why:
- Known defects:
- Tester:

## Reporting rule

Report “not run” when no execution occurred. Do not convert a planned test into a passing result. If browser automation is unavailable, perform manual checks and state that fact.
