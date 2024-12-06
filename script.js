const count = document.getElementsByClassName("count");
const comments = document.getElementsByClassName("comments");
const comments_text = document.getElementsByClassName("comments-text");
const likesymbol = document.getElementById("heart");
const comments_container = document.getElementsByClassName("comments-container");

// const usercomments = document.getElementsByClassName("usercomments");
likesymbol.addEventListener("click",(e)=>
{
    likesymbol.classList.toggle('red');
    if(likesymbol.classList.contains('red')){
        likesymbol.classList.remove('fa-regular');
        likesymbol.classList.add('fa-solid')
    }
    else{
        likesymbol.classList.remove('fa-solid');
        likesymbol.classList.add('fa-regular')
    }
    
    if(likesymbol.classList.contains('red')){
    
       count[0].innerText="2,430,237";
    }
    else{
        count[0].innerText="2,430,236";
    }
})
comments_text[0].addEventListener('click',()=>{
    comments_container[0].classList.toggle('visible');
    // if(comments_container[0].classList.contains('visible')){
    //     comments_container[0].classList.remove('visible');
    // }
    // else{
    //     comments_container[0].classList.add('visible');
    // }
})