const team ={
    name: [ "Anna Czyzewska", "Mikołaj Rej", "Janusz Biznesu"],
    profession: ["Frontend", "Copywriter", "CEO",],
    imgGray: ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'],
    imgColor: ['img/s1.png', 'img/s2.png', 'img/s3.png']
}

const name = document.querySelector(".member h1");
const profession= document.querySelector(".member h2");
const imgGray= document.querySelector(".gray");
const imgColor= document.querySelector(".color");
let iteration=0;
function changeData(){
    iteration ++;
    if (iteration == team.name.length) {
       iteration = 0;
       }
    
    name.textContent= team.name[iteration];
    profession.textContent= team.profession[iteration];
    imgGray.src= team.imgGray[iteration];
    imgColor.src= team.imgColor[iteration];   
}
setInterval(changeData, 4000);