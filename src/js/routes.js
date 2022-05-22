import store from '../js/store';

import HomePage from '../pages/home.jsx';
import QuestionPage from '../pages/question.jsx';
import AnswerPage from '../pages/answer.jsx';
import OptionsPage from '../pages/options.jsx';
import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/new_game/',
    async: function ({ router, resolve }) {
      var app = router.app;
      app.preloader.show();
      store.dispatch("pickQuestions");
      store.dispatch("setQuestionActuelle", {value: 1});
      store.dispatch("setErreurActuelle", {value: 0});
      app.preloader.hide();
      resolve(
          {
            component: QuestionPage,
          }
      )
    },
  },
  {
    path: '/answer/:proposition/',
    component: AnswerPage,
  },
  {
    path: '/next/',
    async: function ({ router, resolve }) {
      var app = router.app;
      app.preloader.show();
      let resolve_component = null;
      router.clearPreviousHistory();
      if (store.getters.erreur_actuelle.value <= store.getters.erreur_maximum.value) {
        if (store.getters.question_actuelle.value < store.getters.nombre_questions.value) {
          store.dispatch("setQuestionActuelle", {value: store.getters.question_actuelle.value + 1});
          resolve_component = QuestionPage;
        } else {
          resolve_component = NotFoundPage;
        }
      } else {
        resolve_component = NotFoundPage;
      }
      app.preloader.hide();
      resolve(
          {
            component: resolve_component,
          }
      )
    },
  },
  {
    path: '/options/',
    component: OptionsPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
