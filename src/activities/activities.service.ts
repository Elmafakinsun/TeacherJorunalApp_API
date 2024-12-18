import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { BaseService } from 'src/common-service/common-service.service';
import { Activity } from './entities/activity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ActivitiesService  extends BaseService<Activity>{
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {
    super(activityRepository)
  }

  async countActivities(){
    const res = this.activityRepository.find()
    console.log(res) //!
  }

}
