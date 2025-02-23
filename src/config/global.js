export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad:
      'Integración de los sistemas de gestión y la gestión integral',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Integración de los sistemas de gestión y la gestión integral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Fundamentación, orígenes y evolución de los sistemas de gestión y su evolución',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Descripción de sistemas integrados de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Sistema de Gestión de Calidad (SGC)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Sistema de Gestión Ambiental (SGA)',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Sistema de Gestión de Seguridad y Salud en el Trabajo (SGSST)',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ventajas de implementar un sistema integrado de gestión',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Otero Mateo, M. Pórtela Núñez, J. M. & Pastor Fernández, A. (2013). <em>Sistemas integrados de gestión:</em> ( ed.). Servicio de Publicaciones de la Universidad de Cádiz.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/33897?page=1',
    },
    {
      referencia:
        'Vásquez Lema, M. R. (2020). <em>Conociendo los Principios de Gestión ISO 9001</em>: ( ed.). El Cid Editor.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/164539?page=9',
    },
    {
      referencia:
        'Cortés, J. M. (2017). <em>Sistemas de gestión de calidad (ISO 9001:2015):</em> ( ed.). Editorial ICB.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/56053',
    },
    {
      referencia:
        'Navas Cuenca, E. (Coord.). (2016). <em>Gestión y evaluación medioambiental (ISO 14001:2015):</em> ( ed.). Editorial ICB.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/113211',
    },
    {
      referencia:
        'González Gaya, C. & Manzanares Cañizares, C. (2020). <em>Sistemas de Gestión de la Calidad ISO 9001: guía de aplicación:</em> ( ed.). UNED - Universidad Nacional de Educación a Distancia. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/162883?page=15',
    },
    {
      referencia:
        'Calso Morales, N. & Pardo Álvarez, J. M. (2018). <em>Guía práctica para la integración de sistemas de gestión. ISO 9001, ISO 14001 e ISO 45001:</em> ( ed.). AENOR - Asociación Española de Normalización y Certificación.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/53626?page=27',
    },
  ],
  glosario: [
    {
      termino: 'Calidad Total',
      significado:
        'Enfoque de gestión que busca la mejora continua de procesos, productos y servicios, involucrando a todos los niveles de la organización.',
    },
    {
      termino: 'Cumplimiento Normativo',
      significado:
        'Adopción y seguimiento de regulaciones y estándares legales aplicables a una organización.',
    },
    {
      termino: 'Cultura Organizacional',
      significado:
        'Conjunto de valores, creencias y comportamientos que comparten los miembros de una organización, influyendo en su funcionamiento y éxito.',
    },
    {
      termino: 'Desarrollo Tecnológico',
      significado:
        'Progreso en la creación y aplicación de tecnologías que impactan la forma en que las organizaciones operan y compiten.',
    },
    {
      termino: 'Eficiencia Operativa',
      significado:
        'Capacidad de una organización para optimizar sus procesos y recursos, mejorando su rendimiento y competitividad.',
    },
    {
      termino: 'Enfoque Holístico',
      significado:
        'Perspectiva que considera todos los aspectos de un sistema o problema, en lugar de abordarlos de manera aislada.',
    },
    {
      termino: 'Gestión Basada en Riesgos',
      significado:
        'Enfoque que identifica, evalúa y prioriza riesgos, estableciendo planes de acción para mitigarlos.',
    },
    {
      termino: 'Gestión Integral',
      significado:
        'Estrategia que busca la cohesión y alineación de diferentes áreas y procesos dentro de una organización.',
    },
    {
      termino: 'Gestión Integrada de Sistemas',
      significado:
        'Combinación de diferentes sistemas de gestión (calidad, ambiental, seguridad) en un marco único para mejorar la eficiencia.',
    },
    {
      termino: 'Indicadores de Desempeño',
      significado:
        'Métricas utilizadas para evaluar la eficacia y eficiencia de procesos y alcanzar objetivos organizacionales.',
    },
    {
      termino: 'Mejora Continua',
      significado:
        'Proceso sistemático de identificar y realizar mejoras en los procesos, productos y servicios de una organización.',
    },
    {
      termino: 'Normas ISO',
      significado:
        'Estándares internacionales que establecen directrices y requisitos para la gestión de calidad, medio ambiente, seguridad, entre otros.',
    },
    {
      termino: 'Sistemas de Gestión de Calidad',
      significado:
        'Enfoque que permite a las organizaciones gestionar y mejorar la calidad de sus productos y servicios.',
    },
    {
      termino: 'Sistemas de Gestión Ambiental',
      significado:
        'Enfoque que permite a las organizaciones gestionar su impacto ambiental y cumplir con regulaciones ambientales.',
    },
    {
      termino: 'Sistemas de Gestión de Seguridad y Salud en el Trabajo',
      significado:
        'Enfoque que busca promover y garantizar un entorno laboral seguro y saludable.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Capacidad de una organización para operar de manera responsable, asegurando el bienestar económico, social y ambientala largo plazo.',
    },
    {
      termino: 'Transformación Organizacional',
      significado:
        'Proceso de cambio en la estructura, cultura y funcionamiento de una organización para adaptarse a nuevas realidades.',
    },
  ],
}
