from node.access import access_pb2 as _access_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Credentials(_message.Message):
    __slots__ = ("type", "data")
    TYPE_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    type: str
    data: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, type: _Optional[str] = ..., data: _Optional[_Iterable[str]] = ...) -> None: ...

class Account(_message.Message):
    __slots__ = ("uuid", "title", "enabled", "default_namespace", "access")
    UUID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    DEFAULT_NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    title: str
    enabled: bool
    default_namespace: str
    access: _access_pb2.Access
    def __init__(self, uuid: _Optional[str] = ..., title: _Optional[str] = ..., enabled: _Optional[bool] = ..., default_namespace: _Optional[str] = ..., access: _Optional[_Union[_access_pb2.Access, _Mapping]] = ...) -> None: ...

class CreateRequest(_message.Message):
    __slots__ = ("account", "credentials", "namespace", "access")
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    CREDENTIALS_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    account: Account
    credentials: Credentials
    namespace: str
    access: int
    def __init__(self, account: _Optional[_Union[Account, _Mapping]] = ..., credentials: _Optional[_Union[Credentials, _Mapping]] = ..., namespace: _Optional[str] = ..., access: _Optional[int] = ...) -> None: ...

class CreateResponse(_message.Message):
    __slots__ = ("account",)
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    account: Account
    def __init__(self, account: _Optional[_Union[Account, _Mapping]] = ...) -> None: ...

class Accounts(_message.Message):
    __slots__ = ("accounts", "next_page_token")
    ACCOUNTS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    accounts: _containers.RepeatedCompositeFieldContainer[Account]
    next_page_token: str
    def __init__(self, accounts: _Optional[_Iterable[_Union[Account, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...
