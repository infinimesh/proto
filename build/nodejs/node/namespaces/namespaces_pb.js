// source: node/namespaces/namespaces.proto
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

var node_access_access_pb = require('../../node/access/access_pb.js');
goog.object.extend(proto, node_access_access_pb);
goog.exportSymbol('proto.infinimesh.node.namespaces.Namespace', null, global);
goog.exportSymbol('proto.infinimesh.node.namespaces.Namespaces', null, global);
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
proto.infinimesh.node.namespaces.Namespace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.infinimesh.node.namespaces.Namespace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.infinimesh.node.namespaces.Namespace.displayName = 'proto.infinimesh.node.namespaces.Namespace';
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
proto.infinimesh.node.namespaces.Namespaces = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.infinimesh.node.namespaces.Namespaces.repeatedFields_, null);
};
goog.inherits(proto.infinimesh.node.namespaces.Namespaces, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.infinimesh.node.namespaces.Namespaces.displayName = 'proto.infinimesh.node.namespaces.Namespaces';
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
proto.infinimesh.node.namespaces.Namespace.prototype.toObject = function(opt_includeInstance) {
  return proto.infinimesh.node.namespaces.Namespace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.infinimesh.node.namespaces.Namespace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.infinimesh.node.namespaces.Namespace.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    access: (f = msg.getAccess()) && node_access_access_pb.Access.toObject(includeInstance, f)
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
 * @return {!proto.infinimesh.node.namespaces.Namespace}
 */
proto.infinimesh.node.namespaces.Namespace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.infinimesh.node.namespaces.Namespace;
  return proto.infinimesh.node.namespaces.Namespace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.infinimesh.node.namespaces.Namespace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.infinimesh.node.namespaces.Namespace}
 */
proto.infinimesh.node.namespaces.Namespace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = new node_access_access_pb.Access;
      reader.readMessage(value,node_access_access_pb.Access.deserializeBinaryFromReader);
      msg.setAccess(value);
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
proto.infinimesh.node.namespaces.Namespace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.infinimesh.node.namespaces.Namespace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.infinimesh.node.namespaces.Namespace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.infinimesh.node.namespaces.Namespace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccess();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      node_access_access_pb.Access.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.infinimesh.node.namespaces.Namespace.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.infinimesh.node.namespaces.Namespace} returns this
 */
proto.infinimesh.node.namespaces.Namespace.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.infinimesh.node.namespaces.Namespace.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.infinimesh.node.namespaces.Namespace} returns this
 */
proto.infinimesh.node.namespaces.Namespace.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional infinimesh.node.access.Access access = 3;
 * @return {?proto.infinimesh.node.access.Access}
 */
proto.infinimesh.node.namespaces.Namespace.prototype.getAccess = function() {
  return /** @type{?proto.infinimesh.node.access.Access} */ (
    jspb.Message.getWrapperField(this, node_access_access_pb.Access, 3));
};


/**
 * @param {?proto.infinimesh.node.access.Access|undefined} value
 * @return {!proto.infinimesh.node.namespaces.Namespace} returns this
*/
proto.infinimesh.node.namespaces.Namespace.prototype.setAccess = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.infinimesh.node.namespaces.Namespace} returns this
 */
proto.infinimesh.node.namespaces.Namespace.prototype.clearAccess = function() {
  return this.setAccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.infinimesh.node.namespaces.Namespace.prototype.hasAccess = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.infinimesh.node.namespaces.Namespaces.repeatedFields_ = [1];



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
proto.infinimesh.node.namespaces.Namespaces.prototype.toObject = function(opt_includeInstance) {
  return proto.infinimesh.node.namespaces.Namespaces.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.infinimesh.node.namespaces.Namespaces} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.infinimesh.node.namespaces.Namespaces.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespacesList: jspb.Message.toObjectList(msg.getNamespacesList(),
    proto.infinimesh.node.namespaces.Namespace.toObject, includeInstance)
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
 * @return {!proto.infinimesh.node.namespaces.Namespaces}
 */
proto.infinimesh.node.namespaces.Namespaces.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.infinimesh.node.namespaces.Namespaces;
  return proto.infinimesh.node.namespaces.Namespaces.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.infinimesh.node.namespaces.Namespaces} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.infinimesh.node.namespaces.Namespaces}
 */
proto.infinimesh.node.namespaces.Namespaces.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.infinimesh.node.namespaces.Namespace;
      reader.readMessage(value,proto.infinimesh.node.namespaces.Namespace.deserializeBinaryFromReader);
      msg.addNamespaces(value);
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
proto.infinimesh.node.namespaces.Namespaces.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.infinimesh.node.namespaces.Namespaces.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.infinimesh.node.namespaces.Namespaces} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.infinimesh.node.namespaces.Namespaces.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespacesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.infinimesh.node.namespaces.Namespace.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Namespace namespaces = 1;
 * @return {!Array<!proto.infinimesh.node.namespaces.Namespace>}
 */
proto.infinimesh.node.namespaces.Namespaces.prototype.getNamespacesList = function() {
  return /** @type{!Array<!proto.infinimesh.node.namespaces.Namespace>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.infinimesh.node.namespaces.Namespace, 1));
};


/**
 * @param {!Array<!proto.infinimesh.node.namespaces.Namespace>} value
 * @return {!proto.infinimesh.node.namespaces.Namespaces} returns this
*/
proto.infinimesh.node.namespaces.Namespaces.prototype.setNamespacesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.infinimesh.node.namespaces.Namespace=} opt_value
 * @param {number=} opt_index
 * @return {!proto.infinimesh.node.namespaces.Namespace}
 */
proto.infinimesh.node.namespaces.Namespaces.prototype.addNamespaces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.infinimesh.node.namespaces.Namespace, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.infinimesh.node.namespaces.Namespaces} returns this
 */
proto.infinimesh.node.namespaces.Namespaces.prototype.clearNamespacesList = function() {
  return this.setNamespacesList([]);
};


goog.object.extend(exports, proto.infinimesh.node.namespaces);
