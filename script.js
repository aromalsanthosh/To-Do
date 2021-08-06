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
        li.classList.add("subjectName");
        li.innerHTML = `${txt}<button class="delete">X</button>`;
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
  var allSubjectName = document.querySelectorAll(".subjectName");
   for (var index = 0; index <allSubjectName.length; index++){
      allSubjectName[index].addEventListener("click", function(){
         this.classList.toggle("active");
      });
      allSubjectName[index].querySelector("button").addEventListener("click",
      function(){
         this.closest(".subjectName").remove();
      });
   }
}

addDeleteEvents();