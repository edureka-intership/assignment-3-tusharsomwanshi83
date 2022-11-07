// Question No 1 solution
class restaurantManager {
    restaurantList = [{
        id: 1,
        restaurantName: 'KFC',
        address: 'Ladgaon road',
        city: 'Pune'
    },
    {
        id: 2,
        restaurantName: 'Domino',
        address: 'City center',
        city: 'Delhi'
    },
    {
        id: 3,
        restaurantName: 'Burger ',
        address: 'Aurangpur',
        city: 'Aurangabad'
    },
    {
        id: 4,
        restaurantName: 'Subway',
        address: 'Tea corner',
        city: 'Pune'
    }]

    printAllRestaurantNames = () => {
        return this.restaurantList.map(restaurant => restaurant.restaurantName);
    }


filterRestaurantByCity = (cityName) => {
    return this.restaurantList.filter(restaurant => restaurant.city == cityName);
}
}


const restaurantObj = new restaurantManager();
console.log(restaurantObj.printAllRestaurantNames())
console.log(restaurantObj.filterRestaurantByCity('Pune'))



const orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
  };
  
  // a) 
  const total = Object.values(orderData).reduce((prev, next) => prev + next);  // Calculating the total of all key values 
  
  // b) 
  const headers = Object.keys(orderData);  // Computing all keys of the Object
  const proportions = Object.keys(orderData).length;  // Computing all keys of the Object
  
  
  // //c) 
  const response = headers.map((item, index) => {
    return {
      'id': index + 1,
      'restaurant': 'Punjabi Tadka',
      'order': item,
      'order percentage': ((orderData[item] / total) * 100).toFixed(2)
    }
  })
  
  console.log("Total number of orders placed = " + total)
  console.log("Total number of order proportions = "+proportions)
  console.log(response)
  