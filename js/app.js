// voir le Chariot
(function() {
    let cartInfo = document.getElementById('cart-info');
    let cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function() {
        cart.classList.toggle("show-cart");
    });
})();

// ajouter des articles dans mon chariot
(function(){
    let cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach(function(btn){

        btn.addEventListener('click', function(event){

            if(event.target.parentElement.classList.contains('store-item-icon')) 
            {
                let fullPath = event.target.parentElement.previousElementSibling.src;

                let pos = fullPath.indexOf('img') + 3;

                let partPath = fullPath.slice(pos);

                let item = {};

                item.img = `img-cart${partPath}`;

                let name = event.target.parentElement.parentElement.nextElementSibling
                .children[0].children[0].textContent;
                item.name = name;

                let price = event.target.parentElement.parentElement.nextElementSibling
                    .children[0].children[1].textContent;

                item.name = name;

                let finalPrice = price.slice(1).trim();

                item.price = finalPrice;

                let cartItem = document.createElement('div');

                cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');
                cartItem.innerHTML =
                `
            <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>F CFA</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          </div> `;

          //selection de chariot
          let cart = document.getElementById('cart');

          let total = document.querySelector('.cart-total-container');

          cart.insertBefore(cartItem, total)

          alert('Ajouter cet article à votre panier');

          showTotal();

            }  
        });
    });
    //afficher le total
    function showTotal () {
        let total = [];
        let items = document.querySelectorAll(".cart-item-price");

        items.forEach(function(item) {

        total.push(parseFloat(item.textContent));
        });
        //Total argent
        let totalMoney = total.reduce(function(total,item){

            total += item;

            return total;

        },0);

        let finalMoney = totalMoney.toFixed(2);
        document.getElementById('cart-total').textContent = finalMoney;
        document.querySelector('.item-total').textContent = finalMoney;
        document.getElementById('cart-count').textContent = total.length;
    };
})();