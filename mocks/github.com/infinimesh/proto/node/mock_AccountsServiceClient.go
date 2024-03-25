// Code generated by mockery v2.42.0. DO NOT EDIT.

package node_mocks

import (
	access "github.com/infinimesh/proto/node/access"
	accounts "github.com/infinimesh/proto/node/accounts"

	context "context"

	grpc "google.golang.org/grpc"

	mock "github.com/stretchr/testify/mock"

	namespaces "github.com/infinimesh/proto/node/namespaces"

	node "github.com/infinimesh/proto/node"
)

// MockAccountsServiceClient is an autogenerated mock type for the AccountsServiceClient type
type MockAccountsServiceClient struct {
	mock.Mock
}

type MockAccountsServiceClient_Expecter struct {
	mock *mock.Mock
}

func (_m *MockAccountsServiceClient) EXPECT() *MockAccountsServiceClient_Expecter {
	return &MockAccountsServiceClient_Expecter{mock: &_m.Mock}
}

// Accessibles provides a mock function with given fields: ctx, in, opts
func (_m *MockAccountsServiceClient) Accessibles(ctx context.Context, in *namespaces.Namespace, opts ...grpc.CallOption) (*access.Nodes, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for Accessibles")
	}

	var r0 *access.Nodes
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *namespaces.Namespace, ...grpc.CallOption) (*access.Nodes, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *namespaces.Namespace, ...grpc.CallOption) *access.Nodes); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*access.Nodes)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *namespaces.Namespace, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockAccountsServiceClient_Accessibles_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Accessibles'
type MockAccountsServiceClient_Accessibles_Call struct {
	*mock.Call
}

// Accessibles is a helper method to define mock.On call
//   - ctx context.Context
//   - in *namespaces.Namespace
//   - opts ...grpc.CallOption
func (_e *MockAccountsServiceClient_Expecter) Accessibles(ctx interface{}, in interface{}, opts ...interface{}) *MockAccountsServiceClient_Accessibles_Call {
	return &MockAccountsServiceClient_Accessibles_Call{Call: _e.mock.On("Accessibles",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockAccountsServiceClient_Accessibles_Call) Run(run func(ctx context.Context, in *namespaces.Namespace, opts ...grpc.CallOption)) *MockAccountsServiceClient_Accessibles_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*namespaces.Namespace), variadicArgs...)
	})
	return _c
}

func (_c *MockAccountsServiceClient_Accessibles_Call) Return(_a0 *access.Nodes, _a1 error) *MockAccountsServiceClient_Accessibles_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockAccountsServiceClient_Accessibles_Call) RunAndReturn(run func(context.Context, *namespaces.Namespace, ...grpc.CallOption) (*access.Nodes, error)) *MockAccountsServiceClient_Accessibles_Call {
	_c.Call.Return(run)
	return _c
}

// Create provides a mock function with given fields: ctx, in, opts
func (_m *MockAccountsServiceClient) Create(ctx context.Context, in *accounts.CreateRequest, opts ...grpc.CallOption) (*accounts.CreateResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for Create")
	}

	var r0 *accounts.CreateResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *accounts.CreateRequest, ...grpc.CallOption) (*accounts.CreateResponse, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *accounts.CreateRequest, ...grpc.CallOption) *accounts.CreateResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*accounts.CreateResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *accounts.CreateRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockAccountsServiceClient_Create_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Create'
type MockAccountsServiceClient_Create_Call struct {
	*mock.Call
}

// Create is a helper method to define mock.On call
//   - ctx context.Context
//   - in *accounts.CreateRequest
//   - opts ...grpc.CallOption
func (_e *MockAccountsServiceClient_Expecter) Create(ctx interface{}, in interface{}, opts ...interface{}) *MockAccountsServiceClient_Create_Call {
	return &MockAccountsServiceClient_Create_Call{Call: _e.mock.On("Create",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockAccountsServiceClient_Create_Call) Run(run func(ctx context.Context, in *accounts.CreateRequest, opts ...grpc.CallOption)) *MockAccountsServiceClient_Create_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*accounts.CreateRequest), variadicArgs...)
	})
	return _c
}

