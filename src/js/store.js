
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
   articles : []
  },
  actions: {
    loadArticles({ state }, {path}) {
      fetch(path).then(res => res.json()).then(articles => state.articles = articles);
    },
  },
  getters: {
    articles({ state }) {
      return state.articles;
    }
  }
})
export default store;
