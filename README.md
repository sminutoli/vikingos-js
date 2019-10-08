# Juegos de inverno

## Enunciado

El enunciado lo podés descargar [en este lugar](https://docs.google.com/document/d/1X6hsA9FuhwxJvQio-JBGHx19cae1dxV9BHN-W5vLX8w/edit#heading=h.k2whxqod4zsw)

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
- `.markdownlint.json` ==> no lo necesitan, es solo para configurar las reglas de este README
- `jest.config.json` ==> está vacío, es la configuración de JEST, un framework para testeo unitario (el RSpec de Ruby/ JUnit de Java que conocen)

## Algo sobre Javascript

- Es un lenguaje de programación y también de [scripting](https://en.wikipedia.org/wiki/Scripting_language) (para automatizar tareas, como Bash, Python o Ruby)
- Corre en una VM de Javascript, como... un navegador o bien en node en nuestro caso
- No tiene chequeo estático de tipos (solo dinámico)
- No está basado en clases, sino en prototipos, como [self](http://www.selflanguage.org/), [Ioke](https://en.wikipedia.org/wiki/Ioke_(programming_language)), entre otros. Para más información podés leer [esta página]() TODO: Link a wiki uqbar.

## Nuestra primera definición de un vikingo

