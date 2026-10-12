import datetime

from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Session(_message.Message):
    __slots__ = ("id", "created", "expires", "client", "current")
    ID_FIELD_NUMBER: _ClassVar[int]
    CREATED_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_FIELD_NUMBER: _ClassVar[int]
    CLIENT_FIELD_NUMBER: _ClassVar[int]
    CURRENT_FIELD_NUMBER: _ClassVar[int]
    id: str
    created: _timestamp_pb2.Timestamp
    expires: _timestamp_pb2.Timestamp
    client: str
    current: bool
    def __init__(self, id: _Optional[str] = ..., created: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., expires: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., client: _Optional[str] = ..., current: _Optional[bool] = ...) -> None: ...

class Sessions(_message.Message):
    __slots__ = ("sessions", "next_page_token")
    SESSIONS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    sessions: _containers.RepeatedCompositeFieldContainer[Session]
    next_page_token: str
    def __init__(self, sessions: _Optional[_Iterable[_Union[Session, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class Activity(_message.Message):
    __slots__ = ("last_seen",)
    class LastSeenEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _timestamp_pb2.Timestamp
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...
    LAST_SEEN_FIELD_NUMBER: _ClassVar[int]
    last_seen: _containers.MessageMap[str, _timestamp_pb2.Timestamp]
    def __init__(self, last_seen: _Optional[_Mapping[str, _timestamp_pb2.Timestamp]] = ...) -> None: ...
