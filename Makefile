install:
	npm ci

brain-games:
    node bin/brain-games.js

publish:
	npm publish --dry-run

brain-even:
    node bin/brain-even.js

brain-even:
    node bin/brain-calc.js

.PHONY: test