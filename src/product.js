var cart = [];
      function debug() {
        var ID = document.getElementById("id").value;
        var Name = document.getElementById("name").value;
        var Salary = document.getElementById("salary").value;

//  display the empolyee details using class and object

if (ID == "" || Name == "" || Salary == "") {
  document.getElementById("error").innerHTML =
    "All fields must be filled.";
}
        if(Salary<=0)
              {
                 alert("salary is equal to zero or less than zero");
                 debugger;
              }
       else if(Salary<30000){
         "use strict";
         Salary = 30000;
        } 
        var Details = {
          Empid: `${ID}`,
          Empname: `${Name}`,
          Empsalary: `${Salary}`,
        };
        cart.push(Details);
        this.JSON.stringify(cart)

// console.log("cart");
        var details;
   details = () => {
  details = val => "empsalary " + ((Salary * 15 )/100) ;
  details = val => "name " + Name ;
  document.getElementById("demo").innerHTML = details + val;
};

// display

      let myFunction = (Salary) => ((Salary * 15)/100);
      document.getElementById("demo1").innerHTML = myFunction(Salary);
        Display();
      }

      function Display() {
        html_header = `<table><tr><th>ID</th><th>Name</th><th>Basic Salary</th><th>Updated Salary</th></tr>`;
        html_footer = `<tr><th></th><th></th><th></th><tr></table>`;
        var row = "";
        row += `<tr><td>${id}</td><td>${name}</td><td>${salary}</td><td></td></tr>`;

        try {  
          cart.forEach((element) => {
            if (element.Empsalary > 0) {
              var updatedSal = element.Empsalary * 1.1;
              
              html_header += `<tr>
        <td>${element.Empid}</td>
        <td>${element.Empname}</td>
        <td>${element.Empsalary}</td>
        <td>${updatedSal}</td>
        </tr>`; }
          });
          document.getElementById("table1").innerHTML = html_header + html_footer;
        } catch (Catcherror) {
          // alert("There is some error");
        }
      }


      class Empolyee {
        constructor(id, name, salary) {
          this.id= id;
          this.name = name;
          this.salary = salary;
        }
        biodata(){
          document.write(` ${this.id}  ${this.name}  ${this.salary}`);
        }
      }
      let empolyee = new Empolyee(1, "john", 8000);
      empolyee.biodata();
    
      // display the empolyee details using json array
    
      const emp = '{"id":1,"name":"John", "salary":8000}'
    const obj = JSON.parse(emp);
    document.getElementById("demo").innerHTML = obj.id + " "+ obj.name + " " + obj.salary;
 