import { Field, InputType } from "@nestjs/graphql";
import { Role } from "src/entities/role.enum";


@InputType()
export class CreateUserInput {
    @Field()
    username: string;

    @Field()
    email:string;

    @Field(() => Role)
    role: Role
}