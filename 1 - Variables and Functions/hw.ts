const icecream = {
    'small': {
    'price': 10
    },
    'big': {
    'price': 25,
    'toppings': {
    'chocolate': 5,
    'caramel': 6,
    'berry': 10
    }
    },
    'marmalow': {
    'price': 5
    }
    
    };
    let buyIcecream = function () : void {
    let price: number = 0;
    let type: string = prompt ('Ice cream type?', 'small');
    switch(type) {
    case 'small':
    price = price + icecream.small.price;
    break;
    case 'big':
    price = price + icecream.big.price + choseToppings();
    break;
    }
    let marmalow: string = prompt ('Do you need marmalow?');
    if (marmalow == 'yes') {
    price = price + icecream.marmalow.price;
    }
    alert(`Ice cream price ${price} UAH`);
    };
    
    let choseToppings = () : number => {
    let toppingsPrice: number = 0;
    let toppingsList : string = prompt('Choose toppings. Available: chocolate, caramel, berry.', 'chocolate');
    
    let countToppingPrice = () => {
    // let toppingsArr = toppingsList.split(', ');
    // for(let i = 0; i < toppingsArr.length; i++) {
    switch(toppingsList) {
    case 'chocolate':
    toppingsPrice = toppingsPrice + icecream.big.toppings.chocolate;
    break;
    case 'caramel':
    toppingsPrice = toppingsPrice + icecream.big.toppings.caramel;
    break;
    case 'berry':
    toppingsPrice = toppingsPrice + icecream.big.toppings.berry;
    break;
    default:
    validateToppingsList();
    break;
    }
    // }
    };
    
    let validateToppingsList = () => {
    toppingsList = prompt('You must choose one of toppings. Available: chocolate, caramel, berry.', 'chocolate');
    countToppingPrice();
    };
    
    if (toppingsList == undefined) {
    validateToppingsList();
    }
    else {
    countToppingPrice();
    }
    
    return toppingsPrice;
    };
    
    buyIcecream();