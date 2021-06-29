//First class Ticket increase
document.getElementById("firstClass-Inc-Btn").addEventListener("click", function(){
    ticketTypeChange('firstClass', true);
});

//First Class ticket decrease
document.getElementById("firstClass-Dec-Btn").addEventListener("click", function(){
    ticketTypeChange('firstClass', false);
});

//economy ticket increase
document.getElementById("economy-Inc-Btn").addEventListener("click", function(){
    ticketTypeChange('economy', true);
});

//economy ticket decrease
document.getElementById("economy-Dec-Btn").addEventListener("click", function(){
    ticketTypeChange('economy', false);
});


function ticketTypeChange(ticket, isIncrease){
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketCount = parseInt(ticketInput.value);
    // const economyNewCount = economyCount + 1;
    let ticketNewCount = ticketCount;
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    // const economyTotal = ticketNewCount * 100;
    let ticketTotal = 0;
    if(ticket == 'firstClass'){
        ticketTotal = ticketNewCount * 150;
    }
    if(ticket == 'economy'){
        ticketTotal = ticketNewCount * 100;
    }
    //document.getElementById("subtotal").innerText = '$' + ticketTotal;
    calculateTotal();
}

function calculateTotal(){
    const firstClassCount = getInput('firstClass');
    const economyCount = getInput('economy');

    const totalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('subtotal').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 10 / 100) ;
    document.getElementById("tax-amount").innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById("grand-total").innerText = '$' + grandTotal;
}

function getInput(ticket){
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

function displayMessage(){
    let FirstClassCount     = document.getElementById("firstClass-count").value;
    let economyCount   = document.getElementById("economy-count").value;
    let Total = document.getElementById("grand-total").innerText;
    
    alert("First Class Ticket Quantity :  " + FirstClassCount);
    alert("Economy Ticket Quantity :  " + economyCount);
    alert("Total  price :  " + Total);
}
// function ticketFirstClass(isIncrease){
//     const firstClassInput = document.getElementById("firstClass-count");
//     const firstClassCount = parseInt(firstClassInput.value);
//     // const firstClassNewCount = firstClassCount + 1;
//     let firstClassNewCount = firstClassCount;
//     if(isIncrease == true){
//         firstClassNewCount = firstClassCount + 1;
//     }
//     if(isIncrease == false && firstClassCount > 0){
//         firstClassNewCount = firstClassCount - 1;
//     }
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById("subtotal").innerText = '$' + firstClassTotal;
// }

// function ticketEconomy(isIncrease){
//     const economyInput = document.getElementById("economy-count");
//     const economyCount = parseInt(economyInput.value);
//     // const economyNewCount = economyCount + 1;
//     let economyNewCount = economyCount;
//     if(isIncrease == true){
//         economyNewCount = economyCount + 1;
//     }
//     if(isIncrease == false && economyCount > 0){
//         economyNewCount = economyCount - 1;
//     }
//     economyInput.value = economyNewCount;
//     const economyTotal = economyNewCount * 100;
//     document.getElementById("subtotal").innerText = '$' + economyTotal;
// }

// document.getElementById("economy-Inc-Btn").addEventListener("click", function(){
//     const economyInput = document.getElementById("economy-count");
//     const economyCount = parseInt(economyInput.value);
//     const economyNewCount = economyCount + 1;
//     economyInput.value = economyNewCount;
//     const economyTotal = economyNewCount * 100;
//     document.getElementById("subtotal").innerText = '$' + economyTotal;
// });

// document.getElementById("economy-Dec-Btn").addEventListener("click", function(){
//     const economyInput = document.getElementById("economy-count");
//     const economyCount = parseInt(economyInput.value);
//     const economyNewCount = economyCount - 1;
//     economyInput.value = economyNewCount;
//     const economyTotal = economyNewCount * 100;
//     document.getElementById("subtotal").innerText = '$' + economyTotal;
// });
// document.getElementById("firstClass-Inc-Btn").addEventListener("click", function(){
//     const firstClassInput = document.getElementById("firstClass-count");
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount + 1;
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById("subtotal").innerText = '$' + firstClassTotal;
// })

// document.getElementById("firstClass-Dec-Btn").addEventListener("click", function(){
//     const firstClassInput = document.getElementById("firstClass-count");
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount - 1;
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById("subtotal").innerText = '$' + firstClassTotal;
// })