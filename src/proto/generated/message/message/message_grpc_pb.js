// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var message_message_message_pb = require('../../message/message/message_pb.js');
var advert_advert_advert_pb = require('../../advert/advert/advert_pb.js');

function serialize_coozzy_message_message_ChatRoom(arg) {
  if (!(arg instanceof message_message_message_pb.ChatRoom)) {
    throw new Error('Expected argument of type coozzy.message.message.ChatRoom');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coozzy_message_message_ChatRoom(buffer_arg) {
  return message_message_message_pb.ChatRoom.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coozzy_message_message_ChatRooms(arg) {
  if (!(arg instanceof message_message_message_pb.ChatRooms)) {
    throw new Error('Expected argument of type coozzy.message.message.ChatRooms');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coozzy_message_message_ChatRooms(buffer_arg) {
  return message_message_message_pb.ChatRooms.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coozzy_message_message_CreateRoomRequest(arg) {
  if (!(arg instanceof message_message_message_pb.CreateRoomRequest)) {
    throw new Error('Expected argument of type coozzy.message.message.CreateRoomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coozzy_message_message_CreateRoomRequest(buffer_arg) {
  return message_message_message_pb.CreateRoomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coozzy_message_message_GetDashboardStatisticsRequest(arg) {
  if (!(arg instanceof message_message_message_pb.GetDashboardStatisticsRequest)) {
    throw new Error('Expected argument of type coozzy.message.message.GetDashboardStatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coozzy_message_message_GetDashboardStatisticsRequest(buffer_arg) {
  return message_message_message_pb.GetDashboardStatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coozzy_message_message_GetDashboardStatisticsResponse(arg) {
  if (!(arg instanceof message_message_message_pb.GetDashboardStatisticsResponse)) {
    throw new Error('Expected argument of type coozzy.message.message.GetDashboardStatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coozzy_message_message_GetDashboardStatisticsResponse(buffer_arg) {
  return message_message_message_pb.GetDashboardStatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coozzy_message_message_GetRoomRequest(arg) {
  if (!(arg instanceof message_message_message_pb.GetRoomRequest)) {
    throw new Error('Expected argument of type coozzy.message.message.GetRoomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coozzy_message_message_GetRoomRequest(buffer_arg) {
  return message_message_message_pb.GetRoomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coozzy_message_message_GetUnansweredRoomsRequest(arg) {
  if (!(arg instanceof message_message_message_pb.GetUnansweredRoomsRequest)) {
    throw new Error('Expected argument of type coozzy.message.message.GetUnansweredRoomsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coozzy_message_message_GetUnansweredRoomsRequest(buffer_arg) {
  return message_message_message_pb.GetUnansweredRoomsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coozzy_message_message_Message(arg) {
  if (!(arg instanceof message_message_message_pb.Message)) {
    throw new Error('Expected argument of type coozzy.message.message.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coozzy_message_message_Message(buffer_arg) {
  return message_message_message_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coozzy_message_message_SendMessageRequest(arg) {
  if (!(arg instanceof message_message_message_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type coozzy.message.message.SendMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coozzy_message_message_SendMessageRequest(buffer_arg) {
  return message_message_message_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// ------------------------------------
//  SERVICES
// ------------------------------------ 
//
var MessageServiceService = exports.MessageServiceService = {
  createRoom: {
    path: '/coozzy.message.message.MessageService/CreateRoom',
    requestStream: false,
    responseStream: false,
    requestType: message_message_message_pb.CreateRoomRequest,
    responseType: message_message_message_pb.ChatRoom,
    requestSerialize: serialize_coozzy_message_message_CreateRoomRequest,
    requestDeserialize: deserialize_coozzy_message_message_CreateRoomRequest,
    responseSerialize: serialize_coozzy_message_message_ChatRoom,
    responseDeserialize: deserialize_coozzy_message_message_ChatRoom,
  },
  getRoom: {
    path: '/coozzy.message.message.MessageService/GetRoom',
    requestStream: false,
    responseStream: false,
    requestType: message_message_message_pb.GetRoomRequest,
    responseType: message_message_message_pb.ChatRoom,
    requestSerialize: serialize_coozzy_message_message_GetRoomRequest,
    requestDeserialize: deserialize_coozzy_message_message_GetRoomRequest,
    responseSerialize: serialize_coozzy_message_message_ChatRoom,
    responseDeserialize: deserialize_coozzy_message_message_ChatRoom,
  },
  getUnansweredRooms: {
    path: '/coozzy.message.message.MessageService/GetUnansweredRooms',
    requestStream: false,
    responseStream: false,
    requestType: message_message_message_pb.GetUnansweredRoomsRequest,
    responseType: message_message_message_pb.ChatRooms,
    requestSerialize: serialize_coozzy_message_message_GetUnansweredRoomsRequest,
    requestDeserialize: deserialize_coozzy_message_message_GetUnansweredRoomsRequest,
    responseSerialize: serialize_coozzy_message_message_ChatRooms,
    responseDeserialize: deserialize_coozzy_message_message_ChatRooms,
  },
  sendMessage: {
    path: '/coozzy.message.message.MessageService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: message_message_message_pb.SendMessageRequest,
    responseType: message_message_message_pb.Message,
    requestSerialize: serialize_coozzy_message_message_SendMessageRequest,
    requestDeserialize: deserialize_coozzy_message_message_SendMessageRequest,
    responseSerialize: serialize_coozzy_message_message_Message,
    responseDeserialize: deserialize_coozzy_message_message_Message,
  },
  getDashboardStatistics: {
    path: '/coozzy.message.message.MessageService/GetDashboardStatistics',
    requestStream: false,
    responseStream: false,
    requestType: message_message_message_pb.GetDashboardStatisticsRequest,
    responseType: message_message_message_pb.GetDashboardStatisticsResponse,
    requestSerialize: serialize_coozzy_message_message_GetDashboardStatisticsRequest,
    requestDeserialize: deserialize_coozzy_message_message_GetDashboardStatisticsRequest,
    responseSerialize: serialize_coozzy_message_message_GetDashboardStatisticsResponse,
    responseDeserialize: deserialize_coozzy_message_message_GetDashboardStatisticsResponse,
  },
};

exports.MessageServiceClient = grpc.makeGenericClientConstructor(MessageServiceService);
