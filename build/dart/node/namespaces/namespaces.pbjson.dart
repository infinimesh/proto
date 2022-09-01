///
//  Generated code. Do not modify.
//  source: node/namespaces/namespaces.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use namespaceDescriptor instead')
const Namespace$json = const {
  '1': 'Namespace',
  '2': const [
    const {'1': 'uuid', '3': 1, '4': 1, '5': 9, '10': 'uuid'},
    const {'1': 'title', '3': 2, '4': 1, '5': 9, '10': 'title'},
    const {'1': 'access', '3': 3, '4': 1, '5': 11, '6': '.infinimesh.node.access.Access', '9': 0, '10': 'access', '17': true},
    const {'1': 'plugin', '3': 4, '4': 1, '5': 9, '9': 1, '10': 'plugin', '17': true},
  ],
  '8': const [
    const {'1': '_access'},
    const {'1': '_plugin'},
  ],
};

/// Descriptor for `Namespace`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List namespaceDescriptor = $convert.base64Decode('CglOYW1lc3BhY2USEgoEdXVpZBgBIAEoCVIEdXVpZBIUCgV0aXRsZRgCIAEoCVIFdGl0bGUSOwoGYWNjZXNzGAMgASgLMh4uaW5maW5pbWVzaC5ub2RlLmFjY2Vzcy5BY2Nlc3NIAFIGYWNjZXNziAEBEhsKBnBsdWdpbhgEIAEoCUgBUgZwbHVnaW6IAQFCCQoHX2FjY2Vzc0IJCgdfcGx1Z2lu');
@$core.Deprecated('Use namespacesDescriptor instead')
const Namespaces$json = const {
  '1': 'Namespaces',
  '2': const [
    const {'1': 'namespaces', '3': 1, '4': 3, '5': 11, '6': '.infinimesh.node.namespaces.Namespace', '10': 'namespaces'},
  ],
};

/// Descriptor for `Namespaces`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List namespacesDescriptor = $convert.base64Decode('CgpOYW1lc3BhY2VzEkUKCm5hbWVzcGFjZXMYASADKAsyJS5pbmZpbmltZXNoLm5vZGUubmFtZXNwYWNlcy5OYW1lc3BhY2VSCm5hbWVzcGFjZXM=');
