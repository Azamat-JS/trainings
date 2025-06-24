import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { User } from "src/entities/user.entity";
import { UserService } from "./user.service";
import { CreateUserInput } from "./dto/createUser.input";
import { UpdateUserInput } from "./dto/updateUser.input";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: "users" })
  async findAll() {
    return await this.userService.findAll();
  }

  @Query(() => User, { name: "user" })
  getUser(@Args("id", { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  createUser(@Args("createUserInput") createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }

  @Mutation(() => User)
  updateUser(
    @Args("id", { type: () => Int }) id: number,
    @Args("updateUserInput")
    updateUserInput: UpdateUserInput
  ) {
    return this.userService.updateUser(id, updateUserInput)
  }

  @Mutation(() => String)
  removeUser(@Args('id', {type: () => Int}) id:number){
    return this.userService.deleteUser(id)
  }
}
