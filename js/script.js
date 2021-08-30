console.log('ok', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
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
                        message: 'Ricordati di dagli da mangiare',
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
                // visible: true,
                // item: [
                //     {
                //         date: '10/01/2021 - 10:07',
                //         message: 'Ciao, come stai?',
                //         status: 'sent',

                //     },
                //     {
                //         date: '10/01/2021 - 10:07',
                //         message: 'Bene grazie e tu?',
                //         status: 'received',
                //     },

                //     {
                //         date: '10/01/2021 - 10:07',
                //         message: 'ok',
                //         status: 'sent',
                //     },
                // ]
            },
            {
                name: 'Samuele',
                avatar: '_3',
            },
            {
                name: 'Luisa',
                avatar: '_4',
            },
        ],

    },
    methods: {},
})