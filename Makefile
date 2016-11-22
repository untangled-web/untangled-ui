tests:
	lein test-refresh :run-once
	npm install
	lein doo chrome automated-tests once
