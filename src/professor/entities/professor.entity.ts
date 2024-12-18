import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Professors {
    @PrimaryColumn('uuid', {length: 10})
    professorId?: string;

    @Column('varchar', {length: 45})
    name: string

    @Column('varchar', {length: 45})
    lastName: string
    
    @Column('varchar', {length: 45})
    subject: string
    
    @Column('varchar', {length: 45})
    mail: string
    
    @Column('varchar', {length: 45})
    password: string
    
    @Column()
    birthday: Date
    
}
