const DOC={
    nombre:`Frank`,
    apellido:`Cipriano`,
    oficio:[`Docente`,`Sastre`,`Programador`],
    activo:true,
    direccion:{
        Departamento:"Quiche",
        Municipio:`Chichicastenango`,
        Canton:`Chicua primero`
    },
    corporacion:null
}

const DOCSTR=JSON.stringify(DOC)
console.log(JSON.stringify(DOC))
console.log(JSON.parse(DOCSTR))