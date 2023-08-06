window.addEventListener("keydown",function(e){

    const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.drum-set[data-key="${e.keyCode}"]`);

    // if there is no audio
    if (!audio){
        return;
    }
    // rewinding the audio
    audio.currentTime=0; 

    audio.play();

    key.classList.add("playing");
    
    setTimeout(()=>{
   key.classList.remove("playing")
    },700)
})