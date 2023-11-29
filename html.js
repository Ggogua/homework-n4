let div = document.createElement('div');
div.classList.add('wraper');
div.setAttribute('id', 'foo-2');
document.getElementById('foo').appendChild(div);

let img = document.createElement('img');
img.setAttribute('src', "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww")
img.setAttribute('alt', 'image');
document.getElementById('foo-2').append(img);

let title = document.createElement('h2');
title.classList.add('title');
title.innerHTML = 'Image title';
document.getElementById('foo-2').append(title);

title.style.color = 'red';
title.style.fontSize = '30px';
img.style.width = '800px';

document.querySelectorAll('.three-div').forEach(add => {
    let newText = document.createElement('p');
    newText.classList.add = 'text';
    newText.innerHTML = 'Hello';
    add.appendChild(newText);
})
