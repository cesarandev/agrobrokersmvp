# AG_005 — Prompt de Diseño UX/UI
## Landing de Familias + Marketplace con Filtro Preactivado
### AgroBrokers · agrobrokers.com.co · Alta Fidelidad · v1.0

---

> **Instrucción para Claude Design:** Este documento define el diseño completo de dos vistas consecutivas que conforman la sección de Productos del sitio de AgroBrokers. Lee todo antes de diseñar. El sistema de marca (colores, tipografías, logo) ya fue definido en AG_004. Este prompt extiende ese sistema al flujo de catálogo. Adjunto el logo oficial en PNG/SVG.

---

## 0. Contexto del flujo

La sección **Productos** funciona en **dos pasos consecutivos**:

```
[ Menú: "Productos" ]
        ↓
[ VISTA 1: Landing de Familias ]
  8 tarjetas visuales, una por familia
  CTA: "Ver productos [Familia]"
        ↓  (clic en CTA de una tarjeta)
[ VISTA 2: Marketplace ]
  Filtro lateral preactivado con la familia seleccionada
  Grid de tarjetas de producto
  Panel de búsqueda y filtros
```

El usuario **nunca aterriza directamente en el marketplace vacío**. Siempre pasa primero por la landing de familias, que actúa como contexto y orientación antes del catálogo. El filtro preactivado elimina la fricción: el usuario ya llega viendo solo los productos que le interesan.

**Parámetro técnico:** el filtro viaja como URL param `?familia=nombre` (ej: `?familia=growflex`). El marketplace lee ese parámetro al montar la vista y activa el filtro lateral correspondiente.

---

## 1. Sistema de Marca (resumen desde AG_004)

### Colores

| Rol | Hex | Uso en este flujo |
|---|---|---|
| Verde corporativo | `#2D6A2F` | Botones primarios, filtro activo, badges, íconos |
| Verde oscuro | `#1B5E20` | Hover de botones, encabezado del panel de filtros |
| Beige base | `#F5F0E8` | Fondo de la landing de familias, fondo del panel de filtros |
| Beige medio | `#E8E0D0` | Fondo de filas alternas en lista de productos |
| Verde claro | `#E8F5E9` | Estado hover de tarjeta de familia, fondo de filtro activo |
| Dorado | `#B8860B` | Badge "A la medida" exclusivo (Tailored To y Chronos) |
| Texto principal | `#1A1A1A` | Nombres de producto, títulos de sección |
| Texto secundario | `#6B7280` | Descripciones, metadatos, placeholders |
| Blanco | `#FFFFFF` | Fondo de tarjetas de producto, texto sobre fondos oscuros |
| Borde suave | `#E5E7EB` | Bordes de tarjetas en reposo |
| Verde WhatsApp | `#25D366` | Botón "Consultar por WhatsApp" exclusivamente |

### Tipografías

| Fuente | Rol | Tamaño en este flujo |
|---|---|---|
| **Exo SemiBold** | Títulos de sección, nombres de familia, headings del marketplace | 32–36px (H2) · 18–20px (nombre familia/producto) |
| **Poppins Regular / Medium** | Taglines, descripciones de producto, labels de filtro, botones | 14–16px body · 13px labels · 15px botones |
| **Poppins SemiBold** | Nombres de producto en tarjeta, labels de campos, CTA | 15–16px |

> Croogla se reserva exclusivamente para el hero del homepage. En el flujo de productos no se usa.

---

## 2. VISTA 1 — Landing de Familias

### 2.1 Propósito y tono

La landing de familias es la **puerta de entrada al catálogo**. Su función es orientar al usuario B2B antes de mostrarle el grid de productos. Cada tarjeta comunica el posicionamiento técnico de la línea, no solo el nombre. El tono es profesional, técnico y limpio — no catálogo de supermercado.

### 2.2 Estructura de la página

