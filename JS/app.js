let resultado = 0

const sumaResultados = (respuestas) => {
    if (respuestas === "a") {
        resultado = resultado +1 
    } else if (respuestas === "b") {
        resultado = resultado +2
    } else if (respuestas === "c") {
        resultado = resultado +3
    } else if (respuestas === "d") {
        resultado = resultado +4
    } else if (respuestas === "e") {
        resultado = resultado +5
    } else if (respuestas === "f") {
        resultado = resultado +6
    }
}

const rossCaracteristicas = ["Intelectual y curioso", "Apasionado por la historia y la ciencia", "Sensible y emocional", "Inseguro en las relaciones", "Persistente en lograr sus metas"];
const rachelCaracteristicas = ["Ambiciosa y amante de la moda", "Extrovertida y sociable", "Impulsiva pero aprende rápido", "Carismática y con gran sentido del estilo"];
const monicaCaracteristicas = ["Perfeccionista y organizada", "Competitiva y decidida", "Cuidada y protectora con sus seres queridos", "Ambiciosa y apasionada por la cocina", "Le gusta tener el control"];
const chandlerCaracteristicas = ["Sarcástico y con gran sentido del humor", "Evita enfrentar sus emociones", "Leal y solidario con sus amigos", "Sensible pero lo esconde con humor", "Inseguro sobre sus relaciones"];
const joeyCaracteristicas = ["Carismático y encantador", "Divertido y relajado", "Sencillo y confiado", "Amigable y extrovertido", "Apasionado por la actuación y la comida"];
const phoebeCaracteristicas = ["Excéntrica y creativa", "Espiritual y en contacto con su lado emocional", "Independiente y auténtica", "Compasiva y amable", "Con una perspectiva única de la vida"];



const mostrarResultado = () => {
    if (resultado >= 10 && resultado < 20 ) {
        alert ("Tu personaje es Ross")
        console.log(rossCaracteristicas)
    } else if (resultado >= 20 && resultado < 30) {
        alert ("Tu personaje es Rachel")
        console.log(rachelCaracteristicas)
    } else if (resultado >= 30 && resultado < 40) {
        alert ("Tu personaje es Monica")
        console.log(monicaCaracteristicas)
    } else if (resultado >= 40 && resultado < 50) {
        alert ("Tu personaje es Chandler")
        console.log(chandlerCaracteristicas)
    } else if (resultado >= 50 && resultado < 60) {
        alert ("Tu personaje es Joey")
        console.log(joeyCaracteristicas)
    } else if (resultado >= 60) {
        alert ("Tu personaje es Phoebe")
        console.log(phoebeCaracteristicas)
    }
    
}

const repetir = () => {
    let repetir = confirm ("Si desea volver a realizar el cuestionario, presione aceptar")
    if (repetir === true) {
        resultado = 0
        preguntas()
        mostrarResultado()
        repetir()
    } else if (repetir === false) {
        alert ("Gracias por realizar este cuestionario")
    }
}

