import { Query, Resolver, Arg } from "type-graphql";
import User from "./user.type";
import { mockUsers } from "lib/utils/mockdata";
@Resolver()
export default class UserResolver {
  private readonly mockData: User[];

  constructor(mockData: User[] = mockUsers) {
    this.mockData = mockData;
  }

  @Query(() => [User])
  users(): User[] {
    return this.mockData;
  }

  @Query(() => User)
  user(@Arg("id") id: string): User {
    return this.mockData.find(user => user.id === id);
  }
}
