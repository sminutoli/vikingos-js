# Juegos de inverno

## Entorno para trabajar

- Instalar [node](https://nodejs.org/es/), la versión estable (10.16.13 LTS)
- Instalar [npm](https://www.npmjs.com/), el manejador de versiones de Node: tenés que [crear una cuenta](https://www.npmjs.com/signup) y bajártelo. Para más información leete [este artículo](http://wiki.uqbar.org/wiki/articles/npm-dependencias.html)
- Instalar [Visual Studio Code](https://code.visualstudio.com/)
- Agregarle las siguientes extensions:
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): para detectar errores de javascript
  - [Live Share](): para pairear remoto (y tener acceso al control de tu máquina)
  - [JEST](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest): para correr o debuggear directamente desde Visual Studio Code
  - [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner), para tener menúes de Run y Debug de tests
  - [Autoimport](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)
  - [Git Lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): un cliente (más) para manejarse con git.
- si quieren probar un [Tabnine, autocompleter loco](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode) ahí lo tienen para descargar

## Para ejecutar este ejemplo

1. Tienen que bajarse las dependencias, al igual que con las gemas de Ruby o las dependencias de Maven. Se van al directorio raíz desde donde lo descargaron y ejecutan:

```bash
npm install
```

El `package.json` es lo que determina qué paquetes usa tu proyecto: se descargarán los módulos necesarios en la carpeta `node_modules`.

2. Con el plugin de JEST directamente se posicionan en la suite o en algún test y lo ejecutan, o lo debuggean (tienen que instalar la versión 10.16.3 de Node o similar)

![debugging](images/demoDebugging.gif)

## Archivos de configuración

No tienen que configurar nada, pero está bueno saber que están

- `.eslintrc` ==> es el que define las reglas del Linter
- `.gitignore` ==> para no agregar el directorio `.history`, ni `node_modules`
- `babel.config.js` ==> configuración de Babel para transpilar código que escribieron a una versión más vieja de Javascript soportada por a) navegadores, b) versiones de node anteriores.

El transpiler hace que puedas escribir lambdas como una función que suma 1 a un número: `(numero) => numero + 1` y te lo convierta a código en una versión vieja de javascript que no tiene arrow functions:

