import { createApolloFetch } from "apollo-fetch";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const apolloFetch = createApolloFetch({ uri: GITHUB_GRAPHQL_API });

apolloFetch.use(({ request, options }, next) => {
  options.headers = {
    authorization: "bearer "
  };
  next();
});

export const fetchRepo = async (
  ownerName: String,
  repoName: String,
  branchName: String
) => {
  const queryBranches = `query {
    repository(owner: "${ownerName}", name: "${repoName}") {
      refs(first: 10, , refPrefix:"refs/") {
        nodes {
          name
        }
      }
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
  const queryCommits = `query {
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
      query: queryBranches
    });
  } catch (error) {
    console.log(error);
  }
};
