import logger from '@coozzy/logger';
import {GrpcServer} from '@coozzy/grpc';
import {ErrorCode, grpcErrorHandler, AppError} from '@coozzy/error';
import {ServerUnaryCall} from 'grpc';
import {DefaultAnswerRepository} from './db/repository/default_answer';
import {GetRequest,
    SetRequest,
    GetResponse,
    SetResponse} from './proto/generated/message/default_answer/default_answer_pb';

import {DefaultAnswerServiceService} from './proto/generated/message/default_answer/default_answer_grpc_pb';
import {toDefaultAnswer, fromDefaultAnswer} from './helpers/helpers';


export class GrpcApp extends GrpcServer {

    repo: DefaultAnswerRepository

    constructor(port: number, repo?: DefaultAnswerRepository | null) {
        super(port);

        this.repo = repo || new DefaultAnswerRepository();

        // Add gRPC service
        this.server.addService(DefaultAnswerServiceService, {
            get: this.get,
            set: this.set
        });

        this.start();
    }

    get = async(call: ServerUnaryCall<GetRequest>,
        callback: (error: {code: number; message: string} | null, response: GetResponse) => void): Promise<void> => {
        logger.debug(`Received Get RPC call: ${JSON.stringify(call.request.toObject())}`);
        call.metadata.add('method', 'Get');

        try{
            const answer = await this.repo.get(call.request.getAdvertid());

            if(!answer){
                throw new AppError(ErrorCode.NOT_FOUND, 'Default answer does not exist.');
            }

            const response = new GetResponse();
            response.setAnswer(fromDefaultAnswer(answer));

            return callback(null, response);
        } catch (e) {
            return grpcErrorHandler(callback, 'Could not get default answer.')(e);
        }
    }

    set = async(call: ServerUnaryCall<SetRequest>,
        callback: (error: {code: number; message: string} | null, response: SetResponse) => void): Promise<void> => {
        logger.debug(`Received Set RPC call: ${JSON.stringify(call.request.toObject())}`);
        call.metadata.add('method', 'Set');

        try{
            if(call.request.getAdvertid() === ''){
                throw new AppError(ErrorCode.INVALID_ARGUMENT, 'You must provide advertId.');
            }
                
            const answer = await this.repo.set(toDefaultAnswer(call.request));

            const response = new SetResponse();
            response.setAnswer(fromDefaultAnswer(answer));

            return callback(null, response);
        } catch (e) {
            return grpcErrorHandler(callback, 'Could not create default answer.')(e);
        }
    }

}
