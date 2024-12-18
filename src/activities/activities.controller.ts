import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}


  @Post('/createActivity')
  create(@Body() createActivityeDto: CreateActivityDto): Promise<Activity>{
    return this.activitiesService.create(createActivityeDto);
  }

  @Get('/getAllActivities')
  findAll() {
    return this.activitiesService.findAll();
  }

  @Get('/getOneActivity')
  getOneById(@Param('activityId') id: number){
    return this.activitiesService.findOne({where: {activityId: id}});
  }

  @Get('/countActivities')
  countActivities(){
    return this.countActivities()
  }
  
  @Patch('/updateActivity/:activityId')
  update(@Param('activityId') id: number, @Body() updateActivityDto: UpdateActivityDto) {
    return this.activitiesService.update(id,{where: {activityId: id}}, updateActivityDto);
  }
}
