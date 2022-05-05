
// Vue Model Greet
// Predisponiamo due input, in cui inseriremo Nome e Cognome.
// In un paragrafo utilizzare Nome e Cognome per salutare l’utente

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            username: '',
            userLastname: ''
        }
    }
); 