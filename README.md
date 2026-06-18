## Patrón Builder - Query builder

 

### Problema a resolver

 El problema es la creación de familias de objetos complejos (computadoras) que comparten propiedades comunes pero varían drásticamente en sus configuraciones y requerimientos. Si se utiliza un constructor monolítico, el desarrollador se ve obligado a lidiar con múltiples parámetros nulos (por ejemplo, enviando null para la tarjeta de video o el RGB al instanciar una computadora de oficina). Además, la lógica de inicialización y las reglas de negocio (como asegurar que una PC Gamer siempre tenga una GPU dedicada o que una de oficina no necesite monitor por defecto) ensucian la clase principal, haciéndola difícil de escalar y mantener.

### Estructura de clases
 

Computer: Es el modelo de datos que contiene todas las partes posibles de la computadora (CPU, RAM, almacenamiento, GPU, periféricos) y proporciona un método (displayInfo()) para imprimir la configuración final.

ComputerBuilder (Interfaz): Define los métodos estandarizados para construir cada una de las partes de la computadora (ej. setCpu, setGpu, etc.).

Builders Concretos (GamingComputerBuilder, OfficeComputerBuilder, PcBuilder): Implementan la interfaz constructora, pero cada uno aplica sus propias reglas. Por ejemplo, el OfficeComputerBuilder ignora las instrucciones de añadir GPU o RGB, mientras que el GamingComputerBuilder asigna componentes de alto rendimiento por defecto si el usuario olvida especificarlos.

Director: Es el orquestador que conoce "recetas" específicas de ensamblaje. Recibe un Builder por inyección de dependencias y define secuencias de construcción predeterminadas, como buildBasicComputer() o buildFullSetup(), permitiendo cambiar entre familias de computadoras en tiempo de ejecución.

### Ejemplo de uso

 
Este proyecto se utiliza para ensamblar dinámicamente diferentes tipos de computadoras (Gamer, Oficina o Personalizadas) utilizando configuraciones preestablecidas mediante un Director, manteniendo el código limpio y extensible.

TypeScript
// Ejemplo de implementación con Director y cambio dinámico de Builders
const gamingBuilder = new GamingComputerBuilder();
const officeBuilder = new OfficeComputerBuilder();

// Instanciamos el orquestador con el builder Gamer
const store = new Director(gamingBuilder);

console.log("Construyendo una computadora de gaming completa:");
const fullGamer = store.buildFullSetup();
fullGamer.displayInfo();

// Cambiamos el builder en tiempo de ejecución para armar un setup de oficina
store.changeBuilder(officeBuilder);

console.log("Construyendo una computadora de oficina básica:");
const basicOffice = store.buildBasicComputer();
basicOffice.displayInfo();
 

### Amauri M. Montejo
