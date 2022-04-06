function greet() {
    alert("No debiste presionar ese botón");
}

function personalizedGreet() {
    var name = ""
    var year = 0
    var age = 0
    var module = 0

   name = document.getElementById("nameInput").value
   year = document.getElementById("yearInput").value

   console.log(name)
   console.log(age)

   age = 2022 - year

   console.log("Hola " + name + " de " + age + " años, no debiste presionar el botón")

   module = age%2

   if(module == 0){
       console.log("Tu edad es par")
   } else{
       console.log("Tu edad es impar")
   }

   if(age >= 18){
       console.log("puedes entrar")
   }else{
       console.log("no puedes entrar")
   }

   for(var i=0; i<age; i++){
       console.log("🕯" + i)

   }


}