// Basic Selector................class-one



// const title = document.getElementById('title');
// console.log(title)

// const pragraph = document.getElementsByClassName('lead');
// console.log(pragraph);

// const list = document.getElementsByTagName('li');
// console.log(list)

// let listName = document.getElementsByName('Mango');
// console.log(listName);



// Query Selector..............class-two



// const title = document.querySelector('#title')
// console.log(title);

// const lead = document.querySelector('.lead');
// console.log(lead);

// const pragraph = document.querySelectorAll('.lead');
// console.log(pragraph);


// const list = document.querySelectorAll('li');
// console.log(list);

// const ul = document.querySelector('ul');
// console.log(ul.children);
// console.log(ul.childNodes);
// console.log(ul.lastElementChild);


// const list = document.getElementById('list');
// const parent = list.parentElement;
// console.log(parent);

// const children = list.children;
// console.log(children);

// console.log(list.previousElementSibling)
// console.log(list.nextElementSibling);

// const li = document.querySelector('li');
// console.log(li.nextElementSibling);


// const list = document.getElementsByTagName('li');
// // const listItems = Array.from(list);
// const listItems = [...list];

// listItems.forEach((li, index) => {
//     const text = li.innerHTML;
//     li.innerHTML = `(${index +1}) ${text})`
// });




//How to create Element with DOM.............class-three



// const createElement = (tagName, className, innerHTML) => {
//     const tag = document.createElement(tagName);
//     tag.className = className || '';
//     tag.innerHTML = innerHTML || '';
//     return tag;
// }
// const append = ((parent, children) => {
//     children.forEach(child => {
//         parent.appendChild(child);
//     });
// })


// const li = createElement('li', 'list-item-group', 'Apel');
// li.setAttribute('title', 'I am fruite name apel');

// const list = document.getElementById('list');

// list.appendChild(li);

// const p = createElement('p', 'lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, expedita eveniet. Rerum quaerat quibusdam quidem eos, omnis quisquam nam quae obcaecati, id eum officiis optio consequatur fugiat, illum soluta doloremque!')

// const p2 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, expedita eveniet. Rerum quaerat quibusdam quidem eos, omnis quisquam nam quae obcaecati, id eum officiis optio consequatur fugiat, illum soluta doloremque!')


// const div = createElement('div');
// append(div, [p, p2])
// console.log(div)

// list.insertAdjacentElement('afterend', div)
// // const container = document.getElementById('cont');
// // container.appendChild(div);





//Update and remove any element..............class-four




// const firstChild = list.firstElementChild;

// setTimeout ( () => {
//     firstChild.innerHTML = `${firstChild.innerHTML} (Modified)`;
//     firstChild.style.backgroundColor = 'green'
// }, 5000)



// console.log(list.lastChild.remove)
// setTimeout (() => {
//     list.lastChild.remove();
// }, 3000)

// const lastChild = list.lastChild.cloneNode();
// lastChild.innerHTML = 'five';
// list.append(lastChild);

// list.lastChild.id = 'last-item';





// //DOM WITH STYLE..............class-five



// const title = document.getElementById('title');
// // title.style.backgroundColor = 'red';
// // title.style.display = 'inline-block';
// // title.style.padding = '10px';
// // title.style.borderRadius = '5px';
// // title.style.color = '#fff';

// titleStyle = {
//     backgroundColor: 'blue',
//     display: 'inline-block',
//     padding: '10px',
//     borderRadius: '5px',
//     color: '#fff',
//     fontFamily: 'sans-serif',
//     textAlign: 'center',
// }

// Object.assign(title.style, titleStyle);


// const btn = document.getElementById('btn');
// // console.dir(btn)

// // btn.onclick = (e) => {
// //     console.log(e);
// // }
// const list = document.getElementById('list');


// btn.addEventListener('click', function(e){
//     const item = list.lastElementChild.cloneNode(true);
//     item.innerHTML = 'Created Item New';
//     list.appendChild(item);
// })


// const box = document.getElementById('box');
// box.addEventListener('mousemove', function(e){
//    document.getElementById('x-value').innerHTML = e.clientX;
//    document.getElementById('y-value').innerHTML = e.clientY;
// })

// const lists = [...list.children]


// lists.forEach(li => {
//     li.onclick = function(e){
//         e.target.remove();
//     }
// })

// list.addEventListener('click', function(e){
//     if(this.contains(e.target)){
//         e.target.remove()
//     }
// })






//Input Elements and Event handling......................class six



const name = document.getElementById('name');
name.addEventListener('keypress', (event) => {
   if(event.key === 'Enter'){
    document.getElementById('showName').innerHTML = `Your name is ${event.target.value}`;
    event.target.value = '';
    event.preventDefault();
   }
     
})

