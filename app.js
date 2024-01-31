let secretNumber = 0;
let counter=1;
let listaNumerosSorteados=[];
let maxNumber=10;



initialCondition();
console.log(secretNumber);

// Generate the secret number 
function generateSecretNumber() {

      let generatedNumber= Math.floor(Math.random()*maxNumber)+1;
      //si el numero generado no está incluido en la lista

      
       
      if(listaNumerosSorteados.length == maxNumber){
          
            assignTextElement('p','Ya se sortearon todos los números posibles');
            
      }
      else 
      {
            if(listaNumerosSorteados.includes(generatedNumber)){
                  return generateSecretNumber();
             }
             else {
       
                   listaNumerosSorteados.push(generatedNumber);
                   return generatedNumber;
             }
      }

     
}

//assign the element and text to a variable to modify its value 
function assignTextElement(elemento , texto){
      let elementHTML = document.querySelector(elemento);
      elementHTML.innerHTML = texto;
}

function cleanElement() {
      
      document.querySelector('#userValue').value = '';
      
}

// verify user intent
function checkValue() {
      let userNumber= parseInt(document.getElementById('userValue').value);
      console.log(userNumber);

      if (userNumber === secretNumber) {
            assignTextElement('p',`acertaste el número en ${counter} ${(counter == 1) ? 'vez' : 'veces'}`);
            document.querySelector('#reiniciar').removeAttribute('disabled');
      }
      else
      {
           // if the user did not get it right
            if (userNumber > secretNumber){
                  assignTextElement('p', 'El número secreto es menor');
            } else{
                  assignTextElement('p', 'El número secreto es mayor')
            }
            
            
            counter++;
            cleanElement();
      }
}

function initialCondition(){
      assignTextElement('h1','Juego del número secreto');
      assignTextElement('p',`Escoge un número del 1 al ${maxNumber}`);
      secretNumber = generateSecretNumber();
      counter = 1;
}

function restartGame(){
      //limpiar caja
      //limpiar inicio
      //generar el núnmero aleatorio 
      // deshabilitar el botón de nuevo juego
      //inicializar el número de intentos
      cleanElement();
      initialCondition();                                  // se le añade atributo y valor 
      document.getElementById('reiniciar').setAttribute('disabled', true);
      console.log(listaNumerosSorteados);
}






