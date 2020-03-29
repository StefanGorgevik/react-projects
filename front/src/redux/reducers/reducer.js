const initState = {
    answers: [
        {
            id: 0,
            answers: ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Australia']
        },
        {
            id: 1,
            answers: ['Apple', 'Banana', 'Pineapple', 'Cranberry', 'Raspberry', 'Kiwi', 'Peach', 'Pear', 'Lemon', 'Orange']
        },
        {
            id: 2,
            answers: ['Ferrari', 'Golf', 'Bmw', 'Audi', 'Ford', 'Renault', 'Masserati']
        },
        {
            id: 3,
            answers: ['Samsung', 'Iphone', 'Huawei']
        },
        {
            id: 4,
            answers: ['Bedroom', 'Living Room', 'Closet', 'Bathroom', 'Kitchen', 'Hall']
        },
        {
            id: 5,
            answers: ['Smell', 'Yell', 'Tell', 'Well']
        },
        {
            id: 6,
            answers: ['Action', 'Horror', 'Drama', 'Science-fiction',]
        },
        {
            id: 7,
            answers: ['Cello', 'Guitar', "Drums", "Viola"]
        },
        {
            id: 8,
            answers: ['Cousin', 'Mother', 'Father', 'Brother', 'Sister', 'Wife', 'Husband']
        },
        {
            id: 9,
            answers: ['Blues']
        }
    ],
    questions: [
        { id: 0, question: "Write all of the continents" },
        { id: 1, question: "Types of fruits" },
        { id: 2, question: "Car brands" },
        { id: 3, question: "Mobile phones brands" },
        { id: 4, question: "Rooms in a house" },
        { id: 5, question: "Words that rhyme with sell" },
        { id: 6, question: "Types of movie genres" },
        { id: 7, question: "10 most played instruments" },
        { id: 8, question: "Types of family relationships" },
        { id: 9, question: "Types of music genre" }

    ],
    productGroups: [
        {
            id: 0,
            groupDate: "2020-01-01",
            type: 'Groceries',
            products: [
                {
                    id: 25,
                    name: "Burger",
                    price: 150,
                    quantity: 2
                },
                {
                    id: 255,
                    name: "Alva",
                    price: 100,
                    quantity: 2
                },
            ]
        },
        {
            id: 22,
            groupDate: "2020-01-01",
            type:"Electronics",
            products: [
                {
                    id: 23,
                    name: "Phone",
                    price: 150,
                    quantity: 2
                },
                {
                    id: 233,
                    name: "Laptop",
                    price: 150,
                    quantity: 2
                }
            ]
        }
    ],
    budgetCalcTypes: ["Food", "Drinks", "Clothing"],
    addNewGroupClicked: false,
    mode: 'products'
}

export function reducer(state = initState, action) {
    switch (action.type) {
        case "ADD_TYPE": {
            return { ...state, budgetCalcTypes: state.budgetCalcTypes.concat(action.payload) }
        }
        case "ADD_NEW_GROUP_CLICKED": {
            return { ...state, addNewGroupClicked: action.payload }
        }
        case "CHANGE_MODE": {
            return { ...state, mode: action.payload }
        }
        case "SAVE_GROUP": {
            return { ...state,  productGroups: state.productGroups.concat(action.payload) }
        }
        default:
            return state;
    }
}