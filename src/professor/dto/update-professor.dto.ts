import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProfessorDto } from './create-professor.dto';

export class UpdateProfessorDto extends PartialType(CreateProfessorDto) {
    @ApiProperty()
    name: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    subject: string;
    @ApiProperty()
    mail: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    birthday: Date;
}