```
┌─────────────────────────────────────────────────────────┐
│  HEADER (sticky, heredado del homepage)                 │
├─────────────────────────────────────────────────────────┤
│  BREADCRUMB: Inicio > Productos                         │
├─────────────────────────────────────────────────────────┤
│  ENCABEZADO DE SECCIÓN                                  │
│  Título + Subtítulo + (barra de búsqueda rápida)        │
├─────────────────────────────────────────────────────────┤
│  GRID DE 8 TARJETAS DE FAMILIA                          │
│  4 columnas × 2 filas — desktop                         │
│  2 columnas × 4 filas — tablet                          │
│  1 columna × 8 filas — mobile                           │
├─────────────────────────────────────────────────────────┤
│  BANDA CTA INFERIOR                                     │
│  "¿No encuentra lo que busca? Háblenos directamente"    │
├─────────────────────────────────────────────────────────┤
│  FOOTER (heredado del homepage)                         │
└─────────────────────────────────────────────────────────┘
```

### 2.3 Encabezado de la sección

- **Fondo:** beige `#F5F0E8`
- **Breadcrumb:** `Inicio / Productos` — Poppins 13px · color `#6B7280` — posición top-left bajo el header
- **Título H1:** `Nuestro Portafolio` — Exo Bold 44px · color `#1A1A1A` · centrado
- **Subtítulo:** `Ocho líneas de nutrición vegetal diseñadas para cubrir cada necesidad de su cultivo. Seleccione una familia para explorar el catálogo.` — Poppins Regular 17px · color `#6B7280` · centrado · max-width 680px
- **Barra de búsqueda rápida** (opcional en el prototipo): campo de texto con placeholder `"Buscar por producto, fórmula o cultivo..."` · borde `#D1D5DB` · ícono lupa verde · ancho 480px · centrado bajo el subtítulo

**Padding de la sección:** 80px top · 48px bottom

### 2.4 Tarjetas de familia — anatomía

Cada tarjeta es un componente visual con **imagen + badge + nombre + tagline + CTA**. El grid tiene `gap: 24px`.

```
┌──────────────────────────┐
│  [IMAGEN 4:3]            │ ← fotografía de campo / producto
│  [BADGE familia]  top-L  │ ← etiqueta de color sobre la imagen
│                          │
├──────────────────────────┤
│  Nombre de la familia    │ ← Exo Bold 18px #1A1A1A
│  Tagline 2 líneas        │ ← Poppins 14px #6B7280
│                          │
│  [Ver productos →]       │ ← link verde con flecha
└──────────────────────────┘
```

**Estados de la tarjeta:**
- **Reposo:** fondo blanco · borde `1px solid #E5E7EB` · border-radius 8px · sombra `0 2px 8px rgba(0,0,0,0.06)`
- **Hover:** `translateY(-6px)` · sombra `0 12px 32px rgba(45,106,47,0.15)` · borde `1px solid #2D6A2F` · transición 0.25s ease
- **Imagen en hover:** leve zoom `scale(1.03)` con `overflow: hidden` en el contenedor

**Imagen:**
- Proporción 4:3 · width 100% del ancho de la tarjeta
- Placeholder en el prototipo: fotografía de agricultura técnica de alta calidad (campo, cultivos, laboratorio agrónomo). Una imagen diferente por familia.
- `object-fit: cover` · border-radius 8px 8px 0 0

**Padding del contenido:** 20px lateral · 16px vertical

**CTA de la tarjeta:** `Ver productos [Nombre familia] →`
- Poppins SemiBold 14px · color `#2D6A2F`
- Sin borde ni fondo — solo texto con flecha
- Al hacer clic: navega al marketplace con `?familia=[slug]` preactivado
- Hover: `color: #1B5E20` · subrayado

### 2.5 Las 8 tarjetas — contenido exacto

