// @generated by protoc-gen-es v1.6.0 with parameter "target=js+dts"
// @generated from file timeseries/timeseries.proto (package infinimesh.timeseries, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message infinimesh.timeseries.DataPoint
 */
export const DataPoint = proto3.makeMessageType(
  "infinimesh.timeseries.DataPoint",
  () => [
    { no: 1, name: "ts", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * @generated from message infinimesh.timeseries.WriteRequest
 */
export const WriteRequest = proto3.makeMessageType(
  "infinimesh.timeseries.WriteRequest",
  () => [
    { no: 1, name: "device", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "data_point", kind: "message", T: DataPoint },
  ],
);

/**
 * @generated from message infinimesh.timeseries.WriteResponse
 */
export const WriteResponse = proto3.makeMessageType(
  "infinimesh.timeseries.WriteResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "ts", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message infinimesh.timeseries.WriteBulkRequest
 */
export const WriteBulkRequest = proto3.makeMessageType(
  "infinimesh.timeseries.WriteBulkRequest",
  () => [
    { no: 1, name: "device", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metric", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "data_points", kind: "message", T: DataPoint, repeated: true },
  ],
);

/**
 * @generated from message infinimesh.timeseries.WriteBulkResponse
 */
export const WriteBulkResponse = proto3.makeMessageType(
  "infinimesh.timeseries.WriteBulkResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message infinimesh.timeseries.ReadRequest
 */
export const ReadRequest = proto3.makeMessageType(
  "infinimesh.timeseries.ReadRequest",
  () => [
    { no: 1, name: "device", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "fields", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "from", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "to", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
  ],
);

/**
 * @generated from message infinimesh.timeseries.FieldInfo
 */
export const FieldInfo = proto3.makeMessageType(
  "infinimesh.timeseries.FieldInfo",
  () => [
    { no: 1, name: "field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data_points", kind: "message", T: DataPoint, repeated: true },
  ],
);

/**
 * @generated from message infinimesh.timeseries.ReadResponse
 */
export const ReadResponse = proto3.makeMessageType(
  "infinimesh.timeseries.ReadResponse",
  () => [
    { no: 1, name: "fields_info", kind: "message", T: FieldInfo, repeated: true },
  ],
);

/**
 * @generated from message infinimesh.timeseries.Metric
 */
export const Metric = proto3.makeMessageType(
  "infinimesh.timeseries.Metric",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data_points", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "earliest", kind: "message", T: DataPoint },
    { no: 4, name: "latest", kind: "message", T: DataPoint },
  ],
);

/**
 * @generated from message infinimesh.timeseries.DeviceMetric
 */
export const DeviceMetric = proto3.makeMessageType(
  "infinimesh.timeseries.DeviceMetric",
  () => [
    { no: 1, name: "device", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metrics", kind: "message", T: Metric, repeated: true },
  ],
);

/**
 * @generated from message infinimesh.timeseries.StatRequest
 */
export const StatRequest = proto3.makeMessageType(
  "infinimesh.timeseries.StatRequest",
  () => [
    { no: 1, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "device", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message infinimesh.timeseries.StatResponse
 */
export const StatResponse = proto3.makeMessageType(
  "infinimesh.timeseries.StatResponse",
  () => [
    { no: 1, name: "device_metrics", kind: "message", T: DeviceMetric, repeated: true },
  ],
);

/**
 * @generated from message infinimesh.timeseries.FlushRequest
 */
export const FlushRequest = proto3.makeMessageType(
  "infinimesh.timeseries.FlushRequest",
  () => [
    { no: 1, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "device", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message infinimesh.timeseries.FlushResponse
 */
export const FlushResponse = proto3.makeMessageType(
  "infinimesh.timeseries.FlushResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

