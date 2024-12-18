import { Module } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { ProfessorController } from './professor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professors } from './entities/professor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Professors])],
  controllers: [ProfessorController],
  providers: [ProfessorService],
})
export class ProfessorModule {}
