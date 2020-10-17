//const { BrowserWindow } = require('electron')

var db = new PouchDB('http://localhost:5984/db_test');
var username_db, password_db;
var username, password;

db.get('ce0b52eab6e4517fc4ccc9b73c001ac3').then(function (doc){
    console.log (doc)
    username_db = doc.username;
    password_db = doc.password;
});

function login(){

    
    username = document.getElementById("username").value
    password = document.getElementById("password").value

    console.log(username_db)
    console.log(password_db)

    if ((username == username_db) && (password == password_db)){
        
        //const win = new BrowserWindow({ width: 800, height: 600, webPreferences: {
        //    nodeIntegration: true,
        //  }})
        //win.loadURL(`file://${__dirname}/page/page.html`)

        document.getElementById("check").value = "Correct ID/Password"

    } else if ((username == username_db) && (password != password_db)){
        document.getElementById("check").value = "Incorrect Password"
    } else if ((username != username_db) && (password == password_db)){
        document.getElementById("check").value = "Incorrect ID"
    } else {
        document.getElementById("check").value = "Incorrect ID/Password"
    }
}


