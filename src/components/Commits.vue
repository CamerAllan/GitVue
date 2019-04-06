<template>
  <div>
    <button v-on:click="getCommits">yeentn</button>yeet
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createApolloFetch } from "apollo-fetch";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const apolloFetch = createApolloFetch({ uri: GITHUB_GRAPHQL_API });

apolloFetch.use(({ request, options }, next) => {
  // options.headers = {
  //   "sm-api-key": "$yourShineyKey",
  //   "sm-api-secret": "$yourDarkestSecret"
  // };
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

export default Vue.extend({
  name: "Commits",
  methods: {
    getCommits(
      user: String = "CamerAllan",
      repo: String = "BookingGo-Technical-Challenge-2018",
      branch: String = "master"
    ) {
      const query = "";
      return apolloFetch({
        query: exampleQuery
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
</script>
