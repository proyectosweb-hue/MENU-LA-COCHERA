// Cargar datos del menú
async function loadMenu() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Error al cargar el menú');
        const data = await response.json();
        renderMenu(data);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('menuContainer').innerHTML =
            '<p style="color: red;">Error al cargar el menú. Por favor, asegúrate que existe data.json</p>';
    }
}

// Renderizar el menú
function renderMenu(menuData) {
    const container = document.getElementById('menuGrid');
    container.innerHTML = '';

    menuData.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';

        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category.nombre;

        categoryDiv.appendChild(categoryTitle);

        category.platos.forEach(dish => {
            const dishDiv = document.createElement('div');
            dishDiv.className = 'dish';

            const nameSpan = document.createElement('span');
            nameSpan.className = 'dish-name';
            nameSpan.textContent = dish.nombre;

            const priceSpan = document.createElement('span');
            priceSpan.className = 'dish-price';
            priceSpan.textContent = `RD$ ${dish.precio.toLocaleString('es-DO')}`;

            dishDiv.appendChild(nameSpan);
            dishDiv.appendChild(priceSpan);
            categoryDiv.appendChild(dishDiv);
        });

        container.appendChild(categoryDiv);
    });
}

// Descargar como PDF (usa la función print del navegador)
document.getElementById('downloadBtn').addEventListener('click', function() {
    window.print();
});

// Cargar menú al abrir la página
document.addEventListener('DOMContentLoaded', loadMenu);
