import { ApiProperty } from "@nestjs/swagger";

export class CreateClassDto {
    classId?: number;
    @ApiProperty()
    professorId?: string;
    @ApiProperty()
    signature: string;
    @ApiProperty()
    period: number;
    @ApiProperty()
    classDate: Date;
}