| # | Familia | Tagline (texto exacto para la tarjeta) | Badge color | Slug URL |
|---|---|---|---|---|
| 1 | **Tailored To** | Fórmulas diseñadas a la medida de cada finca según análisis de suelo y foliar. | Dorado `#B8860B` · texto blanco · label "A la medida" | `?familia=tailored-to` |
| 2 | **Chronos** | Liberación controlada: el nutriente disponible en el momento exacto que el cultivo lo necesita. | Verde oscuro `#1B5E20` · texto blanco | `?familia=chronos` |
| 3 | **ActiCoox** | Fósforo y potasio de alta eficiencia: FosfoCox y ProduCox para maximizar la absorción radical. | Verde medio `#388E3C` · texto blanco | `?familia=acticoox` |
| 4 | **NutriLimit** | Elementos menores especializados — boro y zinc — para una nutrición vegetal verdaderamente completa. | Teal `#00796B` · texto blanco | `?familia=nutrilimit` |
| 5 | **NovaMix / NextGen** | Fertilizantes simples de nueva generación y convencionales de alta pureza para cualquier sistema. | Azul acero `#1565C0` · texto blanco | `?familia=novamix` |
| 6 | **Solumix** | Hidrosolubles de precisión formulados para sistemas de fertirrigación de alto rendimiento. | Celeste `#0277BD` · texto blanco | `?familia=solumix` |
| 7 | **GrowFlex** | Compuestos mezclados NPK con marcas propias y genéricos para los cultivos más exigentes del país. | Verde lima `#558B2F` · texto blanco | `?familia=growflex` |
| 8 | **CoverMax** | Semillas de cobertura para la gestión sostenible del suelo y sistemas silvopastoriles. | Marrón tierra `#5D4037` · texto blanco | `?familia=covermax` |

> **Badge "A la medida":** Tailored To y Chronos llevan badge dorado `#B8860B` con el texto "A la medida" en lugar del nombre de la familia. Este badge comunica que no tienen catálogo fijo y requieren consulta previa.

### 2.6 Banda CTA inferior

- **Fondo:** verde corporativo `#2D6A2F`
- **Texto:** `¿Tiene una necesidad específica que no encaja en ninguna línea?` — Exo SemiBold 22px · blanco · centrado
- **Subtexto:** `Nuestro equipo técnico diseña soluciones a la medida.` — Poppins Regular 16px · `rgba(255,255,255,0.85)` · centrado
- **Botones (en fila):**
  - `Solicitar consulta técnica` — fondo beige `#F5F0E8` · texto verde · Poppins SemiBold 15px · padding 14px 32px
  - `Escribir por WhatsApp` — fondo `#25D366` · texto blanco · ícono WhatsApp · mismo padding
- **Padding:** 56px vertical

---

## 3. VISTA 2 — Marketplace con Filtro Preactivado

### 3.1 Propósito

El marketplace es una **vista única de catálogo** que recibe un parámetro de familia desde la landing. Al cargar, el filtro lateral ya está activo y el grid muestra exclusivamente los productos de esa familia. El usuario puede quitar el filtro, cambiarlo o buscarlo en cualquier momento.

### 3.2 Layout general — desktop (1440px)

```
┌────────────────────────────────────────────────────────────────────┐
│  HEADER (sticky)                                                   │
├────────────────────────────────────────────────────────────────────┤
│  BREADCRUMB + TÍTULO DINÁMICO                                      │
│  "Productos / GrowFlex" (cambia según filtro activo)               │
├───────────────┬────────────────────────────────────────────────────┤
│               │  BUSCADOR + CONTADOR                               │
│  PANEL DE     │  "Mostrando 17 productos de GrowFlex"              │
│  FILTROS      ├────────────────────────────────────────────────────┤
│  (lateral     │                                                    │
│   fijo)       │  GRID DE TARJETAS DE PRODUCTO                     │
│               │  3 columnas desktop / 2 tablet / 1 mobile          │
│  280px        │                                                    │
│               │                                                    │
│               │  [paginación o load more]                          │
└───────────────┴────────────────────────────────────────────────────┘
```

