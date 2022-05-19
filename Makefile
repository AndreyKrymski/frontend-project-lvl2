install :
	npm ci
publish :
	npm publish --dry-run
make lint:
	npx eslint .
make test:
	npm test
make coverage:
	npx jest --coverage
