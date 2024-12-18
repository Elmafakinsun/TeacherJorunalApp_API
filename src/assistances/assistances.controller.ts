import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssistancesService } from './assistances.service';
import { CreateAssistanceDto } from './dto/create-assistance.dto';
import { UpdateAssistanceDto } from './dto/update-assistance.dto';
import { assistances } from './entities/assistance.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Assistances')
@Controller('assistances')
export class AssistancesController {
  constructor(private readonly assistancesService: AssistancesService) {}

  @Post('/createAssistance')
  create(@Body() createAssistanceeDto: CreateAssistanceDto): Promise<assistances>{
    return this.assistancesService.create(createAssistanceeDto);
  }

  @Get('/getAllAssistances')
  findAll() {
    return this.assistancesService.findAll();
  }

  @Get('/getOneAssistance')
  getOneById(@Param('assistanceId') id: number){
    return this.assistancesService.findOne({where: {assitanceId: id}});
  }
  
  @Patch('/updateAssistance/:id')
  update(@Param('id') id: number, @Body() updateAssistanceDto: UpdateAssistanceDto) {
    return this.assistancesService.update(id,{where: {assitanceId: id}}, updateAssistanceDto);
  }
}
