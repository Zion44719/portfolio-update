
// const calculator = document.querySelector('.calculator')
// const keys = calculator.querySelector('.calculator__keys')

// const previousKeyType = calculator.dataset.previousKeyType

// const key = e.target
// const action = key.dataset.action
// const keyContent = key.textContent
// const displayedNum = display.textContent

// keys.addEventListener('click', e => {
//     if (e.target.matches('button')) {
    
//     // Remove .is-depressed class from all keys
//     Array.from(key.parentNode.children)
//       .forEach(k => k.classList.remove('is-depressed'))
//   } if (!action) {
//     if (displayedNum === '0' || previousKeyType === 'operator') {
//       display.textContent = keyContent
//     } else {
//       display.textContent = displayedNum + keyContent
//     }
//   }
// })
//      if (!action) {
//         if (displayedNum === '0') {
//         display.textContent = keyContent
//         }  else {
//             display.textContent = displayedNum + keyContent
//         } if (action === 'calculate') {
//             const secondValue = displayedNum
//             // ...
//           } if (
//             action === 'add' ||
//             action === 'subtract' ||
//             action === 'multiply' ||
//             action === 'divide'
//           ) {
//             // ...
//             calculator.dataset.firstValue = displayedNum
//             calculator.dataset.operator = action
//           } if (action === 'calculate') {
//             const firstValue = calculator.dataset.firstValue
//             const operator = calculator.dataset.operator
//             const secondValue = displayedNum
            
//             display.textContent = calculate(firstValue, operator, secondValue)
          
//     } if (
//         action === 'add' ||
//         action === 'subtract' ||
//         action === 'multiply' ||
//         action === 'divide'
//       ) {
//         key.classList.add('is-depressed')
//       } if (action === 'decimal') {
//         calculator.dataset.previousKeyType = 'operator'
//       }
      
//       if (action === 'clear') {
//         console.log('clear key!')
//       }
      
//       if (action === 'calculate') {
//         console.log('equal key!')
//       } if (action === 'decimal') {
//         display.textContent = displayedNum + '.'
//       } if (action === 'calculate') {
//         const firstValue = calculator.dataset.firstValue
//         const operator = calculator.dataset.operator
//         const secondValue = displayedNum
        
//         display.textContent = calculate(firstValue, operator, secondValue)
      
//     }} 
    
//     const calculate = (n1, operator, n2) => {
//         let result = ''
        
//         if (operator === 'add') {
//           result = n1 + n2
//         } else if (operator === 'subtract') {
//           result = n1 - n2
//         } else if (operator === 'multiply') {
//           result = n1 * n2
//         } else if (operator === 'divide') {
//           result = n1 / n2
//         }
        
//         return result
//       } 
//       const calculate = (n1, operator, n2) => {
//         let result = ''
        
//         if (operator === 'add') {
//           result = parseFloat(n1) + parseFloat(n2)
//         } else if (operator === 'subtract') {
//           result = parseFloat(n1) - parseFloat(n2)
//         } else if (operator === 'multiply') {
//           result = parseFloat(n1) * parseFloat(n2)
//         } else if (operator === 'divide') {
//           result = parseFloat(n1) / parseFloat(n2)
//         }
        
//         return result
//       } // Do nothing if string has a dot
//       if (!displayedNum.includes('.')) {
//         display.textContent = displayedNum + '.'
//       }
//       if (!action) {
//         // ...
//         calculator.dataset.previousKey = 'number'
//       }
      
//       if (action === 'decimal') {
//         // ...
//         calculator.dataset.previousKey = 'decimal'
//       }
      
//       if (action === 'clear') {
//         // ...
//         calculator.dataset.previousKeyType = 'clear'
//       }
      
//       if (action === 'calculate') {
//        // ...
//         calculator.dataset.previousKeyType = 'calculate'
//       }if (action === 'decimal') {
//         if (!displayedNum.includes('.')) {
//           display.textContent = displayedNum + '.'
//         } else if (previousKeyType === 'operator') {
//           display.textContent = '0.'
//         }
        
//       calculator.dataset.previousKeyType = 'decimal'
//       }if (
//         action === 'add' ||
//         action === 'subtract' ||
//         action === 'multiply' ||
//         action === 'divide'
//       ) {
//         const firstValue = calculator.dataset.firstValue
//         const operator = calculator.dataset.operator
//         const secondValue = displayedNum
        
