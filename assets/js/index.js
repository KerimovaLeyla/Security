let product = document.getElementById("products");
let db
let page =1;
let limit=4;
document.getElementById("loadMore").addEventListener("click",getApi)
async function getApi(){
    let skip = (page -1) * limit
    let res = await axios.get(`https://65680f6b9927836bd9740785.mockapi.io/swp102/students?page=${page}&limit=${limit}&skip=${skip}`)
    db = res.data
    db.forEach((item) => {
        let div = document.createElement("div");
        div.className="box"
        div.innerHTML=`
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <h3>${item.price}$</h3>
        <button onclick="addtoCart(${item.id})"><i class="fa-solid fa-cart-shopping"></i>Add to cart</button>
        `
        product.appendChild(div)
    })
}
getApi()
function addtoCart(index){
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.push(db.find((item) => item.id == index));
localStorage.setItem("cart", JSON.stringify(cart))
console.log(cart);
}
