// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: timeseries/timeseries.proto

package timeseriesconnect

import (
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	timeseries "github.com/infinimesh/proto/timeseries"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect.IsAtLeastVersion0_1_0

const (
	// TimeseriesServiceName is the fully-qualified name of the TimeseriesService service.
	TimeseriesServiceName = "infinimesh.timeseries.TimeseriesService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// TimeseriesServiceWriteProcedure is the fully-qualified name of the TimeseriesService's Write RPC.
	TimeseriesServiceWriteProcedure = "/infinimesh.timeseries.TimeseriesService/Write"
	// TimeseriesServiceWriteBulkProcedure is the fully-qualified name of the TimeseriesService's
	// WriteBulk RPC.
	TimeseriesServiceWriteBulkProcedure = "/infinimesh.timeseries.TimeseriesService/WriteBulk"
	// TimeseriesServiceReadProcedure is the fully-qualified name of the TimeseriesService's Read RPC.
	TimeseriesServiceReadProcedure = "/infinimesh.timeseries.TimeseriesService/Read"
	// TimeseriesServiceStatProcedure is the fully-qualified name of the TimeseriesService's Stat RPC.
	TimeseriesServiceStatProcedure = "/infinimesh.timeseries.TimeseriesService/Stat"
	// TimeseriesServiceFlushProcedure is the fully-qualified name of the TimeseriesService's Flush RPC.
	TimeseriesServiceFlushProcedure = "/infinimesh.timeseries.TimeseriesService/Flush"
)

// TimeseriesServiceClient is a client for the infinimesh.timeseries.TimeseriesService service.
type TimeseriesServiceClient interface {
	Write(context.Context, *connect.Request[timeseries.WriteRequest]) (*connect.Response[timeseries.WriteResponse], error)
	WriteBulk(context.Context, *connect.Request[timeseries.WriteBulkRequest]) (*connect.Response[timeseries.WriteBulkResponse], error)
	Read(context.Context, *connect.Request[timeseries.ReadRequest]) (*connect.Response[timeseries.ReadResponse], error)
	Stat(context.Context, *connect.Request[timeseries.StatRequest]) (*connect.Response[timeseries.StatResponse], error)
	Flush(context.Context, *connect.Request[timeseries.FlushRequest]) (*connect.Response[timeseries.FlushResponse], error)
}

// NewTimeseriesServiceClient constructs a client for the infinimesh.timeseries.TimeseriesService
// service. By default, it uses the Connect protocol with the binary Protobuf Codec, asks for
// gzipped responses, and sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply
// the connect.WithGRPC() or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewTimeseriesServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) TimeseriesServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &timeseriesServiceClient{
		write: connect.NewClient[timeseries.WriteRequest, timeseries.WriteResponse](
			httpClient,
			baseURL+TimeseriesServiceWriteProcedure,
			opts...,
		),
		writeBulk: connect.NewClient[timeseries.WriteBulkRequest, timeseries.WriteBulkResponse](
			httpClient,
			baseURL+TimeseriesServiceWriteBulkProcedure,
			opts...,
		),
		read: connect.NewClient[timeseries.ReadRequest, timeseries.ReadResponse](
			httpClient,
			baseURL+TimeseriesServiceReadProcedure,
			opts...,
		),
		stat: connect.NewClient[timeseries.StatRequest, timeseries.StatResponse](
			httpClient,
			baseURL+TimeseriesServiceStatProcedure,
			opts...,
		),
		flush: connect.NewClient[timeseries.FlushRequest, timeseries.FlushResponse](
			httpClient,
			baseURL+TimeseriesServiceFlushProcedure,
			opts...,
		),
	}
}

// timeseriesServiceClient implements TimeseriesServiceClient.
type timeseriesServiceClient struct {
	write     *connect.Client[timeseries.WriteRequest, timeseries.WriteResponse]
	writeBulk *connect.Client[timeseries.WriteBulkRequest, timeseries.WriteBulkResponse]
	read      *connect.Client[timeseries.ReadRequest, timeseries.ReadResponse]
	stat      *connect.Client[timeseries.StatRequest, timeseries.StatResponse]
	flush     *connect.Client[timeseries.FlushRequest, timeseries.FlushResponse]
}

// Write calls infinimesh.timeseries.TimeseriesService.Write.
func (c *timeseriesServiceClient) Write(ctx context.Context, req *connect.Request[timeseries.WriteRequest]) (*connect.Response[timeseries.WriteResponse], error) {
	return c.write.CallUnary(ctx, req)
}

// WriteBulk calls infinimesh.timeseries.TimeseriesService.WriteBulk.
func (c *timeseriesServiceClient) WriteBulk(ctx context.Context, req *connect.Request[timeseries.WriteBulkRequest]) (*connect.Response[timeseries.WriteBulkResponse], error) {
	return c.writeBulk.CallUnary(ctx, req)
}

