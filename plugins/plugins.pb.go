//
//Copyright © 2021-2022 Nikita Ivanovski info@slnt-opp.xyz
//
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        (unknown)
// source: plugins/plugins.proto

package plugins

import (
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type PluginKind int32

const (
	PluginKind_UNKNOWN  PluginKind = 0
	PluginKind_EMBEDDED PluginKind = 1 // Plugin will be embedded into Console as Page
)

// Enum value maps for PluginKind.
var (
	PluginKind_name = map[int32]string{
		0: "UNKNOWN",
		1: "EMBEDDED",
	}
	PluginKind_value = map[string]int32{
		"UNKNOWN":  0,
		"EMBEDDED": 1,
	}
)

func (x PluginKind) Enum() *PluginKind {
	p := new(PluginKind)
	*p = x
	return p
}

func (x PluginKind) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (PluginKind) Descriptor() protoreflect.EnumDescriptor {
	return file_plugins_plugins_proto_enumTypes[0].Descriptor()
}

func (PluginKind) Type() protoreflect.EnumType {
	return &file_plugins_plugins_proto_enumTypes[0]
}

func (x PluginKind) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use PluginKind.Descriptor instead.
func (PluginKind) EnumDescriptor() ([]byte, []int) {
	return file_plugins_plugins_proto_rawDescGZIP(), []int{0}
}

type Plugin struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid        string     `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Logo        string     `protobuf:"bytes,2,opt,name=logo,proto3" json:"logo,omitempty"` // Plugin logo url in format supported by <img> tag
	Title       string     `protobuf:"bytes,3,opt,name=title,proto3" json:"title,omitempty"`
	Description string     `protobuf:"bytes,4,opt,name=description,proto3" json:"description,omitempty"`
	Public      bool       `protobuf:"varint,5,opt,name=public,proto3" json:"public,omitempty"`
	Kind        PluginKind `protobuf:"varint,6,opt,name=kind,proto3,enum=infinimesh.plugins.PluginKind" json:"kind,omitempty"`
	// Types that are assignable to Conf:
	//	*Plugin_EmbeddedConf
	Conf isPlugin_Conf `protobuf_oneof:"conf"`
}

func (x *Plugin) Reset() {
	*x = Plugin{}
	if protoimpl.UnsafeEnabled {
		mi := &file_plugins_plugins_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Plugin) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Plugin) ProtoMessage() {}

func (x *Plugin) ProtoReflect() protoreflect.Message {
	mi := &file_plugins_plugins_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Plugin.ProtoReflect.Descriptor instead.
func (*Plugin) Descriptor() ([]byte, []int) {
	return file_plugins_plugins_proto_rawDescGZIP(), []int{0}
}

func (x *Plugin) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *Plugin) GetLogo() string {
	if x != nil {
		return x.Logo
	}
	return ""
}

func (x *Plugin) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *Plugin) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Plugin) GetPublic() bool {
	if x != nil {
		return x.Public
	}
	return false
}

func (x *Plugin) GetKind() PluginKind {
	if x != nil {
		return x.Kind
	}
	return PluginKind_UNKNOWN
}

func (m *Plugin) GetConf() isPlugin_Conf {
	if m != nil {
		return m.Conf
	}
	return nil
}

func (x *Plugin) GetEmbeddedConf() *EmbededPluginConf {
	if x, ok := x.GetConf().(*Plugin_EmbeddedConf); ok {
		return x.EmbeddedConf
	}
	return nil
}

type isPlugin_Conf interface {
	isPlugin_Conf()
}

type Plugin_EmbeddedConf struct {
	EmbeddedConf *EmbededPluginConf `protobuf:"bytes,7,opt,name=embedded_conf,json=embeddedConf,proto3,oneof"`
}

func (*Plugin_EmbeddedConf) isPlugin_Conf() {}

type Plugins struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pool []*Plugin `protobuf:"bytes,1,rep,name=pool,proto3" json:"pool,omitempty"`
}

func (x *Plugins) Reset() {
	*x = Plugins{}
	if protoimpl.UnsafeEnabled {
		mi := &file_plugins_plugins_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Plugins) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Plugins) ProtoMessage() {}

func (x *Plugins) ProtoReflect() protoreflect.Message {
	mi := &file_plugins_plugins_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Plugins.ProtoReflect.Descriptor instead.
func (*Plugins) Descriptor() ([]byte, []int) {
	return file_plugins_plugins_proto_rawDescGZIP(), []int{1}
}

func (x *Plugins) GetPool() []*Plugin {
	if x != nil {
		return x.Pool
	}
	return nil
}

type EmbededPluginConf struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FrameUrl string `protobuf:"bytes,1,opt,name=frame_url,json=frameUrl,proto3" json:"frame_url,omitempty"`
}

func (x *EmbededPluginConf) Reset() {
	*x = EmbededPluginConf{}
	if protoimpl.UnsafeEnabled {
		mi := &file_plugins_plugins_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EmbededPluginConf) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EmbededPluginConf) ProtoMessage() {}

func (x *EmbededPluginConf) ProtoReflect() protoreflect.Message {
	mi := &file_plugins_plugins_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EmbededPluginConf.ProtoReflect.Descriptor instead.
func (*EmbededPluginConf) Descriptor() ([]byte, []int) {
	return file_plugins_plugins_proto_rawDescGZIP(), []int{2}
}

func (x *EmbededPluginConf) GetFrameUrl() string {
	if x != nil {
		return x.FrameUrl
	}
	return ""
}

type EmptyMessage struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *EmptyMessage) Reset() {
	*x = EmptyMessage{}
	if protoimpl.UnsafeEnabled {
		mi := &file_plugins_plugins_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EmptyMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EmptyMessage) ProtoMessage() {}

func (x *EmptyMessage) ProtoReflect() protoreflect.Message {
	mi := &file_plugins_plugins_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EmptyMessage.ProtoReflect.Descriptor instead.
func (*EmptyMessage) Descriptor() ([]byte, []int) {
	return file_plugins_plugins_proto_rawDescGZIP(), []int{3}
}

var File_plugins_plugins_proto protoreflect.FileDescriptor

var file_plugins_plugins_proto_rawDesc = []byte{
	0x0a, 0x15, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2f, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x12, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d,
	0x65, 0x73, 0x68, 0x2e, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x1a, 0x1c, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x8a, 0x02, 0x0a, 0x06, 0x50, 0x6c,
	0x75, 0x67, 0x69, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6c, 0x6f, 0x67, 0x6f,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6c, 0x6f, 0x67, 0x6f, 0x12, 0x14, 0x0a, 0x05,
	0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74,
	0x6c, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x16, 0x0a, 0x06, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x12, 0x32, 0x0a, 0x04,
	0x6b, 0x69, 0x6e, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1e, 0x2e, 0x69, 0x6e, 0x66,
	0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e,
	0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x4b, 0x69, 0x6e, 0x64, 0x52, 0x04, 0x6b, 0x69, 0x6e, 0x64,
	0x12, 0x4c, 0x0a, 0x0d, 0x65, 0x6d, 0x62, 0x65, 0x64, 0x64, 0x65, 0x64, 0x5f, 0x63, 0x6f, 0x6e,
	0x66, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69,
	0x6d, 0x65, 0x73, 0x68, 0x2e, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e, 0x45, 0x6d, 0x62,
	0x65, 0x64, 0x65, 0x64, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x43, 0x6f, 0x6e, 0x66, 0x48, 0x00,
	0x52, 0x0c, 0x65, 0x6d, 0x62, 0x65, 0x64, 0x64, 0x65, 0x64, 0x43, 0x6f, 0x6e, 0x66, 0x42, 0x06,
	0x0a, 0x04, 0x63, 0x6f, 0x6e, 0x66, 0x22, 0x39, 0x0a, 0x07, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e,
	0x73, 0x12, 0x2e, 0x0a, 0x04, 0x70, 0x6f, 0x6f, 0x6c, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x1a, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x70, 0x6c, 0x75,
	0x67, 0x69, 0x6e, 0x73, 0x2e, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x52, 0x04, 0x70, 0x6f, 0x6f,
	0x6c, 0x22, 0x30, 0x0a, 0x11, 0x45, 0x6d, 0x62, 0x65, 0x64, 0x65, 0x64, 0x50, 0x6c, 0x75, 0x67,
	0x69, 0x6e, 0x43, 0x6f, 0x6e, 0x66, 0x12, 0x1b, 0x0a, 0x09, 0x66, 0x72, 0x61, 0x6d, 0x65, 0x5f,
	0x75, 0x72, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x66, 0x72, 0x61, 0x6d, 0x65,
	0x55, 0x72, 0x6c, 0x22, 0x0e, 0x0a, 0x0c, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x4d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x2a, 0x27, 0x0a, 0x0a, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x4b, 0x69, 0x6e,
	0x64, 0x12, 0x0b, 0x0a, 0x07, 0x55, 0x4e, 0x4b, 0x4e, 0x4f, 0x57, 0x4e, 0x10, 0x00, 0x12, 0x0c,
	0x0a, 0x08, 0x45, 0x4d, 0x42, 0x45, 0x44, 0x44, 0x45, 0x44, 0x10, 0x01, 0x32, 0xcb, 0x03, 0x0a,
	0x0e, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12,
	0x56, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x1a, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d,
	0x65, 0x73, 0x68, 0x2e, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e, 0x50, 0x6c, 0x75, 0x67,
	0x69, 0x6e, 0x1a, 0x1a, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e,
	0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x22, 0x17,
	0x82, 0xd3, 0xe4, 0x93, 0x02, 0x11, 0x12, 0x0f, 0x2f, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73,
	0x2f, 0x7b, 0x75, 0x75, 0x69, 0x64, 0x7d, 0x12, 0x57, 0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12,
	0x20, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x70, 0x6c, 0x75,
	0x67, 0x69, 0x6e, 0x73, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x1a, 0x1b, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x70,
	0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x22, 0x10,
	0x82, 0xd3, 0xe4, 0x93, 0x02, 0x0a, 0x12, 0x08, 0x2f, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73,
	0x12, 0x52, 0x0a, 0x06, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x1a, 0x2e, 0x69, 0x6e, 0x66,
	0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e,
	0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x1a, 0x1a, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d,
	0x65, 0x73, 0x68, 0x2e, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e, 0x50, 0x6c, 0x75, 0x67,
	0x69, 0x6e, 0x22, 0x10, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x0a, 0x1a, 0x08, 0x2f, 0x70, 0x6c, 0x75,
	0x67, 0x69, 0x6e, 0x73, 0x12, 0x59, 0x0a, 0x06, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x1a,
	0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x70, 0x6c, 0x75, 0x67,
	0x69, 0x6e, 0x73, 0x2e, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x1a, 0x1a, 0x2e, 0x69, 0x6e, 0x66,
	0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e,
	0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x22, 0x17, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x11, 0x22, 0x0f,
	0x2f, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2f, 0x7b, 0x75, 0x75, 0x69, 0x64, 0x7d, 0x12,
	0x59, 0x0a, 0x06, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x1a, 0x2e, 0x69, 0x6e, 0x66, 0x69,
	0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e, 0x50,
	0x6c, 0x75, 0x67, 0x69, 0x6e, 0x1a, 0x1a, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65,
	0x73, 0x68, 0x2e, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e, 0x50, 0x6c, 0x75, 0x67, 0x69,
	0x6e, 0x22, 0x17, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x11, 0x2a, 0x0f, 0x2f, 0x70, 0x6c, 0x75, 0x67,
	0x69, 0x6e, 0x73, 0x2f, 0x7b, 0x75, 0x75, 0x69, 0x64, 0x7d, 0x42, 0xb4, 0x01, 0x0a, 0x16, 0x63,
	0x6f, 0x6d, 0x2e, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x70, 0x6c,
	0x75, 0x67, 0x69, 0x6e, 0x73, 0x42, 0x0c, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x50, 0x72,
	0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x23, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x69, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2f, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0xa2, 0x02, 0x03, 0x49, 0x50, 0x58,
	0xaa, 0x02, 0x12, 0x49, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x50, 0x6c,
	0x75, 0x67, 0x69, 0x6e, 0x73, 0xca, 0x02, 0x12, 0x49, 0x6e, 0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65,
	0x73, 0x68, 0x5c, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0xe2, 0x02, 0x1e, 0x49, 0x6e, 0x66,
	0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x5c, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x5c,
	0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x13, 0x49, 0x6e,
	0x66, 0x69, 0x6e, 0x69, 0x6d, 0x65, 0x73, 0x68, 0x3a, 0x3a, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e,
	0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_plugins_plugins_proto_rawDescOnce sync.Once
	file_plugins_plugins_proto_rawDescData = file_plugins_plugins_proto_rawDesc
)

func file_plugins_plugins_proto_rawDescGZIP() []byte {
	file_plugins_plugins_proto_rawDescOnce.Do(func() {
		file_plugins_plugins_proto_rawDescData = protoimpl.X.CompressGZIP(file_plugins_plugins_proto_rawDescData)
	})
	return file_plugins_plugins_proto_rawDescData
}

var file_plugins_plugins_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_plugins_plugins_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_plugins_plugins_proto_goTypes = []interface{}{
	(PluginKind)(0),           // 0: infinimesh.plugins.PluginKind
	(*Plugin)(nil),            // 1: infinimesh.plugins.Plugin
	(*Plugins)(nil),           // 2: infinimesh.plugins.Plugins
	(*EmbededPluginConf)(nil), // 3: infinimesh.plugins.EmbededPluginConf
	(*EmptyMessage)(nil),      // 4: infinimesh.plugins.EmptyMessage
}
var file_plugins_plugins_proto_depIdxs = []int32{
	0, // 0: infinimesh.plugins.Plugin.kind:type_name -> infinimesh.plugins.PluginKind
	3, // 1: infinimesh.plugins.Plugin.embedded_conf:type_name -> infinimesh.plugins.EmbededPluginConf
	1, // 2: infinimesh.plugins.Plugins.pool:type_name -> infinimesh.plugins.Plugin
	1, // 3: infinimesh.plugins.PluginsService.Get:input_type -> infinimesh.plugins.Plugin
	4, // 4: infinimesh.plugins.PluginsService.List:input_type -> infinimesh.plugins.EmptyMessage
	1, // 5: infinimesh.plugins.PluginsService.Create:input_type -> infinimesh.plugins.Plugin
	1, // 6: infinimesh.plugins.PluginsService.Update:input_type -> infinimesh.plugins.Plugin
	1, // 7: infinimesh.plugins.PluginsService.Delete:input_type -> infinimesh.plugins.Plugin
	1, // 8: infinimesh.plugins.PluginsService.Get:output_type -> infinimesh.plugins.Plugin
	2, // 9: infinimesh.plugins.PluginsService.List:output_type -> infinimesh.plugins.Plugins
	1, // 10: infinimesh.plugins.PluginsService.Create:output_type -> infinimesh.plugins.Plugin
	1, // 11: infinimesh.plugins.PluginsService.Update:output_type -> infinimesh.plugins.Plugin
	1, // 12: infinimesh.plugins.PluginsService.Delete:output_type -> infinimesh.plugins.Plugin
	8, // [8:13] is the sub-list for method output_type
	3, // [3:8] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_plugins_plugins_proto_init() }
func file_plugins_plugins_proto_init() {
	if File_plugins_plugins_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_plugins_plugins_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Plugin); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_plugins_plugins_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Plugins); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_plugins_plugins_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EmbededPluginConf); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_plugins_plugins_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EmptyMessage); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_plugins_plugins_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*Plugin_EmbeddedConf)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_plugins_plugins_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_plugins_plugins_proto_goTypes,
		DependencyIndexes: file_plugins_plugins_proto_depIdxs,
		EnumInfos:         file_plugins_plugins_proto_enumTypes,
		MessageInfos:      file_plugins_plugins_proto_msgTypes,
	}.Build()
	File_plugins_plugins_proto = out.File
	file_plugins_plugins_proto_rawDesc = nil
	file_plugins_plugins_proto_goTypes = nil
	file_plugins_plugins_proto_depIdxs = nil
}
