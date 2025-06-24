import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Tag } from "./tag.entity";


@ObjectType()
@Entity('posts')
export class Post {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id:number;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column()
    content: string;

    @Field(() => User)
    @ManyToMany(() => User, (user) => user.posts)
    user: User;

    @Field(() => [Tag])
    @ManyToMany(() => Tag, (tag) => tag.posts, {cascade:true})
    @JoinTable()
    tags: Tag[]

}