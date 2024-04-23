const formComment = document.querySelector("#formComment");

formComment.addEventListener('submit',submitComment);

function submitComment(event){
    event.preventDefault();
    
    const textarea = document.querySelector("#CommentTextarea");
    if(textarea.value === ""){
        alert("Scrieti un comentariu!");
        return;
    }

    const comments = document.querySelector(".comments");

    const comment = document.createElement("div");
    comment.classList.add("comment");
    comments.append(comment);
    
    const commentImg = document.createElement("div");
    commentImg.classList.add("comment-img");
    const icon = document.createElement("img");
    icon.setAttribute("src","../../../images/img6.jpg");
    commentImg.append(icon);
    comment.append(commentImg);

    const nickname = document.createElement("div");
    nickname.classList.add("nickname");
    nickname.innerText = "Undefined User";
  
    const content = document.createElement("div");
    content.classList.add("content");
    content.innerText = textarea.value;

    textarea.value = "";
    
    const commentContent = document.createElement("div");
    commentContent.classList.add("comment-content");
    comment.append(commentContent);
    commentContent.append(nickname, content);
}