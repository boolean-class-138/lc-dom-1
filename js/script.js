// Functions
const hello = (name) => {
    const now = new Date();
    const currentHour = now.getHours();
    let message = "";

    if(currentHour <= 4) {
        message = "Buona notte";
    } else if(currentHour <= 13) {
        message = "Buongiorno";
    } else if(currentHour <= 17) {
        message = "Buon pomeriggio";
    } else {
        message = "Buona sera";
    }

    message = `${message} ${name}`;

    return message;
}

// DOM Elements
const titleElm = document.querySelector('h1');
const btnChangeColorElm = document.getElementById('btn-change-color');
const introElm = document.getElementById("intro");
const btnShowElm = document.querySelector(".btn-show");
const textFaqElm = document.getElementById("text-faq");

// Events
btnChangeColorElm.addEventListener("click", function(){
    if(titleElm.classList.contains("text-pink")) {
        titleElm.classList.remove("text-pink", "text-italic")
    } else {
        titleElm.classList.add("text-pink", "text-italic")
    }
    // titleElm.classList.toggle("text-pink")
    // titleElm.classList.toggle("text-italic")
});

btnChangeColorElm.addEventListener("mouseover", function() {
    introElm.classList.add("text-pink")
});
btnChangeColorElm.addEventListener("mouseout", function() {
    introElm.classList.remove("text-pink")
})

btnShowElm.addEventListener("click", function() {
    if(textFaqElm.classList.contains("hidden")) {
        textFaqElm.classList.remove("hidden");
        btnShowElm.innerHTML = "Nascondi";
    } else {
        textFaqElm.classList.add("hidden");
        btnShowElm.innerHTML = "Mostra";
    }
});

const helloPerson = hello('Samuele');
titleElm.innerHTML = `${helloPerson}, <br> come stai?`

introElm.innerHTML += 'ciao';
