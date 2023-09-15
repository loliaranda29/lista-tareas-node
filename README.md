¿Qué sucedió al usar async y await?
Al usar async y await, me di cuenta de que las funciones asincrónicas se vuelven más fáciles de entender y leer. El código se ejecuta de manera secuencial, lo que facilita mucho el manejo de las promesas. Cuando utilizo await, el flujo del programa se detiene hasta que la promesa se resuelve o rechaza. Esto hace que mi código se parezca más a la programación síncrona, lo que mejora la claridad y legibilidad.

¿Qué sucedió al usar el método then()?
Al usar el método .then(), noté que estoy utilizando un enfoque más tradicional para manejar las promesas. Cada promesa se encadena con .then() para especificar cómo manejar su resolución o rechazo. Esto a veces puede hacer que mi código sea más largo y complicado, especialmente cuando tengo varias promesas encadenadas.

¿Qué diferencias encontraste entre async, await y el método then()?
Las principales diferencias que encontré entre async/await y el método .then() son:

Legibilidad: async/await hace que mi código sea más legible y fácil de entender, ya que se parece mucho a la programación síncrona. En cambio, el método .then() puede hacer que el código sea más complicado y difícil de seguir debido a la anidación.

Manejo de errores: Con async/await, puedo utilizar un bloque try/catch para manejar errores de manera efectiva y clara. Por otro lado, con el método .then(), a menudo tengo que usar .catch() al final de la cadena de promesas para manejar errores.

Secuencia de ejecución: async/await garantiza que mi código se ejecute de manera secuencial, lo que es intuitivo y fácil de seguir. Con el método .then(), la secuencia de ejecución puede ser más difícil de entender debido a la anidación de .then().

En resumen, prefiero async/await cuando quiero que mi código sea más limpio y legible. El método .then() puede ser útil en situaciones donde necesito un mayor control sobre la secuencia de ejecución o cuando trabajo con código existente que utiliza este enfoque.