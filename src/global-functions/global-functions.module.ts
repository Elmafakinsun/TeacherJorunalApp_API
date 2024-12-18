import { Module } from '@nestjs/common';
import { GlobalFunctionsService } from './global-functions.service';
import { GlobalFunctionsController } from './global-functions.controller';
import { ActivitiesModule } from 'src/activities/activities.module';
import { ClassEvidenceModule } from 'src/class-evidence/class-evidence.module';
import { AssistancesModule } from 'src/assistances/assistances.module';
import { ClassesModule } from 'src/classes/classes.module';

@Module({
  imports: [ActivitiesModule, ClassEvidenceModule, AssistancesModule, ClassesModule],
  controllers: [GlobalFunctionsController],
  providers: [GlobalFunctionsService],
})
export class GlobalFunctionsModule {}
