// Cargar datos del menú
async function loadMenu() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Error al cargar el menú');
        const data = await response.json();
        renderMenu(data);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('menuGrid').innerHTML =
            '<p style="color:#7a1f1f;text-align:center;">No se pudo cargar el menú (data.json).</p>';
    }
}

// Formatear precio en pesos dominicanos
function formatPrice(value) {
    return 'RD$ ' + value.toLocaleString('es-DO');
}

// Renderizar el menú
function renderMenu(menuData) {
    const container = document.getElementById('menuGrid');
    container.innerHTML = '';

    menuData.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';

        const title = document.createElement('h2');
        title.className = 'category-title';
        const titleSpan = document.createElement('span');
        titleSpan.textContent = category.nombre;
        title.appendChild(titleSpan);
        categoryDiv.appendChild(title);

        category.platos.forEach(dish => {
            const dishDiv = document.createElement('div');
            dishDiv.className = 'dish';

            const name = document.createElement('span');
            name.className = 'dish-name';
            name.textContent = dish.nombre;

            const leader = document.createElement('span');
            leader.className = 'dish-leader';

            const price = document.createElement('span');
            price.className = 'dish-price';
            price.textContent = formatPrice(dish.precio);

            dishDiv.appendChild(name);
            dishDiv.appendChild(leader);
            dishDiv.appendChild(price);
            categoryDiv.appendChild(dishDiv);
        });

        container.appendChild(categoryDiv);
    });
}

// Descargar / imprimir
document.getElementById('downloadBtn').addEventListener('click', function() {
    window.print();
});

document.addEventListener('DOMContentLoaded', loadMenu);
