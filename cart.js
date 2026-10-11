"use strict";

const incrementButtons = document.querySelectorAll(".increment");

const decrementButtons = document.querySelectorAll(".decrement");

let preTaxAndDeliveryAmount = 0;
let deliveryFee = 0;
let taxFee = 0;
let finalAmount = 0;
const deliveryRate = 0.055;
const taxRate = 0.072;

const cappuccinoPrices = document.querySelectorAll(".price");
const itemQuantities = document.querySelectorAll(".quantity");


incrementButtons.forEach(incrementBtn => {
    incrementBtn.addEventListener("click",() => {
        if (incrementBtn.id === "incrementCardOne") {
            const quantityCardOne = document.querySelector("#quantityCardOne");
            quantityCardOne.innerHTML = ((Number)(quantityCardOne.innerHTML)) + 1;
        } else if (incrementBtn.id === "incrementCardTwo") {
            const quantityCardTwo = document.querySelector("#quantityCardTwo");
            quantityCardTwo.innerHTML = ((Number)(quantityCardTwo.innerHTML)) + 1;
        } else if (incrementBtn.id === "incrementCardThree") {
            const quantityCardThree = document.querySelector("#quantityCardThree");
            quantityCardThree.innerHTML = ((Number)(quantityCardThree.innerHTML)) + 1;
        }
        calculateCosts();
    });
});

decrementButtons.forEach(decrementBtn => {
    decrementBtn.addEventListener("click",() => {
        if (decrementBtn.id === "decrementCardOne") {
            const quantityCardOne = document.querySelector("#quantityCardOne");
            if (Number(quantityCardOne.innerHTML) > 1) {
                quantityCardOne.innerHTML = ((Number)(quantityCardOne.innerHTML)) - 1;
            }
        } else if (decrementBtn.id === "decrementCardTwo") {
            const quantityCardTwo = document.querySelector("#quantityCardTwo");
            if (Number(quantityCardTwo.innerHTML) > 1) {
                quantityCardTwo.innerHTML = ((Number)(quantityCardTwo.innerHTML)) - 1;
            }
        } else if (decrementBtn.id === "decrementCardThree") {
            const quantityCardThree = document.querySelector("#quantityCardThree");
            if (Number(quantityCardThree.innerHTML) > 1) {
                quantityCardThree.innerHTML = ((Number)(quantityCardThree.innerHTML)) - 1;
            }
        }
        calculateCosts();
    });
});

const deleteButtons = document.querySelectorAll(".delete");

deleteButtons.forEach(deleteBtn => {
    deleteBtn.addEventListener("click",() => {
        if (deleteBtn.id === "deleteCardOne") {
            const cardOne = document.querySelector("#cardOne");
            cardOne.remove();
        } else if (deleteBtn.id === "deleteCardTwo") {
            const cardTwo = document.querySelector("#cardTwo");
            cardTwo.remove();
        } else if (deleteBtn.id === "deleteCardThree") {
            const cardThree = document.querySelector("#cardThree");
            cardThree.remove();
        }
        calculateCosts();
    });
});

function calculateCosts(){
    const cappuccino_Prices = document.querySelectorAll(".price");
    console.log("cappuccino prices: ",cappuccino_Prices);
    const item_Quantities = document.querySelectorAll(".quantity");
    console.log("item quantities: ",item_Quantities);
    let index = -1;
    cappuccino_Prices.forEach( c => {
        index += 1;
        preTaxAndDeliveryAmount += ((Number)(c.innerHTML.trim()) * ((Number)(item_Quantities[index].innerHTML.trim())));
    });

    deliveryFee += (preTaxAndDeliveryAmount * deliveryRate);
    document.querySelector("#deliveryCharge").innerHTML = deliveryFee.toFixed(2); 

    taxFee += (preTaxAndDeliveryAmount * taxRate);
    document.querySelector("#tax").innerHTML = taxFee.toFixed(2);

    finalAmount += (preTaxAndDeliveryAmount + deliveryFee + taxFee);
    document.querySelector("#amount").innerHTML = finalAmount.toFixed(2);
    preTaxAndDeliveryAmount = 0;
    deliveryFee = 0;
    taxFee = 0;
    finalAmount = 0;
}