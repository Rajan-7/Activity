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
    

})
