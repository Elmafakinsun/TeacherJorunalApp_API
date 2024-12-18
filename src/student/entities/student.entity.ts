import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class students {
    @PrimaryColumn('uuid', {length: 10})
    studentId?: string;

    @Column('varchar', {length: 45})
    name: string

    @Column('varchar', {length: 45})
    lastName: string 
    
    @Column('varchar', {length: 5})
    group: string
    
    @Column('varchar', {length: 45})
    mail: string
    
    @Column('varchar', {length: 45})
    password: string
    
    @Column()
    birthday: Date
    
}
