const labels = document.querySelectorAll('.from-control label');

labels.forEach((label)=>{
    // console.log(label);
   // console.log(label.innerText);
   // console.log(label.innerText.split());
   //  console.log(label.innerText.split(''));

    label.innerHTML = label.innerText
        .split('')
        .map((letter,index)=>
        `<span style="transition-delay:${index*50}ms">${letter}</span>`).join('');
    ;
});
