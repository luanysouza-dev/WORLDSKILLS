function att01(){
   let numero = Number(prompt("digite um numero:"))

   if(numero == 0 ){
    alert("o numero é igual a 0")
   }
   else{
    
   }

}

function att02(){
    let contador = 0

    for(contador; contador <= 50; contador ++){
        document.write(contador + "<br>")
    }
}


function att03(){
    let contador = 30 
    for(contador; contador >= 0; contador --){
        console.log(contador + "<br>")
    }
}

function att04(){
   let nome = "luany"
   for(let contador = 1 ; contador <= 5; contador ++){
        document.write(nome + "<br>")
    }

}

function att05(){
    //let numero = 1 ;

    //while(numero <=20){
       // document.write(numero + "<br>");
       // numero++;
    //}
    for(let contador = 1; contador <=20 ; contador ++){
        document.write(contador + "<br>")
    }
}

function att06(){
    for(let i = 1 ; i <= 20 ; i = i + 2){
         document.write(i + "<br>")

    }
}


function att07(){
    

    while(true){
        let usuario  = Number(prompt("digite uma numero:"))
        let numero = Math.floor(Math.random() * 10) 
        
        if(numero == usuario){
            alert("ACERTOU!!")
            break
        }
        else{
           alert("NÃO FOI DESSA VEZ, TENTE NOVAMENTE")
        }
    }
}


function att08(){
    for(let i = 1; i <= 50 ; i ++){
       if(i == 30){
           document.write(i)
           break
       }
       else{
          
       }

    }
}

function att09(){
    /*for(let i = 1;  i <= 20 ; i++){
        if(i % 2 == 0){
            document.write(i + "<br>")
        }
         else{
          
       }
    }*/

    let i = 1

    while(i <=20){
        if(i %2 == 0){
          document.write(i + "<br>")
        }
        i++;
    }

}

function att10(){
     for(let i = 1; i <= 700; i ++){
        if(i <=90){
            document.write(i + "<br>")
        }
     }
}

function att11(){
    let total = 0

    for(let i = 1; i <=10; i = i + 1){
       total = i + total
       console.log(total)
      
    } 
    console.log(total)
}


function att12(){
    for(let i = 100; i >= 0; i --){
        if(i %2 == 0){
            document.write(i + "<br>")
        }
    }
}


function att13(){
   
    while(true){
       let num = Number(prompt("digite um numero:"))

        if(num < 0 || num > 10){
          alert("NUMERO VALIDO COM SUCESSO!!")
          break
        }
        else{
              alert("NUMERO INVALIDO , TENTE NOVAMENTE")
        }
    }
}
att13()