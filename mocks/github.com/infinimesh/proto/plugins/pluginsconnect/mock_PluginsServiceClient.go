// Code generated by mockery v2.42.0. DO NOT EDIT.

package pluginsconnect_mocks

import (
	context "context"

	connect "connectrpc.com/connect"

	mock "github.com/stretchr/testify/mock"

	plugins "github.com/infinimesh/proto/plugins"
)

// MockPluginsServiceClient is an autogenerated mock type for the PluginsServiceClient type
type MockPluginsServiceClient struct {
	mock.Mock
}

type MockPluginsServiceClient_Expecter struct {
	mock *mock.Mock
}

func (_m *MockPluginsServiceClient) EXPECT() *MockPluginsServiceClient_Expecter {
	return &MockPluginsServiceClient_Expecter{mock: &_m.Mock}
}

// Create provides a mock function with given fields: _a0, _a1
func (_m *MockPluginsServiceClient) Create(_a0 context.Context, _a1 *connect.Request[plugins.Plugin]) (*connect.Response[plugins.Plugin], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Create")
	}

	var r0 *connect.Response[plugins.Plugin]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[plugins.Plugin]) (*connect.Response[plugins.Plugin], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[plugins.Plugin]) *connect.Response[plugins.Plugin]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[plugins.Plugin])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[plugins.Plugin]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockPluginsServiceClient_Create_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Create'
type MockPluginsServiceClient_Create_Call struct {
	*mock.Call
}

// Create is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *connect.Request[plugins.Plugin]
func (_e *MockPluginsServiceClient_Expecter) Create(_a0 interface{}, _a1 interface{}) *MockPluginsServiceClient_Create_Call {
	return &MockPluginsServiceClient_Create_Call{Call: _e.mock.On("Create", _a0, _a1)}
}

func (_c *MockPluginsServiceClient_Create_Call) Run(run func(_a0 context.Context, _a1 *connect.Request[plugins.Plugin])) *MockPluginsServiceClient_Create_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*connect.Request[plugins.Plugin]))
	})
	return _c
}

func (_c *MockPluginsServiceClient_Create_Call) Return(_a0 *connect.Response[plugins.Plugin], _a1 error) *MockPluginsServiceClient_Create_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockPluginsServiceClient_Create_Call) RunAndReturn(run func(context.Context, *connect.Request[plugins.Plugin]) (*connect.Response[plugins.Plugin], error)) *MockPluginsServiceClient_Create_Call {
	_c.Call.Return(run)
	return _c
}

// Delete provides a mock function with given fields: _a0, _a1
func (_m *MockPluginsServiceClient) Delete(_a0 context.Context, _a1 *connect.Request[plugins.Plugin]) (*connect.Response[plugins.Plugin], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Delete")
	}

	var r0 *connect.Response[plugins.Plugin]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[plugins.Plugin]) (*connect.Response[plugins.Plugin], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[plugins.Plugin]) *connect.Response[plugins.Plugin]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[plugins.Plugin])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[plugins.Plugin]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockPluginsServiceClient_Delete_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Delete'
type MockPluginsServiceClient_Delete_Call struct {
	*mock.Call
}

// Delete is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *connect.Request[plugins.Plugin]
func (_e *MockPluginsServiceClient_Expecter) Delete(_a0 interface{}, _a1 interface{}) *MockPluginsServiceClient_Delete_Call {
	return &MockPluginsServiceClient_Delete_Call{Call: _e.mock.On("Delete", _a0, _a1)}
}

func (_c *MockPluginsServiceClient_Delete_Call) Run(run func(_a0 context.Context, _a1 *connect.Request[plugins.Plugin])) *MockPluginsServiceClient_Delete_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*connect.Request[plugins.Plugin]))
	})
	return _c
}

func (_c *MockPluginsServiceClient_Delete_Call) Return(_a0 *connect.Response[plugins.Plugin], _a1 error) *MockPluginsServiceClient_Delete_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockPluginsServiceClient_Delete_Call) RunAndReturn(run func(context.Context, *connect.Request[plugins.Plugin]) (*connect.Response[plugins.Plugin], error)) *MockPluginsServiceClient_Delete_Call {
	_c.Call.Return(run)
	return _c
}

// Get provides a mock function with given fields: _a0, _a1
func (_m *MockPluginsServiceClient) Get(_a0 context.Context, _a1 *connect.Request[plugins.Plugin]) (*connect.Response[plugins.Plugin], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Get")
	}

	var r0 *connect.Response[plugins.Plugin]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[plugins.Plugin]) (*connect.Response[plugins.Plugin], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[plugins.Plugin]) *connect.Response[plugins.Plugin]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[plugins.Plugin])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[plugins.Plugin]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockPluginsServiceClient_Get_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Get'