func (_c *MockAccountsServiceClient_Create_Call) Return(_a0 *accounts.CreateResponse, _a1 error) *MockAccountsServiceClient_Create_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockAccountsServiceClient_Create_Call) RunAndReturn(run func(context.Context, *accounts.CreateRequest, ...grpc.CallOption) (*accounts.CreateResponse, error)) *MockAccountsServiceClient_Create_Call {
	_c.Call.Return(run)
	return _c
}

// DelCredentials provides a mock function with given fields: ctx, in, opts
func (_m *MockAccountsServiceClient) DelCredentials(ctx context.Context, in *node.DeleteCredentialsRequest, opts ...grpc.CallOption) (*node.DeleteResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for DelCredentials")
	}

	var r0 *node.DeleteResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *node.DeleteCredentialsRequest, ...grpc.CallOption) (*node.DeleteResponse, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *node.DeleteCredentialsRequest, ...grpc.CallOption) *node.DeleteResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*node.DeleteResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *node.DeleteCredentialsRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockAccountsServiceClient_DelCredentials_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'DelCredentials'
type MockAccountsServiceClient_DelCredentials_Call struct {
	*mock.Call
}

// DelCredentials is a helper method to define mock.On call
//   - ctx context.Context
//   - in *node.DeleteCredentialsRequest
//   - opts ...grpc.CallOption
func (_e *MockAccountsServiceClient_Expecter) DelCredentials(ctx interface{}, in interface{}, opts ...interface{}) *MockAccountsServiceClient_DelCredentials_Call {
	return &MockAccountsServiceClient_DelCredentials_Call{Call: _e.mock.On("DelCredentials",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockAccountsServiceClient_DelCredentials_Call) Run(run func(ctx context.Context, in *node.DeleteCredentialsRequest, opts ...grpc.CallOption)) *MockAccountsServiceClient_DelCredentials_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*node.DeleteCredentialsRequest), variadicArgs...)
	})
	return _c
}

func (_c *MockAccountsServiceClient_DelCredentials_Call) Return(_a0 *node.DeleteResponse, _a1 error) *MockAccountsServiceClient_DelCredentials_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockAccountsServiceClient_DelCredentials_Call) RunAndReturn(run func(context.Context, *node.DeleteCredentialsRequest, ...grpc.CallOption) (*node.DeleteResponse, error)) *MockAccountsServiceClient_DelCredentials_Call {
	_c.Call.Return(run)
	return _c
}

// Deletables provides a mock function with given fields: ctx, in, opts
func (_m *MockAccountsServiceClient) Deletables(ctx context.Context, in *accounts.Account, opts ...grpc.CallOption) (*access.Nodes, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for Deletables")
	}

	var r0 *access.Nodes
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *accounts.Account, ...grpc.CallOption) (*access.Nodes, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *accounts.Account, ...grpc.CallOption) *access.Nodes); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*access.Nodes)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *accounts.Account, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockAccountsServiceClient_Deletables_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Deletables'
type MockAccountsServiceClient_Deletables_Call struct {
	*mock.Call
}

// Deletables is a helper method to define mock.On call
//   - ctx context.Context
//   - in *accounts.Account
//   - opts ...grpc.CallOption
func (_e *MockAccountsServiceClient_Expecter) Deletables(ctx interface{}, in interface{}, opts ...interface{}) *MockAccountsServiceClient_Deletables_Call {
	return &MockAccountsServiceClient_Deletables_Call{Call: _e.mock.On("Deletables",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockAccountsServiceClient_Deletables_Call) Run(run func(ctx context.Context, in *accounts.Account, opts ...grpc.CallOption)) *MockAccountsServiceClient_Deletables_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*accounts.Account), variadicArgs...)
	})
	return _c
}

func (_c *MockAccountsServiceClient_Deletables_Call) Return(_a0 *access.Nodes, _a1 error) *MockAccountsServiceClient_Deletables_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockAccountsServiceClient_Deletables_Call) RunAndReturn(run func(context.Context, *accounts.Account, ...grpc.CallOption) (*access.Nodes, error)) *MockAccountsServiceClient_Deletables_Call {
	_c.Call.Return(run)
	return _c
}

