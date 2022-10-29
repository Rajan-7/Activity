let array=[];
const form=document.querySelector("#form");
const forminput=document.querySelector("#task");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const task=forminput.value;
    if(task === '' || task === null) return;
    const newtask={
        id:Date.now(),
        text:task
    };
    array.push(newtask);
    console.log(forminput);
    forminput.value='';
    console.log(array);
    render();

})

function render(){
    const container=document.getElementById("taskbox");
    container.innerHTML='';
    array.forEach((list)=>{
       const task=document.createElement("div");
       task.classList.add("taskbox1");
       container.appendChild(task);
       const input=document.createElement("input");
       input.classList.add("task1");
       input.value=list.text;
       const editbtn=document.createElement("button");
       editbtn.classList.add("edit1");
       const iconpen=document.createElement("span");
       // console.log(iconpen);
       iconpen.classList.add("icon-pencil");
       const deletebtn=document.createElement("button");
       editbtn.classList.add("delete1");
       const iconbin=document.createElement("span");
       iconbin.classList.add("icon-bin");
       editbtn.appendChild(iconpen);
       deletebtn.appendChild(iconbin);
       task.append(input,editbtn,deletebtn);

        //for editing
        editbtn.addEventListener("click",()=>{
            input.removeAttribute("readonly");
            input.focus();
            input.addEventListener("blur",()=>{
                input.setAttribute("readonly",true);
            })
        })
        //for removing
        deletebtn.addEventListener("click",()=>{
            const deleteindex=array.indexOf(list);
            array.splice(deleteindex,1);
            render();
            console.log(deleteindex);
        })

    })
}
