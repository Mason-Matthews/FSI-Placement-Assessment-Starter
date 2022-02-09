// HINT: You can delete this console.log after you no longer need it!

// First, tell us your name
let yourName = "Mason Matthews" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0// Gingerbread
let cc = 0// Chocolate Chip
let sugar = 0 // Sugar Sprinkle



// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`



// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')

    //increment gingerbread cookies by 1
    gb++
    //updates the html quantity.
    document.querySelector('#qty-gb').innerHTML = gb
    document.querySelector('#qty-total').innerHTML++
})

gbMinusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread - button was clicked!')
    //checks to see if quantity of gingerbread cookies is above one
    if(gb > 0){
        //decreases cookies by 1
        gb--
        //updates the html quantity
        document.querySelector('#qty-gb').innerHTML = gb
        document.querySelector('#qty-total').innerHTML--
    }



})
// Event listener for clicks on the "+" button for Chocolate Chip cookies
ccPlusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Chocolate Chip + button was clicked!')

    //increment Chocolate Chip cookies by 1
    cc++
    //updates the html quantity.
    document.querySelector('#qty-cc').innerHTML = cc
    document.querySelector('#qty-total').innerHTML++

})
// Event listener for clicks on the "-" button for Chocolate Chip cookies
ccMinusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Chocolate Chip - button was clicked!')
    //checks to see if quantity of Chocolate Chip cookies is above one
    if(cc > 0){
        //decreases cookies by 1
        cc--
        //updates the html quantity
        document.querySelector('#qty-cc').innerHTML = cc
        document.querySelector('#qty-total').innerHTML--
    }


// Event listener for clicks on the "+" button for Sugar cookies
sugarPlusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Sugar Sprinkle + button was clicked!')
    
    //increment Sugar cookies by 1
    sugar++
    //updates the html quantity.
    document.querySelector('#qty-sugar').innerHTML = sugar
    document.querySelector('#qty-total').innerHTML++
    })

    // Event listener for clicks on the "+" button for Sugar cookies
sugarMinusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Sugar Sprinkle - button was clicked!')
    //checks to see if quantity of Sugar cookies is above one
    if(sugar> 0){
        //decreases cookies by 1
        sugar--
        //updates the html quantity
        document.querySelector('#qty-sugar').innerHTML = sugar
        document.querySelector('#qty-total').innerHTML--
        }
    })
})


