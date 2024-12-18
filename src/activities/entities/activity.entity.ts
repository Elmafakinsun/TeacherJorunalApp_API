import { evidences } from "src/class-evidence/entities/class-evidence.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Activity {
    @PrimaryGeneratedColumn()
    activityId?: number;

    @Column('varchar', {length: 45})
    activityName: string;

    @Column('uuid')
    professorId?: string;

    @Column('varchar', {length: 45})
    signature: string;

    @Column('varchar', {length: 45})
    activityType: string;

    @Column()
    date: Date

    @Column()
    period: number;

    // @OneToMany(type => evidences, evidence => evidence.activityId)
    // evidences: evidences[]
}
