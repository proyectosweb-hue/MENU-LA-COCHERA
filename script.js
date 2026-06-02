async function loadMenu() {
    try {
        const response = await fetch('data.json');
        const menu = await response.json();
        renderMenu(menu);
    } catch (error) {
        document.getElementById('content').innerHTML = '<p>Error al cargar menú</p>';
    }
}

function renderMenu(menu) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    menu.forEach(category => {
        const section = document.createElement('div');
        section.className = 'section';

        const title = document.createElement('div');
        title.className = 'section-title';
        title.textContent = category.nombre;
        section.appendChild(title);

        category.platos.forEach(dish => {
            const item = document.createElement('div');
            item.className = 'item';

            const name = document.createElement('div');
            name.className = 'item-name';
            name.textContent = dish.nombre;

            const price = document.createElement('div');
            price.className = 'item-price';
            price.textContent = 'RD$ ' + dish.precio.toLocaleString();

            item.appendChild(name);
            item.appendChild(price);
            section.appendChild(item);
        });

        content.appendChild(section);
    });
}

document.getElementById('downloadBtn').addEventListener('click', () => {
    window.print();
});

document.addEventListener('DOMContentLoaded', loadMenu);
