from node.access import access_pb2 as _access_pb2
from node.namespaces import namespaces_pb2 as _namespaces_pb2
from google.protobuf import struct_pb2 as _struct_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Device(_message.Message):
    __slots__ = ("uuid", "title", "enabled", "certificate", "tags", "basic_enabled", "token", "access", "config", "quota")
    UUID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    CERTIFICATE_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    BASIC_ENABLED_FIELD_NUMBER: _ClassVar[int]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    QUOTA_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    title: str
    enabled: bool
    certificate: Certificate
    tags: _containers.RepeatedScalarFieldContainer[str]
    basic_enabled: bool
    token: str
    access: _access_pb2.Access
    config: _struct_pb2.Struct
    quota: _namespaces_pb2.Quota
    def __init__(self, uuid: _Optional[str] = ..., title: _Optional[str] = ..., enabled: _Optional[bool] = ..., certificate: _Optional[_Union[Certificate, _Mapping]] = ..., tags: _Optional[_Iterable[str]] = ..., basic_enabled: _Optional[bool] = ..., token: _Optional[str] = ..., access: _Optional[_Union[_access_pb2.Access, _Mapping]] = ..., config: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., quota: _Optional[_Union[_namespaces_pb2.Quota, _Mapping]] = ...) -> None: ...

class Certificate(_message.Message):
    __slots__ = ("pem_data", "algorithm", "fingerprint", "rollover_fingerprint", "revoked", "revoked_fingerprints")
    PEM_DATA_FIELD_NUMBER: _ClassVar[int]
    ALGORITHM_FIELD_NUMBER: _ClassVar[int]
    FINGERPRINT_FIELD_NUMBER: _ClassVar[int]
    ROLLOVER_FINGERPRINT_FIELD_NUMBER: _ClassVar[int]
    REVOKED_FIELD_NUMBER: _ClassVar[int]
    REVOKED_FINGERPRINTS_FIELD_NUMBER: _ClassVar[int]
    pem_data: str
    algorithm: str
    fingerprint: bytes
    rollover_fingerprint: bytes
    revoked: bool
    revoked_fingerprints: _containers.RepeatedScalarFieldContainer[bytes]
    def __init__(self, pem_data: _Optional[str] = ..., algorithm: _Optional[str] = ..., fingerprint: _Optional[bytes] = ..., rollover_fingerprint: _Optional[bytes] = ..., revoked: _Optional[bool] = ..., revoked_fingerprints: _Optional[_Iterable[bytes]] = ...) -> None: ...

class Devices(_message.Message):
    __slots__ = ("devices", "next_page_token")
    DEVICES_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    devices: _containers.RepeatedCompositeFieldContainer[Device]
    next_page_token: str
    def __init__(self, devices: _Optional[_Iterable[_Union[Device, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class PairingCreate(_message.Message):
    __slots__ = ("code", "payload")
    CODE_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    code: str
    payload: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, code: _Optional[str] = ..., payload: _Optional[_Iterable[str]] = ...) -> None: ...

class CreateRequest(_message.Message):
    __slots__ = ("device", "namespace", "pairing")
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAIRING_FIELD_NUMBER: _ClassVar[int]
    device: Device
    namespace: str
    pairing: PairingCreate
    def __init__(self, device: _Optional[_Union[Device, _Mapping]] = ..., namespace: _Optional[str] = ..., pairing: _Optional[_Union[PairingCreate, _Mapping]] = ...) -> None: ...

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

class BulkCreateRequest(_message.Message):
    __slots__ = ("namespace", "devices")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    DEVICES_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    devices: _containers.RepeatedCompositeFieldContainer[Device]
    def __init__(self, namespace: _Optional[str] = ..., devices: _Optional[_Iterable[_Union[Device, _Mapping]]] = ...) -> None: ...

class BulkCreateResponse(_message.Message):
    __slots__ = ("devices",)
    DEVICES_FIELD_NUMBER: _ClassVar[int]
    devices: _containers.RepeatedCompositeFieldContainer[Device]
    def __init__(self, devices: _Optional[_Iterable[_Union[Device, _Mapping]]] = ...) -> None: ...

class ClaimIssueRequest(_message.Message):
    __slots__ = ("namespace", "expires_at")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_AT_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    expires_at: int
    def __init__(self, namespace: _Optional[str] = ..., expires_at: _Optional[int] = ...) -> None: ...

class ClaimIssueResponse(_message.Message):
    __slots__ = ("token", "expires_at")
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_AT_FIELD_NUMBER: _ClassVar[int]
    token: str
    expires_at: int
    def __init__(self, token: _Optional[str] = ..., expires_at: _Optional[int] = ...) -> None: ...

class ClaimRequest(_message.Message):
    __slots__ = ("token", "device")
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    token: str
    device: Device
    def __init__(self, token: _Optional[str] = ..., device: _Optional[_Union[Device, _Mapping]] = ...) -> None: ...

class ClaimResponse(_message.Message):
    __slots__ = ("device",)
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    device: Device
    def __init__(self, device: _Optional[_Union[Device, _Mapping]] = ...) -> None: ...

class RotateCertificateRequest(_message.Message):
    __slots__ = ("uuid", "certificate")
    UUID_FIELD_NUMBER: _ClassVar[int]
    CERTIFICATE_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    certificate: Certificate
    def __init__(self, uuid: _Optional[str] = ..., certificate: _Optional[_Union[Certificate, _Mapping]] = ...) -> None: ...

class RevokeCertificateRequest(_message.Message):
    __slots__ = ("uuid", "fingerprint")
    UUID_FIELD_NUMBER: _ClassVar[int]
    FINGERPRINT_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    fingerprint: bytes
    def __init__(self, uuid: _Optional[str] = ..., fingerprint: _Optional[bytes] = ...) -> None: ...
