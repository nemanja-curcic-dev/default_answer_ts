// package: coozzy.message.message
// file: message/message/message.proto

import * as jspb from "google-protobuf";
import * as advert_advert_advert_pb from "../../advert/advert/advert_pb";

export class ChatRoom extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPubnubchannel(): string;
  setPubnubchannel(value: string): void;

  getAdvertid(): number;
  setAdvertid(value: number): void;

  getContext(): ContextMap[keyof ContextMap];
  setContext(value: ContextMap[keyof ContextMap]): void;

  getContextid(): string;
  setContextid(value: string): void;

  clearMembersList(): void;
  getMembersList(): Array<Member>;
  setMembersList(value: Array<Member>): void;
  addMembers(value?: Member, index?: number): Member;

  getLastmessage(): string;
  setLastmessage(value: string): void;

  getLastmessagetimestamp(): number;
  setLastmessagetimestamp(value: number): void;

  clearAppointmentidsList(): void;
  getAppointmentidsList(): Array<string>;
  setAppointmentidsList(value: Array<string>): void;
  addAppointmentids(value: string, index?: number): string;

  clearMediaidsList(): void;
  getMediaidsList(): Array<string>;
  setMediaidsList(value: Array<string>): void;
  addMediaids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatRoom.AsObject;
  static toObject(includeInstance: boolean, msg: ChatRoom): ChatRoom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatRoom;
  static deserializeBinaryFromReader(message: ChatRoom, reader: jspb.BinaryReader): ChatRoom;
}

export namespace ChatRoom {
  export type AsObject = {
    id: string,
    pubnubchannel: string,
    advertid: number,
    context: ContextMap[keyof ContextMap],
    contextid: string,
    membersList: Array<Member.AsObject>,
    lastmessage: string,
    lastmessagetimestamp: number,
    appointmentidsList: Array<string>,
    mediaidsList: Array<string>,
  }
}

export class ChatRooms extends jspb.Message {
  clearRoomsList(): void;
  getRoomsList(): Array<ChatRoom>;
  setRoomsList(value: Array<ChatRoom>): void;
  addRooms(value?: ChatRoom, index?: number): ChatRoom;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatRooms.AsObject;
  static toObject(includeInstance: boolean, msg: ChatRooms): ChatRooms.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatRooms, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatRooms;
  static deserializeBinaryFromReader(message: ChatRooms, reader: jspb.BinaryReader): ChatRooms;
}

export namespace ChatRooms {
  export type AsObject = {
    roomsList: Array<ChatRoom.AsObject>,
  }
}

export class Member extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserreference(): string;
  setUserreference(value: string): void;

  getAccountid(): number;
  setAccountid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getChanneltype(): ChannelTypeMap[keyof ChannelTypeMap];
  setChanneltype(value: ChannelTypeMap[keyof ChannelTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Member.AsObject;
  static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Member;
  static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
}

export namespace Member {
  export type AsObject = {
    id: string,
    userreference: string,
    accountid: number,
    name: string,
    channeltype: ChannelTypeMap[keyof ChannelTypeMap],
  }
}

export class Message extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAuthorid(): string;
  setAuthorid(value: string): void;

  getSent(): number;
  setSent(value: number): void;

  getText(): string;
  setText(value: string): void;

  clearMediaidsList(): void;
  getMediaidsList(): Array<string>;
  setMediaidsList(value: Array<string>): void;
  addMediaids(value: string, index?: number): string;

  getAppointmentid(): string;
  setAppointmentid(value: string): void;

  getType(): MessageTypeMap[keyof MessageTypeMap];
  setType(value: MessageTypeMap[keyof MessageTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    id: string,
    authorid: string,
    sent: number,
    text: string,
    mediaidsList: Array<string>,
    appointmentid: string,
    type: MessageTypeMap[keyof MessageTypeMap],
  }
}

export class ChatRoomCreated extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): ChatRoom | undefined;
  setRoom(value?: ChatRoom): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatRoomCreated.AsObject;
  static toObject(includeInstance: boolean, msg: ChatRoomCreated): ChatRoomCreated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatRoomCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatRoomCreated;
  static deserializeBinaryFromReader(message: ChatRoomCreated, reader: jspb.BinaryReader): ChatRoomCreated;
}

export namespace ChatRoomCreated {
  export type AsObject = {
    room?: ChatRoom.AsObject,
  }
}

export class MessageSent extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): ChatRoom | undefined;
  setRoom(value?: ChatRoom): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): Message | undefined;
  setMessage(value?: Message): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageSent.AsObject;
  static toObject(includeInstance: boolean, msg: MessageSent): MessageSent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageSent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageSent;
  static deserializeBinaryFromReader(message: MessageSent, reader: jspb.BinaryReader): MessageSent;
}

