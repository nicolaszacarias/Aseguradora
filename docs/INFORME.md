# AsegurarNet: informe de rediseño y auditoría normativa

Fecha: 13/11/2026 · Rama local: `rediseno-2026` (sin remoto, sin push) · Respaldo completo del original: `Desktop/Aseguradora-main-BACKUP-original` y commit `ce0fd4f` en la rama `master`.

> **Aviso:** esta es una revisión técnica y documental hecha con herramientas automatizadas sobre fuentes oficiales. **No es asesoramiento jurídico** y no permite afirmar que el sitio cumple el 100 % de la normativa. Los puntos marcados ⚖️ requieren revisión de un abogado especializado en seguros o de un profesional competente.

---

## 1. Resumen

- El sitio quedó rediseñado y funcionando en local (`npm run dev` → http://localhost:5173).
- **Hay datos obligatorios pendientes** (matrícula SSN, titular, CUIT, etc.). Se muestran en la web con una marca amarilla "(pendiente)" para que **no se publique por error** sin completarlos.
- Hallazgo principal: el pie de página reproducía el texto del *Servicio de Atención al Asegurado*, que corresponde a **compañías aseguradoras**, no a productores asesores. Se reemplazó por la banda que el manual oficial de la SSN exige a productores.
- El formulario de "Denuncia de siniestro" nunca funcionó (credenciales de EmailJS de ejemplo) y se presentaba como si fuera la denuncia formal. Ahora es un **"Aviso de siniestro"** que deja claro que no reemplaza la denuncia ante la compañía, y que **no simula envíos**.

---

## 2. Datos que tenés que proporcionar

Todos se cargan en un solo archivo: [`src/utils/site.js`](../src/utils/site.js).

| Dato | Para qué | Dónde se ve |
|---|---|---|
| ¿Qué figura sos? Productor asesor directo (persona física), **sociedad de productores**, organizador o **agente institorio** de alguna compañía | Define qué información legal corresponde mostrar | Todo el sitio |
| **N.º de matrícula SSN** (o N.º de inscripción de la sociedad) | Banda SSN obligatoria (MACOP) | Pie de página, Legales |
| Nombre completo / razón social del titular del sitio | Responsable del sitio y de los datos (Ley 25.326 art. 6) | Pie, Legales, formulario |
| CUIT | Identificación del responsable | Legales |
| Teléfono correcto (ver §5) | Hay dos números distintos en el sitio original | Contacto |
| Código postal correcto (5003 o 5000) | Inconsistencia original | Contacto |
| Horario de atención | Información al consumidor | Contacto |
| ¿Alguna compañía te autorizó por escrito a **recibir denuncias de siniestro** en su nombre? | Define cómo presentar el formulario (Ley 17.418 art. 54) | Siniestros |
| Cuenta de EmailJS (Service ID, Template ID, Public Key) y dónde guarda los datos | Habilitar el envío y declararlo en la política de privacidad | `.env.local` |
| Canal seguro para recibir documentación (licencias, cédulas, pólizas) | Se quitó la carga de archivos por email (ver L6) | Formulario |
| Plazo de conservación de los datos | Política de privacidad | Legales |
| ¿Inscribiste la base de datos en el Registro Nacional de Bases de Datos (AAIP)? | Ley 25.326 arts. 21 y 24 | Legales |
| ¿Tenés autorización para usar los logos de las compañías? | Uso de marcas de terceros | Inicio |

---

## 3. Auditoría normativa

Gravedad: **Alta** = puede generar sanción o perjuicio al usuario · **Media** = incumplimiento probable o información incompleta · **Baja** = mejora recomendada.

### L1 · El pie mostraba obligaciones de aseguradora, no de productor — **Alta** (corregido, falta dato)
- **Problema:** se mostraba "La entidad aseguradora dispone de un Servicio de Atención al Asegurado…" con responsable y suplente. Ese texto es la plantilla obligatoria para **compañías**. Para un productor puede inducir a pensar que el sitio es una aseguradora.
- **Norma:** Res. SSN 225/2022 y su modificatoria 279/2022, *Manual de Convivencia Publicitaria (MACOP)*, rev. 04, apartado "Convivencia publicitaria | Página web": para *Productores Asesores de Seguros / Agentes Institorios*, "Sólo deberán incluir los datos de la banda": N.º de matrícula SSN, Departamento de Orientación y Asistencia al Asegurado, 0800-666-8400 y www.argentina.gob.ar/ssn. Además, toda publicidad web debe incluir el 0800, la web de la SSN y "el número de inscripción en el registro correspondiente".
- **Fuente oficial:** https://www.argentina.gob.ar/sites/default/files/ssn_220602_macoprevision_04.pdf
- **Vigencia:** el manual está publicado por la SSN; no encontré norma que lo derogue. ⚖️ Confirmar vigencia y que no haya una revisión posterior.
- **Solución aplicada:** banda SSN en el pie con la tipografía y colores del manual (Roboto, #F1F1F1, #4A4A49). Se quitó el logo de la SSN (el manual no lo incluye en la banda de productores) y el texto de SAA.
- **Necesito de vos:** matrícula. Si sos **agente institorio** o **sociedad**, el dato a mostrar cambia.

### L2 · Sin identificación del titular ni matrícula — **Alta** (pendiente)
- **Norma:** Ley 22.400 art. 4 (los productores "deberán hallarse inscriptos en el registro"); MACOP (número de inscripción en toda publicidad); Ley 24.240 art. 4 (información cierta, clara y detallada).
- **Fuentes:** https://servicios.infoleg.gob.ar/infolegInternet/anexos/20000-24999/20968/norma.htm · https://www.argentina.gob.ar/normativa/nacional/638/actualizacion
- **Vigencia:** Ley 22.400 sin modificaciones registradas en InfoLeg. ⚖️ Confirmar que no haya cambios recientes en el régimen de productores.
- **Solución:** página `/legales` con sección "Quién es responsable", con los campos marcados como pendientes.
- **Nota:** el sitio dice "Asesores de Seguros" (como el logo). No afirmé "productores asesores matriculados" porque no pude verificar la matrícula. La SSN permite verificarla en su sitio.

### L3 · El formulario se presentaba como denuncia formal — **Alta** (corregido)
- **Problema:** "Denuncia de siniestro" + "Enviar denuncia" hacía creer que con eso se cumplía la obligación legal.
- **Norma:** Ley 17.418 art. 46: el asegurado comunicará "al asegurador el acaecimiento del siniestro dentro de los tres días de conocerlo". Art. 47: si no lo hace pierde el derecho a ser indemnizado, salvo caso fortuito, fuerza mayor o imposibilidad sin culpa. Art. 53: el productor solo está facultado para recibir propuestas, entregar instrumentos y cobrar primas con recibo del asegurador (**no** menciona denuncias). Art. 54: solo el agente con facultades de representación puede "recibir notificaciones", salvo limitación expresa.
- **Fuente:** https://www.argentina.gob.ar/normativa/nacional/ley-17418-39520/actualizacion
- **Vigencia:** vigente; el texto actualizado registra la modificación del art. 11 por Ley 27.444.
- **Solución:** se renombró a **"Aviso de siniestro"**, con un recuadro que explica que no reemplaza la denuncia ante la compañía y cita el plazo de 3 días. Se agregó una guía de 3 pasos en el inicio.
- ⚖️ Si alguna compañía te dio mandato para recibir denuncias, un abogado debe revisar cómo presentarlo.

### L4 · Formulario sin información previa ni consentimiento — **Alta** (corregido, falta dato)
- **Norma:** Ley 25.326 art. 6 (informar previamente: finalidad, destinatarios, responsable y domicilio, obligatoriedad, consecuencias y derechos); art. 5 (consentimiento libre, expreso e informado). Art. 4: datos adecuados, pertinentes y no excesivos.
- **Fuente:** https://www.argentina.gob.ar/normativa/nacional/64790/actualizacion
- **Vigencia:** vigente.
- **Solución:** aviso de privacidad en el último paso, casilla de consentimiento obligatoria, marca de campos obligatorios y política completa en `/legales#privacidad`. Se quitaron del formulario la "localidad de emisión" y la "fecha de emisión" de las licencias (minimización) y los datos del tercero solo se piden si hubo tercero.

### L5 · Riesgo de datos sensibles (salud) — **Media** (corregido)
- **Norma:** Ley 25.326 art. 2 (los datos de salud son sensibles) y art. 7 (nadie puede ser obligado a proporcionarlos).
- **Solución:** pregunta "¿Hubo personas lesionadas? Sí / No / No sé" e indicación de no incluir diagnósticos.

### L6 · Carga de documentos personales por email — **Alta** (retirado)
- **Problema:** se pedía adjuntar licencias, cédulas y pólizas. EmailJS reenvía por correo; no había ninguna medida de seguridad definida.
- **Norma:** Ley 25.326 art. 9 (medidas técnicas y organizativas de seguridad y confidencialidad).
- **Solución:** se quitó la carga de archivos. La documentación se pide después del primer contacto. **Necesito que definas un canal seguro** antes de reincorporarla.

### L7 · Inscripción de la base de datos — **Media** (pendiente)
- **Norma:** Ley 25.326 arts. 21 y 24; AAIP: https://www.argentina.gob.ar/aaip/datospersonales/responsables
- ⚖️ Confirmar si la base de clientes y siniestros debe inscribirse y si ya lo está.

### L8 · Leyenda de la AAIP — **Media** (incluida, verificar)
- Se incluyó en `/legales` la leyenda sobre la AAIP como órgano de control (Disposición DNPDP 10/2008). **No pude abrir el texto oficial en esta sesión** para confirmar redacción y vigencia. La AAIP indica que la información del art. 6 debe exhibirse según la Res. AAIP 14/2018. ⚖️ Verificar ambos textos.

### L9 · Textos comerciales con promesas no verificables — **Media** (corregido)
- **Problema:** "Completa los datos y ya está!", "Olvidate de todas las dificultades", "contratación rápida y eficiente en línea", "actualizar la cobertura… de manera fácil y rápida". Algunas descripciones de seguros afirmaban coberturas como si fueran generales.
- **Norma:** Ley 24.240 art. 4 (información) y art. 8 (lo dicho en la publicidad obliga al oferente).
- **Solución:** textos reescritos en términos generales, con aclaraciones como "según el plan" o "dentro de los límites de la póliza". Se aclara que una cotización no es un contrato ni otorga cobertura y que el cotizador es de Polko, un tercero.

### L10 · Marcas de compañías y oficina con cartelería de Sancor — **Media** ⚖️
- Las fotos muestran la oficina con la marca "Grupo Sancor Seguros" y se exhiben logos de 6 compañías. Puede sugerir una relación especial con Sancor. El RGAA (texto ordenado del 04/11/2026), art. 57, obliga a las **entidades** a usar su denominación social completa en publicidad; no encontré una regla equivalente para productores. Confirmar autorización de uso de marcas y si existe relación de agente institorio.

### L11 · Defensa del consumidor (sitio web) — **Baja**
- Se agregó el enlace oficial para iniciar un reclamo: https://www.argentina.gob.ar/servicio/iniciar-un-reclamo-ante-defensa-del-consumidor
- Ley 24.240 art. 38 obliga a publicar en el sitio web el modelo de los contratos de adhesión. El sitio no contrata pólizas directamente (lo hacen las compañías y Polko). ⚖️ Confirmar si aplica a un productor.
- **No pude verificar** en fuente oficial la Res. SCI 424/2020 (botón de arrepentimiento) ni otras normas de enlaces obligatorios. Según lo que se sabe, el botón aplica a contratación en línea, que este sitio no hace. ⚖️

### L12 · Córdoba — **Baja** ⚖️
- No encontré en fuentes oficiales un requisito provincial o municipal específico para sitios web de productores. La Ley provincial de Defensa del Consumidor (10.247) **no fue verificada**. Pendiente para el abogado.

### L13 · Accesibilidad web
- La Ley 26.653 y el Decreto 656/2019 **no se pudieron verificar en fuente oficial** en esta sesión. Su alcance principal es el sector público y ciertos prestadores. Igualmente se tomó **WCAG 2.2 AA** como objetivo (ver §4).

### L14 · Servicios de terceros que reciben datos — **Baja** (informado)
- Polko (cotizador), WhatsApp/Meta, Google Maps (ahora **solo se carga si el usuario lo pide**), Google Fonts (recibe la IP del visitante: puede alojarse localmente si se prefiere) y EmailJS (cuando se habilite). Todos se declaran en `/legales`.

### Fuentes consultadas
- Ley 17.418: https://www.argentina.gob.ar/normativa/nacional/ley-17418-39520/actualizacion
- Ley 22.400: https://servicios.infoleg.gob.ar/infolegInternet/anexos/20000-24999/20968/norma.htm
- Ley 25.326: https://www.argentina.gob.ar/normativa/nacional/64790/actualizacion
- Ley 24.240: https://www.argentina.gob.ar/normativa/nacional/638/actualizacion
- MACOP (Res. SSN 225/2022 y 279/2022): https://www.argentina.gob.ar/sites/default/files/ssn_220602_macoprevision_04.pdf
- RGAA, Res. SSN 38.708/2014, texto ordenado del 04/11/2026: https://www.argentina.gob.ar/sites/default/files/ssn_rgaa_20260611.pdf (enlazado desde https://www.argentina.gob.ar/superintendencia-de-seguros/normativa-ssn)
- Normativa SSN para productores: https://www.argentina.gob.ar/superintendencia-de-seguros/normativa/productores-asesores-de-seguro
- SSN, datos de contacto: https://www.argentina.gob.ar/ssn
- AAIP, obligaciones de responsables: https://www.argentina.gob.ar/aaip/datospersonales/responsables/obligaciones
- Nota: la página oficial de la Res. SSN 24.828/1996 (reglamento de productores) la indica como abrogada por la RG 28.497/01, que a su vez figura suspendida; la SSN la sigue listando como vigente. ⚖️ Aclarar cuál es el reglamento vigente.

---

## 4. Cambios visuales y funcionales

**Identidad:** se conserva el logo, el azul de la marca y el marco en arco de la foto original. Tipografías: *Bricolage Grotesque* (títulos) y *Atkinson Hyperlegible* (texto), una fuente diseñada para leerse bien en cualquier edad y con baja visión. Paleta: azul tinta `#0f2742`, azul marca `#1d64c8`, cielo `#e9f1fb`; todo el texto cumple contraste AA.

| Antes | Después |
|---|---|
| Hero con 4 fotos de stock rotando y texto ilegible sobre la imagen | Titular grande y claro, foto real de la oficina, dirección visible y dos acciones (cotizar, WhatsApp) |
| Acordeón de beneficios con promesas genéricas | Cuatro servicios concretos del asesor, visibles sin clics |
| Carrusel que rotaba solo (sin pausa) | Accesos directos a los 9 seguros |
| — | Nueva guía de 3 pasos "¿Tuviste un siniestro?" |
| Mapa vacío que ocupaba mucho espacio en celular | Canales de contacto claros y mapa que carga a pedido |
| Pie con texto de aseguradora | Pie con navegación, contacto y banda SSN para productores |
| Catálogo plano | Catálogo con filtros (Personas / Vehículo y hogar / Empresas), enlaces directos y consulta por WhatsApp |
| Formulario largo de 25 campos en una sola pantalla | 4 pasos con progreso, validación, errores claros y revisión final |
| — | Página nueva `/legales` y página 404 |

Capturas: `docs/capturas/antes/` y `docs/capturas/despues/` (desktop 1366 px y celular 390 px).

## 5. Errores corregidos

- **React:** `useState` dentro de un `.map()` en `Value.jsx` (violaba las reglas de hooks y generaba el warning "Cannot update a component while rendering").
- **Formulario:** credenciales de EmailJS de ejemplo (el envío fallaba siempre); se borraba el formulario **antes** de saber si el envío salió bien (pérdida de datos); avisos con `alert()`; sin validación de formatos.
- **Navegación:** el menú móvil era un `div` sin acceso por teclado; había un `<a>` dentro de un `<button>`; el menú no se adaptaba al cambiar el tamaño de la ventana. Ahora usa un botón accesible, se cierra con Escape y al navegar, y la página vuelve arriba al cambiar de ruta.
- **WhatsApp:** el botón flotante abría **dos** pestañas (`onClick` + `href`).
- **Accesibilidad:** imágenes sin `alt`, sin enlace para saltar al contenido, carrusel automático sin pausa (WCAG 2.2.2), foco invisible, objetivos táctiles chicos.
- **HTML:** `lang="en"`, título "Real Estate", favicon inexistente (`/vite.svg`), clase inválida `img.derecha`, paquete llamado `realestate`.
- **Textos:** "Simpre", "dispocision", "Empeza", "Comenza", "Automovil", botones en inglés ("Chat now", "Message now").
- **Código muerto:** se eliminaron `Cards`, `Carrusel`, `useHeaderColor`, `slider.json`, `common.jsx`, `App.css`, cabeceras comentadas y 5 dependencias sin uso (`swiper`, `framer-motion`, `react-countup`, `react-accessible-accordion`, `react-outside-click-handler`). JS final: 214 kB (antes 230 kB).
- **Sin corregir (necesitan tu decisión):** se muestra "+54 9 351 864-7777" como WhatsApp, pero el botón de llamar marca 351 521-4529. Se dejaron los destinos originales, mostrando el número que realmente marca cada enlace.

## 6. Pruebas realizadas

- `npm run build`: OK, sin errores ni warnings.
- `node tests/validacion.test.mjs`: OK (DNI, patente vieja y nueva, email, fechas futuras, campos opcionales y condicionales).
- Playwright, desktop 1366 px y celular 390 px, en las 4 páginas: sin errores de consola y sin scroll horizontal.
- Formulario de punta a punta **con datos ficticios**: errores anunciados con foco, campos del tercero condicionales, revisión, y mensaje honesto "El envío en línea todavía no está habilitado". **Cero solicitudes de red externas**: no se envió nada.
- Menú móvil (aria-expanded, Escape), filtros del catálogo, rutas antiguas `/Seguros` y `/Siniestro`, página 404, primer Tab → "Saltar al contenido", 0 imágenes sin `alt`, un solo `h1` por página.
- **No probado:** envío real con EmailJS (sin credenciales), lectores de pantalla reales, Safari/iOS.

## 7. Archivos

**Modificados:** `index.html`, `package.json`, `package-lock.json`, `yarn.lock`, `.gitignore`, `src/index.css`, `src/App.jsx`, `src/pages/Website.jsx`, `src/utils/secures.jsx`, `src/utils/accordion.jsx` y los `.jsx`/`.css` de `header`, `hero`, `companies`, `value`, `Secures`, `contact`, `GetStarted`, `Footer`, `buttonwh`, `Layout`, `formulario/Poliza`.

**Nuevos:** `src/utils/site.js` (datos del negocio), `src/utils/Pendiente.jsx`, `src/pages/Legales.jsx/.css`, `src/components/Secures/SegurosResumen.jsx`, `src/components/formulario/GuiaSiniestro.jsx/.css`, `src/components/formulario/validacion.js`, `tests/validacion.test.mjs`, `.env.example`, `docs/`.

**Eliminados:** ver §5 (código muerto).

**Imágenes sin uso en `public/`** (no se borraron): contact.jpg, contact1.webp, contact2.jpg, contact33.jpg, contacto10.jpg (237 kB), contatct.jpg, value1.png, hero-image.png, footeeer.png, logo.png, logo2.png, logox.png, logux.png, tower.png, triunfo.png, superintendencia.png, superintendencia1.png.

## 8. Antes de publicar

1. Completar `src/utils/site.js`. No debe quedar ninguna marca amarilla "(pendiente)".
2. Revisión de un abogado: puntos ⚖️ y la página `/legales`.
3. Configurar `.env.local` con EmailJS y probar un envío **con datos ficticios** a una casilla propia.
4. Definir el canal seguro para la documentación.
