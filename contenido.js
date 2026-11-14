/* =====================================================================
   AQUÍ SE EDITA TODO EL CONTENIDO DE LA PÁGINA (solo este archivo)
   - Cada microorganismo tiene "bloques": cada bloque = título "t" +
     texto "p" (o lista "l") + imágenes "img".
   - Para agregar un bloque: copia uno { ... } completo y pégalo debajo
     del anterior. No olvides la coma entre bloques.
   - Para agregar una imagen: súbela a la carpeta "img" y escribe su
     nombre así: { src: "img/mi-imagen.webp", fuente: "referencia", alt: "qué se ve" }
   - Separar párrafos dentro de "p": usa \n\n
   - Video del podcast: { t:"Podcast", video:"CODIGO" }, donde CODIGO es lo
     que va después de youtu.be/ (sin lo que sigue a "?").
   - Cuidado: no borres comillas ni comas. Si algo se daña, GitHub guarda
     el historial y se puede volver atrás.
   ===================================================================== */
const SITIO = {
  integrantes: ["Andrea Ximena Pabón","Karla Manuela Lima","Jhony Ordóñez","José Felipe Carlosama","Yulieth Valentina Muyuy"]
};

const MICROS = [
 { id:"bacteria", pestana:"Bacteria", grupo:"Bacteria", color:"--bacteria", arte:"bacteria", acordeon:true,
   portada:"img/bacteria-portada.webp", credito:"",
   nombre:"Pseudomonas aeruginosa", lema:"",
   resumen:[["Forma",""],["Tinción de Gram",""],["Oxígeno",""],["Se destaca por",""]],
   bloques:[
    {t:"Identidad y características de la especie",
     p:"Pseudomonas aeruginosa es una bacteria oportunista de importancia clínica, reconocida por su capacidad para producir infecciones, especialmente en personas hospitalizadas, pacientes inmunocomprometidos y personas con quemaduras, heridas extensas o dispositivos médicos invasivos. Se encuentra ampliamente distribuida en el ambiente, principalmente en el agua, el suelo y superficies húmedas.",
     img:[
      {src:"img/bacteria-taxonomia.webp", alt:"Taxonomía de Pseudomonas aeruginosa: dominio Bacteria, filo Pseudomonadota, clase Gammaproteobacteria, orden Pseudomonadales, familia Pseudomonadaceae, género Pseudomonas, especie Pseudomonas aeruginosa"},
      {src:"img/bacteria-morfologia.webp", alt:"Morfología y características microbiológicas de Pseudomonas aeruginosa: forma, tinción de Gram, oxígeno, movilidad, esporas, metabolismo, pigmentos, olor y biopelícula"}
     ]},
    {t:"Dinámica de la cadena infecciosa",
     p:"La cadena infecciosa representa la secuencia de acontecimientos que permite que un microorganismo pase desde su reservorio hasta un huésped susceptible y produzca una infección. Comprender sus eslabones ayuda a establecer medidas de prevención para interrumpir la transmisión de Pseudomonas aeruginosa.",
     img:[{src:"img/bacteria-cadena-infecciosa.webp", alt:"Cadena infecciosa de Pseudomonas aeruginosa: agente infeccioso, reservorio, puerta de salida, vía de transmisión, puerta de entrada y huésped susceptible, con medidas de prevención"}]},
    {t:"Estrategias de virulencia y defensa del microorganismo",
     p:"La virulencia es la capacidad de un microorganismo para invadir, producir daño y favorecer el desarrollo de una enfermedad. Pseudomonas aeruginosa utiliza estructuras, toxinas, enzimas y mecanismos de adaptación que facilitan su supervivencia en el huésped.",
     img:[{src:"img/bacteria-virulencia.webp", alt:"Estrategias de virulencia y defensa de Pseudomonas aeruginosa: método de reproducción, exotoxina A, piocianina, pioverdina, elastasas y proteasas, fosfolipasas, flagelo, pili, biopelícula y sistemas de secreción"}]},
    {t:"Respuesta inmunológica del huésped",
     p:"Cuando Pseudomonas aeruginosa entra al organismo, el sistema inmunológico activa mecanismos de defensa innatos y adaptativos. La respuesta busca eliminar la bacteria, limitar su propagación y reparar los tejidos afectados.",
     img:[{src:"img/bacteria-respuesta-inmunologica.webp", alt:"Respuesta inmunológica: inmunidad innata (barreras físicas y químicas, neutrófilos y macrófagos, complemento, inflamación y citocinas) e inmunidad adaptativa (linfocitos B, anticuerpos IgG e IgA, linfocitos T)"}]},
    {t:"Diagnóstico y tratamiento",
     p:"El tratamiento de las infecciones por Pseudomonas aeruginosa depende del sitio de infección, la gravedad clínica, las condiciones del paciente y el perfil de sensibilidad antimicrobiana de la cepa. La selección del tratamiento corresponde al equipo médico y debe ajustarse a los resultados microbiológicos.",
     extra:[{h:"Diagnóstico microbiológico",
       p:"Antes de establecer el tratamiento definitivo, cuando la situación clínica lo permita, se realizan los siguientes procedimientos:",
       l:["**Valoración clínica:** identificación de síntomas, signos de infección, antecedentes y factores de riesgo.",
          "**Obtención de muestras:** según el foco, pueden incluir sangre, orina, secreciones respiratorias o muestras de heridas.",
          "**Cultivo microbiológico:** permite recuperar e identificar el microorganismo.",
          "**Antibiograma:** determina a qué antimicrobianos es sensible o resistente la bacteria.",
          "**Evaluación de la gravedad:** permite identificar complicaciones como neumonía grave, bacteriemia o sepsis."]}],
     img:[{src:"img/bacteria-tratamiento.webp", alt:"Tratamiento antimicrobiano: piperacilina/tazobactam, ceftazidima, cefepima, meropenem, ciprofloxacino, amikacina y antimicrobianos especializados, con sus consideraciones"}]},
    {t:"Rol de enfermería, bioseguridad y prevención de IAAS",
     p:"Las infecciones asociadas a la atención en salud (IAAS) son aquellas que aparecen en relación con la prestación de servicios sanitarios y que no estaban presentes ni en incubación al inicio de la atención, de acuerdo con los criterios de vigilancia aplicables.\n\nEl profesional de enfermería desempeña un papel esencial en la prevención de las IAAS por Pseudomonas aeruginosa, debido a su participación directa en el cuidado, la administración de tratamientos, el manejo de dispositivos invasivos y la vigilancia del estado del paciente.",
     img:[{src:"img/bacteria-rol-enfermeria.webp", alt:"Rol de enfermería en bioseguridad y prevención de IAAS: higiene de manos, precauciones estándar, aislamiento, técnica aséptica, limpieza del ambiente, vigilancia, uso seguro de antimicrobianos y educación"}]},
    {t:"Bibliografía", sinpreguntar:true, l:[
      "Centers for Disease Control and Prevention (CDC). (2025, 12 de junio). About Pseudomonas aeruginosa.",
      "Centers for Disease Control and Prevention (CDC). (2024). MDRO Prevention and Control.",
      "Manual MSD. Infecciones por Pseudomonas. https://www.msdmanuals.com/es/hogar/infecciones/infecciones-bacterianas-bacterias-gramnegativas/infecciones-por-pseudomonas",
      "OpenAI. (2026). ChatGPT [Inteligencia artificial generativa] (referencia de las imágenes). https://chatgpt.com/"]},
    {t:"Podcast", video:"ry61a79CpOg"}
   ], imagenes:[] },

 { id:"hongo", pestana:"Hongo", grupo:"Hongo", color:"--hongo", arte:"hongo", acordeon:true,
   portada:"img/hongo-portada.webp", credito:"Universidad de Antioquia, Atlas de Micología",
   nombre:"Mucor spp. / Rhizopus spp.", lema:"",
   resumen:[["Tipo",""],["Enfermedad",""],["Hifas",""],["Riesgo",""]],
   bloques:[
    {t:"Identidad y características de la especie",
     p:"El género Mucor comprende hongos filamentosos conocidos comúnmente como mohos, pertenecientes al orden Mucorales. Se encuentran ampliamente distribuidos en la naturaleza, por lo que se consideran organismos ubicuos. Algunas especies pueden producir infecciones en seres humanos, especialmente en personas inmunocomprometidas o inmunosuprimidas. Una característica importante es que muchas cepas de Mucor spp. no crecen habitualmente a temperaturas de 37 °C; sin embargo, aquellas que presentan termotolerancia tienen la capacidad de crecer a temperaturas cercanas a la temperatura corporal humana, lo que favorece su potencial para producir infecciones.",
     img:[{src:"img/hongo-identidad.webp", fuente:"Fotos: microscopía (círculo, arriba a la izquierda): [Universidad de Antioquia, Atlas de Micología](https://atlasdemicologia.wordpress.com/wp-content/uploads/2016/03/mucorantioquiaazul40x.jpg). Esporangios (arriba a la derecha): [Universidad de Adelaida](https://mycology.adelaide.edu.au/sites/default/files/styles/ua_image_landscape/public/media/images/2021-09/mucor-sporang.jpg?h=c4dd2c7b&itok=eZMkARFj).\nOpenAI. (2026). ChatGPT [Inteligencia artificial generativa]. https://chatgpt.com/", alt:"Mucor spp.: clasificación taxonómica (reino Fungi, orden Mucorales, familia Mucoraceae) y características generales de morfología, reproducción, hábitat e importancia, con foto al microscopio"}]},
    {t:"Dinámica de la cadena infecciosa",
     img:[{src:"img/hongo-cadena.webp", fuente:"OpenAI. (2026). ChatGPT [Inteligencia artificial generativa]. https://chatgpt.com/", alt:"Cadena infecciosa de Mucor spp.: agente infeccioso, reservorio, puerta de salida, vía de transmisión, puerta de entrada y huésped susceptible. La mucormicosis no se transmite habitualmente de persona a persona"}]},
    {t:"Estrategias de virulencia y defensa del microorganismo",
     img:[{src:"img/hongo-virulencia.webp", fuente:"Foto central: [Atlas de Identificación micológica, colonia de Mucor](https://i0.wp.com/atlasdemicologia.wordpress.com/wp-content/uploads/2016/03/mucorcoloniatangarife.jpg?w=598&h=449&ssl=1)\nOpenAI. (2026). ChatGPT [Inteligencia artificial generativa]. https://chatgpt.com/", alt:"Factores de virulencia y defensa de Mucor spp.: esporas, hifas, angioinvasión, aprovechamiento del hierro, proteínas CotH, evasión inmune y resistencia a fluconazol y voriconazol"}]},
    {t:"Respuesta inmunológica del huésped",
     img:[{src:"img/hongo-respuesta.webp", fuente:"OpenAI. (2026). ChatGPT [Inteligencia artificial generativa]. https://chatgpt.com/", alt:"Respuesta inmunológica del huésped frente a Mucor spp.: inmunidad innata, inmunidad adaptativa y por qué afecta a personas inmunocomprometidas"}]},
    {t:"Diagnóstico y tratamiento",
     img:[{src:"img/hongo-diagnostico-tratamiento.webp", fuente:"Foto central: [Manual MSD, mucormicosis rinocerebral (imagen de los CDC)](https://www.msdmanuals.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fmmanual-ssq1ci05%2Fmedia%2Fhome%2Fimages%2F2831-rhinocerebral-mucormycosis-cdc-cv-sized_es.jpg%3Fmw%3D350%26thn%3D0%26sc_lang%3Des&w=2048&q=75)\nOpenAI. (2026). ChatGPT [Inteligencia artificial generativa]. https://chatgpt.com/", alt:"Mucormicosis: diagnóstico (muestras de tejido, PCR, tomografía) y tratamiento (anfotericina B, isavuconazonium, posaconazol, control de la enfermedad de base y cirugía)"}]},
    {t:"Rol de enfermería, bioseguridad y prevención de IAAS",
     p:"El personal de enfermería cumple un papel importante en el cuidado de los pacientes con sospecha o diagnóstico de mucormicosis. Su trabajo consiste en vigilar el estado de salud del paciente, identificar posibles complicaciones, administrar el tratamiento indicado y aplicar medidas de prevención para evitar infecciones asociadas a la atención en salud (IAAS).",
     img:[{src:"img/hongo-rol-enfermeria.webp", fuente:"OpenAI. (2026). ChatGPT [Inteligencia artificial generativa]. https://chatgpt.com/", alt:"Intervenciones y cuidados de enfermería en mucormicosis, signos de alarma y medidas de bioseguridad y prevención de IAAS"}]},
    {t:"Bibliografía", sinpreguntar:true, l:[
      "Mucor spp. | Atlas de Identificación micológica. https://share.google/KpCc38eCZOLZeua5d",
      "https://www.msdmanuals.com/es/hogar/infecciones/infecciones-por-hongos-infecciones-f%C3%BAngicas-micosis/mucormicosis",
      "https://www.actasdermo.org/es-aislamiento-mucor-spp-paciente-con-articulo-13003265",
      "OpenAI. (2026). ChatGPT [Inteligencia artificial generativa] (referencia de las imágenes). https://chatgpt.com/"]}
   ], imagenes:[] },

 { id:"virus", pestana:"Virus", grupo:"Virus", color:"--virus", arte:"virus", acordeon:true,
   portada:"img/virus-portada.webp", credito:"OpenAI. (2026). ChatGPT [Modelo de inteligencia artificial generativa].",
   nombre:"Virus de la Hepatitis C (VHC)", lema:"",
   resumen:[["Material genético",""],["Familia",""],["Envoltura",""],["Vacuna",""]],
   bloques:[
    {t:"Identidad y características de la especie",
     p:"El virus de la hepatitis C (VHC) es un microorganismo infeccioso acelular que pertenece a los virus de ARN. Su clasificación lo ubica en la familia Flaviviridae y el género Hepacivirus. Su material genético está compuesto por ARN monocatenario de sentido positivo, lo que le permite funcionar directamente como molde para producir proteínas virales dentro de la célula infectada. El VHC tiene preferencia por el hígado, donde infecta los hepatocitos y puede causar inflamación hepática aguda o crónica.",
     img:[{src:"img/virus-identidad.webp", fuente:"Figura 1. Representación gráfica de la identidad y las características de VHC.\nNota: Imagen generada mediante ChatGPT (OpenAI, 2026).\nRef. OpenAI. (2026). ChatGPT [Modelo de inteligencia artificial generativa]. https://chatgpt.com/", alt:"Virus de la hepatitis C (VHC): morfología, estructura, hábitat principal, complicaciones y qué lo hace especial"}]},
    {t:"Dinámica de la cadena infecciosa",
     p:"La cadena infecciosa está formada por seis eslabones que explican cómo un agente infeccioso se mantiene y se transmite de una fuente de infección a una persona susceptible. En este caso, del virus de la Hepatitis C (VHC), la transmisión de da principalmente a través del contacto directo con sangre infectada.",
     img:[{src:"img/virus-cadena.webp", fuente:"Figura 2. Representación gráfica de la identidad y las características de VHC.\nNota: Elaboración propia, 2026.", alt:"Cadena infecciosa del virus de la hepatitis C: agente infeccioso, reservorio, puerta de salida, mecanismo de transmisión, puerta de entrada y huésped susceptible, y cómo romper la cadena"}]},
    {t:"Estrategias de virulencia y defensa del microorganismo",
     p:"Importante: El virus de la hepatitis C es un virus, y por tanto no posee las mismas estructuras que las bacterias. No tiene cápsula bacteriana ni produce toxinas bacterianas, es decir, sus capacidades para producir infección vienen determinadas principalmente por las proteínas, la información genética del virus (material genético) y las interacciones que realiza con las células del huésped.",
     img:[{src:"img/virus-virulencia.webp", fuente:"Figura 3. Representación gráfica de estrategias de virulencia y defensa del microorganismo.\nNota: Imagen generada mediante ChatGPT (OpenAI, 2026).\nRef. OpenAI. (2026). ChatGPT [Modelo de inteligencia artificial generativa]. https://chatgpt.com/", alt:"Factores de virulencia del VHC: principales proteínas (E1 y E2, Core, NS3/4A, NS5A y NS5B), evasión de la respuesta inmune y resistencia a los antivirales"}]},
    {t:"Respuesta inmunológica del huésped",
     p:"Cuando el VHC entra en el cuerpo, el sistema inmunitario hace uso de sus mecanismos de defensa tanto innatos como adaptativos para reconocerlo y combatirlo. El problema es que el VHC tiene estrategias que le permiten no ser reconocido por algunos de esos mecanismos y, así, permanecer en el hígado, provocando la infección crónica.",
     img:[{src:"img/virus-respuesta.webp", fuente:"Figura 4. Representación gráfica de la respuesta inmunológica del organismo.\nNota: Imagen generada mediante ChatGPT (OpenAI, 2026).\nRef. OpenAI. (2026). ChatGPT [Modelo de inteligencia artificial generativa]. https://chatgpt.com/", alt:"Respuesta inmunitaria contra el VHC: inmunidad innata y adaptativa, y qué ocurre cuando el virus evade las defensas"}]},
    {t:"Tratamiento",
     p:"La finalidad del tratamiento de la hepatitis C es conseguir eliminar el virus del organismo, con el objetivo de evitar el daño progresivo del hígado y, en consecuencia, el riesgo de sufrir complicaciones la cirrosis o un cáncer hepático. En la actualidad, la infección se trata exclusivamente con los antivirales de acción directa (AAD), que son aquellos fármacos que atacan proteínas concretas del virus de la hepatitis, inhibiendo así su capacidad para multiplicarse.",
     img:[{src:"img/virus-tratamiento.webp", fuente:"Figura 5. Representación gráfica del diagnóstico y tratamiento.\nNota: Imagen generada mediante ChatGPT (OpenAI, 2026).\nRef. OpenAI. (2026). ChatGPT [Modelo de inteligencia artificial generativa]. https://chatgpt.com/", alt:"Tratamiento y cuidados en la hepatitis C: antivirales de acción directa, cuidados complementarios y confirmación de la curación"}]},
    {t:"Rol de enfermería, bioseguridad y prevención de IAAS",
     p:"El profesional de enfermería desempeña un rol esencial en la prevención de las Infecciones Asociadas a la Atención en Salud (IAAS) y en la atención de las personas con el virus de la hepatitis C (VHC). Sus intervenciones tienen como finalidad prevenir la transmisión del virus mediante contacto con sangre contaminada, ofrecer protección al paciente y al personal de salud y proporcionar una atención segura, ética y libre de discriminación.",
     img:[{src:"img/virus-rol-enfermeria.webp", fuente:"Figura 6. Representación gráfica del rol de enfermería.\nNota: Imagen generada mediante ChatGPT (OpenAI, 2026).\nRef. OpenAI. (2026). ChatGPT [Modelo de inteligencia artificial generativa]. https://chatgpt.com/", alt:"Intervenciones del profesional de enfermería y guía de criterios éticos y bioseguridad en hepatitis C"}]},
    {t:"Medida Aplicación en pacientes infectados con VHC",
     img:[{src:"img/virus-medidas.webp", fuente:"Figura 7. Representación gráfica de la medida aplicación en pacientes infectados con VHC.\nNota: Elaboración propia, 2026.", alt:"Tabla de medidas de bioseguridad y su aplicación en pacientes con VHC: higiene de manos, guantes, protección ocular y mascarilla, bata, elementos cortopunzantes, limpieza y desinfección"}]},
    {t:"Manejo de aislamientos en relación al VHC",
     p:"Para la hepatitis C, se deben distinguir las precauciones estándar de los aislamientos adicionales.",
     img:[{src:"img/virus-aislamientos.webp", fuente:"Figura 8. Representación gráfica del manejo de aislamientos en relación al VHC.\nNota: Elaboración propia, 2026.", alt:"Manejo de aislamientos en relación al VHC: estándar, por contacto, por gotas y respiratorio por vía aérea"}]},
    {t:"Criterios éticos en la atención",
     p:"El profesional en enfermería deberá mantener la confidencialidad del diagnóstico, respetar la dignidad y autonomía del paciente, suministrar información precisa y brindar atención sin juzgar. De igual forma, tendrá que guardar privacidad de los datos clínicos e implementar las medidas de bioseguridad sin discriminación alguna.\n\nEn conclusión, el cuidado de los pacientes con infección por el virus de la hepatitis C requiere prestar atención de forma segura y humanizada. La higiene en las manos, las precauciones generales, el manejo seguro de la sangre y de los elementos cortopunzantes son imprescindibles para evitar las IAAS. Dado que el virus de las hepatitis C no se transmite a través de la vía respiratoria, no es necesario el aislamiento por gotas, ni por vía aérea únicamente por esta infección."},
    {t:"Bibliografía", sinpreguntar:true, l:[
      "Centers for Disease Control and Prevention. (2024, 14 de mayo). Viral hepatitis exposure risk among health care providers. https://www.cdc.gov/hepatitis/hcp/populations-settings/health-care-providers.html",
      "Centers for Disease Control and Prevention. (2026a, 2 de noviembre). Clinical overview of hepatitis C. https://www.cdc.gov/hepatitis-c/hcp/clinical-overview/",
      "Centers for Disease Control and Prevention. (2026b, 3 de noviembre). Clinical care of hepatitis C. https://www.cdc.gov/hepatitis-c/hcp/clinical-care/",
      "Hepatitis C virus and molecular mimicry. (2024). International Journal of Molecular Sciences. https://pmc.ncbi.nlm.nih.gov/articles/PMC11280050/",
      "OpenAI. (2026). ChatGPT [Modelo de inteligencia artificial generativa]. https://chatgpt.com/",
      "Organización Mundial de la Salud. (2026, 28 de julio). Hepatitis C. https://www.who.int/es/news-room/fact-sheets/detail/hepatitis-c"]},
    {t:"Podcast", video:"26nkcV3bR5s"}
   ], imagenes:[] },

 { id:"parasito", pestana:"Parásito", grupo:"Parásito", color:"--parasito", arte:"parasito", acordeon:true,
   portada:"https://wwwn.cdc.gov/phil/PHIL_Images/7829/7829_lores.jpg", credito:"CDC / DPDx, ooquistes de Cryptosporidium parvum (PHIL 7829, dominio público)",
   nombre:"Cryptosporidium parvum", lema:"",
   resumen:[["Tipo",""],["Forma infectante",""],["Afecta",""],["Se destaca por",""]],
   bloques:[
    {t:"Identidad y características de la especie",
     p:"Cryptosporidium parvum es un protozoo parásito del filo Apicomplexa que causa criptosporidiosis. Tiene forma esférica, mide entre 3 y 5 µm y afecta principalmente el intestino delgado. Se caracteriza por invadir los enterocitos, reproducirse dentro del huésped y producir autoinfección. Sus genotipos permiten la transmisión entre humanos y animales, especialmente bovinos.",
     img:[{src:"img/parasito-identidad.webp", alt:"Cryptosporidium parvum: taxonomía, ooquistes del parásito y genotipos 1 y 2"}]},
    {t:"Ciclo de vida de Cryptosporidium parvum",
     p:"El ciclo de vida de Cryptosporidium parvum comienza cuando una persona ingiere ooquistes infectantes mediante agua o alimentos contaminados. En el intestino delgado, los ooquistes liberan esporozoítos que invaden los enterocitos y se reproducen. Posteriormente, pasan por una fase asexual y otra sexual, formando nuevos ooquistes que son eliminados por las heces. Algunos ooquistes pueden permanecer dentro del huésped y producir autoinfección, prolongando la enfermedad.",
     img:[{src:"img/parasito-ciclo.webp", fuente:"Referencia: Imagen adaptada y traducida con ayuda de ChatGPT (OpenAI), 2026, a partir del esquema original del CDC.", alt:"Ciclo de vida de Cryptosporidium parvum: hospedadores, etapas del ciclo y vía de transmisión por agua y alimentos"}]},
    {t:"Dinámica de la cadena infecciosa",
     p:"La infección se transmite por vía fecal-oral mediante agua, alimentos o superficies contaminadas. Su reservorio principal incluye bovinos, terneros, otros mamíferos y seres humanos. El parásito sale por las heces, ingresa por la boca y afecta principalmente a niños, viajeros y personas inmunosuprimidas. Su período de incubación es de 1 a 12 días, generalmente 7 días.",
     img:[{src:"img/parasito-cadena.webp", alt:"Cadena infecciosa de Cryptosporidium parvum: agente causal, reservorio, puerta de salida, vía de transmisión, puerta de entrada y huésped susceptible"}]},
    {t:"Estrategias de virulencia y defensa del microorganismo",
     p:"El parásito utiliza organelos secretores para adherirse e invadir las células intestinales. Su ubicación epicelular le proporciona protección parcial frente a las defensas del huésped. Además, puede realizar autoinfección y destruir las microvellosidades intestinales, causando mala absorción y diarrea. Sus ooquistes presentan resistencia al cloro y a varios desinfectantes habituales.",
     img:[{src:"img/parasito-virulencia.webp", alt:"Estrategias de virulencia y defensa de Cryptosporidium parvum: organelos secretores, nicho epicelular, autoinfección, destrucción de microvellosidades y resistencia al cloro y a fármacos"}]},
    {t:"Respuesta inmunológica del huésped",
     p:"El organismo responde mediante la inmunidad innata y adaptativa. Participan macrófagos, monocitos, células dendríticas, linfocitos T y células NK. El interferón gamma (IFN-γ) y los linfocitos T CD4+ son fundamentales para controlar la infección. En personas con VIH y CD4 inferiores a 100 células/µL, las defensas disminuyen y aumenta el riesgo de diarrea crónica grave.",
     img:[{src:"img/parasito-respuesta.webp", alt:"Respuesta inmunológica del huésped frente a Cryptosporidium parvum: inmunidad innata y adaptativa, y correlato clínico en pacientes con VIH"}]},
    {t:"Diagnóstico y tratamiento",
     p:"El diagnóstico se realiza mediante muestras de materia fecal, utilizando tinciones especiales, detección de antígenos o pruebas moleculares como PCR. El tratamiento se basa principalmente en la rehidratación y el soporte nutricional. La nitazoxanida puede utilizarse en algunos pacientes inmunocompetentes. En personas con VIH, la terapia antirretroviral es fundamental para recuperar las defensas. Actualmente no existe vacuna.",
     img:[{src:"img/parasito-tratamiento.webp", fuente:"Referencia: Imagen de elaboración propia con ayuda de ChatGPT (OpenAI), 2026.", alt:"Tratamiento de la criptosporidiosis: medidas generales, tratamiento farmacológico según el huésped y ausencia de vacuna"}]},
    {t:"Rol de enfermería, bioseguridad y prevención de IAAS",
     p:"Enfermería debe vigilar la hidratación, controlar los ingresos y egresos, administrar el tratamiento y educar al paciente y su familia. Se deben aplicar precauciones de contacto, utilizar guantes y bata al manipular heces y realizar limpieza rigurosa de superficies. Es fundamental el lavado de manos con agua y jabón, el consumo de agua segura y la prevención de la contaminación de alimentos para evitar infecciones asociadas a la atención en salud (IAAS).",
     img:[{src:"img/parasito-rol-enfermeria.webp", fuente:"Referencia: Imagen de elaboración propia creada con la asistencia de inteligencia artificial (Gemini, Google), 2026.", alt:"Rol de enfermería, bioseguridad y prevención de IAAS en la criptosporidiosis: intervenciones de enfermería, aislamientos y prevención institucional"}]},
    {t:"Bibliografía", sinpreguntar:true, l:[
      "Centers for Disease Control and Prevention. (2025). Preventing and controlling Crypto at camps. https://www.cdc.gov/cryptosporidium/prevention/preventing-and-controlling-crypto-at-camps.html.",
      "Centers for Disease Control and Prevention. (2025). Preventing and controlling Crypto at childcare facilities. https://www.cdc.gov/cryptosporidium/prevention/preventing-and-controlling-crypto-childcare-facilities.html.",
      "Department of Health, Government of Western Australia. (2026). Cryptosporidiosis. https://www.health.wa.gov.au/Articles/A_E/Cryptosporidiosis.",
      "Merck Manuals. (2024). Criptosporidiosis. https://www.merckmanuals.com/es-us/professional/enfermedades-infecciosas/protozoos-intestinales-y-microsporidias/criptosporidiosis",
      "Saraav, I., & Sibley, L. D. (2023). Dendritic cells and Cryptosporidium: From recognition to restriction. Pathogens, 11(4), 471.",
      "Zhang, Y., Jiang, P., Yin, J., & Zhu, G. (2025). Pathogenicity and virulence of Cryptosporidium. Virulence, 16(1), 2597642.",
      "Cryptosporidiidae. (s. f.). En ScienceDirect Topics. https://www.sciencedirect.com/topics/pharmacology-toxicology-and-pharmaceutical-science/cryptosporidiidae."]},
    {t:"Podcast", video:"yuwauqNMyk8"}
   ], imagenes:[] }
];

