const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        describe: 'Muestra al tabla en consola',
                        default: false
                    }).option('h',{
                        alias: 'hasta',
                        type: 'number',
                        describe: 'numero con el que termina de multi',
                        default: 10
                    })
                    .check((argv,options) =>{
                        //lo convierte en un objeto
                        if(isNaN(argv.b)){
                            throw ` la base no es un numero`;
                        }

                        if(isNaN(argv.h)){
                            throw `hasta no es un numero`;
                        }

                        return true;
                    })
                    .argv;


module.exports = argv ; // NO ES OBJETO ENTONCES SE MANDA ARGV 
