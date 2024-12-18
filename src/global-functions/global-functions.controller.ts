import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GlobalFunctionsService } from './global-functions.service';

@Controller('global-functions')
export class GlobalFunctionsController {
  constructor(private readonly globalFunctionsService: GlobalFunctionsService) {}
  
  @Get('/ExemptedStudent/:studentId')
  exemptedStudent(@Param('studentId') studentId: string){
    const res =this.globalFunctionsService.ExemptedStudent(studentId)
    return res
  }
  @Get('/CountAssistances/:studentId')
  countAssitances(@Param('studentId') studentId: string){
    return this.globalFunctionsService.StudentAssistancesStatus(studentId)
  }

  @Get('/GetStudentStatus/:studentId')
  getStudentStatus(@Param('studentId') studentId: string){
    return this.globalFunctionsService.GetStudentStatus(studentId)
  }
}