//       // Note: It's sufficient to check for firstValue and operator because secondValue always exists
//         if (firstValue && operator) {
//           display.textContent = calculate(firstValue, operator, secondValue)
//         }
        
//       key.classList.add('is-depressed')
//         calculator.dataset.previousKeyType = 'operator'
//         calculator.dataset.firstValue = displayedNum
//         calculator.dataset.operator = action
//       }if (
//         firstValue &&
//         operator &&
//         previousKeyType !== 'operator'
//       ) {
//         display.textContent = calculate(firstValue, operator, secondValue)
//       }if (
//         firstValue &&
//         operator &&
//         previousKeyType !== 'operator'
//       ) {
//         const calcValue = calculate(firstValue, operator, secondValue)
//         display.textContent = calcValue
        
//       // Update calculated value as firstValue
//         calculator.dataset.firstValue = calcValue
//       } else {
//         // If there are no calculations, set displayedNum as the firstValue
//         calculator.dataset.firstValue = displayedNum
//       }
      
//       key.classList.add('is-depressed')
//       calculator.dataset.previousKeyType = 'operator'
//       calculator.dataset.operator = action

//       if (action === 'calculate') {
//         const firstValue = calculator.dataset.firstValue
//         const operator = calculator.dataset.operator
//         const secondValue = displayedNum
        
//       if (firstValue) {
//           display.textContent = calculate(firstValue, operator, secondValue)
//         }
        
//       calculator.dataset.previousKeyType = 'calculate'
//       }if (action === 'calculate') {
//         let firstValue = calculator.dataset.firstValue
//         const operator = calculator.dataset.operator
//         const secondValue = displayedNum
        
//       if (firstValue) {
//           if (previousKeyType === 'calculate') {
//             firstValue = displayedNum
//           }
          
//       display.textContent = calculate(firstValue, operator, secondValue)
//         }
        
//       calculator.dataset.previousKeyType = 'calculate'
//       }if (action === 'calculate') {
//   let firstValue = calculator.dataset.firstValue
//   const operator = calculator.dataset.operator
//   const secondValue = displayedNum
  
// if (firstValue) {
//     if (previousKeyType === 'calculate') {
//       firstValue = displayedNum
//     }
    
// display.textContent = calculate(firstValue, operator, secondValue)
//   }
  
// calculator.dataset.previousKeyType = 'calculate'
// }if (action === 'calculate') {
//     let firstValue = calculator.dataset.firstValue
//     const operator = calculator.dataset.operator
//     const secondValue = displayedNum
    
//   if (firstValue) {
//       if (previousKeyType === 'calculate') {
//         firstValue = displayedNum
//       }
      
//   display.textContent = calculate(firstValue, operator, secondValue)
//     }
    
//   // Set modValue attribute
//     calculator.dataset.modValue = secondValue
//     calculator.dataset.previousKeyType = 'calculate'
//   }if (firstValue) {
//     if (previousKeyType === 'calculate') {
//       firstValue = displayedNum
//       secondValue = calculator.dataset.modValue
//     }
    
//   display.textContent = calculate(firstValue, operator, secondValue)
//   }if (!action) {
//     if (
//       displayedNum === '0' ||
//       previousKeyType === 'operator' ||
//       previousKeyType === 'calculate'
//     ) {
//       display.textContent = keyContent
//     } else {
//       display.textContent = displayedNum + keyContent
//     }
//     calculator.dataset.previousKeyType = 'number'
//   }
  
//   if (action === 'decimal') {
//     if (!displayedNum.includes('.')) {
//       display.textContent = displayedNum + '.'
//     } else if (
//       previousKeyType === 'operator' ||
//       previousKeyType === 'calculate'
//     ) {
//       display.textContent = '0.'
//     }
    
//   calculator.dataset.previousKeyType = 'decimal'
//   }if (
//     action === 'add' ||
//     action === 'subtract' ||
//     action === 'multiply' ||
//     action === 'divide'
//   ) {
//     // ...
    
