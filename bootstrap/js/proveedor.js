/* proveedor.js */
$(document).ready(function(){
	 $("#proveedor").validate({          
            rules: {
                nombre_proveedor:{
                    required : true,
                    minlength: 2,
                    maxlength: 60 
                },
               nombre_contacto:{
                    required : true,
                    minlength: 2,
                    maxlength: 60 
                },
               tipo_documento:{
                    required  : true,
                },
                numero_documento:{                   
                    required  : true,  
                    minlength : 7,
                    maxlength : 10
                },
                direccion:{
                    required  : true,
                    minlength : 4,
                    maxlength : 200
                },
                codigo_telefono:{
                    required  : true,
                    minlength : 4,
                    maxlength : 4
                }, 
                numero_telefono:{
                    required  : true,
                    minlength : 7,
                    maxlength : 7
                },
<<<<<<< HEAD
                ciudad : {
                   required : true,
                },
                estado : {
                   required : true,
                },                                   
=======
                ciudad:{
                    required  : true,
                    minlength : 4,
                    maxlength : 30
                },                     
>>>>>>> 446942e80d104328d6913c44f1a36546bf726908
            }, 
			messages:{
                    nombre_proveedor:{
                        required  : '<b style="color:red">Debes Ingresar un nombre.</b>', 
                        minlength : '<b style="color:red">Ingresa al menos 2 caracteres.</b>',
                        maxlength : '<b style="color:red">El nombre excede de caracteres.</b>'
                    },
                   nombre_contacto:{
                        required  : '<b style="color:red">Debes Ingresar un nombre.</b>', 
                        minlength : '<b style="color:red">Ingresa al menos 2 caracteres.</b>',
                        maxlength : '<b style="color:red">El nombre excede de caracteres.</b>'
                    },
                   tipo_documento:{
                        required  : '<b style="color:red">Seleccione</b>'
                    }, 
                    numero_documento:{
                        required  : '<b style="color:red">Debes Ingresar un rif o cedula.</b>',
                        minlength : '<b style="color:red">Ingresa al menos 7 digitos.</b>',
                        maxlength : '<b style="color:red">Rif o cedula excede de digitos.</b>'
                    },
                    direccion:{
                        required  : '<b style="color:red">Debes Ingresar una dirección.</b>',
                        minlength : '<b style="color:red">Ingresa al menos 4 caracteres.</b>',
                        maxlength : '<b style="color:red">La dirección excede de caracteres.</b>'
                    },
                    codigo_telefono:{
                        required  : '<b style="color:red">Debes Ingresar el codigo.</b>',
                        minlength : '<b style="color:red">Ingresa al menos 4 digitos.</b>',
                        maxlength : '<b style="color:red">El codigo excede de digitos.</b>'
                    },
                    numero_telefono:{
                        required  : '<b style="color:red">Debes Ingresar un telefono.</b>',
                        minlength : '<b style="color:red">Ingresa al menos 7 digitos.</b>',
                        maxlength : '<b style="color:red">El telefono excede de digitos.</b>'
                    },
                    ciudad:{
<<<<<<< HEAD
                        required  : '<b style="color:red">Selecciona un Estado Para lista la ciudad.</b>',
                    },
                    estado:{
                        required  : '<b style="color:red">Selecciona un Estado.</b>',
                    },                     
=======
                        required  : '<b style="color:red">Debes ingresa una ciudad.</b>',
                        minlength : '<b style="color:red">Ingresa al menos 4 caracteres.</b>',
                        maxlength : '<b style="color:red">El ciudad excede de caracteres.</b>'
                    } 
>>>>>>> 446942e80d104328d6913c44f1a36546bf726908
                },

         	submitHandler: function(form){
            var url = "guardar_proveedor.php";
                  $.ajax({
                   type: "POST",
                   url: url,
                   data: $("#proveedor").serialize(),
                   success: function(data)
                   {
                       $("#respuesta").html(data);

                   }
               });
            return false;
        	}
 
  });
 
    $("#results").load("lista_proveedores.php"); 
    $("#results").on( "click", ".paginacion a", function (e){
    e.preventDefault();
    $(".loading-div").show(); 
    var page = $(this).attr("data-page"); 
    $("#results").load("lista_proveedores.php",{"page":page}, function(){
      $(".loading-div").hide();
     });
    
   });

$("#editar_proveedor").validate({          
            rules: {
                nombre_proveedor:{
                    required : true,
                    minlength: 2,
                    maxlength: 60 
                },
               nombre_contacto:{
                    required : true,
                    minlength: 2,
                    maxlength: 60 
                },
               tipo_documento:{
                    required  : true,
                },
                numero_documento:{
                    required  : true,
                    minlength : 7,
                    maxlength : 10
                },
                direccion:{
                    required  : true,
                    minlength : 4,
                    maxlength : 200
                },
                codigo_telefono:{
                    required  : true,
                    minlength : 4,
                    maxlength : 4
                }, 
                numero_telefono:{
                    required  : true,
                    minlength : 7,
                    maxlength : 7
                },
<<<<<<< HEAD
                ciudad : {
                   required : true,
                },
                estado : {
                   required : true,
                },
                                      
=======
                ciudad:{
                    required  : true,
                    minlength : 4,
                    maxlength : 30
                },                     
>>>>>>> 446942e80d104328d6913c44f1a36546bf726908
            }, 
      messages:{
                  nombre_proveedor:{
                        required  : '<b style="color:red">Debes Ingresar un nombre.</b>', 
                        minlength : '<b style="color:red">Ingresa al menos 2 caracteres.</b>',
                        maxlength : '<b style="color:red">El nombre excede de caracteres.</b>'
                    },
                   nombre_contacto:{
                        required  : '<b style="color:red">Debes Ingresar un nombre.</b>', 
                        minlength : '<b style="color:red">Ingresa al menos 2 caracteres.</b>',
                        maxlength : '<b style="color:red">El nombre excede de caracteres.</b>'
                    },
                   tipo_documento:{
                        required  : '<b style="color:red">Seleccione</b>'
                    }, 
                    numero_documento:{
                        required  : '<b style="color:red">Debes Ingresar un rif o cedula.</b>',
                        minlength : '<b style="color:red">Ingresa al menos 7 digitos.</b>',
                        maxlength : '<b style="color:red">Rif o cedula excede de digitos.</b>'
                    },
                    direccion:{
                        required  : '<b style="color:red">Debes Ingresar una dirección.</b>',
                        minlength : '<b style="color:red">Ingresa al menos 4 caracteres.</b>',
                        maxlength : '<b style="color:red">La dirección excede de caracteres.</b>'
                    },
                    codigo_telefono:{
                        required  : '<b style="color:red">Debes Ingresar el codigo.</b>',
                        minlength : '<b style="color:red">Ingresa al menos 4 digitos.</b>',
                        maxlength : '<b style="color:red">El codigo excede de digitos.</b>'
                    },
                    numero_telefono:{
                        required  : '<b style="color:red">Debes Ingresar un telefono.</b>',
                        minlength : '<b style="color:red">Ingresa al menos 7 digitos.</b>',
                        maxlength : '<b style="color:red">El telefono excede de digitos.</b>'
                    },
                    ciudad:{
<<<<<<< HEAD
                        required  : '<b style="color:red">Selecciona un Estado Para lista la ciudad.</b>',
                    },
                    estado:{
                        required  : '<b style="color:red">Selecciona un Estado.</b>',
                    },
                      
=======
                        required  : '<b style="color:red">Debes ingresa una ciudad.</b>',
                        minlength : '<b style="color:red">Ingresa al menos 4 caracteres.</b>',
                        maxlength : '<b style="color:red">El ciudad excede de caracteres.</b>'
                    }, 
>>>>>>> 446942e80d104328d6913c44f1a36546bf726908
                },
        });


     $.fn.delayPasteKeyUp = function(fn, ms)
    {
        var timer = 0;
        $(this).on("keyup paste", function()
        {
            clearTimeout(timer);
            timer = setTimeout(fn, ms);
        });
    }; 
    var autocompletar;
    $("#autocomplete").delayPasteKeyUp(function()
    {
        autocompletar = $("#autocomplete").val();

        if (autocompletar!="") {
        $.ajax({
          type: "POST",
            url:  "buscar_proveedor.php",
            data: "autocomplete="+autocompletar,
            success: function(data)
            { 
              if(data)
              {
                var json = JSON.parse(data),
                  html = '<ul class="list-group">';
                if(json.res == 'full')
                {
                  for(datos in json.data)
                  {
                    html+='<li style="background:#E3E3E3;border:solid 1px #333" class="list-group-item">';
                            html+='<div class="caption">';
                    html+='<h4 class="list-group-item-heading">';                       
                    html+='' + json.data[datos].nombre_proveedor+'  -   ';
<<<<<<< HEAD
                            html+='' + json.data[datos].estado+'       ';
                             
                            html+='<a style="margin-left:25px"  title="Ver Proveedor" class="btn btn-sm btn-default"     href="javascript:ver('+json.data[datos].codigo_proveedor+')"> Ver </a>  ';
                           
                            if(json.rol == 1)
                              {  

                            html+='<a  title="Editar Proveedor" class="btn btn-sm btn-primary"  href="javascript:editar('+json.data[datos].codigo_proveedor+')"> Editar </a>  ';
                            html+='<a style="margin-left:5px" title="Eliminar Proveedor" class="btn btn-sm btn-danger" href="javascript:eliminar('+json.data[datos].codigo_proveedor+')"> Eliminar</a>';

                             }
=======
                            html+='' + json.data[datos].ciudad+'       ';
                             
                            html+='<a style="margin-left:25px"  title="Ver Proveedor" class="btn btn-sm btn-default"     href="javascript:ver('+json.data[datos].codigo_proveedor+')"> Ver </a>  ';
                            html+='<a  title="Editar Proveedor" class="btn btn-sm btn-primary"  href="javascript:editar('+json.data[datos].codigo_proveedor+')"> Editar </a>  ';
                            html+='<a  title="Eliminar Proveedor" class="btn btn-sm btn-danger" href="javascript:eliminar('+json.data[datos].codigo_proveedor+')"> Eliminar</a>';
>>>>>>> 446942e80d104328d6913c44f1a36546bf726908

                            html+='</h4></div>';

                    html+='</li>';

                  }
                }
                  else
                {
                html+='<li style="background:#E3E3E3;border:solid 1px #333" class="list-group-item">';
                html+='<h4 class="list-group-item-heading">No se encontraron resultados de la busqueda </h4>';
                html+='</li>'; 
                }  
                 html+='</ul>';
                     
                 $("#busqueda").html("").append(html); 
              }
            } 
        });

        }else{

           $("#busqueda").html("");
        }

    }, 500 );

 }); 
 
