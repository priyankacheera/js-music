let audio1 = document.getElementById('audio1')
let audio2 = document.getElementById('audio2')
let audio3 = document.getElementById('audio3')
let audio4 = document.getElementById('audio4')


document.addEventListener('keydown', (event) => {
   // if(event.key==='a'){
   //  audio1.play()
   // }
   // else if(event.key==='s'){
   //  audio2.play()
   // }
   // else if(event.key==='d'){
   //  audio3.play()
   // }
   // else if(event.key==='f'){
   //  audio4.play()
   // }


   switch (event.key) {
      case 'a':
         audio1.play()
         break;
      case 's':
         audio2.play()
         break;
      case 'd':
         audio3.play()
         break;
      case 'f':
         audio4.play()
   }
})





