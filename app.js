$(document).ready(function(){
  
    var imagenPersona =$("#imagenpersona");// guardamos la imagenpersona
    var sombreroPersona = "<img id='sombreropersona' src='sombrero.png' alt='' srcset='' width='160' height='160'>" //guardamos el sombrero
    var sombreroPersona2 = "<img id='sombreropersona2' src='hat.png' alt='' srcset='' width='160' height='160'>"
    
    var alternativas = new Array(sombreroPersona,sombreroPersona2);
    var sombreroAzar = Math.floor(Math.random()*2);
    var alternativaAlAzar =alternativas[sombreroAzar];

    $("#alternativas").append(alternativaAlAzar);
    
    //JQUERY UI
    //Las funciones siguentes son propias de jQuery ui y funcionan con su script propio
    //asi que guarda los script jquery-ui.min.js y jquery-ui.min.css

    alternativaAlAzar.draggable(); //podemos tomar el elemento y moverlo a cualquier direccion
    imagenPersona.droppable({  //aqui determinamos sobre que elemento caera nuestro objeto y con la propiedad drop colocamos una funcion que nos dira si el objeto esta puesto o no
      drop: function( event, ui ) {
                $( this )
                    $("#txtCoordenadas").append( "<p>Persona con sombrero</p>" );
                    /*aparecera un 'persona con sombrero' cada vez que coloques el sombrero en la imagen*/
                    console.log("persona con sombrero");
                    
            }
    })
})

