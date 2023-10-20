
const model = {
    selectedSubtype: null,
    subtypes: [
        { id: 1, categoryId: 1, beltId: 1, name: "Guardstillinger / Benstillinger", nameJapanese: "Kamae / Ashi-Tachi" },
        { id: 2, categoryId: 1, beltId: 1, name: "Forflytninger", nameJapanese: "Tai-sabaki" },
        { id: 3, categoryId: 1, beltId: 1, name: "Fallteknikk", nameJapanese: "Ukemi-waza" },
        { id: 4, categoryId: 1, beltId: 1, name: "Kast / Fellinger", nameJapanese: "Nage waza" },
        { id: 5, categoryId: 1, beltId: 1, name: "Slag", nameJapanese: "Tsuki waza" },
        { id: 6, categoryId: 1, beltId: 1, name: "Spark", nameJapanese: "Keri waza" },
        { id: 7, categoryId: 1, beltId: 1, name: "Mønster", nameJapanese: "Kata" },
        { id: 8, categoryId: 1, beltId: 1, name: "Blokkeringer", nameJapanese: "Uke waza" },

        { id: 9, categoryId: 2, beltId: 1, name: 'Forfra' },
        { id: 10, categoryId: 2, beltId: 1, name: 'Siden' },
        { id: 11, categoryId: 2, beltId: 1, name: 'Bakfra' },
        { id: 12, categoryId: 2, beltId: 1, name: 'Bakketeknikker' },

        { id: 13, categoryId: 3, beltId: 1, name: "Forsvar under press" },
    ],

    exercises: [
        // Katagori 1 har 8 subtyper med totalt 27 øvelser: id 1 til 27
        // 1 / 1 Guardstillinger / Benstillinger (Kamae / Ashi-Tachi)
        {
            id: 1,
            subtypesId: 1,
            CategoryId: 1,
            name: 'Forsvarsguard, åpne hender',
            nameJapanese: 'Shuto',
            withPartner: '',
            description: ''
        },
        {
            id: 2,
            subtypesId: 1,
            CategoryId: 1,
            name: 'Angrepsguard, lukkede hender',
            nameJapanese: 'Seiken',
            withPartner: '',
            description: ''
        },
        {
            id: 3,
            subtypesId: 2,
            CategoryId: 1,
            name: 'Grunnleggende stilling',
            nameJapanese: 'Zenkutsu-dachi',
            withPartner: '',
            description: ''
        },
    ]
}

