const word = document.querySelector('.word'),
   wordRec = document.querySelector('.word__rec'),
   wordMore = document.querySelector('.word__more');

   const input = document.querySelector('.search__input');
   const showRec = document.querySelector('.search__rec');

   input.addEventListener('input', txt=>{
      word.innerHTML = txt.target.value;
      wordRec.innerHTML = txt.target.value;
      wordMore.innerHTML = txt.target.value;

      if(input.value.length > 0)
      {
         showRec.classList.add('show-rec');
      }
      else
      {
         showRec.classList.remove('show-rec');
      }
   });

  