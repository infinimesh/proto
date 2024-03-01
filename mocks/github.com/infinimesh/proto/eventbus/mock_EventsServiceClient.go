// Code generated by mockery v2.40.1. DO NOT EDIT.

package eventbus_mocks

import (
	context "context"

	eventbus "github.com/infinimesh/proto/eventbus"
	grpc "google.golang.org/grpc"

	mock "github.com/stretchr/testify/mock"

	node "github.com/infinimesh/proto/node"
)

// MockEventsServiceClient is an autogenerated mock type for the EventsServiceClient type
type MockEventsServiceClient struct {
	mock.Mock
}

type MockEventsServiceClient_Expecter struct {
	mock *mock.Mock
}

func (_m *MockEventsServiceClient) EXPECT() *MockEventsServiceClient_Expecter {
	return &MockEventsServiceClient_Expecter{mock: &_m.Mock}
}

// Subscribe provides a mock function with given fields: ctx, in, opts
func (_m *MockEventsServiceClient) Subscribe(ctx context.Context, in *node.EmptyMessage, opts ...grpc.CallOption) (eventbus.EventsService_SubscribeClient, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for Subscribe")
	}

	var r0 eventbus.EventsService_SubscribeClient
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *node.EmptyMessage, ...grpc.CallOption) (eventbus.EventsService_SubscribeClient, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *node.EmptyMessage, ...grpc.CallOption) eventbus.EventsService_SubscribeClient); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(eventbus.EventsService_SubscribeClient)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *node.EmptyMessage, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockEventsServiceClient_Subscribe_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Subscribe'
type MockEventsServiceClient_Subscribe_Call struct {
	*mock.Call
}

// Subscribe is a helper method to define mock.On call
//   - ctx context.Context
//   - in *node.EmptyMessage
//   - opts ...grpc.CallOption
func (_e *MockEventsServiceClient_Expecter) Subscribe(ctx interface{}, in interface{}, opts ...interface{}) *MockEventsServiceClient_Subscribe_Call {
	return &MockEventsServiceClient_Subscribe_Call{Call: _e.mock.On("Subscribe",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockEventsServiceClient_Subscribe_Call) Run(run func(ctx context.Context, in *node.EmptyMessage, opts ...grpc.CallOption)) *MockEventsServiceClient_Subscribe_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*node.EmptyMessage), variadicArgs...)
	})
	return _c
}

func (_c *MockEventsServiceClient_Subscribe_Call) Return(_a0 eventbus.EventsService_SubscribeClient, _a1 error) *MockEventsServiceClient_Subscribe_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockEventsServiceClient_Subscribe_Call) RunAndReturn(run func(context.Context, *node.EmptyMessage, ...grpc.CallOption) (eventbus.EventsService_SubscribeClient, error)) *MockEventsServiceClient_Subscribe_Call {
	_c.Call.Return(run)
	return _c
}

// NewMockEventsServiceClient creates a new instance of MockEventsServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewMockEventsServiceClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *MockEventsServiceClient {
	mock := &MockEventsServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
