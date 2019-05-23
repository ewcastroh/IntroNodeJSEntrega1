Primera Entrega Curso NodeJS
----------------------------
Estudiante: Eimer Wilfer Castro Hincapié

Para la ejecución de la aplicación se deben seguir los siguiente pasos:

1. Verificar que se tenga instalado el npm con el siguiente comando:
    npm -v
2. Verificar que se tenga instalado NodeJS con el siguiente comando:
    node -v

NOTA: Una vez se cumpla con la verificación de los anteriores pasos se puede continuar con los siguientes:

3. Entrar en la carpeta nombrada como Entrega1 y verificar que se tengan los siguientes archivos:
    principal.js
    datos.js
    package-lock.json
    matricula.txt
    primera entrega.pdf
    README.txt
4. Abrir la línea de comandos y ubicarse dentro de la carpeta Entrega1
5. Instalar Yargs con el siguiente comando:
    npm i yargs
6. Para la ejecucuón del programa mostrando unicamente los cursos actuales se debe ejecutar el siguiente comando:
    node principal
7. Para la inscripción de una persona en un programa de los actuales se puede hacer ejecutando alguno de los siguientes comandos:
    node principal -i=5 -n=Eimer -x=12345
    node principal --id=4 --nombre=Wilfer --cedula=1234567890
8. Para la ejecución del programa con un id de curso invalido se puede cambiar el id por un número mayor a 5