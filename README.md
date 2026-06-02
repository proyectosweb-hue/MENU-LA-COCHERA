# Menú La Cochera

Una web moderna para visualizar y descargar tu menú en formato A4 para imprimir.

## Características

✅ **Vista en A4**: El menú se adapta perfectamente al tamaño de papel A4  
✅ **Descarga fácil**: Botón para descargar el menú como PDF  
✅ **Diseño responsivo**: Se ve bien en móviles, tablets y computadoras  
✅ **Fácil de editar**: Solo necesitas modificar el archivo `data.json`  
✅ **Sin dependencias**: Funciona sin necesidad de instalar nada  

## Cómo usar

### 1. Editar el menú

Abre el archivo `data.json` y reemplaza los platos con los tuyos. La estructura es:

```json
[
    {
        "nombre": "Nombre de la Categoría",
        "platos": [
            { "nombre": "Nombre del plato", "precio": 10.50 },
            { "nombre": "Otro plato", "precio": 12.00 }
        ]
    }
]
```

### 2. Ver el menú

Abre el archivo `index.html` en tu navegador. El menú se cargará automáticamente.

### 3. Descargar para imprimir

Haz clic en el botón **"⬇️ Descargar Menú (PDF)"** y selecciona "Guardar como PDF" en el diálogo de impresión.

## Personalización

### Cambiar colores

En el archivo `styles.css`, busca `#667eea` y `#764ba2` y cámbialos por tus colores preferidos.

### Agregar un logo

Modifica el archivo `index.html` y agrega una imagen después del título:

```html
<img src="tu-logo.png" alt="Logo" style="max-width: 150px; margin-bottom: 20px;">
```

### Cambiar el nombre del restaurante

En `index.html`, reemplaza "Menú La Cochera" con el nombre de tu restaurante.

## Estructura de archivos

```
MENU-LA-COCHERA/
├── index.html      # Página principal
├── styles.css      # Estilos y diseño A4
├── script.js       # Lógica para cargar y mostrar menú
├── data.json       # Los platos del menú
└── README.md       # Este archivo
```

## Notas

- El menú se imprime exactamente como se ve en pantalla
- Los márgenes están configurados para A4 (1cm de margen)
- Puedes editar `data.json` sin tocar el HTML o CSS
- Es completamente seguro: todo funciona en tu navegador, sin enviar datos a servidores

---

**¿Preguntas?** Edita `data.json` con tus platos y ¡listo para usar!