**Proporciones desktop:** panel lateral 280px fijo · contenido principal ocupa el resto · gap entre panel y grid: 32px

**Mobile:** el panel de filtros se colapsa en un drawer/offcanvas activado por botón "Filtrar" en la parte superior del grid.

### 3.3 Breadcrumb y título dinámico

- **Posición:** debajo del header, encima del layout de dos columnas
- **Breadcrumb:** `Inicio / Productos / [Nombre de familia activa]` — Poppins 13px · color `#6B7280`
- **Botón "← Ver todas las familias":** link texto con flecha izquierda · color `#2D6A2F` · Poppins 14px · posición: mismo nivel que el breadcrumb, alineado a la derecha

### 3.4 Panel de filtros lateral

**Encabezado del panel:**
- Fondo: `#2D6A2F` · texto blanco
- Texto: `Filtrar por familia` — Exo SemiBold 16px · blanco
- Botón `Limpiar filtros` — texto pequeño `#B8D4B9` · Poppins 13px · aparece solo cuando hay filtro activo

**Lista de familias (8 ítems):**

Cada ítem de familia en el panel de filtros:
- Fondo en reposo: `#F5F0E8` · texto `#1A1A1A` · Poppins Regular 15px
- Estado activo (familia seleccionada): fondo `#E8F5E9` · borde izquierdo `3px solid #2D6A2F` · texto `#2D6A2F` · Poppins SemiBold 15px
- Hover no activo: fondo `#EDE8DF` · cursor pointer
- Punto de color de familia a la izquierda del nombre (mismo color del badge de la tarjeta)
- Contador de productos entre paréntesis a la derecha: ej. `GrowFlex (17)` — Poppins 13px · color `#6B7280`

**Familias en el panel (orden y conteos aproximados):**

```
● Tailored To          (1)   [badge dorado]
● Chronos              (2)   [badge verde oscuro]
● ActiCoox             (2)   [badge verde medio]
● NutriLimit           (4)   [badge teal]
● NovaMix / NextGen   (10)   [badge azul acero]
● Solumix              (1)   [badge celeste]
● GrowFlex            (17)   [badge verde lima]
● CoverMax             (4)   [badge marrón]
```

> Los conteos son aproximados y se ajustan al cargar el catálogo real en WordPress. Usar estos valores en el prototipo.

**Sección de búsqueda dentro del panel:**
- Separador horizontal `1px solid #D4C9B8`
- Label: `Buscar producto` — Poppins SemiBold 13px · `#374151`
- Campo: `"Nombre, fórmula o cultivo..."` · borde `#D1D5DB` · border-radius 4px · padding 10px 12px · ícono lupa gris dentro del campo

### 3.5 Área de resultados

**Barra superior del grid:**
- Contador dinámico: `Mostrando 17 productos · Familia: GrowFlex` — Poppins Regular 14px · `#6B7280`
- Alineado a la izquierda · misma línea que el buscador del panel
- Botón mobile "Filtrar ⚙" — visible solo en mobile · fondo `#2D6A2F` · texto blanco · border-radius 4px

**Grid de tarjetas:**
- 3 columnas desktop · 2 tablet · 1 mobile
- Gap: `24px`
- Fondo del área: beige claro `#FAF8F4`

### 3.6 Tarjeta de producto — anatomía completa

```
┌──────────────────────────────┐
│  [IMAGEN DEL PRODUCTO]       │ ← arte oficial del producto
│                 [BADGE FAM.] │ ← badge de color esquina sup. der.
├──────────────────────────────┤
│  Nombre del producto         │ ← Exo SemiBold 16px #1A1A1A
│  Fórmula: 14-25-10-3,2 MgO  │ ← Poppins Regular 13px #6B7280
│  ICA: Reg. 10861             │ ← Poppins 12px #6B7280 (si aplica)
│                              │
│  Texto comercial breve       │ ← Poppins 14px #4B5563 · 2 líneas
│                              │
│  [Obtener ficha técnica]     │ ← Botón primario verde relleno
│  [Consultar por WhatsApp]    │ ← Botón secundario outline verde
└──────────────────────────────┘
```

