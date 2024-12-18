import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { ApiTags } from '@nestjs/swagger';
import { Professors } from './entities/professor.entity';

@ApiTags('Professor')
@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}


  @Post('/createProfessor')
  create(@Body() createClassEvidenceDto: CreateProfessorDto): Promise<Professors>{
    return this.professorService.create(createClassEvidenceDto);
  }

  @Get('/GetAllProfessors')
  findAll() {
    return this.professorService.findAll();
  }

  @Get('/GetOneProfessor')
  getOneById(@Param('professorId') id: string){
    return this.professorService.findOne({where: {professorId: id}});
  }
  
  @Patch('/UpdateProfessor/:id')
  update(@Param('id') id: string, @Body() updateProfessorDto: UpdateProfessorDto) {
    return this.professorService.update(id,{where: {professorId: id}}, updateProfessorDto);
  }
}
