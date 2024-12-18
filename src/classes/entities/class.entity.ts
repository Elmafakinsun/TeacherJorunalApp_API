import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class classes {
    @PrimaryGeneratedColumn()
    classId?: number;
    
    @Column('uuid')
    professorId?: string;

    @Column()
    signature: string;

    @Column()
    period: number;

    @Column()
    classDate: Date;


}
