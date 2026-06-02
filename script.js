// Categorías que pertenecen a BEBIDAS (el resto es COMIDA)
const BEBIDAS = ['Refrescos', 'Frozen', 'Jugos', 'Cervezas', 'Cocteles',
                 'Cócteles', 'Shots', 'Ron', 'Whisky', 'Vino Tinto', 'Vino Blanco'];

async function loadMenu() {
    try {
        const response = await fetch('data.json');
        const menu = await response.json();
        renderMenu(menu);
    } catch (error) {
        document.getElementById('content').innerHTML = '<p>Error al cargar el menú.</p>';
    }
}

function makeBanner(text) {
    const b = document.createElement('div');
    b.className = 'group-banner';
    b.textContent = text;
    return b;
}

function makeSection(category) {
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
        price.textContent = 'RD$ ' + dish.precio.toLocaleString('es-DO');

        item.appendChild(name);
        item.appendChild(price);
        section.appendChild(item);
    });

    return section;
}

function renderMenu(menu) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    let foodBannerAdded = false;
    let drinksBannerAdded = false;

    menu.forEach(category => {
        const esBebida = BEBIDAS.includes(category.nombre);

        if (!esBebida && !foodBannerAdded) {
            content.appendChild(makeBanner('Comida'));
            foodBannerAdded = true;
        }
        if (esBebida && !drinksBannerAdded) {
            content.appendChild(makeBanner('Bebidas'));
            drinksBannerAdded = true;
        }

        content.appendChild(makeSection(category));
    });
}

document.getElementById('downloadBtn').addEventListener('click', () => window.print());
document.addEventListener('DOMContentLoaded', loadMenu);
