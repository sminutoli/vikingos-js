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

- **Hipo**: pesa 80kg, alcanza una velocidad de 13 km/h y tiene un nivel de barbarosidad de 10.
- **Astrid**: pesa 130kg, alcanza una velocidad de 10 km/h y tiene un nivel de barbarosidad de 7.
- **Patán**:  pesa 100kg, alcanza una velocidad de 15 km/h y tiene un nivel de barbarosidad de 13.
- **Patapez**: pesa 70kg, alcanza una velocidad de 7 km/h y tiene un nivel de barbarosidad de 1. Es un chico muy inteligente pero poco deportivo. No puede participar en una posta si su hambre supera 50% y le da el doble de hambre que al resto participar de una posta. Por eso, come cada vez que termina de participar en una posta bajando su nivel de hambre en 20%.

## Nuestra primera definición: la posta de pesca


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