function ver(id){
  var url = 'ver_proveedores.php';
    $.ajax({
      type: 'GET',
      url: url,
      data: 'id='+id,
      success: function(data){
       window.location="index.php?ver="+id;
      }
   });  
  } 
 
function editar(id){
  var url = 'editar_proveedores.php';
      $.ajax({
      type: 'GET',
      url: url,
      data: 'id='+id,
      success: function(data){
       window.location="index.php?editar="+id;
      }
   })    
}

function eliminar(id){ 
  var url = 'eliminar_proveedores.php';
  var pregunta = confirm('Si elimina el Proveedor, también se eliminaran todos los registros asociados al mismo. ¿Estas seguro que deseas eliminarlo?');
   if(pregunta==true){
    $.ajax({
           type: "POST",
           url: url,
           data:'id='+id, 
           success: function()
           {
           window.location="index.php"
           }
        });
    }
} 

 function isNumberKey(evt){ 
      
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
 
         return true;
}
 
var patron = new Array(8,1)
function rif_cedula(d,sep,pat,nums){
if(d.valant != d.value){
    val = d.value
    largo = val.length
    val = val.split(sep)
    val2 = ''
    for(r=0;r<val.length;r++){
        val2 += val[r]  
    }
    if(nums){
        for(z=0;z<val2.length;z++){
            if(isNaN(val2.charAt(z))){
                letra = new RegExp(val2.charAt(z),"g")
                val2 = val2.replace(letra,"")
            }
        }
    }
    val = ''
    val3 = new Array()
    for(s=0; s<pat.length; s++){
        val3[s] = val2.substring(0,pat[s])
        val2 = val2.substr(pat[s])
    }
    for(q=0;q<val3.length; q++){
        if(q ==0){
            val = val3[q]
        }
        else{
            if(val3[q] != ""){
                val += sep + val3[q]
                }
        }
    }
    d.value = val
    d.valant = val
    }
}

