

/*
    FUNCIONES
 */

function cambiar_menu(dia) {
    var entrantes;
    var hamburguesa;
    var postre;
    var img;
    if (id_anterior!=null){
        document.getElementById(id_anterior).classList.remove('activo');
    }
    switch (dia) {
        case 'Lunes':
            entrantes = "- Patatas fritas <br>- Bolas de queso";
            hamburguesa = "- Hamburguesa Messi";
            postre = "- Pastafrola";
            img = "1.jpg";
           break;
        case 'Martes':
            entrantes = "- Fingers de pollo <br>- Quesadillas";
            hamburguesa = "- Hamburguesa Griezmann";
            postre = "- Croissants";
            img = "2.jpg";
            break;
        case 'Miércoles':
            entrantes = "-  Ensalada <br>- Pollo asado";
            hamburguesa = "- Hamburguesa Ronaldo";
            postre = "- Torta de Viana";
            img = "3.jpg";
            break;
        case 'Jueves':
            entrantes = "- Croquetas de Pescado <br>- Queso";
            hamburguesa = "- Hamburguesa Neymar";
            postre = "- Pastel de chocolate";
            img = "4.jpg";
            break;
        case 'Viernes':
            entrantes = "- Croquetas de Jamón <br>- Salchichas con beicon";
            hamburguesa = "- Hamburguesa Torres";
            postre = "- Torrijas";
            img = "5.jpg";
            break;
    }
    document.getElementById("dia").innerHTML= dia;
    document.getElementById("entrante-dia").innerHTML = entrantes;
    document.getElementById("hamburguesa-dia").innerHTML = hamburguesa;
    document.getElementById("postre-dia").innerHTML = postre;
    document.getElementById("img-menu").src = "img/"+img;
    document.getElementById(dia).classList.add('activo');
    id_anterior = dia;
}


/*
    VARIABLES
 */
fecha=new Date();
var dias = new Array('Lunes','Lunes','Martes','Miércoles','Jueves','Viernes','Lunes');
var dia_actual = dias[fecha.getDay()];
var fecha_formulario = document.querySelector('input[type="date"]');
var id_anterior;
/*
    EJECUCIÓN
 */
cambiar_menu(dia_actual);
//dateControl.value = '2017-06-01';
fecha_formulario.value = fecha.getFullYear()+"-"+(fecha.getMonth()+1)+"-"+fecha.getDate();
fecha_formulario.min = fecha.getFullYear()+"-"+(fecha.getMonth()+1)+"-"+fecha.getDate();