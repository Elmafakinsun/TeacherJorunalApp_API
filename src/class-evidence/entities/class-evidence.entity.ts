import { Blob } from "buffer";
import { Activity } from "src/activities/entities/activity.entity";
import { Column, Entity, IsNull, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class evidences {
    @PrimaryGeneratedColumn()
    idEvidence?: number;

    @Column('uuid')
    studentId?: string

    @Column()
    activityId: number;

    @Column()
    grade: string;

    @Column()
    evidenceDescription: string;

    
    // @ManyToOne(type => Activity, activity => activity.activityId)
    // activities: Activity[]
}
