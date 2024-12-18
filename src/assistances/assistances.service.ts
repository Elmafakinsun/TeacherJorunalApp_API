import { Injectable } from '@nestjs/common';
import { CreateAssistanceDto } from './dto/create-assistance.dto';
import { UpdateAssistanceDto } from './dto/update-assistance.dto';
import { BaseService } from 'src/common-service/common-service.service';
import { assistances } from './entities/assistance.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AssistancesService extends BaseService<assistances>{
  constructor(
    @InjectRepository(assistances)
    private readonly assistanceRepository: Repository<assistances>,
  ) {
    super(assistanceRepository)
  }
}
