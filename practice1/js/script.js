let main=document.querySelector(".main")
let name=document.querySelector(".name")
let caption=document.querySelector(".caption")
let button=document.querySelector(".button")
let updatebtn=document.querySelector(".updatebtn")
let massage=document.querySelector(".massage")
let storeIndex;

name.oninput=function(e){
    if(name.value!="" &&caption.value!=""){
        button.classList.remove("disabled")
    }else{
        button.classList.add("disabled")

    }
}
caption.oninput=function(e){
    if(name.value!="" &&caption.value!=""){
        button.classList.remove("disabled")
    }else{
        button.classList.add("disabled")

    }
}

let arr=[]
massage.innerHTML="No Post"
updatebtn.addEventListener("click",function(){
   
    arr[storeIndex]={
        name:name.value,
        caption:caption.value,
    }
    main.innerHTML=""
    name.value=""
    caption.value=""
    display()
    button.style.display="inline-block"
    updatebtn.style.display="none"
    button.classList.add("disabled")
    


})

button.addEventListener("click",function(){
    button.classList.add("disabled")
    arr.push({
        name:name.value,
        caption:caption.value
    })
    main.innerHTML=""
    name.value=""
    caption.value=""
    display()
    
    if(arr.length==0){
        massage.innerHTML="No Post"
    }else{
        massage.innerHTML=""
    }
    
})



function display(){
    arr.map((item)=>{
        main.innerHTML+=` <div class="card mt-4" style="width: 18rem;">
                  
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.caption}</p>
      <button class="btn btn-primary editbtn">Edit</button>
      <button class="btn btn-danger deletebtn">Delete</button>
    </div>
    </div>`
    
    })
    let deletebtn=document.querySelectorAll(".deletebtn")
    let deletebtnArray=Array.from(deletebtn)
    deletebtnArray.map((item,index)=>{
        item.addEventListener("click",function(){
            arr.splice(index,1)
            main.innerHTML=""
            display()
            if(arr.length==0){
                massage.innerHTML="No Post"
            }else{
                massage.innerHTML=""
            }
        })
    })

    let editbtn=document.querySelectorAll(".editbtn")
    let editbtnArroy=Array.from(editbtn)
    editbtnArroy.map((item,index)=>{
        item.addEventListener("click",function(){
            storeIndex=index
            
            name.value=arr[index].name
            caption.value=arr[index].caption
            button.style.display="none"
            updatebtn.style.display="inline-block"
        })
    })


}

