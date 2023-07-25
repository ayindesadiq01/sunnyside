'use strict';
const menuIcon = document.querySelector('.menu-icon')
const listItems = document.querySelector('.list-items');
const blurry = document.querySelector('.blurry')

menuIcon.addEventListener('click', () => {
 listItems.classList.remove('hidden');
 blurry.classList.remove('hidden')
})

document.addEventListener('keydown', function(e) {
 // console.log(e);
 if (e.key === 'Escape') {
  if (!listItems.classList.contains('hidden')) {
   listItems.classList.add('hidden');
   blurry.classList.add('hidden')
  } 
 }
})

document.querySelector('.blurry').addEventListener('click', () => {
 listItems.classList.add('hidden');
 blurry.classList.add('hidden')

})