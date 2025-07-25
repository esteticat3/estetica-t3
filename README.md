# 🌟 Belleza Radiante - Clínica Estética

Sitio web profesional para la clínica estética "Belleza Radiante", especializada en medicina estética, rellenos labiales, botox y tratamientos faciales con sistema dinámico de reseñas.

## ✨ Características Principales

- **Framework**: Astro v5 con SSR (Node.js adapter)
- **Base de Datos**: PostgreSQL con Prisma ORM
- **Estilo**: Tailwind CSS v4 con diseño responsive
- **Funcionalidades Avanzadas**: 
  - Sistema dinámico de reseñas con moderación
  - API REST para gestión de testimonios
  - Panel de administración para aprobar/rechazar reseñas
  - Formulario de contacto integrado con WhatsApp
  - Galería de servicios con precios actualizados
  - Estadísticas en tiempo real de satisfacción
  - SEO optimizado con meta tags dinámicos

## 🗄️ Tecnologías

- **Frontend**: Astro 5.12.3, TypeScript, Tailwind CSS 4.x
- **Backend**: Node.js, Prisma ORM
- **Base de Datos**: PostgreSQL (Neon Cloud)
- **API**: RESTful endpoints para CRUD de testimonios
- **Despliegue**: Preparado para Vercel/Netlify

## 🎨 Paleta de Colores

- **Primario**: Rosa elegante (#E91E63)
- **Secundario**: Dorado suave (#F5C842)
- **Acento**: Verde menta (#4ECDC4)
- **Neutros**: Cremas y grises suaves

## 🏗️ Estructura del Proyecto

```text
/
├── public/
│   └── images/           # Imágenes estáticas
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   ├── ServiceCard.astro
│   │   ├── TestimonialCard.astro
│   │   ├── ContactForm.astro
│   │   └── PricingCard.astro
│   ├── layouts/
│   │   └── Layout.astro   # Layout principal
│   ├── pages/             # Páginas del sitio
│   │   ├── index.astro    # Página de inicio
│   │   ├── nosotros.astro # Página sobre nosotros
│   │   ├── servicios.astro # Página de servicios
│   │   ├── precios.astro  # Página de precios
│   │   └── contacto.astro # Página de contacto
│   └── styles/
│       └── global.css     # Estilos globales y Tailwind
```

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview

# Agregar integración (ej: Tailwind)
npm run astro add tailwind
```

## 📱 Páginas Incluidas

### 🏠 Inicio
- Hero section atractivo
- Servicios destacados
- Galería de instalaciones
- Testimonios de clientes
- Formulario de contacto

### 👥 Nosotros
- Historia de la clínica
- Misión y visión
- Equipo médico profesional
- Certificaciones

### 💉 Servicios
- Rellenos dérmicos
- Tratamientos faciales
- Medicina estética corporal
- Galería antes/después

### 💰 Precios
- Paquetes estructurados:
  - Esencial ($2,500 MXN)
  - Renovación ($6,800 MXN)
  - Transformación ($15,000 MXN)
- Tratamientos individuales
- Opciones de pago

### 📞 Contacto
- Información completa
- Formulario funcional
- Integración con WhatsApp
- Mapa de ubicación
- FAQ

## 🔧 Configuración

### Variables de Entorno
Copia `.env.example` a `.env` y configura:

```env
SITE_URL=https://belleza-radiante.vercel.app
WHATSAPP_NUMBER=5215512345678
GOOGLE_MAPS_COORDS="19.4326,-99.1332"
CLINIC_NAME="Belleza Radiante"
CLINIC_EMAIL="info@bellezaradiante.com"
CLINIC_PHONE="+52 55 1234 5678"
CLINIC_ADDRESS="Av. Reforma 123, Col. Juárez, CDMX"
```

### WhatsApp Integration
El formulario de contacto envía automáticamente los datos por WhatsApp al número configurado.

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio de GitHub
2. Configura las variables de entorno
3. Despliega automáticamente

### Otros Proveedores
- Netlify
- GitHub Pages
- Cloudflare Pages

## � Checklist de Producción

- [x] Todas las imágenes optimizadas (<300KB)
- [x] Textos originales profesionales
- [x] Formulario funcional con WhatsApp
- [x] Diseño responsive verificado
- [x] SEO básico implementado
- [x] Favicon y logo implementados
- [x] Footer con "By Team 3"

## 🛠️ Tecnologías Utilizadas

- **Astro** - Framework de desarrollo web
- **Tailwind CSS** - Framework de CSS
- **TypeScript** - Tipado estático
- **Google Fonts** - Tipografías (Inter + Playfair Display)
- **Unsplash** - Imágenes de stock optimizadas

## 📄 Licencia

Proyecto desarrollado por **Team 3** para fines académicos.

## 📞 Soporte

Para soporte técnico, contacta al equipo de desarrollo.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
