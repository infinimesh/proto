FROM bufbuild/buf:latest as buf

FROM golang:1.27.3-alpine AS builder

COPY --from=buf /usr/local/bin/buf /usr/local/bin/buf

WORKDIR /go/bin

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.36.12 \
    && go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.6.2 \
    && go install connectrpc.com/connect/cmd/protoc-gen-connect-go@v1.21.0 \
    && go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@v2.31.0 \
    && go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v2.31.0

WORKDIR /go/src/github.com/infinimesh/proto
COPY go.mod go.sum ./
RUN go mod download

COPY buf.* ./

RUN buf mod update

LABEL org.opencontainers.image.source https://github.com/infinimesh/proto

ENTRYPOINT [ "buf", "generate" ]