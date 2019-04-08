import { fetchRepo } from "../../util/Access";

const state = {
  repo: {
    ownerName: "CamerAllan",
    repoName: "SEP-GroupPro",
    branchName: "develop"
  },
  repoInfo: {}
};

const getters = {
  commits(state: any) {
    //TODO: Return only commits
    return state.repoInfo;
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
      context.commit(
        "SET_REPO_INFO",
        v ? v.data.repository.ref.target.history.edges : "sad"
      );
    });
  }
};

const mutations = {
  SET_REPO_INFO(state: any, repoInfo: any) {
    state.repoInfo = repoInfo;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
