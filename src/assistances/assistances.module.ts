import { Module } from '@nestjs/common';
import { AssistancesService } from './assistances.service';
import { AssistancesController } from './assistances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { assistances } from './entities/assistance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([assistances])],
  exports: [TypeOrmModule],
  controllers: [AssistancesController],
  providers: [AssistancesService],
})
export class AssistancesModule {}
