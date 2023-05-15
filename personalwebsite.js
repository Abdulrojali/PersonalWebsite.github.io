let toggle=document.querySelector('#toggle')

toggle.addEventListener('click',function(){
     let container=document.querySelector('.container').classList.toggle('.blue')
})



    let=document.querySelector('.submit').addEventListener('click',function(){
        let input=document.querySelectorAll('.col-flex input').forEach(element => {
        tampungMassage(element.value)
    });
    })

let inputText=document.querySelector('.col-flex textarea').value

function tampungMassage(email,username,password,massage){
    let object={
        objectEmail:email,
        objectUsername:username,
        objectPassword:password,
        objectMassage:massage
    }
    console.log(object)
}

let form=document.querySelector('.contact-content-one form')
console.log(form)
