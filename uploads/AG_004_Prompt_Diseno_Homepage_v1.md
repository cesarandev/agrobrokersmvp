**AG\_004**

**PROMPT DE DISEÑO UX/UI**

Homepage · Index · Alta Fidelidad

*AgroBrokers — agrobrokers.com.co*

|  |  |
| --- | --- |
| **Proyecto** | Rediseño Web AgroBrokers — agrobrokers.com.co |
| **Documento** | AG\_004 — Prompt de Diseño UX/UI · Homepage (Index) |
| **Versión** | v1.0 |
| **Fecha** | 1 de junio de 2026 |
| **Destino** | Claude Design (claude.ai/design) |
| **Elaborado por** | Proyecto Diseño Web AgroBrokers |
| **Documentos base** | AG\_001 v2.0 · AG\_002 (Brief) · AG\_003 v1.3 |
| **Estado** | Listo para prototipado — Alta fidelidad |

# **0. Instrucciones para Claude Design**

Este documento es el brief completo de diseño para generar el prototipo interactivo de alta fidelidad del homepage de AgroBrokers. Junto a este archivo se adjunta el logo oficial en formato PNG/SVG.

Claude Design debe leer este documento de principio a fin antes de diseñar. Cada sección define con precisión el contenido, jerarquía visual, textos definitivos, comportamientos interactivos y restricciones de diseño de cada bloque del homepage.

**Reglas de diseño globales:**

**▸ Empresa B2B del sector agropecuario colombiano. El tono es profesional, técnico y confiable — NO agro-campestre ni folklorista.**

**▸ Estética: minimalismo corporativo refinado. Inspiración visual: Yara Colombia, Evoagro, empresas multinacionales agro. NO imitar e-commerce de consumo masivo.**

