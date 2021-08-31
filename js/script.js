console.log('ok', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        currentContact: 0,
        user: {
            name: 'Eleonora Rossi',
            avatar: '_io',
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2021 - 10:07',
                        message: 'Hai portato fuori il cane',
                        status: 'sent',

                    },
                    {
                        date: '10/01/2021 - 10:07',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                    },

                    {
                        date: '10/01/2021 - 10:07',
                        message: 'ok',
                        status: 'received',
                    },
                ],


            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '10/01/2021 - 10:07',
                        message: 'Ciao, come stai?',
                        status: 'sent',

                    },
                    {
                        date: '10/01/2021 - 10:07',
                        message: 'Bene grazie e tu?',
                        status: 'received',
                    },

                    {
                        date: '10/01/2021 - 10:07',
                        message: 'ok',
                        status: 'sent',
                    },
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '10/01/2021 - 10:07',
                        message: 'Dove sei?',
                        status: 'sent',

                    },
                    {
                        date: '10/01/2021 - 10:07',
                        message: 'A casa',
                        status: 'received',
                    },

                    {
                        date: '10/01/2021 - 10:07',
                        message: 'Usciamo?',
                        status: 'sent',
                    },
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2021 - 10:07',
                        message: 'Dove sono le chiavi del garage?',
                        status: 'sent',

                    },
                    {
                        date: '10/01/2021 - 10:07',
                        message: 'sopra il modile della TV',
                        status: 'received',
                    },

                    {
                        date: '10/01/2021 - 10:07',
                        message: 'OK',
                        status: 'sent',
                    },
                ],
            },
        ],

    },
    methods: {
        setCurrentContact(index) {
            this.currentContact = index;
        }

    },
});