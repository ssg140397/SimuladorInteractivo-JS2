
let Bienvenida = prompt ("Bievenido a Brando & Co, ingrese la opción que desea realizar \n1: Averigua el producto para tu mascota \n2: Salir")

function DatosPerro () {
    let nombrePerro = prompt ("ingrese el nombre de su mascota")
console.log("el nombre de la mascota es: "+ nombrePerro)

/* De enero a diciembre, solo para clg*/
let CumplePerro = prompt ("¿En que mes tu perro cumple años?")
console.log(nombrePerro + " Cumple años en el mes: "+ CumplePerro)
/* Cachorro (1-2 años) , Adulto (2+ años), Senior (7+ años)*/
let edadPerro = prompt ("¿Que edad tiene tu perro?")
console.log("Rango de edad de "+ nombrePerro + "es de "+ edadPerro)

/* Menos de 12 kg, Entre 12 y 23kg, Entre 23 y 35 kg, más de 35 kg */
let pesoPerro = prompt ("¿Cuanto pesa tu perro?")
console.log("El rango de peso de "+ nombrePerro + "es de "+ pesoPerro)
}


function derivadoProductos (){

    let problemaPerro = prompt ("¿Cual de los siguientes problemas molesta a tu perro ? \n1: aburrimiento \n2: Ansiedad \n3: Problemas Digestivos \n4: Higiene Dental \n5: Problemas urinarios \n6: Hidratación \n7: Articulaciones y ligamentos \n8: Alergias/Piel")
    console.log("Problema que presenta el perro: "+ problemaPerro)

    switch (problemaPerro) {
        case "aburrimiento": 
            alert("El mejor producto para su mascota es: Chubeats de higado o Chubeats de hueso de manzano deshidratado ¡Excelentes opciones para el    aburrimiento! ")
            console.log("Producto seleccionado: Chubeats de higado, chubeats de huezo de manzano deshidratado")
            break;

        case "Ansiedad":
            alert ("El mejor producto para su mascota es: PetRelax Spray para perros, calma la ansiedad de tu mascota en un instante ")
            console.log("Producto seleccionado: PetRelax Spray para perro")
            break;

        case "Ansiedad":
            alert ("El mejor producto para su mascota es: PetRelax Spray para perros, calma la ansiedad de tu mascota en un instante")
            console.log("Producto seleccionado:")
            break;

        case "problemas digestivos":
            alert ("El mejor producto para su mascota es: Barfbites para perro (digestivo) excelente para problemas estomacales")
            console.log("Producto seleccionado:")
            break;

        case "higiene dental":
            alert ("El mejor producto para su mascota es:Cleanbites (limpieza bucal), dejara la boca de tu perro fresca, limpia y segura de gérmenes")
            console.log("Producto seleccionado:")
            break;

        case "problemas urinarios":
            alert ("El mejor producto para su mascota es: Comida medicada ID (vejiga y riñones), excelente para problemas de orina para mascota")
            console.log("Producto seleccionado: Comida medicada ID (vejiga y riñones)")
            break;

        case "hidratacion":
            alert ("El mejor producto para su mascota es: AloeVeraPaw para perros, protege las almuadillas de tu perro de los males de cualquier estación")
            console.log("Producto seleccionado:")
            break;

        case "articulaciones":
            alert ("El mejor producto para su mascota es:  Glucopet (glucosamina para ligamentos), excelente suplemento para las articulaciones y ligamentos de tus pequeños")
            console.log("Producto seleccionado:")
            break;

        case "alergia/piel":
            alert ("El mejor producto para su mascota es: Crema antialerg para perros y chubeats de salmon (Reforzado con Vitamina D), calma la alergia de tu mascota en un instante y suplementa su piel")
            console.log("Producto seleccionado:")
            break;
    
        default:
        alert ("Ingrese una opcion valida")
        derivadoProductos ()
            break;
    }

}


/* Productos para mascota: Chubeats de higado, Bolsa de caldo de hueso, Glucopet (glucosamina para ligamentos), Cleanbites (limpieza bucal), Comida medicada ID (vejiga y riñones), AloeVera para perros, Chubeats de hueso de manzano deshidratado, PetRelax Spray para perros, Barfbites para perro (digestivo)*/


while (Bienvenida === "1"){
    /* Dato libre solo para clg*/
    DatosPerro ()
    derivadoProductos ()
    let numeroCelular = prompt ("Ingresa tu numero celular para que te contactemos")
    console.log("numero de contacto: "+ numeroCelular)
    let salida = prompt ("¿Desea ingresar otra mascota? De no ser así escriba salir para finalizar el programa")
    if (salida === "salir"){
        break
    } else if (salida === "continuar"){
        DatosPerro ()
    }


    if (Bienvenida === "2"){
    break
    }

}