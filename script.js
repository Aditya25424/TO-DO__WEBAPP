const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");
function addtask(){
    if(inputBox.value ===''){
        alert("you must enter a task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span =document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
} 
list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parent.Element.remove();
        saveData();
    }
},false);
function saveData()
{
    localStorage.setItem("data",list.innerHTML);

}
function showTask()
{
    list.innerHTM =localStorage.getItem("data");
}
showTask(); 