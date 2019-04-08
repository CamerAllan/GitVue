import { fetchRepo } from "../../util/Access";

const state = {
  repo: {
    ownerName: "CamerAllan",
    repoName: "SEP-GroupPro",
    branchName: "develop"
  },
  repoInfo: {
    commits: {},
    branches: {}
  }
};

const getters = {
  commits(state: any) {
    return state.repoInfo.commits;
  },
  branches(state: any) {
    return state.repoInfo.branches;
  },
  repoName(state: any) {
    return state.repo.repoName;
  },
  repoOwner(state: any) {
    return state.repo.ownerName;
  },
  branch(state: any) {
    return state.repo.branchName;
  }
};

const actions = {
  fetchCommits(context: any) {
    const repo = context.state.repo;
    const response = fetchRepo(repo.ownerName, repo.repoName, repo.branchName);

    response.then(v => {
      context.commit("SET_BRANCHES", v ? v.data.repository.refs.nodes : "sad");
      context.commit(
        "SET_COMMITS",
        v ? v.data.repository.ref.target.history.edges : "sad"
      );
    });
  }
};

const mutations = {
  SET_BRANCHES(state: any, branches: any) {
    state.repoInfo.branches = branches;
  },
  SET_COMMITS(state: any, commits: any) {
    state.repoInfo.commits = commits;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
