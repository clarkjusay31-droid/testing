function changeContent() {
    const title = document.getElementById("title");
    title.textContent = "You clicked the button!";
    
    document.body.style.backgroundColor = 
        "#" + Math.floor(Math.random()*16777215).toString(16);
}
