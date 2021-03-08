const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/bancoteste", {
    useMongoClient: true
}).then(() => {
    console.log("Conectado!");
}).catch((e) => {
    console.log(`Houve um erro: ${e}`);
});

// Definindo model de usuario

const UserSchema = mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    }
});

//Collection
mongoose.model('users', UserSchema);

const newUser = mongoose.model('users');

new newUser({
    Name: "Jane",
    Email: "jane@doe.com",
    Password: "teste8454"
}).save().then(() =>{
    console.log("Usuário salvo");
}).catch((e) => {
    console.log(`Algo deu errado! Erro: ${e}`);
});