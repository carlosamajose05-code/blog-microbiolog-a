# Un Vistazo al Micro-Mundo

Página del trabajo de microbiología (bacteria, hongo, virus y parásito).

## Cómo está organizado

- `index.html`: el diseño y el funcionamiento de la página. **No se toca.**
- `contenido.js`: todos los textos, títulos, referencias y videos. **Aquí se edita.**
- `img/`: las imágenes de la página.

Cuando se guarda un cambio en GitHub, la página se actualiza sola en el mismo link (tarda aproximadamente un minuto).

## Cómo cambiar un texto

1. En GitHub, abre `contenido.js`.
2. Pulsa el lápiz (**Edit this file**), arriba a la derecha.
3. Busca el texto con `Ctrl + F`, cámbialo y no borres las comillas ni las comas.
4. Pulsa **Commit changes** (abajo o arriba a la derecha).

## Cómo agregar un bloque nuevo

Copia un bloque completo, desde `{t:"..."` hasta su `}` final, y pégalo debajo de otro. Deja una coma entre bloques:

```js
{t:"Título del bloque",
 p:"Texto del bloque. Para separar párrafos usa \n\n",
 img:[{src:"img/mi-imagen.webp", fuente:"Referencia de la imagen", alt:"Qué se ve en la imagen"}]},
```

## Cómo agregar una imagen

1. En GitHub, entra a la carpeta `img`.
2. Pulsa **Add file → Upload files** y sube la imagen (mejor en formato `.webp`, `.jpg` o `.png`, sin espacios ni tildes en el nombre).
3. Pulsa **Commit changes**.
4. En `contenido.js`, escribe su nombre en `src`, por ejemplo `img/mi-imagen.webp`.

## Cómo agregar el video del podcast

Agrega este bloque al final de la lista de bloques del microorganismo. Reemplaza `CODIGO` por lo que va después de `youtu.be/` en el link (sin lo que viene después del `?`):

```js
{t:"Podcast", video:"CODIGO"}
```

El video en YouTube debe estar en **No listado** o **Público** y con la incrustación permitida. Si está en privado, la página mostrará el mensaje "Este video es privado".

## Si algo se daña

Casi siempre es una comilla o una coma que se borró. Para deshacer el cambio, en GitHub entra a `contenido.js`, pulsa **History**, abre la versión anterior y restaúrala.
