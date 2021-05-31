for (var i = 0; i <= 6; i++) {
  document
    .getElementsByClassName("drum")
    [i].addEventListener("click", function () {
      buttonAnimation(this.textContent);
      switch (this.textContent) {
        case "w":
          document.getElementsByClassName("tom-1")[0].play();
          break;
        case "a":
          document.getElementsByClassName("tom-2")[0].play();
          break;
        case "s":
          document.getElementsByClassName("tom-3")[0].play();
          break;
        case "d":
          document.getElementsByClassName("tom-4")[0].play();
          break;
          case "j":
          document.getElementsByClassName("snare")[0].play();
          break;
        case "k":
          document.getElementsByClassName("crash")[0].play();
          break;
        case "l":
          document.getElementsByClassName("kick-bass")[0].play();
          break;
        default:
          break;
      }
    });
}
document.addEventListener("keydown",function(event){
    buttonAnimation(event.key);
    switch(event.key){
        case "w":
            document.getElementsByClassName("tom-1")[0].play();
          break;
        case "a":
          document.getElementsByClassName("tom-2")[0].play();
          break;
        case "s":
          document.getElementsByClassName("tom-3")[0].play();
          break;
        case "d":
          document.getElementsByClassName("tom-4")[0].play();
          break;
          case "j":
          document.getElementsByClassName("snare")[0].play();
          break;
        case "k":
          document.getElementsByClassName("crash")[0].play();
          break;
        case "l":
          document.getElementsByClassName("kick-bass")[0].play();
          break;
        default:
          break;
    }
});
function buttonAnimation(currentKey){
    document.getElementsByClassName(currentKey)[0].classList.add("pressed");
    setTimeout(function(){
        document.getElementsByClassName(currentKey)[0].classList.remove("pressed");
    },200);
    
}