**Imagen del producto:**
- Proporción 1:1 (cuadrada)
- `object-fit: contain` (los artes de producto tienen fondo blanco o transparente)
- Fondo del área de imagen: `#F9FAFB`
- Padding interno: 16px
- border-radius: 8px 8px 0 0

**Badge de familia:**
- Esquina superior derecha sobre la imagen
- Mismo color del badge definido en la tabla de familias
- Poppins SemiBold 11px · texto blanco · padding 4px 10px · border-radius 0 8px 0 4px

**Badge especial "A la medida":**
- Aparece en productos de Tailored To y Chronos
- Color dorado `#B8860B` · texto blanco · mismo estilo
- Reemplaza el badge de familia normal

**Nombre del producto:** Exo SemiBold 16px · `#1A1A1A` · max 2 líneas · `overflow: hidden`

**Fórmula nutricional:** Poppins Regular 13px · `#6B7280` · aparece cuando el producto tiene fórmula definida (ej: `14-25-10-3,2 MgO`)

**Registro ICA:** `Reg. ICA [número]` — Poppins 12px · `#6B7280` · solo aparece si el producto tiene ICA asignado. Ícono de escudo pequeño a la izquierda del número.

**Texto comercial breve:** Poppins Regular 14px · `#4B5563` · máximo 2 líneas · el texto exacto es provisto por el cliente (Brief B3). En el prototipo usar el tagline técnico de la familia como placeholder.

**Área de CTAs:** padding 16px · separados por `gap: 8px` · ambos de ancho 100%

**Estado hover de la tarjeta:** sombra `0 8px 24px rgba(45,106,47,0.12)` · `translateY(-4px)` · borde `1px solid #2D6A2F` · transición 0.2s ease

**Estado sin ICA:** el campo de ICA simplemente no aparece — no mostrar "N/A" ni espacios vacíos.

### 3.7 CTAs de las tarjetas de producto

#### CTA 1 — "Obtener ficha técnica"

- **Tipo:** botón primario · ancho 100%
- **Estilo:** fondo `#2D6A2F` · texto blanco · Poppins SemiBold 14px · padding 11px 16px · border-radius 4px
- **Hover:** fondo `#1B5E20` · cursor pointer
- **Ícono:** documento/PDF pequeño a la izquierda del texto
- **Acción:** abre modal de formulario de captura de lead (ver sección 3.9)
- **Variante productos "A la medida":** el botón dice `Solicitar consulta previa` y no abre el modal de ficha — lleva directamente al formulario de contacto general con el producto preseleccionado

#### CTA 2 — "Consultar por WhatsApp"

- **Tipo:** botón outline · ancho 100%
- **Estilo:** borde `2px solid #25D366` · texto `#25D366` · fondo transparente · Poppins SemiBold 14px · padding 11px 16px · border-radius 4px
- **Hover:** fondo `#25D366` · texto blanco
- **Ícono:** ícono de WhatsApp a la izquierda
- **Acción:** abre `https://wa.me/573164781412` con mensaje prearmado: `"Hola, me interesa el producto [Nombre del producto]. Quisiera más información."`

### 3.8 Productos a la medida — variante de tarjeta

Los productos de **Tailored To** y **Chronos** tienen una tarjeta con presentación diferente:

- No tienen imagen de producto fija — usar imagen conceptual de laboratorio o campo de fondo oscuro
- Badge dorado `#B8860B` · label `"A la medida"`
- No muestran fórmula nutricional (no aplica)
- No muestran Registro ICA
- Texto central destacado: `"Esta línea se formula a partir de un análisis técnico de su suelo y cultivo. No existe un catálogo fijo."` — Poppins Italic 14px · `#4B5563`
- **Solo un CTA:** `Solicitar consulta previa` · botón primario dorado `#B8860B` · texto blanco · ancho 100%
- Sin CTA de WhatsApp directo (el flujo va al formulario de contacto)

