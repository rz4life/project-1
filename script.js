fetch(`https://restcountries.eu/rest/v2/all?fields=name;capital`).then(async(response) =>{
 const data = await response.json()
 let countries = [];
 let easyCountries = [
    {name: 'USA', capital: 'Washignton. D.C'},
    {capital: "Brasília",name: "Brazil"},
    {name: "Egypt", capital: "Cairo"},
    {name: "France", capital: "Paris"},
    {name: "Germany", capital: "Berlin"},
    {name: "Italy", capital: "Rome"},
    {name: "Japan", capital: "Tokyo"},
    {name: "Kenya", capital: "Nairobi"},
    {name: "Nigeria", capital: "Abuja"},
    {name: "Singapore", capital: "Singapore"},
    {name: "Spain", capital: "Madrid"},
    {name: 'Great Britain', capital: "London"},
    {name: "Mexico", capital: "Mexico City"},
    {name: "Ghana", capital: "Accra"},
    {name: "Greece", capital: "Athens"},
    {name: "Canada", capital: "Ottawa"},
    {name: "Iraq", capital: "Baghdad"},
    {name: "Ireland", capital: "Dublin"},
    {name: "Luxembourg", capital: "Luxembourg"},
    {name: "Russian Federation", capital: "Moscow"},
    {name: "Korea (Republic of)", capital: "Seoul"},
    {name: "Netherlands", capital: "Amsterdam"},
    {name: "Monaco", capital: "Monaco"},
    {name: "China", capital: "Beijing"},
    {name: "United Arab Emirates", capital: "Abu Dhabi"},
    {name: "Belgium", capital: "Brussels"},
    {name: "Colombia", capital: "Bogotá"},
    {name: "Morocco", capital: "Rabat"},
    {name: "Panama", capital: "Panama City"},
    {name: "Argentina", capital: "Buenos Aires"},
 ];
 let remainingTime = 60;
 let mode ='easy';
 let interval
 console.log(data)
 for(i=0; i<data.length; i++){
    // console.log(data[i].capital)
 if( data[i].capital !== ""){
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

 console.log(countries)
 let score = 0;   
 let arrNum = []
 let startButton = document.querySelector('.start-button')
 let question = document.querySelector('.question')
 let answerButton = document.querySelectorAll('.buttonOpt')
 let easyButton = document.querySelector('.easy-button')
 let hardButton = document.querySelector('.hard-button')
 let countRandom = 0;
 if( mode === 'easy'){
    countRandom = Math.floor(Math.random() * easyCountries.length)
 }else if (mode === 'hard'){
    countRandom = Math.floor(Math.random() * countries.length)
 }
 if( mode === 'easy'){
    while (arrNum.length < 4){
        let randomNum2 = Math.floor(Math.random() * easyCountries.length)
        if (!arrNum.includes (randomNum2)){
            arrNum.push (randomNum2)
        }
    }
 }else if (mode === 'hard'){
    while (arrNum.length < 4){
        let randomNum2 = Math.floor(Math.random() * countries.length)
        if (!arrNum.includes (randomNum2)){
            arrNum.push (randomNum2)
        }
    }
 }

 let count = countRandom;

 easyButton.addEventListener('click', () => {
   mode = 'easy'
   console.log(mode)
 })

 hardButton.addEventListener('click', () => {

 mode = 'hard'
 console.log(mode)
 })

  startButton.addEventListener('click', () => {
    document.querySelector('.page-1').classList.add('hidden')
    document.querySelector('#page-2').classList.remove('hidden')
    remainingTime = 60;
    if( mode === 'easy'){
        countRandom = Math.floor(Math.random() * easyCountries.length)
        count = countRandom;
     }else if (mode === 'hard'){
        countRandom = Math.floor(Math.random() * countries.length)
        count = countRandom;
     }
     let timer = document.querySelector('.timer')
     timer.innerText = `you have ${remainingTime}seconds left`
    console.log(mode)
    modeSelection();

    interval = setInterval(() => {
        remainingTime --;
        let timer = document.querySelector('.timer')
        timer.innerText = `you have ${remainingTime} left`
    }, 1000);
    setTimeout(function(){
        
        document.querySelector('#page-2').classList.add('hidden')
        document.querySelector('#page-3').classList.remove('hidden')
        let currentHighest = localStorage.getItem('hScore') 
    }, 60000);
 })
 remainingTime = 60;


 document.querySelector('#restartButton').addEventListener('click', (event) =>{
   
    if( mode === 'easy'){
        countRandom = Math.floor(Math.random() * easyCountries.length)
    }else if (mode === 'hard'){
        countRandom = Math.floor(Math.random() * countries.length)
    }
    
    count = countRandom++;
    score = 0;  
    document.querySelector('#page-3').classList.add('hidden')
    document.querySelector('.page-1').classList.remove('hidden')
    totalScore.innerText = `Your score is ${score}`
    remainingTime = 60;
    clearInterval(interval)
 })


 let easyrandomSelection = () =>{
        let answerInner = []
        let ansRan = Math.floor(Math.random() * 4)
        question.innerText = `The Country is ${easyCountries[count].name}`
        for(let j= 0; j < 4; j++){      
            answerButton[j].innerText = easyCountries[arrNum[j]].capital
            answerInner.push(answerButton[j].innerText )
         }
        if(!answerInner.includes(easyCountries[count].capital)){
            answerButton[ansRan].innerText = easyCountries[count].capital
        } 

 }

 let randomSelection = () =>{
    let answerInner = []
    let ansRan = Math.floor(Math.random() * 4)
    question.innerText = `The Country is ${countries[count].name}`
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


 let compareAnswer = ()  =>{
 if (mode === 'easy'){
     return easyCountries
 }else if (mode === 'hard'){
     return countries
 }

 }



 document.querySelector('#opt1').addEventListener('click', (event) =>{
    let option1 = document.querySelector('#opt-1')
    //console.log(countries[count])
    if(option1.innerText === compareAnswer()[count].capital ){
        
        score++;
        if(count === countries.length-1 || count === easyCountries.length-1){
            count = countRandom;
        }
        count++;
        console.log(count)
        modeSelection()
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
    if(option2.innerText === compareAnswer()[count].capital){

        score++;
        if(count === countries.length-1 || count === easyCountries.length-1){
            count = countRandom;
        }
        count++;
        console.log(count)
        modeSelection()
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
    if(option3.innerText === compareAnswer()[count].capital){
        score++;
        if(count === countries.length-1 || count === easyCountries.length-1){
            count = countRandom;
        }
        count++;
        console.log(count)
        modeSelection()
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
        if(option4.innerText === compareAnswer()[count].capital){
            score++;
            if(count === countries.length-1 || count === easyCountries.length-1){
                count = countRandom;
            }
            count++;
            console.log(count)
            modeSelection()
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
        if(count === countries.length-1 || count === easyCountries.length-1){
            count = countRandom;
        }
        count++;
        console.log(count)
        modeSelection()
    })
 let modeSelection = ()=>{
    if(mode === 'easy'){
        easyrandomSelection();
    }else if (mode === 'hard') {
        randomSelection();
    }
 }


})                
