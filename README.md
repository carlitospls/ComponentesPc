# ComponentesPC

Tienda online de componentes de PC maquetada a partir de mis mockups de Figma (práctica RA1). Tiene dos páginas: la de inicio (`index.html`) y la de registro (`registro.html`).

**Práctica RA2: Estructuración y maquetación avanzada** · **Práctica RA3: Preparación y optimización de recursos multimedia**
Carlos Francisco Jaén Palacios · 2º DAW

## Funcionalidades

- **Menú hamburguesa**: abre el panel lateral de categorías (Offcanvas de Bootstrap).
- **Cesta**: "Añadir a la cesta" mete el producto en el panel lateral de la cesta (Offcanvas), con cantidades, total y contador en el icono.
- **Rejilla de 12 columnas**: 1 tarjeta por fila en móvil, 2 en tablet y 3 en escritorio.
- **Formulario de registro** (`registro.html`, desde el icono de perfil o "Finalizar compra"), validado con JavaScript: usuario, correo, contraseña, repetir contraseña y aceptar condiciones.
- **Modo claro / oscuro** en las dos páginas; se guarda en `localStorage`.

## Estructura

```
media-bruto/                 → originales sin optimizar (RA3), no los usa la web
  img/  audio/  video/
src/                         → la web
  index.html                 → página de inicio
  registro.html              → formulario de registro
  css/bootstrap.min.css      → Bootstrap 5.3.8 (sin modificar)
  css/style.css              → mis estilos, compilados desde /src/scss
  js/bootstrap.bundle.min.js
  js/script.js               → modo oscuro, cesta y validación
  scss/style.scss            → archivo principal (solo importa)
  scss/_variables.scss       → colores y fuentes del UI Kit
  scss/_mixins.scss          → media query y sombra dura
  scss/_theme.scss           → variables de Bootstrap y modo oscuro
  scss/_botones.scss         → botones
  scss/_layout.scss          → cabecera, paneles y pie
  scss/_main.scss            → tarjetas de producto y cesta
  scss/_formulario.scss      → página de registro
  img/iconos/                → logo e iconos originales, exportados de los mockups de Figma
  img/productos/             → ilustraciones de producto (se sustituirán por las fotos de /media)
  media/                     → recursos multimedia optimizados (RA3), listos para integrar
    img/  audio/  video/
LICENCIAS.md                 → autor, fuente y licencia de cada recurso
```

**¿Por qué Bootstrap va en un archivo aparte?** Si se compila Bootstrap dentro de `style.css`, el archivo pasa de 11.000 líneas y es imposible distinguir mi código del suyo. Así `style.css` solo tiene mis estilos (unas 180 líneas). Para personalizar Bootstrap cambio sus variables CSS (`--bs-body-color`, `--bs-btn-bg`…) en `_theme.scss` y `_botones.scss`; como `style.css` se carga después de `bootstrap.min.css`, mis valores ganan.

## Cómo compilar el Sass

1. Instala la extensión **Live Sass Compiler** en VS Code.
2. Abre la carpeta del proyecto. La configuración ya está en `.vscode/settings.json` (guarda el CSS en `/src/css`).
3. Pulsa **Watch Sass** en la barra inferior. `src/scss/style.scss` se compila en `src/css/style.css`.

Alternativa por terminal:

```bash
npx sass --no-source-map src/scss/style.scss src/css/style.css
```

## Validación W3C

**HTML** (`index.html` y `registro.html`): https://validator.w3.org/

![Validación HTML index](src/img/capturas/w3c-html-index.png)

![Validación HTML registro](src/img/capturas/w3c-html-registro.png)

**CSS** (`style.css`): https://jigsaw.w3.org/css-validator/

![Validación CSS](src/img/capturas/w3c-css.png)

## RA3: recursos multimedia

En esta entrega los recursos están preparados y optimizados, pero todavía no se usan en la web: se integrarán en la siguiente entrega.

| Recurso | Dónde se usará | Formato final | Por qué |
|---|---|---|---|
| Logo | Cabecera de las dos páginas (ya está en `img/iconos/`) | SVG | Es vectorial: se ve nítido a cualquier tamaño y pesa menos de 1 KB. |
| 3 fotos de producto | Tarjetas de "Ofertas" | WebP 800 × 600, calidad 80 % | A igual calidad pesa mucho menos que JPEG. 800 px es el doble de lo que ocupa la tarjeta (400 px), así se ve nítida en pantallas de alta densidad. |
| Vídeo | Cabecera de la página de inicio, de fondo | MP4 (H.264), 720p, RF 23, sin audio | MP4 + H.264 se reproduce en todos los navegadores. Como va de fondo y en silencio, la pista de audio solo añadiría peso. |
| Sonido | Al pulsar "Añadir a la cesta" | MP3, 128 kbps CBR | Compatible con todos los navegadores. Sonará tras un clic, así que el navegador no lo bloqueará como haría con un autoplay. |

### Antes y después

| Recurso | Original (`media-bruto/`) | Optimizado (`src/media/`) | Reducción |
|---|---|---|---|
| gpu | 2.576 × 1.664 px · 327 KB (JPG) | 800 × 600 px · 31,9 KB (WebP) | 90,2 % |
| cpu | 2.576 × 1.557 px · 913 KB (JPG) | 800 × 600 px · 39,8 KB (WebP) | 95,6 % |
| disipador | 2.576 × 1.995 px · 261 KB (JPG) | 800 × 600 px · 15,8 KB (WebP) | 93,9 % |
| logo | 708 B (export directo de Figma) | 508 B (SVG optimizado) | 28,2 % |
| vídeo | 1920 × 1080 · 45 s · 12,55 MB (WebM, 2,3 Mbps) | 1280 × 720 · 12 s · 0,87 MB (MP4, 0,6 Mbps) | 93,1 % |
| sonido | 8,8 KB (OGG, 240 kbps) | 5,8 KB (MP3, 128 kbps CBR) | 34,3 % |

En el vídeo, parte de la reducción viene de recortarlo de 45 s a 12 s. Comparando por segundo, el bitrate baja de 2,3 Mbps a 0,6 Mbps (un 74 % menos).

Autores y licencias: ver [LICENCIAS.md](LICENCIAS.md).
