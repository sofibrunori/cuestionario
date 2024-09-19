let resultado = 0

const sumaResultados = (respuestas) => {
    if (respuestas === "a") {
        resultado = resultado +1 
    } else if (respuestas === "b") {
        resultado = resultado +2
    }
}

const solCaracteristicas = ["Energético/a y optimista", "Extrovertido/a y social", "Líder natural y activo/a", "Ama los desafíos y el aire libre", "Le gusta ser el centro de atención"]
const lunaCaracteristicas = ["Tranquilo/a y reflexivo/a", "Introvertido/a y sensible", "Creativo/a y observador/a", "Prefiere la calma y la introspección", "Disfruta de la serenidad y la soledad"]


const mostrarResultado = () => {
    if (resultado <= 5) {
        alert ("Eres el sol")
        console.log(solCaracteristicas)
    } else if (resultado > 5) {
        alert ("Eres la luna")
        console.log(lunaCaracteristicas)
    }
}

const repetir = () => {
    let repetir = confirm ("Si desea volver a realizar el cuestionario, presione aceptar")
    if (repetir === true) {
        resultado = 0
        preguntas()
    } else if (repetir === false) {
        alert ("Gracias por realizar este cuestionario")
    }
}

const preguntas = () => {
    alert("¡Bienvenido/a a la Encuesta Sol o Luna!\nResponde 10 preguntas rápidas para descubrir si tu personalidad encaja más con el Sol o con la Luna. ¡Diviértete y descubre el resultado al final!\n Para responder al cuestionario, escribe en el espacio a o b") 
    
    let pregunta1 = prompt("¿Qué te gusta más?\n A: Estar al aire libre bajo el sol.\n B: Disfrutar de una noche tranquila bajo la luna.").toLowerCase()
    sumaResultados(pregunta1)

    let pregunta2 = prompt("¿Cómo te describirías?\n A: Energético/a y lleno/a de vida.\n B: Calmado/a y reflexivo/a.").toLowerCase()
    sumaResultados(pregunta2)

    let pregunta3 = prompt("¿Qué prefieres hacer al levantarte?\n A: Levantarte temprano y aprovechar el día.\n B: Dormir un poco más y disfrutar de la noche.").toLowerCase()
    sumaResultados(pregunta3)

    let pregunta4 = prompt("¿Cuál es tu color favorito?\n A: Colores cálidos como el amarillo o naranja.\n B: Colores fríos como el azul o el plateado.").toLowerCase()
    sumaResultados(pregunta4)

    let pregunta5 = prompt("¿Qué ambiente prefieres?\n A: Un día soleado y brillante.\n B: Una noche estrellada y tranquila.").toLowerCase()
    sumaResultados(pregunta5)
}
preguntas()

//const resultados = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5]
//console.log (resultados)







