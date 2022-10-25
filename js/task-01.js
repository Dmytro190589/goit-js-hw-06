'use script'

const numberEl = document.querySelector('ul').children.length;
console.log(`Number of categories : ${numberEl}`);

const categorEl = document.querySelectorAll('h2');
for (const cat of categorEl){
    console.log('Category: ' + cat.textContent);
    const sumEl = cat.nextElementSibling.children.length;
    console.log(`Elements : ${sumEl}`);
}

