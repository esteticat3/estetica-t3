# 🚀 Guía de Despliegue - Belleza Radiante

## 📋 Prerrequisitos

1. **Node.js**: Versión 18 o superior
2. **Base de Datos**: PostgreSQL (Neon recomendado)
3. **Hosting**: Vercel, Netlify o similar

## 🌐 Configuración de Base de Datos

### Opción 1: Usar Neon PostgreSQL (Recomendado)
1. Crear cuenta en [Neon.tech](https://neon.tech)
2. Crear nueva base de datos
3. Copiar la cadena de conexión

### Opción 2: PostgreSQL Local
```bash
# Instalar PostgreSQL
# Crear base de datos
createdb belleza_radiante
```

## 🔧 Configuración del Entorno

1. **Clonar el repositorio**:
```bash
git clone [URL_DEL_REPOSITORIO]
cd clinica-estetica
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Configurar variables de entorno**:
```bash
# Copiar archivo de ejemplo
cp .env.example .env

# Editar .env con tus valores
DATABASE_URL="postgresql://usuario:password@host:5432/database"
```

4. **Configurar base de datos**:
```bash
# Generar cliente Prisma
npx prisma generate

# Ejecutar migraciones
npx prisma migrate dev

# Sembrar datos (opcional)
npx prisma db seed
```

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conectar repositorio en Vercel
2. Configurar variables de entorno
3. Desplegar automáticamente

### Netlify
1. Configurar build command: `npm run build`
2. Configurar publish directory: `dist`
3. Agregar variables de entorno

### Hosting Propio
```bash
# Construir proyecto
npm run build

# Servir archivos desde dist/
# Configurar servidor web (Nginx, Apache)
```

## 🔍 Verificación

1. **Acceder al sitio web**
2. **Probar formulario de contacto**
3. **Verificar sistema de reseñas**
4. **Confirmar conexión a base de datos**

## 📧 Contacto

Para soporte técnico: esteticat39@gmail.com
