const btnUpload = document.querySelector('.button');
const icon = document.querySelector('.icons');

btnUpload.addEventListener('click', ()=>
{
    btnUpload.classList.add('bt__upload');
    btnUpload.innerHTML = "Uploding";
    icon.classList.add('completed-upload');
});


let timeout = setTimeout(function(){btnUpload.innerHTML = "Uploded";},4000);
