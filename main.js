/*
const key = document.querySelectorAll('.key');
const v = document.querySelector('.v');
const b = document.querySelector('.b');
const n = document.querySelector('.n');
const audio = document.createElement('audio');

window.addEventListener('keydown', function(event){
    if(event.keyCode == 86){
        v.classList.add('active');
        audio.src = 'button-7.mp3';
        audio.play();
        console.log(v);
    }
    if(event.keyCode == 66){
        b.classList.add('active');
        audio.src = 'button-7.mp3';
        audio.play();
        console.log(b);
    }
    if(event.keyCode == 78){
        n.classList.add('active');
        audio.src = 'button-7.mp3';
        audio.play();
        console.log(n);
    }
})

window.addEventListener('keyup', function(){
    v.classList.remove('active');
    b.classList.remove('active');
    n.classList.remove('active');
});
*/

window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //Get the audio by data value, save in variable
    if(!audio)return; // If key is hit with no data value, return on stop the funtion all together
    audio.currentTime = 0; //Will rewind it to the start
    audio.play(); //Play the audio sound on keydown
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //set the corrosponding element for the data-key value
    console.log(key);
    key.classList.add('active'); //Add a class called active for CSS animations
});

window.addEventListener('keyup', function(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //set the corrosponding element for the data-key value
    key.classList.remove('active'); //Remove the CSS animation class
    console.log(key);
})