**▸ Paleta base: beige/crema (#F5F0E8) como fondo + verde corporativo (#2D6A2F) como color de acción. Sin degradados estridentes.**

**▸ Tipografías: Croogla (display/hero) · Exo (headings) · Poppins (body/UI). Google Fonts o carga local.**

**▸ El sitio NO muestra precios en ningún punto. La conversión ocurre vía formulario de cotización y WhatsApp.**

**▸ Responsive: diseñar en desktop 1440px como referencia primaria. Asegurar que la estructura sea funcional en mobile 375px.**

**▸ Logo adjunto: usar en header (fondo oscuro y fondo claro) y footer. NO alterar proporciones ni colores.**

# **1. Identidad de Marca**

## **1.1 Paleta de colores**

|  |  |  |
| --- | --- | --- |
| **Rol** | **Hex** | **Uso** |
| Verde corporativo | #2D6A2F | Color principal de marca · botones primarios · acentos · íconos activos |
| Beige / crema | #F5F0E8 | Fondo general de la página · secciones alternadas · tarjetas |
| Beige oscuro | #E8E0D0 | Separadores suaves · fondo de secciones hero secundarias |
| Verde claro | #E8F5E9 | Fondos de badges · hover states sutiles |
| Dorado/acento | #B8860B | Badge 'A la medida' · highlights especiales · Tailored To |
| Texto principal | #1A1A1A | Títulos y cuerpos de texto sobre fondos claros |
| Texto secundario | #6B7280 | Subtítulos · metadatos · textos de apoyo |
| Blanco | #FFFFFF | Texto sobre fondos oscuros · tarjetas de producto |
| Overlay oscuro | rgba(0,0,0,0.55) | Overlay del hero sobre video corporativo |

*📌 El verde #2D6A2F es el único color de acción. No sustituir con variantes no aprobadas. El beige #F5F0E8 es el fondo dominante.*

## **1.2 Tipografía**

|  |  |  |
| --- | --- | --- |
| **Fuente** | **Rol** | **Especificaciones** |
| Croogla | Display / Hero | Headline principal del hero (H1) · Nombre de marca en hero. Peso: Bold 700. Tamaño desktop: 64–72px. Mobile: 36–44px. |
| Exo | Headings | Títulos de sección H2, H3 · Nombres de familias de producto · Etiquetas de navegación. Peso: SemiBold 600. Tamaño: 28–40px. |
| Poppins | Body / UI | Párrafos · Descripciones · Labels de formulario · Texto de botones · Footer. Peso: Regular 400 y Medium 500. Tamaño: 15–17px. |

*📌 Croogla puede requerir importación manual. Si no está disponible como Google Font, usar 'Oswald' como fallback únicamente en el hero. Exo y Poppins están en Google Fonts.*

## **1.3 Recursos adjuntos**

**▸ Logo AgroBrokers — versión horizontal (única disponible). Usar en header sobre fondo oscuro (versión blanca/light) y sobre fondo claro (versión verde).**

**▸ El logo adjunto al prompt es el archivo oficial. Respetar zona de respeto = altura de la letra 'A' del logo en todos los lados.**

# **2. Estructura Global del Homepage**

El homepage se organiza en 10 bloques secuenciales. El orden es fijo y no debe alterarse. Cada bloque tiene una función de conversión específica dentro del funnel B2B.

|  |  |  |  |
| --- | --- | --- | --- |
| **#** | **Sección** | **Alto aprox.** | **Descripción clave** |
| S-01 | Header / Navegación | Fijo (sticky) | Prioridad máxima — visible en todo momento |
| S-02 | Hero — Video + Propuesta de valor | Full-screen (~100vh) | Primera impresión — mayor impacto visual |
| S-03 | Por qué elegirnos | ~480px | 3 diferenciadores con ícono + título + texto |
| S-04 | Preview de 8 familias | ~600px | Grid de tarjetas visuales → CTA al marketplace |
| S-05 | Cifras de confianza | ~280px | Banda horizontal con estadísticas numéricas |
| S-06 | Servicios destacados | ~400px | AgroPilot + Análisis de suelo + Asesoría + Plan de fertilización |
| S-07 | Blog / Últimas entradas | ~480px | 3 artículos recientes con imagen, categoría, título y fecha |
| S-08 | Testimonios / Casos de éxito | ~400px | Cards de testimonio con logo empresa o foto cultivo |
| S-09 | CTA final — Contacto | ~320px | Banda verde oscuro · headline fuerte · 2 botones · WhatsApp |
| S-10 | Footer global | ~280px | Logo · Menú · Redes · Legal · Newsletter |

*📌 El flujo de lectura es top-down. El usuario B2B típico evalúa credibilidad en los primeros 3 bloques (hero + diferenciadores + familias). La conversión ocurre en el formulario o vía WhatsApp.*

# **3. S-01 — Header / Navegación**

El header es sticky (fijo al hacer scroll). En la versión inicial (sobre el hero con video) el header es transparente con fondo semi-oscuro. Al hacer scroll, toma fondo blanco sólido con sombra suave.

### **Estructura del header (de izquierda a derecha):**

**▸ IZQUIERDA: Logo AgroBrokers horizontal (PNG adjunto). Ancho: 160px desktop / 120px mobile.**

**▸ CENTRO: Menú de navegación principal con 8 ítems: Inicio · Nosotros · Productos · Servicios · Blog · FAQ · SAGRILAFT · Contacto**

**▸ DERECHA: Botón CTA WhatsApp (+57 316 478 1412) en verde #25D366 con ícono de WhatsApp + Botón 'Solicitar cotización' en verde corporativo #2D6A2F.**

### **Comportamiento interactivo:**

**▸ 'Productos' en el menú lleva a la landing de familias (no despliega submenu en este prototipo).**

**▸ En mobile: menú hamburguesa. El panel lateral de navegación tiene fondo #2D6A2F con textos en blanco.**

**▸ Estado activo del ítem de menú: subrayado verde o punto verde debajo del texto.**

*📌 El menú 'SAGRILAFT' se muestra sin decoración especial — mismo estilo que los demás ítems. El cliente lo incluyó como sección de cumplimiento legal.*

# **4. S-02 — Hero: Video + Propuesta de Valor**

## **4.1 Composición visual**

El hero ocupa el 100% del viewport (100vh, mínimo 600px). El fondo es un video corporativo de campo/producción. Sobre el video se aplica un overlay oscuro rgba(0,0,0,0.55) para garantizar legibilidad del texto blanco.

El video no tiene audio. Se reproduce en loop automático. Es el recurso que proveerá el cliente — en el prototipo usar un gradiente fotográfico de campo agrícola verde como placeholder visual.

## **4.2 Contenido textual del hero**

El texto se posiciona en la mitad izquierda del hero (desktop) o centrado (mobile). Jerarquía de texto:

|  |  |
| --- | --- |
| **Elemento** | **Texto y especificación** |
| Eyebrow / Label | Fuente: Poppins Regular · 13px · color: rgba(255,255,255,0.75) · uppercase · tracking 2px · texto: 'NUTRICIÓN VEGETAL DE PRECISIÓN' |
| H1 — Headline | Fuente: Croogla Bold · 64px desktop / 36px mobile · color: #FFFFFF · texto exacto: 'Soluciones de nutrición vegetal para una agricultura técnica, eficiente y sostenible' |
| Subtítulo | Fuente: Poppins Regular · 18px · color: rgba(255,255,255,0.90) · texto exacto: '15 años diseñando fertilizantes a la medida del agro colombiano. Cobertura nacional. Respaldo técnico en campo.' |
| CTA Primario | Botón: 'Solicitar cotización' · fondo #2D6A2F · texto blanco · Poppins SemiBold 15px · padding 16px 32px · border-radius 4px · hover: #1B5E20 |
| CTA Secundario | Botón outline: 'Ver nuestros productos' · borde 2px blanco · texto blanco · fondo transparente · mismo padding · hover: fondo blanco, texto verde |

## **4.3 Elemento de confianza en el hero**

En la esquina inferior derecha del hero (sobre el overlay del video), mostrar una banda semi-transparente con:

**▸ Ícono de escudo + '15 años en el mercado · Cobertura nacional · Registros ICA'**

**▸ Fondo: rgba(255,255,255,0.10) · backdrop-filter: blur(4px) · texto: Poppins 12px blanco**

*📌 Esta banda es el único texto 'de credibilidad' en el hero. No sobrecargar con más elementos flotantes.*

# **5. S-03 — Por Qué Elegirnos**

Sección con fondo beige #F5F0E8. Tres columnas iguales centradas. Cada columna tiene: ícono SVG verde + título en Exo SemiBold + párrafo en Poppins Regular.

|  |  |  |
| --- | --- | --- |
| **Diferenciador 1** | **Diferenciador 2** | **Diferenciador 3** |
| 🌱 Ícono: hoja técnica / laboratorio  **Nutrición vegetal diseñada a la medida del cultivo**  Cada fórmula parte de un análisis técnico-científico del suelo y las necesidades reales del cultivo. Sin fórmulas genéricas. | ⚗️ Ícono: molécula / eficiencia  **Tecnología para mejorar la eficiencia de los nutrientes**  Tecnología CRF, formulaciones activas y mezclas de precisión que maximizan la absorción y reducen pérdidas. | 🤝 Ícono: agrónomo / campo  **Acompañamiento técnico-comercial con visión de campo**  Equipo técnico que acompaña desde el diagnóstico hasta los resultados. No vendemos productos, construimos soluciones. |

*📌 Íconos: SVG outline estilo line-icon en verde #2D6A2F. Tamaño 48x48px. NO usar emojis en el diseño final — son solo referencias de concepto.*

# **6. S-04 — Preview de las 8 Familias de Producto**

Fondo: blanco #FFFFFF. Título de sección centrado en Exo SemiBold 36px: 'Nuestro Portafolio'. Subtítulo: 'Ocho líneas especializadas diseñadas para cubrir cada necesidad de nutrición de su cultivo.' Poppins 17px color gris.

Grid: 4 columnas x 2 filas en desktop. 2 columnas en tablet. 1 columna en mobile. Gap entre tarjetas: 24px.

### **Anatomía de cada tarjeta de familia (preview del marketplace):**

**▸ Imagen representativa de la línea — fondo verde oscuro con fotografía de campo o producto en overlay. Proporción 4:3. Uso de stock de agricultura técnica de alta calidad para el prototipo.**

**▸ Badge de familia: etiqueta pequeña de color según tabla de familias (ver sección 7). Posición: esquina superior izquierda sobre la imagen.**

**▸ Nombre de familia: Exo Bold 18px · color #1A1A1A**

**▸ Tagline: Poppins Regular 14px · color #6B7280 · máximo 2 líneas**

**▸ CTA 'Ver productos [Familia]': enlace verde con flecha → . Al hacer clic va al marketplace con filtro preactivado.**

**▸ Hover de la tarjeta: sombra suave box-shadow + translateY(-4px). Border: 1px solid #E5E7EB en reposo.**

|  |  |  |  |
| --- | --- | --- | --- |
| **#** | **Familia** | **Tagline para la tarjeta** | **Badge color** |
| 1 | Tailored To | Fórmulas diseñadas a la medida de cada finca y cultivo | Oro — #B8860B |
| 2 | Chronos (CRF) | Liberación controlada: el nutriente disponible en el momento exacto | Verde oscuro — #1B5E20 |
| 3 | ActiCoox | Fósforo y potasio de alta eficiencia: FosfoCox y ProduCox | Verde medio — #388E3C |
| 4 | NutriLimit | Elementos menores — boro y zinc para nutrición vegetal completa | Teal — #00796B |
| 5 | NovaMix / NextGen | Fertilizantes simples de nueva generación y alta pureza | Azul acero — #1565C0 |
| 6 | Solumix | Hidrosolubles de precisión para sistemas de fertirrigación | Celeste — #0277BD |
| 7 | GrowFlex | Compuestos mezclados NPK: marcas propias y genéricos para exigentes | Verde lima — #558B2F |
| 8 | CoverMax | Semillas de cobertura para suelos saludables y sistemas silvopastoriles | Marrón tierra — #5D4037 |

### **CTA de cierre de la sección:**

Debajo del grid, centrado: botón 'Ver todo el catálogo' en outline verde · Poppins SemiBold 15px. Lleva a la landing de familias.

*📌 Los productos 'A la medida' (Tailored To y Chronos) llevan el badge dorado #B8860B con texto 'A la medida'. Las demás familias usan el color asignado en la tabla.*

# **7. S-05 — Cifras de Confianza**

Banda horizontal de ancho completo. Fondo: verde corporativo #2D6A2F. Cuatro métricas en fila, separadas por líneas verticales blancas semi-transparentes.

|  |  |  |  |
| --- | --- | --- | --- |
| **Cifra 1** | **Cifra 2** | **Cifra 3** | **Cifra 4** |
| **+15**  Años en el mercado | **8**  Líneas especializadas | **100%**  Cobertura nacional | **+30**  Registros ICA activos |

*📌 Las cifras deben tener una micro-animación de contador (count-up) al entrar en viewport. Fuente de las cifras en Croogla Bold. Etiquetas en Poppins Regular.*

*📌 La cifra '+30 Registros ICA' es una estimación conservadora basada en el brief G6. Ajustar al número exacto cuando el cliente confirme el total de registros ICA activos.*

# **8. S-06 — Servicios Destacados**

Fondo beige claro #F5F0E8. Título de sección alineado izquierda: 'Servicios Especializados' en Exo SemiBold 36px. Subtítulo: 'Más allá del fertilizante: tecnología y conocimiento técnico al servicio de su cultivo.'

Cuatro tarjetas en fila (desktop) / 2x2 (tablet) / 1 columna (mobile). Cada tarjeta tiene: ícono grande + nombre del servicio + descripción breve + CTA 'Conocer más →'.

|  |  |  |  |
| --- | --- | --- | --- |
| **🚁 AgroPilot**  Servicio de dron agrícola: espectrometría, fumigación y control preciso de aplicación de insumos. | **🧪 Análisis de suelo y foliar**  Diagnóstico técnico del suelo y el follaje como base científica para el plan de fertilización. | **👨‍🌾 Asesoría agronómica**  Acompañamiento técnico-comercial en campo con profesionales especializados en cada cultivo. | **📋 Plan de fertilización**  Plan personalizado de nutrición por finca: objetivos de rendimiento, dosis y cronograma de aplicación. |

*📌 AgroPilot es el servicio estrella con mayor diferenciación. En el diseño final puede ocupar mayor espacio visual (tarjeta destacada 2x ancho) con imagen del dron en acción.*

# **9. S-07 — Blog / Últimas Entradas**

Fondo blanco. Título: 'Conocimiento técnico al servicio del campo' · Exo SemiBold 36px. Tres artículos en grid horizontal. Cada tarjeta: imagen de cultivo (16:9) + badge de categoría + título + fecha + extracto (2 líneas) + 'Leer más →'.

### **Artículos de muestra para el prototipo (del blog actual migrable):**

**▸ Artículo 1: '¿Por qué usar fertilizantes de liberación controlada en viveros de palma?' — Categoría: Palma de Aceite — Abril 2024**

**▸ Artículo 2: 'Maximizando el Potencial del Banano: Una Guía de Nutrición por Etapas' — Categoría: Banano — Mayo 2024**

**▸ Artículo 3: 'La importancia del carbono orgánico oxidable en la agricultura' — Categoría: Suelos — Julio 2024**

CTA de cierre: botón outline verde 'Ver todos los artículos' centrado debajo del grid.

*📌 Los badges de categoría deben tener colores diferenciados por cultivo: Palma (verde oscuro), Banano (amarillo/ocre), Arroz (dorado), Maíz (naranja), Suelos (marrón).*

# **10. S-08 — Testimonios / Casos de Éxito**

Fondo beige #F5F0E8. Título: 'Resultados reales en campo' · Exo SemiBold 36px. Dos o tres cards de testimonio en fila. El cliente confirmó que tiene videos testimoniales — en el prototipo usar cards con texto y placeholder de foto.

### **Estructura de cada card de testimonio:**

**▸ Comillas decorativas " " en verde corporativo grande como elemento gráfico de fondo**

**▸ Texto del testimonio: Poppins Regular 16px · máximo 3 líneas**

**▸ Nombre del cliente y empresa: Poppins SemiBold 14px**

**▸ Cultivo / región: Poppins Regular 13px · color gris**

**▸ Logo de la empresa cliente (si está disponible y aprobado por dirección — Brief RF-15)**

### **Testimonios placeholder para el prototipo:**

**▸ 'Desde que implementamos los compuestos mezclados GrowFlex en nuestra plantación de palma, los rendimientos mejoraron notablemente en la primera cosecha.' — Director Agrónomo, Empresa Palmera del Llano, Meta**

**▸ 'El acompañamiento técnico del equipo de AgroBrokers marcó la diferencia. No solo nos vendieron el fertilizante, nos construyeron el plan.' — Gerente de Compras, Bananera del Magdalena**

*📌 Si el cliente no aprueba logos de clientes antes del prototipo, usar avatares con iniciales en círculo verde. Los testimonios son placeholder — el cliente proveerá los reales.*

# **11. S-09 — CTA Final — Contacto**

Banda de ancho completo. Fondo: verde oscuro #1B5E20 (más oscuro que el corporativo para contraste). Contenido centrado.

|  |  |
| --- | --- |
| **Headline** | ¿Listo para transformar la nutrición de sus cultivos? |
| **Subtítulo** | Hable con nuestro equipo técnico-comercial. Le respondemos en máximo 5 días hábiles. |
| **CTA Primario** | Botón: 'Solicitar cotización' · fondo beige/crema #F5F0E8 · texto verde #2D6A2F · Poppins SemiBold · padding 16px 40px |
| **CTA WhatsApp** | Botón: '💬 Escribir por WhatsApp' · fondo #25D366 · texto blanco · ícono WhatsApp · padding 16px 40px |

*📌 Los dos botones van en la misma fila, separados 16px. En mobile se apilan verticalmente. Esta sección reemplaza el pop-up bloqueante — es el único punto de captura post-navegación.*

# **12. S-10 — Footer Global**

Fondo: #1A1A1A (casi negro). Texto: blanco y gris claro. Cuatro columnas en desktop.

|  |  |  |  |
| --- | --- | --- | --- |
| **Columna 1 — Marca** | **Columna 2 — Navegación** | **Columna 3 — Contacto** | **Columna 4 — Newsletter** |
| **Logo AgroBrokers (versión blanca/light)**  Soluciones de nutrición vegetal para una agricultura técnica, eficiente y sostenible.  🔵 LinkedIn 📷 Instagram 📘 Facebook | Inicio · Nosotros · Productos  Servicios · Blog · FAQ  SAGRILAFT · Contacto  Política de Privacidad  Tratamiento de Datos (Ley 1581/12)  Aviso de Privacidad | **Oficina Principal y Planta:**  Km 5.5 Vía alterna al Puerto  Parque Industrial Puerto del Sol, Bodega 1A  Santa Marta – Magdalena – Colombia  📧 servicio.cliente@agrobrokers.com.co  📱 +57 316 478 1412 | **Suscríbase a nuestro boletín técnico**  Reciba artículos técnicos sobre palma, banano, arroz y maíz directamente en su correo.  *[Campo: Ingrese su correo corporativo]*  *[Botón: Suscribirse → verde corporativo]* |

Línea de copyright al pie: '© 2026 AgroBrokers — INPUTS BROKERS GROUP S.A.S. Todos los derechos reservados.' · Poppins Regular 13px · color #4B5563 · centrado.

# **13. Formulario de Cotización General**

El formulario de cotización general está disponible en la página de Contacto y puede desplegarse como modal desde cualquier CTA 'Solicitar cotización' del homepage. Campos requeridos según Brief C3:

|  |  |  |  |
| --- | --- | --- | --- |
| **Campo** | **Tipo** | **Estado** | **Notas** |
| Nombre completo | text | Obligatorio | Nombre y apellidos |
| Empresa | text | Obligatorio | Razón social |
| Cargo | text | Obligatorio | Ej: Gerente de compras, Director agrónomo |
| Teléfono | tel | Obligatorio | Con indicativo +57 |
| Correo electrónico | email | Obligatorio | Correo corporativo |
| Producto de interés | select | Opcional | Dropdown con las 8 familias del catálogo |
| Tipo de cultivo | text | Opcional | Palma, banano, arroz, maíz, otro... |

### **Diseño del formulario:**

**▸ Fondo: blanco · borde de campos: 1px solid #D1D5DB · border-radius: 4px · padding interno: 12px 16px**

**▸ Label: Poppins SemiBold 13px · color #374151 · posición above del campo**

**▸ Placeholder: Poppins Regular 13px · color #9CA3AF**

**▸ Botón de envío: 'Enviar solicitud' · fondo #2D6A2F · texto blanco · ancho 100% en mobile / auto en desktop**

**▸ Mensaje de confirmación post-envío: 'Gracias, su solicitud fue recibida. Le contactaremos en máximo 5 días hábiles.' · texto verde con ícono de check**

**▸ Aviso legal obligatorio: 'Al enviar acepto la Política de Privacidad y el Tratamiento de Datos conforme a la Ley 1581 de 2012.' · link a la política · Poppins 12px · color gris**

*📌 El formulario de FICHA TÉCNICA (modal dentro del catálogo marketplace) es diferente: solo captura nombre, empresa, cargo, correo y teléfono. Ese formulario se diseña en la iteración 3.2 (landing de familias + marketplace).*

# **14. Sistema de CTAs Global**

|  |  |  |  |
| --- | --- | --- | --- |
| **Tipo** | **Texto** | **Estilo** | **Ubicación** |
| CTA Primario | Solicitar cotización | Botón relleno — verde corporativo #2D6A2F, texto blanco, borde redondeado 4px | Sección hero (grande), header (compacto), sección final del homepage |
| CTA Secundario | Ver nuestros productos | Botón outline — borde verde #2D6A2F, fondo transparente, texto verde | Hero (junto al primario), sección preview de familias |
| CTA WhatsApp | +57 316 478 1412 | Botón verde WhatsApp #25D366 con ícono, siempre visible (sticky o header) | Header persistente, tarjetas de producto, footer |

*📌 El botón de WhatsApp abre directamente: https://wa.me/573164781412 con mensaje prearmado: 'Hola, me interesa información sobre los productos de AgroBrokers.' El número no tiene espacios en la URL.*

# **15. Comportamiento Responsive**

|  |  |  |  |
| --- | --- | --- | --- |
| **Sección** | **Desktop 1440px** | **Tablet 768px** | **Mobile 375px** |
| Header | Logo + nav + 2 CTAs en una fila | Logo + hamburguesa + CTA WhatsApp | Logo + hamburguesa |
| Hero | Video full-screen, texto izquierda 50% | Video full-screen, texto centrado 70% | Video full-screen, texto centrado 90% |
| Diferenciadores | 3 columnas iguales | 3 columnas compactas | 1 columna vertical |
| Familias | Grid 4x2 | Grid 2x4 | Grid 1x8 (scroll) |
| Cifras | 4 métricas en fila | 2x2 | 2x2 compacto |
| Servicios | 4 columnas | 2x2 | 1 columna |
| Blog | 3 columnas | 2 columnas (3ro oculto) | 1 columna |
| Footer | 4 columnas | 2x2 | 1 columna apilada |

# **16. Restricciones Críticas de Diseño**

**❌ Lo que el diseño NO debe incluir:**

**▸ NINGÚN precio en ninguna sección del sitio — ni de referencia ni de rango**

**▸ Carrito de compras, botón 'Agregar al carrito', comparativas de precio**

**▸ Pop-ups de captura de leads (muros bloqueantes) — el formulario es el único punto de captura**

**▸ Logos de clientes sin confirmación de aprobación de la dirección de AgroBrokers**

**▸ Sección 'Nuestro equipo' con fotos del personal (el cliente respondió NO)**

**▸ Sección 'Cultivos' como categoría de navegación (el cliente respondió NO)**

**▸ Mapa de cobertura geográfica como sección (cobertura nacional sin expansión, no se visualiza en mapa)**

**▸ Estética de e-commerce de consumo masivo — el sitio es B2B corporativo de alta confianza**

**✅ Lo que el diseño DEBE garantizar:**

**▸ WhatsApp visible en TODO momento — mínimo en header, footer y sección de contacto**

**▸ Formulario de cotización accesible desde múltiples puntos del homepage**

**▸ Registros ICA mencionados en la sección de credibilidad / 'Nosotros' o badge de producto**

**▸ Aviso legal de protección de datos en TODO formulario del sitio**

**▸ El hero debe comunicar con claridad la propuesta de valor en los primeros 3 segundos de lectura**

# **17. Próximos Pasos del Proyecto**

|  |  |  |
| --- | --- | --- |
| **#** | **Iteración** | **Entregable** |
| 3.1 | Homepage — AG\_004 (este documento) | Prototipo interactivo del Index/Homepage generado en Claude Design. Logo adjunto. |
| 3.2 | Landing de familias + Marketplace | Diseño del flujo de productos en dos pasos: tarjetas de familia → marketplace con filtro preactivado (AG\_003 v1.3). |
| 3.3 | Páginas internas | Nosotros · Servicios · Blog · FAQ · SAGRILAFT · Contacto. |
| 4 | Desarrollo WordPress | Implementación con Elementor + Slider Revolution + CPT para el catálogo marketplace. Sprints semanales cada viernes. |

*AG\_004 — Prompt de Diseño UX/UI · Homepage AgroBrokers*

*Generado el 1 de junio de 2026 · Proyecto Diseño Web AgroBrokers · claude.ai/design*