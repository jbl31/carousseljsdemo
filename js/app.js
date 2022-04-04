//local review data
const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web developper",
        img: "https://randomuser.me/api/portraits/women/66.jpg",
        text: 
        "Coffee expert. Certified beer advocate. Total travel fanatic. Amateur internet trailblazer. Bacon scholar. Unapologetic introvert."
    },
    {
        id: 2,
        name: "John Baker",
        job: "Python developper",
        img: "https://randomuser.me/api/portraits/men/14.jpg",
        text: "Passionate writer. Hipster-friendly explorer. Entrepreneur. Coffee expert. Web specialist. Food evangelist. Infuriatingly humble organizer. Student."
    },
    {
        id: 3,
        name: "Ben Simons",
        job: "Project Manager",
        img: "https://randomuser.me/api/portraits/men/66.jpg",
        text: "Web enthusiast. Gamer. Foodaholic. Twitter fanatic. Passionate travel specialist. Devoted reader."
    }
];

// select items
const img = document.getElementById('person-img');
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
});

// show person based on item

function showPerson(person){
    console.log("shake and bake");
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
});