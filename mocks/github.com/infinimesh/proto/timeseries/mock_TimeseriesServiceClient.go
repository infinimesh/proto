// Code generated by mockery v2.42.0. DO NOT EDIT.

package timeseries_mocks

import (
	context "context"

	grpc "google.golang.org/grpc"

	mock "github.com/stretchr/testify/mock"

	timeseries "github.com/infinimesh/proto/timeseries"
)

// MockTimeseriesServiceClient is an autogenerated mock type for the TimeseriesServiceClient type
type MockTimeseriesServiceClient struct {
	mock.Mock
}

type MockTimeseriesServiceClient_Expecter struct {
	mock *mock.Mock
}

func (_m *MockTimeseriesServiceClient) EXPECT() *MockTimeseriesServiceClient_Expecter {
	return &MockTimeseriesServiceClient_Expecter{mock: &_m.Mock}
}

// Flush provides a mock function with given fields: ctx, in, opts
func (_m *MockTimeseriesServiceClient) Flush(ctx context.Context, in *timeseries.FlushRequest, opts ...grpc.CallOption) (*timeseries.FlushResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for Flush")
	}

	var r0 *timeseries.FlushResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *timeseries.FlushRequest, ...grpc.CallOption) (*timeseries.FlushResponse, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *timeseries.FlushRequest, ...grpc.CallOption) *timeseries.FlushResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*timeseries.FlushResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *timeseries.FlushRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockTimeseriesServiceClient_Flush_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Flush'
type MockTimeseriesServiceClient_Flush_Call struct {
	*mock.Call
}

// Flush is a helper method to define mock.On call
//   - ctx context.Context
//   - in *timeseries.FlushRequest
//   - opts ...grpc.CallOption
func (_e *MockTimeseriesServiceClient_Expecter) Flush(ctx interface{}, in interface{}, opts ...interface{}) *MockTimeseriesServiceClient_Flush_Call {
	return &MockTimeseriesServiceClient_Flush_Call{Call: _e.mock.On("Flush",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockTimeseriesServiceClient_Flush_Call) Run(run func(ctx context.Context, in *timeseries.FlushRequest, opts ...grpc.CallOption)) *MockTimeseriesServiceClient_Flush_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*timeseries.FlushRequest), variadicArgs...)
	})
	return _c
}

func (_c *MockTimeseriesServiceClient_Flush_Call) Return(_a0 *timeseries.FlushResponse, _a1 error) *MockTimeseriesServiceClient_Flush_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockTimeseriesServiceClient_Flush_Call) RunAndReturn(run func(context.Context, *timeseries.FlushRequest, ...grpc.CallOption) (*timeseries.FlushResponse, error)) *MockTimeseriesServiceClient_Flush_Call {
	_c.Call.Return(run)
	return _c
}

// Read provides a mock function with given fields: ctx, in, opts
func (_m *MockTimeseriesServiceClient) Read(ctx context.Context, in *timeseries.ReadRequest, opts ...grpc.CallOption) (*timeseries.ReadResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for Read")
	}

	var r0 *timeseries.ReadResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *timeseries.ReadRequest, ...grpc.CallOption) (*timeseries.ReadResponse, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *timeseries.ReadRequest, ...grpc.CallOption) *timeseries.ReadResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*timeseries.ReadResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *timeseries.ReadRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockTimeseriesServiceClient_Read_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Read'
type MockTimeseriesServiceClient_Read_Call struct {
	*mock.Call
}

// Read is a helper method to define mock.On call
//   - ctx context.Context
//   - in *timeseries.ReadRequest
//   - opts ...grpc.CallOption
func (_e *MockTimeseriesServiceClient_Expecter) Read(ctx interface{}, in interface{}, opts ...interface{}) *MockTimeseriesServiceClient_Read_Call {
	return &MockTimeseriesServiceClient_Read_Call{Call: _e.mock.On("Read",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockTimeseriesServiceClient_Read_Call) Run(run func(ctx context.Context, in *timeseries.ReadRequest, opts ...grpc.CallOption)) *MockTimeseriesServiceClient_Read_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*timeseries.ReadRequest), variadicArgs...)
	})
	return _c
}

func (_c *MockTimeseriesServiceClient_Read_Call) Return(_a0 *timeseries.ReadResponse, _a1 error) *MockTimeseriesServiceClient_Read_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockTimeseriesServiceClient_Read_Call) RunAndReturn(run func(context.Context, *timeseries.ReadRequest, ...grpc.CallOption) (*timeseries.ReadResponse, error)) *MockTimeseriesServiceClient_Read_Call {
	_c.Call.Return(run)
	return _c
}

// Stat provides a mock function with given fields: ctx, in, opts
func (_m *MockTimeseriesServiceClient) Stat(ctx context.Context, in *timeseries.StatRequest, opts ...grpc.CallOption) (*timeseries.StatResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for Stat")
	}

	var r0 *timeseries.StatResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *timeseries.StatRequest, ...grpc.CallOption) (*timeseries.StatResponse, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *timeseries.StatRequest, ...grpc.CallOption) *timeseries.StatResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*timeseries.StatResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *timeseries.StatRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockTimeseriesServiceClient_Stat_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Stat'
type MockTimeseriesServiceClient_Stat_Call struct {
	*mock.Call
}

