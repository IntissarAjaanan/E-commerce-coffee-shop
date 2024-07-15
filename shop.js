let products;
let ItemsID = JSON.parse(localStorage.getItem('CItem')) || [];


$(document).ready(function() {
    updateCartCount();
    // loaditems();
});


// function loaditems() {
//     $.ajax({
//         url: '../home/home.json',
//         success: function(rsp) {
//             products = rsp;
//             for (let i = 0; i < rsp.length; i++) {
//                 $("#items").append(`
//                 <div class='card'>
//                     <div class='img'><img src="${rsp[i].img}"></div>
//                     <div class='t'>
//                         <div class='name'>${rsp[i].name}</div>
//                         <div class='description'>${rsp[i].description}</div>
//                         <div class='padd'>
//                             <div class='price'>${rsp[i].price}DH</div>
//                             <div class='btn'>
//                                 <input type='number' value='1' class='plus' min='1' max='100' id='quantity-${rsp[i].id}'>
//                                 <button type='submit' class='add' onclick='AddItem(${rsp[i].id})'><i class="fas fa-shopping-cart"></i></button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 `);
//             }
//         }
//     });
// }

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


function GetItem() {
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


function AddToDOM(items) {
    console.log('hi');
    $("#order").empty(); 
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        let itemTotal = parseFloat(items[i].price) * parseInt(items[i].quantity);
        total += itemTotal;

        console.log("Categorie:", items[i].categorie);

        let st_img= ''; 
        switch (items[i].categorie) {
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

        console.log("Style:", st_img);

        $("#order").append(`
        <div class='card'>
            <div class='iminf'>
                <div class='img'><img src="${items[i].img}" style="${st_img}"></div>
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
            <div class='item-total' style='color:white;'>Total: ${itemTotal}DH</div>
            <div class='remove'>
                <i class='fas fa-trash-alt' data-id='${items[i].id}'></i>
            </div>
        </div>
        `);
    }

    $("#order").append(`<div class='cart-total'>Total: ${total}DH</div>`);

    $('.quantity-input').on('change', function() {
        let id = $(this).data('id');
        let newQuantity = parseInt($(this).val());
        UpdateItemQuantity(id, newQuantity);
    });

    $('.remove .fa-trash-alt').on('click', function() {
        let id = $(this).data('id');
        RemoveItem(id); 
    });
}


function UpdateItemQuantity(id, quantity) {
    let items = JSON.parse(localStorage.getItem('CItem')) || [];
    let itemIndex = items.findIndex(item => item.id === id);

    if (itemIndex > -1) {
        items[itemIndex].quantity = quantity;
        localStorage.setItem('CItem', JSON.stringify(items));
        GetItem(); 
    }
}


function RemoveItem(id) {
    
    let items = JSON.parse(localStorage.getItem('CItem')) || [];
    items = items.filter(item => item.id !== id);
    localStorage.setItem('CItem', JSON.stringify(items));
    GetItem(); 
}
