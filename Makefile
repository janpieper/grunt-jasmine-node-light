default: jshint grunt

jshint:
	@jshint \
		--config .jshintrc \
		--exclude .jshintignore \
		--verbose \
		--extra-ext .json \
		--show-non-errors \
		./

grunt:
	@grunt

publish:
	@npm publish
