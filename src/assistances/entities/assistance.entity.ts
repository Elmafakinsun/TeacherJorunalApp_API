import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class assistances {
    @PrimaryGeneratedColumn()
    assitanceId?: number;

    @Column()
    classId: number

    @Column('varchar', { length: 45 })
    assistanceType: string

    @Column('uuid') 
    studentId: string;

    


}
