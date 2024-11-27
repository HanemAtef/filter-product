// function show() {


//     const bts = document.querySelectorAll(".btn");
//     const storeImg = document.querySelectorAll(".store-img");
//     bts.forEach((button) => {
//         button.addEventListener('click', (e) => {
//             e.preventDefault();
//             const filter = e.target.dataset.filter;
//             storeImg.forEach((i) => {
//                 if (filter === 'All') {
//                     i.style.display = 'block';
//                 } else {
//                     if (i.classList.contains(filter)) {
//                         i.style.display = 'block';
//                     } else {
//                         i.style.display = 'none';
//                     }
//                 }
//             })

//         });
//     })



// };
// show();
// //////////////////////////////////////////////////////////////////
let grid = document.querySelector(".products");
let filterInput = document.querySelector(".input");
fetch('./assets/data.json')
    .then(res => res.json())
    .then(json => {
        for (let value of json) { addElement(grid, value); }
    });
////////////////////////////////////////////////
filterInput.addEventListener('keyup', (e) => {
    let filterVal = filterInput.value.toUpperCase();
    let item = grid.querySelectorAll('.item');
    for (let i = 0; i < item.length; i++) {
        let span = item[i].querySelector('.head');
        if (span.innerHTML.toUpperCase().includes(filterVal)) {
            item[i].style.display = 'block';
        } else {
            item[i].style.display = 'none';
        }
    }
});
/////////////////////////////////////////////////////8
function addElement(appedin, value) {
    let div = document.createElement('div');
    div.className = "item";
    let { image, title, category, price } = value;
    div.innerHTML += `
                <img src="${image}" class="img">
                <div class="content">
                    <h3 class="head">${title}</h3>
                    <a href="#" class="block">
                        <span class="cat">${category}</span></a>
                    <span class="price"> ${price} </span>
                    <button class="btn"> Buy Now</button> </div>
                    `;

    appedin.appendChild(div);
}