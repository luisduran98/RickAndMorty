const {server, PORT} = require("./server");
const {dbRickAndMorty} =  require("./db/db");

async function main(){
    try{
    await dbRickAndMorty.sync({ force: true });
    console.log("base de datos conectada");
    server.listen(PORT, () => {console.log('estoy en el puerto:' + PORT)});
    }catch(error){
        throw new Error("no se conecto a la base de datos")
    }
}

main();