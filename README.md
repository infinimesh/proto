# infinimesh proto

Module `github.com/infinimesh/proto`. gRPC, Connect, and OpenAPI for the Infinimesh platform.

## Checks

`make commit-check` runs `fmt`, `race`, `test-fuzz`, and `code-ql-gate`. `fmt` writes Go files that `gofmt` would change. `code-ql` runs the CodeQL CLI and writes SARIF under `.tmp/codeql/`. The gate fails when a result is level `error`, ignoring paths under `vendor`. `jq` is required. GitHub Actions runs the same race and fuzz steps, and CodeQL on pull requests.

## Editing the schema

Install `buf`, `protoc-gen-go`, `protoc-gen-go-grpc`, `protoc-gen-connect-go`, `protoc-gen-grpc-gateway`, and `protoc-gen-openapiv2`. From this repository:

```bash
buf mod update
buf generate
```

Commit the proto files and the regenerated stubs together.

Apache-2.0.
