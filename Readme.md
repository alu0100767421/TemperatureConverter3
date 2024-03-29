**Conversor de Temperaturas**
=======================

En esta ocasion la practica ha consistido en la realizacion de un conversor de temperaturas de grados Celcius a Farenheit y viceversa mediante JavaScript, asi como la utilización de node.js, mocha y chai,
incluyendo pruebas de cubrimiento con Blanket e integrando Karma y Travis.

--------------------------------------------
 

**Página y repositorio personal:**
- http://javierpestanoron.github.io/
- https://github.com/JavierPestanoRon

-----------

**Links de la práctica IAASS:**
- Web de la práctica: http://10.6.128.10:8080/index.html

------------

**Links de la práctica:**
 - Web de la práctica: http://javierpestanoron.github.io/TemperatureConverter3/index.html
 - Repositorio de la práctica: https://github.com/JavierPestanoRon/TemperatureConverter3/tree/master
 - Test con cubrimiento Blanket: http://javierpestanoron.github.io/TemperatureConverter3/test/test_blanket.html
 - Test de la práctica: http://javierpestanoron.github.io/TemperatureConverter3/test/index.html
 - Test con Travis: https://travis-ci.org/JavierPestanoRon/TemperatureConverter3

----------
 - Test Travis: [![Build Status](https://travis-ci.org/JavierPestanoRon/TemperatureConverter3.svg)](https://travis-ci.org/JavierPestanoRon/TemperatureConverter3)

----------
----------

**Como Desplegar una Aplicación Web en [iaas.ull.es](iaas.ull.es)**
---------------------------------------------------------------

Como parte de una nueva versión hemos de desplegar la aplicacion web en los servidores de la ULL para alojar nuestro conversor de temperaturas con sus respectivas pruebas.

--------

En primer lugar deberemos iniciar sesión en la web del [`iaas.ull.es`](iaas.ull.es) con nuestra credencial de la ull, de esta forma accederemos a la interfaz grafica de administración de nuestra maquina virtual sobre la que desplegaremos la aplicación.

![Inicio de sesión](https://github.com/JavierPestanoRon/TemperatureConverter3/blob/master/images_md/Captura1.PNG)

----------

A continuación comenzamos modificando el valor del `VNC`, marcandolo como `noVNC`en el panel de control.

![Panel de Control](https://github.com/JavierPestanoRon/TemperatureConverter3/blob/master/images_md/Captura3.PNG)

----------

Una vez abierta la consola se nos pedirá que iniciemos sesión e introduzcamos una nueva clave.
*`NOTA: Si apagamos la maquina virtual, perderemos todo el trabajo realizado, por lo que hay que mantenerla encendida`*

![Inicio de sesión](https://github.com/JavierPestanoRon/TemperatureConverter3/blob/master/images_md/Captura4.PNG)

-----------
Una vez logueados realizamos las instalaciones pertienentes y obtenemos nuestra dirección ip.
Seguidamente creamos una clave RSA para `GitHub` y de esta forma poder hacer commits a nuestro repositorio.
- `ssh-keygen -t rsa`
- `sudo apt-get install npm`
- `ifconfig`

-----------

Ahora que ya podemos acceder a nuestro repositorio y realizar commits, nos descargamos desde el servidor todo el contenidos de nuestro repositorio.
- `git clone git@github.com:JavierPestanoRon/TemperatureConverter3.git`

-----------

Arrancamos el static-server modificado correctamente con el siguiente comando:
![Static-server](https://github.com/JavierPestanoRon/TemperatureConverter3/blob/master/images_md/captura3.png)
- `sudo nodejs static-server.js`

Y ya podremos entrar en nuestra aplicacion desde el explorador con el siguiente formato `IP:puerto/index.html`




 


