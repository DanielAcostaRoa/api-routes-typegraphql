import { InterfaceType, Field, ID } from "type-graphql";

@InterfaceType()
export class Node {
    @Field(() => ID)
    id: string;
}