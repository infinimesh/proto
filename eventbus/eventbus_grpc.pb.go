// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: eventbus/eventbus.proto

package eventbus

import (
	context "context"
	node "github.com/infinimesh/proto/node"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	EventsService_Subscribe_FullMethodName = "/infinimesh.eventbus.EventsService/Subscribe"
)

// EventsServiceClient is the client API for EventsService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type EventsServiceClient interface {
	Subscribe(ctx context.Context, in *node.EmptyMessage, opts ...grpc.CallOption) (EventsService_SubscribeClient, error)
}

type eventsServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewEventsServiceClient(cc grpc.ClientConnInterface) EventsServiceClient {
	return &eventsServiceClient{cc}
}

func (c *eventsServiceClient) Subscribe(ctx context.Context, in *node.EmptyMessage, opts ...grpc.CallOption) (EventsService_SubscribeClient, error) {
	stream, err := c.cc.NewStream(ctx, &EventsService_ServiceDesc.Streams[0], EventsService_Subscribe_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &eventsServiceSubscribeClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type EventsService_SubscribeClient interface {
	Recv() (*Event, error)
	grpc.ClientStream
}

type eventsServiceSubscribeClient struct {
	grpc.ClientStream
}

func (x *eventsServiceSubscribeClient) Recv() (*Event, error) {
	m := new(Event)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// EventsServiceServer is the server API for EventsService service.
// All implementations must embed UnimplementedEventsServiceServer
// for forward compatibility
type EventsServiceServer interface {
	Subscribe(*node.EmptyMessage, EventsService_SubscribeServer) error
	mustEmbedUnimplementedEventsServiceServer()
}

// UnimplementedEventsServiceServer must be embedded to have forward compatible implementations.
type UnimplementedEventsServiceServer struct {
}

func (UnimplementedEventsServiceServer) Subscribe(*node.EmptyMessage, EventsService_SubscribeServer) error {
	return status.Errorf(codes.Unimplemented, "method Subscribe not implemented")
}
func (UnimplementedEventsServiceServer) mustEmbedUnimplementedEventsServiceServer() {}

// UnsafeEventsServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to EventsServiceServer will
// result in compilation errors.
type UnsafeEventsServiceServer interface {
	mustEmbedUnimplementedEventsServiceServer()
}

func RegisterEventsServiceServer(s grpc.ServiceRegistrar, srv EventsServiceServer) {
	s.RegisterService(&EventsService_ServiceDesc, srv)
}

func _EventsService_Subscribe_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(node.EmptyMessage)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(EventsServiceServer).Subscribe(m, &eventsServiceSubscribeServer{stream})
}

type EventsService_SubscribeServer interface {
	Send(*Event) error
	grpc.ServerStream
}

type eventsServiceSubscribeServer struct {
	grpc.ServerStream
}

func (x *eventsServiceSubscribeServer) Send(m *Event) error {
	return x.ServerStream.SendMsg(m)
}

// EventsService_ServiceDesc is the grpc.ServiceDesc for EventsService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var EventsService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "infinimesh.eventbus.EventsService",
	HandlerType: (*EventsServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Subscribe",
			Handler:       _EventsService_Subscribe_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "eventbus/eventbus.proto",
}
