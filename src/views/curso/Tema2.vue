<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Descripción de sistemas integrados de gestión'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden.pb-0.pb-md-0

    .row.mb-4
      .col-lg-8
        .bg-color-1.mb-4.p-4
          .row
            .col-md-auto
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema2/1.svg",style="max-width: 90px;", data-aos="zoom-in")
            .col
              p(data-aos="fade-left") Después de haber visto el origen y la evolución de los sistemas integrados de gestión, debemos seguir avanzando con el fin de poder comprender como se ha vuelto importante la integración de los sistemas de gestión puesto que se ha consolidado como una práctica esencial para las organizaciones que desean no solo optimizar sus procesos internos, sino también fortalecer su competitividad en un mercado cada vez más exigente. En un contexto donde la eficiencia y la efectividad son cruciales, las empresas buscan adoptar enfoques que les permitan maximizar sus recursos y al mismo tiempo cumplir con las expectativas de diversas partes interesadas.
        
        p.mb-0(data-aos="fade-left") Existen diversos sistemas de gestión que pueden ser integrados, cada uno de los cuales aporta un conjunto único de beneficios y enfoques, en esta unidad revisaremos los más destacados que son los siguientes:
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema2/2.png",style="max-width: 400px;", data-aos="zoom-in")
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Sistema de Gestión de Calidad (SGC)
    
    p.mb-4(data-aos="fade-left") Lo invitamos a estudiar sobre el SGC:

    .bg-full-width.bg-fondo-slider.mb-4
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure.mb-4.mb-lg-0
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-7
              h5.mb-4 ¿Qué es?
              p Es un enfoque estructurado que permite a las organizaciones gestionar y mejorar sus procesos, productos y servicios de manera sistemática. Este sistema se fundamenta en normas internacionales reconocidas, como la ISO 9001, que proporcionan un marco claro y coherente para asegurar que las prácticas de calidad sean efectivas y eficientes.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure.mb-4.mb-lg-0
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7
              h5.mb-4 Mejora continua
              p Uno de los pilares fundamentales del sistema de gestión de la calidad es la mejora continua. Esto implica que las organizaciones no solo buscan cumplir con los estándares establecidos, sino que también están comprometidas en analizar y optimizar sus procesos para lograr resultados cada vez mejores. La implementación de un SGC permite identificar áreas de mejora, reducir desperdicios, aumentar la eficiencia y, en última instancia, mejorar la calidad del producto o servicio ofrecido.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure.mb-4.mb-lg-0
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7
              h5.mb-4 Satisfacción del cliente
              p Además, el SGC se centra en la satisfacción del cliente, reconociendo que el éxito a largo plazo de cualquier organización depende de su capacidad para cumplir y superar las expectativas de sus clientes. Para lograr esto, las organizaciones deben captar y analizar las necesidades y expectativas del cliente de manera constante, asegurando que sus productos y servicios no solo satisfagan requisitos técnicos, sino que también ofrezcan valor añadido. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure.mb-4.mb-lg-0
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7
              h5.mb-4 Objetivos de calidad
              p La creación de estándares claros y medibles dentro del SGC permite a las organizaciones establecer objetivos de calidad que pueden ser monitoreados y evaluados. Esto no solo ayuda a garantizar la conformidad con las normativas, sino que también fomenta un entorno de transparencia y responsabilidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure.mb-4.mb-lg-0
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7
              h5.mb-4 Lealtad del cliente
              p Además, un SGC efectivo promueve la lealtad del cliente, debido a que los consumidores tienden a confiar en marcas que demuestran un compromiso constante con la calidad y la mejora. Esta lealtad no solo se traduce en repetición de compras, sino también en recomendaciones positivas y en la construcción de una reputación sólida en el mercado.
    
    .row.mb-4
      .col-lg-8
        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          p.mb-0 El Sistema de Gestión de Calidad no solo es una herramienta para asegurar la calidad de los productos y servicios, sino que también es un enfoque estratégico que impulsa la eficiencia operativa, la satisfacción del cliente y la competitividad en el mercado. Al adoptar un SGC basado en normas como la ISO 9001, las organizaciones pueden posicionarse favorablemente en un entorno empresarial cada vez más exigente y dinámico.
        p.mb-0 Así mismo, debemos tener en cuenta que “sin importar la razón detonante, el proceso de diseño, implementación, y el posterior mantenimiento de la ISO 9001, demanda tiempo y recursos valiosos que por lo general son escasos en toda organización.” Vásquez Lema, M. R. (2020). 
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema2/8.png",style="max-width: 400px;", data-aos="zoom-in")
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Sistema de Gestión Ambiental (SGA)
    
    p.mb-4(data-aos="fade-left") Continuemos con el estudio del SGA:

    .row.mb-4
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema2/9.png",style="max-width: 400px;", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="¿En qué se fundamenta?")
            p.mb-4 Se fundamenta en la norma internacional ISO 14001, la cual proporciona un marco sólido para que las organizaciones gestionen sus responsabilidades ambientales de manera efectiva. Este sistema está diseñado específicamente para minimizar el impacto ambiental de todas las actividades, productos y servicios que la organización lleva a cabo, abarcando desde la planificación y el diseño hasta la producción y la distribución.
          .div(titulo="Implementación")
            p.mb-4 La implementación de un SGA permite a las organizaciones no solo cumplir con las regulaciones ambientales vigentes, que son cada vez más estrictas en muchas partes del mundo, sino también prevenir posibles sanciones legales y económicas derivadas de la falta de cumplimiento. Al adoptar un enfoque proactivo en la gestión ambiental, las empresas pueden identificar y mitigar riesgos, lo que se traduce en una mayor sostenibilidad operativa y una reducción de costos a largo plazo.
          .div(titulo="Percepción")
            p.mb-4 Además de los beneficios regulatorios, la adopción de prácticas sostenibles a través de un SGA puede tener un impacto significativo en la percepción pública de la organización. En un mercado donde los consumidores son cada vez más conscientes del medio ambiente y buscan activamente productos y servicios que reflejen sus valores, las empresas que demuestran un compromiso genuino con la sostenibilidad pueden mejorar su imagen de marca y reputación. Esto, a su vez, puede atraer a un segmento de clientes más amplio y leal, que prioriza la responsabilidad social y ambiental en sus decisiones de compra.
          .div(titulo="Mejora continua")
            p.mb-4 La implementación de un SGA también fomenta una cultura de mejora continua dentro de la organización. Al establecer objetivos claros y medir el desempeño ambiental, las organizaciones pueden identificar áreas de mejora y desarrollar estrategias para optimizar sus procesos, reducir el uso de recursos y minimizar los residuos. Este enfoque no solo contribuye a la sostenibilidad ambiental, sino que también puede resultar en beneficios económicos, como la reducción de costos operativos y el aumento de la eficiencia.

    .bg-full-width.bg-color-1.mb-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/10.svg", style="max-width: 88px", data-aos="zoom-in").mx-auto
          .col-lg
            p.mb-0(data-aos="fade-left") Un Sistema de Gestión Ambiental basado en la norma ISO 14001 no solo es una herramienta valiosa para garantizar el cumplimiento de la legislación ambiental, sino que también promueve prácticas sostenibles que mejoran la imagen de la organización y atraen a clientes más conscientes del medio ambiente. Implementar un SGA es, por lo tanto, una inversión estratégica que puede ofrecer dividendos significativos tanto para la empresa como para el planeta.
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Sistema de Gestión de Seguridad y Salud en el Trabajo (SGSST)
    
    p.mb-4(data-aos="fade-left") Ahora, le toca el turno al SGSST:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="¿Qué es?" :icon="require('@/assets/curso/tema2/11.svg')" )
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-2
            h4.mb-4 ¿Qué es?
            p.mb-0 Es un enfoque integral y sistemático que busca promover y garantizar un entorno laboral seguro y saludable para todos los empleados. Este sistema se fundamenta en normas internacionales reconocidas, como la ISO 45001, que establece directrices sobre cómo organizaciones de diferentes tamaños y sectores pueden gestionar de manera efectiva los riesgos relacionados con la seguridad y la salud en el trabajo
        
          .col-lg-5.order-1
            figure.mb-4.mb-lg-0(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/12.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Implementación" :icon="require('@/assets/curso/tema2/13.svg')" )
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-2
            h4.mb-4 Implementación
            p.mb-0 La implementación del SGSST no solo se centra en la identificación y mitigación de riesgos, sino que también aboga por la creación de una cultura de seguridad entre todos los miembros de la organización. Esto implica la capacitación constante de los empleados, la promoción de prácticas seguras, y la participación activa de todos los niveles de la jerarquía laboral en la identificación de peligros y la toma de decisiones relacionadas con la seguridad. Al fomentar una cultura de seguridad proactiva, se busca que cada empleado se sienta responsable de su propia seguridad y la de sus compañeros.
        
          .col-lg-5.order-1
            figure.mb-4.mb-lg-0(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/14.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Impacto" :icon="require('@/assets/curso/tema2/15.svg')" )
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-2
            h4.mb-4 Impacto
            p.mb-0 Un entorno laboral seguro no solo protege a los empleados de lesiones y enfermedades, sino que también tiene un impacto positivo en la organización en su conjunto. La reducción de accidentes y enfermedades laborales se traduce en menores costos asociados a la atención médica, indemnizaciones, y pérdida de tiempo laboral. Estos ahorros económicos pueden ser significativos, especialmente en industrias donde los riesgos son más elevados. Además, un ambiente de trabajo seguro contribuye a mejorar la moral y la satisfacción de los empleados, lo que a su vez puede aumentar la retención del personal y reducir la rotación.
        
          .col-lg-5.order-1
            figure.mb-4.mb-lg-0(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/16.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Productividad" :icon="require('@/assets/curso/tema2/17.svg')" )
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-2
            h4.mb-4 Productividad
            p.mb-0 La productividad también se ve beneficiada por la implementación de un SGSST efectivo. Cuando los empleados se sienten seguros y valorados, son más propensos a ser productivos y a comprometerse con los objetivos de la empresa. La reducción del ausentismo y la mejora en la eficiencia operativa son algunos de los resultados directos de un sistema que prioriza la seguridad y la salud en el trabajo.
        
          .col-lg-5.order-1
            figure.mb-4.mb-lg-0(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/18.png', alt='')
    
    .row.mb-4
      .col-lg-8
        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          p.mb-0 El Sistema de Gestión de Seguridad y Salud en el Trabajo (SGSST) es esencial no solo para cumplir con las normativas legales y estándares internacionales, sino también para construir un lugar de trabajo en el que los empleados puedan desempeñarse de manera óptima y segura. La inversión en la seguridad y la salud laboral es, sin duda, una inversión en el futuro de la organización, que se traduce en beneficios tangibles tanto para los trabajadores como para la empresa en su conjunto.
        p.mb-0 Acabamos de estudiar los tres sistemas de gestión que tienen una gran relevancia en las compañías, dado que son los más usados, pero conviene destacar que existen otros sistemas de gestión que sin duda alguna también se pueden integrar y que a lo largo del tiempo presente están tomando una gran importancia y estos son los siguientes:
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema2/19.png",style="max-width: 400px;", data-aos="zoom-in")

    
    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/20.svg', alt='', style="max-width: 934px;").mx-auto

                .bg-color-white.box-shadow.p-3(style="border-radius: 10px;" x="0%" y="83%" numero="+")
                  h5 Sistema de Gestión de la Seguridad de la Información
                  p Incluye normativas como ISO 27001, y se enfoca en la protección de la información y la gestión de los riesgos asociados a la seguridad de los datos. En un mundo cada vez más digitalizado, la gestión adecuada de la información no solo protege a la organización de posibles brechas de seguridad, sino que también fortalece la confianza de los clientes y otras partes interesadas.
                .bg-color-white.box-shadow.p-3(style="border-radius: 10px;" x="100%" y="83%" numero="+")
                  h5 Sistema de Gestión de la Energía (SGEn)
                  p Utilizando la norma ISO 50001, este sistema tiene como objetivo mejorar la eficiencia energética y reducir costos asociados al consumo de energía. La gestión eficiente de la energía no solo contribuye a la sostenibilidad de la organización, sino que también puede resultar en ahorros significativos que impactan positivamente en la rentabilidad.
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/42932" target="_blank" rel="noopener noreferrer") Díaz Domínguez, L. F. & Navarro Huerga, M. A. (2014). Sistemas de Gestión Integrada para las Empresas (ERP): ( ed.). Editorial Universidad de Alcalá. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=W-dignKOzbo" target="_blank" rel="noopener noreferrer") HAZLO TU MISMO. (2023, 8 marzo). Importancia de las Normas ISO 14001-9001-45001-19011- Definición y aplicaciones en la realidad

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
    
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
