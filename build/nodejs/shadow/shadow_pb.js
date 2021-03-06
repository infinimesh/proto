// source: shadow/shadow.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.infinimesh.shadow.GetRequest', null, global);
goog.exportSymbol('proto.infinimesh.shadow.GetResponse', null, global);
goog.exportSymbol('proto.infinimesh.shadow.Shadow', null, global);
goog.exportSymbol('proto.infinimesh.shadow.State', null, global);
goog.exportSymbol('proto.infinimesh.shadow.StreamShadowRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.infinimesh.shadow.State = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.infinimesh.shadow.State, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.infinimesh.shadow.State.displayName = 'proto.infinimesh.shadow.State';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.infinimesh.shadow.Shadow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.infinimesh.shadow.Shadow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.infinimesh.shadow.Shadow.displayName = 'proto.infinimesh.shadow.Shadow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.infinimesh.shadow.GetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.infinimesh.shadow.GetRequest.repeatedFields_, null);
};
goog.inherits(proto.infinimesh.shadow.GetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.infinimesh.shadow.GetRequest.displayName = 'proto.infinimesh.shadow.GetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.infinimesh.shadow.GetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.infinimesh.shadow.GetResponse.repeatedFields_, null);
};
goog.inherits(proto.infinimesh.shadow.GetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.infinimesh.shadow.GetResponse.displayName = 'proto.infinimesh.shadow.GetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.infinimesh.shadow.StreamShadowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.infinimesh.shadow.StreamShadowRequest.repeatedFields_, null);
};
goog.inherits(proto.infinimesh.shadow.StreamShadowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.infinimesh.shadow.StreamShadowRequest.displayName = 'proto.infinimesh.shadow.StreamShadowRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.infinimesh.shadow.State.prototype.toObject = function(opt_includeInstance) {
  return proto.infinimesh.shadow.State.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.infinimesh.shadow.State} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.infinimesh.shadow.State.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    data: (f = msg.getData()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.infinimesh.shadow.State}
 */
proto.infinimesh.shadow.State.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.infinimesh.shadow.State;
  return proto.infinimesh.shadow.State.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.infinimesh.shadow.State} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.infinimesh.shadow.State}
 */
proto.infinimesh.shadow.State.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.infinimesh.shadow.State.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.infinimesh.shadow.State.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.infinimesh.shadow.State} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.infinimesh.shadow.State.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.infinimesh.shadow.State.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.infinimesh.shadow.State} returns this
*/
proto.infinimesh.shadow.State.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.infinimesh.shadow.State} returns this
 */
proto.infinimesh.shadow.State.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.infinimesh.shadow.State.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Struct data = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.infinimesh.shadow.State.prototype.getData = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.infinimesh.shadow.State} returns this
*/
proto.infinimesh.shadow.State.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.infinimesh.shadow.State} returns this
 */
proto.infinimesh.shadow.State.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.infinimesh.shadow.State.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.infinimesh.shadow.Shadow.prototype.toObject = function(opt_includeInstance) {
  return proto.infinimesh.shadow.Shadow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.infinimesh.shadow.Shadow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.infinimesh.shadow.Shadow.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reported: (f = msg.getReported()) && proto.infinimesh.shadow.State.toObject(includeInstance, f),
    desired: (f = msg.getDesired()) && proto.infinimesh.shadow.State.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.infinimesh.shadow.Shadow}
 */
proto.infinimesh.shadow.Shadow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.infinimesh.shadow.Shadow;
  return proto.infinimesh.shadow.Shadow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.infinimesh.shadow.Shadow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.infinimesh.shadow.Shadow}
 */
proto.infinimesh.shadow.Shadow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevice(value);
      break;
    case 2:
      var value = new proto.infinimesh.shadow.State;
      reader.readMessage(value,proto.infinimesh.shadow.State.deserializeBinaryFromReader);
      msg.setReported(value);
      break;
    case 3:
      var value = new proto.infinimesh.shadow.State;
      reader.readMessage(value,proto.infinimesh.shadow.State.deserializeBinaryFromReader);
      msg.setDesired(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.infinimesh.shadow.Shadow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.infinimesh.shadow.Shadow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.infinimesh.shadow.Shadow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.infinimesh.shadow.Shadow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReported();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.infinimesh.shadow.State.serializeBinaryToWriter
    );
  }
  f = message.getDesired();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.infinimesh.shadow.State.serializeBinaryToWriter
    );
  }
};


/**
 * optional string device = 1;
 * @return {string}
 */
proto.infinimesh.shadow.Shadow.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.infinimesh.shadow.Shadow} returns this
 */
proto.infinimesh.shadow.Shadow.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional State reported = 2;
 * @return {?proto.infinimesh.shadow.State}
 */
proto.infinimesh.shadow.Shadow.prototype.getReported = function() {
  return /** @type{?proto.infinimesh.shadow.State} */ (
    jspb.Message.getWrapperField(this, proto.infinimesh.shadow.State, 2));
};


/**
 * @param {?proto.infinimesh.shadow.State|undefined} value
 * @return {!proto.infinimesh.shadow.Shadow} returns this
*/
proto.infinimesh.shadow.Shadow.prototype.setReported = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.infinimesh.shadow.Shadow} returns this
 */
