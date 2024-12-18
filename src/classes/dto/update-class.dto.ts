import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateClassDto } from './create-class.dto';

export class UpdateClassDto extends PartialType(CreateClassDto) {
        @ApiProperty()
        signature: string;
        @ApiProperty()
        period: number;
        @ApiProperty()
        classDate: Date;
}
