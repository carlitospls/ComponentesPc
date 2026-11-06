# ComponentesPC

Tienda online de componentes de PC maquetada a partir de mis mockups de Figma (práctica RA1). Tiene dos páginas: la de inicio (`index.html`) y la de registro (`registro.html`).

**Práctica RA2: Estructuración y maquetación avanzada**
Carlos Francisco Jaén Palacios · 2º DAW

## Funcionalidades

- **Menú hamburguesa**: abre el panel lateral de categorías (Offcanvas de Bootstrap).
- **Cesta**: "Añadir a la cesta" mete el producto en el panel lateral de la cesta (Offcanvas), con cantidades, total y contador en el icono.
- **Rejilla de 12 columnas**: 1 tarjeta por fila en móvil, 2 en tablet y 3 en escritorio.
- **Formulario de registro** (`registro.html`, desde el icono de perfil o "Finalizar compra"), validado con JavaScript: usuario, correo, contraseña, repetir contraseña y aceptar condiciones.
- **Modo claro / oscuro** en las dos páginas; se guarda en `localStorage`.

## Estructura

```
index.html               → página de inicio
registro.html            → formulario de registro
css/bootstrap.min.css    → Bootstrap 5.3.8 (sin modificar)
css/style.css            → mis estilos, compilados desde /scss
js/bootstrap.bundle.min.js
js/script.js             → modo oscuro, cesta y validación
scss/style.scss          → archivo principal (solo importa)
scss/_variables.scss     → colores y fuentes del UI Kit
scss/_mixins.scss        → media query y sombra dura
scss/_theme.scss         → variables de Bootstrap y modo oscuro
scss/_botones.scss       → botones
scss/_layout.scss        → cabecera, paneles y pie
scss/_main.scss          → tarjetas de producto y cesta
scss/_formulario.scss    → página de registro
img/iconos/              → logo e iconos originales, exportados de los mockups de Figma
img/productos/           → imágenes de producto
```

**¿Por qué Bootstrap va en un archivo aparte?** Si se compila Bootstrap dentro de `style.css`, el archivo pasa de 11.000 líneas y es imposible distinguir mi código del suyo. Así `style.css` solo tiene mis estilos (unas 180 líneas). Para personalizar Bootstrap cambio sus variables CSS (`--bs-body-color`, `--bs-btn-bg`…) en `_theme.scss` y `_botones.scss`; como `style.css` se carga después de `bootstrap.min.css`, mis valores ganan.

## Cómo compilar el Sass

1. Instala la extensión **Live Sass Compiler** en VS Code.
2. Abre la carpeta del proyecto. La configuración ya está en `.vscode/settings.json` (guarda el CSS en `/css`).
3. Pulsa **Watch Sass** en la barra inferior. `scss/style.scss` se compila en `css/style.css`.

Alternativa por terminal:

```bash
npx sass --no-source-map scss/style.scss css/style.css
```

## Validación W3C

**HTML** (`index.html` y `registro.html`): https://validator.w3.org/

![Validación HTML index](img/capturas/w3c-html-index.png)

![Validación HTML registro](img/capturas/w3c-html-registro.png)

**CSS** (`style.css`): https://jigsaw.w3.org/css-validator/

![Validación CSS](img/capturas/w3c-css.png)
