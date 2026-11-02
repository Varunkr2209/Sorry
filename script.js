// OPEN THE APOLOGY

function startJourney() {

    document
        .getElementById("apology")
        .scrollIntoView({
            behavior: "smooth"
        });
}



// REASON CARDS

function showReason(card) {

    card.classList.toggle("open");
    card.setAttribute(
        "aria-expanded",
        card.classList.contains("open")
    );

}


document.querySelectorAll(".card").forEach(function (card) {

    card.addEventListener("click", function () {
        showReason(card);
    });

    card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            showReason(card);
        }
    });

});



// PROMISE BUTTON

function makePromise() {

    const heart =
        document.getElementById(
            "promiseHeart"
        );

    const text =
        document.getElementById(
            "promiseText"
        );


    heart.classList.add(
        "animate"
    );


    text.innerHTML =
        "I'll try to show it through my actions, not just my words. ❤️";


    setTimeout(function () {

        heart.classList.remove(
            "animate"
        );

    }, 2000);

}



// YES BUTTON

function sayYes() {

    document.getElementById(
        "answer"
    ).innerHTML = `

        <h2>YAY! ❤️</h2>

        <p>
            One smile at a time,
            one day at a time.

            <br><br>

            I love you! ❤️
        </p>

    `;


    createCelebration();

}



// NEED TIME BUTTON

function needTime() {

    const button =
        document.getElementById("needTimeButton");

    const currentPosition =
        button.getBoundingClientRect();

    button.classList.add("roaming");

    const buttonBounds =
        button.getBoundingClientRect();

    const maxLeft =
        Math.max(0, window.innerWidth - buttonBounds.width);

    const maxTop =
        Math.max(0, window.innerHeight - buttonBounds.height);

    const minLeft =
        Math.min(12, maxLeft);

    const minTop =
        Math.min(12, maxTop);

    const rightLimit =
        Math.max(minLeft, maxLeft - 12);

    const bottomLimit =
        Math.max(minTop, maxTop - 12);

    let left =
        minLeft + Math.random() * (rightLimit - minLeft);

    let top =
        minTop + Math.random() * (bottomLimit - minTop);

    for (let attempt = 0; attempt < 8; attempt++) {
        const distance =
            Math.hypot(left - currentPosition.left, top - currentPosition.top);

        if (distance >= 80) {
            break;
        }

        left =
            minLeft + Math.random() * (rightLimit - minLeft);

        top =
            minTop + Math.random() * (bottomLimit - minTop);
    }

    button.style.left = `${left}px`;
    button.style.top = `${top}px`;

   ;

}



// SMALL HEART CELEBRATION

function createCelebration() {

    for (let i = 0; i < 25; i++) {

        createHeart();

    }

}



// BACKGROUND HEARTS

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "floating-heart";


    heart.innerHTML =
        Math.random() > 0.5
            ? "❤️"
            : "♡";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        15 +
        Math.random() * 15 +
        "px";


    document.body.appendChild(
        heart
    );


    setTimeout(function () {

        heart.remove();

    }, 8000);

}



// CREATE OCCASIONAL HEARTS

setInterval(
    createHeart,
    1200
);