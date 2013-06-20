#!/bin/bash



# Uglify the files:
# requires: npm install uglify-js -g
uglifyjs ./libs/watch.js ./libs/eventEmitter.js ./libs/requestAnimationFrame.js ./index.js -o minified/mdv.min.js --source-map minified/mdv.min.js.map


# Add anything to Git:
git add .