const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
const images = [
    'images/pic5.jpg',
    'images/pic2.jpg',
    'images/pic3.jpg',
    'images/pic4.jpg',
    'images/pic1.jpg'
];

for(var i = 0; i < 5; i++) {
    const x = document.createElement('img');
    x.setAttribute('src', images[i]);
    thumbBar.appendChild(x);

    x.onclick = function(){
        displayedImage.setAttribute('src',x.getAttribute('src'));
    }
}
 

/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
    const btncls = btn.getAttribute('class');
    if(btncls === 'dark'){
        btn.setAttribute('class','light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.setAttribute('class','dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}