
const reviews =[
    {
            id: 1,
            img: "https://adeolaadeoti.website/slider/images/susansully.jpg",
    author: "John Silk",
    job: "Techinical staff",
content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
    },
     {id: 2,
         img: "https://adeolaadeoti.website/slider/images/susansully.jpg",
    author: "Susen Lockes",
     job: "Techinical staff",
content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
      {id: 3,
         img: "https://adeolaadeoti.website/slider/images/susansully.jpg",
    author: "Lily Lockes",
     job: "CEO",
content: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.",
    },
      {id: 4,
         img: "https://adeolaadeoti.website/slider/images/susansully.jpg",
    author: "Larry Kack",
     job: "Media Manager",
content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
    },
      {id: 5,
         img: "https://adeolaadeoti.website/slider/images/susansully.jpg",
    author: "Shows Meat",
     job: "Celebrity",
content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    }
]
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const content = document.getElementById("content")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")
//starting item
let currentItem = 0

//load initial slideshow
window.addEventListener("DOMcontentloaded" , function(){
    showPerson(currentItem)
})

function showPerson(person){
const item = reviews[person]
    img.src = item.img
    author.textContent = item.author
    job.textContent = item.job
    content.textContent = item.content
}

//show next person
nextBtn.addEventListener("click", function(){
currentItem++
if (currentItem > reviews.length - 1){
currentItem = 0
}
showPerson(currentItem)
})
//show prev person
prevBtn.addEventListener("click", function(){
currentItem--
if (currentItem < 0){
currentItem = reviews.length - 1
}
showPerson(currentItem)
})

//show random person
randomBtn.addEventListener("click", function(){
currentItem = [Math.floor(Math.random()*reviews.length)]
showPerson(currentItem)
})

