# Welcome to CHALLENGE BOOTCAMP HORRIBLE V1 2022 EDITION!

Lean las consignas mas abajo y resuelvan dentro del cuerpo de la función (reemplazando el `// TODO` )
Para saber si la funcion está bien, corran `npm run test` y si los tests pasan tonce significa que su funcion está nashe

## Reglas

1. Desde que les doy acceso al repo empieza a contar el tiempo para todos en simultáneo.
2. Tienen que modificar únicamente el archivo `index.js`
3. No agregar ni quitar parametros a las funciones
4. No modificar los nombres de las funciones ni los exports
5. Pueden crear funciones adicionales para ayudarse (el pedo mepa igual)

## Consignas

### Funcion `groupBy`

Esta funcion recibe 3 parametros, y tiene la siguiente forma:
`groupBy(arr: Object[], param: String, defaultKey: String)`
recibo un array `arr` de objetos, sea cual sea. Una key que pertenezca a los objetos `param` y una key default `defaultKey` a la cual enviar los elementos si no poseen dicho param.
La función debe **devolver un objeto que tenga como keys los valores que toma la variable especificada en los distintos objetos con dichos objetos agrupados bajo su correspondiente valor.**

**Ejemplo:**
Para la entrada:

```
// arr:
[{
  id: "1",
  campo: "a",
},{
  id: "2",
  campo: "b",
},{
  id: "3",
  campo: "b",
}]

// param: "campo"
// defaultKey: "default"
```

La salida esperada sería:

```
{
	a: [
	 {
	   id: "1",
	   campo: "a",
	 }
	],
	b: [
	 {
	   id: "2",
	   campo: "b",
	 },{
	   id: "3",
	   campo: "b",
	 },
	],
}
```

Por otro lado, si hay algún objeto que no tenga dicho campo, este se agrupa bajo la key default
Entonces, para esta entrada:

```
// arr:
[{
  id: "1",
  campo: "a",
},{
  id: "2",
  campo: "b",
},{
  id: "3",
  otroCampo: "b",
}]

// param: "campo"
// defaultKey: "default"
```

La salida esperada sería:

```
{
	a: [
	 {
	   id: "1",
	   campo: "a",
	 }
	],
	b: [
	 {
	   id: "2",
	   campo: "b",
	 }
	],
	default: [
	  {
		id: "3",
		otroCampo: "b",
	  }
	]
}
```

### Funcion `sortByDate`

Esta funcion recibe 2 parametros, y tiene la siguiente forma:
`groupBy(arr: Object[], dateField: String)`
Recibe un arr de objetos `arr` y un string `dateField` que haga referencia a una key de los objetos de este arr, la cual **debe contener un dato parseable a date (string, number o Date)**. Si **alguno** de los objetos contenidos al array no posee este campo o su valor no es parseable como se especificó anteriormente, la función debe throwear un error que diga `The specified field is not present in every item` si se trata de que el campo no está presente, y `The specified field does not contain a date parseable value in every item` si no es parseable. En el caso de que este dato exista y sea parseable, la funcion **debe returnear el mismo array ordenado, en base a ese dato, pero preservar el array original sin cambios**.

**Ejemplo:**
Para la entrada

```
// arr:
[
  {
    field_x: "Wed Sep 28 2022",
  },
  {
    field_x: new Date("Wed Sep 20 2022"),
  },
  {
    field_x: 50,
  },
]

// dateField: "field_x"
```

La salida deberia ser:

```
[
  {
    field_x: 50,
  },
  {
    field_x: "Wed Sep 28 2022",
  },
  {
    field_x: new Date("Wed Sep 20 2022"),
  },
];
```

**Ejemplo 2**
Para la entrada

```
[
  {
    field_x: "Wed Sep 28 2022",
  },
  {
    field_x: true,
  },
]
```

debe throwear un error con el texto `The specified field does not contain a date parseable value in every item`

**Ejemplo 3**
Para la entrada

```
[
  {
    field_x: "Wed Sep 28 2022",
  },
  {
    notTheDateField: 50,
  },
]
```

debe throwear un error con el texto `The specified field is not present in every item`
