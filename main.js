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

