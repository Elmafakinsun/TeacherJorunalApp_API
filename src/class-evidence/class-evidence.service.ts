import { Injectable } from '@nestjs/common';
import { CreateClassEvidenceDto } from './dto/create-class-evidence.dto';
import { UpdateClassEvidenceDto } from './dto/update-class-evidence.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { evidences } from './entities/class-evidence.entity';
import { And, DataSource, Repository } from 'typeorm';
import { BaseService } from 'src/common-service/common-service.service';
import { Activity } from 'src/activities/entities/activity.entity';

@Injectable()
export class ClassEvidenceService extends BaseService<evidences>{
  
  constructor(
    @InjectRepository(evidences)
    private readonly evidenceRepository: Repository<evidences>,
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {
    super(evidenceRepository)
  }


}

