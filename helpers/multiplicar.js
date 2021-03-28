const fs = require('fs');
let colors = require('colors');
const CrearArchivo = async (base,listar=false,hasta=10) => {

    //listar puede ser por default desde aqui o desde el yargs

    try {
        let contador = 0;
        let salida  = '';
        let consola = '';
    // let array    = [];
    while ( contador <= hasta) {
        if (contador == 0) {
            salida += `=============== \n`;
            salida += `tabla del ${base} \n`;
            salida += `=============== \n`;

            consola += ( colors.america(`=============== \n`));
            consola += (`tabla del ${base} \n`);
            consola += ( colors.america(`=============== \n`));
        }
        consola += `${(contador == 0) ? ' ' : ''} ${base} ${colors.red('X')} ${contador}  = ${base * contador}\n `;
        salida  += `${(contador == 0) ? ' ' : ''} ${base} X ${contador}  = ${base * contador}\n `;

        contador++;
    }

    if(listar){
        console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `¡tabla-${base}.txt creado con exito!`;
    }catch(error){
        throw('no se ha podido crear el archivo');
    }


}

module.exports = {
    CrearArchivo,
}