// Stat is a helper method to define mock.On call
//   - ctx context.Context
//   - in *timeseries.StatRequest
//   - opts ...grpc.CallOption
func (_e *MockTimeseriesServiceClient_Expecter) Stat(ctx interface{}, in interface{}, opts ...interface{}) *MockTimeseriesServiceClient_Stat_Call {
	return &MockTimeseriesServiceClient_Stat_Call{Call: _e.mock.On("Stat",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockTimeseriesServiceClient_Stat_Call) Run(run func(ctx context.Context, in *timeseries.StatRequest, opts ...grpc.CallOption)) *MockTimeseriesServiceClient_Stat_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*timeseries.StatRequest), variadicArgs...)
	})
	return _c
}

func (_c *MockTimeseriesServiceClient_Stat_Call) Return(_a0 *timeseries.StatResponse, _a1 error) *MockTimeseriesServiceClient_Stat_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockTimeseriesServiceClient_Stat_Call) RunAndReturn(run func(context.Context, *timeseries.StatRequest, ...grpc.CallOption) (*timeseries.StatResponse, error)) *MockTimeseriesServiceClient_Stat_Call {
	_c.Call.Return(run)
	return _c
}

// Write provides a mock function with given fields: ctx, in, opts
func (_m *MockTimeseriesServiceClient) Write(ctx context.Context, in *timeseries.WriteRequest, opts ...grpc.CallOption) (*timeseries.WriteResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for Write")
	}

	var r0 *timeseries.WriteResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *timeseries.WriteRequest, ...grpc.CallOption) (*timeseries.WriteResponse, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *timeseries.WriteRequest, ...grpc.CallOption) *timeseries.WriteResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*timeseries.WriteResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *timeseries.WriteRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockTimeseriesServiceClient_Write_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Write'
type MockTimeseriesServiceClient_Write_Call struct {
	*mock.Call
}

// Write is a helper method to define mock.On call
//   - ctx context.Context
//   - in *timeseries.WriteRequest
//   - opts ...grpc.CallOption
func (_e *MockTimeseriesServiceClient_Expecter) Write(ctx interface{}, in interface{}, opts ...interface{}) *MockTimeseriesServiceClient_Write_Call {
	return &MockTimeseriesServiceClient_Write_Call{Call: _e.mock.On("Write",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockTimeseriesServiceClient_Write_Call) Run(run func(ctx context.Context, in *timeseries.WriteRequest, opts ...grpc.CallOption)) *MockTimeseriesServiceClient_Write_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*timeseries.WriteRequest), variadicArgs...)
	})
	return _c
}

func (_c *MockTimeseriesServiceClient_Write_Call) Return(_a0 *timeseries.WriteResponse, _a1 error) *MockTimeseriesServiceClient_Write_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockTimeseriesServiceClient_Write_Call) RunAndReturn(run func(context.Context, *timeseries.WriteRequest, ...grpc.CallOption) (*timeseries.WriteResponse, error)) *MockTimeseriesServiceClient_Write_Call {
	_c.Call.Return(run)
	return _c
}

// WriteBulk provides a mock function with given fields: ctx, in, opts
func (_m *MockTimeseriesServiceClient) WriteBulk(ctx context.Context, in *timeseries.WriteBulkRequest, opts ...grpc.CallOption) (*timeseries.WriteBulkResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for WriteBulk")
	}

	var r0 *timeseries.WriteBulkResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *timeseries.WriteBulkRequest, ...grpc.CallOption) (*timeseries.WriteBulkResponse, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *timeseries.WriteBulkRequest, ...grpc.CallOption) *timeseries.WriteBulkResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*timeseries.WriteBulkResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *timeseries.WriteBulkRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockTimeseriesServiceClient_WriteBulk_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'WriteBulk'
type MockTimeseriesServiceClient_WriteBulk_Call struct {
	*mock.Call
}

// WriteBulk is a helper method to define mock.On call
//   - ctx context.Context
//   - in *timeseries.WriteBulkRequest
//   - opts ...grpc.CallOption
func (_e *MockTimeseriesServiceClient_Expecter) WriteBulk(ctx interface{}, in interface{}, opts ...interface{}) *MockTimeseriesServiceClient_WriteBulk_Call {
	return &MockTimeseriesServiceClient_WriteBulk_Call{Call: _e.mock.On("WriteBulk",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockTimeseriesServiceClient_WriteBulk_Call) Run(run func(ctx context.Context, in *timeseries.WriteBulkRequest, opts ...grpc.CallOption)) *MockTimeseriesServiceClient_WriteBulk_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*timeseries.WriteBulkRequest), variadicArgs...)
	})
	return _c
}

func (_c *MockTimeseriesServiceClient_WriteBulk_Call) Return(_a0 *timeseries.WriteBulkResponse, _a1 error) *MockTimeseriesServiceClient_WriteBulk_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockTimeseriesServiceClient_WriteBulk_Call) RunAndReturn(run func(context.Context, *timeseries.WriteBulkRequest, ...grpc.CallOption) (*timeseries.WriteBulkResponse, error)) *MockTimeseriesServiceClient_WriteBulk_Call {
	_c.Call.Return(run)
	return _c
}

// NewMockTimeseriesServiceClient creates a new instance of MockTimeseriesServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewMockTimeseriesServiceClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *MockTimeseriesServiceClient {
	mock := &MockTimeseriesServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
