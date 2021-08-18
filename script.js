const input = document.querySelector("#add");
const  btn = document.querySelector("#bttn");
const list = document.querySelector("#item");
var element = document.getElementsByTagName('li');


btn.onclick = function(){
    
    var txt = input.value;
    if(txt ==''){
        alert('Add some text');
    }else{
        li = document.createElement('li');
        li.classList.add("task");
        li.innerHTML = `<button id="edt" class="edit"><i class="fas fa-pencil-alt"></i></button>${txt}<button id="dlt" class="delete">X</button>`;
        list.insertBefore(li,list.childNodes[0]);
        input.value = '';
      addDeleteEvents();
    }
    
};

list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');
    }
}

function addDeleteEvents(){
  var tasks = document.querySelectorAll(".task");
   for (var index = 0; index <tasks.length; index++){
        tasks[index].addEventListener("click", function(){
         this.classList.toggle("active");
      });
      tasks[index].querySelector("#dlt").addEventListener("click",
      function(){
         this.closest(".task").remove();
      });
    //   tasks[index].querySelector("#edt").addEventListener("click",
    //   function(){
        
    //   });

   }
}

addDeleteEvents();

document.getElementById("add")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("bttn").click();
    }
});