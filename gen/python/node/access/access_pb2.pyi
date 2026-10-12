from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Level(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    NONE: _ClassVar[Level]
    READ: _ClassVar[Level]
    MGMT: _ClassVar[Level]
    ADMIN: _ClassVar[Level]
    ROOT: _ClassVar[Level]

class Role(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    UNSET: _ClassVar[Role]
    OWNER: _ClassVar[Role]
    SHARED: _ClassVar[Role]
NONE: Level
READ: Level
MGMT: Level
ADMIN: Level
ROOT: Level
UNSET: Role
OWNER: Role
SHARED: Role

class Access(_message.Message):
    __slots__ = ("level", "role", "namespace")
    LEVEL_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    level: Level
    role: Role
    namespace: str
    def __init__(self, level: _Optional[_Union[Level, str]] = ..., role: _Optional[_Union[Role, str]] = ..., namespace: _Optional[str] = ...) -> None: ...

class Node(_message.Message):
    __slots__ = ("node", "parent", "edge", "access")
    NODE_FIELD_NUMBER: _ClassVar[int]
    PARENT_FIELD_NUMBER: _ClassVar[int]
    EDGE_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    node: str
    parent: str
    edge: str
    access: Access
    def __init__(self, node: _Optional[str] = ..., parent: _Optional[str] = ..., edge: _Optional[str] = ..., access: _Optional[_Union[Access, _Mapping]] = ...) -> None: ...

class Nodes(_message.Message):
    __slots__ = ("nodes",)
    NODES_FIELD_NUMBER: _ClassVar[int]
    nodes: _containers.RepeatedCompositeFieldContainer[Node]
    def __init__(self, nodes: _Optional[_Iterable[_Union[Node, _Mapping]]] = ...) -> None: ...
