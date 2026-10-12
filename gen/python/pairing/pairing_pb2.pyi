from google.api import annotations_pb2 as _annotations_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Code(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    UNKNOWN: _ClassVar[Code]
    AUTH: _ClassVar[Code]
    DATA: _ClassVar[Code]
    SUCCESS: _ClassVar[Code]
    ERROR: _ClassVar[Code]
UNKNOWN: Code
AUTH: Code
DATA: Code
SUCCESS: Code
ERROR: Code

class ConnectionRequest(_message.Message):
    __slots__ = ("app_id", "payload")
    APP_ID_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    app_id: str
    payload: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, app_id: _Optional[str] = ..., payload: _Optional[_Iterable[str]] = ...) -> None: ...

class ControlPacket(_message.Message):
    __slots__ = ("code", "payload", "app_id")
    CODE_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    APP_ID_FIELD_NUMBER: _ClassVar[int]
    code: Code
    payload: _containers.RepeatedScalarFieldContainer[str]
    app_id: str
    def __init__(self, code: _Optional[_Union[Code, str]] = ..., payload: _Optional[_Iterable[str]] = ..., app_id: _Optional[str] = ...) -> None: ...
