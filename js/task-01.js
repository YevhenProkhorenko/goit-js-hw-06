const categories = document.querySelectorAll("#categories .item");
console.log('Number of categories:', categories.length);
[...categories].forEach((category) => {
    const elementTitle = category.querySelector('h2');
    console.log('Category:', elementTitle.textContent);
    
    const numbersOfElement = category.querySelectorAll('li')    
    console.log('Elements:', numbersOfElement.length)
});