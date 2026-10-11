# infinimesh proto

Module `github.com/infinimesh/proto`. gRPC, Connect, and OpenAPI for the Infinimesh platform.

## Editing the schema

Install `buf`, `protoc-gen-go`, `protoc-gen-go-grpc`, `protoc-gen-connect-go`, `protoc-gen-grpc-gateway`, and `protoc-gen-openapiv2`. From this repository:

```bash
buf mod update
buf generate
```

Commit the proto files and the regenerated stubs together.

Apache-2.0.
