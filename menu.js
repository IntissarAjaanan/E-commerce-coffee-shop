function loaditems(){
    $.ajax({
        url: 'home.json',
        success: function(rsp){
            const allPages = document.querySelectorAll('[data-page]');

            rsp.forEach(item => {
                allPages.forEach(page => {
                    let cat = "";
                    switch (page.dataset.page) {
                        case 'beans':
                            cat = 'Coffee Beans';
                            break;
                        case 'ground':
                            cat = 'Ground Coffee';
                            break;
                        case 'capsules':
                            cat = 'Compatible Capsules';
                            break;
                        case 'instant':
                            cat = 'Instant Coffee';
                            break;
                        case 'green':
                            cat = 'Green Coffee';
                            break;
                    }

                    if (item.categorie === cat) {
                        $('#items').append(`
                <div class='card'>
                    <div class='img'><img src="${item.img}"></div>
                    <div class='t'>
                        <div class='name'>${item.name}</div>
                        <div class='description'>${item.description}</div>
                        <div class='padd'>
                            <div class='price'>${item.price}DH</div>
                        </div>
                    </div>
                </div>
                `);
                    }}
                );
            });

    },
        error: function() {
            console.error('Error loading items.');
        }
    });
}

loaditems();

