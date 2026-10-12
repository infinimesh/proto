# API versioning

Protobuf packages are `infinimesh.node.v1`, `infinimesh.shadow.v1`, `infinimesh.plugins.v1`, and `infinimesh.pairing.v1`. The wire contract is the field number. JSON names follow the proto names.

Pairing is `POST /v1/pairing` and `GET /v1/pairing/connection`. `/v1/handsfree`, `/handsfree`, and `/handsfree/connection` stay for one minor release. The gRPC service is `infinimesh.pairing.v1.PairingService`. The OpenAPI document title is `Infinimesh API` and its version is `1.0.0`.

REST methods are under `/v1`. The previous path and method stay as an alias. Create is `POST /v1/...`. The old `PUT` path is the alias. Those aliases stay for one minor release.

`exp` and `inf` remain, marked `deprecated`, next to `expires_at` and `infinite`. `GetRequest.pool` remains next to `devices` and `device`. A deprecated field is the removal signal. Do not add a replacement under the same field number.

`buf breaking` in CI compares the schema with the latest tag. When there is no tag, a pull request compares with its base branch. `make generate` rewrites the Go, gRPC, Connect, gateway, and OpenAPI files, plus `build/es` and `gen/python`. Do not edit those files by hand.
