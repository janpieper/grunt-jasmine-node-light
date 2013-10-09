default: jshint

jshint:
	@jshint \
		--config .jshintrc \
		--exclude .jshintignore \
		--verbose \
		--extra-ext .json \
		--show-non-errors \
		./
