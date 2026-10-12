from google.api import annotations_pb2 as _annotations_pb2
from protoc_gen_openapiv2.options import annotations_pb2 as _annotations_pb2_1
from node.accounts import accounts_pb2 as _accounts_pb2
from node.access import access_pb2 as _access_pb2
from node.sessions import sessions_pb2 as _sessions_pb2
from node.rules import rules_pb2 as _rules_pb2
from node.audit import audit_pb2 as _audit_pb2
from node.grants import grants_pb2 as _grants_pb2
from node.namespaces import namespaces_pb2 as _namespaces_pb2
from node.devices import devices_pb2 as _devices_pb2
from shadow import shadow_pb2 as _shadow_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class TokenRequest(_message.Message):
    __slots__ = ("auth", "exp", "uuid", "inf", "client", "expires_at", "infinite")
    AUTH_FIELD_NUMBER: _ClassVar[int]
    EXP_FIELD_NUMBER: _ClassVar[int]
    UUID_FIELD_NUMBER: _ClassVar[int]
    INF_FIELD_NUMBER: _ClassVar[int]
    CLIENT_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_AT_FIELD_NUMBER: _ClassVar[int]
    INFINITE_FIELD_NUMBER: _ClassVar[int]
    auth: _accounts_pb2.Credentials
    exp: int
    uuid: str
    inf: bool
    client: str
    expires_at: int
    infinite: bool
    def __init__(self, auth: _Optional[_Union[_accounts_pb2.Credentials, _Mapping]] = ..., exp: _Optional[int] = ..., uuid: _Optional[str] = ..., inf: _Optional[bool] = ..., client: _Optional[str] = ..., expires_at: _Optional[int] = ..., infinite: _Optional[bool] = ...) -> None: ...

class TokenResponse(_message.Message):
    __slots__ = ("token",)
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    token: str
    def __init__(self, token: _Optional[str] = ...) -> None: ...

class SetCredentialsRequest(_message.Message):
    __slots__ = ("uuid", "credentials")
    UUID_FIELD_NUMBER: _ClassVar[int]
    CREDENTIALS_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    credentials: _accounts_pb2.Credentials
    def __init__(self, uuid: _Optional[str] = ..., credentials: _Optional[_Union[_accounts_pb2.Credentials, _Mapping]] = ...) -> None: ...

class GetCredentialsRequest(_message.Message):
    __slots__ = ("uuid",)
    UUID_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    def __init__(self, uuid: _Optional[str] = ...) -> None: ...

class GetCredentialsResponse(_message.Message):
    __slots__ = ("credentials",)
    CREDENTIALS_FIELD_NUMBER: _ClassVar[int]
    credentials: _containers.RepeatedCompositeFieldContainer[_accounts_pb2.Credentials]
    def __init__(self, credentials: _Optional[_Iterable[_Union[_accounts_pb2.Credentials, _Mapping]]] = ...) -> None: ...

class DeleteCredentialsRequest(_message.Message):
    __slots__ = ("uuid", "type")
    UUID_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    type: str
    def __init__(self, uuid: _Optional[str] = ..., type: _Optional[str] = ...) -> None: ...

class SetCredentialsResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class DeleteResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class EmptyMessage(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ListRequest(_message.Message):
    __slots__ = ("page_size", "page_token")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class JoinRequest(_message.Message):
    __slots__ = ("namespace", "account", "access")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    account: str
    access: _access_pb2.Level
    def __init__(self, namespace: _Optional[str] = ..., account: _Optional[str] = ..., access: _Optional[_Union[_access_pb2.Level, str]] = ...) -> None: ...

class DevicesTokenRequest(_message.Message):
    __slots__ = ("devices", "exp", "post", "namespace", "stream", "expires_at")
    class DevicesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _access_pb2.Level
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_access_pb2.Level, str]] = ...) -> None: ...
    DEVICES_FIELD_NUMBER: _ClassVar[int]
    EXP_FIELD_NUMBER: _ClassVar[int]
    POST_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    STREAM_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_AT_FIELD_NUMBER: _ClassVar[int]
    devices: _containers.ScalarMap[str, _access_pb2.Level]
    exp: int
    post: bool
    namespace: str
    stream: bool
    expires_at: int
    def __init__(self, devices: _Optional[_Mapping[str, _access_pb2.Level]] = ..., exp: _Optional[int] = ..., post: _Optional[bool] = ..., namespace: _Optional[str] = ..., stream: _Optional[bool] = ..., expires_at: _Optional[int] = ...) -> None: ...

class RevokeDeviceTokenRequest(_message.Message):
    __slots__ = ("id", "token")
    ID_FIELD_NUMBER: _ClassVar[int]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    id: str
    token: str
    def __init__(self, id: _Optional[str] = ..., token: _Optional[str] = ...) -> None: ...

class MoveRequest(_message.Message):
    __slots__ = ("uuid", "namespace")
    UUID_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    namespace: str
    def __init__(self, uuid: _Optional[str] = ..., namespace: _Optional[str] = ...) -> None: ...

class QueryRequest(_message.Message):
    __slots__ = ("namespace", "page_size", "page_token")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class JoinGeneralRequest(_message.Message):
    __slots__ = ("node", "join", "access")
    NODE_FIELD_NUMBER: _ClassVar[int]
    JOIN_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    node: str
    join: str
    access: _access_pb2.Level
    def __init__(self, node: _Optional[str] = ..., join: _Optional[str] = ..., access: _Optional[_Union[_access_pb2.Level, str]] = ...) -> None: ...

class LDAPProviders(_message.Message):
    __slots__ = ("providers",)
    class ProvidersEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    PROVIDERS_FIELD_NUMBER: _ClassVar[int]
    providers: _containers.ScalarMap[str, str]
    def __init__(self, providers: _Optional[_Mapping[str, str]] = ...) -> None: ...
