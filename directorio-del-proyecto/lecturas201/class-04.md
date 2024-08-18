# Enlaces en HTML, Funciones en JS, e Introducción al CSS: Layout

El tema de HTML (Hypertext Markup Language) es fundamental porque es el lenguaje básico de marcado utilizado para estructurar y presentar contenido en la web. Cada página web que visitas está construida con HTML, lo que hace que sea crucial para cualquier persona interesada en el desarrollo web.

Razones de por qué es importante aprender HTML:

1. Fundamento del Desarrollo Web: HTML es el punto de partida para crear cualquier sitio web. Es el lenguaje que define la estructura de una página web, permitiendo que otros lenguajes como CSS y JavaScript agreguen estilo y funcionalidad.

2. Accesibilidad y SEO: Un buen uso de HTML mejora la accesibilidad de tu sitio web para personas con discapacidades y también optimiza cómo los motores de búsqueda indexan y comprenden tu contenido.

3. Control sobre el Contenido: Aprender HTML te da un control total sobre la presentación del contenido, permitiéndote personalizar y mejorar la experiencia del usuario.

4. Interoperabilidad: HTML es un estándar abierto, lo que significa que el contenido creado con él se puede ver en cualquier navegador y dispositivo, garantizando que tu sitio sea accesible a una audiencia amplia.

5. Base para Otros Lenguajes: Tener un sólido entendimiento de HTML facilita el aprendizaje de otros lenguajes y tecnologías web, como CSS y JavaScript, que son esenciales para el desarrollo web completo.

## Crea Hipervínculos

Crear hipervínculos es una parte esencial del desarrollo web porque son los elementos que conectan las diferentes páginas y recursos en la web, formando la estructura de la World Wide Web. Aquí te explico por qué es importante aprender sobre la creación de hipervínculos en HTML:

1. Navegación entre Páginas: Los hipervínculos permiten a los usuarios navegar entre las distintas páginas de un sitio web o incluso entre diferentes sitios web. Son esenciales para la usabilidad y la experiencia del usuario, ya que facilitan el acceso a información relacionada o adicional.

2. Interconexión de Contenidos: Los hipervínculos crean una red de conexiones entre diferentes contenidos, permitiendo a los usuarios explorar más allá del contenido inicial. Esto es crucial para mantener a los visitantes en tu sitio y guiar su recorrido por la información.

3. SEO y Clasificación en Motores de Búsqueda: Los motores de búsqueda utilizan hipervínculos para rastrear e indexar páginas web. Tener enlaces bien estructurados y relevantes puede mejorar la visibilidad de tu sitio en los resultados de búsqueda.

4. Referencias y Citaciones: En la web, los hipervínculos se utilizan para citar fuentes y proporcionar referencias. Esto es vital para la credibilidad de tu contenido y para ofrecer a los usuarios recursos adicionales.

5. Interacción con Otros Elementos Web: Los hipervínculos pueden interactuar con otros elementos del sitio, como imágenes, botones y menús, para crear una experiencia de usuario más dinámica y funcional.

### Preguntas

1. Para crear un enlace básico, ¿en qué elemento colocamos el texto u otro contenido?

Para crear un enlace básico, utilizamos el elemento a. El contenido que queremos enlazar, como texto u otros elementos (imágenes, por ejemplo), se coloca dentro de las etiquetas de apertura y cierre de a. Por ejemplo:
(a href="https://www.ejemplo.com")Visita nuestro sitio(/a)


2. ¿Qué información contiene el atributo href?

El atributo href (que significa "hypertext reference") dentro del elemento a contiene la URL o dirección a la que llevará el enlace cuando se haga clic en él. Puede ser una URL absoluta (que apunta a un sitio externo) o una URL relativa (que apunta a una página dentro del mismo sitio web).

3. ¿Cuáles son algunas de las formas en las que podemos asegurarnos de que los enlaces a nuestras páginas sean accesibles a todos los lectores?

Para asegurarnos de que los enlaces en nuestras páginas web sean accesibles para todos los lectores, incluyendo aquellos con discapacidades, podemos seguir estas prácticas:

Texto Enlace Descriptivo: Utiliza texto enlace que describa claramente a dónde llevará el enlace. Evita usar términos genéricos como "haz clic aquí". En su lugar, utiliza descripciones específicas como "Leer más sobre HTML".

Uso Correcto de ARIA: Cuando sea necesario, utiliza atributos ARIA (Accessible Rich Internet Applications) para mejorar la accesibilidad del enlace para lectores de pantalla. Por ejemplo, si un enlace abre una nueva ventana, usa aria-label para informarlo al usuario.

Tamaño de la Zona de Clic: Asegúrate de que el área clicable del enlace sea lo suficientemente grande y no esté demasiado cerca de otros enlaces, para que sea fácil de usar tanto en pantallas táctiles como con ratón.

Contraste Adecuado: Asegúrate de que el texto del enlace tenga un buen contraste con el fondo para que sea fácil de leer para personas con deficiencias visuales.

Subrayado de Enlaces: Es buena práctica subrayar los enlaces o usar algún otro estilo distintivo para que los usuarios puedan identificarlos fácilmente como enlaces. Esto es especialmente importante para usuarios daltónicos o con otras discapacidades visuales.


## CSS Layout

El tema del "Flujo Normal" en CSS es crucial porque es la base sobre la que se organiza y estructura el contenido en una página web antes de aplicar cualquier estilo o disposición personalizada. Comprender el flujo normal es fundamental para controlar cómo se presentan los elementos en una página. A continuación, te explico por qué es importante:

1. Base para el Diseño de Páginas Web: El flujo normal determina la disposición predeterminada de los elementos HTML en una página. Los elementos en bloque, como párrafos y encabezados, se apilan uno debajo del otro, mientras que los elementos en línea, como enlaces y spans, se colocan uno al lado del otro dentro de un contenedor. Entender este comportamiento básico es esencial para luego poder modificarlo de manera efectiva.

