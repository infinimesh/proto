from google.api import annotations_pb2 as _annotations_pb2
from node.access import access_pb2 as _access_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class PluginKind(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    UNKNOWN: _ClassVar[PluginKind]
    EMBEDDED: _ClassVar[PluginKind]
    OTA: _ClassVar[PluginKind]
UNKNOWN: PluginKind
EMBEDDED: PluginKind
OTA: PluginKind

class Plugin(_message.Message):
    __slots__ = ("uuid", "logo", "title", "description", "public", "namespace", "access", "kind", "embedded_conf")
    UUID_FIELD_NUMBER: _ClassVar[int]
    LOGO_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    PUBLIC_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    EMBEDDED_CONF_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    logo: str
    title: str
    description: str
    public: bool
    namespace: str
    access: _access_pb2.Access
    kind: PluginKind
    embedded_conf: EmbededPluginConf
    def __init__(self, uuid: _Optional[str] = ..., logo: _Optional[str] = ..., title: _Optional[str] = ..., description: _Optional[str] = ..., public: _Optional[bool] = ..., namespace: _Optional[str] = ..., access: _Optional[_Union[_access_pb2.Access, _Mapping]] = ..., kind: _Optional[_Union[PluginKind, str]] = ..., embedded_conf: _Optional[_Union[EmbededPluginConf, _Mapping]] = ...) -> None: ...

class Plugins(_message.Message):
    __slots__ = ("pool", "next_page_token", "plugins")
    POOL_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    PLUGINS_FIELD_NUMBER: _ClassVar[int]
    pool: _containers.RepeatedCompositeFieldContainer[Plugin]
    next_page_token: str
    plugins: _containers.RepeatedCompositeFieldContainer[Plugin]
    def __init__(self, pool: _Optional[_Iterable[_Union[Plugin, _Mapping]]] = ..., next_page_token: _Optional[str] = ..., plugins: _Optional[_Iterable[_Union[Plugin, _Mapping]]] = ...) -> None: ...

class EmbededPluginConf(_message.Message):
    __slots__ = ("frame_url",)
    FRAME_URL_FIELD_NUMBER: _ClassVar[int]
    frame_url: str
    def __init__(self, frame_url: _Optional[str] = ...) -> None: ...

class ListRequest(_message.Message):
    __slots__ = ("namespace", "page_size", "page_token")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...
