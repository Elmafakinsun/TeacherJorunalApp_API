import { ApiProperty } from "@nestjs/swagger"

export class CreateStudentDto {
    @ApiProperty()
    studentId?: string
    @ApiProperty()
    name: string
    @ApiProperty()
    lastName: string
    @ApiProperty()
    group: string
    @ApiProperty()
    mail: string
    @ApiProperty()
    password: string
    @ApiProperty()
    birthday: Date
}
