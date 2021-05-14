// source: blog.proto
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
var global = Function('return this')();

goog.exportSymbol('proto.blog.Blog', null, global);
goog.exportSymbol('proto.blog.CreateBlogRequest', null, global);
goog.exportSymbol('proto.blog.CreateBlogResponse', null, global);
goog.exportSymbol('proto.blog.ReadBlogRequest', null, global);
goog.exportSymbol('proto.blog.ReadBlogResponse', null, global);
goog.exportSymbol('proto.blog.UpdateBlogRequest', null, global);
goog.exportSymbol('proto.blog.UpdateBlogResponse', null, global);
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
proto.blog.Blog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blog.Blog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blog.Blog.displayName = 'proto.blog.Blog';
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
proto.blog.CreateBlogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blog.CreateBlogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blog.CreateBlogRequest.displayName = 'proto.blog.CreateBlogRequest';
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
proto.blog.CreateBlogResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blog.CreateBlogResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blog.CreateBlogResponse.displayName = 'proto.blog.CreateBlogResponse';
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
proto.blog.ReadBlogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blog.ReadBlogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blog.ReadBlogRequest.displayName = 'proto.blog.ReadBlogRequest';
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
proto.blog.ReadBlogResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blog.ReadBlogResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blog.ReadBlogResponse.displayName = 'proto.blog.ReadBlogResponse';
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
proto.blog.UpdateBlogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blog.UpdateBlogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blog.UpdateBlogRequest.displayName = 'proto.blog.UpdateBlogRequest';
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
proto.blog.UpdateBlogResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blog.UpdateBlogResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blog.UpdateBlogResponse.displayName = 'proto.blog.UpdateBlogResponse';
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
proto.blog.Blog.prototype.toObject = function(opt_includeInstance) {
  return proto.blog.Blog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blog.Blog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.Blog.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authorId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    content: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.blog.Blog}
 */
proto.blog.Blog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog.Blog;
  return proto.blog.Blog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog.Blog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog.Blog}
 */
proto.blog.Blog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
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
proto.blog.Blog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blog.Blog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog.Blog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.Blog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthorId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.blog.Blog.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.blog.Blog} returns this
 */
proto.blog.Blog.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string author_id = 2;
 * @return {string}
 */
proto.blog.Blog.prototype.getAuthorId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.blog.Blog} returns this
 */
proto.blog.Blog.prototype.setAuthorId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.blog.Blog.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.blog.Blog} returns this
 */
proto.blog.Blog.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.blog.Blog.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.blog.Blog} returns this
 */
proto.blog.Blog.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.blog.CreateBlogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.blog.CreateBlogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blog.CreateBlogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.CreateBlogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blog: (f = msg.getBlog()) && proto.blog.Blog.toObject(includeInstance, f)
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
 * @return {!proto.blog.CreateBlogRequest}
 */
proto.blog.CreateBlogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog.CreateBlogRequest;
  return proto.blog.CreateBlogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog.CreateBlogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog.CreateBlogRequest}
 */
proto.blog.CreateBlogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.blog.Blog;
      reader.readMessage(value,proto.blog.Blog.deserializeBinaryFromReader);
      msg.setBlog(value);
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
proto.blog.CreateBlogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blog.CreateBlogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog.CreateBlogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.CreateBlogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlog();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.blog.Blog.serializeBinaryToWriter
    );
  }
};


/**
 * optional Blog blog = 1;
 * @return {?proto.blog.Blog}
 */
proto.blog.CreateBlogRequest.prototype.getBlog = function() {
  return /** @type{?proto.blog.Blog} */ (
    jspb.Message.getWrapperField(this, proto.blog.Blog, 1));
};


/**
 * @param {?proto.blog.Blog|undefined} value
 * @return {!proto.blog.CreateBlogRequest} returns this
*/
proto.blog.CreateBlogRequest.prototype.setBlog = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.blog.CreateBlogRequest} returns this
 */
proto.blog.CreateBlogRequest.prototype.clearBlog = function() {
  return this.setBlog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.blog.CreateBlogRequest.prototype.hasBlog = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.blog.CreateBlogResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.blog.CreateBlogResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blog.CreateBlogResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.CreateBlogResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blog: (f = msg.getBlog()) && proto.blog.Blog.toObject(includeInstance, f)
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
 * @return {!proto.blog.CreateBlogResponse}
 */
proto.blog.CreateBlogResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog.CreateBlogResponse;
  return proto.blog.CreateBlogResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog.CreateBlogResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog.CreateBlogResponse}
 */
proto.blog.CreateBlogResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.blog.Blog;
      reader.readMessage(value,proto.blog.Blog.deserializeBinaryFromReader);
      msg.setBlog(value);
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
proto.blog.CreateBlogResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blog.CreateBlogResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog.CreateBlogResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.CreateBlogResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlog();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.blog.Blog.serializeBinaryToWriter
    );
  }
};


/**
 * optional Blog blog = 1;
 * @return {?proto.blog.Blog}
 */
proto.blog.CreateBlogResponse.prototype.getBlog = function() {
  return /** @type{?proto.blog.Blog} */ (
    jspb.Message.getWrapperField(this, proto.blog.Blog, 1));
};


/**
 * @param {?proto.blog.Blog|undefined} value
 * @return {!proto.blog.CreateBlogResponse} returns this
*/
proto.blog.CreateBlogResponse.prototype.setBlog = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.blog.CreateBlogResponse} returns this
 */