![transpiler](https://i0.wp.com/wipdeveloper.com/wp-content/uploads/2017/05/npm-scripts-babel1.gif?resize=733%2C411&ssl=1)

- `.markdownlint.json` ==> no lo necesitan, es solo para configurar las reglas de este README
- `jest.config.json` ==> está vacío, es la configuración de JEST, un framework para testeo unitario (el RSpec de Ruby/ JUnit de Java que conocen)

## Algo sobre Javascript

- Es un lenguaje de programación y también de [scripting](https://en.wikipedia.org/wiki/Scripting_language) (para automatizar tareas, como Bash, Python o Ruby)
- Corre en una VM de Javascript, como... un navegador o bien en node en nuestro caso
- No tiene chequeo estático de tipos (solo dinámico)
- No está basado en clases, sino en prototipos, como [self](http://www.selflanguage.org/), [Ioke](https://en.wikipedia.org/wiki/Ioke_(programming_language)), entre otros. Para más información podés leer [esta página](http://wiki.uqbar.org/wiki/articles/resumen-lenguajes-prototipados.html).

## Enunciado 0.1 de los vikingos

Un torneo consta de 3 postas principales:

- **Pesca**: en esta posta es mejor el competidor que más pescado logre cargar. Sabemos que un vikingo puede cargar un máximo de kilos de pescado equivalente al 50% de su peso + el doble de su barbarosidad. Luego de participar en una posta de pesca los vikingos incrementan 5% de su nivel de hambre.
- **Combate**: se considera mejor el competidor a aquel que posea la mayor barbarosidad. Cuando un vikingo participa de un combate incrementa en 10% su nivel de hambre.
- **Carrera**: dados dos competidores, el mejor para una carrera es aquel que sea más veloz. Al participar de este tipo de posta los vikingos incrementan 1% de hambre por cada km de carrera.

Para este torneo estarán participando los siguientes vikingos:

- **Hipo**: pesa 80kg, alcanza una velocidad de 13 km/h y tiene un nivel de barbarosidad de 10. Puede participar en una posta si su nivel de barbarosidad es >= 10.
- **Astrid**: pesa 130kg, alcanza una velocidad de 10 km/h y tiene un nivel de barbarosidad de 7.
- **Patán**:  pesa 100kg, alcanza una velocidad de 15 km/h y tiene un nivel de barbarosidad de 13.
- **Patapez**: pesa 70kg, alcanza una velocidad de 7 km/h y tiene un nivel de barbarosidad de 1. Es un chico muy inteligente pero poco deportivo. No puede participar en una posta si su hambre supera 50% y le da el doble de hambre que al resto participar de una posta. Por eso, come cada vez que termina de participar en una posta bajando su nivel de hambre en 20%.

1. Postas!

Hacer que varios participantes participen en una posta, para esto hay que ver quienes pueden participar. Cada posta posee ciertos criterios de admisión que dependen del tipo de posta:

- **Pesca**: Puede existir o no un requerimiento de peso mínimo que debe levantar un participante.
- **Combate**: Debe tener al menos un grado de barbaridad mínimo.
- **Carrera**: No tiene requerimientos.

## Resolviendo el punto 1

Nos concentraremos primero en el punto 1: hacer que los vikingos participen en una posta. Esto depende principalmente de la posta, polimorfismo mediante, comenzamos pensando en nuestro primer test, necesitamos

- como precondiciones: una posta carrera, y un vikingo poco fuerte
- como acciones: el vikingo poco fuerte quiere participar de la carrera, que no tiene restricciones
- como condiciones a cumplir: debe poder

```js
describe('Postas Test', () => {
  test('cualquier vikingo puede participar de una carrera', () => {
    expect(carrera.puedeParticipar(vikingoPocoFuerte)).toBeTruthy()
  })
})
```

¿Cómo implementamos al vikingo poco fuerte? Como un objeto puro:

```js
const vikingoPocoFuerte = {
  barbarosidad: 0,
  peso: 40
}
```

Y la carrera, como otro objeto:

```js
export const carrera = {
  puedeParticipar: function(participante) { return true }
}
```

Un objeto javascript tiene **slots**:

- en el caso del vikingo poco fuerte, tenemos atributos como la barbarosidad o el peso
- en el caso de la carrera, vemos que un slot también puede referenciar a una función, es el equivalente al método que nosotros conocemos. No, no son exactamente iguales pero se parecen bastante y a los fines prácticos los vamos a tratar en forma similar.

En javascript tenemos varios formatos para definir funciones:

```js
const laVerdad = (parametro) => true            // arrow functions
const laVerdad = (parametro) => { return true } // arrow functions que permiten acciones
function laVerdad(parametro) { return true }    // formato de función
```

Invocamos a una función a través de los paréntesis:

```js
laVerdad(1) // ==> devuelve true
laVerdad()  // ==> oia! también devuelve true, porque parametro queda undefined
```

Les recomendamos leer [esta página](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/) para sacarse las dudas cada vez que vuelvan sobre ésto (y van a volver, créannos).

Este test que acabamos de definir es lo que Martin Fowler llamaría [test solitario](https://martinfowler.com/bliki/UnitTest.html), no necesitamos definir un vikingo posta por el momento, porque solo queremos probar la funcionalidad de nuestra posta de carrera.

## Segunda implementación: posta de combate

Para la posta de combate, tenemos que separar dos clases de equivalencia:

- vikingos que tienen el grado de barbarosidad justo para competir
- vikingos que tienen justo un grado menos de barbarosidad y no pueden participar

Para ello vamos a reutilizar el vikingo fuerte y poco fuerte del test de carrera, y lo vamos a anidar dentro de nuestro tests:

```js
describe('Postas Test', () => {
  let vikingoBarbaro
  let vikingoNoTanBarbaro

  beforeEach(() => {
    vikingoBarbaro = {
      barbarosidad: 10,
      peso: 80
    }
    vikingoNoTanBarbaro = {
      barbarosidad: 9,
      peso: 40
    }
    combate.gradoBarbaridadRequerido = 10
  })
  test('cualquier vikingo puede participar de una carrera', () => {
    expect(carrera.puedeParticipar(vikingoNoTanBarbaro)).toBeTruthy()
  })
  test('un vikingo con nivel de barbarosidad suficiente puede participar de un combate', () => {
    expect(combate.puedeParticipar(vikingoBarbaro)).toBeTruthy()
  })
  test('un vikingo con nivel de barbarosidad insuficiente no puede participar de un combate', () => {
    expect(combate.puedeParticipar(vikingoNoTanBarbaro)).toBeFalsy()
  })
})
```

El `beforeEach` nos permite envolver cosas que queremos hacer antes de llamar a cada test, como inicializar nuevamente los valores de un vikingo o un combate (para que no haya **efecto colateral**, así los tests son independientes y repetibles).

La implementación de combate sigue siendo un objeto con dos slots: el atributo `gradoBarbaridadRequerido` y la función `puedeParticipar`.

```js
export const combate = {
  gradoBarbaridadRequerido: 0,
  puedeParticipar: function (participante) {
    return participante.barbarosidad >= this.gradoBarbaridadRequerido
  }
}
```

Ya tenemos polimorfismo entre objetos... ¿lo notaron?

```js
    expect(carrera.puedeParticipar(vikingoNoTanBarbaro)).toBeTruthy()
    expect(combate.puedeParticipar(vikingoBarbaro)).toBeTruthy()
    expect(combate.puedeParticipar(vikingoNoTanBarbaro)).toBeFalsy()
```

![smile](https://media.giphy.com/media/xSM46ernAUN3y/giphy-downsized.gif)

## Nuestra primera definición de un vikingo

"Hipo: pesa 80kg, alcanza una velocidad de 13 km/h y tiene un nivel de barbarosidad de 10...". Asumimos que hipo puede participar de cualquier posta, era un requerimiento que después cambiamos:

Esto se logra con un objeto `hipo`, que no necesita pertenecer a ninguna clase

```js
export const hipo = {
  barbarosidad: 10,
  velocidad: 13,
  peso: 80,
  nivelDeHambre: 0,
  participaDeUnaPosta: () => true // definimos una función dentro del objeto, se parece a un método
}
```

`hipo` es un objeto que tiene varios **slots**:

- barbarosidad, velocidad, peso y nivelDeHambre, son los atributos, definidos como slots que referencian números
- tenemos un slot más: participaDeUnaPosta, que referencia a una función que va a ser invocada dentro del contexto de hipo. Eso se puede ver como un método, aunque no sea exacto, para no marearnos.

## Enunciado

El enunciado para trabajar post-clase lo podés descargar [en este lugar](https://docs.google.com/document/d/1X6hsA9FuhwxJvQio-JBGHx19cae1dxV9BHN-W5vLX8w/edit#heading=h.k2whxqod4zsw)

