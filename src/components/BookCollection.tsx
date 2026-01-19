import { cn } from "@/lib/utils";
import BookCard from "./BookCard";
import { Book } from "@/interfaces/book";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import collectionBg from "@/assets/collection-bg.jpeg";
import collectionBg2 from "@/assets/collection2-bg.jpeg";


interface BookCollectionProps {
  className?: string;
  searchQuery?: string;
}

const sampleBooks: Book[] = [ 
  {
    id: "47",
    title: "The Shadow of What Was Lost",
    author: "James Islington",
    cover: "https://m.media-amazon.com/images/I/51ouHDJYMgL._SY445_SX342_QL70_ML2_.jpg",
    saga: "The Licanius Trilogy #01", 
    description: `AS DESTINY CALLS, A JOURNEY BEGINS
It has been twenty years since the god-like Augurs were overthrown and killed. Now, those who once served them - the Gifted - are spared only because they have accepted the rebellion's Four Tenets, vastly limiting their own powers.
As a young Gifted, Davian suffers the consequences of a war lost before he was even born. He and others like him are despised. But when Davian discovers he wields the forbidden powers of the Augurs, he sets in motion a chain of events that will change everything.
To the west, a young man whose fate is intertwined with Davian's wakes up in the forest, covered in blood and with no memory of who he is . . .
And in the far north, an ancient enemy long thought defeated, begins to stir.`,
    year: 2014,
    genre: "Fantasía, Fantasía Épica",
    epubUrl: "https://drive.google.com/uc?export=download&id=164QB_Kj4lrzSOhZ9rPWYAgxRz-Zlkxy0",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1RJsWqj2jzOPw6IOHIsahZXbM-cHe5qUK",
    onlineUrl: "",
  },
  {
    id: "48",
    title: "An Echo of Things to Come",
    author: "James Islington",
    cover: "https://m.media-amazon.com/images/I/51S9GNF+AAL._SY445_SX342_QL70_ML2_.jpg",
    saga: "The Licanius Trilogy #02", 
    description: `AS SHADOWS RISE, A DARKNESS AWAKES
In the wake of the devastating attack on Ilin Illan, an amnesty has been declared for all Augurs - finally allowing them to emerge from hiding and openly oppose the dark forces massing against Andarra. However, as Davian and his new allies hurry north towards the ever-weakening Boundary, fresh horrors along their path suggest that their reprieve may have come far too late.
Meanwhile, Caeden continues to wrestle with the impossibly heavy burdens of his past. Yet as more and more of his memories return, he begins to realise that the motivations of the two sides in this ancient war may not be as clear-cut as they first seemed . . .`,
    year: 2017,
    genre: "Fantasía, Fantasía Épica", 
    epubUrl: "https://drive.google.com/uc?export=download&id=1jZfFeix2aqm3oLAF8FZvgD_3TX5CGmGm",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1r_oGmWi8BU7TSk8I5F5P4iqnvQCReFvn",
    onlineUrl: "",
  },
  {
    id: "49",
    title: "The Light of All That Falls",
    author: "James Islington",
    cover: "https://m.media-amazon.com/images/I/41EZLbYAspL._SY445_SX342_QL70_ML2_.jpg",
    saga: "The Licanius Trilogy #03", 
    description: `The Light of All That Falls concludes the epic adventure that began in The Shadow of What Was Lost, the acclaimed fantasy blockbuster from James Islington.
The Boundary is whole once again, but it may be too late.
Banes now stalk Andarra, while in Ilin Illan, the political machinations of a generation come to a head as Wirr's newfound ability forces his family's old enemies into action.
Imprisoned and alone in a strange land, Davian is pitted against the remaining Venerate as they work tirelessly to undo Asha's sacrifice - even as he struggles with what he has learned about the friend he chose to set free.
And Caeden, now facing the consequences of his centuries-old plan, must finally confront its reality - heartbroken at how it began, and devastated by how it must end.`,
    year: 2019,
    genre: "Fantasía, Fantasía Épica",
    epubUrl: "https://drive.google.com/uc?export=download&id=1r5yCI3HSxVRdJ5E9NjiGy-fSWZLTdcLq",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1zYGzt4tS9wWCe8YC_WE9TwZvtACMcU2B",
    onlineUrl: "",
  },
{
    id: "67",
    title: "Berserk",
    author: "Kentaro Miura",
    cover: "https://m.media-amazon.com/images/I/91rdTtLWAHL._SY425_.jpg",
    saga: "Tomo 01-07", 
    description: `Guts es un guerrero vestido de negro de los pies a la cabeza que porta una gigantesca espada más larga que su propia estatura y un robusto brazo ortopédico de hierro...
Berserk es una historia de batallas épicas, de venganzas, de muerte y de luchas por conseguir el poder, por conseguir un nombre en una sociedad noble y despreciativa con las clases “inferiores”. A esto se le une la línea evolutiva que siguen los personajes implicados en la trama y el conocimiento que poco a poco van teniendo los protagonistas sobre ellos mismos y sus motivaciones.
A todo esto, sumado a los elementos fantásticos más comunes de las novelas del género convierten a Berserk en una obra de arte dentro del género.
El protagonista es Gutts (Gatsu), un mercenario que comenzó sus andaduras cuando era niño, y que se mueve y actúa por venganza y por un odio mucho mayor que cualquier miedo o dolor físico. Su enorme espada (tan alta como él) y su increíble destreza atraerán la atención de Grifith, el jefe de la Banda del Halcón, un grupo de mercenarios famoso por sus victorias.
Grifith va a reclutar a Gutts y le hará miembro de su banda, de la que forman parte el resto de los protagonistas: Caska, Judeau, Ricket y Pippin serán los personajes más cercanos a Gutts.`,
    year: 1990,
    genre: "Cómics manga, novelas gráficas, Fantasía oscura, Seinen", 
    epubUrl: "https://www.mediafire.com/file/db0s0fnz3cxm2yr/Berserk_Tomo_01-07.zip/file",
    pdfUrl: "https://www.mediafire.com/file/ybjra2aydo6hq7m/Berserk_Tomo_01-07--ElArchivoDePaula.zip/file",
    onlineUrl: "",
  },
  {
    id: "68",
    title: "Berserk",
    author: "Kentaro Miura",
    cover: "https://m.media-amazon.com/images/I/51lpzs5ucFL._SY445_SX342_ML2_.jpg", 
    saga: "Tomo 08-14", 
    description: `Guts es un guerrero vestido de negro de los pies a la cabeza que porta una gigantesca espada más larga que su propia estatura y un robusto brazo ortopédico de hierro...
Berserk es una historia de batallas épicas, de venganzas, de muerte y de luchas por conseguir el poder, por conseguir un nombre en una sociedad noble y despreciativa con las clases “inferiores”. A esto se le une la línea evolutiva que siguen los personajes implicados en la trama y el conocimiento que poco a poco van teniendo los protagonistas sobre ellos mismos y sus motivaciones.
A todo esto, sumado a los elementos fantásticos más comunes de las novelas del género convierten a Berserk en una obra de arte dentro del género.
El protagonista es Gutts (Gatsu), un mercenario que comenzó sus andaduras cuando era niño, y que se mueve y actúa por venganza y por un odio mucho mayor que cualquier miedo o dolor físico. Su enorme espada (tan alta como él) y su increíble destreza atraerán la atención de Grifith, el jefe de la Banda del Halcón, un grupo de mercenarios famoso por sus victorias.
Grifith va a reclutar a Gutts y le hará miembro de su banda, de la que forman parte el resto de los protagonistas: Caska, Judeau, Ricket y Pippin serán los personajes más cercanos a Gutts.`,
    year: 1994,
    genre: "Cómics manga, novelas gráficas, Fantasía oscura, Seinen",
    epubUrl: "https://www.mediafire.com/file/m8m2q6ea0dpcdqh/Berserk_Tomo_08-14.zip/file",
    pdfUrl: "https://drive.google.com/uc?export=download&id=",
    onlineUrl: "",
  },
  {
    id: "69",
    title: "Berserk",
    author: "Kentaro Miura",
    cover: "https://m.media-amazon.com/images/I/51yyy32E6tL._SY445_SX342_ML2_.jpg", 
    saga: "Tomo 15-21", 
    description: `Guts es un guerrero vestido de negro de los pies a la cabeza que porta una gigantesca espada más larga que su propia estatura y un robusto brazo ortopédico de hierro...
Berserk es una historia de batallas épicas, de venganzas, de muerte y de luchas por conseguir el poder, por conseguir un nombre en una sociedad noble y despreciativa con las clases “inferiores”. A esto se le une la línea evolutiva que siguen los personajes implicados en la trama y el conocimiento que poco a poco van teniendo los protagonistas sobre ellos mismos y sus motivaciones.
A todo esto, sumado a los elementos fantásticos más comunes de las novelas del género convierten a Berserk en una obra de arte dentro del género.
El protagonista es Gutts (Gatsu), un mercenario que comenzó sus andaduras cuando era niño, y que se mueve y actúa por venganza y por un odio mucho mayor que cualquier miedo o dolor físico. Su enorme espada (tan alta como él) y su increíble destreza atraerán la atención de Grifith, el jefe de la Banda del Halcón, un grupo de mercenarios famoso por sus victorias.
Grifith va a reclutar a Gutts y le hará miembro de su banda, de la que forman parte el resto de los protagonistas: Caska, Judeau, Ricket y Pippin serán los personajes más cercanos a Gutts.`,
    year: 1998,
    genre: "Cómics manga, novelas gráficas, Fantasía oscura, Seinen", 
    epubUrl: "https://www.mediafire.com/file/a8h5bgyijmg8j6z/Berserk_Tomo_15-21.zip/file",
    pdfUrl: "https://drive.google.com/uc?export=download&id=",
    onlineUrl: "",
  },
  {
    id: "70",
    title: "Berserk",
    author: "Kentaro Miura",
    cover: "https://www.pro-bems.com/IMAGES/images_1/BER07316441/m/BER07316441_1.jpg", 
    saga: "Tomo 22-28", 
    description: `Guts es un guerrero vestido de negro de los pies a la cabeza que porta una gigantesca espada más larga que su propia estatura y un robusto brazo ortopédico de hierro...
Berserk es una historia de batallas épicas, de venganzas, de muerte y de luchas por conseguir el poder, por conseguir un nombre en una sociedad noble y despreciativa con las clases “inferiores”. A esto se le une la línea evolutiva que siguen los personajes implicados en la trama y el conocimiento que poco a poco van teniendo los protagonistas sobre ellos mismos y sus motivaciones.
A todo esto, sumado a los elementos fantásticos más comunes de las novelas del género convierten a Berserk en una obra de arte dentro del género.
El protagonista es Gutts (Gatsu), un mercenario que comenzó sus andaduras cuando era niño, y que se mueve y actúa por venganza y por un odio mucho mayor que cualquier miedo o dolor físico. Su enorme espada (tan alta como él) y su increíble destreza atraerán la atención de Grifith, el jefe de la Banda del Halcón, un grupo de mercenarios famoso por sus victorias.
Grifith va a reclutar a Gutts y le hará miembro de su banda, de la que forman parte el resto de los protagonistas: Caska, Judeau, Ricket y Pippin serán los personajes más cercanos a Gutts.`,
    year: 2001,
    genre: "Cómics manga, novelas gráficas, Fantasía oscura, Seinen", 
    epubUrl: "https://www.mediafire.com/file/kdjrm1jc5mdsxom/Berserk_Tomo_22-28.zip/file",
    pdfUrl: "https://drive.google.com/uc?export=download&id=",
    onlineUrl: "",
  },
  {
    id: "71",
    title: "Berserk",
    author: "Kentaro Miura",
    cover: "https://m.media-amazon.com/images/I/41QebloUa3L._SY445_SX342_ML2_.jpg", 
    saga: "Tomo 29-35", 
    description: `Guts es un guerrero vestido de negro de los pies a la cabeza que porta una gigantesca espada más larga que su propia estatura y un robusto brazo ortopédico de hierro...
Berserk es una historia de batallas épicas, de venganzas, de muerte y de luchas por conseguir el poder, por conseguir un nombre en una sociedad noble y despreciativa con las clases “inferiores”. A esto se le une la línea evolutiva que siguen los personajes implicados en la trama y el conocimiento que poco a poco van teniendo los protagonistas sobre ellos mismos y sus motivaciones.
A todo esto, sumado a los elementos fantásticos más comunes de las novelas del género convierten a Berserk en una obra de arte dentro del género.
El protagonista es Gutts (Gatsu), un mercenario que comenzó sus andaduras cuando era niño, y que se mueve y actúa por venganza y por un odio mucho mayor que cualquier miedo o dolor físico. Su enorme espada (tan alta como él) y su increíble destreza atraerán la atención de Grifith, el jefe de la Banda del Halcón, un grupo de mercenarios famoso por sus victorias.
Grifith va a reclutar a Gutts y le hará miembro de su banda, de la que forman parte el resto de los protagonistas: Caska, Judeau, Ricket y Pippin serán los personajes más cercanos a Gutts.`,
    year: 2005,
    genre: "Cómics manga, novelas gráficas, Fantasía oscura, Seinen",
    epubUrl: "https://www.mediafire.com/file/p7olqdiumm1iw5m/Berserk_Tomo_29-35.zip/file",
    pdfUrl: "https://drive.google.com/uc?export=download&id=",
    onlineUrl: "",
  },
  {
    id: "72",
    title: "Berserk",
    author: "Kentaro Miura",
    cover: "https://m.media-amazon.com/images/I/41YlKzBpM1L._SY445_SX342_ML2_.jpg", 
    saga: "Tomo 36-42", 
    description: `Guts es un guerrero vestido de negro de los pies a la cabeza que porta una gigantesca espada más larga que su propia estatura y un robusto brazo ortopédico de hierro...
Berserk es una historia de batallas épicas, de venganzas, de muerte y de luchas por conseguir el poder, por conseguir un nombre en una sociedad noble y despreciativa con las clases “inferiores”. A esto se le une la línea evolutiva que siguen los personajes implicados en la trama y el conocimiento que poco a poco van teniendo los protagonistas sobre ellos mismos y sus motivaciones.
A todo esto, sumado a los elementos fantásticos más comunes de las novelas del género convierten a Berserk en una obra de arte dentro del género.
El protagonista es Gutts (Gatsu), un mercenario que comenzó sus andaduras cuando era niño, y que se mueve y actúa por venganza y por un odio mucho mayor que cualquier miedo o dolor físico. Su enorme espada (tan alta como él) y su increíble destreza atraerán la atención de Grifith, el jefe de la Banda del Halcón, un grupo de mercenarios famoso por sus victorias.
Grifith va a reclutar a Gutts y le hará miembro de su banda, de la que forman parte el resto de los protagonistas: Caska, Judeau, Ricket y Pippin serán los personajes más cercanos a Gutts.`,
    year: 2011,
    genre: "Cómics manga, novelas gráficas, Fantasía oscura, Seinen",
    epubUrl: "https://drive.google.com/uc?export=download&id=1npWU2iSc6ZwhoaHOJBR2L0v8zXZ00QkA",
    pdfUrl: "https://drive.google.com/uc?export=download&id=",
    onlineUrl: "",
  },
  {
    id: "73",
    title: "Las mentiras de Locke Lamora",
    author: "Scott Lynch",
    cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBTahr2XvdvNDWmfimbjDXvYUFROE-U7KC-xvnKBDN1sn_v8dd", 
    saga: "Cronicas de Los Caballeros Bastardos #01", 
    description:"La vida de un huérfano suele ser dura y breve en Camorr, una ciudad de canales, palacios y templos, construida sobre las ruinas de una raza desaparecida. Sin embargo, su rápida inteligencia y un innato talento para el robo permiten a Locke Lamora sobrevivir y ser recogido por un sacerdote ciego que ni es sacerdote ni ciego, que transmitirá sus extraordinarias habilidades a su familia de «huérfanos»: los Caballeros Bastardos. Pronto no estará a salvo la riqueza de ningún noble de Camorr, dominio de Locke. Pero la aparición de un oscuro personaje desencadena una guerra por el control de los bajos fondos de la ciudad. Atrapados en un juego mortal, el ingenio y la lealtad de Locke y sus amigos serán sometidos a prueba en su lucha por la vida.",
    year: 2006,
    genre: "Fantasía Urbana, Fantasía de Picaresca/Estafas",
    epubUrl: "https://drive.google.com/uc?export=download&id=1PQZuR7UJYbr9LEZ_IeTAKfrjt3z6cshL",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1dB2xS0wXvD11qETvVRKmFQiISTxT9xIQ",
    onlineUrl: "",
  },
{
    id: "58",
    title: "Vagabond",
    author: "Takehiko Inoue",
    cover: "https://m.media-amazon.com/images/I/51UWqKOHEsL._SY445_SX342_ML2_.jpg", 
    saga: "Tomo 01-05", 
    description:"Cuenta la historia del legendario espadachín Musashi Miyamoto, la figura histórica más importante del Japón en lo que se refiere al desarrollo de las técnicas de lucha con espada. Desde su juventud como el violento e iracundo joven llamado Takezo, sobreviviendo (aun estando del lado perdedor) a una de las batallas más sangrientas de la historia: Sekigahara; hasta su decisión de pasar a llamarse Musashi y embarcarse en una búsqueda de autosuperación personal que lo llevará a enfrentarse con los más grandes expertos de las artes marciales del país.",
    year: 1998,
    genre: "Cómics manga, novelas gráficas",
    epubUrl: "https://www.mediafire.com/file/bmiylqhbdqnb1b2/Vagabond_-_Takehiko_Inoue_T01-05.zip/file",
    pdfUrl: "https://drive.google.com/uc?export=download&id=15W9pIL7CwKRhDySbeAgDTibm1HQKweu9",
    onlineUrl: "",
  },
  {
    id: "59",
    title: "Vagabond",
    author: "Takehiko Inoue",
    cover: "https://m.media-amazon.com/images/I/51dsfwrkv9L._SY425_.jpg", 
    saga: "Tomo 06-10", 
    description:"Cuenta la historia del legendario espadachín Musashi Miyamoto, la figura histórica más importante del Japón en lo que se refiere al desarrollo de las técnicas de lucha con espada. Desde su juventud como el violento e iracundo joven llamado Takezo, sobreviviendo (aun estando del lado perdedor) a una de las batallas más sangrientas de la historia: Sekigahara; hasta su decisión de pasar a llamarse Musashi y embarcarse en una búsqueda de autosuperación personal que lo llevará a enfrentarse con los más grandes expertos de las artes marciales del país.",
    year: 2001,
    genre: "Cómics manga, novelas gráficas",
    epubUrl: "https://drive.google.com/uc?export=download&id=1cwoyyS0rFoCA8cTHFPY1VKgMZKyzQPOH",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1DitVm65NdJyfiypFspTi6ue1aZZXokk0",
    onlineUrl: "",
  },
  {
    id: "60",
    title: "Vagabond",
    author: "Takehiko Inoue",
    cover: "https://m.media-amazon.com/images/I/51QXTFQE91L._SY445_SX342_ML2_.jpg", 
    saga: "Tomo 11-15", 
    description:"Cuenta la historia del legendario espadachín Musashi Miyamoto, la figura histórica más importante del Japón en lo que se refiere al desarrollo de las técnicas de lucha con espada. Desde su juventud como el violento e iracundo joven llamado Takezo, sobreviviendo (aun estando del lado perdedor) a una de las batallas más sangrientas de la historia: Sekigahara; hasta su decisión de pasar a llamarse Musashi y embarcarse en una búsqueda de autosuperación personal que lo llevará a enfrentarse con los más grandes expertos de las artes marciales del país.",
    year: 2003,
    genre: "Cómics manga, novelas gráficas", 
    epubUrl: "https://drive.google.com/uc?export=download&id=1kwPi-uZC9xGYBx71jZN8EflsA1PKN4dA",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1k3XbrwUYVRL7NdiACEfkkcV4ibvlEiUQ",
    onlineUrl: "",
  },
  {
    id: "61",
    title: "Vagabond",
    author: "Takehiko Inoue",
    cover: "https://m.media-amazon.com/images/I/51As033a8WL._SY445_SX342_ML2_.jpg", 
    saga: "Tomo 16-20", 
    description:"Cuenta la historia del legendario espadachín Musashi Miyamoto, la figura histórica más importante del Japón en lo que se refiere al desarrollo de las técnicas de lucha con espada. Desde su juventud como el violento e iracundo joven llamado Takezo, sobreviviendo (aun estando del lado perdedor) a una de las batallas más sangrientas de la historia: Sekigahara; hasta su decisión de pasar a llamarse Musashi y embarcarse en una búsqueda de autosuperación personal que lo llevará a enfrentarse con los más grandes expertos de las artes marciales del país.",
    year: 2005,
    genre: "Cómics manga, novelas gráficas", 
    epubUrl: "https://drive.google.com/uc?export=download&id=1UDk0qnk-vaTaNE9PLpFxQw4ge9a1bVWS",
    pdfUrl: "https://drive.google.com/uc?export=download&id=11-Ke-wdPwx9VSW8yUotetNPOjvpYI8DV",
    onlineUrl: "",
  },
  {
    id: "62",
    title: "Vagabond",
    author: "Takehiko Inoue",
    cover: "https://imagessl8.casadellibro.com/a/l/s7/08/9788416243808.webp", 
    saga: "Tomo 21-25", 
    description:"Cuenta la historia del legendario espadachín Musashi Miyamoto, la figura histórica más importante del Japón en lo que se refiere al desarrollo de las técnicas de lucha con espada. Desde su juventud como el violento e iracundo joven llamado Takezo, sobreviviendo (aun estando del lado perdedor) a una de las batallas más sangrientas de la historia: Sekigahara; hasta su decisión de pasar a llamarse Musashi y embarcarse en una búsqueda de autosuperación personal que lo llevará a enfrentarse con los más grandes expertos de las artes marciales del país.",
    year: 2007,
    genre: "Cómics manga, novelas gráficas",
    epubUrl: "https://drive.google.com/uc?export=download&id=15qQTmj2EXeeQrqxn-O9KRIAMPk_1aQIN",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1m-EMINRTWKCJx-zy5phIcCMmbQiuuKpl",
    onlineUrl: "",
  },
  {
    id: "63",
    title: "Vagabond",
    author: "Takehiko Inoue",
    cover: "https://m.media-amazon.com/images/I/51opxL-pyFL._SY445_SX342_ML2_.jpg", 
    saga: "Tomo 26-30", 
    description:"Cuenta la historia del legendario espadachín Musashi Miyamoto, la figura histórica más importante del Japón en lo que se refiere al desarrollo de las técnicas de lucha con espada. Desde su juventud como el violento e iracundo joven llamado Takezo, sobreviviendo (aun estando del lado perdedor) a una de las batallas más sangrientas de la historia: Sekigahara; hasta su decisión de pasar a llamarse Musashi y embarcarse en una búsqueda de autosuperación personal que lo llevará a enfrentarse con los más grandes expertos de las artes marciales del país.",
    year: 2009,
    genre: "Cómics manga, novelas gráficas",
    epubUrl: "https://drive.google.com/uc?export=download&id=1vD5E0I8kskD-3BGGhupj6WxuaPEuam-E",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1CbEzp7WTyYljnPeUrAi6RKnMWWW0QzFx",
    onlineUrl: "",
  },
  {
    id: "64",
    title: "Vagabond",
    author: "Takehiko Inoue",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1266507323i/7749279.jpg", 
    saga: "Tomo 31-34", 
    description:"Cuenta la historia del legendario espadachín Musashi Miyamoto, la figura histórica más importante del Japón en lo que se refiere al desarrollo de las técnicas de lucha con espada. Desde su juventud como el violento e iracundo joven llamado Takezo, sobreviviendo (aun estando del lado perdedor) a una de las batallas más sangrientas de la historia: Sekigahara; hasta su decisión de pasar a llamarse Musashi y embarcarse en una búsqueda de autosuperación personal que lo llevará a enfrentarse con los más grandes expertos de las artes marciales del país.",
    year: 2011,
    genre: "Cómics manga, novelas gráficas",
    epubUrl: "https://drive.google.com/uc?export=download&id=1GTyPfjYWL3f03MY_gQ7cnugIk-KoiNM7",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1XDCZAehahTJJlKJBbxESVR7kM1fXLw2N",
    onlineUrl: "",
  },
  {
    id: "65",
    title: "Vagabond",
    author: "Takehiko Inoue",
    cover: "https://m.media-amazon.com/images/I/51bCTNrzjXL._SY445_SX342_ML2_.jpg", 
    saga: "Tomo 35-38", 
    description:"Cuenta la historia del legendario espadachín Musashi Miyamoto, la figura histórica más importante del Japón en lo que se refiere al desarrollo de las técnicas de lucha con espada. Desde su juventud como el violento e iracundo joven llamado Takezo, sobreviviendo (aun estando del lado perdedor) a una de las batallas más sangrientas de la historia: Sekigahara; hasta su decisión de pasar a llamarse Musashi y embarcarse en una búsqueda de autosuperación personal que lo llevará a enfrentarse con los más grandes expertos de las artes marciales del país.",
    year: 2013,
    genre: "Cómics manga, novelas gráficas", 
    epubUrl: "https://drive.google.com/uc?export=download&id=1TfAALmNZ13WTO5MvW8nkzGxIl_5Ec1Co",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1uvlmM3v1mXcVPlDYtqABanlU4z2n30XM",
    onlineUrl: "",
  },
  {
    id: "56",
    title: "Storm Front",
    author: "Jim Butcher",
    cover: "https://m.media-amazon.com/images/I/41r0b4e7RfL._SY445_SX342_.jpg", 
    saga: "The Dresden Files #1", 
    description:"As a professional wizard, Harry Dresden knows firsthand that the “everyday” world is actually full of strange and magical things—and most of them don’t play well with humans. And those that do enjoy playing with humans far too much. He also knows he’s the best at what he does. Technically, he’s the only at what he does. But even though Harry is the only game in town, business—to put it mildly—stinks. So when the Chicago P.D. bring him in to consult on a double homicide committed with black magic, Harry's seeing dollar signs. But where there's black magic, there's a black mage behind it. And now that mage knows Harry's name...",
    year: 2000,
    genre: "Fantasía, Ficción, Magia", 
    epubUrl: "https://drive.google.com/uc?export=download&id=1VrzR756E7_OrKRzXoJ59FrxsdkTZarnC",
    pdfUrl: "https://drive.google.com/uc?export=download&id=10yQsfMZ84YyPo5SAvhVe9eHzrkh1XNsl",
    onlineUrl: "",
  },
  {
    id: "55",
    title: "La paciente silenciosa",
    author: "Alex Michaelides",
    cover: "https://m.media-amazon.com/images/I/41Fcxm7e++L._SY445_SX342_.jpg", 
    saga: "", 
    description:`SOLO ELLA SABE LO QUE SUCEDIÓ. 
    SOLO YO PUEDO HACERLA HABLAR.
    Alicia Berenson, una pintora de éxito, dispara cinco tiros en la cabeza de su marido, y no vuelve a hablar nunca más. Su negativa a emitir palabra alguna convierte una tragedia doméstica en un misterio que atrapa la imaginación de toda Inglaterra.
    Theo Faber, un ambicioso psicoterapeuta forense obsesionado con el caso, está empeñado en desentrañar el misterio de lo que ocurrió aquella noche fatal y consigue una plaza en The Grove, la unidad de seguridad en el norte de Londres a la que Alicia fue enviada hace seis años y en la que sigue obstinada en su silencio.
    Pronto descubre que el mutismo de la paciente está mucho más enraizado de lo que pensaba. Pero, si al final hablara, ¿estaría dispuesto a escuchar la verdad?`,year: 2021,
    genre: "Thriller Psicológico", 
    epubUrl: "https://drive.google.com/uc?export=download&id=1qxAL7PhaTCNqoPEKGRxkKJeDT6cdkYLD",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1EsHu9WK70_dJb3DaCqTO6wH3SEYVuWT4",
    onlineUrl: "",
  },
  {
    id: "54",
    title: "Blood Over Bright Haven",
    author: "M. L. Wang",
    cover: "https://m.media-amazon.com/images/I/51YIONQ8egL._SY445_SX342_.jpg", 
    saga: "", 
    description:"For twenty years, Sciona has devoted every waking moment to the study of magic, fueled by a mad desire to achieve the impossible: to be the first woman ever admitted to the High Magistry at the University of Magics and Industry. When Sciona finally passes the qualifying exam and becomes a highmage, she finds her challenges have just begun. Her new colleagues are determined to make her feel unwelcome—and, instead of a qualified lab assistant, they give her a janitor. What neither Sciona nor her peers realize is that her taciturn assistant was not always a janitor. Ten years ago, he was a nomadic hunter who lost his family on their perilous journey from the wild plains to the city. But now he sees the opportunity to understand the forces that decimated his tribe, drove him from his homeland, and keep the privileged in power. At first, mage and outsider have a fractious relationship. But working together, they uncover an ancient secret that could change the course of magic forever—if it doesn’t get them killed first.",
    year: 2023,
    genre: "Fantasía, Fantasía Épica", 
    epubUrl: "https://drive.google.com/uc?export=download&id=15gE-s-J66lmDFR9VeVSEa7u_THRuzTn6",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1x8DqWWvykdGNkS6o3_m-aNQWF3fxVxVy",
    onlineUrl: "",
  },
  {
    id: "53",
    title: "Los jardines de la luna",
    author: "Steven Erikson",
    cover: "https://m.media-amazon.com/images/I/51N6EPWJ2XL._SY445_SX342_ML2_.jpg", 
    saga: "Malaz: El libro de los Caídos #1", 
    description:`Tras guerras interminables y amargas luchas internas, el descontento se ha apoderado del Imperio de Malaz. Incluso las tropas imperiales, siempre ansiosas por derramar sangre, necesitan un respiro. Sin embargo, las pretensiones expansionistas de la emperatriz Laseen no tienen límites, más aun cuando son reforzadas por sus temibles agentes de la Garra.
    El sargento Whiskeyjack y su escuadrón necesitan tiempo para llorar los muertos del último asedio, pero Darujhistan, la última de las Ciudades Libres de Genabackis, los espera; en ella ha puesto la emperatriz su mirada depredadora.
    El Imperio no está solo en este juego. Las fuerzas siniestras conspiran dentro y fuera de las sendas mágicas, y entretanto, hasta los dioses se preparan para la batalla...`,
    year: 1999,
    genre: "Fantasía, Fantasía Épica, Fantasía Oscura",
    epubUrl: "https://drive.google.com/uc?export=download&id=1PIjGlvyoQ55V91Ewc3n82npm3DX4Zn41",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1cJ73I6Ui4DCcfNJAaYmhsGUtrf4gASzj",
    onlineUrl: "",
  },
  {
    id: "52",
    title: "Las puertas de la Casa de la Muerte",
    author: "Steven Erikson",
    cover: "https://m.media-amazon.com/images/I/716SRbduDiL._SY466_.jpg", 
    saga: "Malaz: El libro de los Caídos #2", 
    description:`Debilitado por los acontecimientos en Darujhistan, el Imperio de Malaz se halla al borde de la anarquía. En el vasto dominio de las Siete Ciudades, en el desierto Santo Raraku, la vidente Sha'ik y sus seguidores se preparan para el Torbellino, la sublevación profetizada desde hace mucho tiempo. Será un brote de fanatismo que envolverá al imperio en un salvajismo y una sed de sangre sin precedentes. Estallará uno de los conflictos más sangrientos de su historia y surgirán nuevos destinos y leyendas...
    En las minas de otaralita, Felisin sueña con vengarse de su hermana, que la condenó a una vida de esclava. Los ahora-proscritos Abrasapuentes, Violín y el asesino Kalam han jurado devolver a Apsalar a su patria y matar a la emperatriz Laseen.
    Mientras tanto, Coltaine, el carismático comandante malazano, conduce a sus soldados a una última batalla para salvar la vida de treinta mil refugiados. Y a esa tierra arruinada llegan dos viejos conocidos, Mappo y el jaghut Icarium, portadores de un secreto devastador que amenaza con liberarse de sus cadenas...`,
    year: 2000,
    genre: "Fantasía, Fantasía Épica, Fantasía Oscura",
    epubUrl: "https://drive.google.com/uc?export=download&id=1Zqk3LrQWmpDXN7Z2lRgOoY9YsqOhatxo",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1WLoMoImsTVJX-csJZlMKNqjPU1TYK-52",
    onlineUrl: "",
  },
  {
    id: "51",
    title: "Memorias del Hielo",
    author: "Steven Erikson",
    cover: "https://m.media-amazon.com/images/I/514VA37DMHL._SY445_SX342_ML2_.jpg", 
    saga: "Malaz: El libro de los Caídos #3", 
    description:`Una fuerza aterradora ha surgido en el continente asolado de Genabackis. Como una marea de sangre corrompida, el Dominio Painita cruza el continente como lava hirviente que consume a todos los que no escuchan la palabra de su profeta, el Vidente Painita. En su camino se interpone una alianza incómoda: la hueste de Dujek Unbrazo y los veteranos Abrasapuentes de Whiskeyjack, junto con antiguos adversarios: el caudillo Caladan Brood, Anomander Rake y sus tiste andii. Superados en número y desconfiando de todo y de todos, deben hacer llegar el mensaje a cualquier posible aliado, incluyendo las Espadas Grises, una hermandad mercenaria que ha jurado defender a toda costa la ciudad sitiada de Capustan.
    Pero son más los clanes antiguos que se están reuniendo. Los t#lan imass se alzan para responder a una antigua llamada primitiva. Algo maligno amenaza este mundo: las sendas están envenenadas y abundan los rumores sobre un dios que se ha deshecho de sus cadenas y está empeñado en vengarse...`,
    year: 2001, 
    genre: "Fantasía, Fantasía Épica, Fantasía Oscura",
    epubUrl: "https://drive.google.com/uc?export=download&id=1CsPm9TTBYIGa9v2-s6AzqnAATjlhTsG6",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1Xe3Gh6p9RuCzN-d-jMZBcpOesTyWGKlo",
    onlineUrl: "",
  },
  {
    id: "50",
    title: "La casa de Cadenas",
    author: "Steven Erikson",
    cover: "https://m.media-amazon.com/images/I/71pEJN7I0lL._SY466_.jpg", 
    saga: "Malaz: El libro de los Caídos #4", 
    description:"Este volumen comienza en el norte de Genabackis, el día que empieza el extraordinario destino de Karsa Orlong, uno de los tres guerreros salvajes que descienden las montañas para atacar las tierras del sur. Pasados unos años, Tavore, la inexperta consejera de la emperatriz, debe adiestrar a doce mil soldados para convertirlos en una fuerza capaz de desafiar a las hordas de la elegida, Sha'ik, que aguardan en el desierto. Allí, sus caudillos están enzarzados en una lucha de poder que amenaza al alma de la rebelión, mientras que Sha'ik se obsesiona con la que cree que es su mayor enemiga: su hermana.",
    year: 2002, 
    genre: "Fantasía, Fantasía Épica, Fantasía Oscura",
    epubUrl: "https://drive.google.com/uc?export=download&id=15dc3f6y5mlAJ3xucfwf3zcXyjTYjWKr2",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1qTQPIFiqAWIDPvquqYBZyBs8QHDzMj4J",
    onlineUrl: "",
  },
  {
    id: "49",
    title: "Mareas de Medianoche",
    author: "Steven Erikson",
    cover: "https://m.media-amazon.com/images/I/517npRzsevL._SY466_.jpg", 
    saga: "Malaz: El libro de los Caídos #5", 
    description:"Después de décadas de guerras intestinas, las tribus de los Tiste Edur al fin se han unido bajo el mando del Rey Warlock. Hay paz, pero el precio ha sido terrible: un pacto hecho con un poder oculto cuyos motivos son, en el mejor de los casos, sospechosos, y, en el peor, mortales. Al sur, el rapaz reino de Lether, impaciente por ver cumplido el papel que profetizaron para él largo tiempo atrás como imperio renacido, ha esclavizado a sus vecinos menos civilizados. Es decir, a todos salvo a los Tiste Edur. El destino ha decretado que también ellos han de caer. Y, sin embargo, la lucha inminente que librarán estos dos pueblos no es más que un pálido reflejo de un conflicto más primitivo. Se están reuniendo antiguas fuerzas y con ellas la herida todavía abierta de una vieja traición y un ansia de venganza...",
    year: 2003, 
    genre: "Fantasía, Fantasía Épica, Fantasía Oscura",
    epubUrl: "https://drive.google.com/uc?export=download&id=",
    pdfUrl: "https://drive.google.com/uc?export=download&id=",
    onlineUrl: "",
  },
  {
    id: "48",
    title: "Proyecto Hail Mary",
    author: "Andy Weir",
    cover: "https://m.media-amazon.com/images/I/51tdoxl1L6L._SY445_SX342_ControlCacheEqualizer_.jpg", 
    saga: "", 
    description:`UN ÚNICO ASTRONAUTA. 
    UNA MISIÓN IMPOSIBLE. 
    UN ALIADO QUE JAMÁS HABRÍA IMAGINADO. 
    Ryland Grace es el único superviviente en una misión desesperada. Es la última oportunidad y, si fracasa, la humanidad y la Tierra misma perecerán.  Claro que, de momento, él no lo sabe. Ni siquiera puede recordar su propio nombre, y mucho menos la naturaleza de su misión o cómo llevarla a cabo. Lo único que sabe es que ha estado en coma inducido durante mucho mucho tiempo. Acaba de despertar y se encuentra a millones de kilómetros de su hogar, sin más compañía que la de dos cadáveres. Muertos sus compañeros de tripulación, y a medida que va recuperando confusamente los recuerdos, Grace se da cuenta de que se enfrenta a una misión imposible. Recorriendo el espacio en una pequeña nave, depende de él acabar con una amenaza de extinción para nuestra especie. Sin apenas tiempo y con el ser humano más cercano a años luz de distancia, habrá de conseguirlo estando completamente solo.`,
    year: 2021,
    genre: "Ciencia-Ficción",
    epubUrl: "https://drive.google.com/uc?export=download&id=1XEC_LMdhdx7JtXzLc7-tlDGNIHRv5WR9",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1nQWbBUN7JRc86wWIVYKiYTc2yAXPw86B",
    onlineUrl: "",
  },
  {
    id: "47",
    title: "La voluntad de muchos",
    author: "James Islington",
    cover: "https://imagessl2.casadellibro.com/a/l/s7/72/9781982141172.webp", 
    saga: "Hierarchy #1", 
    description:`En la elitista Academia Catena, un joven fugitivo va a ir desvelando las capas de un elaborado misterio y secretos capaces de cambiar el mundo a lo largo de esta nueva saga de fantasía del autor superventas internacional James Islington.
    AUDI. VIDI. TACE.
    Los habitantes de la república Catena, también llamada la Jerarquía, quizá dominen el mundo, pero no lo saben todo.
    Les he dicho que mi nombre es Vis Telimus. Les he dicho que me convertí en huérfano después de un trágico accidente hace tres años, y que ha sido solo la buena fortuna la que ha hecho que me acepten en su escuela más prestigiosa. Les he dicho que una vez que me gradúe me uniré gustosamente al resto de la sociedad civilizada, lo que quiere decir que permitiré que mi fuerza, mis deseos y mi determinación, lo que ellos llaman la Voluntad, sean parasitados y añadidos al poder de aquellos que están por encima de mí, como ya lo hacen millones. Como todos deben acabar haciendo.
    Les digo que soy uno de ellos, y me creen.
    Pero la verdad es que he sido enviado a la academia en busca de respuestas. Para resolver un asesinato. Para buscar un arma antigua. Para descubrir secretos que podrían hacer caer la república.
    Y nunca, jamás, cederé mi voluntad al imperio que ejecutó a mi familia.
    Para sobrevivir, sin embargo, tendré que ir escalando posiciones dentro de la academia. Tendré que sonreír, que hacer amigos, y fingir que soy uno de ellos. Porque si no lo hago, aquellos que me quieren controlar, los que saben mi auténtico nombre, ya no me necesitarán.
    Y si la Jerarquía descubre quién soy de verdad, me matarán.`,
    year: 2023,
    genre: "Fantasía, Fantasía Épica",
    epubUrl: "https://drive.google.com/uc?export=download&id=1AF4lMVbzufQYuMQgZSuQMFc8ofW-1TTl",
    pdfUrl: "https://drive.google.com/uc?export=download&id=18OoUzIIcunlsDVT_8sSdhWVQ8pHcqn8A",
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
    epubUrl: "https://drive.google.com/uc?export=download&id=1Mf6Hg8LeZ_Z3Fq9XmHLqcRlfbxsE7Dsl",
    pdfUrl: "https://drive.google.com/uc?export=download&id=15IPJhbFoQrBvfWj4t0eaOBpiKZoTS7ZO",
    onlineUrl: "",
  },
  {
    id: "7",
    title: "La Guerra de la Amapola",
    author: "R.F. Kuang",
    cover: "https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/960w/products/6307/17064/Kuang_The_Poppy_War_cover__57713.1687451112.jpg?c=1", 
    saga: "The Poppy War #1", 
    description: " Que Rin superase el Keju (una prueba para encontrar a los jóvenes con más talento del imperio) sorprendió a todo el mundo: a los oficiales que realizaron la prueba, que no podían creer que una huérfana de la Provincia del Gallo pudiera superarla sin hacer trampas; a los tutores de Rin, que pensaban que podrían casarla y seguir con sus labores delictivas; y a la propia Rin, que se dio cuenta de que al fin se había librado de la servidumbre y la desesperación que marcaban su día a día. Pero que entrara en Sinegard, la academia militar más elitista de Nikan, fue aún más sorprendente. Sin embargo, las sorpresas no siempre son buenas. Porque una sencilla muchacha de piel oscura del sur no lo tiene fácil en Sinegard. Sus compañeros le hacen la vida imposible por su color, su pobreza y su género. Pero Rin descubre que posee un poder letal y extraordinario: una aptitud para el casi mítico arte del chamanismo. Por ahora el imperio Nikara está en paz, pero la Federación de Mugen aún acecha al otro lado del mar. La Federación se valió de sus avances militares para ocupar Nikan durante décadas tras la primera Guerra de la Amapola, y aún se notan los estragos de la segunda. Mientras algunas personas tratan de seguir con sus vidas, unas pocas son conscientes de que la tercera Guerra de la Amapola está próxima… Los poderes chamánicos de Rin podrían ser la única forma de salvar a su gente. Pero a medida que va sabiendo más acerca del dios que la ha elegido, el vengativo Fénix, Rin teme que ganar la guerra se lleve por delante su humanidad… y puede que ya sea demasiado tarde.",
    year: 2018,
    genre: "Fantasía, Fantasía Oscura",
    epubUrl: "https://drive.google.com/uc?export=download&id=16wFoGQQvx1nnR0xjNjDPUvwzyQRIPknn",
    pdfUrl: "https://drive.google.com/uc?export=download&id=18vgaKTxNLTqQEL2I00m91Uaa-82CPOaq",
    onlineUrl: "",
  },
  {
    id: "8",
    title: "La República del Dragón",
    author: "R.F. Kuang",
    cover: "https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/960w/products/7420/16213/The_Dragon_Republic_by_R_F_Kuang__40426.1687451140.jpg?c=1", 
    saga: "The Poppy War #2", 
    description:"La guerra ha acabado. Y una nueva guerra acaba de empezar. Tres veces a lo largo de su historia, Nikan ha luchado por su supervivencia en las sangrientas Guerras de la Amapola. Aunque la tercera acaba de terminar, Rin no puede olvidar la atrocidad que cometió para salvar a su pueblo. Ahora está tratando de librarse de su culpa, de su adicción al opio y de las órdenes asesinas del ardiente Fénix, el dios vengativo que ha bendecido a Rin con su temible poder. Aunque no quiere seguir viviendo, se niega a morir hasta vengarse de la Emperatriz, que traicionó a la que fue la tierra natal de Rin. Su única esperanza es unir fuerzas con el poderoso jefe militar del Dragón, que planea conquistar Nikan, derrocar a la Emperatriz y crear una nueva república. Pero ni la Emperatriz ni el jefe militar del Dragón son lo que parecen. Cuantas más atrocidades presencia Rin, más teme que su amor por Nikan la obligue a usar el apocalíptico poder del Fénix una vez más. Porque Rin está dispuesta a sacrificar lo que haga falta para salvar a su país… y para conseguir su venganza.", 
    year: 2019,
    genre: "Fantasía, Fantasía Oscura",
    epubUrl: "https://drive.google.com/uc?export=download&id=1Ofc08Ic3iMyjNawvHZSwr6-FborHh2Y9",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1j4fx6v017hfj3uC50CG673jlMIxY207V",
    onlineUrl: "",
  },
  {
    id: "9",
    title: "El Dios en Llamas",
    author: "R.F. Kuang",
    cover: "https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/960w/products/7543/17545/The_Burning_God_by_R_F_Kuang__65228.1692595619.jpg?c=1", 
    saga: "The Poppy War #3", 
    description: "El esperadísimo final de la aclamada y galardonada saga La Guerra de la Amapola combina de un modo devastador la historia de China con un fantástico mundo de dioses y monstruos. Tras la brutal guerra civil, Rin lo ha perdido prácticamente todo. Pero no piensa abandonar a aquellos por quienes ha sacrificado tanto: la gente de las provincias del sur, y en especial la de Tikany, el pueblo que es su hogar. Al volver a sus raíces, Rin se enfrenta a retos difíciles, pero también encuentra inesperadas oportunidades. A pesar de que sus nuevos aliados de la Coalición Sureña son maliciosos y no se puede confiar en ellos, Rin pronto se da cuenta de que el auténtico poder en Nikan reside en la gente corriente, que ansía venganza y la venera como una diosa salvadora. Apoyada por las masas y por el ejército sureño, Rin hará lo que haga falta para destruir a sus enemigos y a cualquiera que amenace las artes chamánicas y a sus practicantes. A medida que crece su poder e influencia, ¿será capaz de resistirse a la embriagadora voz del Fénix, que solo desea ver el mundo arder?",
    year: 2020,
    genre: "Fantasía, Fantasía Oscura",
    epubUrl: "https://drive.google.com/uc?export=download&id=1QMv-9L5yNIQPGQx65uKrjX-OrqFHreFw",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1hZDBezyE6DEAVxKoW0LxhR1kJ9BjB5nH",
    onlineUrl: "",
  },
  {
    id: "10",
    title: "Amanecer Rojo",
    author: "Pierce Brown",
    cover: "https://m.media-amazon.com/images/I/51nd23JkBiL._SY445_SX342_ML2_.jpg", 
    saga: "Red Rising #1", 
    description: " Ideas como libertad o igualdad murieron junto con la Tierra. Ahora, en Marte, el equilibrio se sustenta en un férreo sistema de castas representadas por colores, en el que los dorados son la élite gobernante. Pero Darrow no es un dorado, es un rojo. Para sobrevivir debe ocultar su verdad sin olvidar que cada muerte, cada paso en la batalla, es por la libertad.", 
    year: 2014,
    genre: "Ciencia Ficción",
    epubUrl: "https://drive.google.com/uc?export=download&id=1bHy2ZcgaZZfRS7eBK9HXsopgevJ3PP7s",
    pdfUrl: "https://drive.google.com/uc?export=download&id=15MiHeATk_lRnlYvIPMBUxJtyKDPJtGkb",
    onlineUrl: "",
  },
  {
    id: "11",
    title: "Hijo Dorado",
    author: "Pierce Brown",
    cover: "https://m.media-amazon.com/images/I/61Xtkbld+6L._SY342_.jpg", 
    saga: "Red Rising #2", 
    description: `Tras una implacable competición en el Instituto de Marte, Darrow se ha anado un puesto de honor entre la élite gobernante. Ahora luce la cicatriz curvada de los dorados, los más crueles y brillantes de los humanos. Pero Darrow no es como ellos…
    SU FUTURO SE HA CONSTRUIDO SOBRE MENTIRAS, SU PASADO ESTÁ MARCADO POR LA TRAGEDIA. Y NO PERDONA. NO OLVIDA.
    Para hacer realidad su objetivo de destruir el sistema desde dentro, Darrow debe convertirse en el mejor de los dorados. El más fuerte. El más inteligente. El más implacable. Solo así devolverá la luz a su pueblo.
    Aunque su sombra se torne más oscura a cada paso.`,
    year: 2015,
    genre: "Ciencia Ficción",
    epubUrl: "https://drive.google.com/uc?export=download&id=16MCyC17pDqRNhNSIq6uTf_USMDLhRRaF",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1V7R6XGXAD6yFXi18lc7sfSfOTmfQXUqh",
    onlineUrl: "",
  },
  {
    id: "12",
    title: "Mañana Azul",
    author: "Pierce Brown",
    cover: "https://m.media-amazon.com/images/I/41OKNJdB+QL._SY445_SX342_ML2_.jpg", 
    saga: "Red Rising #3", 
    description: `HONOR
    VENGANZA
    REVOLUCIÓN
    Arriesgándolo todo para hundir la Sociedad dorada, Darrow ha sobrevivido a las despiadadas rivalidades entre los guerreros más poderosos. Ha logrado ascender y ha aguardado pacientemente el momento de desencadenar la revolución que acabará con la jerarquía desde dentro. Por fin ha llegado la hora… TRAICIONADO POR SUS ALIADOS. ABANDONADO A LA OSCURIDAD. UNA VOZ SE ALZARÁ POR LA JUSTICIA. Para vencer, necesitará persuadir a los que están sumidos en la oscuridad para que rompan sus cadenas y reclamen un destino que se les ha negado durante mucho tiempo. Un destino demasiado glorioso para renunciar a él. CUANDO LA LIBERTAD ESTÁ A TU ALCANCE LA ESPERANZA SE CONVIERTE EN TU ENEMIGO.`,
    year: 2016,
    genre: "Ciencia Ficción",
    epubUrl: "https://drive.google.com/uc?export=download&id=1MvwahH13UbelHMub4DJatk8529or-6lY",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1BYfV1oYyUu6NQWHDZdaU0_oaX9YrAOHV",
    onlineUrl: "",
  },
  {
    id: "13",
    title: "Oro y Ceniza",
    author: "Pierce Brown",
    cover: "https://m.media-amazon.com/images/I/61E0AoGmdsL._SY342_.jpg", 
    saga: "Red Rising #4", 
    description: `Darrow nació esclavo. Pero se convirtió en un arma. Acabó con siglos de gobierno dorado y se convirtió en el héroe de una república nueva y poderosa. Ahora deberá arriesgar todo por lo que ha luchado en una última misión desesperada. Pero nuevos destinos se entrelazarán con el suyo.
    Una joven roja huye de la tragedia de un campo de refugiados y logra una nueva vida que ni siquiera habría sido capaz de imaginar. Un exsoldado se ve obligado a robar lo más preciado del universo… o a pagarlo con su vida. Y Lisandro au Lune, el heredero en el exilio de la soberana, merodea por las estrellas, obsesionado por la pérdida del mundo que Darrow ha transformado y soñando con el que brotará de sus cenizas.`,
    year: 2018,
    genre: "Ciencia Ficción",
    epubUrl: "https://drive.google.com/uc?export=download&id=1ex3lyQKeY9Du5uxXArRvydHWEOO2zsvR",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1ma4HJ8ChVU2vfdAc9MfOe527gPY6JkNt",
    onlineUrl: "",
  },
  {
    id: "14",
    title: "Edad Oscura",
    author: "Pierce Brown",
    cover: "https://m.media-amazon.com/images/I/618pGq0SI0L._SY342_.jpg", 
    saga: "Red Rising #5", 
    description: `HÉROE, TRAIDOR, VILLANO.
    Hace diez años, Darrow encabezó una revolución que creó un nuevo mundo. Hoy disputa una guerra sin cuartel en Mercurio con la esperanza de salvarlo de la destrucción. Pero, ahora que deja a su paso un reguero de muerte, ¿seguirá siendo el héroe que rompió las cadenas? ¿O surgirá otra leyenda que ocupe su lugar?
    A SU SOMBRA, CADA VEZ MÁS OSCURA, SE ALZAN NUEVOS HÉROES.
    LISANDRO AU LUNE, el heredero en el exilio, ha regresado al Núcleo. Si consigue unir a las traicioneras familias doradas, la joven República podría perecer. La joven LIRIA, antigua refugiada roja, está acusada de traición y su única esperanza es una huida desesperada con nuevos e inverosímiles aliados. Secuestrados por una nueva amenaza para la República, PAX y ELECTRA, los hijos de Darrow y Sevro, deben confiar en un ladrón, EFRAÍN, para que los salve... Y este debe buscar en ellos su oportunidad para redimirse.
    ROMPIÓ LAS CADENAS PARA LUEGO ROMPER EL MUNDO.`,
    year: 2019,
    genre: "Ciencia Ficción",
    epubUrl: "https://drive.google.com/uc?export=download&id=1Zwdlhybqg8EElMYMXpdDyT5yfgfss4j3",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1Io1KxJfEZYBfSlsGRDOuqMZgfBDcHQIk",
    onlineUrl: "",
  },
  {
    id: "15",
    title: "El Portador de luz",
    author: "Pierce Brown",
    cover: "https://m.media-amazon.com/images/I/81Z6riEYj2L._SY342_.jpg", 
    saga: "Red Rising #6", 
    description: `HÉROE LÍDER LEYENDA
    El Segador es una leyenda, más mito que hombre: el salvador de mundos, el líder del Amanecer, el rompedor de cadenas. Pero el Segador también es Darrow, nacido de la tierra roja de Marte: un marido, un padre, un amigo. Abandonado lejos de casa tras una devastadora derrota en los campos de batalla de Mercurio, Darrow anhela regresar junto a su esposa y soberana, Virginia.
    ADEMÁS, DARROW DEBE DEFENDER MARTE DE LISANDRO, SU SANGUINARIO ASPIRANTE A CONQUISTADOR.
    LISANDRO AU LUNE ansía destruir el Amanecer y reestablecer la supremacía de los dorados, y arrasará los mundos para satisfacer sus ambiciones.
    Así comienza el largo viaje de regreso a casa de Darrow para reencontrarse con las personas que ama: VIRGINIA, CASIO, SEVRO. 
    Una aventura interplanetaria donde se reunirán viejos amigos, se forjarán nuevas alianzas y se enfrentarán los rivales en el campo de batalla. Porque el sueño de Eo sigue vivo y después de la era oscura vendrá una nueva época de luz, de victoria y de esperanza.
    SI LOS MUNDOS UNA VEZ NECESITARON AL SEGADOR, AHORA NECESITAN A DARROW PARA DEFENDER LA REPÚBLICA.`,
    year: 2023,
    genre: "Ciencia Ficción",
    epubUrl: "https://drive.google.com/uc?export=download&id=1rcgXEjr8cJqV3uONZhsLzkirVIQoWHh9",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1VgqzklLZXx6hRVG44bqjvD79OR17QQwm",
    onlineUrl: "",
  },
  {
    id: "16",
    title: "El imperio final",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/816IVfekyGL._SY342_.jpg", 
    saga: "Nacidos de la Bruma #1", 
    description: `Las brumas gobiernan la noche. El lord Legislador domina el mundo.
    En otros tiempos, un héroe se alzó para salvar la humanidad. Fracasó.
    Desde entonces, el mundo es un erial de ceniza y niebla gobernado por un emperador inmortal conocido como el lord Legislador.
    Pero la esperanza perdura. Una nueva revuelta cobra forma cimentándose en la treta definitiva: la astucia de un brillante genio del crimen y la determinación de una heroína insólita, una joven ladrona callejera que deberá aprender a controlar el poder de los nacidos de la bruma.`,
    year: 2006,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "https://drive.google.com/uc?export=download&id=1C_-8EUM0VIFqf-lwK7djalMaafSyrx-u",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1f7PV7RFKPptt2wpkFfcFrd4YoopgXs5q",
    onlineUrl: "",
  },
  {
    id: "17",
    title: "El Pozo de la Ascensión",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/81oUyFs0BCL._SY342_.jpg", 
    saga: "Nacidos de la Bruma #2", 
    description: `El mal ha sido derrotado. Pero la guerra acaba de empezar.
    Lograron lo imposible y pusieron fin al reinado milenario de lord Legislador. Ahora Vin, que ha pasado de ser una ladronzuela a una poderosa nacida de la bruma, y Elend Venture, el joven noble e idealista que la ama, deberán construir una sociedad nueva y próspera sobre las cenizas de ese imperio derrotado.
    Mientras las tensiones siguen creciendo tras la revuelta, una antigua leyenda ofrece un atisbo de esperanza para el pueblo. Sin embargo, incluso si las habladurías son ciertas, nadie sabe dónde se encuentra el Pozo de la Ascensión ni qué clase de poder otorga.
    Es muy posible que matar al lord Legislador fuera la parte fácil. Sobrevivir a las consecuencias de su caída será el verdadero desafío.`,
    year: 2007,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "https://drive.google.com/uc?export=download&id=1WybAAsWk5yg_3Ff-rUxfkeOBYD6GFhyx",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1x6VJbW3xAJyzj_7kQzyhIBaknCuA-AA4",
    onlineUrl: "",
  },
  {
    id: "18",
    title: "El Héroe de las Eras",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/81Ovwnu1dNL._SY342_.jpg", 
    saga: "Nacidos de la Bruma #3", 
    description: `Vin cumplió la profecía y liberó el poder acumulado en el Pozo de la Ascensión. Sin embargo, todo resultó ser una trampa, y ahora el ser divino llamado Ruina campa a sus anchas por el mundo decidido a arrasarlo con terremotos y ríos de fuego.
    Tras haber esquivado la muerte convirtiéndose en un nacido de la bruma, el emperador Elend Venture confía en que las pistas que dejó el lord Legislador les sirvan para contraatacar. Las profecías hablan de un héroe, pero ¿no estaban corrompidas? Vin deberá desenmarañar la verdad para compensar su error. Solo así llegará a ser el Héroe de las Eras antes de que Ruina aniquile toda la vida sobre el planeta.`,
    year: 2008,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "https://drive.google.com/uc?export=download&id=1JH2FcdYJwJfUI-cS8yUKdnTTz8dM-2it",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1SGTV4lmMTzgLuQkkttgMR7em5eTprTmA",
    onlineUrl: "",
  },
  {
    id: "19",
    title: "Elantris",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/81v-hlxgYyL._SY342_.jpg", 
    saga: "", 
    description: `Bienvenidos a la ciudad de Elantris, la poderosa y bella capital de Arelon llamada «la ciudad de los dioses». Antaño famosa sede de inmortales, lugar repleto de poderosa magia, Elantris ha caído en desgracia. Ahora solo acoge a los nuevos «muertos en vida», postrados en una insufrible «no-vida» tras una misteriosa y terrible transformación.
    Un matrimonio de Estado destinado a unir los reinos de Arelon y Teod se frustra, ya que el novio, Raoden, el príncipe de Arelon, sufre inesperadamente la Transformación, se convierte en un «muerto en vida» y debe refugiarse en Elantris. Su reciente esposa, la princesa Sarene de Teod, creyéndolo muerto, se ve obligada a incorporarse a la vida de Arelon y su nueva capital, Kae. Mientras, el embajador y alto sacerdote de otro reino vecino, Fjordell, usará su habilidad política para intentar dominar Arelod y Teod con el propósito de someterlos a su emperador y su dios.`,
    year: 2005,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "https://drive.google.com/uc?export=download&id=1--gWarB-mB9Hn9hhYcvxcLU0jj1fhIQh",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1Z0Nz7b1hd2D_3OI9o5y-G-6Yeor63fms",
    onlineUrl: "",
  },
  {
    id: "20",
    title: "El camino de los reyes",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/81pzG7oNfHL._SY342_.jpg", 
    saga: "El archivo de las tormentas #1", 
    description:  `Anhelo los días previos a la Última Desolación.
Los días en que los Heraldos nos abandonaron y los Caballeros Radiantes se giraron en nuestra contra. Un tiempo en que aún había magia en el mundo y honor en el corazón de los hombres.
El mundo fue nuestro, pero lo perdimos. Probablemente no hay nada más estimulante para las almas de los hombres que la victoria.
¿O tal vez fue la victoria una ilusión durante todo ese tiempo? ¿Comprendieron nuestros enemigos que cuanto más duramente luchaban, más resistíamos nosotros? Quizá vieron que el fuego y el martillo tan solo producían mejores espadas. Pero ignoraron el acero durante el tiempo suficiente para oxidarse.
Hay cuatro personas a las que observamos. La primera es el médico, quien dejó de curar para convertirse en soldado durante la guerra más brutal de nuestro tiempo. La segunda es el asesino, un homicida que llora siempre que mata. La tercera es la mentirosa, una joven que viste un manto de erudita sobre un corazón de ladrona. Por último está el alto príncipe, un guerrero que mira al pasado mientras languidece su sed de guerra.
El mundo puede cambiar. La potenciación y el uso de las esquirlas pueden aparecer de nuevo, la magia de los días pasados puede volver a ser nuestra. Esas cuatro personas son la clave.
Una de ellas nos redimirá. Y una de ellas nos destruirá.`,
    year: 2010,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "https://drive.google.com/uc?export=download&id=12dfWFsYVIu59NdaaLHNg6EXkrmRGckwx",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1yiiXtvCH6JsWEvqn5wnBi4reOQfXbDUu",
    onlineUrl: "",
  },
  {
    id: "21",
    title: "Palabras Radiantes",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/518cTasQVxL._SY445_SX342_QL70_ML2_.jpg", 
    saga: "El archivo de las tormentas #2", 
    description: `Los Caballeros Radiantes deben volver a alzarse.
Los antiguos juramentos por fin se han pronunciado. Los hombres buscan lo que se perdió. Temo que la búsqueda los destruya.
Es la naturaleza de la magia. Un alma rota tiene grietas donde puede colarse algo más. Las potencias, los poderes de la creación misma, pueden abrazar un alma rota, pero también pueden ampliar sus fisuras.
El Corredor del Viento está perdido en una tierra quebrada, en equilibro entre la venganza y el honor. La Tejedora de Luz, lentamente consumida por su pasado, busca la mentira en la que debe convertirse. El Forjador de Vínculos, nacido en la sangre y la muerte, se esfuerza ahora por reconstruir lo que fue destruido. La Exploradora, a caballo entre los destinos de dos pueblos, se ve obligada a elegir entre una muerte lenta y una terrible traición a todo en lo que cree.
Ya es hora de despertarlos, pues acecha la eterna tormenta.
Y el asesino ha llegado.`,
    year: 2014,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "https://drive.google.com/uc?export=download&id=12GRcuThlmTBAmB3aMrEUQ772azUsWDEQ",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1_NplQ1B0th8_NFdhddWtNwK9uqjtAhAl",
    onlineUrl: "",
  },
  {
    id: "22",
    title: "Juramentada",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/51lr6mscwvL._SY445_SX342_QL70_ML2_.jpg", 
    saga: "El archivo de las tormentas #3", 
    description: `La humanidad se enfrenta a una nueva Desolación con el regreso de los Portadores del Vacío, un enemigo tan grande en número como en sed de venganza. La victoria fugaz de los ejércitos alezi de Dalinar Kholin ha tenido consecuencias: el enemigo parshendi ha convocado la violenta tormenta eterna, que arrasa el mundo y hace que los hasta ahora pacíficos parshmenios descubran con horror que llevan un milenio esclavizados por los humanos. Al mismo tiempo, en una desesperada huida para alertar a su familia de la amenaza, Kaladin se pregunta si la repentina ira de los parshmenios está justificada.
Entretanto, en la torre de la ciudad de Urithiru, a salvo de la tormenta, Shallan Davar investiga las maravillas de la antigua fortaleza de los Caballeros Radiantes y desentierra oscuros secretos que acechan en las profundidades. Dalinar descubre entonces que su sagrada misión de unificar su tierra natal de Alezkar era corta de miras. A menos que todas las naciones sean capaces de unirse y dejar de lado el pasado sangriento de Dalinar, ni siquiera la restauración de los Caballeros Radiantes conseguirá impedir el fin de la civilización.`,
    year: 2017,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "https://drive.google.com/uc?export=download&id=1jREkjpOrNXuEcC5Ze72bZwjg7g_5UzIq",
    pdfUrl: "https://drive.google.com/uc?export=download&id=18j6cm6xQJr7srx8UujhOIpzFpqolMRLJ",
    onlineUrl: "",
  },
  {
    id: "23",
    title: "El Ritmo de la Guerra",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/91Nb4w7arrL._SY342_.jpg", 
    saga: "El archivo de las tormentas #4", 
    description: `Hay secretos que hemos guardado mucho tiempo. Vigilantes. Insomnes. Eternos. Y pronto dejarán de ser nuestros.
La Una que es Tres busca, sin saberlo, el alma capturada. El spren aprisionado, olvidado hace mucho tiempo. ¿Puede liberar su propia alma a tiempo de hallar el conocimiento que condena a todos los pueblos de Roshar?
El Soldado Caído acaricia y ama la lanza, incluso mientras el arma hiende su propia carne. Camina siempre hacia delante, siempre hacia la oscuridad, sin luz. No puede llevar consigo a nadie, salvo aquello que él mismo puede avivar.
La Hermana Derrumbada comprende sus errores y piensa que ella misma es un error. Parece muy alejada de sus antepasados, pero no comprende que son quienes la llevan a hombros. Hacia la victoria, y hacia ese silencio, el más importante de todos.
Y la Madre de Máquinas, la más crucial de todos ellos, danza con mentirosos en un gran baile. Debe desenmascararlos, alcanzar sus verdades ocultas y entregarlas al mundo. Tiene que reconocer que las peores mentiras son las que se cuenta a sí misma.
Si lo hace, nuestros secretos por fin se convertirán en verdades.`,
    year: 2020,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "https://drive.google.com/uc?export=download&id=1NbyLmdBo6ngh5vpJFjIopPSGvBcVM8It",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1iAx2nTKccf8tOUuzH5-ONeePhriNBjKK",
    onlineUrl: "",
  },
  {
    id: "24",
    title: "Viento y Verdad",
    author: "Brandon Sanderson",
    cover: "https://m.media-amazon.com/images/I/819X7Usv6vL._SY342_.jpg", 
    saga: "El archivo de las tormentas #5", 
    description: `Dalinar Kholin desafió al malvado dios Odium a un duelo de campeones en el que se decidirá el futuro de Roshar. Los Caballeros Radiantes solo tienen diez días para prepararse... y la repentina ascensión del taimado e implacable Taravangian al puesto de Odium lo ha sumido todo en una tremenda confusión.
La lucha desesperada prosigue simultáneamente a lo largo y ancho del mundo: Adolin en Azimir, Sigzil y Venli en las Llanuras Quebradas y Jasnah en Ciudad Thaylen. El exasesino Seth deberá purgar Shinovar, su tierra natal, de la oscura influencia de los Deshechos. Lo acompaña Kaladin, que afronta una nueva batalla ayudando a Seth a combatir sus propios demonios... y tendrá que hacer lo mismo con Ishar, el demente Heraldo del Todopoderoso.
Al mismo tiempo, Shallan, Renarin y Rlain se esfuerzan en desentrañar el misterio que hay tras la Deshecha Ba-Ado-Mishram, el de qué papel tuvo en la esclavización de la especie cantora y en el hecho de que los antiguos Caballeros Radiantes mataran a sus spren. Y Dalinar y Navani buscan una ventaja contra el campeón de Odium que solo puede hallarse en el Reino Espiritual, donde el recuerdo y la posibilidad se combinan en el caos. El destino de todo el Cosmere pende de un hilo.`,
    year: 2024,
    genre: "Fantasia, Fantasia Épica",
    epubUrl: "https://drive.google.com/uc?export=download&id=1hENzxl_DXRELCFtLY0YFNQTK-5cnYcn5",
    pdfUrl: "https://drive.google.com/uc?export=download&id=13Y5br4PzAJ6NkTk7SSSbTSlNa5J7ghcM",
    onlineUrl: "",
  },
  {
    id: "25",
    title: "Malice",
    author: "John Gwynne",
    cover: "https://m.media-amazon.com/images/I/91yx-Le-hxL._SY342_.jpg", 
    saga: "The Faithful and The Fallen #1", 
    description: "Young Corban watches enviously as boys become warriors, learning the art of war. He yearns to wield his sword and spear to protect his king’s realm. But that day will come all too soon. The Banished Lands has a violent past where armies of men and giants clashed in battle, the earth running dark with their heartsblood. Although the giant-clans were broken in ages past, their ruined fortresses still scar the land. But now giants stir anew, the very stones weep blood and there are sightings of giant wyrms. Those who can still read the signs see a threat far greater than the ancient wars. Sorrow will darken the world, as angels and demons make it their battlefield. Then there will be a war to end all wars.",
    year: 2012,
    genre: "Fantasia, Fantasia Épica, Fantasía Vikinga",
    epubUrl: "https://drive.google.com/uc?export=download&id=1AmOTGYNSpnRlBhFJLxBRt_9rRl6WImww",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1Kdif1Hrd6oMTQPnyo_ucrulLLIkjV5Vi",
    onlineUrl: "",
  },
  {
    id: "26",
    title: "Valour",
    author: "John Gwynne",
    cover: "https://m.media-amazon.com/images/I/91Dmpq-OYqL._SY342_.jpg", 
    saga: "The Faithful and The Fallen #2", 
    description: "The Banished Lands are torn by war, as the army of High King Nathair sweeps the realm challenging all who oppose his holy crusade. Allied with the manipulative Queen Rhin of Cambren, there are few who can stand against him. But Rhin is playing her own games and has her eyes on a far greater prize... Left for dead – her kin have fled and her country is overrun with enemies – Cywen fights to survive. But any chance of escape is futile once Nathair and his disquieting advisor Calidus realize who she is. They have no intention of letting such a prize slip from their grasp. For she may be their one chance at killing the biggest threat to their power. Meanwhile, the young warrior Corban flees from his conquered homeland with his exiled companions, heading for the only place that may offer them sanctuary. But to get there they must travel through Cambren, avoiding warbands, giants and the vicious wolven of the mountains. And all the while Corban struggles to become the man that everyone believes him to be – the Bright Star and saviour of the Banished Lands. Embroiled in struggles for power and survival, the mortal world is unaware of the greatest threat of all. In the Otherworld, dark forces scheme to bring a host of the Fallen into the world of flesh to end the war with the Faithful, once and for all.",
    year: 2014,
    genre: "Fantasia, Fantasia Épica, Fantasía Vikinga",
    epubUrl: "https://drive.google.com/uc?export=download&id=1wnxIqgAx7qKtdPyBQPJFbu5IHi708VXR",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1EoZ__tX6PnIuh4nA_2S",
    onlineUrl: "",
  },
  {
    id: "27",
    title: "Ruin",
    author: "John Gwynne",
    cover: "https://m.media-amazon.com/images/I/51ToakteYQL._SY445_SX342_QL70_ML2_.jpg", 
    saga: "The Faithful and The Fallen #3", 
    description: "The Banished Lands are engulfed in war and chaos. The cunning Queen Rhin has conquered the west and High King Nathair has the cauldron, most powerful of the seven treasures. At his back stands the scheming Calidus and a warband of the Kadoshim, dread demons of the Otherworld. They plan to bring Asroth and his host of the Fallen into the world of flesh, but to do so they need the seven treasures. Nathair has been deceived but now he knows the truth. He has choices to make; choices that will determine the fate of the Banished Lands. Elsewhere the flame of resistance is growing – Queen Edana finds allies in the swamps of Ardan. Maquin is loose in Tenebral, hunted by Lykos and his corsairs. Here he will witness the birth of a rebellion in Nathair's own realm. Corban has been swept along by the tide of war. He has suffered, lost loved ones, sought only safety from the darkness. But he will run no more. He has seen the face of evil and he has set his will to fight it. The question is, how? With a disparate band gathered about him – his family, friends, giants, fanatical warriors, an angel and a talking crow – he begins the journey to Drassil, the fabled fortress hidden deep in the heart of Forn Forest. For in Drassil lies the spear of Skald, one of the seven treasures, and here it is prophesied that the Bright Star will stand against the Black Sun.",
    year: 2015,
    genre: "Fantasia, Fantasia Épica, Fantasía Vikinga",
    epubUrl: "https://drive.google.com/uc?export=download&id=1ecUzkcucLxTN0c_7YSwP7U79SWla76aE",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1siT_Qzmuw8AXiXW9TTISZhoVnM2s4A3d",
    onlineUrl: "",
  },
  {
    id: "28",
    title: "Wrath",
    author: "John Gwynne",
    cover: "https://m.media-amazon.com/images/I/517z7iwW+OL._SY445_SX342_QL70_ML2_.jpg", 
    saga: "The Faithful and The Fallen #4", 
    description: "vents are coming to a climax in the Banished Lands, as the war reaches new heights. King Nathair has seized the fortress at Drassil, and now possesses three of the Seven Treasures. And with Calidus and Queen Rhin, Nathair will do anything to obtain the rest. They will allow him to open a portal to the Otherworld – so Asroth and his demon-horde can break into the Banished Lands and finally become flesh. Meanwhile Corban has been captured by the Jotun, warrior giants who ride enormous bears into battle. His warband scattered, Corban must make new allies to survive. But can he bond with competing factions of warlike giants? Somehow he must, to counter the threat Nathair represents. His life hangs in the balance – and with it, the fate of the Banished Lands. Truth, courage and loyalty will be tested as never before.",
    year: 2016,
    genre: "Fantasia, Fantasia Épica, Fantasía Vikinga",
    epubUrl: "https://drive.google.com/uc?export=download&id=19wjNfSaKhUAZgpXonnUgUGx48dF1kVXL",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1Kbun9_SM3LKEdedFLYovARY93W_SkqNl",
    onlineUrl: "",
  },
  {
    id: "29",
    title: "La sombra de los Dioses",
    author: "John Gwynne",
    cover: "https://m.media-amazon.com/images/I/818QMDv65zL._SY342_.jpg", 
    saga: "Hermanos de Sangre #1", 
    description: "Ha pasado un siglo desde que los dioses lucharon y se extinguieron. Ahora solo quedan sus huesos, que prometen un gran poder a aquellos lo suficientemente valientes como para buscarlos. Mientras los susurros de guerra resuenan en la tierra de Vigrið, el destino sigue los pasos de tres guerreros: una cazadora en una búsqueda peligrosa, una mujer noble que busca la fama en la batalla y un esclavo que busca venganza entre los mercenarios conocidos como los Hermanos de Sangre. Los tres darán forma al destino del mundo, ya que una vez más cae bajo la sombra de los dioses.",
    year: 2022,
    genre: "Fantasia, Fantasia Épica, Fantasía Vikinga",
    epubUrl: "https://drive.google.com/uc?export=download&id=1ccb1-1L7VvBObfdxpXsEasuNAqPBc7Os",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1xz3PpGdfAEeSxgFe1N9D7Qf_ShXtE6lB",
    onlineUrl: "",
  },
  {
    id: "30",
    title: "El Hambre de los Dioses",
    author: "John Gwynne",
    cover: "https://m.media-amazon.com/images/I/91ft4dAuweL._SY342_.jpg", 
    saga: "Hermanos de Sangre #2", 
    description: "El hambre de los dioses es la continuación de la aclamada saga de fantasía épica de John Gwynne inspirada en la civilización nórdica, repleta de mitos, magia y venganzas sangrientas. Lik-Rifa, la legendaria diosa dragona, ha salido de su cautiverio eterno. Ahora urde una nueva era de sangre y conquistas. Mientras Orka continúa la búsqueda de su hijo desaparecido, los Hermanos de Sangre emprenden una desesperada carrera hacia el sur para salvar a uno de los suyos y Varg da sus primeros pasos en la senda de la venganza. Elvar se ha comprometido a cumplir su juramento de sangre y rescatar a un prisionero de las garras de Lik-Rifa y sus seguidores descendientes de la dragona, pero antes debe convencer a los Terrores de la Batalla para que la sigan. Pero ni siquiera los Hermanos de Sangre y los Terrores de la Batalla pueden enfrentarse solos con un dragón.",
    year: 2023,
    genre: "Fantasia, Fantasia Épica, Fantasía Vikinga",
    epubUrl: "https://drive.google.com/uc?export=download&id=1VS3FziGt4XL5aDovTf2HjYyYotfNscIe",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1XeKrwbfB8ktZNdWHD6LZGgS3tDGExVvm",
    onlineUrl: "",
  },
  {
    id: "31",
    title: "La Furia de los Dioses",
    author: "John Gwynne",
    cover: "https://m.media-amazon.com/images/I/81kgBmzMIKL._SY342_.jpg", 
    saga: "Hermanos de Sangre #3", 
    description: "Varg ha dejado atrás el sufrimiento de su vida pasada y se ha convertido en un miembro de pleno derecho de los Hermanos de Sangre. Pero, ahora, sus nuevos camaradas y él se enfrentan al mayor desafío de sus vidas: matar un dragón. Elvar dedica todos sus esfuerzos a consolidar su poder en Snakavik, donde tiene que hacer frente a amenazas internas y externas. Mientras lucha para imponer su autoridad ante la inminente Guerra, debe afrontar una tarea, sin duda, insuperable: dominar la ferocidad de un dios lobo. Biórr y su banda de guerreros se dirigen al norte, sedientos de sangre, pero Guðvarr se mueve por sus propios intereses con la esperanza de ganarse el favor de Lik-Rifa y realizar sus ambiciones. Todos los caminos llevan a Snakavik, donde todo está preparándose para la batalla final: una colisión titánica que sacudirá los cimientos del mundo y será testigo de la verdadera furia de los dioses.",
    year: 2025,
    genre: "Fantasia, Fantasia Épica, Fantasía Vikinga",
    epubUrl: "https://drive.google.com/uc?export=download&id=1K5O0s5z76CTO0ZcHRjfQTIhGHEJ0erc_",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1OnWz69EOHbL2iKOoNC8wos49IL6rt1VK",
    onlineUrl: "",
  },
  {
    id: "32",
    title: "Jade City",
    author: "Fonda Lee",
    cover: "https://m.media-amazon.com/images/I/913imOgCUSL._SY342_.jpg", 
    saga: "Green Bone Saga #1", 
    description: "Jade is the lifeblood of the island of Kekon. It has been mined, traded, stolen, and killed for -- and for centuries, honorable Green Bone warriors like the Kaul family have used it to enhance their magical abilities and defend the island from foreign invasion. Now, the war is over and a new generation of Kauls vies for control of Kekon's bustling capital city. They care about nothing but protecting their own, cornering the jade market, and defending the districts under their protection. Ancient tradition has little place in this rapidly changing nation. When a powerful new drug emerges that lets anyone -- even foreigners -- wield jade, the simmering tension between the Kauls and the rival Ayt family erupts into open violence. The outcome of this clan war will determine the fate of all Green Bones -- from their grandest patriarch to the lowliest motorcycle runner on the streets -- and of Kekon itself.",
    year: 2017,
    genre: "Fantasia, Fantasía Urbana ",
    epubUrl: "https://drive.google.com/uc?export=download&id=10LRIQLm_CBsp-rRX83AUSOJRQAOmoqsJ",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1rucwJKMByeZghwuzfohfFx67iYYfn52p",
    onlineUrl: "",
  },
  {
    id: "33",
    title: "Jade War",
    author: "Fonda Lee",
    cover: "https://m.media-amazon.com/images/I/81RisQmF5wL._SY342_.jpg", 
    saga: "Green Bone Saga #2", 
    description: "On the island of Kekon, the Kaul family is locked in a violent feud for control of the capital city and the supply of magical jade that endows trained Green Bone warriors with supernatural powers they alone have possessed for hundreds of years. Beyond Kekon's borders, war is brewing. Powerful foreign governments and mercenary criminal kingpins alike turn their eyes on the island nation. Jade, Kekon's most prized resource, could make them rich - or give them the edge they'd need to topple their rivals. Faced with threats on all sides, the Kaul family is forced to form new and dangerous alliances, confront enemies in the darkest streets and the tallest office towers, and put honor aside in order to do whatever it takes to ensure their own survival - and that of all the Green Bones of Kekon.",
    year: 2019,
    genre: "Fantasia, Fantasía Urbana ",
    epubUrl: "https://drive.google.com/uc?export=download&id=1fvEWyJ8PQHK3qdRxqc4-ahv9Z52WRmFi",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1Bi6KUbcEkv1c1YV2JQ-1kvHKXOVE85xz",
    onlineUrl: "",
  },
  {
    id: "34",
    title: "Jade Legacy",
    author: "Fonda Lee",
    cover: "https://m.media-amazon.com/images/I/51Tzme4TqlL._SY445_SX342_ML2_.jpg", 
    saga: "Green Bone Saga #3", 
    description: "The Kaul siblings battle their rival clans for honour and control over an East Asia-inspired fantasy metropolis in Jade Legacy, the page-turning conclusion to the Green Bone Saga.",
    year: 2021,
    genre: "Fantasia, Fantasía Urbana ",
    epubUrl: "https://drive.google.com/uc?export=download&id=1qSbJQJXUzROXeVyL8QUhOyNYjdv5-CA9",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1Unyw0htHplVwq5-SPKqIVRHQX9alb41q",
    onlineUrl: "",
  },
  {
    id: "35",
    title: "Kaikeyi",
    author: "Vaishnavi Patel",
    cover: "https://m.media-amazon.com/images/I/81ee9t8CX+L._SY342_.jpg", 
    saga: "", 
    description: "So begins Kaikeyi’s story. The only daughter of the kingdom of Kekaya, she is raised on tales of the gods: how they churned the vast ocean to obtain the nectar of immortality, how they vanquish evil and ensure the land of Bharat prospers, and how they offer powerful boons to the devout and the wise. Yet she watches as her father unceremoniously banishes her mother, listens as her own worth is reduced to how great a marriage alliance she can secure. And when she calls upon the gods for help, they never seem to hear. Desperate for some measure of independence, she turns to the texts she once read with her mother and discovers a magic that is hers alone. With this power, Kaikeyi transforms herself from an overlooked princess into a warrior, diplomat, and most favored queen, determined to carve a better world for herself and the women around her. But as the evil from her childhood stories threatens the cosmic order, the path she has forged clashes with the destiny the gods have chosen for her family. And Kaikeyi must decide if resistance is worth the destruction it will wreak—and what legacy she intends to leave behind.",
    year: 2022,
    genre: "Fantasia, Fantasía Histórica ",
    epubUrl: "https://drive.google.com/uc?export=download&id=1nUp26wWgrRzlH8DoJ9NHSY7h1ZSWDCc7",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1vup_dS57jCKaXsEPWDv8qGC5l7dGdouN",
    onlineUrl: "",
  },
  {
    id: "36",
    title: "The Sword of Kaigen",
    author: "M.L. Wang",
    cover: "https://m.media-amazon.com/images/I/51dDO+Iv8sL._SY445_SX342_QL70_ML2_.jpg", 
    saga: "", 
    description: "On a mountainside at the edge of the Kaigenese Empire live the most powerful warriors in the world, superhumans capable of raising the sea and wielding blades of ice. For hundreds of years, the fighters of the Kusanagi Peninsula have held the Empire's enemies at bay, earning their frozen spit of land the name 'The Sword of Kaigen.' Born into Kusanagi's legendary Matsuda family, fourteen-year-old Mamoru has always known his purpose: to master his family's fighting techniques and defend his homeland. But when an outsider arrives and pulls back the curtain on Kaigen's alleged age of peace, Mamoru realizes that he might not have much time to become the fighter he was bred to be. Worse, the empire he was bred to defend may stand on a foundation of lies. Misaki told herself that she left the passions of her youth behind when she married into the Matsuda house. Determined to be a good housewife and mother, she hid away her sword, along with everything from her days as a fighter in a faraway country. But with her growing son asking questions about the outside world, the threat of an impending invasion looming across the sea, and her frigid husband grating on her nerves, Misaki finds the fighter in her clawing its way back to the surface. When the winds of war reach their peninsula, will the Matsuda family have the strength to defend their empire? Or will they tear each other apart before the true enemies even reach their shores?",
    year: 2019,
    genre: "Fantasia, Fantasía Histórica ",
    epubUrl: "https://drive.google.com/uc?export=download&id=1d-U_LQLBdmPzPs4fbkJXb5n2ngrAsJNh",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1PEKCzra7IynLGy1ed5jDzRqHmP6NZ0p2",
    onlineUrl: "",
  },
  {
    id: "37",
    title: "Empire of Silence",
    author: "Christopher Ruocchio",
    cover: "https://m.media-amazon.com/images/I/81Y4R71134L._SY342_.jpg", 
    saga: "The Sun Eater #1", 
    description: "It was not his war. The galaxy remembers him as a hero: the man who burned every last alien Cielcin from the sky. They remember him as a monster: the devil who destroyed a sun, casually annihilating four billion human lives—even the Emperor himself—against Imperial orders.But Hadrian was not a hero. He was not a monster. He was not even a soldier. On the wrong planet, at the right time, for the best reasons, Hadrian Marlowe starts down a path that can only end in fire. He flees his father and a future as a torturer only to be left stranded on a strange, backwater world. Forced to fight as a gladiator and navigate the intrigues of a foreign planetary court, Hadrian must fight a war he did not start, for an Empire he does not love, against an enemy he will never understand.",
    year: 2018,
    genre: "Ciencia Ficción, Fantasía",
    epubUrl: "https://drive.google.com/uc?export=download&id=1lzF4EKkmaP6rQ4Pn-OReuYC-4l3iu4NM",
    pdfUrl: "https://drive.google.com/uc?export=download&id=115iBm4pxrzC6310oBD88bjCJNV9Tx73E",
    onlineUrl: "",
  },
  {
    id: "38",
    title: "Howling Dark",
    author: "Christopher Ruocchio",
    cover: "https://m.media-amazon.com/images/I/51cseMTOTJL._SY445_SX342_QL70_ML2_.jpg", 
    saga: "The Sun Eater #2", 
    description: "Hadrian Marlowe is lost. For half a century, he has searched the farther suns for the lost planet of Vorgossos, hoping to discover a way to contact the elusive alien Cielcin. He has pursued false leads for years among the barbarian Normans as captain of a band of mercenaries, but Hadrian remains determined to make peace and bring an end to nearly four hundred years of war. Desperate to find answers, Hadrian must venture beyond the security of the Sollan Empire and among the Extrasolarians who dwell between the stars. There, he will face not only the aliens he has come to offer peace, but contend with creatures that once were human, with traitors in his midst, and with a meeting that will bring him face to face with no less than the oldest enemy of mankind. If he succeeds, he will usher in a peace unlike any in recorded history. If he fails, the galaxy will burn.",
    year: 2019,
    genre: "Ciencia Ficción, Fantasía",
    epubUrl: "https://drive.google.com/uc?export=download&id=1t-miD78E0HqQJ93rY_zvonCwsOAxXDcX",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1brcltxj_FGqrfy6Ae76lJPiq-RW7F8cu",
    onlineUrl: "",
  },
  {
    id: "39",
    title: "Demon in White",
    author: "Christopher Ruocchio",
    cover: "https://m.media-amazon.com/images/I/518q6vFzIlL._SY445_SX342_QL70_ML2_.jpg", 
    saga: "The Sun Eater #3", 
    description: "For almost a hundred years, Hadrian Marlowe has served the Empire in its war against the Cielcin, a vicious alien race bent on humanity’s destruction. Rumors of a new king amongst the Cielcin have reached the Imperial throne. This one is not like the others. It does not raid borderworld territories, preferring precise, strategic attacks on the humans’ Empire. To make matters worse, a cult of personality has formed around Hadrian, spurred on by legends of his having defied death itself. Men call him Halfmortal. Hadrian’s rise to prominence proves dangerous to himself and his team, as pressures within the Imperial government distrust or resent his new influence. Caught in the middle, Hadrian must contend with enemies before him—and behind. And above it all, there is the mystery of the Quiet. Hadrian did defy death. He did return. But the keys to the only place in the universe where Hadrian might find the answers he seeks lie in the hands of the Emperor himself....",
    year: 2020,
    genre: "Ciencia Ficción, Fantasía",
    epubUrl: "https://drive.google.com/uc?export=download&id=1wWcY87X55ahILiORdK18f3ZipFRN8hnT",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1v4fDh1dXxGMBe7KyMU0tpSqmR0osT8bi",
    onlineUrl: "",
  },
  {
    id: "40",
    title: "La voz de las espadas",
    author: "Joe Abercrombie",
    cover: "https://m.media-amazon.com/images/I/81zkxwzjC0L._SY342_.jpg", 
    saga: "La Primera Ley #1", 
    description: "El inquisidor Glokta, convertido en un cínico tullido tras su paso por las cárceles de los enemigos de la Unión, es ahora a su vez un eficaz torturador capaz de extraer información de cualquiera. A su vez, el capitán Jezal dan Luthar no ha hecho otra cosa en su vida que desplumar a sus amigos jugando a las cartas y soñar con la gloria de vencer en el Certamen de esgrima. Pero se está fraguando una guerra, y en los campos de batalla del Norte la lucha se rige por normas mucho más sangrientas... Logen Nuevededos, infame bárbaro de pasado sangriento, acaba de perder a sus amigos y está decidido a abandonar sus tierras y dirigirse al Sur, pero los espíritus le advierten que le busca un Mago de los Viejos Tiempos... Sus historias se entrelazan en una fantasía negra repleta de acción y personajes memorables.",
    year: 2006,
    genre: "Fantasía, Fantasía Épica, Fantasía Oscura",
    epubUrl: "https://drive.google.com/uc?export=download&id=1UiFireBMSckyJhp8MR1B4HwzbnqIsjZs",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1YKtCaM85nbkkEdT9akr05JH0MukB3KSD",
    onlineUrl: "",
  },
  {
    id: "41",
    title: "Antes de que los Cuelguen",
    author: "Joe Abercrombie",
    cover: "https://hablamosdelibros.es/wp-content/uploads/2023/09/LG00157701.jpg", 
    saga: "La Primera Ley #2", 
    description: "El Superior Glokta tiene la misión de defender una ciudad sitiada por el ejército gurko y minada por la traición, además de descubrir qué ocurrió con su sucesor. Por su parte, los Hombres del Norte han cruzado la frontera y han entrado a sangre y fuego en el territorio de la Unión; para detenerlos no bastará con el ejército del Rey. A su vez, Bayaz, el Primero de los Magos, conduce a un heterogéneo grupo de aventureros en una peligrosa misión por las ruinas del pasado...",
    year: 2008,
    genre: "Fantasía, Fantasía Épica, Fantasía Oscura",
    epubUrl: "https://drive.google.com/uc?export=download&id=1jfC5iyBQhkkkp4oXhUeIvq-Yi9hga3dl",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1GeoetXhSJtaatFeQ_Djy50fdaNxJdk6e",
    onlineUrl: "",
  },
  {
    id: "42",
    title: "El Último Argumento de los Reyes",
    author: "Joe Abercrombie",
    cover: "https://imagessl3.casadellibro.com/a/l/s7/43/9788420676043.webp", 
    saga: "La Primera Ley #2", 
    description: "El rey de los hombres del Norte se mantiene, y solo hay un guerrero que le pueda detener: su viejo amigo y su enemigo más antiguo; ha llegado la hora de que el Sanguinario vuelva a casa... Glokta está librando una lucha secreta en la que nadie está seguro y nadie es de fiar. Y como sus días de guerrero están lejos, utiliza las armas que le quedan: chantaje, tortura... Jezal dan Luthar ha decidido que la gloria es demasiado dolorosa y prefiere una vida sencilla con la mujer a la que ama. Pero el amor también puede ser doloroso y la gloria tiene la desagradable costumbre de aferrarse a un hombre cuando menos la desea... El Rey de la Unión ha muerto, los campesinos se rebelan y los nobles luchan por su corona. Sólo el Primero de los Magos tiene un plan para salvar el mundo, pero esta vez hay riesgos. Y no hay un riesgo más terrible que romper la Primera Ley... ",
    year: 2008,
    genre: "Fantasía, Fantasía Épica, Fantasía Oscura",
    epubUrl: "https://drive.google.com/uc?export=download&id=13a6Eh57z-FWvakQBRyFVyoV2ByVvHzhU",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1cEWVPPGNsfgQ90-85MWZpHqILDCsS4ni",
    onlineUrl: "",
  },
  {
    id: "43",
    title: "La Quinta Estación",
    author: "N.K. Jemisin",
    cover: "https://m.media-amazon.com/images/I/51vZJ0ruBdL._SY445_SX342_ControlCacheEqualizer_.jpg", 
    saga: "La Tierra Fragmentada #1", 
    description:"Una temporada de finales ha comenzado. Comienza con la gran grieta roja a través del corazón del único continente del mundo, arrojando una ceniza que borra el sol. Comienza con la muerte, con un hijo asesinado y una hija desaparecida, con traición y viejas heridas dormidas. Esta es la quietud, una tierra muy familiarizada con catástrofe, donde el poder de la tierra se maneja como un arma. Donde no hay misericordia.",
    year: 2017,
    genre: "Fantasía, Fantasía Épica",
    epubUrl: "https://drive.google.com/uc?export=download&id=1Bv3VuOjp5qH9kqyc1_hGABsNLi4KR1I5",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1kBRDQM6oIgCm-g-ZHrZi6UTRmFSDdfBx",
    onlineUrl: "",
  },
  {
    id: "44",
    title: "El portal de los obeliscos",
    author: "N.K. Jemisin",
    cover: "https://m.media-amazon.com/images/I/61tOiB1EXjL._SY445_SX342_ControlCacheEqualizer_.jpg", 
    saga: "La Tierra Fragmentada #2", 
    description:"Toda era tiene que llegar a su fin. Ha dado comienzo una estación de desenlaces. Empieza con una gran grieta roja que recorre las entrañas del único continente del planeta, una grieta que escupe una ceniza que oculta la luz del sol. Empieza con la muerte, con un hijo asesinado y una hija perdida. Empieza con una traición, con heridas latentes que comienzan a supurar. El lugar es la Quietud, un continente acostumbrado a la catástrofe en el que la energía de la tierra se utiliza como arma. Y en el que no hay lugar para la misericordia.",
    year: 2018,
    genre: "Fantasía, Fantasía Épica",
    epubUrl: "https://drive.google.com/uc?export=download&id=1VgadEdR1aahv1WyEjtgqOJor1w3QOXwt",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1-FDFpHcFbo3pSDd8yMF9GMkeCnJLVvpF",
    onlineUrl: "",
  },
  {
    id: "45",
    title: "El cielo de piedra",
    author: "N.K. Jemisin",
    cover: "https://m.media-amazon.com/images/I/514BiTXMASL._SY445_SX342_ControlCacheEqualizer_.jpg", 
    saga: "La Tierra Fragmentada #3", 
    description:"La luna volverá pronto. Que su regreso proclame la destrucción de la humanidad dependerá de dos mujeres. Essun ha heredado el poder de alabastro Decanillado. Con él espera encontrar a su hija Nassun y forjar un mundo en que los niños orogenes crezcan a salvo. Para Nassun, el que su madre haya sido capaz de dominar el Portal de los Obeliscos es algo que llega tarde. Ha sido testigo del mal que hay en el mundo y ha aceptado lo que Essun no comprende: que, a veces, lo que está corrompido no se puede purificar y hay que destruirlo.",
    year: 2019,
    genre: "Fantasía, Fantasía Épica",
    epubUrl: "https://drive.google.com/uc?export=download&id=1AznOcjNb_ob_WTPm_i3oei6Zy_3AmOZO",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1MNgHeTAFmd56HBSnAFeGcC5jRJIsmQq2",
    onlineUrl: "",
  },
  {
    id: "46",
    title: "The Rage of Dragons",
    author: "Evan Winter",
    cover: "https://m.media-amazon.com/images/I/51O50hBBVhL._SY445_SX342_ControlCacheEqualizer_.jpg", 
    saga: "The Burning #1", 
    description:"IN A WORLD CONSUMED BY ENDLESS WAR ONE YOUNG MAN WILL BECOME HIS PEOPLE'S ONLY HOPE FOR SURVIVAL. The Omehi people have been fighting an unwinnable war for generations. The lucky ones are born gifted: some have the power to call down dragons, others can be magically transformed into bigger, stronger, faster killing machines. Everyone else is fodder, destined to fight and die in the endless war. Tau Tafari wants more than this, but his plans of escape are destroyed when those closest to him are brutally murdered. With too few gifted left, the Omehi are facing genocide, but Tau cares only for revenge. Following an unthinkable path, he will strive to become the greatest swordsman to ever live, willing to die a hundred thousand times for the chance to kill three of his own people.",
    year: 2019,
    genre: "Fantasía, Fantasía Épica",
    epubUrl: "https://drive.google.com/uc?export=download&id=1nCALgcPzFNmY5HL52AC-xU53-aUuHrIm",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1HwOqHztj3V5gzuFt0xEehP6zYMJiuPwk",
    onlineUrl: "",
  },
  {
    id: "57",
    title: "The Fires of Vengeance",
    author: "Evan Winter",
    cover: "https://m.media-amazon.com/images/I/51RjdgxS-pL._SY300_.jpg", 
    saga: "The Burning #2", 
    description:"Desperate to delay an impending attack by the indigenous people of Xidda, Tau and his queen craft a dangerous plan. If Tau succeeds, the queen will have the time she needs to assemble her forces and launch an all-out assault on her own capital city, where her sister is being propped up as the 'true' Queen of the Omehi. If the city can be taken, if Tsiora can reclaim her throne and reunite her people, then the Omehi might have a chance to survive the coming onslaught.",
    year: 2020,
    genre: "Fantasía, Fantasía Épica", 
    epubUrl: "https://drive.google.com/uc?export=download&id=1oBVOGXVoKcMSGHvpVCmK_t2NQN2nD6_0",
    pdfUrl: "https://drive.google.com/uc?export=download&id=1YXSpfpyrlSD1ASLGqUfmW8vjSEqUIFPr",
    onlineUrl: "",
  },
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
    title: "GodsGrave",
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

];

