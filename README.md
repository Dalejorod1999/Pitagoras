# Pitagoras
Proyecto de Informatica

## Descargar el Proyecto
1. Desde el Terminal, ejecuta el comando `git clone https://github.com/Dalejorod1999/Pitagoras.git`
2. Entrar en `index.html`

## Subir cambios
1. En el directorio del proyecto, escribe el comando `git add .`. A continuacion se agregaran los archivos al *stage*.
   para confirmar que los archivos se encuentran en el *stage* escribe y ejecuta el comando `git status`.

2. Escribe el comando `git commit -m` donde el señalador *-m* define que se escribe un mensaje para el commit en la linea actual.
   Ejemplo: `git commit -m "Mensaje del Commit"`. Este mensaje debe describir en una frase corta los cambios hechos en el commit.
   
   Ejemplos:
    - Agregar Nav
    - Fix de Ejercicio
    - Eliminar codigo extra
    
3. Confirmamos que existan cambios hechos en el repositorio usando `git pull`. De ser que todo este al dia con respecto al respositorio
   el Terminal respondera con `Already up to date`. De lo contrario intentara mezclar los cambios del repositorio en GitHub con el
   repositorio actual.
   
   Exiten dos posibles casos:
   
   3.1. **Se actualizan los cambios con respecto al repostirio de GitHub**
        En este caso se repite el commit (Paso 2) y luego se lleva a cabo el paso 4
        mediante el cual se suben a GitHub los cambios hechos.
   
   3.2. **Problemas para hacer `merge`** 💀
        Existe la posibilidad de que un documento que modificastes haya sido modificado por otro 
        usuario que comparta el repositorio.
        En este caso deberas adentrarte a entender metodos de mezcla (*merge*).
        Para mas informacion visita la documentacion por GitHub de Git: [Merge]: https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/
  
4. Por ultimo se suben los cambios hechos, para ello hacemos `git push`.