//   if (
//       firstValue &&
//       operator &&
//       previousKeyType !== 'operator' &&
//       previousKeyType !== 'calculate'
//     ) {
//       const calcValue = calculate(firstValue, operator, secondValue)
//       display.textContent = calcValue
//       calculator.dataset.firstValue = calcValue
//     } else {
//       calculator.dataset.firstValue = displayedNum
//     }
    
//   // ...
//   }if (action !== 'clear') {
//     const clearButton = calculator.querySelector('[data-action=clear]')
//     clearButton.textContent = 'CE'
//   }if (action === 'clear') {
//     display.textContent = 0
//     key.textContent = 'AC'
//     calculator.dataset.previousKeyType = 'clear'
//   }if (action === 'clear') {
//     if (key.textContent === 'AC') {
//       calculator.dataset.firstValue = ''
//       calculator.dataset.modValue = ''
//       calculator.dataset.operator = ''
//       calculator.dataset.previousKeyType = ''
//     } else {
//       key.textContent = 'AC'
//     }
    
//   display.textContent = 0
//     calculator.dataset.previousKeyType = 'clear'
//   }
//   const calculate = (n1, operator, n2) => {
//     let result = ''
//     if (operator === 'add') {
//       result = firstNum + parseFloat(n2)
//     } else if (operator === 'subtract') {
//       result = parseFloat(n1) - parseFloat(n2)
//     } else if (operator === 'multiply') {
//       result = parseFloat(n1) * parseFloat(n2)
//     } else if (operator === 'divide') {
//       result = parseFloat(n1) / parseFloat(n2)
//     }
    
//     return result
//   }
//   const calculate = (n1, operator, n2) => {
//     if (operator === 'add') {
//       return firstNum + parseFloat(n2)
//     } else if (operator === 'subtract') {
//       return parseFloat(n1) - parseFloat(n2)
//     } else if (operator === 'multiply') {
//       return parseFloat(n1) * parseFloat(n2)
//     } else if (operator === 'divide') {
//       return parseFloat(n1) / parseFloat(n2)
//     }
//   }
//   const calculate = (n1, operator, n2) => {
//     if (operator === 'add') {
//       return firstNum + parseFloat(n2)
//     }
    
//     if (operator === 'subtract') {
//       return parseFloat(n1) - parseFloat(n2)
//     }
    
//     if (operator === 'multiply') {
//       return parseFloat(n1) * parseFloat(n2)
//     }
    
//     if (operator === 'divide') {
//       return parseFloat(n1) / parseFloat(n2)
//     }
//   }
//   const calculate = (n1, operator, n2) => {
//     if (operator === 'add') return parseFloat(n1) + parseFloat(n2)
//     if (operator === 'subtract') return parseFloat(n1) - parseFloat(n2)
//     if (operator === 'multiply') return parseFloat(n1) * parseFloat(n2)
//     if (operator === 'divide') return parseFloat(n1) / parseFloat(n2)
//   }
//   const calculate = (n1, operator, n2) => {
//     const firstNum = parseFloat(n1)
//     const secondNum = parseFloat(n2)
//     if (operator === 'add') return firstNum + secondNum
//     if (operator === 'subtract') return firstNum - secondNum
//     if (operator === 'multiply') return firstNum * secondNum
//     if (operator === 'divide') return firstNum / secondNum
//   }

//   keys.addEventListener('click', e => {
//     if (e.target.matches('button')) {
    
//       if (!action) { /* ... */ }
      
//       if (action === 'add' ||
//         action === 'subtract' ||
//         action === 'multiply' ||
//         action === 'divide') {
//         /* ... */
//       }
      
//       if (action === 'clear') { /* ... */ }
//       if (action !== 'clear') { /* ... */ }
//       if (action === 'calculate') { /* ... */ }
//     }
//   })

// //   / Don't do this!
// // const handleNumberKeys = (/* ... */) => {/* ... */}
// // const handleOperatorKeys = (/* ... */) => {/* ... */}
// // const handleDecimalKey = (/* ... */) => {/* ... */}
// // const handleClearKey = (/* ... */) => {/* ... */}
// // const handleCalculateKey = (/* ... */) => {/* ... */}

//   keys.addEventListener('click', e => {
//     // Pure function
//     const resultString = createResultString(/* ... */)
    
