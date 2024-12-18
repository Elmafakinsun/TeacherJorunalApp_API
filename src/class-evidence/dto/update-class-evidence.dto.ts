import { PartialType } from '@nestjs/mapped-types';
import { CreateClassEvidenceDto } from './create-class-evidence.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClassEvidenceDto extends PartialType(CreateClassEvidenceDto) {
    @ApiProperty()
    studentId: string;
    @ApiProperty()
    activityId: number;
    @ApiProperty()
    grade: string;
    @ApiProperty()
    evidenceDescription: string;
}
