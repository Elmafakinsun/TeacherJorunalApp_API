import { ApiProperty } from "@nestjs/swagger";

export class CreateActivityDto {
    activityId?: number;
    @ApiProperty()
    activityName: string;
    @ApiProperty()
    professorId?: string;
    @ApiProperty()
    signature: string;
    @ApiProperty()
    activityType: string;
    @ApiProperty()
    date: Date
    @ApiProperty()
    period: number;
}