export namespace MessageSent {
  export type AsObject = {
    room?: ChatRoom.AsObject,
    message?: Message.AsObject,
  }
}

export class CreateRoomRequest extends jspb.Message {
  getContext(): ContextMap[keyof ContextMap];
  setContext(value: ContextMap[keyof ContextMap]): void;

  getContextid(): string;
  setContextid(value: string): void;

  clearMembersList(): void;
  getMembersList(): Array<Member>;
  setMembersList(value: Array<Member>): void;
  addMembers(value?: Member, index?: number): Member;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomRequest): CreateRoomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomRequest;
  static deserializeBinaryFromReader(message: CreateRoomRequest, reader: jspb.BinaryReader): CreateRoomRequest;
}

export namespace CreateRoomRequest {
  export type AsObject = {
    context: ContextMap[keyof ContextMap],
    contextid: string,
    membersList: Array<Member.AsObject>,
  }
}

export class GetRoomRequest extends jspb.Message {
  getContext(): ContextMap[keyof ContextMap];
  setContext(value: ContextMap[keyof ContextMap]): void;

  getContextid(): string;
  setContextid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomRequest): GetRoomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomRequest;
  static deserializeBinaryFromReader(message: GetRoomRequest, reader: jspb.BinaryReader): GetRoomRequest;
}

export namespace GetRoomRequest {
  export type AsObject = {
    context: ContextMap[keyof ContextMap],
    contextid: string,
  }
}

export class GetUnansweredRoomsRequest extends jspb.Message {
  getContext(): ContextMap[keyof ContextMap];
  setContext(value: ContextMap[keyof ContextMap]): void;

  getAccountid(): number;
  setAccountid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnansweredRoomsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnansweredRoomsRequest): GetUnansweredRoomsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUnansweredRoomsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnansweredRoomsRequest;
  static deserializeBinaryFromReader(message: GetUnansweredRoomsRequest, reader: jspb.BinaryReader): GetUnansweredRoomsRequest;
}

export namespace GetUnansweredRoomsRequest {
  export type AsObject = {
    context: ContextMap[keyof ContextMap],
    accountid: number,
  }
}

export class SendMessageRequest extends jspb.Message {
  getRoomid(): string;
  setRoomid(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getAccountid(): number;
  setAccountid(value: number): void;

  getText(): string;
  setText(value: string): void;

  clearMediaidsList(): void;
  getMediaidsList(): Array<string>;
  setMediaidsList(value: Array<string>): void;
  addMediaids(value: string, index?: number): string;

  getAppointmentid(): string;
  setAppointmentid(value: string): void;

  getType(): MessageTypeMap[keyof MessageTypeMap];
  setType(value: MessageTypeMap[keyof MessageTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
  static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
  export type AsObject = {
    roomid: string,
    userid: string,
    accountid: number,
    text: string,
    mediaidsList: Array<string>,
    appointmentid: string,
    type: MessageTypeMap[keyof MessageTypeMap],
  }
}

export class GetDashboardStatisticsRequest extends jspb.Message {
  getAccountid(): number;
  setAccountid(value: number): void;

  getUserreference(): string;
  setUserreference(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardStatisticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardStatisticsRequest): GetDashboardStatisticsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDashboardStatisticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardStatisticsRequest;
  static deserializeBinaryFromReader(message: GetDashboardStatisticsRequest, reader: jspb.BinaryReader): GetDashboardStatisticsRequest;
}

export namespace GetDashboardStatisticsRequest {
  export type AsObject = {
    accountid: number,
    userreference: string,
  }
}

export class GetDashboardStatisticsResponse extends jspb.Message {
  getOverall(): number;
  setOverall(value: number): void;

  getUnanswered(): number;
  setUnanswered(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardStatisticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardStatisticsResponse): GetDashboardStatisticsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDashboardStatisticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardStatisticsResponse;
  static deserializeBinaryFromReader(message: GetDashboardStatisticsResponse, reader: jspb.BinaryReader): GetDashboardStatisticsResponse;
}

export namespace GetDashboardStatisticsResponse {
  export type AsObject = {
    overall: number,
    unanswered: number,
  }
}

export interface ContextMap {
  WITHOUT: 0;
  REQUEST: 1;
  TICKET: 2;
}

export const Context: ContextMap;

export interface ChannelTypeMap {
  COOZZY: 0;
  MAIL: 1;
}

export const ChannelType: ChannelTypeMap;

export interface MessageTypeMap {
  NORMAL: 0;
  SEND_APPLICATION_FORM: 1;
  REQUEST_APPLICATION_FORM: 2;
  DEFAULT_ANSWER: 3;
}

export const MessageType: MessageTypeMap;
