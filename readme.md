## Descripción General

Este proyecto es un sitio web para el Colegio Científico de Alajuela (CCAL), desarrollado con React. El sitio contiene información sobre la institución, sus logros, proceso de admisión y medios de contacto.

## Estructura del Proyecto

El proyecto sigue una estructura organizada por componentes y páginas:

```
client/
├── public/              # Archivos públicos estáticos
├── src/                 # Código fuente
    ├── assets/          # Imágenes y recursos gráficos
    ├── components/      # Componentes reutilizables
    ├── pages/           # Páginas principales
    ├── App.js           # Componente principal
    └── index.js         # Punto de entrada
```

## Dependencias Principales

El proyecto utiliza las siguientes bibliotecas y dependencias:

- [React](https://react.dev/) (v18.2.0): Biblioteca principal para la construcción de interfaces
- [React Router](https://reactrouter.com/) (v6.21.3): Manejo de navegación entre páginas
- [EmailJS](https://www.emailjs.com/) (v3.2.0): Servicio para envío de emails desde el formulario de contacto
- [ClassNames](https://www.npmjs.com/package/classnames) (v2.5.1): Utilidad para manejar múltiples clases de CSS

## Páginas Principales

### Home `/`
- home.js: Muestra un banner principal, tarjetas informativas, estadísticas del colegio y un video informativo.
- Características destacadas:
  - Animación de conteo en estadísticas utilizando Intersection Observer
  - Tarjetas interactivas que redirigen a otras secciones del sitio

### Conócenos `/conócenos`
- about_us.js: Presenta información sobre la historia del colegio y su equipo docente.
- Diseño responsivo que se adapta a diferentes tamaños de pantalla.

### Logros `/logros`
- achievements.js: Muestra los logros académicos del colegio mediante un sistema de acordeón.
- Implementa componentes acordeón para mostrar/ocultar contenido.

### Admisión `/admisión`
- admission.js: Detalla el proceso de admisión, requisitos y enlaces a documentos importantes.
- Incluye enlaces a formularios externos y documentos PDF.

### Contáctanos `/contáctanos`
- contact.js: Formulario de contacto y ubicación.
- Implementa EmailJS para el envío de mensajes.
- Incluye un mapa de Google Maps con la ubicación del colegio.

## Componentes Reutilizables

### Navbar
- navbar.js: Barra de navegación adaptable que se oculta al hacer scroll.
- Incluye menú hamburguesa para dispositivos móviles.

### Footer
- footer.js: Pie de página con información de copyright y enlaces a redes sociales.

### Botones
- Button1.js y Button2.js: Componentes de botón con diferentes estilos y animaciones.

## Características Técnicas

### Diseño Responsivo
Todas las páginas están diseñadas para adaptarse a diferentes dispositivos, desde móviles hasta pantallas de escritorio.

### Animaciones
- Efectos de transición en la navegación
- Animación de conteo en estadísticas
- Hover effects en botones y tarjetas

### Carga Optimizada
- loader.css: Implementa un loader inicial mientras se carga la aplicación.

## Ejecutar el Proyecto

1. Instalar las dependencias:
```bash
npm install
```

2. Iniciar el servidor de desarrollo:
```bash
npm start
```

3. El sitio estará disponible en `http://localhost:3000`

## Despliegue

Para generar una versión de producción:

```bash
npm run build
```

Esto creará una carpeta `build` con los archivos optimizados listos para ser desplegados en un servidor web.

## Versión

Versión actual: 2.0.1

---