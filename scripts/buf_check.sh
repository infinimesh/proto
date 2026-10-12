#!/bin/sh
set -eu
cd "$(dirname "$0")/.."

export PATH="$(go env GOPATH)/bin:${PATH}"

buf lint

if tag="$(git describe --tags --abbrev=0 2>/dev/null)"; then
  buf breaking --against ".git#tag=${tag}"
else
  echo "buf breaking skipped: no tag yet. v1.0.0 is the first baseline."
fi

sh scripts/generate.sh

if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
  echo "buf generate changed committed files. Commit that output. Do not edit generated files by hand."
  git status --short
  git diff --stat
  exit 1
fi
