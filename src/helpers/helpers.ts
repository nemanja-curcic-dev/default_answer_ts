import {DefaultAnswer as DefaultAnswerModel} from '../db/model/default_answer';
import {SetRequest, DefaultAnswer} from '../proto/generated/message/default_answer/default_answer_pb';

export function toDefaultAnswer(request: SetRequest): DefaultAnswerModel {
    const defaultAnswer = new DefaultAnswerModel();

    defaultAnswer.advertId = request.getAdvertid();
    defaultAnswer.message = request.getMessage();
    defaultAnswer.type = request.getType();

    return defaultAnswer;
}

export function fromDefaultAnswer(answer: DefaultAnswerModel): DefaultAnswer {
    const defaultAnswer = new DefaultAnswer();

    defaultAnswer.setAdvertid(answer.advertId);
    defaultAnswer.setId(answer.id);
    defaultAnswer.setMessage(answer.message);
    defaultAnswer.setType(answer.type);

    return defaultAnswer;
}