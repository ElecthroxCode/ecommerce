

//#1-click plus and click minus...
let btnPlus = document.querySelector(".input__plus");
let btnMinus = document.querySelector(".input__minus");
let userInput= document.querySelector(".input__number");
let userInputNumber = 0;
btnPlus.addEventListener("click", ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
});
btnMinus.addEventListener("click", ()=>{
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
});
//2#clik button -addtocart...
const btnAdd = document.querySelector(".details__btnAdd");
let notification = document.querySelector(".header__car--notifications");
const priceModal = document.querySelector(".modal-cart__price");
let lastValue = parseInt(notification.innerHTML);

btnAdd.addEventListener("click", ()=>{
    
    lastValue += userInputNumber;
    notification.innerHTML = lastValue;
    notification.style.display = "block";
    drawProductInModal();
    priceModal.innerHTML = `$125.00 x ${lastValue} <span>$${lastValue*125}.00</span>`;
});
//3# click cart show modal-car...
const btnCart = document.querySelector(".header__car--container");
const modalCart = document.querySelector(".modal-cart");
//const priceModal = document.querySelector(".modal-cart__price");
const productContainer = document.querySelector(".modal-cart__container");
btnCart.addEventListener("click", ()=>{
    modalCart.classList.toggle("show");
    if(lastValue == 0){
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    }else{
        drawProductInModal();
    }
    
});
//4#Clear cart...
function deleteProduct(){
    const btnDelete = document.querySelector(".modal-cart__img-delete");
    btnDelete.addEventListener("click", ()=>{
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        lastValue = 0;
        notification.innerHTML = lastValue;

    });
};
//5#img- click previus and ...
const galleryContainer = document.querySelector(".gallery__container");
const btnNextGallery = document.querySelector(".gallery__next");
const btnPreviusGallery = document.querySelector(".gallery__previus");
let imgIndex = 1;

btnNextGallery.addEventListener("click", ()=>{
    changeNextImg(galleryContainer);
});
btnPreviusGallery.addEventListener("click", ()=>{
    changePreviusImg(galleryContainer);
});


//
function drawProductInModal(){
    productContainer.innerHTML = `
        <div class="modal-cart__product">
            <img src="./images/image-product-1-thumbnail.jpg" alt="product" class="modal-cart__img--product">
            <div class="modal-cart__details">
                <p class="modal-cart__p2">Fall Limited Edition Sneakers</p>
                <p class="modal-cart__price">$125.00 x 3 <span>$375.00</span></p>
            </div>
            <img src="./images/icon-delete.svg" alt="" class="modal-cart__img-delete">
        </div>
        <button class="modal-cart__btnCheckout">Checkout</button>`
    deleteProduct();
    const priceModal = document.querySelector(".modal-cart__price");
    priceModal.innerHTML = `$125.00 x ${lastValue} <span>$${lastValue*125}.00</span>`;
}


function changeNextImg(imgContainer){
   if(imgIndex == 4){
        imgIndex = 1;
   }else{
    imgIndex++;
   }
    imgContainer.style.backgroundImage= `url("/images/image-product-${imgIndex}.jpg")`;
}

function changePreviusImg(imgContainer){
    if(imgIndex == 1){
         imgIndex = 4;
    }else{
     imgIndex--;
    }
     imgContainer.style.backgroundImage= `url("/images/image-product-${imgIndex}.jpg")`;
 }

//Desktop....
//Click in img...
const modalgallery = document.querySelector(".modalgallery");
const btnClosegallery =document.querySelector(".modalgallery__close");

galleryContainer.addEventListener("click", ()=>{
    modalgallery.style.display = "grid";
});
btnClosegallery.addEventListener("click",()=>{
    modalgallery.style.display = "none";
});

//thumbnails...
let thumbnails = document.querySelectorAll(".gallery__thumnail");
thumbnails = [...thumbnails]; //pasando de nodeList a un array...
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", event=>{
        console.log(event.target.id);
        galleryContainer.style.backgroundImage= `url("/images/image-product-${event.target.id}.jpg")`;
    });
});

//modalthumtbnails...Desktop
let modalthumtbnails = document.querySelectorAll(".modalgallery__thumnail");
const modalgalleryContainer = document.querySelector(".modalgallery__img");
modalthumtbnails = [...modalthumtbnails];  //pasando de nodeList a un array...
modalthumtbnails.forEach(cadaElemento =>{
    cadaElemento.addEventListener("click", event=>{
        console.log(event.target.id.slice(-1)); //slice(-1) quita del id la 'm'...
        modalgalleryContainer.style.backgroundImage= `url("/images/image-product-${event.target.id.slice(-1)}.jpg")`;

    });
});
//previus and next in modal....
const btnModalGalleryNext = document.querySelector(".modalgallery__next");
const btnModalGalleryPrevius = document.querySelector(".modalgallery__previus");
btnModalGalleryNext.addEventListener("click", ()=>{
    changeNextImg(modalgalleryContainer);
});
btnModalGalleryPrevius.addEventListener("click", ()=>{
    changePreviusImg(modalgalleryContainer);
});

//navbar....
const btnMenu = document.querySelector(".header__menu");
const navContainer = document.querySelector(".header__modal-navbar");
const btnCloseNavabar = document.querySelector(".header__close-icon");

btnCloseNavabar.addEventListener("click", ()=>{
    navContainer.classList.toggle("show");
});
btnMenu.addEventListener("click", ()=>{
    navContainer.classList.toggle("show");
});