### 3.9 Modal — Formulario de captura para ficha técnica

El modal se abre al hacer clic en "Obtener ficha técnica". Es el **principal punto de captura de leads calificados del catálogo**.

**Estructura del modal:**

```
┌───────────────────────────────────────────┐
│  ✕ (cerrar)                               │
│                                           │
│  Descargue la ficha técnica de:           │
│  [Nombre del producto]                    │
│                                           │
│  Para enviarle el documento necesitamos   │
│  sus datos de contacto:                   │
│                                           │
│  [ Nombre completo * ]                    │
│  [ Empresa * ]                            │
│  [ Cargo * ]                              │
│  [ Correo electrónico * ]                 │
│  [ Teléfono * ]                           │
│                                           │
│  □ Acepto la Política de Privacidad       │
│    (Ley 1581 de 2012) *                   │
│                                           │
│  [ Enviar y descargar ficha →  ]          │
│                                           │
│  ─────────────────────────────────        │
│  ¿Prefiere hablar directamente?           │
│  [ 💬 Escribir por WhatsApp ]             │
└───────────────────────────────────────────┘
```

**Diseño del modal:**
- Overlay: `rgba(0,0,0,0.60)` · blur de fondo `backdrop-filter: blur(2px)`
- Contenedor: fondo blanco · border-radius 12px · padding 40px · max-width 480px · sombra `0 24px 64px rgba(0,0,0,0.20)`
- Título modal: `Descargue la ficha técnica de:` — Poppins Regular 14px · `#6B7280`
- Nombre del producto: Exo Bold 20px · `#1A1A1A` · debajo del título
- Subtexto: Poppins Regular 14px · `#6B7280`
- Campos: misma especificación que el formulario general del homepage (AG_004 sección 13)
- Botón principal: `Enviar y descargar ficha →` · fondo `#2D6A2F` · texto blanco · ancho 100% · Poppins SemiBold 15px · padding 14px
- Botón WhatsApp secundario: outline `#25D366` · texto `#25D366` · ícono WhatsApp · ancho 100%
- Mensaje post-envío: `✓ Su ficha técnica ha sido enviada a [correo]. Revise su bandeja de entrada.` · fondo `#E8F5E9` · texto `#2D6A2F` · border-radius 6px · padding 16px

**Nota crítica:** el checkbox de política de privacidad es obligatorio. Sin marcarlo el botón permanece deshabilitado (opacidad 0.5, no clickeable).

### 3.10 Paginación / Load More

- **Opción recomendada para el prototipo:** botón "Cargar más productos" centrado debajo del grid · outline verde · Poppins SemiBold 14px
- **Alternativa:** paginación numérica clásica si la familia tiene muchos productos (GrowFlex tiene 17)
- **Contador:** `Mostrando 9 de 17 productos` — Poppins 13px · `#6B7280` · centrado bajo el grid · actualiza al cargar más

### 3.11 Estado vacío (sin resultados de búsqueda)

Si el buscador no encuentra coincidencias:

```
┌─────────────────────────────────────────┐
│                                         │
│         🔍                              │
│   No encontramos productos para         │
│   "[término buscado]"                   │
│                                         │
│   Intente con otro nombre, fórmula      │
│   o cultivo. O contáctenos para         │
│   una solución a la medida.             │
│                                         │
│   [ Limpiar búsqueda ]                  │
│   [ Solicitar consulta →  ]             │
│                                         │
└─────────────────────────────────────────┘
```

- Ícono de lupa: 48px · color `#9CA3AF`
- Texto principal: Exo SemiBold 20px · `#1A1A1A`
- Subtexto: Poppins Regular 15px · `#6B7280`
- Botones: outline verde y primario verde · en columna

---

## 4. Productos del catálogo para el prototipo

