import { createApolloFetch } from "apollo-fetch";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const apolloFetch = createApolloFetch({ uri: GITHUB_GRAPHQL_API });

apolloFetch.use(({ request, options }, next) => {
  options.headers = {
    authorization: "bearer 0027f6cdedd52d28d67515785824ee832d4dad73"
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
      refs(first: 10, , refPrefix:"refs/heads/") {
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
                  parents(first: 1) {
                    nodes {
                      oid
                    }
                  }
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