// Delete provides a mock function with given fields: ctx, in, opts
func (_m *MockAccountsServiceClient) Delete(ctx context.Context, in *accounts.Account, opts ...grpc.CallOption) (*node.DeleteResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for Delete")
	}

	var r0 *node.DeleteResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *accounts.Account, ...grpc.CallOption) (*node.DeleteResponse, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *accounts.Account, ...grpc.CallOption) *node.DeleteResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*node.DeleteResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *accounts.Account, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockAccountsServiceClient_Delete_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Delete'
type MockAccountsServiceClient_Delete_Call struct {
	*mock.Call
}

// Delete is a helper method to define mock.On call
//   - ctx context.Context
//   - in *accounts.Account
//   - opts ...grpc.CallOption
func (_e *MockAccountsServiceClient_Expecter) Delete(ctx interface{}, in interface{}, opts ...interface{}) *MockAccountsServiceClient_Delete_Call {
	return &MockAccountsServiceClient_Delete_Call{Call: _e.mock.On("Delete",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockAccountsServiceClient_Delete_Call) Run(run func(ctx context.Context, in *accounts.Account, opts ...grpc.CallOption)) *MockAccountsServiceClient_Delete_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*accounts.Account), variadicArgs...)
	})
	return _c
}

func (_c *MockAccountsServiceClient_Delete_Call) Return(_a0 *node.DeleteResponse, _a1 error) *MockAccountsServiceClient_Delete_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockAccountsServiceClient_Delete_Call) RunAndReturn(run func(context.Context, *accounts.Account, ...grpc.CallOption) (*node.DeleteResponse, error)) *MockAccountsServiceClient_Delete_Call {
	_c.Call.Return(run)
	return _c
}

// Get provides a mock function with given fields: ctx, in, opts
func (_m *MockAccountsServiceClient) Get(ctx context.Context, in *accounts.Account, opts ...grpc.CallOption) (*accounts.Account, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for Get")
	}

	var r0 *accounts.Account
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *accounts.Account, ...grpc.CallOption) (*accounts.Account, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *accounts.Account, ...grpc.CallOption) *accounts.Account); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*accounts.Account)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *accounts.Account, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockAccountsServiceClient_Get_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Get'
type MockAccountsServiceClient_Get_Call struct {
	*mock.Call
}

// Get is a helper method to define mock.On call
//   - ctx context.Context
//   - in *accounts.Account
//   - opts ...grpc.CallOption
func (_e *MockAccountsServiceClient_Expecter) Get(ctx interface{}, in interface{}, opts ...interface{}) *MockAccountsServiceClient_Get_Call {
	return &MockAccountsServiceClient_Get_Call{Call: _e.mock.On("Get",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockAccountsServiceClient_Get_Call) Run(run func(ctx context.Context, in *accounts.Account, opts ...grpc.CallOption)) *MockAccountsServiceClient_Get_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*accounts.Account), variadicArgs...)
	})
	return _c
}

func (_c *MockAccountsServiceClient_Get_Call) Return(_a0 *accounts.Account, _a1 error) *MockAccountsServiceClient_Get_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockAccountsServiceClient_Get_Call) RunAndReturn(run func(context.Context, *accounts.Account, ...grpc.CallOption) (*accounts.Account, error)) *MockAccountsServiceClient_Get_Call {
	_c.Call.Return(run)
	return _c
}

// GetCredentials provides a mock function with given fields: ctx, in, opts
func (_m *MockAccountsServiceClient) GetCredentials(ctx context.Context, in *node.GetCredentialsRequest, opts ...grpc.CallOption) (*node.GetCredentialsResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for GetCredentials")
	}

	var r0 *node.GetCredentialsResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *node.GetCredentialsRequest, ...grpc.CallOption) (*node.GetCredentialsResponse, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *node.GetCredentialsRequest, ...grpc.CallOption) *node.GetCredentialsResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*node.GetCredentialsResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *node.GetCredentialsRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockAccountsServiceClient_GetCredentials_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetCredentials'
