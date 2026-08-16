# Project related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-b5vwsm3e?file=1-colorChanger%2Findex.html)

# Solution code

## project 1

```javascript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id == 'gray'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  })
})
```

## project 2

```javascript
const form = document.querySelector('form')

// this usercase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  } 
  else{
    const bmi = (weight / ((height*height) / 10000)).toFixed(2)
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if(bmi < 18.6){
      bmiMssg.innerHTML = `<span><p>Underweight</p></span>`;
    }
    else if(18.6 > bmi < 24.9){
      bmiMssg.innerHTML = `<span><p>Normal range</p></span>`;
    }
    else{
      bmiMssg.innerHTML = `<span><p>Overweight</p></span>`;
    }
      
  }
  
});
```

## project 3
```javascript
const clock = document.getElementById('clock')
// document.querySelector('#clock')

// let date =  new Date()
// console.log(date.toLocaleTimeString());

setInterval(function(){
  let date =  new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```