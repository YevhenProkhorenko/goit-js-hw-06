const categories = document.querySelectorAll("#categories .item");
console.log('Numbers of categories:', categories.length);
[...categories].forEach((category) => {
    const elementTitle = category.querySelector('h2');
    console.log('Title of category:', elementTitle.textContent);
    
    const Number = category.querySelectorAll('li')    
    console.log('The number of items in the category:', Number.length)
});

