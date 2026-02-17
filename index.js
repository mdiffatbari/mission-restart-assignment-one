const loadAllProductsCategories = () => {
    const url = "https://fakestoreapi.com/products/categories"

    fetch(url)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            loadCategory(data)
        })
}

/* ====================Product Clicked By Buttons==================== */

const loadProductByCategoryBtn = (category) => {
    console.log(category)

    const url = `https://fakestoreapi.com/products/category/${category}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayProducts(data))

}

/* ==============load all product====================== */
const allProductLoad = () => {
    const url = "https://fakestoreapi.com/products"
    fetch(url)
    .then(res => res.json())
    .then(data =>displayProducts(data))
}

const displayProducts = (products) => {

    const productArea = document.getElementById("products-are-product-page");
    productArea.innerHTML = "";

    products.forEach((c) => {

        const productAreaNewDiv = document.createElement("div");
        productAreaNewDiv.innerHTML = `
    <div class="card bg-base-100 w-auto h-[450px] shadow-sm">
  <figure class="bg-[#e5e7eb]">
    <img class="h-60 p-10" src="${c.image}"/>
  </figure>
  <div class="card-body">
  <div class="flex justify-between">
  <div class="badge badge-soft badge-primary">${c.category}</div>
  <div><p class="text-gray-500"><i class="fa-solid fa-star text-yellow-500"></i>${c.rating.rate}/${c.rating.count}</p></div>
  </div>
    <h2 class="text-gray-700 text-[15px] font-semibold py-3">
      ${c.title}
    </h2>
    <p class="text-2xl font-bold">$${c.price}</p>
    <div class="card-actions">
      <button class="btn btn-outline border-gray-400"><i class="fa-regular fa-eye"></i>Details</button>
      <button class="btn btn-active btn-primary"><i class="fa-solid fa-cart-plus"></i>Add</button>
    </div>
  </div>
</div>
    `
        productArea.append(productAreaNewDiv);

    })

}

/* ===============Buttons Functionality============== */

const loadCategory = (categories) => {
    /* get container */
    const productButtonDiv = document.getElementById("product-category-buttons");
    productButtonDiv.innerHTML = "";

    /* add All Product Button */

    const allProductButton = document.createElement("div");
    allProductButton.innerHTML = `
    
    <button onclick="allProductLoad()" class="border-[1px] border-gray-400/40 text-gray-600 p-2 px-5 font-medium rounded-full hover:bg-[#4f39f6] hover:text-white hover:cursor-pointer">All</button>
    `
    productButtonDiv.append(allProductButton);

    /* loop in each category */
    categories.forEach(category => {

        /* create element */
        const categoryBtnDiv = document.createElement("div");
        categoryBtnDiv.innerHTML = `

        <button onclick="loadProductByCategoryBtn('${category.replace(/'/g, "\\'")}')" class="border-[1px] border-gray-400/40 text-gray-600 p-2 px-3 font-medium rounded-full hover:bg-[#4f39f6] hover:text-white hover:cursor-pointer">${category}</button>
        
        `

        /* append child */

        productButtonDiv.append(categoryBtnDiv);


    });

}


loadAllProductsCategories();