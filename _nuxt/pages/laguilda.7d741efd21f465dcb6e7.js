webpackJsonp([2],{"+ttr":function(a,e,o){"use strict";var i=o("mbDu"),n=o("d4E4"),t=!1;var s=function(a){t||o("w2L8")},r=o("VU/8")(i.a,n.a,!1,s,"data-v-72a79544",null);r.options.__file="components/Profiles/Profiles.vue",e.a=r.exports},"7pg+":function(a,e,o){var i=o("kxFB");(e=a.exports=o("FZ+f")(!1)).push([a.i,"@import url(https://fonts.googleapis.com/css?family=Old+Standard+TT:200i,300i,200,300,400,400i,700|Oswald:200,300,400,500,600,700);",""]),e.push([a.i,"@font-face{font-family:Impacto;src:url("+i(o("uVH4"))+') format("truetype");font-weight:400;font-style:normal}.profiles[data-v-72a79544]{background:#f9f8f7;margin-bottom:0;padding:0;list-style:none}@media (min-width:889px){.profiles[data-v-72a79544]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-line-pack:justify;align-content:space-between;background:#060604}.profiles li[data-v-72a79544]{width:50%;background:#ffc309;border:2px solid #060604}}@media (min-width:1040px){.profiles li[data-v-72a79544]{width:33%}}@media (min-width:1378px){.profiles li[data-v-72a79544]{width:25%}}',""])},AHvB:function(a,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("Sngr"),n=o("CZ+5"),t=!1;var s=function(a){t||o("tPZa")},r=o("VU/8")(i.a,n.a,!1,s,"data-v-47dfcf08",null);r.options.__file="pages/laguilda.vue",e.default=r.exports},"CZ+5":function(a,e,o){"use strict";var i=function(){var a=this.$createElement,e=this._self._c||a;return e("section",[e("h2",[this._v("laGuilda")]),e("p",{staticClass:"presentation"},[this._v(this._s(this.presentation))]),e("profiles")],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},Hjgb:function(a,e,o){"use strict";e.a={props:["profile","expanded"]}},Ky8H:function(a,e,o){"use strict";var i=function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("div",{staticClass:"profile",class:{expanded:a.expanded}},[o("h3",{staticClass:"name",class:{expanded:a.expanded}},[a._v(a._s(a.profile.name))]),o("div",{staticClass:"bio",class:{expanded:a.expanded}},[o("p",[a._v(a._s(a.profile.bio))])])])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},OXT3:function(a,e,o){var i=o("kxFB");(e=a.exports=o("FZ+f")(!1)).push([a.i,"@import url(https://fonts.googleapis.com/css?family=Old+Standard+TT:200i,300i,200,300,400,400i,700|Oswald:200,300,400,500,600,700);",""]),e.push([a.i,"@font-face{font-family:Impacto;src:url("+i(o("uVH4"))+') format("truetype");font-weight:400;font-style:normal}.presentation[data-v-47dfcf08]{color:#f9f8f7;padding:3.5%;white-space:pre-wrap;line-height:27px}',""])},RAw2:function(a,e,o){"use strict";var i=o("Hjgb"),n=o("Ky8H"),t=!1;var s=function(a){t||o("WjKe")},r=o("VU/8")(i.a,n.a,!1,s,"data-v-039483bf",null);r.options.__file="components/Profiles/Profile.vue",e.a=r.exports},Sngr:function(a,e,o){"use strict";var i=o("+ttr"),n=o("ziZB");e.a={components:{Profiles:i.a},data:function(){return{presentation:n.a.presentation}}}},WjKe:function(a,e,o){var i=o("cKq6");"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);o("rjj0")("38a8ea23",i,!1,{sourceMap:!1})},cKq6:function(a,e,o){var i=o("kxFB");(e=a.exports=o("FZ+f")(!1)).push([a.i,"@import url(https://fonts.googleapis.com/css?family=Old+Standard+TT:200i,300i,200,300,400,400i,700|Oswald:200,300,400,500,600,700);",""]),e.push([a.i,"@font-face{font-family:Impacto;src:url("+i(o("uVH4"))+') format("truetype");font-weight:400;font-style:normal}.name[data-v-039483bf]{margin:0;padding:10px 7%;color:#060604;background:#ffc309;border-bottom:4px solid #060604}.bio[data-v-039483bf]{overflow:hidden;margin:0;max-height:0}.bio p[data-v-039483bf]{padding:10px 7%}.bio.expanded[data-v-039483bf]{-webkit-transition:max-height .4s ease-in-out;transition:max-height .4s ease-in-out;max-height:500px}@media (min-width:889px){.bio[data-v-039483bf]{max-height:1500px;padding:30px 7%}.bio p[data-v-039483bf]{margin:0;padding:0;line-height:25px}}',""])},d4E4:function(a,e,o){"use strict";var i=function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ul",{staticClass:"profiles"},a._l(a.profiles,function(e){return o("li",{key:e.name,on:{click:function(o){a.toggleExpanded(e)}}},[o("profile",{attrs:{profile:e,expanded:a.activeProfile==e.name}})],1)}))};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},kxFB:function(a,e){a.exports=function(a){return"string"!=typeof a?a:(/^['"].*['"]$/.test(a)&&(a=a.slice(1,-1)),/["'() \t\n]/.test(a)?'"'+a.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':a)}},mbDu:function(a,e,o){"use strict";var i=o("ziZB"),n=o("RAw2");e.a={components:{Profile:n.a},data:function(){return{profiles:i.a.bio,activeProfile:null}},methods:{toggleExpanded:function(a){this.activeProfile=this.activeProfile==a.name?null:a.name}}}},tPZa:function(a,e,o){var i=o("OXT3");"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);o("rjj0")("0b74976e",i,!1,{sourceMap:!1})},uVH4:function(a,e,o){a.exports=o.p+"fonts/impact.8fc622c.ttf"},w2L8:function(a,e,o){var i=o("7pg+");"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);o("rjj0")("645afe26",i,!1,{sourceMap:!1})},ziZB:function(a,e,o){"use strict";e.a={presentation:"\tLa Guilda es una compañía informal de geometría variable, suma esporádica de individualidades dispuestas a colaborar en experimentos escénicos ligeramente esbozados que, tras los balbuceos iniciales, pasan a ser construidos en común. Improvisación con un objetivo determinado, así es como definía Brecht, de forma sencilla, el modo en que la libertad individual puede encontrarse con la disciplina colectiva.\n\n\tUna guilda pues, como diría Kropotkin, en tanto que reunión de personas que comparten una actividad común (las artes escénicas) dotándose en igualdad de condiciones de sus propias reglas de juego.",bio:[{name:"José Maldonado",bio:"José Maldonado es titulado en flamenco y danza española por el Conservatorio Profesional de Danza de Barcelona, su ciudad natal. A los 18 años se traslada  a Madrid donde sigue formándose con grandes maestros del baile flamenco y la danza Española como María Magdalena, Paco Romero o La China. Desde que diera el salto a la escena como profesional ha trabajado como solista o en compañías tales la Antonio Canales, Javier Latorre, Rafaela Carrasco o Rocío Molina entre muchos otros. Como coreógrafo ostenta una dilatada experiencia habiendo conseguido premios y galardones en las disciplinas de Danza Española y Flamenco en diversos certámenes nacionales. En la actualidad, tiene su propia compañía de Baile Flamenco al tiempo que colabora con diversas compañías."},{name:"María M. Cabeza de Vaca",bio:"Bailarina y coreógrafa, licenciada en Filología Hispánica y titulada en ballet clásico. Formada en Danza Contemporánea en el CAD (Centro Andaluz de Danza). Desde sus inicios profesionales desarrolla su trayectoria como intérprete en compañías de danza y teatro como: “Provisional Danza” (Madrid), “La Imperdible” (Sevilla), “LaPermanente” (Sevilla), “Metros” (Barcelona), “Erre que erre” (Barcelona)... En junio del 2001 realiza su primera pieza de danza para la inauguración del Festival Internacional de Danza de Itálica, punto y partida de una dilatada carrera donde la búsqueda del dialogo entre la Danza y otras disciplinas se hace patente y denominador común."},{name:"Juan Murube",bio:"Desde que empezara su carrera artística en 1999, la presencia de Juan Murube como cantaor se hace casi omnipresente. Participa con su arte en multitud de espectáculos de baile Flamenco tanto en Teatros de todo el mundo como en los principales Tablaos de Flamenco de toda España. Creador de un sello personal, da el salto como solista con su primer trabajo discográfico “Bellavista” presentado en Mayo de 2016 dentro del ciclo “Cita con las Músicas” de la Fundación Cajasol. Así pues, estamos ante una figura versátil y dúctil capaz de amoldar su talento como cantaor a las necesidades expresivas de cada momento."},{name:"Fernando María",bio:"La guitarra flamenca de Fernando María bebe directamente de la escuela sevillana, ciudad en la que nació y desde la que principalmente desarrolla su actividad como guitarrista. Su toque personal ha conseguido impregnarse de los sones más carismáticos del Flamenco pudiendo reconocer su gusto por los maestros de la Guitarra Flamenca. No obstante, en busca de su sello personal ha ido incorporando características de otros estilos musicales, como el gusto por la calidad del sonido de la guitarra clásica barroca, la apertura rítmica de la guitarra contemporánea latinoamericana o el estudio armónico de  la guitarra de jazz. Su actividad como guitarrista la desarrolla principalmente como acompañante, bien del cante o del baile."},{name:"Isa Rodriguez",bio:'Comenzó a tocar la batería en el 2006 estudiando con profesores como David López, José Mena, Jimmy González y Antonio Coronel. Ha colaborado desde entonces en diferentes grupos del panorama sevillano y ha acompañado a artistas como la Húngara y en grabaciones y directos para el artista local Pedro Jiménez. Batería en Rocktámbulos desde 2014 hasta la fecha. Festival flamenco de Nimes en el espectáculo "Guitarra mía" acompañando a artistas de la talla de Rocío Molina de la mano de su padre el guitarrista flamenco Rafael Rodríguez. Espectáculo "Off Limits" en el festival de danza de Itálica, julio 2017.'},{name:"Shaula Ortega",bio:"Licenciada en Bellas Artes, la trayectoria artística de Shaula Ortega va ligada indefectiblemente al desarrollo digital y las numerosas posibilidades audiovisuales. Su trabajo entabla un dialogo directo entre la naturaleza de la existencia humana y la complejidad de las estructuras sociales. Por ello, al tiempo que desarrolla su labor como artista visual independiente, ha formado parte de Compañías de Baile Flamenco y Danza así como de espectáculos y eventos musicales de toda orden."},{name:"Enrique López de Haro",bio:"Realizó estudios de Escenografía, Dirección Escénica y Arquitectura en Sevilla, su ciudad natal, Berlín y Barcelona, disciplinas que sigue compaginando.  Actualmente desarrolla su actividad escénica en laGuilda Obscénica cuya primera producción ha sido Offlimits."},{name:"Alberto del Valle",bio:"Ingeniero de sonido y desarrollador de software, ha participado en multitud de producciones audiovisuales combinando producción discográfica, espectáculos musicales, danza, cine, television. Un indígena digital que retuerce botones disfrutando con cualquier reto técnico sin asustarle, lidiar con “artistas” y otras criaturas salvajes. Se puede decir que se dedica a hacer cosas, cosas con cacharros y a veces con otros seres humanos."},{name:"Juan Monje",bio:"Nacido entre la provincia y la periferia de Sevilla. Filósofo, gestor y técnico de desarrollo. Promotor de proyectos independientes, antiguas y nuevas tendencias en todo tipo de soportes y medios. Admirador de todo lo relativo al vivir flamenco."},{name:"Isabel Arias de Saavedra",bio:"Realizó estudios de interpretación, patronaje y diversos cursos de vestuario teatral y técnicas textiles, entre Sevilla, Madrid y Granada. Aunando todos sus estudios, hoy en día se dedica a: sastrería y vestuario teatral en compañías andaluzas de danza y/o teatro, profesora de costura en el taller La Osa Mallol y creadora de Hisabelia, marca textil de ropa y complementos con el lema Slow design for happy people."}]}}});