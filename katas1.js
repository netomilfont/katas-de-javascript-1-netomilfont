function oneThroughTwenty() {
  let contador = []
  for(let i = 1; i <= 20; i++) {
    contador.push(i)
  }
  return contador
}

console.log(oneThroughTwenty())


function evensToTwenty() {
    
  let contador = []
  for(let i = 1; i <= 20; i++ ) {
    if( i % 2 == 0) {
      contador.push(i)
    }
  }
  return contador
}

console.log(evensToTwenty())

function oddsToTwenty() {
    
  let contador = []
 for(let i = 1; i <= 20; i++) {

  if(i % 2 !== 0) {
    contador.push(i)

  } 
 }
  return contador
}


console.log(oddsToTwenty())

function multiplesOfFive() {
    
  let contador = []
  for(let i = 1; i <=100; i++) {
    if( i % 5 == 0) {
      contador.push(i)
    }
  }
  return contador
}

console.log(multiplesOfFive())

function squareNumbers() {
    
  let contador = []
  for(let i = 1; i<=10; i++) {
    quadradoPerfeito = i ** 2
    contador.push(quadradoPerfeito) 
  }
   return contador
 }
 
 console.log(squareNumbers())
 

function countingBackwards() {
    
  let contador = []
  for( let i = 20; i >= 1; i--) {
    contador.push(i)
  }
  return contador
}


console.log(countingBackwards())

function evenNumbersBackwards() {
    
  let contador = []
  for(let i = 20; i >= 1; i--) {
    if(i % 2 == 0) {
      contador.push(i)
    }
  }
  return contador
}

console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
    
  let contador = []
  for(let i = 20; i >= 1; i--) {
    if(i % 2 !== 0) {
      contador.push(i)
    }
  }
  return contador
}

console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
    
  let contador = []
  for( let i = 100; i >= 1; i--) {
      if(i % 5 == 0) {
        contador.push(i)
      }
  }
  return contador
}

console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
    
   let contador = []
   for(let i = 10; i >= 1; i--) {
    quadradoPerfeito = i ** 2
    contador.push(quadradoPerfeito)
   }
   return contador
}

console.log(squareNumbersBackwards())
