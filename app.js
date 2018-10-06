$(document).ready(function(){
  
    var imagenPersona =$("#imagenpersona");// guardamos la imagenpersona
    var sombreroPersona = $("#sombreropersona"); //guardamos el sombrero

    //JQUERY UI
    //Las funciones siguentes son propias de jQuery ui y funcionan con su script propio
    //asi que guarda los script jquery-ui.min.js y jquery-ui.min.css

    sombreroPersona.draggable(); //podemos tomar el elemento y moverlo a cualquier direccion
    imagenPersona.droppable({  //aqui determinamos sobre que elemento caera nuestro objeto y con la propiedad drop colocamos una funcion que nos dira si el objeto esta puesto o no
      drop: function( event, ui ) {
                $( this )
                    $("#txtCoordenadas").append( "<p>Persona con sombrero</p>" );
                    /*aparecera un 'persona con sombrero' cada vez que coloques el sombrero en la imagen*/
                    console.log("persona con sombrero");
                    
            }
    })
})