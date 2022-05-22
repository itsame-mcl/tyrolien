
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    catalogue : [],
    nombre_questions : 3,
    erreur_maximum : 25,
    articles_ordonnes : true
  },
  actions: {
    loadCatalogue({ state }, {path}) {
      fetch(path).then(res => res.json()).then(catalogue => state.catalogue = catalogue);
    },
    setNombreQuestions({state}, {value}) {
      state.nombre_questions = value;
    },
    setErreurMaximum({state}, {value}) {
      state.erreur_maximum = value;
    },
    setArticlesOrdonnes({state}, {value}) {
      state.articles_ordonnes = value;
    }
  },
  getters: {
    catalogue({ state }) {
      return state.catalogue;
    },
    nombre_questions({state}) {
      return state.nombre_questions;
    },
    erreur_maximum({state}) {
      return state.erreur_maximum;
    },
    articles_ordonnes({state}) {
      return state.articles_ordonnes;
    }
  }
})

export default store;
