import { cn } from "@/lib/utils";
import BookCard from "./BookCard";
import { Book } from "@/interfaces/book";
import { useMemo } from "react";
import collectionBg from "@/assets/collection-bg.jpeg";

interface BookCollectionProps {
  className?: string;
  searchQuery?: string;
}

const sampleBooks: Book[] = [
  {
    id: "1",
    title: "Seis de Cuervos",
    author: "Leigh Bardugo",
    cover: "https://m.media-amazon.com/images/I/81JIVOPeWoL._SY466_.jpg", 
    saga: "Duologia de Seis de Cuervos #1", 
    description: "Ketterdam: Un desbordante foco de comercio internacional donde todo se puede conseguir por el precio adecuado, como bien sabe el prodigio criminal Kaz Brekker. A Kaz le acaban de ofrecer la oportunidad de llevar a cabo un gran robo, un arriesgado golpe que podría hacerle más rico de lo que jamás se ha atrevido a imaginar en sus sueños más salvajes. Pero no podrá llevarlo a cabo por sí solo: tendrá que reclutar a un peculiar equipo formado por un convicto, una espía, un pistolero, una Grisha, un ladrón y un fugitivo.Aunque ellos no lo saben, llegado el momento los miembros del grupo de Kaz serán los únicos capaces de salvar el mundo de la aniquilación total. Bueno, lo serán si no se matan entre ellos primero.", 
    year: 2016,
    genre: "Fantasía, Literatura juvenil",
    epubUrl: "/files/nombre-del-viento.epub", /*CREAR REPO */
    pdfUrl: "/files/nombre-del-viento.pdf",
    onlineUrl: "",
  },
  {
    id: "2",
    title: "Reino de Ladrones",
    author: "Leigh Bardugo",
    cover: "https://m.media-amazon.com/images/I/51vSvGVA3LL._SY445_SX342_ControlCacheEqualizer_.jpg", 
    saga: "Duologia de Seis de Cuervos #2", 
    description: "Kaz Brekker y su equipo han dado un golpe tan temerario que ni siquiera ellos pensaban sobrevivir. Pero en lugar de conseguir una buena recompensa, a su regreso de la Corte de Hielo tienen que seguir luchando por sus vidas. Traicionado y debilitado, el equipo está corto de recursos, aliados y esperanza. Mientras poderosas fuerzas de todo el mundo llegan a Ketterdam para desentrañar el secreto de la peligrosa droga conocida como jurda parem, viejos rivales y nuevos enemigos emergen para desafiar el ingenio de Kaz y poner a prueba las frágiles lealtades del equipo. Una guerra se adueñará de las oscuras y tortuosas calles de la ciudad, una batalla por la venganza y la redención que decidirá el destino del mundo Grisha.", 
    year: 2021,
    genre: "Fantasía, Literatura juvenil",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "3",
    title: "Nevernight",
    author: "Jay Kristoff",
    cover: "https://m.media-amazon.com/images/I/51SyFd0u2HL._SY445_SX342_ControlCacheEqualizer_.jpg", 
    saga: "The Nevernight Chtonicle #1", 
    description: "Nunca te encojas. Nunca temas. Y nunca, jamás, olvides.En una tierra de tres soles que nunca dan paso a la oscuridad, la joven asesina Mia Corvere acaba de unirse a la banda más mortífera de la República.De niña, Mia sobrevivió sola y a duras penas tras la rebelión fallida de su padre, que murió ejecutado por traición. Pero su misterioso don para conversar con las sombras la llevó por un camino más siniestro de lo que jamás hubiera podido imaginar. Ahora, años más tarde, debe demostrar su valía en la Iglesia Roja. Los pasillos de esta escuela de asesinos están llenos de traiciones y, para llegar a ser la adversaria que desea, Mia tiene que sobrevivir a la iniciación.Si lo logra, estará un paso más cerca de su único objetivo: venganza.", 
    year: 2021,
    genre: "Fantasía",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "4",
    title: "",
    author: "Jay Kristoff",
    cover: "https://m.media-amazon.com/images/I/51gOXFtGDCL._SY445_SX342_ControlCacheEqualizer_.jpg",
    saga: "The Nevernight Chtonicle #2", 
    description: "Segunda entrega de la trilogía Crónicas de la Nuncanoche.Quédate con la gloria. Yo me quedaré con la sangre.En una tierra de tres soles que nunca dan paso a la oscuridad, Mia Corvere ha encontrado su lugar en la Iglesia Roja, la famosa escuela de asesinos. Sin embargo, aún no ha podido llevar a cabo su venganza. Cuando sospecha que la propia Iglesia está impidiendo que acabe con el hombre que mató a su familia, se vende a sí misma a un reclutador de gladiadores para poder enfrentarse a él.En los pasillos del coliseo hace nuevas amistades y nuevos rivales, y empieza a preguntarse por su afinidad con las sombras. Pero a medida que se urden conspiraciones y comienza el recuento de cuerpos, Mia se ve obligada a tomar una decisión con graves consecuencias: lealtad o venganza.", 
    year: 2021,
    genre: "Fantasía",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "5",
    title: "DarkDawn",
    author: "Jay Kristoff",
    cover: "https://pictures.abebooks.com/isbn/9780008180096-es.jpg", 
    saga: "The Nevernight Chtonicle #3", 
    description: "Tercera entrega de la trilogía Crónicas de la Nuncanoche Soy la guerra que no puedes ganar. En la arena de los juegos más sangrientos de Tumba de Dioses se produjeron los asesinatos más impactantes de la República Itreyana. Mia Corvere consiguió huir con un compañero inesperado, aunque ahora los persiguen las hojas de la Iglesia Roja y los Luminatii... Y puede que también siga su rastro algo o alguien que ha traspasado el velo de la muerte. Más allá de abandonar con vida la Ciudad de los Puentes y los Huesos, Mia espera resolver por fin el enigma de su identidad como tenebra y otro más que ha surgido por el camino: ¿es posible acabar con un monstruo sin convertirse en uno al mismo tiempo? La canción está a punto de entonarse, pequeños mortales, y recordad: en un mundo donde incluso la luz solar está condenada a morir, nunca añoras tu sombra hasta que te pierdes en la oscuridad.", 
    year: 2021,
    genre: "Fantasía",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "6",
    title: "Babel",
    author: "R.F. Kuang",
    cover: "https://m.media-amazon.com/images/I/51a5H7JqMVL._SY445_SX342_ML2_.jpg", 
    saga: "", 
    description: "1828. El Instituto Real de Traducción de Oxford, también conocido como Babel, es la institución mágica más importante del mundo. La magia con plata capaz de revelar significados ocultos perdidos en la traducción que allí se practica le ha otorgado al Imperio británico un poder sin parangón.Robin, un huérfano cantonés que ha terminado siendo alumno en Babel, se ha dado cuenta de que servir a Babel significa traicionar a su país de origen. Y, a medida que sus estudios progresan, se ve atrapado entre Babel y la misteriosa Sociedad de Hermes, una organización dedicada a impedir la expansión imperial. Cuando Gran Bretaña trate de iniciar una injusta guerra con China motivada por el opio y la plata, Robin deberá decidir si la única forma de lograr un cambio real es la violencia.", 
    year: 2022,
    genre: "Ficción Histórica, Fantasía",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "7",
    title: "The Poppy War",
    author: "R.F. Kuang",
    cover: "https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/960w/products/6307/17064/Kuang_The_Poppy_War_cover__57713.1687451112.jpg?c=1", 
    saga: "The Poppy War #1", 
    description: "A brilliantly imaginative epic fantasy debut, inspired by the bloody history of China’s twentieth century and filled with treachery and magic. When Rin aced the Keju – the test to find the most talented students in the Empire – it was a shock to everyone: to the test officials, who couldn’t believe a war orphan from Rooster Province could pass without cheating; to Rin’s guardians, who had hoped to get rich by marrying her off; and to Rin herself, who realized she was finally free from a life of servitude. That she got into Sinegard – the most elite military school in Nikan – was even more surprising. But surprises aren’t always good. Because being a dark-skinned peasant girl from the south is not an easy thing at Sinegard. Fighting the prejudice of rival classmates, Rin discovers that she possesses a lethal, unearthly power – an aptitude for the nearly-mythical art of shamanism. Exploring the depths of her gift with the help of psychoactive substances and a seemingly insane teacher, Rin learns that gods long thought dead are very much alive – and that mastering these powers could mean more than just surviving school. For while the Nikara Empire is at peace, the Federation of Mugen still lurks across a narrow sea. The Federation occupied Nikan for decades after the First Poppy War, and only barely lost the continent in the Second. And while most people calmly go about their lives, a few are aware that a Third Poppy War is just a spark away…", 
    year: 2018,
    genre: "Fantasía, Fantasía Oscura",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "8",
    title: "The Dragon Republic",
    author: "R.F. Kuang",
    cover: "https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/960w/products/7420/16213/The_Dragon_Republic_by_R_F_Kuang__40426.1687451140.jpg?c=1", 
    saga: "The Poppy War #2", 
    description: " The war is over. The war has just begun. Three times throughout its history, Nikan has fought for its survival in the bloody Poppy Wars. Though the third battle has just ended, shaman and warrior Rin cannot forget the atrocity she committed to save her people. Now she is on the run from her guilt, the opium addiction that holds her like a vice, and the murderous commands of the fiery Phoenix—the vengeful god who has blessed Rin with her fearsome power. Though she does not want to live, she refuses to die until she avenges the traitorous Empress who betrayed Rin’s homeland to its enemies. Her only hope is to join forces with the powerful Dragon Warlord, who plots to conquer Nikan, unseat the Empress, and create a new republic. But neither the Empress nor the Dragon Warlord are what they seem. The more Rin witnesses, the more she fears her love for Nikan will force her to use the Phoenix’s deadly power once more. Because there is nothing Rin won’t sacrifice to save her country . . . and exact her vengeance.", 
    year: 2019,
    genre: "Fantasía, Fantasía Oscura",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "8",
    title: "The Burning God",
    author: "R.F. Kuang",
    cover: "https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/960w/products/7543/17545/The_Burning_God_by_R_F_Kuang__65228.1692595619.jpg?c=1", 
    saga: "The Poppy War #3", 
    description: " After saving her nation of Nikan from foreign invaders and battling the evil Empress Su Daji in a brutal civil war, Fang Runin was betrayed by allies and left for dead. Despite her losses, Rin hasn’t given up on those for whom she has sacrificed so much – the people of the southern provinces and especially Tikany, the village that is her home. Returning to her roots, Rin meets difficult challenges – and unexpected opportunities. While her new allies in the Southern Coalition leadership are sly and untrustworthy, Rin quickly realizes that the real power in Nikan lies with the millions of common people who thirst for vengeance and revere her as a goddess of salvation. Backed by the masses and her Southern Army, Rin will use every weapon to defeat the Dragon Republic, the colonizing Hesperians, and all who threaten the shamanic arts and their practitioners. As her power and influence grows, will she be strong enough to resist the Phoenix’s voice, urging her to burn the world and everything in it?", 
    year: 2020,
    genre: "Fantasía, Fantasía Oscura",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "9",
    title: "Amanecer Rojo",
    author: "Pierce Brown",
    cover: "https://m.media-amazon.com/images/I/51nd23JkBiL._SY445_SX342_ML2_.jpg", 
    saga: "Red Rising #1", 
    description: " Ideas como libertad o igualdad murieron junto con la Tierra. Ahora, en Marte, el equilibrio se sustenta en un férreo sistema de castas representadas por colores, en el que los dorados son la élite gobernante. Pero Darrow no es un dorado, es un rojo. Para sobrevivir debe ocultar su verdad sin olvidar que cada muerte, cada paso en la batalla, es por la libertad.", 
    year: 2014,
    genre: "Ciencia Ficción",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "9",
    title: "Hijo Dorado",
    author: "Pierce Brown",
    cover: "https://m.media-amazon.com/images/I/61Xtkbld+6L._SY342_.jpg", 
    saga: "Red Rising #2", 
    description: "Tras una implacable competición en el Instituto de Marte, Darrow se ha anado un puesto de honor entre la élite gobernante. Ahora luce la cicatriz curvada de los dorados, los más crueles y brillantes de los humanos. Pero Darrow no es como ellos… SU FUTURO SE HA CONSTRUIDO SOBRE MENTIRAS, SU PASADO ESTÁ MARCADO POR LA TRAGEDIA. Y NO PERDONA. NO OLVIDA. Para hacer realidad su objetivo de destruir el sistema desde dentro, Darrow debe convertirse en el mejor de los dorados. El más fuerte. El más inteligente. El más implacable. Solo así devolverá la luz a su pueblo. Aunque su sombra se torne más oscura a cada paso.", 
    year: 2015,
    genre: "Ciencia Ficción",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "10",
    title: "Mañana Azul",
    author: "Pierce Brown",
    cover: "https://m.media-amazon.com/images/I/41OKNJdB+QL._SY445_SX342_ML2_.jpg", 
    saga: "Red Rising #3", 
    description: " HONOR. VENGANZA. REVOLUCIÓN. Arriesgándolo todo para hundir la Sociedad dorada, Darrow ha sobrevivido a las despiadadas rivalidades entre los guerreros más poderosos. Ha logrado ascender y ha aguardado pacientemente el momento de desencadenar la revolución que acabará con la jerarquía desde dentro. Por fin ha llegado la hora… TRAICIONADO POR SUS ALIADOS. ABANDONADO A LA OSCURIDAD. UNA VOZ SE ALZARÁ POR LA JUSTICIA. Para vencer, necesitará persuadir a los que están sumidos en la oscuridad para que rompan sus cadenas y reclamen un destino que se les ha negado durante mucho tiempo. Un destino demasiado glorioso para renunciar a él. CUANDO LA LIBERTAD ESTÁ A TU ALCANCE LA ESPERANZA SE CONVIERTE EN TU ENEMIGO.", 
    year: 2016,
    genre: "Ciencia Ficción",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "11",
    title: "Oro y Ceniza",
    author: "Pierce Brown",
    cover: "https://m.media-amazon.com/images/I/61E0AoGmdsL._SY342_.jpg", 
    saga: "Red Rising #4", 
    description: "Darrow nació esclavo. Pero se convirtió en un arma. Acabó con siglos de gobierno dorado y se convirtió en el héroe de una república nueva y poderosa. Ahora deberá arriesgar todo por lo que ha luchado en una última misión desesperada. Pero nuevos destinos se entrelazarán con el suyo. Una joven roja huye de la tragedia de un campo de refugiados y logra una nueva vida que ni siquiera habría sido capaz de imaginar. Un exsoldado se ve obligado a robar lo más preciado del universo… o a pagarlo con su vida. Y Lisandro au Lune, el heredero en el exilio de la soberana, merodea por las estrellas, obsesionado por la pérdida del mundo que Darrow ha transformado y soñando con el que brotará de sus cenizas.",
    year: 2018,
    genre: "Ciencia Ficción",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "12",
    title: "Edad Oscura",
    author: "Pierce Brown",
    cover: "https://m.media-amazon.com/images/I/618pGq0SI0L._SY342_.jpg", 
    saga: "Red Rising #5", 
    description: "HÉROE, TRAIDOR, VILLANO. Hace diez años, Darrow encabezó una revolución que creó un nuevo mundo. Hoy disputa una guerra sin cuartel en Mercurio con la esperanza de salvarlo de la destrucción. Pero, ahora que deja a su paso un reguero de muerte, ¿seguirá siendo el héroe que rompió las cadenas? ¿O surgirá otra leyenda que ocupe su lugar? A SU SOMBRA, CADA VEZ MÁS OSCURA, SE ALZAN NUEVOS HÉROES. LISANDRO AU LUNE, el heredero en el exilio, ha regresado al Núcleo. Si consigue unir a las traicioneras familias doradas, la joven República podría perecer. La joven LIRIA, antigua refugiada roja, está acusada de traición y su única esperanza es una huida desesperada con nuevos e inverosímiles aliados. Secuestrados por una nueva amenaza para la República, PAX y ELECTRA, los hijos de Darrow y Sevro, deben confiar en un ladrón, EFRAÍN, para que los salve... Y este debe buscar en ellos su oportunidad para redimirse. ROMPIÓ LAS CADENAS PARA LUEGO ROMPER EL MUNDO.",
    year: 2019,
    genre: "Ciencia Ficción",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "13",
    title: "El Portador de luz",
    author: "Pierce Brown",
    cover: "https://m.media-amazon.com/images/I/81Z6riEYj2L._SY342_.jpg", 
    saga: "Red Rising #6", 
    description: "HÉROE LÍDER LEYENDA. El Segador es una leyenda, más mito que hombre: el salvador de mundos, el líder del Amanecer, el rompedor de cadenas. Pero el Segador también es Darrow, nacido de la tierra roja de Marte: un marido, un padre, un amigo. Abandonado lejos de casa tras una devastadora derrota en los campos de batalla de Mercurio, Darrow anhela regresar junto a su esposa y soberana, Virginia. ADEMÁS, DARROW DEBE DEFENDER MARTE DE LISANDRO, SU SANGUINARIO ASPIRANTE A CONQUISTADOR. LISANDRO AU LUNE ansía destruir el Amanecer y reestablecer la supremacía de los dorados, y arrasará los mundos para satisfacer sus ambiciones. Así comienza el largo viaje de regreso a casa de Darrow para reencontrarse con las personas que ama: VIRGINIA, CASIO, SEVRO. Una aventura interplanetaria donde se reunirán viejos amigos, se forjarán nuevas alianzas y se enfrentarán los rivales en el campo de batalla. Porque el sueño de Eo sigue vivo y después de la era oscura vendrá una nueva época de luz, de victoria y de esperanza. SI LOS MUNDOS UNA VEZ NECESITARON AL SEGADOR, AHORA NECESITAN A DARROW PARA DEFENDER LA REPÚBLICA.",
    year: 2023,
    genre: "Ciencia Ficción",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "14",
    title: "El imperio final",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/816IVfekyGL._SY342_.jpg", 
    saga: "Nacidos de la Bruma #1", 
    description: "Las brumas gobiernan la noche. El lord Legislador domina el mundo. En otros tiempos, un héroe se alzó para salvar la humanidad. Fracasó. Desde entonces, el mundo es un erial de ceniza y niebla gobernado por un emperador inmortal conocido como el lord Legislador. Pero la esperanza perdura. Una nueva revuelta cobra forma cimentándose en la treta definitiva: la astucia de un brillante genio del crimen y la determinación de una heroína insólita, una joven ladrona callejera que deberá aprender a controlar el poder de los nacidos de la bruma",
    year: 2006,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "15",
    title: "El Pozo de la Ascensión",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/81oUyFs0BCL._SY342_.jpg", 
    saga: "Nacidos de la Bruma #2", 
    description: "Durante mil años nada ha cambiado: han caído las cenizas, los skaa han sido esclavizados y el Lord Legislador ha dominado el mundo. Pero lo imposible ha sucedido. El Lord Legislador ha muerto. Sin embargo, vencer y matarlo fue la parte sencilla. El verdadero desafío será sobrevivir a las consecuencias de su caída. Tomar el poder tal vez resultó fácil, pero ¿qué ocurre después?, ¿cómo se utiliza? La tarea de reconstruir el mundo, ahora que Kelsier no está, ha quedado en manos de Vin. Y las brumas, desde que el Lord Legislador cayó, se han vuelto cada vez más impredecibles... A medida que el asedio se intensifica, la antigua leyenda del Pozo de la Ascensión ofrece un único rayo de esperanza. En ese mundo de aventura épica, la estrategia política y religiosa debe lidiar con los siempre misteriosos poderes de la alomancia...",
    year: 2007,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "16",
    title: "El Héroe de las Eras",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/81Ovwnu1dNL._SY342_.jpg", 
    saga: "Nacidos de la Bruma #3", 
    description: "Vin cumplió la profecía y liberó el poder acumulado en el Pozo de la Ascensión. Sin embargo, todo resultó ser una trampa, y ahora el ser divino llamado Ruina campa a sus anchas por el mundo decidido a arrasarlo con terremotos y ríos de fuego. Tras haber esquivado la muerte convirtiéndose en un nacido de la bruma, el emperador Elend Venture confía en que las pistas que dejó el lord Legislador les sirvan para contraatacar. Las profecías hablan de un héroe, pero ¿no estaban corrompidas? Vin deberá desenmarañar la verdad para compensar su error. Solo así llegará a ser el Héroe de las Eras antes de que Ruina aniquile toda la vida sobre el planeta.",
    year: 2008,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "16",
    title: "Elantris",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/81v-hlxgYyL._SY342_.jpg", 
    saga: "", 
    description: "Bienvenidos a la ciudad de Elantris, la poderosa y bella capital de Arelon llamada «la ciudad de los dioses». Antaño famosa sede de inmortales, lugar repleto de poderosa magia, Elantris ha caído en desgracia. Ahora solo acoge a los nuevos «muertos en vida», postrados en una insufrible «no-vida» tras una misteriosa y terrible transformación. Un matrimonio de Estado destinado a unir los reinos de Arelon y Teod se frustra, ya que el novio, Raoden, el príncipe de Arelon, sufre inesperadamente la Transformación, se convierte en un «muerto en vida» y debe refugiarse en Elantris. Su reciente esposa, la princesa Sarene de Teod, creyéndolo muerto, se ve obligada a incorporarse a la vida de Arelon y su nueva capital, Kae. Mientras, el embajador y alto sacerdote de otro reino vecino, Fjordell, usará su habilidad política para intentar dominar Arelod y Teod con el propósito de someterlos a su emperador y su dios.",
    year: 2005,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "16",
    title: "El camino de los reyes",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/81pzG7oNfHL._SY342_.jpg", 
    saga: "El archivo de las tormentas #1", 
    description: "Anhelo los días previos a la Última Desolación. Los días en que los Heraldos nos abandonaron y los Caballeros Radiantes se giraron en nuestra contra. Un tiempo en que aún había magia en el mundo y honor en el corazón de los hombres. El mundo fue nuestro, pero lo perdimos. Probablemente no hay nada más estimulante para las almas de los hombres que la victoria. ¿O tal vez fue la victoria una ilusión durante todo ese tiempo? ¿Comprendieron nuestros enemigos que cuanto más duramente luchaban, más resistíamos nosotros? Quizá vieron que el fuego y el martillo tan solo producían mejores espadas. Pero ignoraron el acero durante el tiempo suficiente para oxidarse. Hay cuatro personas a las que observamos. La primera es el médico, quien dejó de curar para convertirse en soldado durante la guerra más brutal de nuestro tiempo. La segunda es el asesino, un homicida que llora siempre que mata. La tercera es la mentirosa, una joven que viste un manto de erudita sobre un corazón de ladrona. Por último está el alto príncipe, un guerrero que mira al pasado mientras languidece su sed de guerra. El mundo puede cambiar. La potenciación y el uso de las esquirlas pueden aparecer de nuevo, la magia de los días pasados puede volver a ser nuestra. Esas cuatro personas son la clave. Una de ellas nos redimirá. Y una de ellas nos destruirá. ",
    year: 2010,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "17",
    title: "Palabras Radiantes",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/518cTasQVxL._SY445_SX342_QL70_ML2_.jpg", 
    saga: "El archivo de las tormentas #2", 
    description: "Los Caballeros Radiantes deben volver a alzarse. Los antiguos juramentos por fin se han pronunciado. Los hombres buscan lo que se perdió. Temo que la búsqueda los destruya. Es la naturaleza de la magia. Un alma rota tiene grietas donde puede colarse algo más. Las potencias, los poderes de la creación misma, pueden abrazar un alma rota, pero también pueden ampliar sus fisuras. El Corredor del Viento está perdido en una tierra quebrada, en equilibro entre la venganza y el honor. La Tejedora de Luz, lentamente consumida por su pasado, busca la mentira en la que debe convertirse. El Forjador de Vínculos, nacido en la sangre y la muerte, se esfuerza ahora por reconstruir lo que fue destruido. La Exploradora, a caballo entre los destinos de dos pueblos, se ve obligada a elegir entre una muerte lenta y una terrible traición a todo en lo que cree. Ya es hora de despertarlos, pues acecha la eterna tormenta. ",
    year: 2014,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "18",
    title: "Juramentada",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/51lr6mscwvL._SY445_SX342_QL70_ML2_.jpg", 
    saga: "El archivo de las tormentas #3", 
    description: "La humanidad se enfrenta a una nueva Desolación con el regreso de los Portadores del Vacío, un enemigo tan grande en número como en sed de venganza. La victoria fugaz de los ejércitos alezi de Dalinar Kholin ha tenido consecuencias: el enemigo parshendi ha convocado la violenta tormenta eterna, que arrasa el mundo y hace que los hasta ahora pacíficos parshmenios descubran con horror que llevan un milenio esclavizados por los humanos. Al mismo tiempo, en una desesperada huida para alertar a su familia de la amenaza, Kaladin se pregunta si la repentina ira de los parshmenios está justificada. Entretanto, en la torre de la ciudad de Urithiru, a salvo de la tormenta, Shallan Davar investiga las maravillas de la antigua fortaleza de los Caballeros Radiantes y desentierra oscuros secretos que acechan en las profundidades. Dalinar descubre entonces que su sagrada misión de unificar su tierra natal de Alezkar era corta de miras. A menos que todas las naciones sean capaces de unirse y dejar de lado el pasado sangriento de Dalinar, ni siquiera la restauración de los Caballeros Radiantes conseguirá impedir el fin de la civilización.",
    year: 2017,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "18",
    title: "El Ritmo de la Guerra",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/91Nb4w7arrL._SY342_.jpg", 
    saga: "El archivo de las tormentas #4", 
    description: "Hay secretos que hemos guardado mucho tiempo. Vigilantes. Insomnes. Eternos. Y pronto dejarán de ser nuestros. La Una que es Tres busca, sin saberlo, el alma capturada. El spren aprisionado, olvidado hace mucho tiempo. ¿Puede liberar su propia alma a tiempo de hallar el conocimiento que condena a todos los pueblos de Roshar? El Soldado Caído acaricia y ama la lanza, incluso mientras el arma hiende su propia carne. Camina siempre hacia delante, siempre hacia la oscuridad, sin luz. No puede llevar consigo a nadie, salvo aquello que él mismo puede avivar. La Hermana Derrumbada comprende sus errores y piensa que ella misma es un error. Parece muy alejada de sus antepasados, pero no comprende que son quienes la llevan a hombros. Hacia la victoria, y hacia ese silencio, el más importante de todos. Y la Madre de Máquinas, la más crucial de todos ellos, danza con mentirosos en un gran baile. Debe desenmascararlos, alcanzar sus verdades ocultas y entregarlas al mundo. Tiene que reconocer que las peores mentiras son las que se cuenta a sí misma. Si lo hace, nuestros secretos por fin se convertirán en verdades.",
    year: 2020,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "18",
    title: "Viento y Verdad",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/819X7Usv6vL._SY342_.jpg", 
    saga: "El archivo de las tormentas #5", 
    description: "Dalinar Kholin desafió al malvado dios Odium a un duelo de campeones en el que se decidirá el futuro de Roshar. Los Caballeros Radiantes solo tienen diez días para prepararse... y la repentina ascensión del taimado e implacable Taravangian al puesto de Odium lo ha sumido todo en una tremenda confusión. La lucha desesperada prosigue simultáneamente a lo largo y ancho del mundo: Adolin en Azimir, Sigzil y Venli en las Llanuras Quebradas y Jasnah en Ciudad Thaylen. El exasesino Seth deberá purgar Shinovar, su tierra natal, de la oscura influencia de los Deshechos. Lo acompaña Kaladin, que afronta una nueva batalla ayudando a Seth a combatir sus propios demonios... y tendrá que hacer lo mismo con Ishar, el demente Heraldo del Todopoderoso. Al mismo tiempo, Shallan, Renarin y Rlain se esfuerzan en desentrañar el misterio que hay tras la Deshecha Ba-Ado-Mishram, el de qué papel tuvo en la esclavización de la especie cantora y en el hecho de que los antiguos Caballeros Radiantes mataran a sus spren. Y Dalinar y Navani buscan una ventaja contra el campeón de Odium que solo puede hallarse en el Reino Espiritual, donde el recuerdo y la posibilidad se combinan en el caos. El destino de todo el Cosmere pende de un hilo.",
    year: 2024,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "19",
    title: "Malice",
    author: "John Gwynne",
    cover: "https://m.media-amazon.com/images/I/91yx-Le-hxL._SY342_.jpg", 
    saga: "The Faithful and The Fallen #1", 
    description: "Young Corban watches enviously as boys become warriors, learning the art of war. He yearns to wield his sword and spear to protect his king’s realm. But that day will come all too soon. The Banished Lands has a violent past where armies of men and giants clashed in battle, the earth running dark with their heartsblood. Although the giant-clans were broken in ages past, their ruined fortresses still scar the land. But now giants stir anew, the very stones weep blood and there are sightings of giant wyrms. Those who can still read the signs see a threat far greater than the ancient wars. Sorrow will darken the world, as angels and demons make it their battlefield. Then there will be a war to end all wars.",
    year: 2012,
    genre: "Fantasia, Fantasia Épica, Fantasía Vikinga",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "20",
    title: "Valour",
    author: "John Gwynne",
    cover: "https://m.media-amazon.com/images/I/91Dmpq-OYqL._SY342_.jpg", 
    saga: "The Faithful and The Fallen #2", 
    description: "The Banished Lands are torn by war, as the army of High King Nathair sweeps the realm challenging all who oppose his holy crusade. Allied with the manipulative Queen Rhin of Cambren, there are few who can stand against him. But Rhin is playing her own games and has her eyes on a far greater prize... Left for dead – her kin have fled and her country is overrun with enemies – Cywen fights to survive. But any chance of escape is futile once Nathair and his disquieting advisor Calidus realize who she is. They have no intention of letting such a prize slip from their grasp. For she may be their one chance at killing the biggest threat to their power. Meanwhile, the young warrior Corban flees from his conquered homeland with his exiled companions, heading for the only place that may offer them sanctuary. But to get there they must travel through Cambren, avoiding warbands, giants and the vicious wolven of the mountains. And all the while Corban struggles to become the man that everyone believes him to be – the Bright Star and saviour of the Banished Lands. Embroiled in struggles for power and survival, the mortal world is unaware of the greatest threat of all. In the Otherworld, dark forces scheme to bring a host of the Fallen into the world of flesh to end the war with the Faithful, once and for all.",
    year: 2014,
    genre: "Fantasia, Fantasia Épica, Fantasía Vikinga",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "21",
    title: "Ruin",
    author: "John Gwynne",
    cover: "https://m.media-amazon.com/images/I/51ToakteYQL._SY445_SX342_QL70_ML2_.jpg", 
    saga: "The Faithful and The Fallen #3", 
    description: "The Banished Lands are engulfed in war and chaos. The cunning Queen Rhin has conquered the west and High King Nathair has the cauldron, most powerful of the seven treasures. At his back stands the scheming Calidus and a warband of the Kadoshim, dread demons of the Otherworld. They plan to bring Asroth and his host of the Fallen into the world of flesh, but to do so they need the seven treasures. Nathair has been deceived but now he knows the truth. He has choices to make; choices that will determine the fate of the Banished Lands. Elsewhere the flame of resistance is growing – Queen Edana finds allies in the swamps of Ardan. Maquin is loose in Tenebral, hunted by Lykos and his corsairs. Here he will witness the birth of a rebellion in Nathair's own realm. Corban has been swept along by the tide of war. He has suffered, lost loved ones, sought only safety from the darkness. But he will run no more. He has seen the face of evil and he has set his will to fight it. The question is, how? With a disparate band gathered about him – his family, friends, giants, fanatical warriors, an angel and a talking crow – he begins the journey to Drassil, the fabled fortress hidden deep in the heart of Forn Forest. For in Drassil lies the spear of Skald, one of the seven treasures, and here it is prophesied that the Bright Star will stand against the Black Sun.",
    year: 2015,
    genre: "Fantasia, Fantasia Épica, Fantasía Vikinga",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "22",
    title: "Wrath",
    author: "John Gwynne",
    cover: "https://m.media-amazon.com/images/I/517z7iwW+OL._SY445_SX342_QL70_ML2_.jpg", 
    saga: "The Faithful and The Fallen #4", 
    description: "vents are coming to a climax in the Banished Lands, as the war reaches new heights. King Nathair has seized the fortress at Drassil, and now possesses three of the Seven Treasures. And with Calidus and Queen Rhin, Nathair will do anything to obtain the rest. They will allow him to open a portal to the Otherworld – so Asroth and his demon-horde can break into the Banished Lands and finally become flesh. Meanwhile Corban has been captured by the Jotun, warrior giants who ride enormous bears into battle. His warband scattered, Corban must make new allies to survive. But can he bond with competing factions of warlike giants? Somehow he must, to counter the threat Nathair represents. His life hangs in the balance – and with it, the fate of the Banished Lands. Truth, courage and loyalty will be tested as never before.",
    year: 2016,
    genre: "Fantasia, Fantasia Épica, Fantasía Vikinga",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "23",
    title: "La sombra de los Dioses",
    author: "John Gwynne",
    cover: "https://m.media-amazon.com/images/I/818QMDv65zL._SY342_.jpg", 
    saga: "Hermanos de Sangre #1", 
    description: "Ha pasado un siglo desde que los dioses lucharon y se extinguieron. Ahora solo quedan sus huesos, que prometen un gran poder a aquellos lo suficientemente valientes como para buscarlos. Mientras los susurros de guerra resuenan en la tierra de Vigrið, el destino sigue los pasos de tres guerreros: una cazadora en una búsqueda peligrosa, una mujer noble que busca la fama en la batalla y un esclavo que busca venganza entre los mercenarios conocidos como los Hermanos de Sangre. Los tres darán forma al destino del mundo, ya que una vez más cae bajo la sombra de los dioses.",
    year: 2022,
    genre: "Fantasia, Fantasia Épica, Fantasía Vikinga",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "24",
    title: "El Hambre de los Dioses",
    author: "John Gwynne",
    cover: "https://m.media-amazon.com/images/I/91ft4dAuweL._SY342_.jpg", 
    saga: "Hermanos de Sangre #2", 
    description: "El hambre de los dioses es la continuación de la aclamada saga de fantasía épica de John Gwynne inspirada en la civilización nórdica, repleta de mitos, magia y venganzas sangrientas. Lik-Rifa, la legendaria diosa dragona, ha salido de su cautiverio eterno. Ahora urde una nueva era de sangre y conquistas. Mientras Orka continúa la búsqueda de su hijo desaparecido, los Hermanos de Sangre emprenden una desesperada carrera hacia el sur para salvar a uno de los suyos y Varg da sus primeros pasos en la senda de la venganza. Elvar se ha comprometido a cumplir su juramento de sangre y rescatar a un prisionero de las garras de Lik-Rifa y sus seguidores descendientes de la dragona, pero antes debe convencer a los Terrores de la Batalla para que la sigan. Pero ni siquiera los Hermanos de Sangre y los Terrores de la Batalla pueden enfrentarse solos con un dragón.",
    year: 2023,
    genre: "Fantasia, Fantasia Épica, Fantasía Vikinga",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "25",
    title: "La Furia de los Dioses",
    author: "John Gwynne",
    cover: "https://m.media-amazon.com/images/I/81kgBmzMIKL._SY342_.jpg", 
    saga: "Hermanos de Sangre #3", 
    description: "Varg ha dejado atrás el sufrimiento de su vida pasada y se ha convertido en un miembro de pleno derecho de los Hermanos de Sangre. Pero, ahora, sus nuevos camaradas y él se enfrentan al mayor desafío de sus vidas: matar un dragón. Elvar dedica todos sus esfuerzos a consolidar su poder en Snakavik, donde tiene que hacer frente a amenazas internas y externas. Mientras lucha para imponer su autoridad ante la inminente Guerra, debe afrontar una tarea, sin duda, insuperable: dominar la ferocidad de un dios lobo. Biórr y su banda de guerreros se dirigen al norte, sedientos de sangre, pero Guðvarr se mueve por sus propios intereses con la esperanza de ganarse el favor de Lik-Rifa y realizar sus ambiciones. Todos los caminos llevan a Snakavik, donde todo está preparándose para la batalla final: una colisión titánica que sacudirá los cimientos del mundo y será testigo de la verdadera furia de los dioses.",
    year: 2025,
    genre: "Fantasia, Fantasia Épica, Fantasía Vikinga",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "26",
    title: "Jade City",
    author: "Fonda Lee",
    cover: "https://m.media-amazon.com/images/I/913imOgCUSL._SY342_.jpg", 
    saga: "Green Bone Saga #1", 
    description: "Jade is the lifeblood of the island of Kekon. It has been mined, traded, stolen, and killed for -- and for centuries, honorable Green Bone warriors like the Kaul family have used it to enhance their magical abilities and defend the island from foreign invasion. Now, the war is over and a new generation of Kauls vies for control of Kekon's bustling capital city. They care about nothing but protecting their own, cornering the jade market, and defending the districts under their protection. Ancient tradition has little place in this rapidly changing nation. When a powerful new drug emerges that lets anyone -- even foreigners -- wield jade, the simmering tension between the Kauls and the rival Ayt family erupts into open violence. The outcome of this clan war will determine the fate of all Green Bones -- from their grandest patriarch to the lowliest motorcycle runner on the streets -- and of Kekon itself.",
    year: 2017,
    genre: "Fantasia, Fantasía Urbana ",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "27",
    title: "Jade War",
    author: "Fonda Lee",
    cover: "https://m.media-amazon.com/images/I/81RisQmF5wL._SY342_.jpg", 
    saga: "Green Bone Saga #2", 
    description: "On the island of Kekon, the Kaul family is locked in a violent feud for control of the capital city and the supply of magical jade that endows trained Green Bone warriors with supernatural powers they alone have possessed for hundreds of years. Beyond Kekon's borders, war is brewing. Powerful foreign governments and mercenary criminal kingpins alike turn their eyes on the island nation. Jade, Kekon's most prized resource, could make them rich - or give them the edge they'd need to topple their rivals. Faced with threats on all sides, the Kaul family is forced to form new and dangerous alliances, confront enemies in the darkest streets and the tallest office towers, and put honor aside in order to do whatever it takes to ensure their own survival - and that of all the Green Bones of Kekon.",
    year: 2019,
    genre: "Fantasia, Fantasía Urbana ",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "28",
    title: "Jade Legacy",
    author: "Fonda Lee",
    cover: "https://m.media-amazon.com/images/I/51Tzme4TqlL._SY445_SX342_ML2_.jpg", 
    saga: "Green Bone Saga #3", 
    description: "The Kaul siblings battle their rival clans for honour and control over an East Asia-inspired fantasy metropolis in Jade Legacy, the page-turning conclusion to the Green Bone Saga.",
    year: 2021,
    genre: "Fantasia, Fantasía Urbana ",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "29",
    title: "Kaikeyi",
    author: "Vaishnavi Patel",
    cover: "https://m.media-amazon.com/images/I/81ee9t8CX+L._SY342_.jpg", 
    saga: "", 
    description: "So begins Kaikeyi’s story. The only daughter of the kingdom of Kekaya, she is raised on tales of the gods: how they churned the vast ocean to obtain the nectar of immortality, how they vanquish evil and ensure the land of Bharat prospers, and how they offer powerful boons to the devout and the wise. Yet she watches as her father unceremoniously banishes her mother, listens as her own worth is reduced to how great a marriage alliance she can secure. And when she calls upon the gods for help, they never seem to hear. Desperate for some measure of independence, she turns to the texts she once read with her mother and discovers a magic that is hers alone. With this power, Kaikeyi transforms herself from an overlooked princess into a warrior, diplomat, and most favored queen, determined to carve a better world for herself and the women around her. But as the evil from her childhood stories threatens the cosmic order, the path she has forged clashes with the destiny the gods have chosen for her family. And Kaikeyi must decide if resistance is worth the destruction it will wreak—and what legacy she intends to leave behind.",
    year: 2022,
    genre: "Fantasia, Fantasía Histórica ",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "30",
    title: "The Sword of Kaigen",
    author: "M.L. Wang",
    cover: "https://m.media-amazon.com/images/I/51dDO+Iv8sL._SY445_SX342_QL70_ML2_.jpg", 
    saga: "", 
    description: "On a mountainside at the edge of the Kaigenese Empire live the most powerful warriors in the world, superhumans capable of raising the sea and wielding blades of ice. For hundreds of years, the fighters of the Kusanagi Peninsula have held the Empire's enemies at bay, earning their frozen spit of land the name 'The Sword of Kaigen.' Born into Kusanagi's legendary Matsuda family, fourteen-year-old Mamoru has always known his purpose: to master his family's fighting techniques and defend his homeland. But when an outsider arrives and pulls back the curtain on Kaigen's alleged age of peace, Mamoru realizes that he might not have much time to become the fighter he was bred to be. Worse, the empire he was bred to defend may stand on a foundation of lies. Misaki told herself that she left the passions of her youth behind when she married into the Matsuda house. Determined to be a good housewife and mother, she hid away her sword, along with everything from her days as a fighter in a faraway country. But with her growing son asking questions about the outside world, the threat of an impending invasion looming across the sea, and her frigid husband grating on her nerves, Misaki finds the fighter in her clawing its way back to the surface. When the winds of war reach their peninsula, will the Matsuda family have the strength to defend their empire? Or will they tear each other apart before the true enemies even reach their shores?",
    year: 2019,
    genre: "Fantasia, Fantasía Histórica ",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "31",
    title: "Empire of Silence",
    author: "Christopher Ruocchio",
    cover: "https://m.media-amazon.com/images/I/81Y4R71134L._SY342_.jpg", 
    saga: "The Sun Eater #1", 
    description: "It was not his war. The galaxy remembers him as a hero: the man who burned every last alien Cielcin from the sky. They remember him as a monster: the devil who destroyed a sun, casually annihilating four billion human lives—even the Emperor himself—against Imperial orders.But Hadrian was not a hero. He was not a monster. He was not even a soldier. On the wrong planet, at the right time, for the best reasons, Hadrian Marlowe starts down a path that can only end in fire. He flees his father and a future as a torturer only to be left stranded on a strange, backwater world. Forced to fight as a gladiator and navigate the intrigues of a foreign planetary court, Hadrian must fight a war he did not start, for an Empire he does not love, against an enemy he will never understand.",
    year: 2018,
    genre: "Ciencia Ficción, Fantasía",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "32",
    title: "Howling Dark",
    author: "Christopher Ruocchio",
    cover: "https://m.media-amazon.com/images/I/51cseMTOTJL._SY445_SX342_QL70_ML2_.jpg", 
    saga: "The Sun Eater #2", 
    description: "Hadrian Marlowe is lost. For half a century, he has searched the farther suns for the lost planet of Vorgossos, hoping to discover a way to contact the elusive alien Cielcin. He has pursued false leads for years among the barbarian Normans as captain of a band of mercenaries, but Hadrian remains determined to make peace and bring an end to nearly four hundred years of war. Desperate to find answers, Hadrian must venture beyond the security of the Sollan Empire and among the Extrasolarians who dwell between the stars. There, he will face not only the aliens he has come to offer peace, but contend with creatures that once were human, with traitors in his midst, and with a meeting that will bring him face to face with no less than the oldest enemy of mankind. If he succeeds, he will usher in a peace unlike any in recorded history. If he fails, the galaxy will burn.",
    year: 2019,
    genre: "Ciencia Ficción, Fantasía",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "33",
    title: "Demon in White",
    author: "Christopher Ruocchio",
    cover: "https://m.media-amazon.com/images/I/518q6vFzIlL._SY445_SX342_QL70_ML2_.jpg", 
    saga: "The Sun Eater #3", 
    description: "For almost a hundred years, Hadrian Marlowe has served the Empire in its war against the Cielcin, a vicious alien race bent on humanity’s destruction. Rumors of a new king amongst the Cielcin have reached the Imperial throne. This one is not like the others. It does not raid borderworld territories, preferring precise, strategic attacks on the humans’ Empire. To make matters worse, a cult of personality has formed around Hadrian, spurred on by legends of his having defied death itself. Men call him Halfmortal. Hadrian’s rise to prominence proves dangerous to himself and his team, as pressures within the Imperial government distrust or resent his new influence. Caught in the middle, Hadrian must contend with enemies before him—and behind. And above it all, there is the mystery of the Quiet. Hadrian did defy death. He did return. But the keys to the only place in the universe where Hadrian might find the answers he seeks lie in the hands of the Emperor himself....",
    year: 2020,
    genre: "Ciencia Ficción, Fantasía",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "34",
    title: "La voz de las espadas",
    author: "Joe Abercrombie",
    cover: "https://m.media-amazon.com/images/I/81zkxwzjC0L._SY342_.jpg", 
    saga: "La Primera Ley #1", 
    description: "El inquisidor Glokta, convertido en un cínico tullido tras su paso por las cárceles de los enemigos de la Unión, es ahora a su vez un eficaz torturador capaz de extraer información de cualquiera. A su vez, el capitán Jezal dan Luthar no ha hecho otra cosa en su vida que desplumar a sus amigos jugando a las cartas y soñar con la gloria de vencer en el Certamen de esgrima. Pero se está fraguando una guerra, y en los campos de batalla del Norte la lucha se rige por normas mucho más sangrientas... Logen Nuevededos, infame bárbaro de pasado sangriento, acaba de perder a sus amigos y está decidido a abandonar sus tierras y dirigirse al Sur, pero los espíritus le advierten que le busca un Mago de los Viejos Tiempos... Sus historias se entrelazan en una fantasía negra repleta de acción y personajes memorables.",
    year: 2006,
    genre: "Fantasía, Fantasía Épica, Fantasía Oscura",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "35",
    title: "Antes de que los Cuelguen",
    author: "Joe Abercrombie",
    cover: "https://hablamosdelibros.es/wp-content/uploads/2023/09/LG00157701.jpg", 
    saga: "La Primera Ley #2", 
    description: "El Superior Glokta tiene la misión de defender una ciudad sitiada por el ejército gurko y minada por la traición, además de descubrir qué ocurrió con su sucesor. Por su parte, los Hombres del Norte han cruzado la frontera y han entrado a sangre y fuego en el territorio de la Unión; para detenerlos no bastará con el ejército del Rey. A su vez, Bayaz, el Primero de los Magos, conduce a un heterogéneo grupo de aventureros en una peligrosa misión por las ruinas del pasado...",
    year: 2008,
    genre: "Fantasía, Fantasía Épica, Fantasía Oscura",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "36",
    title: "El Último Argumento de los Reyes",
    author: "Joe Abercrombie",
    cover: "https://imagessl3.casadellibro.com/a/l/s7/43/9788420676043.webp", 
    saga: "La Primera Ley #2", 
    description: "El rey de los hombres del Norte se mantiene, y solo hay un guerrero que le pueda detener: su viejo amigo y su enemigo más antiguo; ha llegado la hora de que el Sanguinario vuelva a casa... Glokta está librando una lucha secreta en la que nadie está seguro y nadie es de fiar. Y como sus días de guerrero están lejos, utiliza las armas que le quedan: chantaje, tortura... Jezal dan Luthar ha decidido que la gloria es demasiado dolorosa y prefiere una vida sencilla con la mujer a la que ama. Pero el amor también puede ser doloroso y la gloria tiene la desagradable costumbre de aferrarse a un hombre cuando menos la desea... El Rey de la Unión ha muerto, los campesinos se rebelan y los nobles luchan por su corona. Sólo el Primero de los Magos tiene un plan para salvar el mundo, pero esta vez hay riesgos. Y no hay un riesgo más terrible que romper la Primera Ley... ",
    year: 2008,
    genre: "Fantasía, Fantasía Épica, Fantasía Oscura",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },

];

