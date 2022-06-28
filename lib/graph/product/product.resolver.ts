import { Query, Resolver, Arg } from "type-graphql";
import Product from "./product.type";
import { mockProducts } from 'lib/utils/mockdata';

@Resolver()
export default class ProductResolver {
  private readonly mockData: Product[];

  constructor(mockData: Product[] = mockProducts) {
    this.mockData = mockData;
  }
  @Query(() => [Product])
  products(): Product[] {
    return this.mockData
  }

  @Query(() => Product)
  product(@Arg("id") id: string): Product {
    return this.mockData.find(product => product.id === id)
  }
}
