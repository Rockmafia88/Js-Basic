const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currvl :${currval}`);
//     return acc + currval
// },0)


const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemsName : "js course",
        price : 2999
    },
    {
        itemsName : "python course",
        price : 999
    },
    {
        itemsName : "Mobile Dev",
        price : 5999
    },
    {
        itemsName : "data science course",
        price : 12999
    },
]

const priceTopay = shoppingCart.reduce((acc,item) => acc + item.price ,0)
console.log(priceTopay);