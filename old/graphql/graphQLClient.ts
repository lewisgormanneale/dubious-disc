import { GraphQLClient } from "graphql-request";

const graphQLClient = new GraphQLClient(
  "https://beta.pokeapi.co/graphql/v1beta/",
  {}
);

export default graphQLClient;
