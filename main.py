import os

# I made 2 specs, wanted to verify - and reasonably certain - that I can break up into individual items.
# IE in the future, I might have one that is "close all positions", one that is "close all open pending orders", "send a market order", etc.
os.system('node_modules\\.bin\\cypress run .\\cypress\\e2e\\spec.cy.js')
os.system('node_modules\\.bin\\cypress run .\\cypress\\e2e\\spec2.cy.js')