//     // Impure stuff
//     display.textContent = resultString
//     updateCalculatorState(/* ... */)
//   }) 
//   return 'some value'

//   if (!action) {
//     if (
//       displayedNum === '0' ||
//       previousKeyType === 'operator' ||
//       previousKeyType === 'calculate'
//     ) {
//       display.textContent = keyContent
//     } else {
//       display.textContent = displayedNum + keyContent
//     }
//     calculator.dataset.previousKeyType = 'number'
//   }

//   const createResultString = () => {
//     if (!action) {
//       if (
//         displayedNum === '0' ||
//         previousKeyType === 'operator' ||
//         previousKeyType === 'calculate'
//       ) {
//         return keyContent
//       } else {
//         return displayedNum + keyContent
//       }
//     }
//   }

//   const createResultString = () => {
//     if (action!) {
//       return displayedNum === '0' ||
//         previousKeyType === 'operator' ||
//         previousKeyType === 'calculate'
//         ? keyContent
//         : displayedNum + keyContent
//     }
//   }

//   const createResultString = () => {
//     // Variables required are:
//     // 1. keyContent
//     // 2. displayedNum
//     // 3. previousKeyType
//     // 4. action
    
//     if (action!) {
//       return displayedNum === '0' ||
//         previousKeyType === 'operator' ||
//         previousKeyType === 'calculate'
//         ? keyContent
//         : displayedNum + keyContent
//     }
//   }

//   if (action === 'decimal') {
//     if (!displayedNum.includes('.')) {
//       display.textContent = displayedNum + '.'
//     } else if (
//       previousKeyType === 'operator' ||
//       previousKeyType === 'calculate'
//     ) {
//       display.textContent = '0.'
//     }
    
//     calculator.dataset.previousKeyType = 'decimal'
//   }

//   const createResultString = () => {
//     // ...
    
//     if (action === 'decimal') {
//       if (!displayedNum.includes('.')) {
//         return = displayedNum + '.'
//       } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
//         return = '0.'
//       }
//     }
//   }

//   const createResultString = () => {
//     // ...
    
//     if (action === 'decimal') {
//       if (!displayedNum.includes('.')) return displayedNum + '.'
//       if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.'
//     }
//   }

//   const createResultString = () => {
//     // ...
    
//     if (action === 'decimal') {
//       if (!displayedNum.includes('.')) return displayedNum + '.'
//       if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.'
//       return displayedNum
//     }
//   }

//   const createResultString = () => {
//     // Variables required are:
//     // 1. keyContent
//     // 2. displayedNum
//     // 3. previousKeyType
//     // 4. action
//   }



//   if (
//     action === 'add' ||
//     action === 'subtract' ||
//     action === 'multiply' ||
//     action === 'divide'
//   ) {
//     const firstValue = calculator.dataset.firstValue
//     const operator = calculator.dataset.operator
//     const secondValue = displayedNum
    
//     if (
//       firstValue &&
//       operator &&
//       previousKeyType !== 'operator' &&
//       previousKeyType !== 'calculate'
//     ) {
//       const calcValue = calculate(firstValue, operator, secondValue)
//       display.textContent = calcValue
//       calculator.dataset.firstValue = calcValue
//     } else {
//       calculator.dataset.firstValue = displayedNum
//     }
    
//     key.classList.add('is-depressed')
//     calculator.dataset.previousKeyType = 'operator'
//     calculator.dataset.operator = action
//   }


//   const createResultString = () => {
//     // ...
//     if (
//       action === 'add' ||
//       action === 'subtract' ||
//       action === 'multiply' ||
//       action === 'divide'
//     ) {
//       const firstValue = calculator.dataset.firstValue
//       const operator = calculator.dataset.operator
//       const secondValue = displayedNum
      
//       if (
//         firstValue &&
//         operator &&
//         previousKeyType !== 'operator' &&
//         previousKeyType !== 'calculate'
//       ) {
//         return calculate(firstValue, operator, secondValue)
//       }
//     }
//   }


//   const createResultString = () => {
//     // ...
//     if (
//       action === 'add' ||
//       action === 'subtract' ||
//       action === 'multiply' ||
//       action === 'divide'
//     ) {
//       const firstValue = calculator.dataset.firstValue
//       const operator = calculator.dataset.operator
//       const secondValue = displayedNum
      
