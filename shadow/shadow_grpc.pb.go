//
//Copyright © 2021-2023 Infinite Devices GmbH
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
// source: shadow/shadow.proto

package shadow

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
	ShadowService_Get_FullMethodName          = "/infinimesh.shadow.ShadowService/Get"
	ShadowService_Patch_FullMethodName        = "/infinimesh.shadow.ShadowService/Patch"
	ShadowService_Remove_FullMethodName       = "/infinimesh.shadow.ShadowService/Remove"
	ShadowService_StreamShadow_FullMethodName = "/infinimesh.shadow.ShadowService/StreamShadow"
)

// ShadowServiceClient is the client API for ShadowService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ShadowServiceClient interface {
	Get(ctx context.Context, in *GetRequest, opts ...grpc.CallOption) (*GetResponse, error)
	Patch(ctx context.Context, in *Shadow, opts ...grpc.CallOption) (*Shadow, error)
	Remove(ctx context.Context, in *RemoveRequest, opts ...grpc.CallOption) (*Shadow, error)
	StreamShadow(ctx context.Context, in *StreamShadowRequest, opts ...grpc.CallOption) (ShadowService_StreamShadowClient, error)
}

type shadowServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewShadowServiceClient(cc grpc.ClientConnInterface) ShadowServiceClient {
	return &shadowServiceClient{cc}
}

func (c *shadowServiceClient) Get(ctx context.Context, in *GetRequest, opts ...grpc.CallOption) (*GetResponse, error) {
	out := new(GetResponse)
	err := c.cc.Invoke(ctx, ShadowService_Get_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shadowServiceClient) Patch(ctx context.Context, in *Shadow, opts ...grpc.CallOption) (*Shadow, error) {
	out := new(Shadow)
	err := c.cc.Invoke(ctx, ShadowService_Patch_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shadowServiceClient) Remove(ctx context.Context, in *RemoveRequest, opts ...grpc.CallOption) (*Shadow, error) {
	out := new(Shadow)
	err := c.cc.Invoke(ctx, ShadowService_Remove_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shadowServiceClient) StreamShadow(ctx context.Context, in *StreamShadowRequest, opts ...grpc.CallOption) (ShadowService_StreamShadowClient, error) {
	stream, err := c.cc.NewStream(ctx, &ShadowService_ServiceDesc.Streams[0], ShadowService_StreamShadow_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &shadowServiceStreamShadowClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ShadowService_StreamShadowClient interface {
	Recv() (*Shadow, error)
	grpc.ClientStream
}

type shadowServiceStreamShadowClient struct {
	grpc.ClientStream
}

func (x *shadowServiceStreamShadowClient) Recv() (*Shadow, error) {
	m := new(Shadow)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// ShadowServiceServer is the server API for ShadowService service.
// All implementations must embed UnimplementedShadowServiceServer
// for forward compatibility
type ShadowServiceServer interface {
	Get(context.Context, *GetRequest) (*GetResponse, error)
	Patch(context.Context, *Shadow) (*Shadow, error)
	Remove(context.Context, *RemoveRequest) (*Shadow, error)
	StreamShadow(*StreamShadowRequest, ShadowService_StreamShadowServer) error
	mustEmbedUnimplementedShadowServiceServer()
}

// UnimplementedShadowServiceServer must be embedded to have forward compatible implementations.
type UnimplementedShadowServiceServer struct {
}

func (UnimplementedShadowServiceServer) Get(context.Context, *GetRequest) (*GetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedShadowServiceServer) Patch(context.Context, *Shadow) (*Shadow, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Patch not implemented")
}
func (UnimplementedShadowServiceServer) Remove(context.Context, *RemoveRequest) (*Shadow, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Remove not implemented")
}
func (UnimplementedShadowServiceServer) StreamShadow(*StreamShadowRequest, ShadowService_StreamShadowServer) error {
	return status.Errorf(codes.Unimplemented, "method StreamShadow not implemented")
}
func (UnimplementedShadowServiceServer) mustEmbedUnimplementedShadowServiceServer() {}

// UnsafeShadowServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ShadowServiceServer will
// result in compilation errors.
type UnsafeShadowServiceServer interface {
	mustEmbedUnimplementedShadowServiceServer()
}

func RegisterShadowServiceServer(s grpc.ServiceRegistrar, srv ShadowServiceServer) {
	s.RegisterService(&ShadowService_ServiceDesc, srv)
}

func _ShadowService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShadowServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ShadowService_Get_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShadowServiceServer).Get(ctx, req.(*GetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShadowService_Patch_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Shadow)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShadowServiceServer).Patch(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ShadowService_Patch_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShadowServiceServer).Patch(ctx, req.(*Shadow))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShadowService_Remove_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShadowServiceServer).Remove(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ShadowService_Remove_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShadowServiceServer).Remove(ctx, req.(*RemoveRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShadowService_StreamShadow_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(StreamShadowRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ShadowServiceServer).StreamShadow(m, &shadowServiceStreamShadowServer{stream})
}

type ShadowService_StreamShadowServer interface {
	Send(*Shadow) error
	grpc.ServerStream
}

type shadowServiceStreamShadowServer struct {
	grpc.ServerStream
}

func (x *shadowServiceStreamShadowServer) Send(m *Shadow) error {
	return x.ServerStream.SendMsg(m)
}

// ShadowService_ServiceDesc is the grpc.ServiceDesc for ShadowService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ShadowService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "infinimesh.shadow.ShadowService",
	HandlerType: (*ShadowServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Get",
			Handler:    _ShadowService_Get_Handler,
		},
		{
			MethodName: "Patch",
			Handler:    _ShadowService_Patch_Handler,
		},
		{
			MethodName: "Remove",
			Handler:    _ShadowService_Remove_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "StreamShadow",
			Handler:       _ShadowService_StreamShadow_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "shadow/shadow.proto",
}