type MockAccountsServiceClient_GetCredentials_Call struct {
	*mock.Call
}

// GetCredentials is a helper method to define mock.On call
//   - ctx context.Context
//   - in *node.GetCredentialsRequest
//   - opts ...grpc.CallOption
func (_e *MockAccountsServiceClient_Expecter) GetCredentials(ctx interface{}, in interface{}, opts ...interface{}) *MockAccountsServiceClient_GetCredentials_Call {
	return &MockAccountsServiceClient_GetCredentials_Call{Call: _e.mock.On("GetCredentials",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockAccountsServiceClient_GetCredentials_Call) Run(run func(ctx context.Context, in *node.GetCredentialsRequest, opts ...grpc.CallOption)) *MockAccountsServiceClient_GetCredentials_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*node.GetCredentialsRequest), variadicArgs...)
	})
	return _c
}

func (_c *MockAccountsServiceClient_GetCredentials_Call) Return(_a0 *node.GetCredentialsResponse, _a1 error) *MockAccountsServiceClient_GetCredentials_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockAccountsServiceClient_GetCredentials_Call) RunAndReturn(run func(context.Context, *node.GetCredentialsRequest, ...grpc.CallOption) (*node.GetCredentialsResponse, error)) *MockAccountsServiceClient_GetCredentials_Call {
	_c.Call.Return(run)
	return _c
}

// List provides a mock function with given fields: ctx, in, opts
func (_m *MockAccountsServiceClient) List(ctx context.Context, in *node.EmptyMessage, opts ...grpc.CallOption) (*accounts.Accounts, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for List")
	}

	var r0 *accounts.Accounts
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *node.EmptyMessage, ...grpc.CallOption) (*accounts.Accounts, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *node.EmptyMessage, ...grpc.CallOption) *accounts.Accounts); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*accounts.Accounts)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *node.EmptyMessage, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockAccountsServiceClient_List_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'List'
type MockAccountsServiceClient_List_Call struct {
	*mock.Call
}

// List is a helper method to define mock.On call
//   - ctx context.Context
//   - in *node.EmptyMessage
//   - opts ...grpc.CallOption
func (_e *MockAccountsServiceClient_Expecter) List(ctx interface{}, in interface{}, opts ...interface{}) *MockAccountsServiceClient_List_Call {
	return &MockAccountsServiceClient_List_Call{Call: _e.mock.On("List",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockAccountsServiceClient_List_Call) Run(run func(ctx context.Context, in *node.EmptyMessage, opts ...grpc.CallOption)) *MockAccountsServiceClient_List_Call {
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

func (_c *MockAccountsServiceClient_List_Call) Return(_a0 *accounts.Accounts, _a1 error) *MockAccountsServiceClient_List_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockAccountsServiceClient_List_Call) RunAndReturn(run func(context.Context, *node.EmptyMessage, ...grpc.CallOption) (*accounts.Accounts, error)) *MockAccountsServiceClient_List_Call {
	_c.Call.Return(run)
	return _c
}

// Move provides a mock function with given fields: ctx, in, opts
func (_m *MockAccountsServiceClient) Move(ctx context.Context, in *node.MoveRequest, opts ...grpc.CallOption) (*node.EmptyMessage, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for Move")
	}

	var r0 *node.EmptyMessage
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *node.MoveRequest, ...grpc.CallOption) (*node.EmptyMessage, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *node.MoveRequest, ...grpc.CallOption) *node.EmptyMessage); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*node.EmptyMessage)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *node.MoveRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockAccountsServiceClient_Move_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Move'
type MockAccountsServiceClient_Move_Call struct {
	*mock.Call
}

