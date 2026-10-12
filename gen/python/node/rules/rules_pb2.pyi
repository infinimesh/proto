import datetime

from google.protobuf import struct_pb2 as _struct_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AlarmState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    RAISED: _ClassVar[AlarmState]
    ACKED: _ClassVar[AlarmState]
    CLEARED: _ClassVar[AlarmState]
RAISED: AlarmState
ACKED: AlarmState
CLEARED: AlarmState

class Rule(_message.Message):
    __slots__ = ("uuid", "namespace", "name", "when", "clear", "cooldown", "repeat", "on_clear", "actions")
    UUID_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    WHEN_FIELD_NUMBER: _ClassVar[int]
    CLEAR_FIELD_NUMBER: _ClassVar[int]
    COOLDOWN_FIELD_NUMBER: _ClassVar[int]
    REPEAT_FIELD_NUMBER: _ClassVar[int]
    ON_CLEAR_FIELD_NUMBER: _ClassVar[int]
    ACTIONS_FIELD_NUMBER: _ClassVar[int]
    uuid: str
    namespace: str
    name: str
    when: str
    clear: str
    cooldown: str
    repeat: str
    on_clear: bool
    actions: _containers.RepeatedCompositeFieldContainer[Action]
    def __init__(self, uuid: _Optional[str] = ..., namespace: _Optional[str] = ..., name: _Optional[str] = ..., when: _Optional[str] = ..., clear: _Optional[str] = ..., cooldown: _Optional[str] = ..., repeat: _Optional[str] = ..., on_clear: _Optional[bool] = ..., actions: _Optional[_Iterable[_Union[Action, _Mapping]]] = ...) -> None: ...

class Action(_message.Message):
    __slots__ = ("log", "webhook", "mqtt", "desired")
    LOG_FIELD_NUMBER: _ClassVar[int]
    WEBHOOK_FIELD_NUMBER: _ClassVar[int]
    MQTT_FIELD_NUMBER: _ClassVar[int]
    DESIRED_FIELD_NUMBER: _ClassVar[int]
    log: LogAction
    webhook: WebhookAction
    mqtt: MQTTAction
    desired: _struct_pb2.Struct
    def __init__(self, log: _Optional[_Union[LogAction, _Mapping]] = ..., webhook: _Optional[_Union[WebhookAction, _Mapping]] = ..., mqtt: _Optional[_Union[MQTTAction, _Mapping]] = ..., desired: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ...) -> None: ...

class LogAction(_message.Message):
    __slots__ = ("message",)
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    message: str
    def __init__(self, message: _Optional[str] = ...) -> None: ...

class WebhookAction(_message.Message):
    __slots__ = ("url", "secret")
    URL_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    url: str
    secret: str
    def __init__(self, url: _Optional[str] = ..., secret: _Optional[str] = ...) -> None: ...

class MQTTAction(_message.Message):
    __slots__ = ("topic", "qos", "retain")
    TOPIC_FIELD_NUMBER: _ClassVar[int]
    QOS_FIELD_NUMBER: _ClassVar[int]
    RETAIN_FIELD_NUMBER: _ClassVar[int]
    topic: str
    qos: int
    retain: bool
    def __init__(self, topic: _Optional[str] = ..., qos: _Optional[int] = ..., retain: _Optional[bool] = ...) -> None: ...

class Rules(_message.Message):
    __slots__ = ("rules", "next_page_token")
    RULES_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    rules: _containers.RepeatedCompositeFieldContainer[Rule]
    next_page_token: str
    def __init__(self, rules: _Optional[_Iterable[_Union[Rule, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListRulesRequest(_message.Message):
    __slots__ = ("namespace", "page_size", "page_token")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class Alarm(_message.Message):
    __slots__ = ("rule", "device", "title", "state", "raised_at", "fired_at", "acked_at", "cleared_at", "count", "namespace")
    RULE_FIELD_NUMBER: _ClassVar[int]
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    RAISED_AT_FIELD_NUMBER: _ClassVar[int]
    FIRED_AT_FIELD_NUMBER: _ClassVar[int]
    ACKED_AT_FIELD_NUMBER: _ClassVar[int]
    CLEARED_AT_FIELD_NUMBER: _ClassVar[int]
    COUNT_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    rule: str
    device: str
    title: str
    state: AlarmState
    raised_at: _timestamp_pb2.Timestamp
    fired_at: _timestamp_pb2.Timestamp
    acked_at: _timestamp_pb2.Timestamp
    cleared_at: _timestamp_pb2.Timestamp
    count: int
    namespace: str
    def __init__(self, rule: _Optional[str] = ..., device: _Optional[str] = ..., title: _Optional[str] = ..., state: _Optional[_Union[AlarmState, str]] = ..., raised_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., fired_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., acked_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., cleared_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., count: _Optional[int] = ..., namespace: _Optional[str] = ...) -> None: ...

class Alarms(_message.Message):
    __slots__ = ("alarms", "next_page_token")
    ALARMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    alarms: _containers.RepeatedCompositeFieldContainer[Alarm]
    next_page_token: str
    def __init__(self, alarms: _Optional[_Iterable[_Union[Alarm, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListAlarmsRequest(_message.Message):
    __slots__ = ("namespace", "device", "state", "any_state", "page_size", "page_token")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    ANY_STATE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    device: str
    state: AlarmState
    any_state: bool
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., device: _Optional[str] = ..., state: _Optional[_Union[AlarmState, str]] = ..., any_state: _Optional[bool] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class AlarmRef(_message.Message):
    __slots__ = ("rule", "device")
    RULE_FIELD_NUMBER: _ClassVar[int]
    DEVICE_FIELD_NUMBER: _ClassVar[int]
    rule: str
    device: str
    def __init__(self, rule: _Optional[str] = ..., device: _Optional[str] = ...) -> None: ...
