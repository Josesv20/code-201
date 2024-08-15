# Listas en HTML, Control de flujo en JS, y CSS: Box Model

## Listas en HTML

Las listas en HTML son esenciales para organizar y estructurar el contenido de manera clara y accesible. Ya sea para crear menús de navegación, agrupar elementos relacionados o presentar información en un formato ordenado, las listas permiten a los desarrolladores presentar datos de manera que los usuarios puedan escanear y comprender fácilmente. Aprender a utilizar listas correctamente es clave para construir sitios web bien organizados y fáciles de usar.

## Control de Flujo en JavaScript

El control de flujo en JavaScript es crucial para crear aplicaciones interactivas y dinámicas. Entender cómo funcionan las estructuras de control como if, else if, else, switch, y los bucles for y while te permite dictar el comportamiento de tu código bajo diferentes condiciones. Esto es fundamental para manejar la lógica de tus aplicaciones, hacer que respondan a las acciones del usuario y procesar datos de manera eficiente. Dominar el control de flujo es un paso vital hacia la creación de aplicaciones web que respondan de manera inteligente a las interacciones del usuario.

## CSS: Box Model

El Box Model es uno de los conceptos más importantes en CSS, ya que define cómo se mide y presenta cada elemento en una página web. Entender el Box Model te permite controlar el diseño de tu sitio web con precisión, manipulando márgenes, bordes, padding y el contenido de los elementos. Esto es crucial para crear diseños web responsivos y visualmente atractivos, garantizando que los elementos se comporten como esperas en diferentes tamaños de pantalla y resoluciones.

## Relación con el Módulo

Estos temas se integran directamente con los objetivos de este módulo, que incluyen la creación de sitios web estructurados y estéticamente agradables, así como la escritura de código JavaScript eficiente y bien organizado. Aprender a combinar correctamente HTML, CSS y JavaScript te permite desarrollar interfaces de usuario efectivas y funcionales, lo cual es esencial para cualquier desarrollador web.

### Listas Ordenada y No ordenada.

¿Cuándo se puede utilizar una lista no ordenada en tu documento HTML?

Una lista no ordenada (ul) se utiliza cuando el orden de los elementos no es importante. Es ideal para agrupar elementos relacionados que no necesitan seguir una secuencia específica. Ejemplos comunes incluyen menús de navegación, listas de características o ventajas, y agrupaciones de enlaces o ítems.

¿Cómo cambias el estilo bullet de la lista de elementos no ordenados?

Puedes cambiar el estilo de los bullets en una lista no ordenada utilizando la propiedad CSS list-style-type. Algunos valores comunes incluyen:
disc: El estilo de bullet predeterminado (un círculo lleno).
circle: Un círculo vacío.
square: Un cuadrado.
none: Elimina los bullets.

¿Cuándo debes usar una lista ordenada o lista no ordenada en tu documento HTML?

Lista Ordenada (ol): Debes usar una lista ordenada cuando el orden de los elementos es importante, como cuando estás presentando pasos en un procedimiento, clasificaciones, o cualquier otro tipo de información secuencial.
Lista No Ordenada (ul): Usa una lista no ordenada cuando el orden no es relevante y solo deseas agrupar elementos relacionados. Esto es común para listas de características, puntos de discusión, o ítems sin jerarquía específica.

Describe dos formas en las que puedes cambiar los números en los elementos de la lista proporcionados por una lista ordenada.

Cambiar el Tipo de Numeración con list-style-type:

Puedes cambiar la forma en que se numeran los elementos de la lista ordenada utilizando la propiedad list-style-type. Ejemplos:
decimal: Números arábigos (1, 2, 3, …).
lower-roman: Números romanos en minúsculas (i, ii, iii, …).
upper-roman: Números romanos en mayúsculas (I, II, III, …).
lower-alpha: Letras en minúsculas (a, b, c, …).
upper-alpha: Letras en mayúsculas (A, B, C, …).

Iniciar la Numeración en un Número Específico con start:

Puedes iniciar la numeración en un número diferente al 1 utilizando el atributo start en el elemento <ol>. Esto es útil cuando una lista continúa desde un punto específico.

### The Box Model.

Describe las propiedades de margin y padding en CSS como si fueran los personajes de una historia. ¿Cuál es su rol en la historia: “El Box Model”?
Enumera y describe las cuatro partes de un box del elementos HTML según el box model.

La Historia: "El Box Model"
En la tierra de CSS existía un reino llamado Box Model, donde cada elemento HTML vivía dentro de su propio recuadro mágico, llamado box. Este reino estaba gobernado por dos personajes importantes: Margin y Padding.

Margin: El Guardián del Espacio Exterior
Margin era el guardián del espacio exterior de cada box. Su misión era proteger el recuadro del contacto con otros elementos en el reino. Margin se encargaba de mantener una distancia respetuosa entre cada box y sus vecinos, asegurándose de que no se amontonaran ni se molestaran entre sí. Margin era muy flexible, capaz de expandir o reducir su territorio, creando más espacio o acercándose cuando era necesario. Sin embargo, siempre vigilaba desde fuera, sin entrar jamás en el recuadro mismo.

