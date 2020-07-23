var opcion_1 = new Array("", "Leticia");
var opcion_2 = new Array("", "Medellin", "Bello", "itagui", "Envigado", "Rionegro");
var opcion_3 = new Array("", "Arauca");
var opcion_4 = new Array("", "Barranquilla", "Soledad", "Malambo", "Sabanalarga");
var opcion_5 = new Array("", "Cartagena de Indias");
var opcion_6 = new Array("", "Tunja");
var opcion_7 = new Array("", "Manizales");
var opcion_8 = new Array("", "Florencia");
var opcion_9 = new Array("", "San Juan de Pasto");
var opcion_10 = new Array("", "Popayan");
var opcion_11 = new Array("", "Valledupar");
var opcion_12 = new Array("", "Quibdo");
var opcion_13 = new Array("", "Monteria");
var opcion_14 = new Array("", "Bogota");
var opcion_15 = new Array("", "Pereira");
var opcion_16 = new Array("", "Bucaramanga");
var opcion_17 = new Array("", "Neiva");
var opcion_18 = new Array("", "Ibague");
var opcion_19 = new Array("", "Santa Marta");
var opcion_20 = new Array("", "Villavicencio");

function eleccion(){
    var departamento;
    departamento = document.formulario.departamento[document.formulario.departamento.selectedIndex].value;

    if(departamento != 0){
        opcion = eval("opcion_" + departamento);
        cantidad_ciudad = opcion.length;
        document.formulario.ciudad.length = cantidad_ciudad;

        for(i = 0; i < cantidad_ciudad; i++){
            document.formulario.ciudad.options[i].value = opcion[i];
            document.formulario.ciudad.options[i].text = opcion[i];
        }
    }
    else{
        document.formulario.ciudad.options[0].value = "";
        document.formulario.ciudad.options[0].text = "";
    }

    document.formulario.ciudad.options[0].selected = true;
}