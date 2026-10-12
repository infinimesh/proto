# API versioning

Protobuf packages are `infinimesh.node.v1`, `infinimesh.shadow.v1`, `infinimesh.plugins.v1`, and `infinimesh.handsfree.v1`. The wire contract is the field number. JSON names follow the proto names.

REST methods are under `/v1`. The previous path and method stay as an alias. Create is `POST /v1/...`. The old `PUT` path is the alias. Those aliases stay for one minor release.

`exp` and `inf` remain, marked `deprecated`, next to `expires_at` and `infinite`. `GetRequest.pool` remains next to `devices` and `device`. A deprecated field is the removal signal. Do not add a replacement under the same field number.

`buf breaking` in CI compares the schema with the latest tag. When there is no tag, a pull request compares with its base branch. `make generate` rewrites the Go, gRPC, Connect, gateway, and OpenAPI files. Do not edit those files by hand.
