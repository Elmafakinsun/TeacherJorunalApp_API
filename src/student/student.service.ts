import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { students } from './entities/student.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'src/common-service/common-service.service';

@Injectable()
export class StudentService extends BaseService<students> {
  constructor(
    @InjectRepository(students)
    private readonly studentRepository: Repository<students>,
  ) {
    super(studentRepository)
  }
}
