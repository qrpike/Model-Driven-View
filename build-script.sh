#!/bin/bash

GITCOMMENT=$1

if [ -z "$GITCOMMENT" ] ; then
	echo "Git Commit Comment not set, please set it"
	exit 0
fi

# Uglify the files:
# requires: npm install uglify-js -g

uglifyjs ./libs/watch.js ./libs/eventEmitter.js ./libs/requestAnimationFrame.js ./index.js -o minified/mdv.min.js --source-map minified/mdv.min.js.map

docker -o ./documentation -c manni -s yes -I -x documentation,node_modules 

# Add anything to Git:
git add .
git commit . -m "${GITCOMMENT}"
git push