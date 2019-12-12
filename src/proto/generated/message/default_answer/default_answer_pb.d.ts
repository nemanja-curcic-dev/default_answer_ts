// package: coozzy.message.default_answer
// file: message/default-answer/default-answer.proto

import * as jspb from "google-protobuf";

export class DefaultAnswer extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAdvertid(): string;
  setAdvertid(value: string): void;

  getType(): TypeMap[keyof TypeMap];
  setType(value: TypeMap[keyof TypeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefaultAnswer.AsObject;
  static toObject(includeInstance: boolean, msg: DefaultAnswer): DefaultAnswer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefaultAnswer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefaultAnswer;
  static deserializeBinaryFromReader(message: DefaultAnswer, reader: jspb.BinaryReader): DefaultAnswer;
}

export namespace DefaultAnswer {
  export type AsObject = {
    id: string,
    advertid: string,
    type: TypeMap[keyof TypeMap],
    message: string,
  }
}

export class GetRequest extends jspb.Message {
  getAdvertid(): string;
  setAdvertid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    advertid: string,
  }
}

export class GetResponse extends jspb.Message {
  hasAnswer(): boolean;
  clearAnswer(): void;
  getAnswer(): DefaultAnswer | undefined;
  setAnswer(value?: DefaultAnswer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    answer?: DefaultAnswer.AsObject,
  }
}

export class SetRequest extends jspb.Message {
  getAdvertid(): string;
  setAdvertid(value: string): void;

  getType(): TypeMap[keyof TypeMap];
  setType(value: TypeMap[keyof TypeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetRequest): SetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetRequest;
  static deserializeBinaryFromReader(message: SetRequest, reader: jspb.BinaryReader): SetRequest;
}

export namespace SetRequest {
  export type AsObject = {
    advertid: string,
    type: TypeMap[keyof TypeMap],
    message: string,
  }
}

export class SetResponse extends jspb.Message {
  hasAnswer(): boolean;
  clearAnswer(): void;
  getAnswer(): DefaultAnswer | undefined;
  setAnswer(value?: DefaultAnswer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetResponse): SetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetResponse;
  static deserializeBinaryFromReader(message: SetResponse, reader: jspb.BinaryReader): SetResponse;
}

export namespace SetResponse {
  export type AsObject = {
    answer?: DefaultAnswer.AsObject,
  }
}

export interface TypeMap {
  NO_ANSWER: 0;
  DEFAULT: 1;
  VIEWING_FIX: 2;
  VIEWING_CONTACT: 3;
}

export const Type: TypeMap;
