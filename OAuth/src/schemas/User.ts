import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {HydratedDocument} from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema({timestamps:true, versionKey:false})
export class User {
    @Prop({required:true, unique:true})
    email:string;

    @Prop()
    firstName: string;

    @Prop()
    lastName:string;

    @Prop()
    name: string;

    @Prop()
    picture:string;

    @Prop()
    accessToken:string;

    @Prop({default: Date.now})
    createdAt:Date;
}

export const UsersSchema = SchemaFactory.createForClass(User)