
import { createStore } from 'framework7/lite';
import _, {sortBy, sample} from 'underscore';

const store = createStore({
  state: {
    catalogue : [],
    nombre_questions : 3,
    erreur_maximum : 25,
    articles_ordonnes : true,
    questions : [],
    question_actuelle : null,
    erreur_actuelle : null,
    afficher_reponses : true
  },
  actions: {
    loadCatalogue({state}, {path}) {
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
    },
    pickQuestions({state}) {
      let questions_set = sample(state.catalogue, state.nombre_questions);
      if(state.articles_ordonnes) {
        questions_set = sortBy(questions_set, (item) => item.price.amount)
      }
      state.questions = questions_set;
    },
    setQuestionActuelle({state}, {value}) {
      state.question_actuelle = value;
    },
    setErreurActuelle({state}, {value}) {
      state.erreur_actuelle = value;
    },
    setAfficherReponses({ state }, { value }) {
      state.afficher_reponses = value;
    }
  },
  getters: {
    nombre_questions({state}) {
      return state.nombre_questions;
    },
    erreur_maximum({state}) {
      return state.erreur_maximum;
    },
    articles_ordonnes({state}) {
      return state.articles_ordonnes;
    },
    article_actuel({state}) {
      return state.questions[state.question_actuelle - 1];
    },
    question_actuelle({state}) {
      return state.question_actuelle;
    },
    erreur_actuelle({state}) {
      return state.erreur_actuelle;
    },
    afficher_reponses({ state }) {
      return state.afficher_reponses;
    }
  }
})

export default store;
