import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassEvidenceService } from './class-evidence.service';
import { CreateClassEvidenceDto } from './dto/create-class-evidence.dto';
import { UpdateClassEvidenceDto } from './dto/update-class-evidence.dto';
import { ApiTags } from '@nestjs/swagger';
import { evidences } from './entities/class-evidence.entity';
import { promises } from 'dns';


@ApiTags('Evidence')
@Controller('class-evidence')
export class ClassEvidenceController {
  constructor(private readonly classEvidenceService: ClassEvidenceService) {}


  @Post('/createEvidence')
  create(@Body() createClassEvidenceDto: CreateClassEvidenceDto): Promise<evidences>{
    return this.classEvidenceService.create(createClassEvidenceDto);
  }

  @Get('/GetAllUsers')
  findAll() {
    return this.classEvidenceService.findAll();
  }

  @Get('/GetOneEvidence')
  getOneById(@Param('idEvidence') idEviddence: number){
    return this.classEvidenceService.findOne({where: {idEvidence: idEviddence}});
  }
  
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateClassEvidenceDto: UpdateClassEvidenceDto) {
    return this.classEvidenceService.update(id,{where: {idEvidence: id}}, updateClassEvidenceDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.classEvidenceService.remove(+id);
  // }
}