const CONCLUSIONES = ["",""];
const BIBLIOGRAFIA = [
  "Centers for Disease Control and Prevention (CDC). (2025, 12 de junio). About Pseudomonas aeruginosa.",
  "Centers for Disease Control and Prevention (CDC). (2024). MDRO Prevention and Control.",
  "Manual MSD. Infecciones por Pseudomonas. https://www.msdmanuals.com/es/hogar/infecciones/infecciones-bacterianas-bacterias-gramnegativas/infecciones-por-pseudomonas",
  "Mucor spp. | Atlas de Identificación micológica. https://share.google/KpCc38eCZOLZeua5d",
  "https://www.msdmanuals.com/es/hogar/infecciones/infecciones-por-hongos-infecciones-f%C3%BAngicas-micosis/mucormicosis",
  "https://www.actasdermo.org/es-aislamiento-mucor-spp-paciente-con-articulo-13003265",
  "Centers for Disease Control and Prevention. (2024, 14 de mayo). Viral hepatitis exposure risk among health care providers. https://www.cdc.gov/hepatitis/hcp/populations-settings/health-care-providers.html",
  "Centers for Disease Control and Prevention. (2026a, 2 de noviembre). Clinical overview of hepatitis C. https://www.cdc.gov/hepatitis-c/hcp/clinical-overview/",
  "Centers for Disease Control and Prevention. (2026b, 3 de noviembre). Clinical care of hepatitis C. https://www.cdc.gov/hepatitis-c/hcp/clinical-care/",
  "Hepatitis C virus and molecular mimicry. (2024). International Journal of Molecular Sciences. https://pmc.ncbi.nlm.nih.gov/articles/PMC11280050/",
  "Organización Mundial de la Salud. (2026, 28 de julio). Hepatitis C. https://www.who.int/es/news-room/fact-sheets/detail/hepatitis-c",
  "Centers for Disease Control and Prevention. (2025). Preventing and controlling Crypto at camps. https://www.cdc.gov/cryptosporidium/prevention/preventing-and-controlling-crypto-at-camps.html.",
  "Centers for Disease Control and Prevention. (2025). Preventing and controlling Crypto at childcare facilities. https://www.cdc.gov/cryptosporidium/prevention/preventing-and-controlling-crypto-childcare-facilities.html.",
  "Department of Health, Government of Western Australia. (2026). Cryptosporidiosis. https://www.health.wa.gov.au/Articles/A_E/Cryptosporidiosis.",
  "Merck Manuals. (2024). Criptosporidiosis. https://www.merckmanuals.com/es-us/professional/enfermedades-infecciosas/protozoos-intestinales-y-microsporidias/criptosporidiosis",
  "Saraav, I., & Sibley, L. D. (2023). Dendritic cells and Cryptosporidium: From recognition to restriction. Pathogens, 11(4), 471.",
  "Zhang, Y., Jiang, P., Yin, J., & Zhu, G. (2025). Pathogenicity and virulence of Cryptosporidium. Virulence, 16(1), 2597642.",
  "Cryptosporidiidae. (s. f.). En ScienceDirect Topics. https://www.sciencedirect.com/topics/pharmacology-toxicology-and-pharmaceutical-science/cryptosporidiidae.",
  "OpenAI. (2026). ChatGPT [Inteligencia artificial generativa] (referencia de las imágenes). https://chatgpt.com/"
];
