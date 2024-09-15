import { Resolver, Query } from "@nestjs/graphql";
import { User } from "../../models/user/user.model";

const userSampleList: User[] = [
  {
    id: "uuid1",
    email: "sample1@example.co.jp",
    name: "sample1",
  },
  {
    id: "uuid2",
    email: "sample2@example.co.jp",
    name: "sample2",
  },
  {
    id: "uuid3",
    email: "sample3@example.co.jp",
    name: "sample3",
  },
];

@Resolver("User")
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return userSampleList;
  }
}