proto.blog.CreateBlogResponse.prototype.clearBlog = function() {
  return this.setBlog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.blog.CreateBlogResponse.prototype.hasBlog = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.blog.ReadBlogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.blog.ReadBlogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blog.ReadBlogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.ReadBlogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blogId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.blog.ReadBlogRequest}
 */
proto.blog.ReadBlogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog.ReadBlogRequest;
  return proto.blog.ReadBlogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog.ReadBlogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog.ReadBlogRequest}
 */
proto.blog.ReadBlogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlogId(value);
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
proto.blog.ReadBlogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blog.ReadBlogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog.ReadBlogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.ReadBlogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlogId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string blog_id = 1;
 * @return {string}
 */
proto.blog.ReadBlogRequest.prototype.getBlogId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.blog.ReadBlogRequest} returns this
 */
proto.blog.ReadBlogRequest.prototype.setBlogId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.blog.ReadBlogResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.blog.ReadBlogResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blog.ReadBlogResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.ReadBlogResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blog: (f = msg.getBlog()) && proto.blog.Blog.toObject(includeInstance, f)
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
 * @return {!proto.blog.ReadBlogResponse}
 */
proto.blog.ReadBlogResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog.ReadBlogResponse;
  return proto.blog.ReadBlogResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog.ReadBlogResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog.ReadBlogResponse}
 */
proto.blog.ReadBlogResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.blog.Blog;
      reader.readMessage(value,proto.blog.Blog.deserializeBinaryFromReader);
      msg.setBlog(value);
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
proto.blog.ReadBlogResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blog.ReadBlogResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog.ReadBlogResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.ReadBlogResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlog();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.blog.Blog.serializeBinaryToWriter
    );
  }
};


/**
 * optional Blog blog = 1;
 * @return {?proto.blog.Blog}
 */
proto.blog.ReadBlogResponse.prototype.getBlog = function() {
  return /** @type{?proto.blog.Blog} */ (
    jspb.Message.getWrapperField(this, proto.blog.Blog, 1));
};


/**
 * @param {?proto.blog.Blog|undefined} value
 * @return {!proto.blog.ReadBlogResponse} returns this
*/
proto.blog.ReadBlogResponse.prototype.setBlog = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.blog.ReadBlogResponse} returns this
 */
proto.blog.ReadBlogResponse.prototype.clearBlog = function() {
  return this.setBlog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.blog.ReadBlogResponse.prototype.hasBlog = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.blog.UpdateBlogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.blog.UpdateBlogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blog.UpdateBlogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.UpdateBlogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blog: (f = msg.getBlog()) && proto.blog.Blog.toObject(includeInstance, f)
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
 * @return {!proto.blog.UpdateBlogRequest}
 */
proto.blog.UpdateBlogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog.UpdateBlogRequest;
  return proto.blog.UpdateBlogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog.UpdateBlogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog.UpdateBlogRequest}
 */
proto.blog.UpdateBlogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.blog.Blog;
      reader.readMessage(value,proto.blog.Blog.deserializeBinaryFromReader);
      msg.setBlog(value);
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
proto.blog.UpdateBlogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blog.UpdateBlogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog.UpdateBlogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.UpdateBlogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlog();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.blog.Blog.serializeBinaryToWriter
    );
  }
};


/**
 * optional Blog blog = 1;
 * @return {?proto.blog.Blog}
 */
proto.blog.UpdateBlogRequest.prototype.getBlog = function() {
  return /** @type{?proto.blog.Blog} */ (
    jspb.Message.getWrapperField(this, proto.blog.Blog, 1));
};


/**
 * @param {?proto.blog.Blog|undefined} value
 * @return {!proto.blog.UpdateBlogRequest} returns this
*/
proto.blog.UpdateBlogRequest.prototype.setBlog = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.blog.UpdateBlogRequest} returns this
 */
proto.blog.UpdateBlogRequest.prototype.clearBlog = function() {
  return this.setBlog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.blog.UpdateBlogRequest.prototype.hasBlog = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.blog.UpdateBlogResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.blog.UpdateBlogResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blog.UpdateBlogResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.UpdateBlogResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blog: (f = msg.getBlog()) && proto.blog.Blog.toObject(includeInstance, f)
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
 * @return {!proto.blog.UpdateBlogResponse}
 */
proto.blog.UpdateBlogResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog.UpdateBlogResponse;
  return proto.blog.UpdateBlogResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog.UpdateBlogResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog.UpdateBlogResponse}
 */
proto.blog.UpdateBlogResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.blog.Blog;
      reader.readMessage(value,proto.blog.Blog.deserializeBinaryFromReader);
      msg.setBlog(value);
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
proto.blog.UpdateBlogResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blog.UpdateBlogResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog.UpdateBlogResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.UpdateBlogResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlog();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.blog.Blog.serializeBinaryToWriter
    );
  }
};


/**
 * optional Blog blog = 1;
 * @return {?proto.blog.Blog}
 */
proto.blog.UpdateBlogResponse.prototype.getBlog = function() {
  return /** @type{?proto.blog.Blog} */ (
    jspb.Message.getWrapperField(this, proto.blog.Blog, 1));
};


/**
 * @param {?proto.blog.Blog|undefined} value
 * @return {!proto.blog.UpdateBlogResponse} returns this
*/
proto.blog.UpdateBlogResponse.prototype.setBlog = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.blog.UpdateBlogResponse} returns this
 */
proto.blog.UpdateBlogResponse.prototype.clearBlog = function() {
  return this.setBlog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.blog.UpdateBlogResponse.prototype.hasBlog = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.blog);