const BookCollection = ({ className, searchQuery: incomingQuery }: BookCollectionProps) => {
  const [params] = useSearchParams();
  const SearchQuery = incomingQuery ?? params.get("q") ?? "";

  const filteredBooks = useMemo(() => {
  if (!SearchQuery.trim()) return sampleBooks;
  
  const query = SearchQuery.toLowerCase().trim();

  return sampleBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
  );
}, [SearchQuery]);

  // Estilos CSS para el fondo de la CUADRÍCULA DE LIBROS (collectionBg2)
  const bookGridBackgroundStyle = {
    backgroundImage: `url(${collectionBg2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative" as "relative", 
  };

  // El overlay para oscurecer la imagen del grid y hacer el texto legible
  const gridOverlayStyle = {
    position: "absolute" as "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    // El overlay z-index = 1, el contenido del grid --> 2 o+
    zIndex: 1, 
  };

return (
    <div className={cn("min-h-screen pt-28 pb-16 px-8 md:px-16 overflow-x-hidden",className )}
      // Este es el fondo GENERAL
      style={{
        backgroundImage: `url(${collectionBg})`, 
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}>
      {/* Sección de Encabezado */}
      <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] mb-3 ">  
        <div className="absolute z-0 backdrop-blur-[2px] border-y border-white/5 w-screen
               top-[-112px] bottom-[-20px] 
               md:top-[-112px] md:bottom-[-15px]"
          style={{  
            left: 0,
            right: 0,
            background: `linear-gradient(to right, 
              transparent 0%, 
              rgba(245, 230, 202, 0.4) 15%, 
              rgba(245, 230, 202, 0.85) 50%, 
              rgba(245, 230, 202, 0.4) 85%,
              transparent 100%
            )`
          }}
        />

        {/* Contenido centrado  */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-4 text-center">
          {/* Título Principal - Tamaño ajustado para ser más compacto */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-primary mb-2 animate-fade-in-up drop-shadow-sm">
            Mi Colección
          </h1>

          {/* Separador y Subtítulo */}
          <div className="flex items-center justify-center gap-4 max-w-3xl mx-auto">
            <div className="h-px flex-1 bg-primary/20" />
            <span className="font-display text-xs md:text-sm lg:text-base tracking-[0.3em] text-primary/70 uppercase font-medium whitespace-normal md:whitespace-nowrap">
              Descarga libros en PDF, EPUB o lee online
            </span>
            <div className="h-px flex-1 bg-primary/20" />
          </div>
        </div>
      </div>

      {/* --- INICIO:  Contenedor para la img Fondo  --- */}
      <div 
        className="max-w-7xl mx-auto rounded-xl shadow-2xl p-6" // Añadimos padding y sombra para destacarlo del fondo general
        style={bookGridBackgroundStyle} // Aplicamos collectionBg2
      >
        {/* Overlay sobre collectionBg2 para mejorar la legibilidad del texto del libro */}
        <div className="rounded-xl" style={gridOverlayStyle}></div> 

        {/* Books Grid  */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <div 
                key={book.id}
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
                <BookCard book={book} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12"style={{ color: "rgb(109, 12, 25)"}}>
              <p className="font-body text-lg italic">
                No se encontraron libros que coincidan con tu búsqueda
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer decoration */}
      <div className="max-w-6xl mx-auto mt-16 flex justify-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-px bg-[#6d0414]/40" />
          <div className="w-2 h-2 rotate-45 bg-[#6d0414]/60"/>
          <div className="w-12 h-px bg-[#6d0414]/40" />
        </div>
      </div>
    </div>
  );
};

export default BookCollection;
