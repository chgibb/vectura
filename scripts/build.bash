./node_modules/.bin/tsc
if [[ $? != 0 ]]; then
    exit 1
fi

./node_modules/.bin/browserify src/index.js  --debug -o docs/index.js
if [[ $? != 0 ]]; then
    exit 1
fi
