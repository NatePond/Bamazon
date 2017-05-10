var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Bamazondb"
});

function bamazonify(){
inquirer.prompt([{
    name: "position",
    type: "input",
    message: "What is the Item ID?",
  },
  {
    name: "Quantity",
    type: "input",
    message: "How Many?",
  }]
  ).then(function(answer) {

    var query = "SELECT position, stock_quantity FROM stock WHERE ?";
    connection.query(query, { position: answer.position }, function(err, res) {
console.log(res.position) 
})
});
};


bamazonify();