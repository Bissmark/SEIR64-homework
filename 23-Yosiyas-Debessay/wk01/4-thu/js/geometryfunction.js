
const rectangle = {
    height: 4,
    width: 4,

    isSquare(){
        return this.height === this.width;
    },
    area(){
        return this.height * this.width;
    },
    perimeter(){
        return 2 * (this.height + this.width);
    }
 } 
 console.log(`This rectangle has a width of ${rectangle.width} and the length of ${rectangle.height}. It has an area of ${rectangle.area()}, a perimeter of ${rectangle.perimeter()} and is a ${rectangle.isSquare()}`);




//Triangle
  const triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 4,

    isEquilateral() {
        return this.sideA === this.sideB && this.sideC === this.sideA;
    },

    isIsosceles() {
        return this.sideA === this.sideB || this.sideA === this.sideC || this.sideC === this.sideB;
    },

    area() {
        return 1/2 * (this.sideA * this.sideB);  
    }
  };

  console.log(`Triangle is ${triangle.isEquilateral() ? '' : 'not '}equilateral`);
  console.log(`Triangle is ${triangle.isIsosceles() ? '' : 'not '}isosceles`);
  console.log(`The area of triangle is ${triangle.area()}`);
  



//cashRegister
function cashRegister(cart) {
    let totalPrice = 0;
    for (let item in cart) {
        totalPrice += parseFloat(cart[item]);
    }
    return totalPrice;
}
const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };
  
  console.log(cashRegister(cartForParty));




 const leapYear = function (year){
        if (year % 4 != 0){
            return false;
        } else if (year % 100 != 0){
            return true;
        } else if (year % 400 != 0){
            return false;
        } else {
            return true;
        }
 }
 const year = prompt("Enter a year to test: ");
 console.log(leapYear(year));



 const timeConverter = function(time){
	let hours = parseInt(time.substring(0, 2));
    let minutes = parseInt(time.substring(3, 5));
    let amPm = time.substring(6);

    if (amPm === "AM" && hours === 12) {
        hours = 0;
    } else if (amPm === "PM" && hours < 12) {
        hours += 12;
    }


    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minture = "0" + hours;
    }
    let timeConverter = hours + ":" + minutes;
    return militaryTime;
 }
 console.log(timeConverter("12:00:00pm"))

 const timeConvert = function(time) {
    let hours = Number(time.slice(0, 2));
    const minutes = time.slice(2, -2);
    const isAfternoon = time[time.length - 2] === 'P'


    if (isAfternoon) {
        hours += 12

    if (hours === 12) {
        hours -= 12
    }

    if (hours === 24) {
        hours -= 12
    }

    if (hours < 10) {
        hours = '0' + hours
    }

    console.log(hours + minutes)

 }
}

console.log(timeConverter("12:00:00pm"))


const week = [
    {
    name: 'monday',
    temp: 20,
    rian: 12
    },
    {
    name: 'tuesday',
    temp: 20,
    rian: 12
    },
    {
    name: 'wednesday',
    temp: 20,
    rian: 12
    },
    {
    name: 'thursday',
    temp: 20,
    rian: 12
    },
    {
    name: 'friday',
    temp: 20,
    rian: 12
    },
]

const planTrip = function (minTemp, maxRain) {
    const days = [];

    for (let i = 0; i < week.length; i++) {
    const day = week[i];
    if(day.temp >= minTemp && day.rain <= maxRain) {
        day.push(day.name);
    }
    
    }
    if(days.length < 1) {
        return 'No days suitable';
    }
}