"use strict";

const incrementButtons = document.querySelectorAll(".increment");

const decrementButtons = document.querySelectorAll(".decrement");


incrementButtons.forEach(incrementBtn => {
    incrementBtn.addEventListener("click",() => {
        if (incrementBtn.id === "incrementCardOne") {
            const quantityCardOne = document.querySelector("#quantityCardOne");
            quantityCardOne.innerHTML = (Number) (quantityCardOne.innerHTML) + 1;
        } else if (incrementBtn.id === "incrementCardTwo") {
            const quantityCardTwo = document.querySelector("#quantityCardTwo");
            quantityCardTwo.innerHTML = (Number) (quantityCardTwo.innerHTML) + 1;
        } else if (incrementBtn.id === "incrementCardThree") {
            const quantityCardThree = document.querySelector("#quantityCardThree");
            quantityCardThree.innerHTML = (Number) (quantityCardThree.innerHTML) + 1;
        }
    });
});

decrementButtons.forEach(decrementBtn => {
    decrementBtn.addEventListener("click",() => {
        if (decrementBtn.id === "decrementCardOne") {
            const quantityCardOne = document.querySelector("#quantityCardOne");
            if (Number(quantityCardOne.innerHTML) > 1) {
                quantityCardOne.innerHTML = (Number) (quantityCardOne.innerHTML) - 1;
            }
        } else if (decrementBtn.id === "decrementCardTwo") {
            const quantityCardTwo = document.querySelector("#quantityCardTwo");
            if (Number(quantityCardTwo.innerHTML) > 1) {
                quantityCardTwo.innerHTML = (Number) (quantityCardTwo.innerHTML) - 1;
            }
        } else if (decrementBtn.id === "decrementCardThree") {
            const quantityCardThree = document.querySelector("#quantityCardThree");
            if (Number(quantityCardThree.innerHTML) > 1) {
                quantityCardThree.innerHTML = (Number) (quantityCardThree.innerHTML) - 1;
            }
        }
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
    });
});