const preguntas = () => {
    alert("¡Bienvenido/a a la Encuesta Qué personaje de Friends eres!\n Responde a 10 preguntas rápidas para descubrir a cuál de los personajes de Friends te pareces más: Ross, Rachel, Monica, Chandler, Joey o Phoebe. ¡Diviértete respondiendo y descubre tu resultado al final!\n(Para responder el cuestionario, escribe en el espacio la letra de la opción correspondiente)") 

    let pregunta1 = prompt("¿Qué haces en una situación de conflicto?\n A: Trato de explicar mi punto de vista de manera lógica.\n B: Me siento frustrado/a pero trato de ser paciente.\n C: Me aseguro de que todo esté en orden y organizado.\n D: Utilizo el humor para calmar la situación.\n E: Evito la confrontación y trato de ser amigable con todos.\n F: Sigo mis instintos y hago lo que me parece mejor.").toLowerCase()
    sumaResultados(pregunta1)

    let pregunta2 = prompt("¿Cómo te describirían tus amigos?\n A: Intelectual y un poco nerd.\n B: Glamuroso/a y ambicioso/a.\n C: Perfeccionista y organizada.\n D: Sarcástico/a y divertido/a.\n E: Carismático/a y relajado/a.\n F: Excéntrico/a y único/a.").toLowerCase()
    sumaResultados(pregunta2)

    let pregunta3 = prompt("¿Qué te gusta hacer en tu tiempo libre?\n A: Leer sobre temas científicos o históricos.\n B: Ir de compras o estar al día con la moda.\n C: Cocinar y organizar cenas para amigos.\n D: Hacer bromas o ver televisión.\n E: Salir con amigos o ver deportes.\n F: Practicar actividades creativas o musicales.").toLowerCase()
    sumaResultados(pregunta3)

    let pregunta4 = prompt("¿Cuál es tu peor temor?\n A: No cumplir con tus expectativas académicas o profesionales.\n B: Perder tu independencia o verte atrapado/a en una situación.\n C: El desorden o el caos.\n D: Sentirte vulnerable o emocional.\n E: Quedarte sin amigos o ser ignorado/a.\n F: No ser auténtico/a o vivir una vida aburrida.").toLowerCase()
    sumaResultados(pregunta4)

    let pregunta5 = prompt("¿Cuál es tu enfoque hacia el amor?\n A: Buscas a alguien con quien compartir tus intereses intelectuales.\n B: El amor es complicado, pero lo quieres todo.\n C: El compromiso es clave, buscas estabilidad.\n D: Te da miedo, pero lo deseas profundamente.\n E: Prefieres mantener las cosas ligeras y divertidas.\n F: Buscas una conexión espiritual y única.").toLowerCase()
    sumaResultados(pregunta5)

    let pregunta6 = prompt("¿Cómo manejas el estrés?\n A: Trato de analizarlo y encontrar una solución lógica.\n B: Me relajo con una tarde de autocuidado.\n C: Organizo todo y trato de mantener el control.\n D: Hago bromas para aligerar la carga.\n E: Evito pensar en ello y hago algo divertido.\n F: Medito o hago algo creativo.").toLowerCase()
    sumaResultados(pregunta6)

    let pregunta7 = prompt("¿Qué tipo de trabajo prefieres?\n A: Algo académico o que requiera investigación.\n B: Un trabajo creativo o relacionado con la moda.\n C: Algo que implique organización y liderazgo.\n D: Un ambiente de oficina donde puedas ser eficiente pero relajado/a.\n E: Algo divertido y que no requiera demasiada seriedad.\n F: Algo que te permita expresarte y ser tú mismo/a.").toLowerCase()
    sumaResultados(pregunta7)

    let pregunta8 = prompt("¿Cómo te llevas con tu familia?\n A: Tratas de ganarte su respeto y ser un buen ejemplo.\n B: Te importa lo que piensen, pero sigues tu propio camino.\n C: Eres muy cercano/a y a veces un poco controlador/a.\n D: Mantienes las cosas ligeras y evitas los conflictos.\n E: Te llevas bien, pero no te involucras demasiado.\n F: Eres un espíritu libre, pero los amas profundamente.").toLowerCase()
    sumaResultados(pregunta8)

    let pregunta9 = prompt("¿Cómo te sientes acerca de la amistad?\n A: Crees en la amistad leal y profunda.\n B: Ves a tus amigos como parte esencial de tu vida social.\n C: La amistad es como una familia que eliges.\n D: Valoras mucho el humor y la diversión con amigos.\n E: Crees que los amigos son para pasar un buen rato.\n F: Consideras a tus amigos como almas gemelas.").toLowerCase()
    sumaResultados(pregunta9)

    let pregunta10 = prompt("¿Qué es lo que más valoras en la vida?\n A: El conocimiento y el éxito personal.\n B: El estilo y la independencia.\n C: El orden y la estabilidad.\n D: El humor y las relaciones interpersonales.\n E: La diversión y el tiempo con amigos.\n F: La autenticidad y la libertad.").toLowerCase()
    sumaResultados(pregunta10)
}

preguntas()
sumaResultados()
mostrarResultado()
repetir()









