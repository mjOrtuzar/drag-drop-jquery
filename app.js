$(document).ready(function(){
  
    var imagenPersona =$("#imagenpersona");// guardamos la imagenpersona
    var sombreropersona =$("#alternativas"); // guardamos el div alternativas
    var alternativas = new Array(); //creamos un array que contendra las alternativas
    alternativas[0]= "sombrero" // insertamos los objetos dentro del array
    alternativas[1]= "hat"      // indicando su posicion.
    var azar = Math.floor(Math.random()*2);// creamos la variable azar para mostrar las imagenes de manera aleatoria
    var imagenes= alternativas[azar]; // usaremos esta variable imagenes para mostrar la imagen aleatoria
    sombreropersona.append("<img src='./" + imagenes + ".png' width='160' height='160'>")
    //dentro del div 'apendeamos' la variable imagenes dentro de una etiqueta img para mostrar las imagenes
    
    //JQUERY
    //Las funciones siguentes son propias de jQuery ui y funcionan con su script propio
    //asi que guarda los script jquery-ui.min.js y jquery-ui.min.css

    sombreropersona.draggable(); //podemos tomar el elemento y moverlo a cualquier direccion
    imagenPersona.droppable({  //aqui determinamos sobre que elemento caera nuestro objeto y con la propiedad drop colocamos una funcion que nos dira si el objeto esta puesto o no
      drop: function( event, ui ) {
                $( this )
                    $("#txtCoordenadas").append( "<p>Persona con sombrero</p>" );
                    /*aparecera un 'persona con sombrero' cada vez que coloques el sombrero en la imagen*/
                    console.log("persona con sombrero");
                    
            }
    })
})

