document.addEventListener('DOMContentLoaded', () => {



// Створити сторінку, що показує нумерований список пісень:

let playList = [

    {
    
     author: "LED ZEPPELIN",
    
     song:"STAIRWAY TO HEAVEN"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"BOHEMIAN RHAPSODY"
    
    },
    
    {
    
     author: "LYNYRD SKYNYRD",
    
     song:"FREE BIRD"
    
    },
    
    {
    
     author: "DEEP PURPLE",
    
     song:"SMOKE ON THE WATER"
    
    },
    
    {
    
     author: "JIMI HENDRIX",
    
     song:"ALL ALONG THE WATCHTOWER"
    
    },
    
    {
    
     author: "AC/DC",
    
     song:"BACK IN BLACK"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"WE WILL ROCK YOU"
    
    },
    
    {
    
     author: "METALLICA",
    
     song:"ENTER SANDMAN"
    
    }
    
    ];

const SOME_DIV = document.querySelector('.some-div');
const ELEMENT_DIV = document.createElement('ol');
ELEMENT_DIV.setAttribute("id", "myList")
SOME_DIV.append(ELEMENT_DIV);

let list = document.getElementById("myList");
  
playList.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item.author + ` - ${item.song}`;
  list.appendChild(li);
})


// Створити HTML-сторінку з кнопкою "Відкрити" і
// модальним вікном. На модальном вікні повинен
// бути текст і кнопка "Закрити". Спочатку модальне
// вікно не відображається. При кліку на кнопку "Відкрити"
// з'являється модальне вікно, на кнопку "Закрити" — зникає.

const BUTTTON = document.querySelector('.button-open');
const MODAL = document.querySelector('.modal');
const ClOSE = document.querySelector('.mod-close');

BUTTTON.onclick = function() {
    MODAL.style.display = "block";
    document.body.style.background = "grey";
  }

ClOSE.onclick = function() {
    MODAL.style.display = "none";
    document.body.style.background = "unset";
}


// Створити HTML-сторінку зі світлофором і кнопкою,
// яка перемикає світлофор на наступний колір.

const COLORS = ['red', 'yellow', 'green'];
const BUTTON = document.querySelector('#click').addEventListener('click', changeCircle);
const CIRCLE = document.querySelectorAll('.color');
let count = 0;
let countsColor = 0;

function changeCircle(e){
    if (count >= CIRCLE.length){
        count = 0;
        countsColor = 0;
    }
    for (i = 0; i < CIRCLE.length; i++) {
      CIRCLE[i].style.background = '';
    }
      CIRCLE[count].style.background = COLORS[count];
      count = count + 1;

}

});




