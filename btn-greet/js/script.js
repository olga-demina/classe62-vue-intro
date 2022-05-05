Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            userName: ''
        },
        methods: {
            saluta: function() {
                const greeting = 'Ciao ';
                alert(greeting + this.userName);
            }
        }
    }
);