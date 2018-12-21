#!/bin/sh

STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep ".jsx\{0,1\}$")
ESLINT="$(git rev-parse --show-toplevel)/node_modules/.bin/eslint"
JEST="$(git rev-parse --show-toplevel)/node_modules/.bin/jest"

if [[ "$STAGED_FILES" = "" ]]; then
  exit 0
fi

LINTER_PASSED=true
TESTS_PASSED=true

printf "\nValidating Javascript:\n"

# Check for eslint
if [[ ! -x "$ESLINT" ]]; then
  printf "\t\033[41mPlease install ESlint\033[0m (npm i --save-dev eslint)"
  exit 1
fi

for FILE in $STAGED_FILES
do
  "$ESLINT" "$FILE"

  if [[ "$?" == 0 ]]; then
    printf "\t\033[32mESLint Passed: $FILE\033[0m"
  else
    printf "\t\033[41mESLint Failed: $FILE\033[0m"
    PASS=false
  fi
done

printf "\nJavascript validation completed!\n"

printf "\nRunning tests:\n"

# Check for jest
if [[ ! -x "$JEST" ]]; then
  printf "\t\033[41mPlease install jest\033[0m (npm i --save-dev jest babel-jest jest-react-native babel-preset-react-native react-test-renderer)"
  exit 1
fi

for FILE in $STAGED_FILES
do
  "$JEST" "$FILE"

  if [[ "$?" == 0 ]]; then
    printf "\t\033[32mTest Passed: $FILE\033[0m"
  else
    printf "\t\033[41mTest Failed: $FILE\033[0m"
    PASS=false
  fi
done

printf "\nTesting complete!\n"

if ! $LINTER_PASSED; then
  printf "\033[41mCOMMIT FAILED:\033[0m Your commit contains files that should pass ESLint but do not. Please fix the ESLint errors and try again.\n"
  exit 1
fi

if ! $TESTS_PASSED; then
  printf "\033[41mCOMMIT FAILED:\033[0m Your commit does not pass the existing test suite. Please update your files to pass all tests and try again.\n"
  exit 1
else
  printf "\033[42mCOMMIT SUCCEEDED\033[0m\n"
fi

exit $?