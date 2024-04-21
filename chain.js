// data access

const data = [{id: 1, name: 'Abdullah', address: 'lohagara'}];

console.log(data[0].name);


const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 50000},
        {id: 1, name: 'mac book', price: 100000}
    ]
}

// need second product price
console.log(products.data[1].price);

const user = {
    id: 1001,
    name: 'Abdur Rahman',
    address: {
        street: {
            first: '52/1, Abdullapur',
            second: '13/7, Nimtoli',
            third: '24/7, Tal Toli' 
        },
        city: 'chattogram',
    
    }
}

const user2 = {
    id: 5002,
    name: 'Umama',
    address: {
        city: 'chittagong',
        country: 'Bangladesh',
    }

}

console.log(user.address.street?.second);
console.log(user2.address.street?.second);
