# Despliegue en Vercel

El proyecto está preparado como un sitio estático multipágina. El build precompila el JSX y copia React a `dist/vendor`, por lo que el sitio publicado no transforma código en el navegador ni depende de un CDN para React.

## Desde el panel de Vercel

1. Importe el repositorio.
2. Seleccione **Other** como Framework Preset.
3. Use `npm run build` como **Build Command**.
4. Use `dist` como **Output Directory** y `.` como **Root Directory**.
5. Despliegue el proyecto.

El sitio no necesita variables de entorno para funcionar. El archivo `.env.local` es local, está ignorado por Git y no debe subirse.

## Desde la CLI

```bash
npm install
npm run build
npx vercel
npx vercel --prod
```

La carpeta `.vercel` contiene únicamente el vínculo local con el proyecto de Vercel y no se versiona.

## Rutas públicas

- `/`
- `/nosotros`
- `/productos`
- `/marketplace`
- `/producto?producto=<slug>`
- `/calculadora`
- `/blog`
- `/faq`
- `/sagrilaft`
- `/contacto`
