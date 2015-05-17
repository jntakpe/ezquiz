'use strict';

export default function (role) {
    var menuContent = [],
        gettingStarted = {
            name: 'Getting Started',
            state: 'getting-started',
            type: 'link'
        },
        customization = {
            name: 'Customization',
            type: 'heading',
            children: [{
                name: 'CSS',
                type: 'toggle',
                pages: [{
                    name: 'Typography',
                    state: 'typography',
                    type: 'link'
                }]
            }, {
                name: 'Theming',
                type: 'toggle',
                pages: [{
                    name: 'Introduction and Terms',
                    state: '01_introduction',
                    type: 'link'
                },
                    {
                        name: 'Declarative Syntax',
                        state: '02_declarative_syntax',
                        type: 'link'
                    },
                    {
                        name: 'Configuring a Theme',
                        state: '03_configuring_a_theme',
                        type: 'link'
                    },
                    {
                        name: 'Multiple Themes',
                        state: '04_multiple_themes',
                        type: 'link'
                    }]
            }]
        },
        quiz = {
            name: 'Quiz',
            state: 'main.quiz',
            type: 'link'
        };
    menuContent.push(gettingStarted);
    menuContent.push(customization);
    menuContent.push(quiz);
    return menuContent;
}