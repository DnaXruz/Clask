"""
📚 Clask
Conecta, comparte y aprende.

Clask es una red social sencilla para estudiantes que buscan compartir conocimientos, resolver dudas y dar consejos académicos de forma colaborativa. Inspirada en la simplicidad de Threads y la dinámica comunitaria de Reddit, Clask es el lugar donde el aula se extiende al mundo digital.

🚀 Tech Stack
Frontend: React
Backend: Node.js + Express
Base de datos: MongoDB (opcionalmente PostgreSQL si se requiere)
API: RESTful
Estilo: TailwindCSS o CSS Modules
Autenticación: JWT (JSON Web Tokens)
Despliegue: Vercel (frontend), Render o Railway (backend)

🧱 Estructura del Proyecto

clask/
├── client/              # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── App.jsx
├── server/              # Node.js + Express backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── index.js
├── README.md
└── .env.example

✨ Funcionalidades principales

- 🧑‍🎓 Crear y explorar publicaciones académicas y consejos
- 🧵 Comentarios en hilo (formato tipo foro)
- 👍 Sistema de votos (upvote/downvote)
- 🔍 Búsqueda por etiquetas o temas escolares
- 🔐 Registro/Login con autenticación JWT
- 🛠️ Panel de usuario para gestionar aportes

🛠️ Instalación local

1. Clonar el repositorio
git clone https://github.com/tuusuario/clask.git
cd clask

2. Configurar variables de entorno
Copia el archivo `.env.example` en `/server` y `/client` y completa los datos necesarios.

3. Instalar dependencias

Backend
cd server
npm install

Frontend
cd ../client
npm install

4. Ejecutar en modo desarrollo

Backend
npm run dev

Frontend
npm start

🧪 To-do / Próximas funcionalidades

- [ ] Soporte para imágenes en publicaciones
- [ ] Menciones con @usuario
- [ ] Notificaciones en tiempo real
- [ ] Sistema de moderación
- [ ] Dark mode

📄 Licencia

Este proyecto está bajo la licencia MIT.
Libre para compartir, modificar y construir comunidad educativa.

🤝 Contribuciones

¡Nos encanta la colaboración!
Si tienes ideas, correcciones o quieres sumar código:

1. Haz un fork del proyecto
2. Crea una rama con tu feature: `git checkout -b mi-feature`
3. Haz commit de los cambios: `git commit -m 'Mi feature'`
4. Sube tu rama: `git push origin mi-feature`
5. Crea un Pull Request

🌐 Sitio en construcción

👉 clask.app (próximamente)
Síguenos en redes: @clasknet

Hecho con 💙 para estudiantes que aprenden mejor juntos.
"""
