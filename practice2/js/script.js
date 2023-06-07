
let main=document.querySelector(".main")
let name=document.querySelector(".name")
let caption=document.querySelector(".caption")
let button=document.querySelector(".button")
let update=document.querySelector(".update")
let print=document.querySelector(".print")
let storeIndex;
let mainObject=[]

name.oninput=function(e){
    if(name.value!="" &&caption.value!=""){
        button.classList.remove("disabled")
    }else{
        button.classList.add("disabled")

    }
}
caption.oninput=function(e){
    if(caption.value!=""&&name.value!="" ){
        button.classList.remove("disabled")
    }else{
        button.classList.add("disabled")

    }
}


print.innerHTML="NO post"

update.addEventListener("click",function(){
    button.classList.add("disabled")
    // console.log(storeIndex);
    // console.log(mainObject[storeIndex]);
    mainObject[storeIndex]={
        name:name.value,
        caption:caption.value,
    }
    main.innerHTML=""
    name.value=""
    caption.value=""
    display()
    button.style.display="inline-block"
    update.style.display="none"


})

button.addEventListener("click",function(){
    mainObject.push({
        name:name.value,
        caption:caption.value,
    })
    main.innerHTML=""
    name.value=""
    caption.value=""
    display()
    button.classList.add("disabled")
    if(mainObject.length==0){
        print.innerHTML="No post"
    }else{
        print.innerHTML=""
    }
})



function display(){
    mainObject.map((result)=>{
        main.innerHTML+=`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${result.name}</h5>
      <p class="card-text">${result.caption}</p>
      <button class="btn btn-primary editbtn">Edit</button>
      <button class="btn btn-danger deletebtn">Delete</button>
    </div>
    </div>`
    
    })
    let deletebtn=document.querySelectorAll(".deletebtn")
    let convertdeletebtn=Array.from(deletebtn)
    convertdeletebtn.map((reslut,index)=>{
        reslut.addEventListener("click",function(){
            mainObject.splice(index,1)
            main.innerHTML=""
            display()
            if(mainObject.length==0){
                print.innerHTML="No post"
            }else{
                print.innerHTML=""
            }
        })
    })

    let editbtn=document.querySelectorAll(".editbtn")
    let convereditbtn=Array.from(editbtn)
    convereditbtn.map((result,index)=>{
        result.addEventListener("click",function(){
            storeIndex=index
            // console.log(index);
            // console.log(mainObject[index]);
            name.value=mainObject[index].name
            caption.value=mainObject[index].caption

            button.style.display="none"
            update.style.display="inline-block"
        })
    })
    
}
