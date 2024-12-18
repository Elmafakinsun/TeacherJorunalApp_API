import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAssistanceDto } from './create-assistance.dto';

export class UpdateAssistanceDto extends PartialType(CreateAssistanceDto) {
        @ApiProperty()
        classId: number;
        @ApiProperty()
        assistanceType: string;
        @ApiProperty()
        studentId: string;
}
