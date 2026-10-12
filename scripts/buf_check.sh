#!/bin/sh
set -eu
cd "$(dirname "$0")/.."

export PATH="$(go env GOPATH)/bin:${PATH}"

buf lint

against=""
if tag="$(git describe --tags --abbrev=0 2>/dev/null)"; then
  against=".git#tag=${tag}"
elif [ -n "${GITHUB_BASE_REF:-}" ]; then
  # actions/checkout leaves the base as origin/<ref>, not refs/heads/<ref>.
  # buf clones this repo and only sees refs/heads.
  git fetch --no-tags origin "${GITHUB_BASE_REF}:refs/heads/${GITHUB_BASE_REF}"
  against=".git#branch=${GITHUB_BASE_REF}"
fi
if [ -n "${against}" ]; then
  buf breaking --against "${against}"
else
  echo "buf breaking skipped: no tag and no base branch"
fi

sh scripts/generate.sh

if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
  echo "buf generate changed committed files. Commit that output. Do not edit generated files by hand."
  git status --short
  git diff --stat
  exit 1
fi