//       if (
//         firstValue &&
//         operator &&
//         previousKeyType !== 'operator' &&
//         previousKeyType !== 'calculate'
//       ) {
//         return calculate(firstValue, operator, secondValue)
//       } else {
//         return displayedNum
//       }
//     }
//   }


//   const createResultString = () => {
//     // ...
//     if (
//       action === 'add' ||
//       action === 'subtract' ||
//       action === 'multiply' ||
//       action === 'divide'
//     ) {
//       const firstValue = calculator.dataset.firstValue
//       const operator = calculator.dataset.operator
//       const secondValue = displayedNum
      
//       return firstValue &&
//         operator &&
//         previousKeyType !== 'operator' &&
//         previousKeyType !== 'calculate'
//         ? calculate(firstValue, operator, secondValue)
//         : displayedNum
//     }
//   }

//   const createResultString = () => {
//     // ...
//     if (
//       action === 'add' ||
//       action === 'subtract' ||
//       action === 'multiply' ||
//       action === 'divide'
//     ) {
//       const firstValue = calculator.dataset.firstValue
//       const operator = calculator.dataset.operator
      
//       return firstValue &&
//         operator &&
//         previousKeyType !== 'operator' &&
//         previousKeyType !== 'calculate'
//         ? calculate(firstValue, operator, displayedNum)
//         : displayedNum
//     }
//   }

//   const createResultString = () => {
//     // Variables & properties required are:
//     // 1. keyContent
//     // 2. displayedNum
//     // 3. previousKeyType
//     // 4. action
//     // 5. calculator.dataset.firstValue
//     // 6. calculator.dataset.operator
//   }

//   if (action === 'clear') {
//     if (key.textContent === 'AC') {
//       calculator.dataset.firstValue = ''
//       calculator.dataset.modValue = ''
//       calculator.dataset.operator = ''
//       calculator.dataset.previousKeyType = ''
//     } else {
//       key.textContent = 'AC'
//     }
    
//     display.textContent = 0
//     calculator.dataset.previousKeyType = 'clear'
//   }

//   const createResultString = () => {
//     // ...
//     if (action === 'clear') return 0
//   }

//   if (action === 'calculate') {
//     let firstValue = calculator.dataset.firstValue
//     const operator = calculator.dataset.operator
//     let secondValue = displayedNum
    
//     if (firstValue) {
//       if (previousKeyType === 'calculate') {
//         firstValue = displayedNum
//         secondValue = calculator.dataset.modValue
//       }
      
//       display.textContent = calculate(firstValue, operator, secondValue)
//     }
    
//     calculator.dataset.modValue = secondValue
//     calculator.dataset.previousKeyType = 'calculate'
//   }

//   if (action === 'calculate') {
//     let firstValue = calculator.dataset.firstValue
//     const operator = calculator.dataset.operator
//     let secondValue = displayedNum
    
//     if (firstValue) {
//       if (previousKeyType === 'calculate') {
//         firstValue = displayedNum
//         secondValue = calculator.dataset.modValue
//       }
//       display.textContent = calculate(firstValue, operator, secondValue)
//     }
//   }

//   const createResultString = () => {
//     // ...
    
//     if (action === 'calculate') {
//       let firstValue = calculator.dataset.firstValue
//       const operator = calculator.dataset.operator
//       let secondValue = displayedNum
      
//       if (firstValue) {
//         if (previousKeyType === 'calculate') {
//           firstValue = displayedNum
//           secondValue = calculator.dataset.modValue
//         }
//         return calculate(firstValue, operator, secondValue)
//       } else {
//         return displayedNum
//       }
//     }
//   }

//   const createResultString = () => {
//     // ...
    
//     if (action === 'calculate') {
//       const firstValue = calculator.dataset.firstValue
//       const operator = calculator.dataset.operator
//       const modValue = calculator.dataset.modValue
      
//       if (firstValue) {
//         return previousKeyType === 'calculate'
//           ? calculate(displayedNum, operator, modValue)
//           : calculate(firstValue, operator, displayedNum)
//       } else {
//         return displayedNum
//       }
//     }
//   }

//   const createResultString = () => {
//     // ...
    
