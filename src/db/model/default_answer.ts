import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from 'typeorm';

export enum Type {
    NO_ANSWER = 0,
    DEFAULT = 1,
    VIEWING_FIX = 2,
    VIEWING_CONTACT = 3,
}


@Entity({
    name: 'default_answers'
})
export class DefaultAnswer {

    @PrimaryColumn({
        length: 50
    })
    id!: string;

    @Column({
        type: 'varchar',
        length: 8,
        unique: true
    })
    advertId!: string;

    @Column({
        type: "enum",
        enum: Type,
        default: Type.DEFAULT
    })
    type!: Type

    @Column({
        type: 'text',
        nullable: true
    })
    message!: string;

    @CreateDateColumn({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt!: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP'
    })
    updatedAt!: Date;

    @Column({
        type: 'timestamp',
        nullable: true,
        default: null
    })
    deletedAt!: Date | null

}
