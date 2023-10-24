// Definición del objeto lenguajeProg
let lenguajeProg = {
    nombre: "Java",
    categoria: "OO",
    interpretado: false,
    fechaCreacion: 1980,

    // Método para establecer la categoría del lenguaje
    setCategoria: function(categoria) {
        this.categoria = categoria;
    },

    // Método para establecer si el lenguaje es interpretado o no
    setInterpretado: function(interpretado) {
        this.interpretado = interpretado;
    },

    // Método para establecer el nombre del lenguaje
    setNombre: function(nombre) {
        this.nombre = nombre;
    },

    // Método para establecer la fecha de creación del lenguaje
    setFechaCreacion: function(fecha) {
        this.fechaCreacion = fecha;
    },

    // Método para obtener información del lenguaje
    getInfoLenguaje: function() {
        return `Nombre: ${this.nombre}\nCategoría: ${this.categoria}\nInterpretado: ${this.interpretado}\nAño de Creación: ${this.fechaCreacion}`;
    }
};

// Uso de los métodos
lenguajeProg.setCategoria("orientado a objetos y estructurado");
lenguajeProg.setInterpretado(true);
lenguajeProg.setNombre("Python");
lenguajeProg.setFechaCreacion(1991);

// Obtener información del lenguaje
let infoLenguaje = lenguajeProg.getInfoLenguaje();
console.log(infoLenguaje);
