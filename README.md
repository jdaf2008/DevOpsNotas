# DevOpsNotas
Microservicio con la función de Servidor API REST desarrollado e implementado con DevOps, muestra las notas de la primera parte del curso de aplicaciones en la nube.

Este microservicio retorna un JSON con las notas de la primera parte del curso de Aplicaciones sobre la nube de MCIC Universidad Distrital FJC

## Instalación y ejecución

El primer paso requiere clonar el repositorio

```
$ git clone https://github.com/jdaf2008/DevOpsNotas.git
```

La instalación y ejecución se realiza conforme al archivo DockerFile que se encuentra en la carpeta raíz y mediante los siguientes comandos, el primero construye la imagen y el segundo ejecuta el contenedor.

```
$ sudo docker build -t score_activities .
$ sudo docker run -t -p 3030:3030 score_activities
```


## Desarrollo y Despliegue
### Desarrollo

EL servicio se desarrollo con Node js y framework Express

### Despliegue

Su despliegue se realiza con base en contenedores Docker (DevOps) y su imagen se construye a partir del DockerFile.

### Estructura del JSON retornado

206.189.193.69


[{"name":"Juan David Arias","tag":"20181195002","activities":[{"id":1,"name":"Taller1","value":"5.0"},{"id":2,"name":"Taller2","value":"5.0"},{"id":3,"name":"Taller3","value":"5.0"},{"id":4,"name":"Blog","value":"5.0"}]}]
