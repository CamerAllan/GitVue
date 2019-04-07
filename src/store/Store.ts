import Vue from "vue";
import Vuex from "vuex";
import { createApolloFetch } from "apollo-fetch";

Vue.use(Vuex);

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const apolloFetch = createApolloFetch({ uri: GITHUB_GRAPHQL_API });

apolloFetch.use(({ request, options }, next) => {
  options.headers = {
    authorization: "bearer 27346b037c28014d8b28278e31a17ab01a4eb711"
  };
  next();
});

const exampleQuery = `query {
 	repository(owner: "CamerAllan", name: "BookingGo-Technical-Challenge-2018") {
    ref(qualifiedName: "master") {
      target {
        ... on Commit {
          id
          history(first: 5) {
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

export default new Vuex.Store({
  state: {
    repo: {
      user: "CamerAllan",
      name: "BookingGo-Technical-Challenge-2018",
      branch: "master"
    },
    loadingStatus: "notLoading",
    repoInfo: {}
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    SET_REPO_INFO(state, repoInfo) {
      state.repoInfo = repoInfo;
    }
  },
  actions: {
    fetchCommits(context) {
      context.commit("SET_LOADING_STATUS", "loading");
      const response = apolloFetch({
        query: exampleQuery
      }).catch(error => {
        console.log(error);
        context.commit("SET_LOADING_STATUS", "notLoading");
      });

      response.then(v => {
        context.commit(
          "SET_REPO_INFO",
          v ? v.data.repository.ref.target.history.edges : "sad"
        );
      });

      context.commit("SET_LOADING_STATUS", "notLoading");
    }
  },
  getters: {
    commits(state) {
      //TODO: Return only commits
      return state.repoInfo;
    }
  }
});
