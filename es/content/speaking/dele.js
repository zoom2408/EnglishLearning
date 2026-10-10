/* es/content/speaking/dele.js
   FW: answer frameworks matching the DELE speaking tasks (A1-B2).
   SPK: [topic, question, framework, tense code (nullable), sample
   answer, note (optional, shown when no tense chip applies)].
   Tense codes come from TN in content/theory/tiempos.js
   (ps / ind / imp / pf / pqp / fut / cond). */
(() => {
const FW={
 PRE:{name:"Nombre · Residencia · Idiomas · Ocupación",steps:["Tên, tuổi, quốc tịch","Nơi ở, nghề nghiệp/học","Ngôn ngữ, sở thích"],pat:["Me llamo … y soy de …","Vivo en … y soy …","Hablo … y mi afición es …","Estudio español porque …"]},
 RES:{name:"Respuesta directa · Detalle · Información extra",steps:["Trả lời thẳng câu hỏi","Thêm chi tiết cụ thể","Thêm thông tin phụ nếu có"],pat:["Normalmente … / Casi siempre …","Por ejemplo …","Es porque …","Además …"]},
 COR:{name:"Petición cortés · Motivo · Gracias",steps:["Đưa ra yêu cầu lịch sự","Nêu lý do (nếu cần)","Cảm ơn"],pat:["¿Podría …, por favor?","¿Sería posible …?","Me gustaría …","Se lo agradecería mucho. ¡Gracias!"]},
 TEM:{name:"Introducción · Punto principal + ejemplo · Opinión",steps:["Giới thiệu chủ đề","Nêu điểm chính + ví dụ cụ thể","Nêu ý kiến cá nhân"],pat:["Me gustaría hablar de …","Un punto importante es que … Por ejemplo …","En mi opinión …","Creo que es …, porque …"]},
 PLA:{name:"Propuesta · Reacción · Alternativa",steps:["Đưa ra đề xuất","Đồng ý/phản đối có lý do","Đề xuất thay thế nếu cần"],pat:["¿Qué tal si …?","Propongo que …","Me parece bien, pero …","¿Y si mejor …?"]},
 PRS:{name:"Introducción · Desarrollo · Conclusión",steps:["Giới thiệu chủ đề + dàn ý","Trình bày các điểm chính có ví dụ","Kết luận + ý kiến cá nhân"],pat:["El tema de mi presentación es …","Voy a hablar de tres puntos: primero …, después …, por último …","Por ejemplo …","En resumen, …"]},
 OPI:{name:"Aspecto positivo · Pregunta · Añadido",steps:["Khen điểm tích cực","Đặt câu hỏi","Bổ sung ý kiến"],pat:["Me parece muy bien que …","Tengo una pregunta: …","Me gustaría añadir que …","¿Qué piensas tú?"]},
 ARG:{name:"Tesis · Argumentos + ejemplos · Conclusión",steps:["Đưa ra luận điểm chính","Lập luận có ví dụ cụ thể","Kết luận"],pat:["Opino que …","Un argumento a favor / en contra es …","Un ejemplo concreto es …","En conclusión, creo que …"]},
 DEB:{name:"Postura · Contraargumento · Compromiso",steps:["Nêu quan điểm rõ ràng","Phản bác lập luận đối phương","Đề xuất giải pháp dung hòa"],pat:["Opino que …","Yo lo veo de otra manera, porque …","Entiendo tu punto, pero …","Quizá podríamos encontrar un punto medio si …"]},
};
// [chủ đề (cấp độ · tarea), câu hỏi, khung, thì chính (code hoặc null), câu trả lời mẫu, ghi chú (khi không có thì chính)]
const SPK=[
 // A1 · Presentarse
 ["A1 · Presentarse","¿Cómo te llamas y de dónde eres?","PRE","ps","Me llamo Linh y soy de Vietnam. Vivo en Hanói y soy estudiante. Hablo vietnamita y un poco de inglés."],
 ["A1 · Presentarse","¿A qué te dedicas?","PRE","ps","Soy estudiante. Estudio informática en la universidad de Hanói. Mi afición es leer y me gusta aprender idiomas."],
 ["A1 · Presentarse","¿Qué idiomas hablas?","PRE","ps","Hablo vietnamita como lengua materna y estudio español desde hace un año. También hablo un poco de inglés."],
 ["A1 · Presentarse","¿Cuántos años tienes y dónde vives?","PRE","ps","Tengo veintidós años y vivo en Hanói, en Vietnam. Vivo con mi familia."],
 ["A1 · Presentarse","¿Cuál es tu afición favorita?","PRE","ps","Mi afición favorita es leer y escuchar música. Me gusta leer novelas, y los fines de semana escucho música con mis amigos."],

 // A1 · Responder preguntas
 ["A1 · Responder preguntas","¿A qué hora te levantas normalmente?","RES","ps","Normalmente me levanto a las seis. Por ejemplo, hoy me levanté a las seis. Es porque tengo que ir temprano al trabajo."],
 ["A1 · Responder preguntas","¿Dónde compras normalmente?","RES","ps","Normalmente compro en el supermercado cerca de mi casa. Por ejemplo, voy allí todos los viernes. Es cómodo porque está muy cerca."],
 ["A1 · Responder preguntas","¿Qué haces los fines de semana?","RES","ps","Los fines de semana suelo ver a mi familia. Por ejemplo, los domingos comemos todos juntos. Me gusta mucho."],
 ["A1 · Responder preguntas","¿Cómo vas al trabajo o a la escuela?","RES","ps","Normalmente voy en moto. Por ejemplo, tardo veinte minutos. Es más rápido que ir en autobús."],
 ["A1 · Responder preguntas","¿Qué te gusta desayunar?","RES","ps","Me gusta desayunar pho. Por ejemplo, lo como casi todas las mañanas. Es porque está caliente y muy rico."],

 // A1 · Pedir algo con cortesía
 ["A1 · Pedir algo con cortesía","Quieres reservar una mesa en un restaurante. ¿Qué dices?","COR","cond","Buenos días, ¿podría reservar una mesa para dos personas? Llegaremos a las ocho. Se lo agradecería mucho, ¡gracias!"],
 ["A1 · Pedir algo con cortesía","Quieres que un compañero te ayude. ¿Qué dices?","COR","cond","¿Podrías ayudarme, por favor? No entiendo muy bien este ejercicio. Te lo agradecería mucho, ¡gracias!"],
 ["A1 · Pedir algo con cortesía","Estás en un hotel y quieres hacer el check-in antes. ¿Qué dices?","COR","cond","Perdone, ¿sería posible hacer el check-in a las doce? Mi vuelo llega muy temprano. Muchas gracias por su comprensión."],
 ["A1 · Pedir algo con cortesía","Quieres pedirle a un vecino que haga menos ruido.","COR","cond","Perdona, ¿podrías hacer un poco menos de ruido? Tengo que levantarme temprano mañana. Te lo agradecería mucho."],
 ["A1 · Pedir algo con cortesía","Quieres pedir un día libre en el trabajo.","COR","cond","¿Podría tener libre el próximo viernes? Tengo una cita importante. Se lo agradecería mucho."],

 // A2 · Hablar de un tema
 ["A2 · Hablar de un tema","Habla de tu rutina diaria.","TEM","ps","Me gustaría hablar de mi rutina diaria. Normalmente me levanto a las seis, desayuno y voy al trabajo en moto. En mi opinión, tener una rutina es importante porque ayuda a organizar el tiempo."],
 ["A2 · Hablar de un tema","Habla de tu última visita al médico.","TEM","ind","Me gustaría hablar de mi última visita al médico. La semana pasada fui al hospital porque tenía fiebre. En mi opinión, es importante ir al médico cuando uno no se siente bien."],
 ["A2 · Hablar de un tema","Habla de tu comida favorita.","TEM","ps","Me gustaría hablar de mi comida favorita. Es el pho, una sopa vietnamita con carne y fideos. En mi opinión, es el mejor plato para el desayuno."],
 ["A2 · Hablar de un tema","Habla de tus últimas vacaciones.","TEM","ind","Me gustaría hablar de mis últimas vacaciones. El verano pasado viajé a Da Nang con mi familia y nos bañamos en la playa. En mi opinión, fue un viaje muy relajante."],
 ["A2 · Hablar de un tema","Habla de tu casa o de tu barrio.","TEM","ps","Me gustaría hablar de mi barrio. Es un barrio tranquilo, con muchos árboles y tiendas pequeñas. En mi opinión, es un buen lugar para vivir en familia."],

 // A2 · Planear juntos
 ["A2 · Planear juntos","Quieres organizar una fiesta con un amigo. ¿Qué propones?","PLA","fut","¿Qué tal si organizamos la fiesta el sábado? Propongo que la hagamos en mi casa. Me parece bien invitar a diez personas. Yo prepararé la comida y tú traerás la música."],
 ["A2 · Planear juntos","Quieres ir de excursión con un amigo. ¿Qué propones?","PLA","fut","¿Qué tal si vamos a la montaña el domingo? Propongo que salgamos temprano. El tiempo será bueno, así que llevaremos comida para el día."],
 ["A2 · Planear juntos","Tenéis que elegir un regalo para un amigo. ¿Qué propones?","PLA","cond","¿Qué tal si le regalamos un libro? Me parece una buena idea porque le gusta leer. Pero también podríamos regalarle una entrada para el cine."],
 ["A2 · Planear juntos","Queréis elegir un restaurante para cenar.","PLA","cond","¿Qué tal si cenamos en un restaurante italiano? Me parece bien, pero es algo caro. ¿Y si mejor probamos un restaurante vietnamita?"],
 ["A2 · Planear juntos","Planeáis un viaje de fin de semana.","PLA","fut","¿Qué tal si vamos a Hoi An? Propongo que salgamos el viernes por la tarde. Reservaré el hotel y tú comprarás los billetes de tren."],

 // B1 · Dar opinión
 ["B1 · Dar opinión","Tu compañero ha presentado un proyecto. Da tu opinión.","OPI","pf","Me parece muy bien que hayas explicado el proyecto con ejemplos. Tengo una pregunta: ¿has pensado en el presupuesto? Me gustaría añadir que las imágenes son muy claras."],
 ["B1 · Dar opinión","Tu compañero ha dado una presentación sobre el medio ambiente. Da tu opinión.","OPI","pf","Me parece muy bien que hayas hablado de ejemplos concretos. Tengo una pregunta: ¿qué se puede hacer en casa? Me gustaría añadir que reciclar es un buen primer paso."],
 ["B1 · Dar opinión","Un amigo te cuenta que ha cambiado de trabajo. Reacciona.","OPI","pf","Me alegro de que hayas encontrado un trabajo mejor. Tengo una pregunta: ¿te gustan tus compañeros nuevos? Me gustaría añadir que el cambio será una buena experiencia."],
 ["B1 · Dar opinión","Tu compañero te enseña su portfolio. Da tu opinión.","OPI","pf","Me parece muy bien que hayas elegido proyectos tan variados. Tengo una pregunta: ¿cuál te gustó más? Me gustaría añadir que el diseño es muy limpio."],
 ["B1 · Dar opinión","Un amigo ha cocinado una cena para ti. Da tu opinión.","OPI","pf","Me parece muy bien que hayas preparado platos tan variados. Tengo una pregunta: ¿puedes darme la receta? Me gustaría añadir que la sopa estaba riquísima."],

 // B1 · Planear juntos
 ["B1 · Planear juntos","Organizáis un viaje de fin de curso. Negocia el destino.","PLA","cond","¿Qué tal si vamos a una ciudad histórica? Propongo que elijamos Hue, porque tiene mucha cultura. Me parece bien, pero la playa también sería una buena opción. ¿Y si mejor visitamos ambas ciudades?"],
 ["B1 · Planear juntos","Organizáis un evento en la escuela. Reparte las tareas.","PLA","fut","¿Qué tal si dividimos el trabajo? Propongo que yo me encargue de la decoración y tú de la música. Cada uno hará su parte, y después nos reuniremos para comprobar todo."],
 ["B1 · Planear juntos","Planeáis una sorpresa para el cumpleaños de un amigo.","PLA","fut","¿Qué tal si hacemos una fiesta sorpresa? Propongo que invitemos a todos sus amigos. Yo compraré el pastel y tú te encargarás de decorar la casa."],
 ["B1 · Planear juntos","Tenéis que elegir un curso de idiomas.","PLA","cond","¿Qué tal si hacemos un curso de español? Me parece bien, aunque también podríamos estudiar japonés. ¿Y si mejor empezamos por el español y después el japonés?"],
 ["B1 · Planear juntos","Planeáis cómo ahorrar dinero para viajar.","PLA","fut","¿Qué tal si ahorramos una parte de nuestro sueldo cada mes? Propongo que abramos una cuenta común. Así, en un año tendremos suficiente dinero para viajar."],

 // B1 · Presentación
 ["B1 · Presentación","Presenta el tema: «Mi ciudad natal».","PRS","ps","El tema de mi presentación es mi ciudad natal. Voy a hablar de tres puntos: primero, su historia; después, su comida; por último, su gente. En resumen, es una ciudad pequeña pero muy acogedora."],
 ["B1 · Presentación","Presenta el tema: «Mi trabajo ideal».","PRS","cond","El tema de mi presentación es mi trabajo ideal. Voy a hablar de tres puntos: primero, el ambiente; después, el horario; por último, el salario. En resumen, me gustaría un trabajo creativo con buen equipo."],
 ["B1 · Presentación","Presenta el tema: «Una tradición de mi país».","PRS","ps","El tema de mi presentación es el Tet, el año nuevo vietnamita. Voy a hablar de tres puntos: primero, la preparación; después, la comida; por último, la familia. En resumen, es la fiesta más importante del año."],
 ["B1 · Presentación","Presenta el tema: «El deporte en mi vida».","PRS","ps","El tema de mi presentación es el deporte en mi vida. Voy a hablar de tres puntos: primero, qué deportes practico; después, con quién; por último, por qué es importante. En resumen, el deporte me da energía."],
 ["B1 · Presentación","Presenta el tema: «Mi mejor viaje».","PRS","ind","El tema de mi presentación es mi mejor viaje. Voy a hablar de tres puntos: primero, el destino; después, las actividades; por último, lo que aprendí. En resumen, viajar me enseñó a ser más abierto."],

 // B2 · Discurso
 ["B2 · Discurso","Toma una postura: ¿Debería ser obligatorio estudiar un segundo idioma?","ARG","cond","Opino que estudiar un segundo idioma debería ser obligatorio. Un argumento a favor es que abre muchas puertas en el mercado laboral. Un ejemplo concreto es que los hablantes de varios idiomas ganan más. En conclusión, creo que merece la pena."],
 ["B2 · Discurso","Toma una postura: ¿Es mejor vivir en la ciudad o en el campo?","ARG","ps","Opino que vivir en el campo es mejor para la salud. Un argumento a favor es que el aire es más limpio. Un ejemplo concreto es la falta de ruido y de tráfico. En conclusión, creo que el campo ofrece más calidad de vida."],
 ["B2 · Discurso","Toma una postura: ¿Deberían los móviles prohibirse en las escuelas?","ARG","cond","Opino que los móviles deberían limitarse en las escuelas. Un argumento a favor es que distraen a los alumnos. Un ejemplo concreto es que muchos estudiantes miran las redes sociales en clase. En conclusión, creo que es necesaria una regla clara."],
 ["B2 · Discurso","Toma una postura: ¿Es el teletrabajo mejor que la oficina?","ARG","ps","Opino que el teletrabajo es una buena opción. Un argumento a favor es que ahorra tiempo de transporte. Un ejemplo concreto es que muchas empresas ya han adoptado el modelo híbrido. En conclusión, creo que lo ideal es combinar ambos."],
 ["B2 · Discurso","Toma una postura: ¿Debería prohibirse el plástico de un solo uso?","ARG","cond","Opino que el plástico de un solo uso debería reducirse mucho. Un argumento a favor es la contaminación. Un ejemplo concreto es el plástico en los océanos. En conclusión, creo que son necesarias leyes más estrictas."],

 // B2 · Debate
 ["B2 · Debate","Tu compañero dice: «El dinero da la felicidad». Reacciona.","DEB","cond","Opino que el dinero es importante, pero no lo es todo. Yo lo veo de otra manera, porque los estudios muestran que las relaciones también influyen. Entiendo tu punto, pero quizá podríamos decir que el dinero es una base, no una garantía."],
 ["B2 · Debate","Tu compañero dice: «La inteligencia artificial sustituirá muchos empleos». Reacciona.","DEB","fut","Opino que la IA traerá muchos cambios. Lo veo de forma parecida, pero creo que también aparecerán nuevas profesiones. Quizá podríamos encontrar un punto medio si decimos que la formación será clave."],
 ["B2 · Debate","Tu compañero dice: «Hay que decir siempre la verdad». Reacciona.","DEB","cond","Opino que la honestidad es fundamental. Yo lo veo de otra manera, porque una mentira piadosa a veces protege los sentimientos. Entiendo tu punto, pero depende mucho de la situación."],
 ["B2 · Debate","Tu compañero dice: «La globalización solo tiene ventajas». Reacciona.","DEB","ps","Opino que la globalización ofrece muchas oportunidades. Yo lo veo de otra manera, porque también puede aumentar la desigualdad. Quizá podríamos encontrar un punto medio si miramos los dos lados."],
 ["B2 · Debate","Tu compañero dice: «Hay que eliminar las notas en la escuela». Reacciona.","DEB","cond","Opino que las notas dan una orientación. Yo lo veo de otra manera, porque también pueden generar presión. Entiendo tu punto, pero quizá un sistema de evaluación alternativo sería un buen compromiso."],
];

GRAMMAR.speaking = { label: "DELE · A1–B2", FW, SPK };
})();
