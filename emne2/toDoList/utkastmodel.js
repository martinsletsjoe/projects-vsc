const model = {
    app: {
        loggedInUser: 'Stian',
        currentPage: 'frontPage',
        displayMode: 'dark',
    },
    inputs: {
        addTask: false,
        login: true,
        tasks: [
            {
                id: 1,
                title: 'Vask',
                description: 'Vask bad første etasje',
                duration: 30,
                recurring: 'Gjentas ikke',
                priority: 'Vanlig',
                // duedate: new Date"2023-08-31",
            },

        ],
    },
    // data
    tasksStatus: {
        pending: [
            // pending tasks here
        ],
        completed: [
            // completed tasks here
        ],
        delayed: [
            // delayed tasks here
        ],
        archived: [
            // archived tasks here
        ],
    },
    daily: [
        {
            task1: 'oppvask',
            task2: 'middag',
            task3: 'trening',
        },
    ],

    weekly: [
        {
            monday: ['oppvask', 'vaskestue', 'oppgave 3',],
            tuesday: ['oppg 4'],
            wednesday: ['oppg 5'],
            thursday: ['oppg 6'],
            friday: ['oppg 7'],
            saturday: ['oppg 8'],
            sunday: ['oppg 9'],
        },
    ],
};

/*
 - Per side: 
   1: Hvilke data vises her - og hvordan skal de ligge i 
      modellen for at vi skal kunne tegne opp siden?
   2: Hva kan brukeren gjøre på denne siden - og hvilke 
      endringer i modellen følger av det?
*/