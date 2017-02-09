bin = node_modules/.bin/gulp
files=$(filter-out Makefile, $(wildcard *))

tests:
	lein test-refresh :run-once
	npm install
	lein doo chrome automated-tests once

install:; @npm install

$(files) %:;@$(bin) $@

count:; find . -name '*.css' -not -path './styleguide*' -not -path './node_modules*' | xargs wc -l

.PHONY: install $(files) count
