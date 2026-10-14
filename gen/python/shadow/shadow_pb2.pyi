import datetime

from google.protobuf import empty_pb2 as _empty_pb2
from google.protobuf import struct_pb2 as _struct_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from protoc_gen_openapiv2.options import annotations_pb2 as _annotations_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ShadowEvent(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    STATE: _ClassVar[ShadowEvent]
    DEVICE_ADDED: _ClassVar[ShadowEvent]
    DEVICE_REMOVED: _ClassVar[ShadowEvent]
    TAG_ADDED: _ClassVar[ShadowEvent]
    TAG_REMOVED: _ClassVar[ShadowEvent]
    OTA_TARGET_SET: _ClassVar[ShadowEvent]
    OTA_STATUS_CHANGED: _ClassVar[ShadowEvent]
    OTA_REQUESTED: _ClassVar[ShadowEvent]

class StateKey(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    REPORTED: _ClassVar[StateKey]
    DESIRED: _ClassVar[StateKey]
    CONNECTION: _ClassVar[StateKey]
STATE: ShadowEvent
DEVICE_ADDED: ShadowEvent
DEVICE_REMOVED: ShadowEvent
TAG_ADDED: ShadowEvent
TAG_REMOVED: ShadowEvent
OTA_TARGET_SET: ShadowEvent
OTA_STATUS_CHANGED: ShadowEvent
OTA_REQUESTED: ShadowEvent
REPORTED: StateKey
DESIRED: StateKey
CONNECTION: StateKey

class State(_message.Message):
    __slots__ = ("timestamp", "data", "version")
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    timestamp: _timestamp_pb2.Timestamp
    data: _struct_pb2.Struct
    version: int
    def __init__(self, timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., data: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., version: _Optional[int] = ...) -> None: ...

class ConnectionState(_message.Message):
    __slots__ = ("connected", "timestamp", "client_id")
    CONNECTED_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    CLIENT_ID_FIELD_NUMBER: _ClassVar[int]
    connected: bool
    timestamp: _timestamp_pb2.Timestamp
    client_id: str
    def __init__(self, connected: _Optional[bool] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., client_id: _Optional[str] = ...) -> None: ...

class DeviceMeta(_message.Message):
    __slots__ = ("device", "title", "namespace", "tags")
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    device: str
    title: str
    namespace: str
    tags: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, device: _Optional[str] = ..., title: _Optional[str] = ..., namespace: _Optional[str] = ..., tags: _Optional[_Iterable[str]] = ...) -> None: ...

class Shadow(_message.Message):
    __slots__ = ("device", "reported", "desired", "connection", "event_id", "title", "namespace", "tags", "event", "account", "sequence", "tag")
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    REPORTED_FIELD_NUMBER: _ClassVar[int]
    DESIRED_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    EVENT_ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    EVENT_FIELD_NUMBER: _ClassVar[int]
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    SEQUENCE_FIELD_NUMBER: _ClassVar[int]
    TAG_FIELD_NUMBER: _ClassVar[int]
    device: str
    reported: State
    desired: State
    connection: ConnectionState
    event_id: int
    title: str
    namespace: str
    tags: _containers.RepeatedScalarFieldContainer[str]
    event: ShadowEvent
    account: str
    sequence: int
    tag: str
    def __init__(self, device: _Optional[str] = ..., reported: _Optional[_Union[State, _Mapping]] = ..., desired: _Optional[_Union[State, _Mapping]] = ..., connection: _Optional[_Union[ConnectionState, _Mapping]] = ..., event_id: _Optional[int] = ..., title: _Optional[str] = ..., namespace: _Optional[str] = ..., tags: _Optional[_Iterable[str]] = ..., event: _Optional[_Union[ShadowEvent, str]] = ..., account: _Optional[str] = ..., sequence: _Optional[int] = ..., tag: _Optional[str] = ...) -> None: ...

class PatchManyRequest(_message.Message):
    __slots__ = ("devices", "desired", "namespace", "tag")
    DEVICES_FIELD_NUMBER: _ClassVar[int]
    DESIRED_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    TAG_FIELD_NUMBER: _ClassVar[int]
    devices: _containers.RepeatedScalarFieldContainer[str]
    desired: State
    namespace: str
    tag: str
    def __init__(self, devices: _Optional[_Iterable[str]] = ..., desired: _Optional[_Union[State, _Mapping]] = ..., namespace: _Optional[str] = ..., tag: _Optional[str] = ...) -> None: ...

class DevicePatchResult(_message.Message):
    __slots__ = ("device", "error")
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    device: str
    error: str
    def __init__(self, device: _Optional[str] = ..., error: _Optional[str] = ...) -> None: ...

class PatchManyResponse(_message.Message):
    __slots__ = ("updated", "results")
    UPDATED_FIELD_NUMBER: _ClassVar[int]
    RESULTS_FIELD_NUMBER: _ClassVar[int]
    updated: int
    results: _containers.RepeatedCompositeFieldContainer[DevicePatchResult]
    def __init__(self, updated: _Optional[int] = ..., results: _Optional[_Iterable[_Union[DevicePatchResult, _Mapping]]] = ...) -> None: ...

class AssignOTARequest(_message.Message):
    __slots__ = ("namespace", "tag", "devices", "version")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    TAG_FIELD_NUMBER: _ClassVar[int]
    DEVICES_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    tag: str
    devices: _containers.RepeatedScalarFieldContainer[str]
    version: str
    def __init__(self, namespace: _Optional[str] = ..., tag: _Optional[str] = ..., devices: _Optional[_Iterable[str]] = ..., version: _Optional[str] = ...) -> None: ...

class AssignOTAResponse(_message.Message):
    __slots__ = ("updated", "results")
    UPDATED_FIELD_NUMBER: _ClassVar[int]
    RESULTS_FIELD_NUMBER: _ClassVar[int]
    updated: int
    results: _containers.RepeatedCompositeFieldContainer[DevicePatchResult]
    def __init__(self, updated: _Optional[int] = ..., results: _Optional[_Iterable[_Union[DevicePatchResult, _Mapping]]] = ...) -> None: ...

class GetRequest(_message.Message):
    __slots__ = ("pool", "devices", "device")
    POOL_FIELD_NUMBER: _ClassVar[int]
    DEVICES_FIELD_NUMBER: _ClassVar[int]
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    pool: _containers.RepeatedScalarFieldContainer[str]
    devices: _containers.RepeatedScalarFieldContainer[str]
    device: str
    def __init__(self, pool: _Optional[_Iterable[str]] = ..., devices: _Optional[_Iterable[str]] = ..., device: _Optional[str] = ...) -> None: ...

class GetResponse(_message.Message):
    __slots__ = ("shadows",)
    SHADOWS_FIELD_NUMBER: _ClassVar[int]
    shadows: _containers.RepeatedCompositeFieldContainer[Shadow]
    def __init__(self, shadows: _Optional[_Iterable[_Union[Shadow, _Mapping]]] = ...) -> None: ...

class RemoveRequest(_message.Message):
    __slots__ = ("device", "state_key", "key")
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    STATE_KEY_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    device: str
    state_key: StateKey
    key: str
    def __init__(self, device: _Optional[str] = ..., state_key: _Optional[_Union[StateKey, str]] = ..., key: _Optional[str] = ...) -> None: ...

class StreamShadowRequest(_message.Message):
    __slots__ = ("devices", "only_delta", "sync", "namespace", "namespaces", "account", "catalog", "include", "resume_after")
    DEVICES_FIELD_NUMBER: _ClassVar[int]
    ONLY_DELTA_FIELD_NUMBER: _ClassVar[int]
    SYNC_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAMESPACES_FIELD_NUMBER: _ClassVar[int]
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    CATALOG_FIELD_NUMBER: _ClassVar[int]
    INCLUDE_FIELD_NUMBER: _ClassVar[int]
    RESUME_AFTER_FIELD_NUMBER: _ClassVar[int]
    devices: _containers.RepeatedScalarFieldContainer[str]
    only_delta: bool
    sync: bool
    namespace: str
    namespaces: _containers.RepeatedScalarFieldContainer[str]
    account: str
    catalog: _containers.RepeatedCompositeFieldContainer[DeviceMeta]
    include: _containers.RepeatedScalarFieldContainer[StateKey]
    resume_after: int
    def __init__(self, devices: _Optional[_Iterable[str]] = ..., only_delta: _Optional[bool] = ..., sync: _Optional[bool] = ..., namespace: _Optional[str] = ..., namespaces: _Optional[_Iterable[str]] = ..., account: _Optional[str] = ..., catalog: _Optional[_Iterable[_Union[DeviceMeta, _Mapping]]] = ..., include: _Optional[_Iterable[_Union[StateKey, str]]] = ..., resume_after: _Optional[int] = ...) -> None: ...
