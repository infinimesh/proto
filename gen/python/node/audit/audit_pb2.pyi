import datetime

from google.protobuf import timestamp_pb2 as _timestamp_pb2
from node.devices import devices_pb2 as _devices_pb2
from shadow import shadow_pb2 as _shadow_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AuditRecord(_message.Message):
    __slots__ = ("id", "account", "device", "token_id", "at", "action", "namespace")
    ID_FIELD_NUMBER: _ClassVar[int]
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    AT_FIELD_NUMBER: _ClassVar[int]
    ACTION_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    id: str
    account: str
    device: str
    token_id: str
    at: _timestamp_pb2.Timestamp
    action: str
    namespace: str
    def __init__(self, id: _Optional[str] = ..., account: _Optional[str] = ..., device: _Optional[str] = ..., token_id: _Optional[str] = ..., at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., action: _Optional[str] = ..., namespace: _Optional[str] = ...) -> None: ...

class AuditRecords(_message.Message):
    __slots__ = ("records", "next_page_token")
    RECORDS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    records: _containers.RepeatedCompositeFieldContainer[AuditRecord]
    next_page_token: str
    def __init__(self, records: _Optional[_Iterable[_Union[AuditRecord, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListAuditRequest(_message.Message):
    __slots__ = ("device", "account", "page_size", "page_token", "namespace")
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    device: str
    account: str
    page_size: int
    page_token: str
    namespace: str
    def __init__(self, device: _Optional[str] = ..., account: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., namespace: _Optional[str] = ...) -> None: ...

class ExportRequest(_message.Message):
    __slots__ = ("device",)
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    device: str
    def __init__(self, device: _Optional[str] = ...) -> None: ...

class ExportResponse(_message.Message):
    __slots__ = ("device", "shadow", "history")
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    SHADOW_FIELD_NUMBER: _ClassVar[int]
    HISTORY_FIELD_NUMBER: _ClassVar[int]
    device: _devices_pb2.Device
    shadow: _shadow_pb2.Shadow
    history: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, device: _Optional[_Union[_devices_pb2.Device, _Mapping]] = ..., shadow: _Optional[_Union[_shadow_pb2.Shadow, _Mapping]] = ..., history: _Optional[_Iterable[str]] = ...) -> None: ...
