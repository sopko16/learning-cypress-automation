# learning-cypress-automation

Attempting to run this tutorial: https://www.tutorialspoint.com/cypress/cypress_introduction.htm

## Steps:
1. Download Node on Windows, use default steps.
2. Set Environment Variables > System Variables > New, name "NODE_PATH" with value "C:\Program Files\nodejs

3. Run:
```
npm init
```
4. Add cypress:
```
npm install cypress --save-dev
```
5. Run this command:
```
node_modules/.bin/cypress open
```
*That fails, so this needs to be run...
6. Run:
```
node_modules/.bin/cypress verify
```
7. Then re-run:
```
node_modules/.bin/cypress open
``

------------------

7. Had to break with the tutorial, and then went with this:
https://docs.cypress.io/guides/getting-started/opening-the-app#What-you-ll-learn

8. Then this:
https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test

**The spec in ./cypress/e2e/spec.cy.js is a great place to start, with how to start automating other stuff.**

--------------

Side note, I think I am going to have to run something like this with ToS in order to potentially automate paper trading, but not 100% sure: https://trade.thinkorswim.com/

### The purpose of the main.py script here, is to test that the "headless bash way" of calling a spec works... 

```bash
node_modules/.bin/cypress run ./cypress/e2e/spec.cy.js
```

because basically the ToS automation will probably be making  each action like "opening a limit order", "market order", closing all, etc. as individual "describe" tests, then calling them all from Python long-running program.

### And I think something like this will need to be used for config of params, EX "Market order for X shares?", "What will the limit price be", etc. 
IE will need to dynamically pass some things to these spec/"scripts" to allow for dynamic inputs to the ToS Automation...