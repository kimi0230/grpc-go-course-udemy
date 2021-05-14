/**
 * @fileoverview gRPC-Web generated client stub for blog
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.blog = require('./blog_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.blog.BlogServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.blog.BlogServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.blog.CreateBlogRequest,
 *   !proto.blog.CreateBlogResponse>}
 */
const methodDescriptor_BlogService_CreateBlog = new grpc.web.MethodDescriptor(
  '/blog.BlogService/CreateBlog',
  grpc.web.MethodType.UNARY,
  proto.blog.CreateBlogRequest,
  proto.blog.CreateBlogResponse,
  /**
   * @param {!proto.blog.CreateBlogRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.CreateBlogResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.blog.CreateBlogRequest,
 *   !proto.blog.CreateBlogResponse>}
 */
const methodInfo_BlogService_CreateBlog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.blog.CreateBlogResponse,
  /**
   * @param {!proto.blog.CreateBlogRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.CreateBlogResponse.deserializeBinary
);


/**
 * @param {!proto.blog.CreateBlogRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.blog.CreateBlogResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.CreateBlogResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServiceClient.prototype.createBlog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.BlogService/CreateBlog',
      request,
      metadata || {},
      methodDescriptor_BlogService_CreateBlog,
      callback);
};


/**
 * @param {!proto.blog.CreateBlogRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.CreateBlogResponse>}
 *     Promise that resolves to the response
 */
proto.blog.BlogServicePromiseClient.prototype.createBlog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/blog.BlogService/CreateBlog',
      request,
      metadata || {},
      methodDescriptor_BlogService_CreateBlog);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.blog.ReadBlogRequest,
 *   !proto.blog.ReadBlogResponse>}
 */
const methodDescriptor_BlogService_ReadBlog = new grpc.web.MethodDescriptor(
  '/blog.BlogService/ReadBlog',
  grpc.web.MethodType.UNARY,
  proto.blog.ReadBlogRequest,
  proto.blog.ReadBlogResponse,
  /**
   * @param {!proto.blog.ReadBlogRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.ReadBlogResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.blog.ReadBlogRequest,
 *   !proto.blog.ReadBlogResponse>}
 */
const methodInfo_BlogService_ReadBlog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.blog.ReadBlogResponse,
  /**
   * @param {!proto.blog.ReadBlogRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.ReadBlogResponse.deserializeBinary
);


/**
 * @param {!proto.blog.ReadBlogRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.blog.ReadBlogResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.ReadBlogResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServiceClient.prototype.readBlog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.BlogService/ReadBlog',
      request,
      metadata || {},
      methodDescriptor_BlogService_ReadBlog,
      callback);
};


/**
 * @param {!proto.blog.ReadBlogRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.ReadBlogResponse>}
 *     Promise that resolves to the response
 */
proto.blog.BlogServicePromiseClient.prototype.readBlog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/blog.BlogService/ReadBlog',
      request,
      metadata || {},
      methodDescriptor_BlogService_ReadBlog);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.blog.UpdateBlogRequest,
 *   !proto.blog.UpdateBlogResponse>}
 */
const methodDescriptor_BlogService_UpdateBlog = new grpc.web.MethodDescriptor(
  '/blog.BlogService/UpdateBlog',
  grpc.web.MethodType.UNARY,
  proto.blog.UpdateBlogRequest,
  proto.blog.UpdateBlogResponse,
  /**
   * @param {!proto.blog.UpdateBlogRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.UpdateBlogResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.blog.UpdateBlogRequest,
 *   !proto.blog.UpdateBlogResponse>}
 */
const methodInfo_BlogService_UpdateBlog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.blog.UpdateBlogResponse,
  /**
   * @param {!proto.blog.UpdateBlogRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.UpdateBlogResponse.deserializeBinary
);


/**
 * @param {!proto.blog.UpdateBlogRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.blog.UpdateBlogResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.UpdateBlogResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServiceClient.prototype.updateBlog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.BlogService/UpdateBlog',
      request,
      metadata || {},
      methodDescriptor_BlogService_UpdateBlog,
      callback);
};


/**
 * @param {!proto.blog.UpdateBlogRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.UpdateBlogResponse>}
 *     Promise that resolves to the response
 */
proto.blog.BlogServicePromiseClient.prototype.updateBlog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/blog.BlogService/UpdateBlog',
      request,
      metadata || {},
      methodDescriptor_BlogService_UpdateBlog);
};


module.exports = proto.blog;

