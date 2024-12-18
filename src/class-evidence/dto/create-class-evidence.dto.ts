import { ApiProperty } from "@nestjs/swagger";

export class CreateClassEvidenceDto {
    idEvidence?: number;
    @ApiProperty()
    studentId: string;
    @ApiProperty()
    activityId: number;
    @ApiProperty()
    grade: string;
    @ApiProperty()
    evidenceDescription: string;
}
