const CatList = [
    {
        id: 1,
        name: 'Eleonore',
        type: 'queen',
        sex: 'female',
        status: 'active',
        date: '2021-02-01',
        cattery: 'Dancindots',
        location: 'Quebec, Canada',
    }, {
        id: 2,
        name: 'Elizabeth',
        type: 'queen',
        sex: 'female',
        status: 'active',
        date: '2020-10-01',
        cattery: 'Leominipard',
    }, {
        id: 3,
        name: 'Milady',
        type: 'queen',
        sex: 'female',
        status: 'retired',
        date: '2020-10-01',
        cattery: 'Leominipard',
    }, {
        id: 4,
        name: 'Gloria',
        type: 'queen',
        sex: 'female',
        status: 'active',
        date: '2019-10-01',
        cattery: 'Junglebeauty',
        location: 'Ontario, Canada',
    }, {
        id: 5,
        name: 'Bora',
        type: 'queen',
        sex: 'female',
        status: 'active',
        date: '2019-10-01',
        cattery: 'Junglebeauty',
    }, {
        id: 6,
        name: 'Charmy',
        type: 'queen',
        sex: 'female',
        status: 'active',
        date: '2019-09-01',
        cattery: 'Snowshadows',
        location: 'Quebec, Canada',
    }, {
        id: 7,
        name: 'Lita',
        type: 'queen',
        sex: 'female',
        status: 'active',
        date: '2019-09-01',
        cattery: 'Snowshadows',
        location: 'Quebec, Canada',
    }, {
        id: 8,
        name: 'Diana',
        type: 'queen',
        sex: 'female',
        status: 'active',
        date: '2019-05-01',
        cattery: 'Snowshadows',
        location: 'Quebec, Canada',
    }, {
        id: 9,
        name: 'Churchil',
        type: 'king',
        colour: 'brown',
        sex: 'male',
        adj: 'regal',
    }, {
        id: 10,
        name: 'Merlin',
        type: 'king',
        colour: 'silver',
        sex: 'male',
        adj: 'magnificent',
    }, {
        id: 11,
        name: 'Julius',
        type: 'king',
        colour: 'brown',
        sex: 'male',
        adj: 'smart',
    }, {
        id: 12,
        name: 'Richard',
        type: 'king',
        colour: 'silver',
        sex: 'male',
        adj: 'gorgeous',
    }, {
        id: 13,
        name: 'Yellow',
        type: 'kitten',
        colour: 'silver',
        sex: 'male',
        adj: 'handsome',
        status: 'available',
        date: '2022-04-20',
        father: 'Merlin',
        mother: 'Eleonore',
    }, {
        id: 14,
        name: 'Blue',
        type: 'kitten',
        colour: 'silver',
        sex: 'male',
        adj: 'amazing',
        status: 'available',
        date: '2022-05-14',
        father: 'Merlin',
        mother: 'Lita',
    }, {
        id: 15,
        name: 'Yellow',
        type: 'kitten',
        colour: 'silver',
        sex: 'male',
        adj: 'gorgeous',
        status: 'available',
        date: '2022-05-14',
        father: 'Merlin',
        mother: 'Lita',
    }, {
        id: 16,
        name: 'Blue',
        type: 'kitten',
        colour: 'silver',
        sex: 'male',
        adj: 'stunning',
        status: 'available',
        date: '2022-06-02',
        father: 'Richard',
        mother: 'Bella',
    }, {
        id: 17,
        name: 'Orange',
        type: 'kitten',
        sex: 'male',
        adj: 'gorgeous',
        status: 'available',
        date: '2022-06-19',
        father: 'Merlin',
        mother: 'Charmy',
    }, {
        id: 18,
        name: 'Blue',
        type: 'kitten',
        colour: 'brown',
        sex: 'male',
        adj: 'stunning',
        status: 'available',
        date: '2022-06-25',
        father: 'Churchil',
        mother: 'Lita',
    }, {
        id: 19,
        name: 'Yellow',
        type: 'kitten',
        colour: 'brown',
        sex: 'male',
        adj: 'stunning',
        status: 'available',
        date: '2022-06-25',
        father: 'Churchil',
        mother: 'Lita',
    }, {
        id: 20,
        name: 'Gold',
        type: 'kitten',
        sex: 'male',
        adj: 'handsome and very curious',
        status: 'available',
        date: '2022-07-24',
        father: 'Churchil',
        mother: 'Cleo',
    }, {
        id: 21,
        name: 'Yellow',
        type: 'kitten',
        colour: 'silver',
        sex: 'male',
        adj: 'adorable',
        status: 'available',
        date: '2022-08-16',
        father: 'Merlin',
        mother: 'Eleonore',
    }, {
        id: 22,
        name: 'White',
        type: 'kitten',
        sex: 'female',
        adj: 'amazing',
        status: 'reserved',
        date: '2022-08-16',
        father: 'Merlin',
        mother: 'Eleonore',
    }, {
        id: 23,
        name: 'Orange',
        type: 'kitten',
        colour: 'silver',
        sex: 'female',
        adj: 'stunning',
        status: 'reserved',
        date: '2022-08-16',
        father: 'Merlin',
        mother: 'Eleonore',
    }, {
        id: 24,
        name: 'Purple',
        type: 'kitten',
        colour: 'silver',
        sex: 'female',
        adj: 'amazing',
        status: 'reserved',
        date: '2022-06-19',
        father: 'Merlin',
        mother: 'Charmy',
    }, {
        id: 25,
        name: 'Red',
        type: 'kitten',
        colour: 'silver',
        sex: 'female',
        adj: 'very cuddly',
        status: 'reserved',
        date: '2022-05-01',
        father: 'Churchil',
        mother: 'Diana',
    }, {
        id: 26,
        name: 'Blue',
        type: 'kitten',
        sex: 'female',
        adj: 'very beautiful',
        status: 'reserved',
        date: '2022-05-01',
        father: 'Churchil',
        mother: 'Diana',
    }, {
        id: 27,
        name: 'Orange',
        type: 'kitten',
        colour: 'silver',
        sex: 'female',
        adj: 'very cute',
        status: 'reserved',
        date: '2022-05-01',
        father: 'Churchil',
        mother: 'Diana',
    }
];

export default CatList;