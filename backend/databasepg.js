const{Client}=require('pg') 

// Les paramètres de la connexion
const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"root",
    database:"NewDB"
})


//établir la connexion
client.connect();

 // la requette pour recupérer les données
client.query(`Select * from utilisateurs`,(err,res)=>{
if(!err){
    console.log(res.rows);
}else{
    console.log(err.message);
}

client.end();



}
)