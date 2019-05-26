# Dots and Boxes

Un juego simple implementado en react usando redux, sagas y styled-components.

Pruébalo [aquí](https://SebastianHGonzalez.github.io/ReactDotsAndBoxes)

## Table of Contents

- [Motivación](#Motivación)
- [Reglas de Juego](#Reglas)
- [Desarrollo](#Desarrollo)

## Motivación

Hecho a modo de ejercicio para usar sagas para mantener estado de procesos, y razonar sobre la optimización de reducers y el rendimiento del proceso de dibujado.

## Reglas de Juego

- El jugador con mas celdas coloreadas gana.
- Solo se puede colorear una arista por turno.
- Para colorear una celda debes rodearla.
- Al rodear una celda se obtiene un turno extra.

## Desarrollo

### Instalar Dependencias

``` bash
npm install
```

### Ejecutar Servidor de Desarrollo

``` bash
npm start
```

### Desplegar a GH Pages

``` bash
npm run deploy
```