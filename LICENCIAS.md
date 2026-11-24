# Licencias de los recursos multimedia

Práctica RA3 · ComponentesPC · Carlos Francisco Jaén Palacios (2º DAW)

Todos los recursos multimedia del proyecto son de **dominio público (CC0)**, tienen una **licencia Creative Commons** que permite modificarlos o son **obra propia**. Las licencias CC BY y CC BY-SA obligan a citar al autor allí donde se usa la obra, así que cuando los recursos se integren en la web (siguiente entrega) los créditos irán también en el pie de `src/index.html`.

## Resumen

| Recurso | Archivo final | Autor | Licencia | Fuente |
|---|---|---|---|---|
| Foto tarjeta gráfica | `src/media/img/gpu.webp` | Jacek Halicki | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2023_Gigabyte_GeForce_RTX_4070_Aero_OC_12GB_(2).jpg) |
| Foto procesador | `src/media/img/cpu.webp` | Jacek Halicki | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2023_Intel_Core_i7_12700KF_(5).jpg) |
| Foto disipador | `src/media/img/disipador.webp` | Jacek Halicki | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2023_Ch%C5%82odzenie_procesora_Jonsbo_CR-1100_ARGB.jpg) |
| Logo (SVG) | `src/media/img/logo.svg` | Carlos Francisco Jaén Palacios | Obra propia | Mi UI Kit de Figma (práctica RA1) |
| Vídeo de cabecera | `src/media/video/hero.mp4` | Diego Alifano | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/deed.es) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Hardware_Bug_-_Stop_motion_test_N%C2%BA1.webm) |
| Sonido de la cesta | `src/media/audio/cesta.mp3` | Kenney (kenney.nl) | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.es) | [Kenney · Interface Sounds](https://kenney.nl/assets/interface-sounds) |

## Detalle por recurso

### Fotografías de producto (3)

- **Originales:** `2023 Gigabyte GeForce RTX 4070 Aero OC 12GB (2).jpg`, `2023 Intel Core i7 12700KF (5).jpg` y `2023 Chłodzenie procesora Jonsbo CR-1100 ARGB.jpg`, de Wikimedia Commons.
- **Autor:** Jacek Halicki (fotografías propias publicadas en Commons).
- **Licencia:** CC BY-SA 4.0 (Atribución-CompartirIgual).
  - **BY:** hay que citar al autor y la licencia. Lo hago en este documento y lo haré en el pie de la web.
  - **SA:** las versiones modificadas tienen que compartirse con la misma licencia. Por eso mis WebP recortados y comprimidos también quedan bajo **CC BY-SA 4.0**.
  - Permite modificar la obra y no tiene cláusula NC, así que también se podría usar en una tienda real.
- **Modificaciones:** encuadre a proporción 4:3 (en la GPU y el disipador, recortando; en el procesador, quedándome solo con la cara delantera y ampliando el lienzo con el mismo color de fondo), reescalado a 800 × 600 px, exportación a WebP (calidad 80 %) y eliminación de los metadatos Exif.
- **Originales en el repo:** `media-bruto/img/` (`gpu-original.jpg`, `cpu-original.jpg` y `disipador-original.jpg`). Son copias de 2.576 px de ancho de los archivos de Commons, cuyo original completo mide entre 4.500 y 4.600 px y pesa entre 4,6 y 9,5 MB.

### Logo

- **Autor:** yo mismo. Lo diseñé en Figma para el UI Kit de la práctica RA1.
- **Licencia:** obra propia, sin recursos de terceros.
- **Modificaciones:** el export directo de Figma está en `media-bruto/img/logo-figma.svg`. La versión final (`src/media/img/logo.svg`) está optimizada: coordenadas redondeadas a 2 decimales y sin atributos ni espacios sobrantes, manteniendo el `viewBox` para que escale bien. Pasa de 708 B a 508 B y no tiene imágenes bitmap incrustadas.

### Vídeo de cabecera

- **Original:** `Hardware Bug - Stop motion test Nº1.webm` (WebM VP8, 1920 × 1080, 45 s), de Wikimedia Commons. Es un stop motion de un disco duro SCSI desmontado.
- **Autor:** Diego Alifano. Se publicó primero en YouTube con licencia Creative Commons Atribución, y Commons verificó esa licencia.
- **Licencia:** CC BY 3.0. Permite modificar y usar el vídeo citando al autor.
- **Modificaciones:** recorte de los segundos 24 a 36 (12 s, la parte de los platos, sin el título inicial), reescalado a 720p y recodificación a MP4 (H.264, calidad constante RF 23, optimizado para web). Se exporta sin pista de audio porque el vídeo va de fondo y en silencio.

### Sonido de la cesta

- **Original:** `confirmation_001.ogg`, del pack *Interface Sounds* de Kenney (kenney.nl). El `License.txt` del pack indica CC0.
- **Autor:** Kenney.
- **Licencia:** CC0 1.0, dominio público. No es obligatorio citarlo, pero lo cito igualmente.
- **Modificaciones:** recorte de los silencios del principio y del final, fade in de 10 ms y fade out de 50 ms (el sonido dura 0,3 s, así que un fade más largo se lo comería), normalización a −1 dB de pico y exportación a MP3 a 128 kbps constantes (CBR).
