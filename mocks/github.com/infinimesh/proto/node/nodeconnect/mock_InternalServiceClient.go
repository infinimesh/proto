// Code generated by mockery v2.40.1. DO NOT EDIT.

package nodeconnect_mocks

import (
	context "context"

	connect "connectrpc.com/connect"

	mock "github.com/stretchr/testify/mock"

	node "github.com/infinimesh/proto/node"
)

// MockInternalServiceClient is an autogenerated mock type for the InternalServiceClient type
type MockInternalServiceClient struct {
	mock.Mock
}

type MockInternalServiceClient_Expecter struct {
	mock *mock.Mock
}

func (_m *MockInternalServiceClient) EXPECT() *MockInternalServiceClient_Expecter {
	return &MockInternalServiceClient_Expecter{mock: &_m.Mock}
}

// GetLDAPProviders provides a mock function with given fields: _a0, _a1
func (_m *MockInternalServiceClient) GetLDAPProviders(_a0 context.Context, _a1 *connect.Request[node.EmptyMessage]) (*connect.Response[node.LDAPProviders], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for GetLDAPProviders")
	}

	var r0 *connect.Response[node.LDAPProviders]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[node.EmptyMessage]) (*connect.Response[node.LDAPProviders], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[node.EmptyMessage]) *connect.Response[node.LDAPProviders]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[node.LDAPProviders])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[node.EmptyMessage]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockInternalServiceClient_GetLDAPProviders_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetLDAPProviders'
type MockInternalServiceClient_GetLDAPProviders_Call struct {
	*mock.Call
}

// GetLDAPProviders is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *connect.Request[node.EmptyMessage]
func (_e *MockInternalServiceClient_Expecter) GetLDAPProviders(_a0 interface{}, _a1 interface{}) *MockInternalServiceClient_GetLDAPProviders_Call {
	return &MockInternalServiceClient_GetLDAPProviders_Call{Call: _e.mock.On("GetLDAPProviders", _a0, _a1)}
}

func (_c *MockInternalServiceClient_GetLDAPProviders_Call) Run(run func(_a0 context.Context, _a1 *connect.Request[node.EmptyMessage])) *MockInternalServiceClient_GetLDAPProviders_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*connect.Request[node.EmptyMessage]))
	})
	return _c
}

func (_c *MockInternalServiceClient_GetLDAPProviders_Call) Return(_a0 *connect.Response[node.LDAPProviders], _a1 error) *MockInternalServiceClient_GetLDAPProviders_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockInternalServiceClient_GetLDAPProviders_Call) RunAndReturn(run func(context.Context, *connect.Request[node.EmptyMessage]) (*connect.Response[node.LDAPProviders], error)) *MockInternalServiceClient_GetLDAPProviders_Call {
	_c.Call.Return(run)
	return _c
}

// NewMockInternalServiceClient creates a new instance of MockInternalServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewMockInternalServiceClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *MockInternalServiceClient {
	mock := &MockInternalServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}