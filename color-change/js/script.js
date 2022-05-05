Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            titleText: 'Ciao mondo',
            titleClass: 'red',
        },
        methods: {
            changeColor: function(event) {
                event.preventDefault();
                if (this.titleClass === 'blue') {
                    this.titleClass = 'red';
                } else {
                    this.titleClass = 'blue';
                }
            }
        }
    }
);