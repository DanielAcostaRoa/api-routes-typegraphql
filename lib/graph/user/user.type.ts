import { Field, ObjectType } from "type-graphql";
import { Node } from "../node/node";

@ObjectType({ implements: [Node] })
export default class User extends Node {
  @Field()
  name: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  address: string;
}