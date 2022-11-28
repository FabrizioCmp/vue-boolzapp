const datalist = [{
    name: 'Michele',
    avatar: '_1',
    visible: true,
    messages: [{
        date: luxon.DateTime.fromFormat('10/01/2020 15:30:55','dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'Hai portato a spasso il cane?',
        status: 'sent',
        displayMenu: false,
    },
    {
        date: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'Ricordati di dargli da mangiare',
        status: 'sent',
        displayMenu: false,
    },
    {
        date: luxon.DateTime.fromFormat('10/01/2020 16:15:22', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'Tutto fatto!',
        status: 'received',
        displayMenu: false,
    }
    ],
},
{
    name: 'Fabio',
    avatar: '_2',
    visible: true,
    messages: [{
        date: luxon.DateTime.fromFormat('20/03/2020 16:30:00', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'Ciao come stai?',
        status: 'sent',
        displayMenu: false,
    },
    {
        date: luxon.DateTime.fromFormat('20/03/2020 16:30:55', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'Bene grazie! Stasera ci vediamo?',
        status: 'received',
        displayMenu: false,
    },
    {
        date: luxon.DateTime.fromFormat('20/03/2020 16:35:00', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
        status: 'sent',
        displayMenu: false,
    }
    ],
    
},
{
    name: 'Samuele',
    avatar: '_3',
    visible: true,
    messages: [{
        date: luxon.DateTime.fromFormat('28/03/2020 10:10:40', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'La Marianna va in campagna',
        status: 'received',
        displayMenu: false,
    },
    {
        date: luxon.DateTime.fromFormat('28/03/2020 10:20:10', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'Sicuro di non aver sbagliato chat?',
        status: 'sent',
        displayMenu: false,
    },
    {
        date: luxon.DateTime.fromFormat('28/03/2020 16:15:22', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'Ah scusa!',
        status: 'received',
        displayMenu: false,
    }
    ],
},
{
    name: 'Luisa',
    avatar: '_4',
    visible: true,
    messages: [{
        date: luxon.DateTime.fromFormat('10/01/2020 15:30:55', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'Lo sai che ha aperto una nuova pizzeria?',
        status: 'sent',
        displayMenu: false,
    },
    {
        date: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'Si, ma preferirei andare al cinema',
        status: 'received',
        displayMenu: false,
    }
    ],
},
{
    name: 'Elena',
    avatar: '_5',
    visible: true,
    messages: [{
        date: luxon.DateTime.fromFormat('10/01/2020 15:30:55', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'Lo sai che ha aperto una nuova pizzeria?',
        status: 'sent',
        displayMenu: false,
    },
    {
        date: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'ok!',
        status: 'received',
        displayMenu: false,
    }
    ],
},
{
    name: 'Giovanni',
    avatar: '_6',
    visible: true,
    messages: [{
        date: luxon.DateTime.fromFormat('28/03/2020 10:10:40', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'Lo sai che ha aperto una nuova pizzeria?',
        status: 'sent',
        displayMenu: false,
    },
    {
        date: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'oggi che fai?',
        status: 'received',
        displayMenu: false,
    }
    ],
},
{
    name: 'Lorenzo',
    avatar: '_7',
    visible: true,
    messages: [{
        date: luxon.DateTime.fromFormat('28/03/2020 16:15:22', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'Lo sai che ha aperto una nuova pizzeria?',
        status: 'sent',
        displayMenu: false,
    }],
},
{
    name: 'Giacomo',
    avatar: '_8',
    visible: true,
    messages: [{
        date: luxon.DateTime.fromFormat('10/01/2020 15:30:55', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'Lo sai che ha aperto una nuova pizzeria?',
        status: 'sent',
        displayMenu: false,
    },
    {
        date: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/LL/yyyy HH:mm:ss').toFormat('HH:mm'),
        message: 'siamo andati in pizzeria e poi a bere',
        status: 'received',
        displayMenu: false,
    }
    ],
},
];


export default datalist