Padding: El Protector del Contenido Interior
Dentro del recuadro mágico, vivía Padding, el protector del contenido interior. Padding tenía una tarea crucial: asegurar que el contenido (ya fueran textos, imágenes, o cualquier otro tesoro) no estuviera pegado directamente a los bordes del recuadro. Padding se colocaba como un suave colchón alrededor del contenido, proporcionando un espacio cómodo y seguro entre el contenido y las paredes del recuadro. A diferencia de Margin, Padding vivía dentro del recuadro, muy cerca del contenido, cuidando de él con esmero.

El Box Model: Las Cuatro Partes del Box
Cada box en el reino de Box Model estaba compuesto por cuatro partes esenciales:

Content (Contenido):

El corazón del box, donde se encontraba el contenido verdadero: texto, imágenes, videos, o cualquier otro elemento que el box albergara. Esta es la parte más importante, pues es lo que realmente queremos mostrar al mundo.
Padding (Relleno):

Justo alrededor del contenido se encontraba Padding, el espacio interno que protegía al contenido de los bordes del box. Padding se aseguraba de que el contenido no estuviera apretado contra las paredes del box, proporcionando un espacio de respiro.
Border (Borde):

A continuación, el box estaba rodeado por el Border. Este era como la muralla del box, una línea que delimitaba y protegía todo lo que estaba dentro. El Border podía ser de diferentes grosores, estilos y colores, y podía ser tan simple o decorativo como se deseara.
Margin (Margen):

Finalmente, más allá del Border, vivía Margin, el espacio externo que mantenía el box separado de otros boxes en el reino. Margin aseguraba que cada box tuviera su propio espacio y que no se mezclaran con otros a menos que se les permitiera.
Y así, bajo la protección de Margin y Padding, cada box vivía en armonía dentro del reino de Box Model, con su contenido resguardado y su espacio bien definido, asegurando un diseño limpio y organizado en el vasto mundo de CSS.

### Arrays. Operadores y Expresiones. Condicionales. Bucles.

¿Qué tipos de datos puedes almacenar en un Array?

En JavaScript, un array puede almacenar cualquier tipo de dato, incluyendo:
Números (number): Ej. 42, 3.14
Cadenas de texto (string): Ej. "Hola", "JavaScript"
Booleanos (boolean): Ej. true, false
Objetos (object): Ej. { nombre: "John", edad: 30 }
Funciones (function): Ej. function() { return "Hola"; }
Otros Arrays (arrays anidados): Ej. [1, [2, 3], 4]
Valores especiales como null y undefined.

¿El array people es un array de JavaScript válido? ¿Cómo puedo acceder a los valores almacenados?

Sí, el array people es un array de JavaScript válido. Es un array que contiene otros arrays como elementos.
Para acceder a los valores almacenados en este array, puedes usar la notación de corchetes [] indicando el índice de los elementos. Los índices comienzan desde 0.

Enumera cinco operadores abreviados de asignación en JavaScript y describe lo que hacen.

+= (Suma y asigna):
Suma el valor a la derecha al valor de la variable y luego asigna el resultado a la variable.
Ejemplo: x += 5; es equivalente a x = x + 5;
-= (Resta y asigna):
Resta el valor a la derecha del valor de la variable y luego asigna el resultado a la variable.
Ejemplo: x -= 3; es equivalente a x = x - 3;
*= (Multiplica y asigna):
Multiplica el valor a la derecha con el valor de la variable y luego asigna el resultado a la variable.
Ejemplo: x *= 2; es equivalente a x = x * 2;
/= (Divide y asigna):
Divide el valor de la variable por el valor a la derecha y luego asigna el resultado a la variable.
Ejemplo: x /= 4; es equivalente a x = x / 4;
%= (Módulo y asigna):
Calcula el resto de la división de la variable por el valor a la derecha y luego asigna el resultado a la variable.
Ejemplo: x %= 2; es equivalente a x = x % 2;

Lee el código a continuación, evalúa la última expresión y explica cuál sería el resultado y por qué.

let a = 10;
let b = 'dog';
let c = false;

// evalúa esto
(a + c) + b;

Resultado: "10dog"

Primero, (a + c) se evalúa. Aquí, a es 10 (un número) y c es false (un booleano). En JavaScript, false se convierte en 0 cuando se usa en una operación aritmética.
Así que 10 + false se convierte en 10 + 0, lo que da como resultado 10.
Luego, 10 (un número) se concatena con b, que es "dog" (una cadena de texto). En JavaScript, cuando un número se concatena con una cadena de texto, el número se convierte en una cadena de texto.
Por lo tanto, el resultado es "10dog".

Describe un ejemplo cotidiano de por qué una declaración condicional se debería usar en un programa en JavaScript.

Ejemplo: Imagina que tienes una aplicación de compras en línea y quieres ofrecer un descuento solo a los clientes que hayan gastado más de $100.

let totalCompra = 120;

if (totalCompra > 100) {
  console.log("Aplica un descuento del 10%");
} else {
  console.log("No hay descuento disponible");
}

Aquí, la declaración if verifica si el total de la compra es mayor a 100. Si es verdadero, se aplica un descuento; si no, se informa que no hay descuento.

Da un ejemplo de por qué un Bucle es útil en JavaScript.

Ejemplo: Supongamos que quieres imprimir en la consola todos los números del 1 al 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

El bucle for es útil aquí porque permite repetir una operación (imprimir los números) sin tener que escribir múltiples líneas de código. En lugar de escribir console.log(1); console.log(2); … console.log(10);, puedes lograrlo con un solo bucle.




## Cosas de las que quiero saber más