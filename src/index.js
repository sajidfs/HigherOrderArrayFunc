//Error handling
// let a = 10;

// try{
//   setTimeout(()=>{
//     a = 20;
//     console.log("value=" + a);
//   }, 1000);
// }
// catch(e){
//   console.log(e);
// }

//prime number or not
// let i;
// function isPrime(n){
//   for(i = 2; i < n; i++){
//       if(n % i === 0){
//           return 'Not a Prime Number';
//       }
//   }
//   return 'Prime number';
// }

// const result = isPrime(1);
// console.log(result);

//Find largest elemenet of an array
// const marks = [10, 20, 30, 50, 75];

// let max = marks[0];

// marks.forEach((mark)=>{
//   if(mark > max){
//     max = mark;
//   }
// });

// console.log(max);

//Closure
// function stopWatch(){
//   let count = 0;
//   return function(){
//       count++;
//       return count;
//   };
// }
// const clock1 = stopWatch();
// console.log(clock1());  //1
// console.log(clock1());  //2
// console.log(clock1());  //3
// console.log(clock1());  //4

//spread operator
// let num = [10, 20,30];
// num = [...num, 40,50];
// console.log(num);

// //Destructuring
// let fullName = ["Sajid", "Shaikh"];
// let [fname, lname] = fullName;
// console.log(fname + ', ' + lname);

//Index of
// let today = new Date();
// console.log(today.getHours());

//Higher order array functions
const arr = [0, 2, 5, 8, 9, 6];

//Filter
//const newArr = arr.filter(a => a > 1);
//console.log(newArr);

//Map
// const newArr = arr.map(a => a * 2);
// console.log(newArr);

//Reduce
const resulstArr = arr.reduce((sum, current) => sum + current);
console.log(resulstArr);

//Weather api
const city = document.getElementById("city");
const button = document.getElementById("btn");
const apiKey = "80a80724c031de45ca7b3822a12c3bcd";
const app = document.getElementById("app");

const getWeatherInfo = async (city)=> {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
  const data = await response.json();

  app.innerHTML = "<strong>Location</strong>: " + data.name + "<br>" + 
    "Temperature: " + data.main.temp + ", Feels like: " + data.main.feels_like

};

const loadCard = ()=> {
  console.log('Button clicked!!!');
  console.log(city.value);
  getWeatherInfo(city.value);
};

button.addEventListener('click', loadCard);






