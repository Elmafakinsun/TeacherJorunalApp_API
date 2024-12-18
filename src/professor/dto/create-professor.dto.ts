import { ApiProperty } from "@nestjs/swagger";

export class CreateProfessorDto {
    @ApiProperty()
    professorId?: string
    @ApiProperty()
    name: string
    @ApiProperty()
    lastName: string
    @ApiProperty()
    subject: string
    @ApiProperty()
    mail: string
    @ApiProperty()
    password: string
    @ApiProperty()
    birthday: Date

}