// Move is a helper method to define mock.On call
//   - ctx context.Context
//   - in *node.MoveRequest
//   - opts ...grpc.CallOption
func (_e *MockAccountsServiceClient_Expecter) Move(ctx interface{}, in interface{}, opts ...interface{}) *MockAccountsServiceClient_Move_Call {
	return &MockAccountsServiceClient_Move_Call{Call: _e.mock.On("Move",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockAccountsServiceClient_Move_Call) Run(run func(ctx context.Context, in *node.MoveRequest, opts ...grpc.CallOption)) *MockAccountsServiceClient_Move_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*node.MoveRequest), variadicArgs...)
	})
	return _c
}

func (_c *MockAccountsServiceClient_Move_Call) Return(_a0 *node.EmptyMessage, _a1 error) *MockAccountsServiceClient_Move_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockAccountsServiceClient_Move_Call) RunAndReturn(run func(context.Context, *node.MoveRequest, ...grpc.CallOption) (*node.EmptyMessage, error)) *MockAccountsServiceClient_Move_Call {
	_c.Call.Return(run)
	return _c
}

// SetCredentials provides a mock function with given fields: ctx, in, opts
func (_m *MockAccountsServiceClient) SetCredentials(ctx context.Context, in *node.SetCredentialsRequest, opts ...grpc.CallOption) (*node.SetCredentialsResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for SetCredentials")
	}

	var r0 *node.SetCredentialsResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *node.SetCredentialsRequest, ...grpc.CallOption) (*node.SetCredentialsResponse, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *node.SetCredentialsRequest, ...grpc.CallOption) *node.SetCredentialsResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*node.SetCredentialsResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *node.SetCredentialsRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockAccountsServiceClient_SetCredentials_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'SetCredentials'
type MockAccountsServiceClient_SetCredentials_Call struct {
	*mock.Call
}

// SetCredentials is a helper method to define mock.On call
//   - ctx context.Context
//   - in *node.SetCredentialsRequest
//   - opts ...grpc.CallOption
func (_e *MockAccountsServiceClient_Expecter) SetCredentials(ctx interface{}, in interface{}, opts ...interface{}) *MockAccountsServiceClient_SetCredentials_Call {
	return &MockAccountsServiceClient_SetCredentials_Call{Call: _e.mock.On("SetCredentials",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockAccountsServiceClient_SetCredentials_Call) Run(run func(ctx context.Context, in *node.SetCredentialsRequest, opts ...grpc.CallOption)) *MockAccountsServiceClient_SetCredentials_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*node.SetCredentialsRequest), variadicArgs...)
	})
	return _c
}

func (_c *MockAccountsServiceClient_SetCredentials_Call) Return(_a0 *node.SetCredentialsResponse, _a1 error) *MockAccountsServiceClient_SetCredentials_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockAccountsServiceClient_SetCredentials_Call) RunAndReturn(run func(context.Context, *node.SetCredentialsRequest, ...grpc.CallOption) (*node.SetCredentialsResponse, error)) *MockAccountsServiceClient_SetCredentials_Call {
	_c.Call.Return(run)
	return _c
}

// Toggle provides a mock function with given fields: ctx, in, opts
func (_m *MockAccountsServiceClient) Toggle(ctx context.Context, in *accounts.Account, opts ...grpc.CallOption) (*accounts.Account, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for Toggle")
	}

	var r0 *accounts.Account
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *accounts.Account, ...grpc.CallOption) (*accounts.Account, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *accounts.Account, ...grpc.CallOption) *accounts.Account); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*accounts.Account)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *accounts.Account, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockAccountsServiceClient_Toggle_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Toggle'
type MockAccountsServiceClient_Toggle_Call struct {
	*mock.Call
}

// Toggle is a helper method to define mock.On call
//   - ctx context.Context
//   - in *accounts.Account
//   - opts ...grpc.CallOption
func (_e *MockAccountsServiceClient_Expecter) Toggle(ctx interface{}, in interface{}, opts ...interface{}) *MockAccountsServiceClient_Toggle_Call {
	return &MockAccountsServiceClient_Toggle_Call{Call: _e.mock.On("Toggle",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockAccountsServiceClient_Toggle_Call) Run(run func(ctx context.Context, in *accounts.Account, opts ...grpc.CallOption)) *MockAccountsServiceClient_Toggle_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*accounts.Account), variadicArgs...)
	})
	return _c
}

