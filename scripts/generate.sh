#!/bin/sh
set -eu
cd "$(dirname "$0")/.."

go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.36.12
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.6.2
go install connectrpc.com/connect/cmd/protoc-gen-connect-go@v1.21.0
go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@v2.31.0
go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v2.31.0

export PATH="$(go env GOPATH)/bin:${PATH}"
buf generate
buf generate --template buf.gen.web.yaml
buf generate --template buf.gen.python.yaml
