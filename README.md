
# 📚 Clask

Conecta, comparte y aprende.

Clask es una red social sencilla para estudiantes que buscan **compartir conocimientos, resolver dudas y dar consejos académicos de forma colaborativa**. Inspirada en la simplicidad de Threads y la dinámica comunitaria de Reddit, Clask es el lugar donde el aula se extiende al mundo digital.

-----

## 🚀 Tech Stack

  * **Frontend**: React
  * **Backend**: Node.js + Express
  * **Base de datos**: MongoDB (opcionalmente PostgreSQL si se requiere)
  * **API**: RESTful
  * **Estilo**: TailwindCSS o CSS Modules
  * **Autenticación**: JWT (JSON Web Tokens)
  * **Despliegue**: Vercel (frontend), Render o Railway (backend)

-----

## 🧱 Estructura del Proyecto

```
clask/
├── client/           # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── App.jsx
├── server/           # Node.js + Express backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── index.js
├── README.md
└── .env.example
```

-----

## ✨ Funcionalidades Principales

  * 🧑‍🎓 Crear y explorar publicaciones académicas y consejos
  * 🧵 Comentarios en hilo (formato tipo foro)
  * 👍 Sistema de votos (upvote/downvote)
  * 🔍 Búsqueda por etiquetas o temas escolares
  * 🔐 Registro/Login con autenticación JWT
  * 🛠️ Panel de usuario para gestionar aportes

-----

## 🛠️ Instalación Local

Sigue estos pasos para configurar y ejecutar Clask en tu máquina local:

1.  **Clonar el repositorio**

    ```bash
    git clone https://github.com/tuusuario/clask.git
    cd clask
    ```

2.  **Configurar variables de entorno**
    Copia el archivo `.env.example` en las carpetas `/server` y `/client` y completa las variables necesarias (por ejemplo, claves de API, URLs de bases de datos, etc.).

3.  **Instalar dependencias**

      * **Backend**
        ```bash
        cd server
        npm install
        ```
      * **Frontend**
        ```bash
        cd ../client
        npm install
        ```

4.  **Ejecutar en modo desarrollo**

      * **Backend**
        ```bash
        npm run dev
        ```
      * **Frontend**
        ```bash
        npm start
        ```

-----

## 🧪 To-do / Próximas Funcionalidades

  * [ ] Soporte para imágenes en publicaciones
  * [ ] Menciones con @usuario
  * [ ] Notificaciones en tiempo real
  * [ ] Sistema de moderación
  * [ ] Dark mode

-----

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT). Es libre para compartir, modificar y construir comunidad educativa.

-----

## 🤝 Contribuciones

¡Nos encanta la colaboración\! Si tienes ideas, correcciones o quieres sumar código, sigue estos pasos:

1.  Haz un "fork" del proyecto.
2.  Crea una rama con tu nueva funcionalidad: `git checkout -b mi-feature`
3.  Haz commit de tus cambios: `git commit -m 'Mi feature'`
4.  Sube tu rama: `git push origin mi-feature`
5.  Crea un Pull Request.

-----

## 🌐 Sitio en Construcción

👉 [clask.app](https://www.google.com/search?q=https://clask.app) (próximamente)

Síguenos en redes: @clasknet

Hecho con 💙 para estudiantes que aprenden mejor juntos.
