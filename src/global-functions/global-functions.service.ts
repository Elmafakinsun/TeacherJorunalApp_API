import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from 'src/activities/entities/activity.entity';
import { assistances } from 'src/assistances/entities/assistance.entity';
import { evidences } from 'src/class-evidence/entities/class-evidence.entity';
import { classes } from 'src/classes/entities/class.entity';
import { Repository } from 'typeorm';
@Injectable()
export class GlobalFunctionsService{
 constructor(
    @InjectRepository(evidences)
    private readonly evidenceRepository: Repository<evidences>,
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
    @InjectRepository(classes)
    private readonly classRepository: Repository<classes>,
    @InjectRepository(assistances)
    private readonly assistanceRepository: Repository<assistances>,
  ) {}

  async CountActivities(studentId: string){
    let count= 0
    let assert = 0

    const activities = await this.activityRepository.find();

    for (const activity of activities) {
      count++;
      const result = await this.evidenceRepository.find({
        where: { activityId: activity.activityId, studentId: studentId },
      });
  
      if (result.length !== 0) {
        assert++;
      }
    }
    if(count == assert){
      const obj = {
        'allactivites': true,
        'numberofActivites': count,
        'Actividades entregadas': assert,
        '% de actividades': (assert*100)/count
    }
      return obj
    }else{
      const obj = {
        'allactivites': false,
        'numberofActivites': count,
        'Actividades entregadas': assert,
        '% de actividades': Math.round((assert*100)/count)
    }
      return obj
    }
  
  }
  
   async ExemptedStudent(studentId: string){
    const allactivites = await this.CountActivities(studentId)
    const res = await this.evidenceRepository.find({where: {studentId: studentId}})
    const assitanceStatus = await this.StudentAssistancesStatus(studentId)
    var ac = 0

    res.forEach(element => {
      if(element.grade == 'A'){
        ac++;
      }
    });
    
    if(assitanceStatus['% de Asistencias '] <= 80 && allactivites['% de actividades'] <= 50){
      return  {message: 'El alumno este en riesgo de reprobacion'};
    }
    if(allactivites.allactivites === true){
      if(allactivites.numberofActivites === ac && assitanceStatus['% de Asistencias '] >= 95){
        return {message: 'El alumno esta extento'};
      }else{
        return  {message: 'El alumno no esta extento'};
      }
    }else{
      return  {message: 'El alumno no esta extento'};
    }
   }

   async CountClass(){
    const [classes, total] = await this.classRepository.findAndCount()
    return total
   }

   async countAssitances(studentId: string){
    let countRetardos = 0;
    let totalAssistances = 0;
    const assistances = await this.assistanceRepository.find({where: {studentId: studentId}})

    assistances.forEach(element => {
      if(element.assistanceType === 'A' || element.assistanceType === 'J' || element.assistanceType === 'R' ){
        totalAssistances++;
        if(element.assistanceType === 'R'){
          countRetardos++
        }
      }
     if(countRetardos == 3){
      totalAssistances--;
     }
    });



    return totalAssistances  
   }

   async StudentAssistancesStatus(studentId: string){
    const studentAssistances = await this.countAssitances(studentId)
    const allClasses = await this.CountClass()
    const assistancesporcent = Math.round((studentAssistances*100)/allClasses)
    const obj = {
      'Clases totales': allClasses,
      'Asistencias': studentAssistances,
      '% de Asistencias ': assistancesporcent ,
    }

    return obj
   }

   async GetStudentStatus(studentId: string){
    const assistanceStatus = await this.StudentAssistancesStatus(studentId)
    const evidenceStatus = await this.CountActivities(studentId)

    const obj = {
      'Total de clases': assistanceStatus['Clases totales'],
      'Asistencia' : assistanceStatus.Asistencias,
      '% Asistencia' : assistanceStatus['% de Asistencias '].toString()+'%',
      'Total de evidencias' : evidenceStatus.numberofActivites,
      'Evidencias entregasdas' : evidenceStatus['Actividades entregadas'],
      '% de actividades entregadas' : evidenceStatus['% de actividades'].toString()+'%'
    }

    return obj
   }
}
