import { Injectable } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { Professors } from './entities/professor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { BaseService } from 'src/common-service/common-service.service';

@Injectable()
export class ProfessorService extends BaseService<Professors> {
  constructor(
    @InjectRepository(Professors)
    private readonly professorRepository: Repository<Professors>,
  ) {
    super(professorRepository)
  }
}