2. Control sobre la Disposición del Contenido: Al conocer cómo funciona el flujo normal, puedes decidir cuándo y cómo quieres alterarlo utilizando técnicas de CSS como el modelo de caja, flexbox, o grid. Esto te permite crear diseños más complejos y personalizados, pero siempre partiendo de una comprensión sólida de cómo los elementos se comportan de forma predeterminada.

3. Depuración de Problemas de Diseño: Muchos problemas de diseño en CSS pueden rastrearse hasta un malentendido del flujo normal. Si sabes cómo se supone que los elementos deben comportarse en su estado natural, es más fácil identificar y corregir problemas cuando los estilos no se aplican como esperas.

4. Accesibilidad y Consistencia: Al respetar el flujo normal siempre que sea posible, garantizas una disposición de contenido que es naturalmente accesible y consistente entre diferentes dispositivos y tamaños de pantalla. Esto es especialmente importante para garantizar que los usuarios con discapacidades puedan navegar por tu sitio de manera efectiva.

5. Eficiencia en el Uso de CSS: Comprender el flujo normal te permite escribir CSS más eficiente. En lugar de aplicar reglas y modificaciones innecesarias, puedes aprovechar cómo los navegadores ya organizan los elementos para simplificar tus estilos y reducir el código CSS.

### Preguntas

1. ¿A qué se refiere con “normal flow”?

El "normal flow" (flujo normal) en CSS se refiere a la disposición predeterminada de los elementos HTML en una página web antes de que se apliquen estilos CSS especiales como float, position, o flex. En el flujo normal, los elementos en bloque (block-level) se apilan uno encima del otro, ocupando todo el ancho disponible de su contenedor, mientras que los elementos en línea (inline) se colocan uno al lado del otro en una línea, dentro del espacio disponible.

2. ¿Cuáles son algunas de las diferencias entre los elementos block-level e inline?

Block-level Elements: Los elementos de nivel de bloque (block-level) como div, p, h1, y section ocupan todo el ancho disponible de su contenedor y comienzan en una nueva línea, empujando cualquier otro contenido hacia abajo. Estos elementos pueden tener propiedades como width, height, margin, y padding aplicadas a ellos.

Inline Elements: Los elementos en línea (inline) como spam, a, strong, y em solo ocupan el ancho que requiere su contenido y no comienzan en una nueva línea. Se alinean uno al lado del otro en la misma línea, y no puedes aplicar width o height directamente sobre ellos (aunque se pueden modificar con display: inline-block).

3. El ___ positioning es la posición por defecto de todos los elementos en html.

La posición por defecto de todos los elementos en HTML es static positioning. Esto significa que los elementos están posicionados según el flujo normal de la página y no se ven afectados por las propiedades top, bottom, left, o right.

4. Nombra algunas ventajas de utilizar absolute positioning en un elemento.

Preciso Control de Posición: absolute positioning te permite colocar un elemento en una posición exacta dentro de su contenedor más cercano que tenga position: relative, absolute, fixed, o sticky.

Saca del Flujo Normal: Un elemento con position: absolute se saca del flujo normal, lo que significa que no afecta la disposición de otros elementos, ni se ve afectado por ellos. Esto es útil cuando necesitas superponer elementos o cuando un elemento debe colocarse en un lugar específico sin alterar el layout circundante.

Flexibilidad en Diseños Complejos: Te permite crear diseños más complejos, como menús desplegables, modales, y tooltips, que necesitan estar en una posición específica sin interferir con otros elementos de la página.

5. ¿Cuál es una diferencia clave entre fixed positioning y absolute positioning?

La diferencia clave entre fixed positioning y absolute positioning es cómo se comportan en relación con el viewport y los contenedores:

Absolute Positioning: Un elemento con position: absolute está posicionado en relación con su contenedor más cercano que no tenga position: static. Si no hay un contenedor padre con una posición relativa, se posicionará en relación con el html o el body.

Fixed Positioning: Un elemento con position: fixed está posicionado en relación con el viewport (la ventana del navegador). Esto significa que permanece en la misma posición en la pantalla incluso cuando se desplaza la página. Es útil para crear barras de navegación fijas, banners, o cualquier elemento que deba permanecer visible todo el tiempo.

## Aprende JS

1. Describe la diferencia entre una declaración de función y una invocación de función.

Declaración de Función: Una declaración de función es cuando defines una función, especificando su nombre, los parámetros que acepta, y el código que se ejecutará cuando la función sea llamada. Es básicamente la creación de la función. Por ejemplo:

function saludar(nombre) {
    console.log("Hola, " + nombre);
}

Invocación de Función: Una invocación de función es cuando realmente usas la función, llamándola para que ejecute el código definido en ella. Esto se hace escribiendo el nombre de la función seguido de paréntesis, y, si es necesario, pasando los argumentos dentro de los paréntesis. Por ejemplo:

saludar("Juan");

2. ¿Cuál es la diferencia entre un parameter y un argument?

Parámetro: Un parámetro es una variable en la declaración de una función. Es un marcador de posición que indica qué tipo de dato se espera que se pase a la función. Por ejemplo, en la función saludar(nombre), nombre es un parámetro. Es un nombre que usas dentro de la función para referirte al valor que será pasado cuando la función sea invocada.

Argumento: Un argumento es el valor real que se pasa a la función cuando se invoca. Es el dato que reemplaza al parámetro en la ejecución de la función. Por ejemplo, en la invocación saludar("Juan"), "Juan" es un argumento. Es el valor que se pasa a la función y que se asigna al parámetro nombre.

## Cosas de las que quiero saber más