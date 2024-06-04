<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/mugan86" target="_blank"><img src="https://img.shields.io/twitter/follow/mugan86.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Adaptar desde el siguiente proyecto

https://github.com/mugan86/book-content-api/tree/master

https://openui.fly.dev/

## Hook estado de conexión

https://gist.github.com/anartzdev/bd8fdb2864c070bb4070f3a14bffbf7f

## Acortador de URLs

Este proyecto es un acortador de URLs que utiliza tecnologías modernas para brindar un servicio eficiente y escalable. Hemos desarrollado esta herramienta utilizando las siguientes tecnologías:

- **NestJS como Framework**: NestJS es un framework de desarrollo de aplicaciones en TypeScript para Node.js. Proporciona una arquitectura escalable y modular que facilita la creación de servicios web sólidos y seguros. En nuestro proyecto, NestJS se encarga de la lógica de negocio y la exposición de la API.

- **MongoDB como Base de Datos**: Utilizamos MongoDB, una base de datos NoSQL, para almacenar y gestionar la información necesaria para nuestro acortador de URLs. Esta elección nos permite almacenar datos de manera flexible y escalable, lo que es esencial para un servicio de acortamiento de URLs.

- **Nanoid para la Generación de Códigos de URL Acortadas**: Para generar códigos únicos y cortos para las URLs, empleamos la biblioteca Nanoid. Esto garantiza que nuestras URLs acortadas sean compactas y seguras, lo que es esencial para una experiencia de usuario eficiente y segura.

Nuestro acortador de URLs es una solución simple y efectiva para convertir URLs largas en enlaces más manejables. Ofrece un alto rendimiento y se beneficia de la escalabilidad inherente de las tecnologías utilizadas.

¡Esperamos que esta herramienta sea útil para tus necesidades de acortamiento de URLs!

## ¿Como podemos trabajar con ello?

Podemos hacer uso de este proyecto siguiendo estas sencillas instrucciones

1. Clonar proyecto:

```bash
git clone https://github.com/anartzdev/url-shortener.git
```

2. Seleccionar la versión de Node con la que se trabaja en este proyecto:

```bash
nvm use
```

3. Instalar las dependencias requeridas

```bash
npm install
```

4. En la raíz añadir la conexión de nuestra Base de datos de MongoDB en el fichero `.env`:

```env
DATABASE=<MONGODB_DATABASE_CONNECTION_STRING>
```

Por ejemplo:

```env
DATABASE=mongodb://localhost:27017/example
```

5. Arrancar la aplicación

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Uso de la API

A continuación os dejo el fichero JSON de las operaciones que se pueden realizar con POSTMAN:

[API URL Shortener](./URL%20Shortener.postman_collection.json)

## Sobre el autor

- Author - [Anartz Mugika Ledo](https://kamilmysliwiec.com)
- Url del proyecto - [https://shorten-up.vercel.app/urls](https://shorten-up.vercel.app/urls)
- Twitter - [@mugan86](https://twitter.com/mugan86)

## Licencia

ShortenUrls con Nest está bajo la licencia [MIT licensed](LICENSE).

## Referencias que he usado de apoyo

* Shortener: https://es.linux-console.net/?p=6523#gsc.tab=0
* Pagination: https://wanago.io/2021/09/13/api-nestjs-pagination-mongodb-mongoose/
