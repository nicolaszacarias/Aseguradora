import { Link } from "react-router-dom";
import { site, ssn } from "../utils/site";
import Pendiente from "../utils/Pendiente";
import "./Legales.css";

// BORRADOR: textos redactados a partir de normas oficiales (ver docs/INFORME.md).
// Deben ser revisados por un profesional y completados con los datos marcados como pendientes.
const Legales = () => (
  <article className="contenedor lg-wrapper">
    <p className="lg-borrador" role="note">
      Borrador pendiente de validación profesional. Los datos marcados en amarillo deben completarse antes de publicar.
    </p>
    <h1>Información legal y privacidad</h1>

    <nav className="lg-indice" aria-label="En esta página">
      <ul>
        <li><a href="#responsable">Quién es responsable de este sitio</a></li>
        <li><a href="#intermediacion">Nuestro rol como asesores</a></li>
        <li><a href="#privacidad">Privacidad y datos personales</a></li>
        <li><a href="#uso">Condiciones de uso</a></li>
        <li><a href="#reclamos">Consultas y reclamos</a></li>
      </ul>
    </nav>

    <section id="responsable">
      <h2>Quién es responsable de este sitio</h2>
      <dl className="lg-datos">
        <div><dt>Titular</dt><dd><Pendiente valor={site.titular}>Nombre del productor o razón social</Pendiente></dd></div>
        <div><dt>CUIT</dt><dd><Pendiente valor={site.cuit}>CUIT</Pendiente></dd></div>
        <div><dt>Matrícula / inscripción SSN</dt><dd><Pendiente valor={site.matriculaSSN}>N.º de matrícula</Pendiente></dd></div>
        <div><dt>Domicilio</dt><dd>{site.direccion}</dd></div>
        <div><dt>Contacto</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a> · <a href={site.telefono.href}>{site.telefono.mostrar}</a></dd></div>
      </dl>
      <p>
        Podés verificar la matrícula de cualquier productor asesor de seguros en el sitio de la{" "}
        <a href={ssn.web} target="_blank" rel="noopener noreferrer">Superintendencia de Seguros de la Nación</a>.
      </p>
    </section>

    <section id="intermediacion">
      <h2>Nuestro rol como asesores</h2>
      <p>
        No somos una compañía aseguradora. Asesoramos y gestionamos la contratación de seguros con las
        compañías con las que trabajamos. Las coberturas, exclusiones, sumas aseguradas, precios y la
        aceptación de cada riesgo las define la compañía aseguradora en la póliza.
      </p>
      <p>
        Las descripciones de este sitio son generales y orientativas: no constituyen una oferta ni
        reemplazan las condiciones de tu póliza. Una cotización no es un contrato ni otorga cobertura.
      </p>
      <p>
        <strong>Siniestros:</strong> la Ley de Seguros establece que el asegurado debe comunicar el siniestro
        a la compañía aseguradora dentro de los 3 días de conocerlo (art. 46, Ley 17.418). El formulario de
        este sitio nos avisa a nosotros para ayudarte con el trámite, pero no reemplaza esa comunicación a la
        compañía.
      </p>
    </section>

    <section id="privacidad">
      <h2>Privacidad y datos personales</h2>
      <p>Este aviso se brinda en cumplimiento del artículo 6 de la Ley 25.326 de Protección de Datos Personales.</p>

      <h3>Qué datos pedimos y para qué</h3>
      <ul>
        <li>
          <strong>Formulario de aviso de siniestro:</strong> datos de identificación y contacto, del vehículo,
          del conductor, del tercero involucrado si lo hubo, y la descripción del hecho. Los usamos solo para
          gestionar tu aviso y comunicarnos con vos y con la compañía aseguradora involucrada.
        </li>
        <li>
          <strong>Contacto por WhatsApp, teléfono o email:</strong> los datos que nos envíes, para responder tu consulta.
        </li>
      </ul>
      <p>
        Los campos obligatorios del formulario están marcados con *. Si no los completás no podemos gestionar el
        aviso. Brindar los datos es voluntario. No pedimos datos de salud: si hubo personas lesionadas solo
        preguntamos si las hubo.
      </p>
      <p>
        Si cargás datos de otra persona (por ejemplo, del tercero involucrado), hacelo solo en la medida
        necesaria para el trámite.
      </p>

      <h3>Con quién se comparten</h3>
      <ul>
        <li>Con la compañía aseguradora que corresponda, para gestionar el siniestro.</li>
        <li>
          Con el servicio que usamos para recibir el formulario por email:{" "}
          <Pendiente valor={null}>proveedor de envío (EmailJS u otro) y su ubicación</Pendiente>.
        </li>
      </ul>

      <h3>Servicios de terceros en este sitio</h3>
      <p>
        El cotizador online es de Polko; WhatsApp es de Meta; el mapa es de Google Maps (solo se carga si lo
        pedís) y las tipografías se descargan de Google Fonts. Cada uno tiene su propia política de privacidad.
      </p>

      <h3>Conservación</h3>
      <p>Conservamos los datos durante <Pendiente valor={null}>plazo de conservación</Pendiente>.</p>

      <h3>Tus derechos</h3>
      <p>
        Podés pedir acceso a tus datos en forma gratuita a intervalos no inferiores a seis meses, salvo interés
        legítimo (art. 14, Ley 25.326), y su rectificación, actualización o supresión (art. 16). Escribinos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p className="lg-aaip">
        La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326,
        tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus
        derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.
      </p>
      <p>
        Base de datos inscripta en el Registro Nacional de Bases de Datos:{" "}
        <Pendiente valor={null}>confirmar inscripción ante la AAIP</Pendiente>.
      </p>
    </section>

    <section id="uso">
      <h2>Condiciones de uso</h2>
      <p>
        El contenido de este sitio es informativo. Las marcas y logotipos de las compañías aseguradoras
        pertenecen a sus titulares y se muestran para identificar con quiénes trabajamos.
      </p>
      <p>
        Los enlaces a sitios de terceros (cotizador, WhatsApp, mapas, organismos públicos) se ofrecen para tu
        comodidad; esos sitios tienen sus propias condiciones.
      </p>
    </section>

    <section id="reclamos">
      <h2>Consultas y reclamos</h2>
      <p>
        Ante cualquier inconveniente, escribinos primero a <a href={`mailto:${site.email}`}>{site.email}</a>.
        Cada compañía aseguradora tiene además su propio Servicio de Atención al Asegurado, cuyos datos figuran
        en tu póliza y en el sitio de la compañía.
      </p>
      <p>
        Superintendencia de Seguros de la Nación — Departamento de Orientación y Asistencia al Asegurado:{" "}
        <a href={`tel:${ssn.telefono.replaceAll("-", "")}`}>{ssn.telefono}</a>,{" "}
        <a href={`mailto:${ssn.email}`}>{ssn.email}</a>,{" "}
        <a href={ssn.web} target="_blank" rel="noopener noreferrer">{ssn.webTexto}</a>.
      </p>
      <p>
        Como consumidor, también podés{" "}
        <a href="https://www.argentina.gob.ar/servicio/iniciar-un-reclamo-ante-defensa-del-consumidor" target="_blank" rel="noopener noreferrer">
          iniciar un reclamo ante Defensa del Consumidor
        </a>.
      </p>
      <p><Link to="/">Volver al inicio</Link></p>
    </section>
  </article>
);

export default Legales;
