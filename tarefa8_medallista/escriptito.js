

function resolve(posicion) {
    if(posicion == 1) {
    	document.write("Medalla de ouro");
    } else {
    	if(posicion == 2) {
            document.write("Medalla de plata");
        } else {
            if(posicion == 3) {
                document.write("Medalla de bronce");
            } else {
                document.write("Non es o campeón ");
            }
        }
    }
}

var posicion = prompt ("cual es tu posición?");
resolve(posicion)