# HTML

La comprensión y uso correcto de los elementos HTML es fundamental para construir sitios web accesibles, bien estructurados y optimizados para motores de búsqueda. En este módulo, estamos aprendiendo no solo a crear sitios web visualmente atractivos, sino también a hacerlo de manera que el contenido sea comprensible tanto para los usuarios como para las máquinas. El uso de elementos semánticos en HTML asegura que el contenido tenga un significado claro, mejorando la accesibilidad, la usabilidad, y el SEO del sitio. Esto se alinea con los objetivos de este módulo, que incluyen el diseño de interfaces de usuario efectivas y la creación de código limpio y mantenible.

## Lecturas

¿Por qué es importante utilizar elementos semánticos en nuestro HTML?

Los elementos semánticos son importantes porque dan significado al contenido del documento HTML. Esto no solo mejora la accesibilidad para personas que utilizan tecnologías de asistencia (como lectores de pantalla), sino que también facilita que los motores de búsqueda comprendan mejor el contenido de la página, lo que puede mejorar el SEO (optimización para motores de búsqueda). Además, el uso de elementos semánticos como article, section, y nav ayuda a mantener un código más claro y organizado, haciendo que sea más fácil de mantener y entender.

¿Cuántos niveles de encabezado existen en HTML?

Existen 6 niveles de encabezado en HTML, que van desde h1 (el más importante) hasta h6 (el menos importante). Los encabezados se utilizan para estructurar el contenido, donde h1 suele representar el título principal o el tema de la página, y los siguientes niveles h2, h3, etc., se utilizan para los subtítulos y secciones internas.

¿Cuáles son algunos de los usos para los elementos sup y sub?

El elemento sup se utiliza para crear texto en superíndice, que es útil en casos como exponentes en matemáticas (por ejemplo, x²) o para anotaciones (e.g., 1ᵉʳ).
El elemento sub se usa para texto en subíndice, como en fórmulas químicas (por ejemplo, H₂O) o en expresiones matemáticas donde el texto necesita estar alineado debajo.

Al utilizar el elemento abbr, qué atributo se debe añadir para proporcionar una ampliación del término?

Al utilizar el elemento abbr, se debe añadir el atributo title para proporcionar la ampliación o significado completo del término abreviado. 

## Aprende CSS

¿De qué formas podemos añadir CSS a nuestro HTML?

Inline: Estilos aplicados directamente en los elementos HTML utilizando el atributo style. Por ejemplo:

<p style="color: blue;">Este es un texto en azul.</p>

Interno: Estilos incluidos dentro de una etiqueta style en la sección head del documento HTML. Por ejemplo:

<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>

Externo: Estilos definidos en un archivo separado con extensión .css, que se enlaza al documento HTML con la etiqueta link en el head. Por ejemplo:

<head>
  <link rel="stylesheet" href="styles.css">
</head>

¿Por qué deberíamos evitar utilizar estilos inline?

Los estilos inline deberían evitarse porque mezclan la estructura HTML con la presentación, lo que dificulta la mantenibilidad del código. Además, los estilos inline no permiten reutilizar el código CSS en múltiples elementos, lo que puede llevar a redundancia y aumentar la complejidad al intentar hacer cambios o actualizaciones globales en el diseño del sitio.

Revisa el código a continuación y responde a las siguientes preguntas:

h2 {
  color: black;
  padding: 5px;
}


¿Qué representa el selector?

El selector h2 selecciona todos los elementos h2 en el documento HTML para aplicarles los estilos definidos.

¿Qué componentes son declaraciones CSS?

Las declaraciones CSS están contenidas dentro de las llaves {} y son las líneas que definen los estilos a aplicar. En este caso, las declaraciones son:

color: black;
padding: 5px;

¿Qué componentes se consideran propiedades?

Las propiedades en CSS son las que definen los aspectos específicos del estilo que se está aplicando. En este ejemplo, las propiedades son color y padding.

## Aprende JS

¿Qué tipo de dato es una secuencia de texto entre comillas simples?

Una secuencia de texto entre comillas simples en JavaScript es un string (cadena de texto). Los strings se utilizan para representar texto y se pueden delimitar tanto por comillas simples (' ') como por comillas dobles (" ").

Enumera 4 tipos de operadores en JavaScript.

Operadores Aritméticos: Usados para realizar cálculos matemáticos.
Ejemplos: +, -, *, /, %
Operadores de Asignación: Usados para asignar valores a variables.
Ejemplos: =, +=, -=, *=, /=
Operadores de Comparación: Usados para comparar valores.
Ejemplos: ==, ===, !=, !==, >, <
Operadores Lógicos: Usados para combinar condiciones lógicas.
Ejemplos: && (AND), || (OR), ! (NOT)

Describe un problema práctico que puedes resolver con una función.

Problema: Calcular el área de un círculo.
Solución con una Función:
Una función puede recibir el radio de un círculo como entrada, calcular el área utilizando la fórmula π * radio^2 y devolver el resultado. Esto evita tener que repetir el cálculo cada vez que necesitemos determinar el área de un círculo.

function calcularAreaCirculo(radio) {
  const area = Math.PI * radio * radio;
  return area;
}

let radio = 5;
let area = calcularAreaCirculo(radio);
console.log('El área del círculo es:', area);

Si una declaración if comprueba un __ y si resulta ___, entonces el código se ejecutará.

Si una declaración if comprueba una condición y si resulta verdadera, entonces el código se ejecutará.

if (x > 10) {
  console.log("x es mayor que 10");
}

Aquí, la condición es x > 10. Si es verdadera, se ejecuta el console.log.

¿Cuál es el uso del else if?

El else if se usa para especificar una nueva condición que se evaluará si la condición anterior en un if o else if anterior es falsa. Esto permite manejar múltiples condiciones de manera secuencial.

Enumera 3 tipos de operadores de comparación.

Igualdad (==): Compara si dos valores son iguales (sin considerar el tipo).
Ejemplo: 5 == '5' es true.
Igualdad estricta (===): Compara si dos valores son iguales y del mismo tipo.
Ejemplo: 5 === '5' es false.
Mayor que (>): Compara si un valor es mayor que otro.
Ejemplo: 10 > 5 es true.

¿Cuál es la diferencia entre los operadores lógicos && y ||?

&& (AND lógico): El operador && evalúa como verdadero solo si ambas condiciones son verdaderas. Si cualquiera de las condiciones es falsa, el resultado es falso.

let a = 5;
let b = 10;
if (a > 0 && b > 0) {
  console.log("Ambos números son positivos");
}
este código solo se ejecuta si tanto a > 0 como b > 0 son verdaderos.

|| (OR lógico): El operador || evalúa como verdadero si al menos una de las condiciones es verdadera. Si ambas son falsas, entonces el resultado es falso.

let a = -5;
let b = 10;
if (a > 0 || b > 0) {
  console.log("Al menos uno de los números es positivo");
}
Este código se ejecuta si a > 0 o b > 0 es verdadero.

## Cosas de las que quiero saber más