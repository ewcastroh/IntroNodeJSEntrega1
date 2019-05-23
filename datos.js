const fs = require('fs');

let cursos = [
  {
    id: 1,
    nombre: 'NodeJS',
    duracion: 40,
    valor: 0
  },
  {
    id: 2,
    nombre: 'Excel para Finanzas',
    duracion: 32,
    valor: 355000
  },
  {
    id: 3,
    nombre: 'Inglés Nivel 1',
    duracion: 20,
    valor: 410000
  },
  {
    id: 4,
    nombre: 'Interpretación de pruebas genéticas',
    duracion: 20,
    valor: 295000
  },
  {
    id: 5,
    nombre: 'Iniciación deportiva',
    duracion: 20,
    valor: 135000
  },
];

let estudiante = {
  nombre: 'Eimer',
  cedula: '98876'
};

const opciones = {
  id: {
    required: true,
    alias: 'i'
  },
  nombre: {
    required: true,
    alias: 'n'
  },
  cedula: {
    required: true,
    alias: 'x'
  }
};

let obtenerCursos = () => {
  if (cursos.length > 0) {
    console.log('Se tienen los siguientes cursos ofertados:');
    for (var i = 0; i <= cursos.length - 1; i++) {
      let curso = cursos[i];
      setTimeout(() => {
        let infoCurso = `El curso con id=${curso.id} se llama ${curso.nombre}, tiene una duración de ${curso.duracion} horas y un valor de ${curso.valor}.`;
        console.log(infoCurso);
      }, (2000 * (i + 1)));
    }
  } else {
    console.log('Actualmente no se tienen cursos ofertados.\n');
  }
}

const argv = require('yargs')
  .command('inscribir', 'Inscribirme en un curso', opciones)
  .argv;

let crearArchivo = () => {  
  let estudianteNombre = (argv.n !== null && typeof argv.n !== 'undefined') ? argv.n : argv.nombre;
  let estudianteCedula = (argv.x !== null && typeof argv.x !== 'undefined') ? argv.x : argv.cedula;
  let cursoId = (argv.i !== null && typeof argv.i !== 'undefined') ? argv.i : argv.id;
  let curso = cursos.find(cursoIns => cursoIns.id == cursoId);
  if (curso !== null && typeof curso !== 'undefined') {
    let texto = 'El estudiante ' + estudianteNombre + '\n';
    texto += 'Con cedula ' + estudianteCedula + '\n';
    texto += 'Se ha matriculado en el curso llamado ';
    texto += curso.nombre + ' con un id ' + curso.id + ' que tiene una duración de ' + curso.duracion + ' y un valor de ' + curso.valor + '.'
    fs.writeFile('matricula.txt', texto, (err) => {
      if (err) throw (err);
      console.log('Se ha creado el archivo.');
    });
  } else {
    console.log('No ha ingresado un ID que corresponde a ningún curso.');
    obtenerCursos();
  }
}

module.exports = {
    cursos,
    estudiante,
    opciones,
    obtenerCursos,
    crearArchivo
}