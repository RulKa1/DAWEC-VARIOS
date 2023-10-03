function main() {
  let lenguajeProg = {
    nombre: "Java",
    categoria: "estructurado",
    interpretado: false,
    fechaCreacion: 1970,
    setCategoria: (categoria)=>{ lenguajeProg.categoria =categoria},
    setInterpretado: (interpretado)=>{ lenguajeProg.interpretado =interpretado},
    setNombre: (nombre)=>{ lenguajeProg.nombre =nombre},
    setFechaCreacion: (fechaCreacion)=>{ lenguajeProg.fechaCreacion =fechaCreacion},
    getinfoLenguaje : () => "Nombre del lenguaje " +lenguajeProg.nombre + " Categoria" +lenguajeProg.categoria + " interpretacion" +lenguajeProg.interpretado +" Fecha de creacion"
  };
}