//     if (action === 'calculate') {
//       const firstValue = calculator.dataset.firstValue
//       const operator = calculator.dataset.operator
//       const modValue = calculator.dataset.modValue
      
//       return firstValue
//         ? previousKeyType === 'calculate'
//           ? calculate(displayedNum, operator, modValue)
//           : calculate(firstValue, operator, displayedNum)
//         : displayedNum
//     }
//   }

//   const createResultString = () => {
//     // Variables & properties required are:
//     // 1. keyContent
//     // 2. displayedNum
//     // 3. previousKeyType
//     // 4. action
//     // 5. calculator.dataset.firstValue
//     // 6. calculator.dataset.operator
//     // 7. calculator.dataset.modValue
//   }

// //   Passing in necessary variables
// // We need seven properties/variables in createResultString:

// // keyContent
// // displayedNum
// // previousKeyType
// // action
// // firstValue
// // modValue
// // operator


// const createResultString = (key, displayedNum, state) => {
//     const keyContent = key.textContent
//     const action = key.dataset.action
//     const firstValue = state.firstValue
//     const modValue = state.modValue
//     const operator = state.operator
//     const previousKeyType = state.previousKeyType
//     // ... Refactor as necessary
//   }
  
//   // Using createResultString
//   keys.addEventListener('click', e => {
//     if (e.target.matches('button')) return
//     const displayedNum = display.textContent
//     const resultString = createResultString(e.target, displayedNum, calculator.dataset)
    
//     // ...
//   })

//   const createResultString = (key, displayedNum, state) => {
//     const keyContent = key.textContent
//     const { action } = key.dataset
//     const {
//       firstValue,
//       modValue,
//       operator,
//       previousKeyType
//     } = state
    
//     // ...
//   }

//   // If key is number
// if (!action) { /* ... */ }

// // If key is decimal
// if (action === 'decimal') { /* ... */ }

// // If key is operator
// if (
//   action === 'add' ||
//   action === 'subtract' ||
//   action === 'multiply' ||
//   action === 'divide'
// ) { /* ... */}

// // If key is clear
// if (action === 'clear') { /* ... */ }

// // If key is calculate
// if (action === 'calculate') { /* ... */ }


// if (keyType === 'number') { /* ... */ }
// if (keyType === 'decimal') { /* ... */ }
// if (keyType === 'operator') { /* ... */}
// if (keyType === 'clear') { /* ... */ }
// if (keyType === 'calculate') { /* ... */ }


// const getKeyType = (key) => {
//     const { action } = key.dataset
//     if (!action) return 'number'
//     if (
//       action === 'add' ||
//       action === 'subtract' ||
//       action === 'multiply' ||
//       action === 'divide'
//     ) return 'operator'
//     // For everything else, return the action
//     return action
//   }


//   const createResultString = (key, displayedNum, state) => {
//     const keyType = getKeyType(key)
    
//     if (keyType === 'number') { /* ... */ }
//     if (keyType === 'decimal') { /* ... */ }
//     if (keyType === 'operator') { /* ... */}
//     if (keyType === 'clear') { /* ... */ }
//     if (keyType === 'calculate') { /* ... */ }
//   }

//   const updateCalculatorState = (key) => {
//     const keyType = getKeyType(key)
    
//     if (keyType === 'number') { /* ... */ }
//     if (keyType === 'decimal') { /* ... */ }
//     if (keyType === 'operator') { /* ... */}
//     if (keyType === 'clear') { /* ... */ }
//     if (keyType === 'calculate') { /* ... */ }
//   }


//   const updateCalculatorState = (key, calculator) => {
//     const keyType = getKeyType(key)
    
//     if (!action) {
//       // ...
//       calculator.dataset.previousKeyType = 'number'
//     }
    
//     if (action === 'decimal') {
//       // ...
//       calculator.dataset.previousKeyType = 'decimal'
//     }
    
//     if (
//       action === 'add' ||
//       action === 'subtract' ||
//       action === 'multiply' ||
//       action === 'divide'
//     ) {
//       // ...
//       calculator.dataset.previousKeyType = 'operator'
//     }
    
//     if (action === 'clear') {
//       // ...
//       calculator.dataset.previousKeyType = 'clear'
//     }
    
