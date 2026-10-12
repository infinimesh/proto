from node.access import access_pb2 as _access_pb2
from google.protobuf import struct_pb2 as _struct_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Device(_message.Message):
    __slots__ = ("uuid", "title", "enabled", "certificate", "tags", "basic_enabled", "token", "access", "config")
    UUID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    CERTIFICATE_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    BASIC_ENABLED_FIELD_NUMBER: _ClassVar[int]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    title: str
    enabled: bool
    certificate: Certificate
    tags: _containers.RepeatedScalarFieldContainer[str]
    basic_enabled: bool
    token: str
    access: _access_pb2.Access
    config: _struct_pb2.Struct
    def __init__(self, uuid: _Optional[str] = ..., title: _Optional[str] = ..., enabled: _Optional[bool] = ..., certificate: _Optional[_Union[Certificate, _Mapping]] = ..., tags: _Optional[_Iterable[str]] = ..., basic_enabled: _Optional[bool] = ..., token: _Optional[str] = ..., access: _Optional[_Union[_access_pb2.Access, _Mapping]] = ..., config: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ...) -> None: ...

class Certificate(_message.Message):
    __slots__ = ("pem_data", "algorithm", "fingerprint")
    PEM_DATA_FIELD_NUMBER: _ClassVar[int]
    ALGORITHM_FIELD_NUMBER: _ClassVar[int]
    FINGERPRINT_FIELD_NUMBER: _ClassVar[int]
    pem_data: str
    algorithm: str
    fingerprint: bytes
    def __init__(self, pem_data: _Optional[str] = ..., algorithm: _Optional[str] = ..., fingerprint: _Optional[bytes] = ...) -> None: ...

class Devices(_message.Message):
    __slots__ = ("devices", "next_page_token")
    DEVICES_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    devices: _containers.RepeatedCompositeFieldContainer[Device]
    next_page_token: str
    def __init__(self, devices: _Optional[_Iterable[_Union[Device, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class HandsfreeCreate(_message.Message):
    __slots__ = ("code", "payload")
    CODE_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    code: str
    payload: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, code: _Optional[str] = ..., payload: _Optional[_Iterable[str]] = ...) -> None: ...

class CreateRequest(_message.Message):
    __slots__ = ("device", "namespace", "handsfree")
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    HANDSFREE_FIELD_NUMBER: _ClassVar[int]
    device: Device
    namespace: str
    handsfree: HandsfreeCreate
    def __init__(self, device: _Optional[_Union[Device, _Mapping]] = ..., namespace: _Optional[str] = ..., handsfree: _Optional[_Union[HandsfreeCreate, _Mapping]] = ...) -> None: ...

class CreateResponse(_message.Message):
    __slots__ = ("device",)
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    device: Device
    def __init__(self, device: _Optional[_Union[Device, _Mapping]] = ...) -> None: ...

class GetByFingerprintRequest(_message.Message):
    __slots__ = ("fingerprint",)
    FINGERPRINT_FIELD_NUMBER: _ClassVar[int]
    fingerprint: bytes
    def __init__(self, fingerprint: _Optional[bytes] = ...) -> None: ...