func (_c *MockAccountsServiceClient_Toggle_Call) Return(_a0 *accounts.Account, _a1 error) *MockAccountsServiceClient_Toggle_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockAccountsServiceClient_Toggle_Call) RunAndReturn(run func(context.Context, *accounts.Account, ...grpc.CallOption) (*accounts.Account, error)) *MockAccountsServiceClient_Toggle_Call {
	_c.Call.Return(run)
	return _c
}

// Token provides a mock function with given fields: ctx, in, opts
func (_m *MockAccountsServiceClient) Token(ctx context.Context, in *node.TokenRequest, opts ...grpc.CallOption) (*node.TokenResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for Token")
	}

	var r0 *node.TokenResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *node.TokenRequest, ...grpc.CallOption) (*node.TokenResponse, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *node.TokenRequest, ...grpc.CallOption) *node.TokenResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*node.TokenResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *node.TokenRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockAccountsServiceClient_Token_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Token'
type MockAccountsServiceClient_Token_Call struct {
	*mock.Call
}

// Token is a helper method to define mock.On call
//   - ctx context.Context
//   - in *node.TokenRequest
//   - opts ...grpc.CallOption
func (_e *MockAccountsServiceClient_Expecter) Token(ctx interface{}, in interface{}, opts ...interface{}) *MockAccountsServiceClient_Token_Call {
	return &MockAccountsServiceClient_Token_Call{Call: _e.mock.On("Token",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockAccountsServiceClient_Token_Call) Run(run func(ctx context.Context, in *node.TokenRequest, opts ...grpc.CallOption)) *MockAccountsServiceClient_Token_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*node.TokenRequest), variadicArgs...)
	})
	return _c
}

func (_c *MockAccountsServiceClient_Token_Call) Return(_a0 *node.TokenResponse, _a1 error) *MockAccountsServiceClient_Token_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockAccountsServiceClient_Token_Call) RunAndReturn(run func(context.Context, *node.TokenRequest, ...grpc.CallOption) (*node.TokenResponse, error)) *MockAccountsServiceClient_Token_Call {
	_c.Call.Return(run)
	return _c
}

// Update provides a mock function with given fields: ctx, in, opts
func (_m *MockAccountsServiceClient) Update(ctx context.Context, in *accounts.Account, opts ...grpc.CallOption) (*accounts.Account, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for Update")
	}

	var r0 *accounts.Account
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *accounts.Account, ...grpc.CallOption) (*accounts.Account, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *accounts.Account, ...grpc.CallOption) *accounts.Account); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*accounts.Account)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *accounts.Account, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockAccountsServiceClient_Update_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Update'
type MockAccountsServiceClient_Update_Call struct {
	*mock.Call
}

// Update is a helper method to define mock.On call
//   - ctx context.Context
//   - in *accounts.Account
//   - opts ...grpc.CallOption
func (_e *MockAccountsServiceClient_Expecter) Update(ctx interface{}, in interface{}, opts ...interface{}) *MockAccountsServiceClient_Update_Call {
	return &MockAccountsServiceClient_Update_Call{Call: _e.mock.On("Update",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *MockAccountsServiceClient_Update_Call) Run(run func(ctx context.Context, in *accounts.Account, opts ...grpc.CallOption)) *MockAccountsServiceClient_Update_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*accounts.Account), variadicArgs...)
	})
	return _c
}

func (_c *MockAccountsServiceClient_Update_Call) Return(_a0 *accounts.Account, _a1 error) *MockAccountsServiceClient_Update_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockAccountsServiceClient_Update_Call) RunAndReturn(run func(context.Context, *accounts.Account, ...grpc.CallOption) (*accounts.Account, error)) *MockAccountsServiceClient_Update_Call {
	_c.Call.Return(run)
	return _c
}

// NewMockAccountsServiceClient creates a new instance of MockAccountsServiceClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewMockAccountsServiceClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *MockAccountsServiceClient {
	mock := &MockAccountsServiceClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