// Read calls infinimesh.timeseries.TimeseriesService.Read.
func (c *timeseriesServiceClient) Read(ctx context.Context, req *connect.Request[timeseries.ReadRequest]) (*connect.Response[timeseries.ReadResponse], error) {
	return c.read.CallUnary(ctx, req)
}

// Stat calls infinimesh.timeseries.TimeseriesService.Stat.
func (c *timeseriesServiceClient) Stat(ctx context.Context, req *connect.Request[timeseries.StatRequest]) (*connect.Response[timeseries.StatResponse], error) {
	return c.stat.CallUnary(ctx, req)
}

// Flush calls infinimesh.timeseries.TimeseriesService.Flush.
func (c *timeseriesServiceClient) Flush(ctx context.Context, req *connect.Request[timeseries.FlushRequest]) (*connect.Response[timeseries.FlushResponse], error) {
	return c.flush.CallUnary(ctx, req)
}

// TimeseriesServiceHandler is an implementation of the infinimesh.timeseries.TimeseriesService
// service.
type TimeseriesServiceHandler interface {
	Write(context.Context, *connect.Request[timeseries.WriteRequest]) (*connect.Response[timeseries.WriteResponse], error)
	WriteBulk(context.Context, *connect.Request[timeseries.WriteBulkRequest]) (*connect.Response[timeseries.WriteBulkResponse], error)
	Read(context.Context, *connect.Request[timeseries.ReadRequest]) (*connect.Response[timeseries.ReadResponse], error)
	Stat(context.Context, *connect.Request[timeseries.StatRequest]) (*connect.Response[timeseries.StatResponse], error)
	Flush(context.Context, *connect.Request[timeseries.FlushRequest]) (*connect.Response[timeseries.FlushResponse], error)
}

// NewTimeseriesServiceHandler builds an HTTP handler from the service implementation. It returns
// the path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewTimeseriesServiceHandler(svc TimeseriesServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	timeseriesServiceWriteHandler := connect.NewUnaryHandler(
		TimeseriesServiceWriteProcedure,
		svc.Write,
		opts...,
	)
	timeseriesServiceWriteBulkHandler := connect.NewUnaryHandler(
		TimeseriesServiceWriteBulkProcedure,
		svc.WriteBulk,
		opts...,
	)
	timeseriesServiceReadHandler := connect.NewUnaryHandler(
		TimeseriesServiceReadProcedure,
		svc.Read,
		opts...,
	)
	timeseriesServiceStatHandler := connect.NewUnaryHandler(
		TimeseriesServiceStatProcedure,
		svc.Stat,
		opts...,
	)
	timeseriesServiceFlushHandler := connect.NewUnaryHandler(
		TimeseriesServiceFlushProcedure,
		svc.Flush,
		opts...,
	)
	return "/infinimesh.timeseries.TimeseriesService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case TimeseriesServiceWriteProcedure:
			timeseriesServiceWriteHandler.ServeHTTP(w, r)
		case TimeseriesServiceWriteBulkProcedure:
			timeseriesServiceWriteBulkHandler.ServeHTTP(w, r)
		case TimeseriesServiceReadProcedure:
			timeseriesServiceReadHandler.ServeHTTP(w, r)
		case TimeseriesServiceStatProcedure:
			timeseriesServiceStatHandler.ServeHTTP(w, r)
		case TimeseriesServiceFlushProcedure:
			timeseriesServiceFlushHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedTimeseriesServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedTimeseriesServiceHandler struct{}

func (UnimplementedTimeseriesServiceHandler) Write(context.Context, *connect.Request[timeseries.WriteRequest]) (*connect.Response[timeseries.WriteResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("infinimesh.timeseries.TimeseriesService.Write is not implemented"))
}

func (UnimplementedTimeseriesServiceHandler) WriteBulk(context.Context, *connect.Request[timeseries.WriteBulkRequest]) (*connect.Response[timeseries.WriteBulkResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("infinimesh.timeseries.TimeseriesService.WriteBulk is not implemented"))
}

func (UnimplementedTimeseriesServiceHandler) Read(context.Context, *connect.Request[timeseries.ReadRequest]) (*connect.Response[timeseries.ReadResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("infinimesh.timeseries.TimeseriesService.Read is not implemented"))
}

func (UnimplementedTimeseriesServiceHandler) Stat(context.Context, *connect.Request[timeseries.StatRequest]) (*connect.Response[timeseries.StatResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("infinimesh.timeseries.TimeseriesService.Stat is not implemented"))
}

func (UnimplementedTimeseriesServiceHandler) Flush(context.Context, *connect.Request[timeseries.FlushRequest]) (*connect.Response[timeseries.FlushResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("infinimesh.timeseries.TimeseriesService.Flush is not implemented"))
}
