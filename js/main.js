/*
const comment = document.getElementsByClassName('commenting')[0];
const commentInput = document.getElementsByClassName('commenting_input')[0];
const commentButton = document.getElementsByClassName('commenting_button')[0];
const reply = document.getElementsByClassName('reply')[0];


comment.addEventListener('keyup', function(){

    if(commentInput.value.length > 0) {
        commentButton.style.color = 'blue';
    }else {
        commentButton.style.color = '#b2dffc';
    }
});

commentInput.addEventListener('keydown', function(){
    if(event.keyCode === 13){
        let dTag = document.createElement('div');
        dTag.innerHTML = commentInput.value.slice(0, commentInput.value.length);
        reply.appendChild(dTag);
    }
})

commentButton.addEventListener('click', function(){
    if(commentButton.style.color === 'blue'){
        let dTag = document.createElement('div');
        dTag.innerHTML = commentInput.value.slice(0, commentInput.value.length);
        reply.appendChild(dTag);
    }
})

*/


const comment = document.getElementsByClassName('commenting');
const commentInput = document.getElementsByClassName('commenting_input');
const commentButton = document.getElementsByClassName('commenting_button');
const reply = document.getElementsByClassName('reply');

// 오류 찾기 console.log("sdfsdfsfd: ", commentInput)

for (let i=0; i<comment.length; i++){git 
    commentInput[i].addEventListener('keyup', function(){
      if(commentInput[i].value.length > 0){
        commentButton[i].style.color = 'blue';
        return;
      }else {
        commentButton[i].style.color = '#b2dffc';
        return;
      }
    })
  }

for (let i=0; i < comment.length; i++){
  commentInput[i].addEventListener('keydown', function(event){
    if(event.keyCode === 13){
        let dTag = document.createElement('div');
        dTag.innerHTML = commentInput[i].value;
        reply[i].appendChild(dTag);
        
    }
})
}

for (let i=0; i < comment.length; i++){
commentButton[i].addEventListener('click', function(){
    if(commentButton[i].style.color === 'blue'){
        let dTag = document.createElement('div');
        dTag.innerHTML = commentInput[i].value;
        reply[i].appendChild(dTag);
    }
})
}
  /*

commentInput.addEventListener('keyup', function(){
    for (let i=0 ; i < commentInput.length ; i++){
        if(commentInput[i].value.length > 0) {
            commentButton[i].style.color = 'blue';
        }else {
            commentButton[i].style.color = '#b2dffc';
        }
    }   
});


commentInput.addEventListener('keydown', function(event){
    if(event.keyCode === 13){
        let dTag = document.createElement('div');
        dTag.innerHTML = commentInput.value.slice(0, commentInput.value.length);
        reply.appendChild(dTag);
        
    }
})

commentButton.addEventListener('click', function(){
    if(commentButton.style.color === 'blue'){
        let dTag = document.createElement('div');
        dTag.innerHTML = commentInput.value.slice(0, commentInput.value.length);
        reply.appendChild(dTag);
    }
})
*/
