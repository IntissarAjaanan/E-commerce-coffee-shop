let products;
function loaditems(){
    
    
    $.ajax({
        url:'home.json',
        success: function(rsp){
            products=rsp
            displayFilteredProducts(products);
            const pageType = document.body.getAttribute('data-page');
    if(pageType!='home'){
            $('#items').empty();
            rsp.forEach(item => {
                    if (item.categorie === pageType) {
                        console.log(item.categorie);
                        console.log(pageType);
                        console.log(item);
                        $('#items').append(`
                            <div class='card'>
                                <div class='img'><img src="${item.img}"></div>
                                <div class='t'>
                                    <div class='name'>${item.name}</div>
                                    <div class='description'>${item.description}</div>
                                    <div class='padd'>
                                        <div class='price'>${item.price}DH</div>
                                        <div class='btn'><input type='number' value='1' class='plus' min='1' max='100' id='quantity-${item.id}'><button type='submit' class='add' onclick='AddItem(${item.id})'><i class="fas fa-shopping-cart"></i></button></div>
                                    </div>
                                </div>
                            </div>
                        `);
                    }
            });
    }else{
        $("#items").empty();
        for(let i=0;i<rsp.length;i++){
            let st_img= ''; 
            switch (rsp[i].categorie) {
                case 'Ground Coffee':
                    st_img = 'width:220px;height:160px;margin-top:25px;';
                    break;
                case 'Green Coffee':
                    st_img = 'width:150px;height:220px;';
                    break;
                case 'Compatible Capsules':
                    st_img = 'width:200px;height:210px;';
                    break;
                case 'Instant Coffee':
                    st_img = 'width:220px;height:190px;';
                    break;
                default:
                    st_img = ''; 
            }
            
            console.log(rsp[i].id);
            $("#items").append(`
            <div class='card'>
                <div class='img'style='height:210px;'><img src="${rsp[i].img}" style="${st_img}"></div>
                <div class='t'>
                    <div class='name'>${rsp[i].name}</div>
                    <div class='description'>${rsp[i].description}</div>
                    <div class='padd'>
                        <div class='price'>${rsp[i].price}DH</div>
                        <div class='btn'><input type='number' value='1' class='plus' min='1' max='100' id='quantity-${rsp[i].id}'><button type='submit' class='add' onclick='AddItem(${rsp[i].id})'><i class="fas fa-shopping-cart"></i></button></div>
                    </div>
                </div>
            </div>
            `)
        }
    }
}
});
}
loaditems();



let ItemsID = JSON.parse(localStorage.getItem('CItem')) || [];

function AddItem(id) {
    let quantity = parseInt($(`#quantity-${id}`).val());
    let items = JSON.parse(localStorage.getItem('CItem')) || [];
    let itemIndex = items.findIndex(item => item.id === id);

    if (itemIndex > -1) {
        items[itemIndex].quantity += quantity;
    } else {
        items.push({ id: id, quantity: quantity });
    }

    localStorage.setItem('CItem', JSON.stringify(items));
    updateCartCount();
}

function updateCartCount() {
    let items = JSON.parse(localStorage.getItem('CItem')) || [];
    $('#p').html(items.length);
}


$(document).ready(function() {
    let items = JSON.parse(localStorage.getItem('CItem')) || [];
    $('#p').html(items.length);
});


function GetItem(){
    let chosen = [];
    let items = JSON.parse(localStorage.getItem('CItem')) || [];

    for (let i = 0; i < items.length; i++) {
        let product = products.find((product) => product.id == items[i].id);
        if (product) {
            product.quantity = items[i].quantity;
            chosen.push(product);
        }
    }

    AddToDOM(chosen);
}

