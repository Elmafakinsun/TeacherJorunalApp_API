import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassEvidenceModule } from './class-evidence/class-evidence.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { evidences } from './class-evidence/entities/class-evidence.entity';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ProfessorModule } from './professor/professor.module';
import { Professors } from './professor/entities/professor.entity';
import { StudentModule } from './student/student.module';
import { students } from './student/entities/student.entity';
import { ClassesModule } from './classes/classes.module';
import { AssistancesModule } from './assistances/assistances.module';
import { assistances } from './assistances/entities/assistance.entity';
import { classes } from './classes/entities/class.entity';
import { ActivitiesModule } from './activities/activities.module';
import { Activity } from './activities/entities/activity.entity';
import { GlobalFunctionsModule } from './global-functions/global-functions.module';


@Module({
  imports: [ClassEvidenceModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Emmanuel12.',
      database: 'cuaderno',
      entities: [
        evidences, 
        Professors, 
        students,  
        assistances, 
        classes,
        Activity,
      ],
      synchronize: true,
    }),
    ProfessorModule,
    StudentModule,
    ClassesModule,
    AssistancesModule,
    ActivitiesModule,
    GlobalFunctionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Professor Journal App')
    .setDescription('All the functions to make professor life more greatful')
    .setVersion('1.0')
    .addTag('evidence')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('professorJournal', app, documentFactory);

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();

