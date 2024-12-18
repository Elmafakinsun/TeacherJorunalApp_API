import { ApiProperty } from "@nestjs/swagger";

export class CreateAssistanceDto {
    assitenceId?: number;
    @ApiProperty()
    classId: number;
    @ApiProperty()
    assistanceType: string;
    @ApiProperty()
    studentId: string;
}