//     if (action === 'calculate') {
//       calculator.dataset.previousKeyType = 'calculate'
//     }
//   }

//   const updateCalculatorState = (key, calculator) => {
//     const keyType = getKeyType(key)
//     calculator.dataset.previousKeyType = keyType
      
//     if (keyType === 'number') { /* ... */ }
//     if (keyType === 'decimal') { /* ... */ }
//     if (keyType === 'operator') { /* ... */}
//     if (keyType === 'clear') { /* ... */ }
//     if (keyType === 'calculate') { /* ... */ }
//   }


//   const updateCalculatorState = (key, calculator) => {
//     const keyType = getKeyType(key)
//     calculator.dataset.previousKeyType = keyType
    
//     Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
//   }


//   if (keyType === 'operator') {
//     if (firstValue &&
//         operator &&
//         previousKeyType !== 'operator' &&
//         previousKeyType !== 'calculate'
//     ) {
//       calculator.dataset.firstValue = calculatedValue
//     } else {
//       calculator.dataset.firstValue = displayedNum
//     }
    
//     key.classList.add('is-depressed')
//     calculator.dataset.operator = key.dataset.action
//   }

//   if (keyType === 'operator') {
//     key.classList.add('is-depressed')
//     calculator.dataset.operator = key.dataset.action
//     calculator.dataset.firstValue = firstValue &&
//       operator &&
//       previousKeyType !== 'operator' &&
//       previousKeyType !== 'calculate'
//       ? calculatedValue
//       : displayedNum
//   }

//   const updateCalculatorState = (key, calculator) => {
//     // Variables and properties needed
//     // 1. key
//     // 2. calculator
//     // 3. calculatedValue
//     // 4. displayedNum
//   }

// // Making updateCalculatorState for the clear key
// // Here???s the leftover code for the clear key:

// if (action === 'clear') {
//   if (key.textContent === 'AC') {
//     calculator.dataset.firstValue = ''
//     calculator.dataset.modValue = ''
//     calculator.dataset.operator = ''
//     calculator.dataset.previousKeyType = ''
//   } else {
//     key.textContent = 'AC'
//   }
// }

// if (action !== 'clear') {
//   const clearButton = calculator.querySelector('[data-action=clear]')
//   clearButton.textContent = 'CE'
// }


// if (action === 'calculate') {
//     let firstValue = calculator.dataset.firstValue
//     const operator = calculator.dataset.operator
//     let secondValue = displayedNum
    
//     if (firstValue) {
//       if (previousKeyType === 'calculate') {
//         firstValue = displayedNum
//         secondValue = calculator.dataset.modValue
//       }
      
//       display.textContent = calculate(firstValue, operator, secondValue)
//     }
    
//     calculator.dataset.modValue = secondValue
//     calculator.dataset.previousKeyType = 'calculate'
//   }

//   if (action === 'calculate') {
//     let secondValue = displayedNum
    
//     if (firstValue) {
//       if (previousKeyType === 'calculate') {
//         secondValue = calculator.dataset.modValue
//       }
//     }
    
//     calculator.dataset.modValue = secondValue
//   }

//   if (keyType === 'calculate') {
//     calculator.dataset.modValue = firstValue && previousKeyType === 'calculate'
//       ? modValue
//       : displayedNum
//   }


//   const updateCalculatorState = (key, calculator) => {
//     // Variables and properties needed
//     // 1. key
//     // 2. calculator
//     // 3. calculatedValue
//     // 4. displayedNum
//     // 5. modValue
//   }


//   const updateCalculatorState = (key, calculator, calculatedValue, displayedNum) => {
//     // ...
//   }
  
//   keys.addEventListener('click', e => {
//     if (e.target.matches('button')) return
    
//     const key = e.target
//     const displayedNum = display.textContent
//     const resultString = createResultString(key, displayedNum, calculator.dataset)
    
//     display.textContent = resultString
    
//     // Pass in necessary values
//     updateCalculatorState(key, calculator, resultString, displayedNum)
//   })


//   const updateVisualState = (key, calculator) => {
//     const keyType = getKeyType(key)
//     Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
    
//     if (keyType === 'operator') key.classList.add('is-depressed')
    
//     if (keyType === 'clear' && key.textContent !== 'AC') {
//       key.textContent = 'AC'
//     }
    
