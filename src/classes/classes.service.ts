import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common-service/common-service.service';
import { classes } from './entities/class.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClassesService extends BaseService<classes>{
  constructor(
    @InjectRepository(classes)
    private readonly classRepository: Repository<classes>,
  ) {
    super(classRepository)
  }
}