const BookCollection = ({ className, searchQuery = "" }: BookCollectionProps) => {
  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) return sampleBooks;
    
    const query = searchQuery.toLowerCase().trim();
    return sampleBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div 
      className={cn(
        "min-h-screen pt-28 pb-16 px-8 md:px-16",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(194, 174, 150, 0.95) 0%, rgba(194, 174, 150, 0.5) 12%, transparent 5%), url(${collectionBg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}
    >
{/* Sección de Encabezado con efecto de fondo traslúcido (Color #c2ae96) */}
      <div className="max-w-6xl mx-auto mb-16 text-center"> 
            {/* Título Principal */}
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-primary mb-6 animate-fade-in-up">
                Mi Colección
            </h1>

            {/* Separador y Subtítulo */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <span className="font-display text-xl tracking-[0.4em] text-primary uppercase">
                Descubre y descarga libros en PDF, EPUB o lee online.
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </div>
            
            {/* Cita 
            <p className="text-center font-body text-lg text-muted-foreground italic mt-6">
              "Un libro es un sueño que tienes en tus manos"
            </p>
            */}
            
      </div>

      {/* Books Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div
              key={book.id}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <BookCard book={book} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="font-body text-lg text-muted-foreground italic">
              No se encontraron libros que coincidan con tu búsqueda
            </p>
          </div>
        )}
      </div>

      {/* Footer decoration */}
      <div className="max-w-6xl mx-auto mt-16 flex justify-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-px bg-gold/40" />
          <div className="w-2 h-2 rotate-45 bg-gold/60" />
          <div className="w-12 h-px bg-gold/40" />
        </div>
      </div>
    </div>
  );
};

export default BookCollection;
