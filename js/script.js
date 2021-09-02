console.log('ok', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        contactFilter: '',
        newMessage: '',
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
                        date: '10/01/2021 - 1:07',
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
                        date: '10/01/2021 - 22:07',
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
        },

        getLastSeen() {
            const messages = this.contacts[this.currentContact].messages;
            const receivedMessages = messages.filter((message) => {
                return message.status === 'received' ? true : false;
            })
            const lastMessage = receivedMessages[receivedMessages.length - 1];

            return lastMessage.date;
        },

        sendMessage() {
            if (!this.newMessage) return;
            const newMessage = {
                status: 'sent',
                message: this.newMessage,
                date: dayjs().format("DD/MM/YYYY HH:mm:ss")
            };

            this.contacts[this.currentContact].messages.push(newMessage);
            this.newMessage = '';
        },

        filterContact() {
            if (!this.contactFilter) return;
            const filter = this.contactFilter.toLowerCase();

            this.contacts.forEach(contact => {

                var contactName = contactName.toLowerCase();

                if (contactName.includes(filter)) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                };
            })


        },

    },
});