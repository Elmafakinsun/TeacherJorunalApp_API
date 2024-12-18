import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { students } from './entities/student.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Students')
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('/createStudent')
  create(@Body() createClassEvidenceDto: CreateStudentDto): Promise<students>{
    return this.studentService.create(createClassEvidenceDto);
  }

  @Get('/getAllStudent')
  findAll() {
    return this.studentService.findAll();
  }

  @Get('/getOneStudent')
  getOneById(@Param('studentId') id: string){
    return this.studentService.findOne({where: {studentId: id}});
  }
  
  @Patch('/updateStudent/:id')
  update(@Param('id') id: string, @Body() updateProfessorDto: UpdateStudentDto) {
    return this.studentService.update(id,{where: {studentId: id}}, updateProfessorDto);
  }
}
