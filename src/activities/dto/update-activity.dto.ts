import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateActivityDto } from './create-activity.dto';

export class UpdateActivityDto extends PartialType(CreateActivityDto) {
        @ApiProperty()
        activityName: string;
        @ApiProperty()
        signature: string;
        @ApiProperty()
        activityType: string;
        @ApiProperty()
        date: Date
        @ApiProperty()
        period: number;
}