Usar estos productos reales en las tarjetas del marketplace. Son los datos definitivos del brief AG_002 y el mapa de navegación AG_003.

### GrowFlex — Marcas propias (4 productos)

| Nombre | Fórmula | ICA |
|---|---|---|
| GrowMix | 12-24-12-5(S) | 9153 |
| Planter | 14-25-10-3,2 MgO | 10861 |
| Perisson | 20-10-16-3,4 MgO | 10861 |
| Vergel | 21-0-28-2 MgO | — |

### GrowFlex — Compuestos Mezclados NPK (13 productos genéricos)

| Fórmula | ICA |
|---|---|
| 25-4-24 | 11456 |
| 13-5-27-5-0,5B | 10574 |
| 15-4-23-4 MgO | — |
| 10-5-27-4 MgO | — |
| 11-4-26-6 MgO | — |
| 12-8-22-4 MgO | — |
| 17-6-23-4 MgO | — |
| 12-24-12-5 CaO | 9153 |
| 19-9-19 | 9018 |
| 27-6-6-2 CaO | 9019 |
| 27-6-6 | 9149 |
| 13-3-26-4,3 MgO-3,9S + Zn/B | — |
| 13-3-26-4,5 MgO-4,1S | — |

> Las tarjetas de los compuestos mezclados genéricos muestran la fórmula como nombre: `Compuesto NPK 25-4-24`. No tienen nombre comercial.

### NutriLimit (4 productos)

| Nombre | Fórmula / Descripción | ICA |
|---|---|---|
| BoroMix | 0-0-3-14B · Boro de acción prolongada | 14070 |
| Etibor 48 / Bórax Pentahidratado | Fuente de boro soluble | 7896 |
| Borick K / Ácido Bórico | Boro foliar de alta pureza | 9744 |
| Boro + K / Bórax Pentahidratado | Boro + potasio combinados | 9263 |

### NovaMix / NextGen (10 productos)

| Nombre | Descripción | ICA |
|---|---|---|
| N-Secured | Nitrógeno estabilizado | 10779 |
| KCL Granular | Cloruro de Potasio Granular | 10073 |
| KCL Estándar | Cloruro de Potasio Estándar | 10073 |
| MAP | Fosfato Monoamónico | 10223 |
| Kieserita + K | Magnesio + Potasio | 9262 |
| Kieserita | Fuente de Magnesio | 7895 |
| DAP | Fosfato Diamónico | — |
| Urea | Nitrógeno ureico | — |
| Super Fosfato | Fósforo simple | — |
| PatenKali | Potasio + Magnesio + Azufre | — |

### Solumix (1 producto)

| Nombre | Fórmula | ICA |
|---|---|---|
| CalExact | 15-0-0-25 CaO | 13784 |

### CoverMax (4 productos)

| Nombre | Descripción | ICA |
|---|---|---|
| Kudzu | Leguminosa de cobertura tropical | — |
| Desmodium | Cobertura para sistemas ganaderos | — |
| Mucuna | Cobertura nitrificante — control de malezas | — |
| Rhizobium | Inoculante biológico para leguminosas | — |

### ActiCoox (2 productos)

| Nombre | Descripción | ICA |
|---|---|---|
| FosfoCox | Fósforo activado de alta eficiencia | — |
| ProduCox | Potasio activado con tecnología COOX | — |

### Tailored To (1 tarjeta especial)

Tarjeta única con variante "A la medida". No tiene productos individuales listados. Ver especificación en sección 3.8.

### Chronos (2 tarjetas especiales)

| Nombre | Descripción |
|---|---|
| Chronos Release | Fertilizante de liberación controlada — fórmula personalizada |
| Chronos Release Mix | Mezcla de liberación controlada — consulta previa |

Ambas con variante "A la medida". Ver sección 3.8.

---

## 5. Flujo de conversión completo del catálogo