function AddToDOM(items){
    console.log(items);
    let total=0;
    for(let i=0;i<items.length;i++){
        let itemTotal = items[i].price * items[i].quantity;
        total += itemTotal;
        $("#order").append(`
        <div class='card'>
            <div class='iminf'>
            <div class='img'><img src="${items[i].img}"></div>
            <div class='t'>
                <div class='name'>${items[i].name}</div>
                <div class='description'>${items[i].description}</div>
                <div class='padd'>
                    <div class='price'>${items[i].price}DH</div>
                </div>
            </div>
            </div>
            <div class='inp'>
                <input type='number' min='1' max='100' value='${items[i].quantity}' data-id='${items[i].id}' class='quantity-input'>
            </div>
            <div class='remove' >
                <i class='fas fa-trash-alt' data-id='${items[i].id}'></i>
            </div>
        </div>
        `)
    }
    $("#main").append(`
        <div class="total">
                <p>Total: <span>${total}</span> DH</p>
                <button type="submit"><a href="pay.html">Shop Now</a></button>
        </div>
    `)

    $('.quantity-input').on('change', function() {
        let id = $(this).data('id');
        let newQuantity = parseInt($(this).val());
        UpdateItemQuantity(id, newQuantity);
    });

    $('.remove .fa-trash-alt').on('click', function() {
        let id = $(this).data('id');
        console.log(id);
        RemoveItem(id);
    });
}

function UpdateItemQuantity(id, quantity) {
    let items = JSON.parse(localStorage.getItem('CItem')) || [];
    let itemIndex = items.findIndex(item => item.id === id);

    if (itemIndex > -1) {
        items[itemIndex].quantity = quantity;
        localStorage.setItem('CItem', JSON.stringify(items));
        location.reload();
    }
}

function RemoveItem(id) {
    let items = JSON.parse(localStorage.getItem('CItem')) || [];
    items = items.filter(item => item.id !== id);
    localStorage.setItem('CItem', JSON.stringify(items));
    $(`.remove .fas.fa-trash-alt[data-id='${id}']`).closest('.card').remove();
    location.reload();
}







$(document).ready(function() {
    $('input[name="c"]').change(function() {
        filterProducts();
    });

    $('#priceRange').on('input', function() {
        $('#priceOutput').text(`Price: ${$(this).val()} DH`);
        filterProducts();
    });
});

function filterProducts() {
    let category = $('input[name="c"]:checked').val();
    let price = parseInt($('#priceRange').val());

    let filteredProducts = products.filter(function(product) {
        let matchCategory = category ? product.categorie === category : true;
        let matchPrice = product.price <= price;
        return matchCategory && matchPrice;
    });

    displayFilteredProducts(filteredProducts);
}


function searchProducts() {
    let searchQuery = $('#input-s').val().trim().toLowerCase();

    let filteredProducts = products.filter(function(product) {
        return product.name.toLowerCase().includes(searchQuery) || 
               product.categorie.toLowerCase().includes(searchQuery);
    });

    displayFilteredProducts(filteredProducts);
}
$(document).ready(function() {
    $('#input-s').on('input', searchProducts);
});

function displayFilteredProducts(filteredProducts) {
    $("#items").empty();
    if (filteredProducts.length === 0) {
        $("#items").append("<p id='not'>No products found.</p>");
        return;
    }
    filteredProducts.forEach(function(product) {
        let st_img= ''; 
            switch (product.categorie) {
                case 'Ground Coffee':
                    st_img = 'width:220px;height:160px;margin-top:25px;';
                    break;
                case 'Green Coffee':
                    st_img = 'width:150px;height:220px;';
                    break;
                case 'Compatible Capsules':
                    st_img = 'width:200px;height:210px;';
                    break;
                case 'Instant Coffee':
                    st_img = 'width:220px;height:190px;';
                    break;
                default:
                    st_img = ''; 
            }
        $("#items").append(`
            <div class='card'>
                <div class='img'><img src="${product.img}" style='${st_img}'></div>
                <div class='t'>
                    <div class='name'>${product.name}</div>
                    <div class='description'>${product.description}</div>
                    <div class='padd'>
                        <div class='price'>${product.price} DH</div>
                        <div class='btn'>
                            <input type='number' value='1' class='plus' min='1' max='100' id='quantity-${product.id}'>
                            <button type='submit' class='add' onclick='AddItem(${product.id})'>
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
}
