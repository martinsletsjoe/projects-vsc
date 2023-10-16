const model = {
    app: {
        currentPage: 'startPage',
    },
    inputs: {
        startPage: {
            id: 1,
            loggedIn: false,

        },
        userPage: {
            id: 4 ,
            myGrade: "Gult belte",
            title: null,
            description: null,
        },

    },

    // data
    belts: [
        {id: 1, name: 'Gult belte'},
        {id: 2, name: 'Oransje belte'},
        {id: 3, name: 'Grønt belte'},
        {id: 4, name: 'Blått belte'},
        {id: 5, name: 'Brunt belte'},
        {id: 6, name: 'Svart belte'},
    ],
    categories: [
        {id: 1, name: 'Del A - Grunnteknikker'},
        {id: 2, name: 'Del B - Teknikktrening'},
        {id: 3, name: 'Del C - Selvforsvarstrening'},
    ],
    subtypes: [
        {id: 101, name: 'Guard', categoryId: 1},
        {id: 102, name: 'Forflyttninger', categoryId: 1},
        {id: 103, name: 'Fallteknikk', categoryId: 1},
        {id: 104, name: 'Kaste/Fellinger', categoryId: 1},
        {id: 105, name: 'Slag', categoryId: 1},
        {id: 106, name: 'Spark', categoryId: 1},
        {id: 107, name: 'Mønster', categoryId: 1},
        {id: 108, name: 'Blokkering', categoryId: 1},
        {id: 201, name: 'Forfra', categoryId: 2},
    ],
    exercises: [
        {id: 1, subtypeId: 101, name: 'Guardivei 1', description: 'Guardivei'},       
        {id: 2, subtypeId: 101, name: 'Guardivei 2', description: 'Guardivei'},        
        {id: 3, subtypeId: 101, name: 'Guardivei 3', description: 'Guardivei'},        
    ],
    images: [
        {id: 1, exerciseId: 1, caption: 'jdfgdsg', fileName: 'fsjhgfdjk', },
        {id: 2, subtypeId: 1, caption: 'jdfgdsg', fileName: 'fsjhgfdjk', },
        {id: 2, beltId: 1, caption: 'jdfgdsg', fileName: 'fsjhgfdjk', },
        {id: 2, requirementId: 2, caption: 'jdfgdsg', fileName: 'fsjhgfdjk', },
    ],
};
  