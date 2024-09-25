import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TicketList {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  avatar: string;

  @Field()
  status: string;

  @Field()
  deadline: string;
}

@ObjectType()
export class TicketBoard {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  avatar: string;

  @Field()
  status: string;

  @Field()
  deadline: string;
}
