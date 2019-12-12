import {getManager, Repository} from 'typeorm';
import {DefaultAnswer} from '../model/default_answer';
import uniqd from 'uniqid';

interface IDefaultAnswerRepository {
    get(advertId: string): Promise<DefaultAnswer | undefined>;
    set(obj: DefaultAnswer): Promise<DefaultAnswer>;
}

export class DefaultAnswerRepository implements IDefaultAnswerRepository  {
    repo: Repository<DefaultAnswer>;

    constructor(repo?: Repository<DefaultAnswer> | null) {
        this.repo = repo || getManager().getRepository(DefaultAnswer);
    }

    get = async (advertId: string): Promise<DefaultAnswer | undefined> => {
        return await this.repo.findOne({advertId: advertId});
    }

    set = async (obj: DefaultAnswer): Promise<DefaultAnswer> => {
        const answer = await this.repo.findOne({advertId: obj.advertId});
        
        // create new object if doesn't exist
        if(!answer) {
            obj.id = uniqd();
            return await this.repo.save(obj);
        }

        // update existing object
        answer.message = obj.message;
        answer.type = obj.type;

        return await this.repo.save(answer);
    }
}