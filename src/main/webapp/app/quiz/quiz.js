'use strict';

import QuizCtrl from './quiz.controller';

export default angular
    .module('ezquiz-quiz', ['ezquiz-core'])
    .config($stateProvider => {
        $stateProvider.state('main.quiz', {
            url: '/quiz',
            data: {
                roles: ['ROLE_USER', 'ROLE_ADMIN']
            },
            views: {
                'content@layout': {
                    templateUrl: 'app/quiz/quiz.html',
                    controller: QuizCtrl,
                    controllerAs: 'quiz'
                }
            }
        });
    });