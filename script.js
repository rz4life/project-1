const country = [
{name: "Nigeria", capital: "Abuja"},
{name: "Egypt", capital: "Cairo"},
{name: "Russia", capital: "Moscow"},
{name: "Spain", capital: "Madrid"},
{name: "USA", capital: "Washington, D.C."},
{name: "United Kingdom", capital: "London"},
];

let question = document.querySelector('.question')
for (i = 0; i<= country.length; i++){
 question.innerText = `The country is ${country[i].name}`

 console.log(question)
 
}