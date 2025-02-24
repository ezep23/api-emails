
## Usando la API de mailersend para enviar correos

Como utilizarla:
    1. Clonar el repositorio e instalar las dependencias necesarias de cada carpeta (server y emails-app) con ```npm install ```

    2. Ir a la página de mailersend, crear una cuenta, un dominio y copiar la API-KEY

    3. Copiar las variables de entorno del archivo ```.env-template``` en la carpeta server y crear el archivo ```.env``` con las propias

    4. en EMAIL va antes del ```@``` el corrreo que pusimos en nuestra cuenta y luego el dominio verificado que nos dieron (ejemplo: alejandro@do2r.mlsender.net)
    
    5. Quedaría iniciar la aplicación accediendo a su carpeta con la terminal y ejecutando ```npm run dev``` y abriendo la página, luego crear otra terminal y accediendo a la carpeta server ejecutando ```node api.js``` 

### Capturas

![App Screenshot](./emails-app/public/screen1.png)
![App Screenshot](./emails-app/public/screen2.png)
![App Screenshot](./emails-app/public/screen3.png)



