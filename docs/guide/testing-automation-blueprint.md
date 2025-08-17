# Testing and automation (Blueprint)

What/Why: Ship with confidence by running quick functional tests regularly.

Prereqs

- Functional Testing plugin; a test map

Steps

1) Test actors
- Create BP test actors deriving from Functional Test
- Implement `Start Test` logic and success criteria

2) Scenarios
- Input smoke tests (interact once, dash, jump)
- Save/load roundtrip; inventory add/remove

3) Running tests
- Use Session Frontend or command line to run automation
- Report results to CI and keep flaky tests out

Data

- Data-driven tests via DataAssets listing steps and expected outcomes

Performance

- Keep tests fast; parallelize where possible

## Suggested prompts

- “Create a Functional Test that validates Interact triggers once and opens a door.”
- “Blueprint-only test for save/load roundtrip using SaveService.”
- “Show how to run tests headless and export results.”

Prompts for this example

- “Provide a minimal Functional Test BP that presses Interact and asserts a tag `Door.Open` is set.”
