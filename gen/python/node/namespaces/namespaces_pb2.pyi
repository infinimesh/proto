from node.access import access_pb2 as _access_pb2
from google.protobuf import struct_pb2 as _struct_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Namespace(_message.Message):
    __slots__ = ("uuid", "title", "access", "plugin", "config", "ota", "quota")
    UUID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    PLUGIN_FIELD_NUMBER: _ClassVar[int]
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    OTA_FIELD_NUMBER: _ClassVar[int]
    QUOTA_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    title: str
    access: _access_pb2.Access
    plugin: str
    config: _struct_pb2.Struct
    ota: OTAConfig
    quota: Quota
    def __init__(self, uuid: _Optional[str] = ..., title: _Optional[str] = ..., access: _Optional[_Union[_access_pb2.Access, _Mapping]] = ..., plugin: _Optional[str] = ..., config: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., ota: _Optional[_Union[OTAConfig, _Mapping]] = ..., quota: _Optional[_Union[Quota, _Mapping]] = ...) -> None: ...

class OTAConfig(_message.Message):
    __slots__ = ("enabled", "backend_url", "backend")
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    BACKEND_URL_FIELD_NUMBER: _ClassVar[int]
    BACKEND_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    backend_url: str
    backend: str
    def __init__(self, enabled: _Optional[bool] = ..., backend_url: _Optional[str] = ..., backend: _Optional[str] = ...) -> None: ...

class Quota(_message.Message):
    __slots__ = ("max_devices", "device_messages_per_second", "namespace_messages_per_second")
    MAX_DEVICES_FIELD_NUMBER: _ClassVar[int]
    DEVICE_MESSAGES_PER_SECOND_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_MESSAGES_PER_SECOND_FIELD_NUMBER: _ClassVar[int]
    max_devices: int
    device_messages_per_second: float
    namespace_messages_per_second: float
    def __init__(self, max_devices: _Optional[int] = ..., device_messages_per_second: _Optional[float] = ..., namespace_messages_per_second: _Optional[float] = ...) -> None: ...

class Namespaces(_message.Message):
    __slots__ = ("namespaces", "next_page_token")
    NAMESPACES_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespaces: _containers.RepeatedCompositeFieldContainer[Namespace]
    next_page_token: str
    def __init__(self, namespaces: _Optional[_Iterable[_Union[Namespace, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...
