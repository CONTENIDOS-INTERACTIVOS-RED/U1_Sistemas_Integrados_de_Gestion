<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'Ventajas de implementar un sistema integrado de gestión'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4(data-aos="fade-left") La integración de sistemas de gestión en las organizaciones no solo representa un avance técnico, sino que también ofrece una serie de ventajas significativas que pueden transformar la manera en que operan. Los beneficios que aporta un sistema integrado de gestión son diversos y dependen de cada organización, Calso Morales, N. y Pardo Álvarez, J. M. (2018). 

    .row.mb-4
      .col-lg-8
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row
            .col-md-auto
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema3/2.svg",style="max-width: 90px;", data-aos="zoom-in")
            .col(data-aos="fade-left")
              p.mb-0 Adicionalmente, la norma ISO 9001, 14001 y 45001, especifica los requisitos para un sistema de gestión, de tal manera que todos sus requisitos son genéricos y aplicables a cualquier organización, sin importar su tipo o tamaño, o los productos y servicios suministrados, González Gaya, C. y Manzanares Cañizares, C. (2020).
        p.mb-4(data-aos="fade-left") A continuación, se amplían cada uno de los aspectos mencionados, proporcionando un panorama más detallado sobre cómo esta integración impacta positivamente en el entorno organizacional:

        h2.mb-4(data-aos="fade-left") Eficiencia operativa

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          p.mb-0 La eficiencia operativa es un pilar fundamental para el éxito de cualquier organización en el entorno competitivo actual. La integración de sistemas de gestión se presenta como una solución clave, permitiendo la eliminación de redundancias en procesos y recursos. 
        
        p.mb-0 Esta optimización va más allá de la simple reducción de tareas duplicadas; se traduce en una mejora significativa en el flujo de trabajo y en la capacidad de respuesta ante cambios en el mercado.

      .col-lg-4
        figure.d-none.d-lg-block
          img.mx-auto(src="@/assets/curso/tema3/1.png",style="max-width: 400px;", data-aos="zoom-in")
    
    .row.mb-4
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema3/3.png",style="max-width: 400px;", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Primero")
            p.mb-4 Al consolidar procesos y sistemas, las organizaciones pueden automatizar tareas rutinarias que, a menudo, consumen un tiempo valioso y recursos considerables. Esta automatización no solo libera a los empleados de actividades repetitivas, sino que también les permite enfocar su energía y habilidades en actividades estratégicas que aportan un mayor valor a la empresa. Por ejemplo, en lugar de invertir horas en la recopilación de datos o la elaboración de informes manuales, el personal puede concentrarse en la innovación, el desarrollo de nuevos productos o la mejora de la atención al cliente.
          .div(titulo="Segundo")
            p.mb-4 Además, un sistema de gestión integrado facilita la colaboración entre diferentes departamentos, eliminando silos de información que pueden obstaculizar el crecimiento y la eficiencia. Cuando todos los equipos operan con la misma información y en la misma plataforma, se fomenta una comunicación más fluida y se agilizan los procesos de toma de decisiones. Esto resulta en una operación más ágil y en una mayor capacidad para adaptarse rápidamente a las demandas del cliente y a las condiciones cambiantes del entorno.
          .div(titulo="Tercero")
            p.mb-4 La capacidad de respuesta es crucial en un mercado en constante evolución. Las organizaciones que adoptan un enfoque proactivo hacia la gestión, tal como lo establece el enfoque del sistema, están mejor preparadas para anticipar y reaccionar ante las tendencias emergentes. Este enfoque les permite no solo sobrevivir, sino también prosperar, al identificar oportunidades y mitigar riesgos de manera más efectiva.
    
    .bg-full-width.bg-color-1.mb-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/4.svg", style="max-width: 88px", data-aos="zoom-in").mx-auto
          .col-lg
            p.mb-0(data-aos="fade-left") Por lo tanto, invertir en la integración de sistemas de gestión no es meramente una cuestión de eficiencia, sino que se convierte en una estrategia esencial para la sostenibilidad y el crecimiento a largo plazo. Las empresas que comprenden y aplican estos principios están en una posición privilegiada para liderar sus sectores, ofreciendo un valor excepcional a sus clientes y adaptándose a los desafíos del futuro con confianza y agilidad.
    
    .row.mb-4
      .col-lg-8
        h2.mb-4(data-aos="fade-left") Mejora en la toma de decisiones
        p.mb-5(data-aos="fade-left") La disponibilidad de información consolidada y accesible desde diferentes áreas de la organización representa un avance significativo en la manera en que se gestionan las empresas en la actualidad.
        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Esta accesibilidad no solo facilita la recopilación de datos, sino que también permite a los líderes empresariales obtener una visión holística del desempeño organizacional. Al integrar datos de diversas fuentes, como finanzas, recursos humanos, operaciones y marketing, así como de sistemas de gestión de calidad, seguridad y salud en el trabajo, y medio ambiente, la alta dirección puede comprender mejor cómo cada componente de la organización interactúa y contribuye al logro de los objetivos estratégicos.
        p.mb-0 La disponibilidad de información consolidada y accesible desde diferentes áreas de la organización representa un avance significativo en la manera en que se gestionan las empresas en la actualidad. Esta accesibilidad no solo facilita la recopilación de datos, sino que también permite a los líderes empresariales obtener una visión holística del desempeño organizacional. 
      .col-lg-4
        figure.d-none.d-lg-block
          img.mx-auto(src="@/assets/curso/tema3/5.png",style="max-width: 400px;", data-aos="zoom-in")
    
    .row.mb-4
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema3/6.png",style="max-width: 400px;", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Al integrar datos de diversas fuentes, como finanzas, recursos humanos, operaciones y #[em marketing], así como de sistemas de gestión de calidad, seguridad y salud en el trabajo, y medio ambiente, la alta dirección puede comprender mejor cómo cada componente de la organización interactúa y contribuye al logro de los objetivos estratégicos.
        
        p.mb-4 Este panorama integral empodera a la alta dirección para tomar decisiones más informadas y estratégicas. Por ejemplo, al analizar información de ventas junto con datos de satisfacción del cliente y métricas de calidad, los líderes pueden identificar áreas de mejora en el producto o servicio que podrían potenciar aún más los ingresos y garantizar el cumplimiento de las normativas de seguridad y medio ambiente. Asimismo, la capacidad de visualizar datos en tiempo real permite a los ejecutivos reaccionar rápidamente ante cambios en el mercado o en el comportamiento del consumidor, asegurando que la organización se mantenga ágil y competitiva.

        p.fw-bold La integración de sistemas de gestión:
    
    .row.mb-4
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Primero")
            p.mb-4 Permite una mejor identificación de riesgos y oportunidades relacionados con la salud y seguridad en el trabajo y el impacto ambiental, lo cual es crucial en el contexto empresarial actual. Con datos precisos y actualizados, los líderes tienen la oportunidad de identificar patrones y tendencias que de otro modo podrían pasar desapercibidos en un enfoque más tradicional de toma de decisiones. Esto incluye el reconocimiento de comportamientos de compra de los clientes, la identificación de costos operativos innecesarios, la detección de oportunidades emergentes en el mercado, y la evaluación del cumplimiento de estándares de calidad y sostenibilidad. Al aprovechar estas percepciones, las empresas pueden no solo optimizar sus operaciones actuales, sino también anticiparse a las necesidades futuras y adaptarse proactivamente a las dinámicas cambiantes del entorno empresarial.
          .div(titulo="Segundo")
            p.mb-4 Además, un enfoque basado en datos minimiza el riesgo de decisiones erróneas, porque las decisiones se fundamentan en un análisis riguroso de la información. En lugar de basarse en suposiciones o en la intuición, los líderes pueden apoyarse en métricas concretas y en análisis predictivos que les permitan evaluar el impacto potencial de sus decisiones antes de implementarlas. Esto es particularmente crucial en un mundo empresarial donde la velocidad y la precisión son esenciales para el éxito. Al reducir la incertidumbre asociada con la toma de decisiones, las organizaciones no solo aumentan su eficiencia operativa, sino que también mejoran su capacidad para innovar y crecer en un mercado competitivo, asegurando al mismo tiempo el bienestar de sus empleados y la sostenibilidad ambiental.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema3/7.png",style="max-width: 400px;", data-aos="zoom-in")
    
    .bg-full-width.bg-color-1.mb-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/4.svg", style="max-width: 88px", data-aos="zoom-in").mx-auto
          .col-lg
            p.mb-0(data-aos="fade-left") La mejora en la toma de decisiones, facilitada por la disponibilidad de información consolidada y accesible, y la integración de sistemas de gestión de calidad, seguridad y salud en el trabajo, y medio ambiente, no solo transforma la forma en que las empresas operan, sino que también establece un nuevo estándar de liderazgo basado en la evidencia. Esta transformación no solo beneficia a la alta dirección, sino que también tiene repercusiones positivas en toda la organización, fomentando una cultura de transparencia y colaboración que puede impulsar el rendimiento y la sostenibilidad a largo plazo.

    h2.mb-4(data-aos="fade-left") Reducción de costos 

    p.mb-4(data-aos="fade-left") La integración de sistemas de gestión representa una estrategia clave para la modernización y optimización de las operaciones dentro de una organización. Al simplificar procesos y reducir duplicidades, esta integración no solo facilita la fluidez en la información, sino que también puede llevar a una disminución significativa de los costos operativos. Esto se traduce en una gestión más eficiente de los recursos disponibles, permitiendo a las empresas operar de manera más ágil y competitiva en un mercado cada vez más exigente.

    .row.mb-4
      .col-lg-4.mb-4
        .bg-color-3.p-4.border-radius-1.h-100.align-content-center(data-aos="fade-left")
          p.mb-0 La reducción de costos operativos tiene un impacto directo en la rentabilidad de la organización. Con menores gastos, se amplía el margen de ganancias, lo que a su vez puede resultar en una mayor estabilidad financiera. Este ahorro no es solo un alivio momentáneo; también permite a las empresas planificar a largo plazo, aumentando su capacidad para afrontar imprevistos y fluctuaciones del mercado.
          figure
            img.ms-auto(src="@/assets/curso/tema3/8.svg",style="max-width: 100px;", data-aos="zoom-in")
      .col-lg-4.mb-4
        figure
          img.mx-auto(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      .col-lg-4.mb-4
        .bg-color-1.p-4.border-radius-1.h-100.align-content-center(data-aos="fade-left")
          p.mb-0 Además, al liberar recursos que anteriormente se destinaban a cubrir gastos innecesarios o redundantes, las organizaciones pueden redirigir estas partidas hacia áreas críticas que son fundamentales para su crecimiento y sostenibilidad. Por ejemplo, la inversión en investigación y desarrollo se convierte en una prioridad. Esta área es esencial para la innovación de productos y servicios, y su fortalecimiento puede resultar en nuevas oportunidades de mercado y una ventaja competitiva significativa.
    
    p.mb-5(data-aos="fade-left") Asimismo, la capacitación de empleados es otro ámbito en el que las organizaciones pueden beneficiarse de la reducción de costos. Invertir en la formación y desarrollo del personal no solo mejora las habilidades y competencias del equipo, sino que también fomenta un ambiente de trabajo más motivador y comprometido. Empleados bien capacitados son más productivos y están mejor preparados para enfrentar los desafíos del entorno laboral actual.

    h2.mb-4(data-aos="fade-left") Cumplimiento normativo

    p.mb-4(data-aos="fade-left") En un entorno empresarial cada vez más regulado, donde las normativas y regulaciones evolucionan constantemente, el cumplimiento normativo se ha convertido en una prioridad estratégica para las organizaciones. La integración de sistemas de gestión no solo facilita este cumplimiento, sino que también lo transforma en una ventaja competitiva. Al adoptar un marco común de gestión, las empresas pueden estandarizar procedimientos en todas sus áreas operativas, lo que permite una ejecución más coherente y eficiente de las políticas internas y externas.

    .row.mb-4
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema3/10.png",style="max-width: 400px;", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Primero")
            p.mb-4 Esta estandarización no solo contribuye a que se sigan las mejores prácticas en la gestión, sino que también asegura que todas las partes involucradas tengan un entendimiento claro de las normativas que deben cumplir. Al implementar procesos claros y documentados, las organizaciones pueden minimizar las ambigüedades y confusiones que a menudo surgen en entornos complejos, reduciendo así el riesgo de incumplimientos inadvertidos que pueden resultar en sanciones y multas significativas.
          .div(titulo="Segundo")
            p.mb-4 Además, el cumplimiento normativo no se limita únicamente a evitar penalizaciones. Tiene un impacto positivo en la reputación de la organización ante sus diversas partes interesadas, incluidos clientes, socios comerciales y reguladores. Un compromiso claro con la ética y la responsabilidad no solo genera confianza y lealtad entre los clientes, sino que también posiciona a la empresa como un actor responsable en su sector. Esto puede traducirse en oportunidades comerciales, acceso a nuevos mercados y alianzas estratégicas, dado que muchas empresas prefieren asociarse con aquellas que demuestran un fuerte compromiso con las normativas y la transparencia.
          .div(titulo="Tercero")
            p.mb-4 Asimismo, la integración de sistemas de gestión permite a las organizaciones mantenerse actualizadas ante cambios regulatorios y adaptarse rápidamente a nuevas exigencias. Esto es fundamental en un mundo donde la agilidad y la capacidad de respuesta son esenciales para el éxito. Mediante la implementación de tecnologías avanzadas y análisis de datos, las empresas pueden monitorear continuamente su cumplimiento y realizar auditorías internas que aseguren que se están cumpliendo todas las normativas vigentes.

    .bg-full-width.bg-color-1.mb-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/11.svg", style="max-width: 88px", data-aos="zoom-in").mx-auto
          .col-lg
            p.mb-0(data-aos="fade-left") El cumplimiento normativo, potenciado por la integración de sistemas de gestión, no solo es una obligación legal, sino que se ha convertido en un elemento clave para la sostenibilidad y el crecimiento empresarial. Las organizaciones que adoptan un enfoque proactivo hacia el cumplimiento no solo protegen su operación, sino que también construyen una reputación sólida y un futuro más prometedor en un mercado cada vez más desafiante.
    
    h2.mb-4(data-aos="fade-left") Mejora en la satisfacción del cliente

    .row.mb-4
      .col-lg-8
        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          p.mb-0 La alineación de los objetivos de calidad, medio ambiente, y seguridad y salud en el trabajo a través de un enfoque integrado se ha convertido en un factor crucial para el éxito empresarial en el entorno competitivo actual. Esta estrategia no solo permite a las organizaciones cumplir con los requisitos normativos y las expectativas del mercado, sino que también les brinda la oportunidad de superar dichas expectativas, estableciendo un nuevo estándar de excelencia.
        p.mb-0 Al integrar estos objetivos, las empresas pueden crear sinergias que potencian sus capacidades operativas. Por ejemplo, al adoptar prácticas sostenibles que minimizan el impacto ambiental, no solo se protege el planeta, sino que también se atrae a un segmento creciente de consumidores que valoran la responsabilidad social y ambiental. Asimismo, al priorizar la seguridad y salud en el trabajo, se fomenta un ambiente laboral más seguro y saludable, lo que se traduce en una mayor productividad y satisfacción de los empleados.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema3/12.png",style="max-width: 400px;", data-aos="zoom-in")

    .row.mb-4
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema3/13.png",style="max-width: 400px;", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-4.mb-4(data-aos="fade-left")  
          p Este enfoque holístico genera productos y servicios que son el resultado de un compromiso genuino con la calidad y la excelencia. La atención al detalle en cada uno de estos aspectos se traduce en una experiencia del cliente superior. Cuando los consumidores perciben que una empresa no solo se preocupa por sus necesidades, sino que también actúa de manera responsable y ética, es más probable que desarrollen lealtad hacia la marca.
        
        p.mb-4 Además, una mayor satisfacción del cliente tiende a generar recomendaciones positivas, que son uno de los medios más efectivos de marketing. Los clientes satisfechos se convierten en embajadores de la marca, compartiendo sus experiencias positivas con amigos, familiares y en plataformas digitales, lo que a su vez puede atraer a nuevos clientes. Este ciclo de lealtad y recomendación no solo contribuye a la reputación de la empresa, sino que también impulsa un crecimiento sostenible a largo plazo.

    .bg-full-width.bg-color-1.mb-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/14.svg", style="max-width: 88px", data-aos="zoom-in").mx-auto
          .col-lg
            p.mb-0(data-aos="fade-left") En conclusión, la mejora en la satisfacción del cliente a través de la alineación de objetivos en calidad, medio ambiente y seguridad y salud en el trabajo es un enfoque estratégico que no solo beneficia a los consumidores, sino que también fortalece la posición de las organizaciones en el mercado. Al comprometerse con estos principios, las empresas no solo se preparan para enfrentar los desafíos del futuro, sino que también establecen las bases para un crecimiento continuo y responsable.
    
    h2.mb-4(data-aos="fade-left") Cultura organizacional

    p.mb-4(data-aos="fade-left") La implementación de un sistema de gestión integrado es un factor clave para el desarrollo y fortalecimiento de una cultura organizacional más robusta y cohesionada. Este tipo de sistemas, que integran diferentes áreas y procesos dentro de la organización, no solo optimizan la eficiencia operativa, sino que también promueven un ambiente de colaboración y comunicación abierta entre todos los niveles de la jerarquía laboral.

    .row.mb-4
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Primero")
            p.mb-4 Al involucrar a todos los empleados en la comprensión de la importancia de estos sistemas, se fomenta un sentido de pertenencia y responsabilidad compartida que es fundamental para el éxito de cualquier organización. Cuando los trabajadores se sienten parte activa del proceso y comprenden cómo sus contribuciones individuales impactan en los objetivos generales de la empresa, se genera un compromiso más profundo hacia su trabajo y hacia la organización en su conjunto.
          .div(titulo="Segundo")
            p.mb-4 Además, una cultura organizacional fuerte no solo motiva a los empleados, sino que también promueve la participación activa en iniciativas de mejora continua. Esto implica que los empleados no solo son receptores de políticas y procedimientos, sino que también se convierten en agentes de cambio, capaces de identificar áreas de mejora y proponer soluciones innovadoras. Esta proactividad es esencial para adaptarse a un entorno empresarial en constante evolución, donde la capacidad de respuesta y la agilidad son determinantes del éxito.
          .div(titulo="Tercero")
            p.mb-4 El fomento de una cultura organizacional sólida también se traduce en una mayor retención de talento, puesto que los empleados satisfechos y comprometidos son menos propensos a buscar oportunidades en otras organizaciones. Asimismo, una cultura positiva puede mejorar la imagen corporativa y atraer a nuevos talentos, lo que es vital en un mercado laboral competitivo.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema3/15.png",style="max-width: 400px;", data-aos="zoom-in")

    .bg-full-width.bg-color-1.mb-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/16.svg", style="max-width: 88px", data-aos="zoom-in").mx-auto
          .col-lg
            p.mb-0(data-aos="fade-left") La implementación de un sistema de gestión integrado no solo es una estrategia operativa, sino que también es un pilar fundamental para cultivar una cultura organizacional que impulse el éxito a largo plazo. Al empoderar a los empleados y alentarlos a contribuir activamente, se crea un ciclo virtuoso de mejora continua que beneficia a todos en la organización, desde la alta dirección hasta el personal de base. Este enfoque integral es, sin duda, una inversión en el futuro de la empresa y su capacidad para enfrentar los desafíos del mercado.
    
    h2.mb-4(data-aos="flip-up") Sostenibilidad

    p.mb-4(data-aos="fade-left") La sostenibilidad es un concepto que ha cobrado una relevancia creciente en el mundo empresarial actual, donde las organizaciones enfrentan la presión de operar de manera responsable y ética. La integración de sistemas de gestión ambiental (SGA), sistemas de gestión de calidad (SGC) y sistemas de gestión de seguridad y salud en el trabajo (SGSST) puede tener un impacto significativo en la sostenibilidad a largo plazo de cualquier organización. Esta integración no solo busca mejorar la eficiencia operativa, sino que también establece un marco que permite a las empresas abordar de manera holística los retos que presentan los ámbitos ambiental, económico y social.

    .bg-full-width.bg-fondo-slider.mb-4
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure.mb-4.mb-lg-0
                img(src="@/assets/curso/tema3/17.png")
            .col-lg-7
              h5.mb-4 Primero
              p Al equilibrar los objetivos económicos con los ambientales, las organizaciones no solo contribuyen activamente a la protección del planeta, sino que también promueven el bienestar de sus trabajadores. La implementación de prácticas que priorizan la sostenibilidad puede resultar en un entorno laboral más seguro y saludable, lo cual es fundamental para mantener la motivación y el compromiso de los empleados. Un personal que trabaja en un ambiente que valora la salud y el bienestar, tiende a ser más productivo, lo que a su vez puede traducirse en un mejor desempeño general de la organización.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure.mb-4.mb-lg-0
                img(src="@/assets/curso/tema3/18.png")
            .col-lg-7
              h5.mb-4 Segundo
              p Además, el creciente interés de los consumidores por la sostenibilidad ha llevado a que muchos de ellos tomen decisiones de compra más conscientes. Al adoptar prácticas sostenibles, las organizaciones pueden no solo satisfacer esta demanda, sino también diferenciarse en un mercado cada vez más competitivo. Los consumidores están dispuestos a apoyar a empresas que demuestran un compromiso genuino con la sostenibilidad, lo que puede traducirse en una lealtad de marca más fuerte y en una base de clientes más amplia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure.mb-4.mb-lg-0
                img(src="@/assets/curso/tema3/19.png")
            .col-lg-7
              h5.mb-4 Tercero
              p La adopción de prácticas sostenibles también puede abrir nuevas oportunidades de negocio. Innovar en productos y servicios que sean respetuosos con el medio ambiente no solo responde a una demanda creciente, sino que puede posicionar a la organización como líder en su sector. Esto puede incluir la utilización de tecnologías limpias, la implementación de procesos de producción más eficientes o el desarrollo de productos reciclables o biodegradables. Todas estas iniciativas no solo son beneficiosas para el medio ambiente, sino que también pueden resultar en ahorros significativos a largo plazo al reducir costos operativos y minimizar el desperdicio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure.mb-4.mb-lg-0
                img(src="@/assets/curso/tema3/20.png")
            .col-lg-7
              h5.mb-4 Cuarto
              p Asimismo, fortalecer la posición competitiva en el mercado requiere una visión a largo plazo. Las organizaciones que integran SGA, SGC y SGSST están mejor preparadas para anticipar y adaptarse a los cambios normativos y a las expectativas de los #[em stakeholders], lo que les permite no solo cumplir con las regulaciones actuales, sino también liderar el camino hacia un futuro más sostenible. Esto puede incluir iniciativas como la reducción de la huella de carbono, la gestión eficiente de los recursos naturales y la promoción de la responsabilidad social corporativa.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure.mb-4.mb-lg-0
                img(src="@/assets/curso/tema3/21.png")
            .col-lg-7
              h5.mb-4 Quinto
              p La integración de sistemas de gestión ambiental, de calidad y de seguridad y salud en el trabajo es fundamental para lograr la sostenibilidad a largo plazo de las organizaciones. Al adoptar un enfoque equilibrado que considere tanto los beneficios económicos como los ambientales y sociales, las empresas no solo se posicionan favorablemente en el mercado, sino que también contribuyen a un futuro más sostenible para el planeta y sus habitantes. La sostenibilidad no es solo una responsabilidad, sino una oportunidad para innovar, crecer y prosperar en un mundo que valora cada vez más la conciencia ambiental y el bienestar social.
    
    .row.align-items-center
      .col-lg-8
        p.mb-4(data-aos="fade-left") Con todo lo visto anteriormente, nos hemos podido dar cuenta, que la integración de sistemas de gestión representa una oportunidad invaluable para que las organizaciones optimicen sus operaciones, mejoren la toma de decisiones, reduzcan costos y cumplan con las normativas, al tiempo que fomentan la satisfacción del cliente, construyen una cultura organizacional sólida y contribuyen a un futuro más sostenible. Estas ventajas no solo beneficiarán a la organización en sí, sino que también tendrán un impacto positivo en la comunidad y el entorno en el que opera.
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 La integración de sistemas de gestión no solo optimiza los procesos internos, sino que también potencia la capacidad de la organización para adaptarse a un entorno en constante cambio. Este enfoque integral no solo mejora el rendimiento general, sino que también refuerza la reputación de la organización en el mercado, posicionándose como un líder en su sector y un modelo a seguir en prácticas responsables y sostenibles. Al adoptar esta estrategia, las organizaciones están mejor preparadas para enfrentar los desafíos del futuro y aprovechar las oportunidades que surgen en un mundo dinámico y en constante evolución.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema3/22.png",style="max-width: 400px;", data-aos="zoom-in")

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/85821" target="_blank" rel="noopener noreferrer") Santana Pascual, K. (2010). Diseño e implantación del sistema integrado de gestión calidad, medio ambiente y seguridad y salud del trabajo: ( ed.). D - Instituto Superior Politécnico José Antonio Echeverría. CUJAE. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=JlTtJK7fMok" target="_blank" rel="noopener noreferrer") pascualbravovirtual. (2021, 8 junio). MOOC INDUCCIÓN Módulo 3 Sistema de Gestión Integral

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Sistemas integrados de gestión',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el objetivo principal de la integración de sistemas de gestión en las organizaciones?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Incrementar el número de empleados',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Garantizar la sostenibilidad y la eficiencia operativa',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Reducir la carga fiscal',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Aumentar la producción sin límites',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué enfoque se destaca como fundamental en la implementación de sistemas integrados de gestión?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Enfoque individual',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Enfoque sistémico',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Enfoque de reducción de costos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Enfoque de marketing',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes sistemas de gestión está relacionado con la gestión de la calidad?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'ISO 14001',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'ISO 45001',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'ISO 9001',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'ISO 50001',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de los siguientes sistemas de gestión está relacionado con la gestión de la calidad?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'ISO 14001',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'ISO 45001',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'ISO 9001',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'ISO 50001',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué elemento se considera clave en la gestión basada en riesgos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Anticiparse a posibles contingencias',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Aumentar la producción',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Reducir la capacitación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las regulaciones',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
