let inputElement = document.querySelector ('.inputel');
let btnItem = document.querySelector('.btn-item');
let ulItem = document.querySelector('.ul-item');
let clearBtn = document.querySelector('.clear-all');
let formel = document.querySelector ('.form-el');
 
formel.addEventListener('submit', function(e) {
  e.preventDefault();
})
btnItem.addEventListener('click', function () {
  let valueitem = inputElement.value;
   if (valueitem === ' ') {
    return;
   }

  let li = document.createElement('li');
  li.textContent = valueitem;
  let removeItem = document.createElement ('i');
  removeItem.classList.add("fa-solid","fa-xmark");
  removeItem.addEventListener('click', function () {
    li.remove ()
  })

  li.appendChild(removeItem);
  ulItem.appendChild(li);
  inputElement.value = ' ';

})
  

clearBtn.addEventListener('click', function() {
  ulItem.innerHTML = ' ';
})



// accord
let accordionDiv = document.querySelectorAll('.acc-container');
 
accordionDiv.forEach(function(item) {
  item.addEventListener('click', function() {
    this.classList.toggle('active');

  })
})