type MockPluginsServiceClient_Get_Call struct {
	*mock.Call
}

// Get is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *connect.Request[plugins.Plugin]
func (_e *MockPluginsServiceClient_Expecter) Get(_a0 interface{}, _a1 interface{}) *MockPluginsServiceClient_Get_Call {
	return &MockPluginsServiceClient_Get_Call{Call: _e.mock.On("Get", _a0, _a1)}
}

func (_c *MockPluginsServiceClient_Get_Call) Run(run func(_a0 context.Context, _a1 *connect.Request[plugins.Plugin])) *MockPluginsServiceClient_Get_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*connect.Request[plugins.Plugin]))
	})
	return _c
}

func (_c *MockPluginsServiceClient_Get_Call) Return(_a0 *connect.Response[plugins.Plugin], _a1 error) *MockPluginsServiceClient_Get_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockPluginsServiceClient_Get_Call) RunAndReturn(run func(context.Context, *connect.Request[plugins.Plugin]) (*connect.Response[plugins.Plugin], error)) *MockPluginsServiceClient_Get_Call {
	_c.Call.Return(run)
	return _c
}

// List provides a mock function with given fields: _a0, _a1
func (_m *MockPluginsServiceClient) List(_a0 context.Context, _a1 *connect.Request[plugins.ListRequest]) (*connect.Response[plugins.Plugins], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for List")
	}

	var r0 *connect.Response[plugins.Plugins]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[plugins.ListRequest]) (*connect.Response[plugins.Plugins], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[plugins.ListRequest]) *connect.Response[plugins.Plugins]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[plugins.Plugins])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[plugins.ListRequest]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockPluginsServiceClient_List_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'List'
type MockPluginsServiceClient_List_Call struct {
	*mock.Call
}

// List is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *connect.Request[plugins.ListRequest]
func (_e *MockPluginsServiceClient_Expecter) List(_a0 interface{}, _a1 interface{}) *MockPluginsServiceClient_List_Call {
	return &MockPluginsServiceClient_List_Call{Call: _e.mock.On("List", _a0, _a1)}
}

func (_c *MockPluginsServiceClient_List_Call) Run(run func(_a0 context.Context, _a1 *connect.Request[plugins.ListRequest])) *MockPluginsServiceClient_List_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*connect.Request[plugins.ListRequest]))
	})
	return _c
}

func (_c *MockPluginsServiceClient_List_Call) Return(_a0 *connect.Response[plugins.Plugins], _a1 error) *MockPluginsServiceClient_List_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockPluginsServiceClient_List_Call) RunAndReturn(run func(context.Context, *connect.Request[plugins.ListRequest]) (*connect.Response[plugins.Plugins], error)) *MockPluginsServiceClient_List_Call {
	_c.Call.Return(run)
	return _c
}

// Update provides a mock function with given fields: _a0, _a1
func (_m *MockPluginsServiceClient) Update(_a0 context.Context, _a1 *connect.Request[plugins.Plugin]) (*connect.Response[plugins.Plugin], error) {
	ret := _m.Called(_a0, _a1)

	if len(ret) == 0 {
		panic("no return value specified for Update")
	}

	var r0 *connect.Response[plugins.Plugin]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[plugins.Plugin]) (*connect.Response[plugins.Plugin], error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *connect.Request[plugins.Plugin]) *connect.Response[plugins.Plugin]); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*connect.Response[plugins.Plugin])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *connect.Request[plugins.Plugin]) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockPluginsServiceClient_Update_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Update'
type MockPluginsServiceClient_Update_Call struct {
	*mock.Call
}

// Update is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *connect.Request[plugins.Plugin]
func (_e *MockPluginsServiceClient_Expecter) Update(_a0 interface{}, _a1 interface{}) *MockPluginsServiceClient_Update_Call {
	return &MockPluginsServiceClient_Update_Call{Call: _e.mock.On("Update", _a0, _a1)}
}

func (_c *MockPluginsServiceClient_Update_Call) Run(run func(_a0 context.Context, _a1 *connect.Request[plugins.Plugin])) *MockPluginsServiceClient_Update_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*connect.Request[plugins.Plugin]))
	})
	return _c
}

func (_c *MockPluginsServiceClient_Update_Call) Return(_a0 *connect.Response[plugins.Plugin], _a1 error) *MockPluginsServiceClient_Update_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockPluginsServiceClient_Update_Call) RunAndReturn(run func(context.Context, *connect.Request[plugins.Plugin]) (*connect.Response[plugins.Plugin], error)) *MockPluginsServiceClient_Update_Call {
	_c.Call.Return(run)
	return _c
}

// NewMockPluginsServiceClient creates a new instance of MockPluginsServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewMockPluginsServiceClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *MockPluginsServiceClient {
	mock := &MockPluginsServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
