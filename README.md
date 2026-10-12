# infinimesh proto

Module `github.com/infinimesh/proto`. gRPC, Connect, and OpenAPI for the Infinimesh platform.

## Checks

`make commit-check` runs `fmt`, `race`, `test-fuzz`, and `code-ql-gate`. `fmt` writes Go files that `gofmt` would change. `code-ql` runs the CodeQL CLI and writes SARIF under `.tmp/codeql/`. The gate fails when a result is level `error`, ignoring paths under `vendor`. `jq` is required. GitHub Actions runs the same race and fuzz steps, and CodeQL on pull requests.

## Editing the schema

Message fields, gRPC methods, and REST paths live in the `.proto` files. `make generate` rewrites the Go, gRPC, Connect, and gateway stubs and `api.swagger.json`. Do not edit those files by hand. Field comments are the OpenAPI descriptions.

Plugins are pinned: `protoc-gen-go` v1.36.12, `protoc-gen-go-grpc` v1.6.2, `protoc-gen-connect-go` v1.21.0, `protoc-gen-grpc-gateway` and `protoc-gen-openapiv2` v2.31.0, buf v1.55.1. `make generate` installs those plugins.

```bash
make generate
```

Commit the proto change and the generated files together. GitHub Actions runs `make buf-check`: `buf lint`, `buf breaking` against the latest tag (or the pull request base when there is no tag), then `buf generate`, and fails if the generated files differ. On `main`, `buf push` runs when `BUF_TOKEN` is set.

See [docs/api-versioning.md](docs/api-versioning.md).

`buf lint` uses STANDARD except `PACKAGE_DIRECTORY_MATCH`, `ENUM_VALUE_PREFIX`, `ENUM_ZERO_VALUE_SUFFIX`, `RPC_REQUEST_STANDARD_NAME`, `RPC_RESPONSE_STANDARD_NAME`, and `RPC_REQUEST_RESPONSE_UNIQUE`. Those match the schema as it is today.

Apache-2.0.
