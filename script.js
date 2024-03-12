const imgsDiv = document.querySelector('#images');
let random = [5,1,2,3,1,4];
const verifyBtn = document.querySelector('#verify');
const para = document.getElementById('para');

random.sort(()=>Math.random()-0.5);
random.forEach((e)=> {
    imgsDiv.innerHTML += `<img class='img${e}'>`
});

const images = document.querySelectorAll('img');

console.log(images);
let count=1;
images.forEach((img)=>{
    img.addEventListener('click', ((e)=>{
        if(count <=2) {
        img.style.border = '5px solid cyan';
        img.id = 'selected';
        document.getElementById('reset').style.display = 'inline';
        count++;
        }
        if(count > 2) {
            verifyBtn.style.display = 'inline'; 
        }
    }));
})

document.getElementById('reset').addEventListener('click', ()=>{
    images.forEach((img)=>{
    count = 1;
    img.style.border = 'none';
    img.removeAttribute('id');
    verifyBtn.style.display = 'none'; 
    para.innerHTML = "";
    document.getElementById('reset').style.display = 'none';
    })
});


verifyBtn.addEventListener('click', ()=>{
   const selectedimg1 = document.querySelectorAll('#selected')[0];
   const selectedImg2 = document.querySelectorAll('#selected')[1];
   console.log(selectedimg1.className);
   if(selectedimg1.className == selectedImg2.className) {
     para.innerHTML = 'You are a human. Congratulations!';
     verifyBtn.style.display = 'none'; 
   }
   else {
    para.innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
    verifyBtn.style.display = 'none'; 
   }
})
