document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log("loaded")
  document.querySelector('input[type="submit"]').addEventListener("click", function(event){
    let newTask = document.getElementById("new-task-description").value
    let ul = document.getElementById("tasks")
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(newTask))
    ul.appendChild(li)
    li.addEventListener("click", function(){
      li.remove()
    })
    event.preventDefault()
  })
  
});