```
USUARIO LLEGA A LA LANDING DE FAMILIAS
        │
        ▼
Hace clic en tarjeta de familia (ej: GrowFlex)
        │
        ▼
MARKETPLACE carga con ?familia=growflex preactivado
Grid muestra solo los 17 productos de GrowFlex
        │
        ├── Clic "Obtener ficha técnica"
        │         │
        │         ▼
        │   Modal de formulario
        │   [Nombre / Empresa / Cargo / Correo / Teléfono]
        │         │
        │         ▼
        │   Envío → PDF entregado al usuario
        │         + Notificación a servicio.cliente@agrobrokers.com.co
        │         + Lead registrado en CRM (SAP — futuro)
        │
        ├── Clic "Consultar por WhatsApp"
        │         │
        │         ▼
        │   wa.me/573164781412
        │   Mensaje prearmado con nombre del producto
        │
        └── Cambia filtro o clic "Ver todas las familias"
                  │
                  ▼
            Vuelve a la landing de familias
            o marketplace muestra otra familia
```

---

## 6. Comportamiento responsive del marketplace

| Elemento | Desktop 1440px | Tablet 768px | Mobile 375px |
|---|---|---|---|
| Panel de filtros | Lateral fijo 280px | Lateral colapsable (toggle) | Drawer/offcanvas bottom-sheet |
| Grid de productos | 3 columnas | 2 columnas | 1 columna |
| Tarjeta de producto | Imagen 1:1 completa | Imagen 1:1 completa | Imagen 16:9 opcional |
| CTAs de tarjeta | 2 botones stacked | 2 botones stacked | 2 botones stacked |
| Modal de ficha | Centrado 480px | Centrado 90vw | Full-screen bottom-sheet |
| Botón filtros mobile | — | — | Sticky top: "Filtrar ⚙" verde |
| Breadcrumb | Visible | Visible | Solo "← Productos" |

---

## 7. Restricciones críticas de este flujo

**❌ NO incluir:**
- Precios en ninguna tarjeta ni sección del catálogo
- Botón "Agregar al carrito" o cualquier elemento de e-commerce transaccional
- Comparativa de productos o tabla de precios
- Filtros por precio o rango de costo
- Pop-up bloqueante al entrar al marketplace (el modal de ficha solo aparece al hacer clic)
- Campos de cantidad o pedido mínimo en el formulario del modal

**✅ Garantizar obligatoriamente:**
- WhatsApp visible en cada tarjeta de producto (CTA secundario)
- Checkbox de política de privacidad en el formulario del modal — obligatorio antes de enviar
- Badge "A la medida" claramente diferenciado en dorado para Tailored To y Chronos
- Breadcrumb que permita volver a la landing de familias con un clic
- Botón "Ver todas las familias" visible en la parte superior del marketplace
- Contador de productos actualizado al cambiar filtro o búsqueda
- Estado vacío diseñado cuando la búsqueda no tiene resultados

---

## 8. Próxima iteración

Con el homepage (AG_004) y este flujo de productos (AG_005) diseñados, la **iteración 3.3** cubrirá las páginas internas:

- **Nosotros:** historia 15 años · misión · visión · valores · registros ICA · política de calidad
- **Servicios:** AgroPilot · análisis de suelo · asesoría agronómica · plan de fertilización · proceso "Cómo trabajamos"
- **Blog:** grid de artículos · categorías por cultivo · suscripción · casos de éxito
- **FAQ:** preguntas construidas con el cliente · optimización SEO pregunta-respuesta
- **SAGRILAFT:** declaración · aviso de privacidad · canal de denuncias anónimas
- **Contacto:** formulario general · mapa · WhatsApp · datos corporativos

---

*AG_005 — Prompt de Diseño UX/UI · Landing de Familias + Marketplace*
*Versión 1.0 · 1 de junio de 2026 · Proyecto Diseño Web AgroBrokers*
*Documentos base: AG_001 v2.0 · AG_002 (Brief) · AG_003 v1.3 · AG_004*