proto.infinimesh.shadow.Shadow.prototype.clearReported = function() {
  return this.setReported(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.infinimesh.shadow.Shadow.prototype.hasReported = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional State desired = 3;
 * @return {?proto.infinimesh.shadow.State}
 */
proto.infinimesh.shadow.Shadow.prototype.getDesired = function() {
  return /** @type{?proto.infinimesh.shadow.State} */ (
    jspb.Message.getWrapperField(this, proto.infinimesh.shadow.State, 3));
};


/**
 * @param {?proto.infinimesh.shadow.State|undefined} value
 * @return {!proto.infinimesh.shadow.Shadow} returns this
*/
proto.infinimesh.shadow.Shadow.prototype.setDesired = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.infinimesh.shadow.Shadow} returns this
 */
proto.infinimesh.shadow.Shadow.prototype.clearDesired = function() {
  return this.setDesired(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.infinimesh.shadow.Shadow.prototype.hasDesired = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.infinimesh.shadow.GetRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.infinimesh.shadow.GetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.infinimesh.shadow.GetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.infinimesh.shadow.GetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.infinimesh.shadow.GetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    poolList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.infinimesh.shadow.GetRequest}
 */
proto.infinimesh.shadow.GetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.infinimesh.shadow.GetRequest;
  return proto.infinimesh.shadow.GetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.infinimesh.shadow.GetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.infinimesh.shadow.GetRequest}
 */
proto.infinimesh.shadow.GetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPool(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.infinimesh.shadow.GetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.infinimesh.shadow.GetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.infinimesh.shadow.GetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.infinimesh.shadow.GetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPoolList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string pool = 1;
 * @return {!Array<string>}
 */
proto.infinimesh.shadow.GetRequest.prototype.getPoolList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.infinimesh.shadow.GetRequest} returns this
 */
proto.infinimesh.shadow.GetRequest.prototype.setPoolList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.infinimesh.shadow.GetRequest} returns this
 */
proto.infinimesh.shadow.GetRequest.prototype.addPool = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.infinimesh.shadow.GetRequest} returns this
 */
proto.infinimesh.shadow.GetRequest.prototype.clearPoolList = function() {
  return this.setPoolList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.infinimesh.shadow.GetResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.infinimesh.shadow.GetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.infinimesh.shadow.GetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.infinimesh.shadow.GetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.infinimesh.shadow.GetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    shadowsList: jspb.Message.toObjectList(msg.getShadowsList(),
    proto.infinimesh.shadow.Shadow.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.infinimesh.shadow.GetResponse}
 */
proto.infinimesh.shadow.GetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.infinimesh.shadow.GetResponse;
  return proto.infinimesh.shadow.GetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.infinimesh.shadow.GetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.infinimesh.shadow.GetResponse}
 */
proto.infinimesh.shadow.GetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.infinimesh.shadow.Shadow;
      reader.readMessage(value,proto.infinimesh.shadow.Shadow.deserializeBinaryFromReader);
      msg.addShadows(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.infinimesh.shadow.GetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.infinimesh.shadow.GetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.infinimesh.shadow.GetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.infinimesh.shadow.GetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShadowsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.infinimesh.shadow.Shadow.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Shadow shadows = 1;
 * @return {!Array<!proto.infinimesh.shadow.Shadow>}
 */
proto.infinimesh.shadow.GetResponse.prototype.getShadowsList = function() {
  return /** @type{!Array<!proto.infinimesh.shadow.Shadow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.infinimesh.shadow.Shadow, 1));
};


/**
 * @param {!Array<!proto.infinimesh.shadow.Shadow>} value
 * @return {!proto.infinimesh.shadow.GetResponse} returns this
*/
proto.infinimesh.shadow.GetResponse.prototype.setShadowsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.infinimesh.shadow.Shadow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.infinimesh.shadow.Shadow}
 */
proto.infinimesh.shadow.GetResponse.prototype.addShadows = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.infinimesh.shadow.Shadow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.infinimesh.shadow.GetResponse} returns this
 */
proto.infinimesh.shadow.GetResponse.prototype.clearShadowsList = function() {
  return this.setShadowsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.infinimesh.shadow.StreamShadowRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.infinimesh.shadow.StreamShadowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.infinimesh.shadow.StreamShadowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.infinimesh.shadow.StreamShadowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.infinimesh.shadow.StreamShadowRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    devicesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    onlyDelta: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.infinimesh.shadow.StreamShadowRequest}
 */
proto.infinimesh.shadow.StreamShadowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.infinimesh.shadow.StreamShadowRequest;
  return proto.infinimesh.shadow.StreamShadowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.infinimesh.shadow.StreamShadowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.infinimesh.shadow.StreamShadowRequest}
 */
proto.infinimesh.shadow.StreamShadowRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addDevices(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnlyDelta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.infinimesh.shadow.StreamShadowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.infinimesh.shadow.StreamShadowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.infinimesh.shadow.StreamShadowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.infinimesh.shadow.StreamShadowRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevicesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getOnlyDelta();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated string devices = 1;
 * @return {!Array<string>}
 */
proto.infinimesh.shadow.StreamShadowRequest.prototype.getDevicesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.infinimesh.shadow.StreamShadowRequest} returns this
 */
proto.infinimesh.shadow.StreamShadowRequest.prototype.setDevicesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.infinimesh.shadow.StreamShadowRequest} returns this
 */
proto.infinimesh.shadow.StreamShadowRequest.prototype.addDevices = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.infinimesh.shadow.StreamShadowRequest} returns this
 */
proto.infinimesh.shadow.StreamShadowRequest.prototype.clearDevicesList = function() {
  return this.setDevicesList([]);
};


/**
 * optional bool only_delta = 2;
 * @return {boolean}
 */
proto.infinimesh.shadow.StreamShadowRequest.prototype.getOnlyDelta = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.infinimesh.shadow.StreamShadowRequest} returns this
 */
proto.infinimesh.shadow.StreamShadowRequest.prototype.setOnlyDelta = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


goog.object.extend(exports, proto.infinimesh.shadow);
