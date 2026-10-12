from node.access import access_pb2 as _access_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Grant(_message.Message):
    __slots__ = ("id", "from_account", "to_account", "node", "level", "expires_at", "scope", "revoked")
    ID_FIELD_NUMBER: _ClassVar[int]
    FROM_ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    TO_ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    NODE_FIELD_NUMBER: _ClassVar[int]
    LEVEL_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_AT_FIELD_NUMBER: _ClassVar[int]
    SCOPE_FIELD_NUMBER: _ClassVar[int]
    REVOKED_FIELD_NUMBER: _ClassVar[int]
    id: str
    from_account: str
    to_account: str
    node: str
    level: _access_pb2.Level
    expires_at: int
    scope: str
    revoked: bool
    def __init__(self, id: _Optional[str] = ..., from_account: _Optional[str] = ..., to_account: _Optional[str] = ..., node: _Optional[str] = ..., level: _Optional[_Union[_access_pb2.Level, str]] = ..., expires_at: _Optional[int] = ..., scope: _Optional[str] = ..., revoked: _Optional[bool] = ...) -> None: ...

class Grants(_message.Message):
    __slots__ = ("grants", "next_page_token")
    GRANTS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    grants: _containers.RepeatedCompositeFieldContainer[Grant]
    next_page_token: str
    def __init__(self, grants: _Optional[_Iterable[_Union[Grant, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListGrantsRequest(_message.Message):
    __slots__ = ("node", "account", "page_size", "page_token")
    NODE_FIELD_NUMBER: _ClassVar[int]
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    node: str
    account: str
    page_size: int
    page_token: str
    def __init__(self, node: _Optional[str] = ..., account: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class Consent(_message.Message):
    __slots__ = ("id", "grantor", "grantee", "scope", "at", "revoked_at", "grant_id")
    ID_FIELD_NUMBER: _ClassVar[int]
    GRANTOR_FIELD_NUMBER: _ClassVar[int]
    GRANTEE_FIELD_NUMBER: _ClassVar[int]
    SCOPE_FIELD_NUMBER: _ClassVar[int]
    AT_FIELD_NUMBER: _ClassVar[int]
    REVOKED_AT_FIELD_NUMBER: _ClassVar[int]
    GRANT_ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    grantor: str
    grantee: str
    scope: str
    at: int
    revoked_at: int
    grant_id: str
    def __init__(self, id: _Optional[str] = ..., grantor: _Optional[str] = ..., grantee: _Optional[str] = ..., scope: _Optional[str] = ..., at: _Optional[int] = ..., revoked_at: _Optional[int] = ..., grant_id: _Optional[str] = ...) -> None: ...

class Consents(_message.Message):
    __slots__ = ("consents", "next_page_token")
    CONSENTS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    consents: _containers.RepeatedCompositeFieldContainer[Consent]
    next_page_token: str
    def __init__(self, consents: _Optional[_Iterable[_Union[Consent, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListConsentRequest(_message.Message):
    __slots__ = ("account", "page_size", "page_token")
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    account: str
    page_size: int
    page_token: str
    def __init__(self, account: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...
