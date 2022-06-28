import "reflect-metadata"
import ProductResolver from "./product/product.resolver";
import UserResolver from "./user/user.resolver";

const Resolvers = [UserResolver,ProductResolver] as const;

export default Resolvers;
