# infinimesh proto

Module `github.com/infinimesh/proto`. gRPC, Connect, and OpenAPI for the Infinimesh platform.

## Checks

`make commit-check` runs `fmt`, `race`, `test-fuzz`, and `code-ql-gate`. `fmt` writes Go files that `gofmt` would change. `code-ql` runs the CodeQL CLI and writes SARIF under `.tmp/codeql/`. The gate fails when a result is level `error`, ignoring paths under `vendor`. `jq` is required. GitHub Actions runs the same race and fuzz steps, and CodeQL on pull requests.

## Editing the schema

Message fields, gRPC methods, and REST paths live in the `.proto` files. `make generate` rewrites the Go, gRPC, Connect, and gateway stubs, `api.swagger.json`, the TypeScript SDK in `build/es`, and the Python SDK in `gen/python`. Do not edit those files by hand. Field comments are the OpenAPI descriptions.

Plugins are pinned: `protoc-gen-go` v1.36.12, `protoc-gen-go-grpc` v1.6.2, `protoc-gen-connect-go` v1.21.0, `protoc-gen-grpc-gateway` and `protoc-gen-openapiv2` v2.31.0, buf v1.55.1, `buf.build/bufbuild/es` v1.6.0, `buf.build/connectrpc/es` v1.3.0, `buf.build/protocolbuffers/python` and `pyi` v33.4, `buf.build/grpc/python` v1.76.0. `make generate` installs the Go plugins. The TypeScript and Python plugins are remote.

```bash
make generate
```

Commit the proto change and the generated files together. GitHub Actions runs `make buf-check`: `buf lint`, `buf breaking` against the latest tag, then `buf generate`, and fails if the generated files differ. Until the first tag, breaking is skipped. On `main`, `buf push` runs when `BUF_TOKEN` is set. That push publishes the module to buf.build. The TypeScript package is `infinimesh-proto` at `build/es`. The Python package is `gen/python`.

See [docs/api-versioning.md](docs/api-versioning.md).

`buf lint` uses STANDARD except `PACKAGE_DIRECTORY_MATCH`, `ENUM_VALUE_PREFIX`, `ENUM_ZERO_VALUE_SUFFIX`, `RPC_REQUEST_STANDARD_NAME`, `RPC_RESPONSE_STANDARD_NAME`, and `RPC_REQUEST_RESPONSE_UNIQUE`. Those match the schema as it is today.

Apache-2.0.
