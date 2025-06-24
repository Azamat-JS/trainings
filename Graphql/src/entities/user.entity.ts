import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";
import { Post } from "./post.entity";

@ObjectType()
@Entity('users')
export class User {
    constructor(partial?: Partial<User>){
        Object.assign(this, partial)
    }

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id:number;

    @Field()
    @Column()
    username: string;

    @Field()
    @Column()
    email: string;

    @Field(() => Profile)
    @OneToOne(() => Profile, (profile) => profile.user, {cascade: true})
    profile: Profile;

    @Field(() => [Post])
    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];
}