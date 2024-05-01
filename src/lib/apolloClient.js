import fetch from "isomorphic-unfetch";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createHttpLink = (headers) => {
  const httpLink = new HttpLink({
    uri: "https://glorious-turtle-95.hasura.app/v1/graphql",
    credentials: "include",
    headers, // auth token is fetched on the server side
    fetch,
  });
  return httpLink;
};

export default function createApolloClient(initialState, headers) {
  const ssrMode = typeof window === "undefined";
  let link = createHttpLink({
    "x-hasura-admin-secret":
      "xa1jqEWDHpLxx6ul77rnO1r2xMthwLehoV6jwyuIUIfC0zqaFFmcdOP653Tisvn8",
  });

  return new ApolloClient({
    ssrMode,
    link,
    cache: new InMemoryCache().restore(initialState),
  });
}
