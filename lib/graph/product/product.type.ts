import { Field, ObjectType } from "type-graphql";
import { Node } from "../node/node";

@ObjectType({ implements: [Node] })
export default class Product extends Node {
  @Field()
  sku: string;

  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  description: string;

  @Field()
  image: string;
}