import { Module } from '@nestjs/common';
import { ClassEvidenceService } from './class-evidence.service';
import { ClassEvidenceController } from './class-evidence.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { evidences } from './entities/class-evidence.entity';
import { ActivitiesController } from 'src/activities/activities.controller';
import { Activity } from 'src/activities/entities/activity.entity';
import { ActivitiesModule } from 'src/activities/activities.module';

@Module({
  imports: [TypeOrmModule.forFeature([evidences]), ActivitiesModule],
  exports: [TypeOrmModule],
  controllers: [ClassEvidenceController],
  providers: [ClassEvidenceService],
})
export class ClassEvidenceModule {}
