import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { ApiTags } from '@nestjs/swagger';
import { classes } from './entities/class.entity';

@ApiTags('Classes')
@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post('/createClass')
  create(@Body() createClassDto: CreateClassDto): Promise<classes>{
    return this.classesService.create(createClassDto);
  }

  @Get('/getAllClasses')
  findAll() {
    return this.classesService.findAll();
  }

  @Get('/getOneClass')
  getOneById(@Param('classId') id: number){
    return this.classesService.findOne({where: {classId: id}});
  }
  
  @Patch('/updateClass/:id')
  update(@Param('id') id: number, @Body() updateClassDto: UpdateClassDto) {
    return this.classesService.update(id,{where: {classId: id}}, updateClassDto);
  }
}
