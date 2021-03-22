fetch(`https://restcountries.eu/rest/v2/all?fields=name;capital`).then(async(response) =>{
const data = await response.json()
let countries = [];
let remainingTime = 15;
let interval
// console.log(data)
for(i=0; i<data.length; i++){
    // console.log(data[i].capital)
if( data[i].capital !== ""){
    // console.log(data[i].capital)
     countries.push(data[i])
    }
}

function shuffleArray (countries){
    for(r=countries.length-1; r>0; r--){
        let rand = Math.floor(Math.random() * (r+1));
        let temp = countries[r];
        countries[r] = countries[rand];
        countries[rand] = temp;  
    }
    return countries;
}
countries = shuffleArray(countries)

   

let score = 0;   
let arrNum = []
let startButton = document.querySelector('.start-button')
let question = document.querySelector('.question')
let answerButton = document.querySelectorAll('.buttonOpt')
let countRandom = Math.floor(Math.random() * countries.length)



while (arrNum.length < 4){
    let randomNum2 = Math.floor(Math.random() * countries.length)
    if (!arrNum.includes (randomNum2)){
        arrNum.push (randomNum2)
    }
}

let count = countRandom;

startButton.addEventListener('click', () => {
    randomSelection();
    document.querySelector('.page-1').classList.add('hidden')
    document.querySelector('#page-2').classList.remove('hidden')
    remainingTime = 15;
    interval = setInterval(() => {
        remainingTime --;
        let timer = document.querySelector('.timer')
        timer.innerText = `you have ${remainingTime}`
    }, 1000);
   
    setTimeout(function(){
        // document.querySelector('.page-1').classList.add('hidden')
        document.querySelector('#page-2').classList.add('hidden')
        document.querySelector('#page-3').classList.remove('hidden')
        let currentHighest = localStorage.getItem('hScore')
        highestScore.innerText = `Highest score is ${currentHighest}` 
    }, 15000);
    
})


document.querySelector('#restartButton').addEventListener('click', (event) =>{
    countRandom = Math.floor(Math.random() * countries.length)
    count = countRandom++;
    score = 0;  
    document.querySelector('#page-3').classList.add('hidden')
    document.querySelector('.page-1').classList.remove('hidden')
    totalScore.innerText = `Your score is ${score}`
    remainingTime = 15;
    clearInterval(interval)
})


let randomSelection = () =>{
    let answerInner = []
    let ansRan = Math.floor(Math.random() * 4)
    question.innerText = `The Country is ${countries[count].name}`
    // check if answer is already included in option. if true do nothing, if not true include it
    for(let j= 0; j < 4; j++){      
        answerButton[j].innerText = countries[arrNum[j]].capital
        answerInner.push(answerButton[j].innerText )
     }
    // console.log(answerInner)
    if(!answerInner.includes(countries[count].capital)){
        answerButton[ansRan].innerText = countries[count].capital
    }
}



let finalScore = document.querySelector('.finalScore')
let totalScore = document.querySelector('.totalscore')
let highestScore = document.querySelector('.highestScore')


document.querySelector('#opt1').addEventListener('click', (event) =>{
    let option1 = document.querySelector('#opt-1')
    if(option1.innerText === countries[count].capital){
        score++;
        if(count === countries.length-1){
            count = countRandom;
        }
        count++;
        randomSelection()
        totalScore.innerText = `Your score is ${score}`
        finalScore.innerText = `Your Final Score Is ${score}`
        if( score > localStorage.getItem('hScore')){
        highestScore.innerText = `The New Highest Score Is ${score}`
        localStorage.setItem('hScore',score);
        }
        else if (score < localStorage.getItem('hScore')){
            let currentHighest = localStorage.getItem('hScore')
            highestScore.innerText = `Highest score is ${currentHighest}` 
        }
    }
})


document.querySelector('#opt2').addEventListener('click', (event) =>{
    let option2 = document.querySelector('#opt-2')
    if(option2.innerText === countries[count].capital){
        score++;
        if(count === countries.length-1){
            count = countRandom;
        }
        count++;
        randomSelection()
        totalScore.innerText = `Your score is ${score}`
        finalScore.innerText = `Your Final Score Is ${score}`
        if( score > localStorage.getItem('hScore')){
            highestScore.innerText = `The New Highest Score Is ${score}`
            localStorage.setItem('hScore',score);
            }
            else if (score< localStorage.getItem('hScore')){
                let currentHighest = localStorage.getItem('hScore')
                highestScore.innerText = `Highest score is ${currentHighest}` 
            }
    }
})



document.querySelector('#opt3').addEventListener('click', (event) =>{
    let option3 = document.querySelector('#opt-3')
    if(option3.innerText === countries[count].capital){
        score++;
        if(count === countries.length-1){
            count = countRandom;
        }
        count++;
        randomSelection()
        totalScore.innerText = `Your score is ${score}`
        finalScore.innerText = `Your Final Score Is ${score}`
        if( score > localStorage.getItem('hScore')){
            highestScore.innerText = `The New Highest Score Is ${score}`
            localStorage.setItem('hScore', score);
            }
            else if (score< localStorage.getItem('hScore')){
                let currentHighest = localStorage.getItem('hScore')
                highestScore.innerText = `Highest score is ${currentHighest}` 
            }
    }
})



  document.querySelector('#opt4').addEventListener('click', (event) =>{
     let option4 = document.querySelector('#opt-4')
        if(option4.innerText === countries[count].capital){
            score++;
            if(count === countries.length-1){
                count = countRandom;
            }
            count++;
            randomSelection()
            totalScore.innerText = `Your score is ${score}`
            finalScore.innerText = `Your Final Score Is ${score}`
            if( score > localStorage.getItem('hScore')){
                highestScore.innerText = `The New Highest Score Is ${score}`
                localStorage.setItem('hScore', score);
                }
            else if (score< localStorage.getItem('hScore')){
                let currentHighest = localStorage.getItem('hScore')
                highestScore.innerText = `Highest score is ${currentHighest}`
            }
        }
    })

    document.querySelector('#skipButton').addEventListener('click', (event) =>{
        if(count === countries.length-1){
            count = countRandom;
        }
        count++;
        randomSelection()
    })


})                
