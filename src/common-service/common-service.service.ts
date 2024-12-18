import { promises } from 'dns';
import { FindOneOptions, Repository } from 'typeorm';
import { EntityTarget } from 'typeorm/common/EntityTarget';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseService<T> {
    protected constructor(protected readonly repository: Repository<T>) {}

    async create(entity: T): Promise<T>{
        const data = await this.repository.create(entity)
        return await this.repository.save(data);
    }

    // async findById(id: number): Promise<T> {
    //     return await this.repository.findOneById(id);
    //   }

    async findOne(options: FindOneOptions<T>): Promise<T> {
        return this.repository.findOne(options);
      }

    async findAll(): Promise<T[]>{
        return this.repository.find();
    }

    async update(id: any,options: FindOneOptions<T>, entity: T): Promise<T> {
        console.log(JSON.stringify(this.repository.update(id, entity as QueryDeepPartialEntity<T>)))
        await this.repository.update(id, entity as QueryDeepPartialEntity<T>)
        return this.repository.findOne(options)
    }
}



