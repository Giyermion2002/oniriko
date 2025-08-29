# Modelo de Base de Datos

#### **(MODELO SUJETO A CAMBIOS)**

Actualmente, en la base de datos existen 2 tablas en el esquema `oniriko`:

## 📦 Tabla `products`

Para guardar que productos se venderán en la página web. 

- 🔑 id
    - Tipo: `BIGINT (AUTO_INCREMENT, PK)`
    - Nullable: ❌ (obligatorio)
    - Descripción: Identificador único del producto.
- name
    - Tipo: `VARCHAR(50)`
    - Nullable: ❌
    - Descripción: Nombre del producto.
- description
    - Tipo: `VARCHAR(500)`
    - Nullable: ✅
    - Descripción: Descripción detallada del producto.
- precio
    - Tipo: `DECIMAL(10,2)`
    - Nullable: ❌
    - Descripción: Precio del producto, con 2 decimales.
- discount
    - Tipo: `DECIMAL(5,2)`
    - Nullable: ✅ (valor por defecto 0.00)
    - Descripción: Descuento aplicado al producto, con 2 decimales.
- stock
    - Tipo: `BIGINT`
    - Nullable: ❌
    - Descripción: Cantidad disponible en inventario.
- img_url
    - Tipo: `VARCHAR(100)`
    - Nullable: ❌
    - Descripción: URL o ruta de la imagen del producto.

## 🎓 Tabla `courses`

Para guardar los distintos cursos que se impartirán en la cafetería.

- 🔑 id
    - Tipo: `BIGINT (AUTO_INCREMENT, PK)`
    - Nullable: ❌
    - Descripción: Identificador único del curso.

- name
    - Tipo: `VARCHAR(50)`
    - Nullable: ❌
    - Descripción: Nombre del curso.

- description
    - Tipo: `VARCHAR(500)`
    - Nullable: ✅
    - Descripción: Descripción detallada del curso.

- duration_min
    - Tipo: `INT`
    - Nullable: ❌
    - Descripción: Duración del curso en minutos.

- instructors
    - Tipo: `VARCHAR(250)`
    - Nullable: ❌
    - Descripción: Nombre(s) del/los instructores.

- img_url
    - Tipo: `VARCHAR(100)`
    - Nullable: ❌
    - Descripción: URL o ruta de la imagen del curso.

