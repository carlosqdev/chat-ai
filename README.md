# Chat AI

## Descripción

Chat AI es un proyecto inspirado en ChatGPT de OpenAI que utiliza inteligencia artificial para crear un chat interactivo. Permite a los usuarios comunicarse con una interfaz impulsada por IA y obtener respuestas automáticas.

## Instalación

Para instalar las dependencias necesarias, ejecuta el siguiente comando:

```
pnpm install
```

Antes de iniciar el proyecto, asegúrate de configurar una variable de entorno en un archivo `.env.local`. Crea este archivo en la raíz del proyecto y añade lo siguiente:

```
OPENAI_API_KEY=tu_clave_de_api_aquí
```

Reemplaza `tu_clave_de_api_aquí` con tu propia clave API proporcionada por OpenAI. Esta clave será utilizada para realizar solicitudes a la API de OpenAI.

## Uso

Una vez instalado y configurado el archivo `.env.local`, puedes iniciar el proyecto localmente utilizando el siguiente comando:

```
pnpm run dev
```

Esto iniciará la aplicación en modo de desarrollo. Puedes acceder a ella ingresando a `http://localhost:3000` en tu navegador web.

## Scripts disponibles

- `dev`: Inicia la aplicación en modo de desarrollo.
- `build`: Genera una versión optimizada del proyecto para producción.
- `start`: Inicia la aplicación en modo de producción después de ser construida.
- `lint`: Ejecuta ESLint para analizar y corregir problemas relacionados con el código.

Puedes ejecutar estos scripts usando el comando correspondiente precedido por "pnpm run". Por ejemplo:

```
pnpm run lint
```

## Contribución

Si deseas contribuir al proyecto, te invitamos a seguir estas pautas:

1. Haz un fork del repositorio.
2. Crea una rama nueva para tus cambios:
   ```
   git checkout -b mi-nueva-funcionalidad
   ```
3. Realiza los cambios necesarios y realiza commits descriptivos.
4. Envía tus cambios al repositorio remoto:
   ```
   git push origin mi-nueva-funcionalidad
   ```
5. Abre una solicitud pull (pull request) describiendo tus cambios e indicando cualquier información relevante.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Puedes encontrar más detalles en el archivo LICENSE.
