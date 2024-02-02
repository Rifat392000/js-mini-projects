let value = 10;
   let parentElement = document.getElementById('size');

   for (let i = 1; i < 20; i++) {
       let optionElement = document.createElement('option');
       optionElement.value = value;
       optionElement.textContent = value;
       
       parentElement.appendChild(optionElement);
       
       value += 1;
   }


let bold=false;
document.getElementById('bold').addEventListener('click',()=>{
    if(!bold){
        document.getElementById('text').style.fontWeight='bold'
        bold=true;
    }
    else{
        document.getElementById('text').style.fontWeight='normal'
        bold=false;
    }
   })


let italic=false;
   document.getElementById('italic').addEventListener('click',()=>{
    if(!italic){
        document.getElementById('text').style.fontStyle='italic'
        italic=true;
    }
    else{
        document.getElementById('text').style.fontStyle='normal'
        italic=false;
    }
   })


   let underline=false;

   document.getElementById('underline').addEventListener('click',()=>{
    if(!underline){
        document.getElementById('text').style.textDecoration='underline'
        underline=true;
    }
    else{
        document.getElementById('text').style.textDecoration='none'
        underline=false;
    }
   })
  
   
   document.getElementById('leftalign').addEventListener('click',()=>{
    document.getElementById('text').style.textAlign='left'
   })

   document.getElementById('centeralign').addEventListener('click',()=>{
    document.getElementById('text').style.textAlign='center'
   })

   document.getElementById('rightalign').addEventListener('click',()=>{
    document.getElementById('text').style.textAlign='right'
   })



   document.getElementById('equalalign').addEventListener('click',()=>{
    document.getElementById('text').style.textAlign='justify'
   })

   
   
    let sizeSelect = document.getElementById('size');
    // Add an event listener for the 'change' event
    document.getElementById('size').addEventListener('change', function() {
        document.getElementById("text").style.fontSize=`${sizeSelect.value}px`

    });



    let smCap = false;
    document.getElementById('smCap').addEventListener('click', () => {
        const textElement = document.getElementById('text');
    
        if (!smCap) {
            textElement.value = textElement.value.toUpperCase();
            smCap = true;
        } else {
            textElement.value = textElement.value.toLowerCase();
            smCap = false;
        }
    });

let textcolor=document.querySelector('#color')
    document.querySelector('#color').addEventListener('change', () => {
        document.getElementById("text").style.color=`${textcolor.value}`;
    });