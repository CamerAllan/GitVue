import { createApolloFetch } from "apollo-fetch";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const apolloFetch = createApolloFetch({ uri: GITHUB_GRAPHQL_API });

apolloFetch.use(({ request, options }, next) => {
  options.headers = {
    authorization: "bearer 5e3c10cc6b8c68b3556f661dfe3d9d2bc1653a80"
  };
  next();
});

export const fetchRepo = async (
  ownerName: String,
  repoName: String,
  branchName: String
) => {
  const query = `query {
                      repository(owner: "${ownerName}", name: "${repoName}") {
                        ref(qualifiedName: "${branchName}") {
                          target {
                            ... on Commit {
                              id
                              history(first: 99) {
                                pageInfo {
                                  hasNextPage
                                }
                                edges {
                                  node {
                                    messageHeadline
                                    oid
                                    message
                                    author {
                                      name
                                      email
                                      date
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }`;
  try {
    return apolloFetch({
      query
    });
  } catch (error) {
    console.log(error);
  }
};
