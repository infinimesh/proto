//
//Copyright © 2021-2023 Infinite Devices GmbH, Nikita Ivanovski info@slnt-opp.xyz
//
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at
//
//http://www.apache.org/licenses/LICENSE-2.0
//
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.

// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: handsfree/handsfree.proto

package handsfree

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	HandsfreeService_Send_FullMethodName    = "/infinimesh.handsfree.HandsfreeService/Send"
	HandsfreeService_Connect_FullMethodName = "/infinimesh.handsfree.HandsfreeService/Connect"
)

// HandsfreeServiceClient is the client API for HandsfreeService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type HandsfreeServiceClient interface {
	Send(ctx context.Context, in *ControlPacket, opts ...grpc.CallOption) (*ControlPacket, error)
	Connect(ctx context.Context, in *ConnectionRequest, opts ...grpc.CallOption) (HandsfreeService_ConnectClient, error)
}

type handsfreeServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewHandsfreeServiceClient(cc grpc.ClientConnInterface) HandsfreeServiceClient {
	return &handsfreeServiceClient{cc}
}

func (c *handsfreeServiceClient) Send(ctx context.Context, in *ControlPacket, opts ...grpc.CallOption) (*ControlPacket, error) {
	out := new(ControlPacket)
	err := c.cc.Invoke(ctx, HandsfreeService_Send_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *handsfreeServiceClient) Connect(ctx context.Context, in *ConnectionRequest, opts ...grpc.CallOption) (HandsfreeService_ConnectClient, error) {
	stream, err := c.cc.NewStream(ctx, &HandsfreeService_ServiceDesc.Streams[0], HandsfreeService_Connect_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &handsfreeServiceConnectClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type HandsfreeService_ConnectClient interface {
	Recv() (*ControlPacket, error)
	grpc.ClientStream
}

type handsfreeServiceConnectClient struct {
	grpc.ClientStream
}

func (x *handsfreeServiceConnectClient) Recv() (*ControlPacket, error) {
	m := new(ControlPacket)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// HandsfreeServiceServer is the server API for HandsfreeService service.
// All implementations must embed UnimplementedHandsfreeServiceServer
// for forward compatibility
type HandsfreeServiceServer interface {
	Send(context.Context, *ControlPacket) (*ControlPacket, error)
	Connect(*ConnectionRequest, HandsfreeService_ConnectServer) error
	mustEmbedUnimplementedHandsfreeServiceServer()
}

// UnimplementedHandsfreeServiceServer must be embedded to have forward compatible implementations.
type UnimplementedHandsfreeServiceServer struct {
}

func (UnimplementedHandsfreeServiceServer) Send(context.Context, *ControlPacket) (*ControlPacket, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Send not implemented")
}
func (UnimplementedHandsfreeServiceServer) Connect(*ConnectionRequest, HandsfreeService_ConnectServer) error {
	return status.Errorf(codes.Unimplemented, "method Connect not implemented")
}
func (UnimplementedHandsfreeServiceServer) mustEmbedUnimplementedHandsfreeServiceServer() {}

// UnsafeHandsfreeServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to HandsfreeServiceServer will
// result in compilation errors.
type UnsafeHandsfreeServiceServer interface {
	mustEmbedUnimplementedHandsfreeServiceServer()
}

func RegisterHandsfreeServiceServer(s grpc.ServiceRegistrar, srv HandsfreeServiceServer) {
	s.RegisterService(&HandsfreeService_ServiceDesc, srv)
}

func _HandsfreeService_Send_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ControlPacket)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(HandsfreeServiceServer).Send(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: HandsfreeService_Send_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(HandsfreeServiceServer).Send(ctx, req.(*ControlPacket))
	}
	return interceptor(ctx, in, info, handler)
}

func _HandsfreeService_Connect_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(ConnectionRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(HandsfreeServiceServer).Connect(m, &handsfreeServiceConnectServer{stream})
}

type HandsfreeService_ConnectServer interface {
	Send(*ControlPacket) error
	grpc.ServerStream
}

type handsfreeServiceConnectServer struct {
	grpc.ServerStream
}

func (x *handsfreeServiceConnectServer) Send(m *ControlPacket) error {
	return x.ServerStream.SendMsg(m)
}

// HandsfreeService_ServiceDesc is the grpc.ServiceDesc for HandsfreeService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var HandsfreeService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "infinimesh.handsfree.HandsfreeService",
	HandlerType: (*HandsfreeServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Send",
			Handler:    _HandsfreeService_Send_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Connect",
			Handler:       _HandsfreeService_Connect_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "handsfree/handsfree.proto",
}