//     if (keyType !== 'clear') {
//       const clearButton = calculator.querySelector('[data-action=clear]')
//       clearButton.textContent = 'CE'
//     }
//   }

//   keys.addEventListener('click', e => {
//     if (e.target.matches('button')) return
//     const key = e.target
//     const displayedNum = display.textContent
    
//     // Pure functions
//     const resultString = createResultString(key, displayedNum, calculator.dataset)
    
//     // Update states
//     display.textContent = resultString
//     updateCalculatorState(key, calculator, resultString, displayedNum)
//     updateVisualState(key, calculator)
//   })



//Calculator

const calculate = function (n1, operator, n2) {
    const firstNum = parseFloat(n1)
    const secondNum = parseFloat(n2)
      switch (operator) {
        case 'add': return firstNum + secondNum;
        case 'subtract': return firstNum - secondNum;
        case 'multiply': return firstNum * secondNum;
        case 'divide': return firstNum / secondNum;
      }   
  }
  
  const getKeyType = key => {
    const { action } = key.dataset
    if (!action) return 'number'
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) return 'operator'
    return action
  } 
  
  const createResultString = (key, displayedNum, state) => {
    const keyContent = key.textContent
    const keyType = getKeyType(key)
    const {
      firstValue,
      operator, 
      modValue,
      previousKeyType,
    } = state
      
      if (keyType === 'number') {
        return displayedNum === '0' || 
            previousKeyType === 'operator' || 
            previousKeyType === 'calculate'
            ? keyContent
            : displayedNum + keyContent
    }
  
    if (keyType === 'decimal') {
          if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.'
          if (!displayedNum.includes('.')) return displayedNum + '.'    
          return displayedNum 
      }
  
    if (keyType === 'operator') {
      return firstValue && 
        operator && 
        previousKeyType !== 'operator' &&       
        previousKeyType !== 'calculate'
        ? calculate(firstValue, operator, displayedNum)
        : displayedNum      
    } 
  
    if (keyType === 'clear') return 0
  
    if (keyType === 'calculate') {     
    return firstValue     
      ? previousKeyType === 'calculate'          
        ? calculate(displayedNum, operator, modValue)
        : calculate(firstValue, operator, displayedNum)
      : displayedNum
      }
  }
  
  const updateCalculatorState = (key, calculator, calculatedValue, displayedNum) => {
  
      const keyType = getKeyType(key)
      const {
        firstValue,
        operator,
        modValue,
        previousKeyType
      } = calculator.dataset
  
      calculator.dataset.previousKeyType = keyType
  
    if (keyType === 'operator') {
      calculator.dataset.operator = key.dataset.action
      calculator.dataset.firstValue = firstValue && 
        operator && 
        previousKeyType !== 'operator' && 
        previousKeyType !== 'calculate'
        ? calculatedValue
        : displayedNum  
    }
  
    if (keyType === 'calculate') {
      calculator.dataset.modValue = firstValue && previousKeyType === 'calculate'
          ? modValue
          : displayedNum
    }
  
    if (keyType === 'clear' && key.textContent === 'AC') {
          calculator.dataset.firstValue = ''
          calculator.dataset.operator = ''
          calculator.dataset.modValue = ''
          calculator.dataset.previousKeyType = ''
        } 
  } 
  
  const updateVisualState = (key, calculator) => {
    const keyType = getKeyType(key)
    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
  
    if (keyType === 'operator') key.classList.add('is-depressed')
  
    if (keyType === 'clear' && key.textContent !== 'AC') key.textContent = 'AC'
  
    if (keyType !== 'clear') {
      const clearButton = calculator.querySelector('[data-action=clear]')  
      clearButton.textContent = 'CE'
    }
  }
  
  const calculator = document.querySelector('.calculator');
  const keys = calculator.querySelector('.calculator__keys');
  const display = document.querySelector('.calculator__display');
  
  keys.addEventListener('click', e => {
    if (!e.target.matches('button')) return
      const key = e.target
      const displayedNum = display.textContent;
      const resultString = createResultString(key, displayedNum, calculator.dataset)
  
    display.textContent = resultString 
    updateCalculatorState(key, calculator, resultString, displayedNum)
    updateVisualState(key, calculator)
      
})
