import { getCart } from './functions'

export const Data = [
  {
    name: 'Finisterra',
    artist: 'Mago de Oz',
    members: ['Txus Di Fellatio', 'Mohamed', 'Jose Andrea', 'Fernando Ponce'],
    songs: [
      'Satania',
      'La Cruz de Santiago',
      'Fiesta Pagana',
      'La Santa Compaña'
    ],
    cover:
      'https://res.cloudinary.com/duzguojrd/image/upload/PROYECTO2%20BUENO/ujz6g8nusg2hjyuw6kcg.jpg',
    year: 2000,
    genre: 'Folk Metal',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-530437'
  },
  {
    name: 'Back in Black',
    artist: 'AC/DC',
    members: [
      'Angus Young',
      'Brian Johnson',
      'Malcolm Young',
      'Phil Rudd',
      'Cliff Williams'
    ],
    songs: [
      'Hells Bells',
      'Shoot to Thrill',
      'Back in Black',
      'You Shook Me All Night Long'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1678558185/Rock%20Shop/Back-in-Black_x9vmvl.webp',
    year: 1980,
    genre: 'Hard Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-374086'
  },
  {
    name: 'Master of Puppets',
    artist: 'Metallica',
    members: ['James Hetfield', 'Lars Ulrich', 'Kirk Hammett', 'Cliff Burton'],
    songs: [
      'Battery',
      'Master of Puppets',
      'The Thing That Should Not Be',
      'Welcome Home (Sanitarium)'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1678558188/Rock%20Shop/master_of_puppets_3d_album_by_cubicalmember-d4ry641-e1456958929407_zijp9p.jpg',
    year: 1986,
    genre: 'Thrash Metal',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-869555'
  },
  {
    name: 'Gaia',
    artist: 'Mago de Oz',
    members: [
      'Txus',
      'Jose Andrea',
      'Mohamed',
      'Carlitos',
      'Frank',
      'Fernando Ponce'
    ],
    songs: ['Gaia', 'La Conquista', 'Alma', 'La Costa del Silencio'],
    cover:
      'https://res.cloudinary.com/duzguojrd/image/upload/PROYECTO2%20BUENO/zppgzzcw5yta8zelnihx.jpg',
    year: 2003,
    genre: 'Folk Metal',
    price: 23,
    stock: [true, 5],
    id: 'album-1683488134511-159845'
  },
  {
    name: 'Ilussia',
    artist: 'Mago de Oz',
    members: ['Zeta', 'Txus', 'Mohamed', 'Carlitos'],
    songs: ['Melodian', 'Pasen y Beban', 'Vuela Alto', 'Ilussia'],
    cover:
      'https://res.cloudinary.com/duzguojrd/image/upload/PROYECTO2%20BUENO/k9zik4ujv3spsxdvyv4d.jpg',
    year: 2014,
    genre: 'Folk Metal',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-125863'
  },
  {
    name: 'Smash',
    artist: 'The Offspring',
    members: ['Dexter Holland', 'Noodles', 'Greg K', 'Ron Welty'],
    songs: ['Come Out and Play', 'Self Esteem', 'Bad Habit', 'Gotta Get Away'],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1678558187/Rock%20Shop/The-Offspring-Smash-1994_ugwwbk.webp',
    year: 1994,
    genre: 'Punk Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-499663'
  },
  {
    name: 'Jesus de Chamberí',
    artist: 'Mago de Oz',
    members: ['Jose Andrea', 'Txus', 'Mohamed', 'Carlitos', 'Frank'],
    songs: [
      'Jesus de Chamberi',
      'El Angel Caido',
      'El Cantar de la Luna Oscura',
      'Hasta que tu Muerte nos Separe'
    ],
    cover:
      'https://res.cloudinary.com/duzguojrd/image/upload/PROYECTO2%20BUENO/nlhzh63ftkqpim0n1i5r.jpg',
    year: 1996,
    genre: 'Hard Rock',
    price: 24,
    stock: [true, 5],
    id: 'album-1683488134511-20076'
  },
  {
    name: 'Alicia en el Metaverso',
    artist: 'Mago de Oz',
    members: [
      'Rafa Blas',
      'Txus Di Fellatio',
      'Mohamed',
      'Josema',
      'Victor de Andrés',
      'Francesco Antonelli'
    ],
    songs: [
      'Alicia en el Metaverso',
      'El sombrerero Loco',
      'El Metalverso',
      'Seremos Huracan',
      'Como un susurro',
      'Luna de Sangre',
      'Somos los hijos del Rock',
      'Por si un dia te pierdes',
      'La voz de los valientes'
    ],
    cover:
      'https://res.cloudinary.com/duzguojrd/image/upload/PROYECTO2%20BUENO/aswoeidg4qfiujegx2bf.jpg',
    year: 2024,
    genre: 'Folk Metal',
    price: 18,
    stock: [true, 6],
    id: 'album-1683488134511-789139'
  },
  {
    name: 'Hechizos, Pócimas y Brujería',
    artist: 'Mago de Oz',
    members: ['Zeta', 'Txus', 'Mohamed', 'Josema', 'Carlitos'],
    songs: ['H2Oz', 'Xanandra', 'Celtian', 'Hechizos, Pócimas y Brujería'],
    cover:
      'https://res.cloudinary.com/duzguojrd/image/upload/PROYECTO2%20BUENO/tfgslpsj5ek3qfo4202r.jpg',
    year: 2012,
    genre: 'Folk Metal',
    price: 24,
    stock: [true, 5],
    id: 'album-1683488134511-243819'
  },
  {
    name: 'Gaia II: La voz dormida',
    artist: 'Mago de Oz',
    members: ['Jose Andrea', 'Txus', 'Mohamed', 'Fernando Ponce', 'Carlitos'],
    songs: [
      'La voz dormida',
      'El poema de la lluvia triste',
      'El paseo de los tristes',
      'La posada de los muertos'
    ],
    cover:
      'https://res.cloudinary.com/duzguojrd/image/upload/PROYECTO2%20BUENO/t3s4um6oed1nen2limj2.jpg',
    year: 2005,
    genre: 'Folk Metal',
    price: 21,
    stock: [true, 7],
    id: 'album-1683488134511-721571'
  },
  {
    name: 'Ira Dei',
    artist: 'Mago de Oz',
    members: [
      'Zeta',
      'Txus',
      'Patricia Tapia',
      'Carlitos',
      'Mohamed',
      'Josema'
    ],
    songs: ['In Eternum', 'Jerusalem D.C', 'Opera Mortis', 'Ira Dei'],
    cover:
      'https://res.cloudinary.com/duzguojrd/image/upload/PROYECTO2%20BUENO/ykhatxzoy0b0elhexz6p.jpg',
    year: 2019,
    genre: 'Folk Metal',
    price: 25,
    stock: [true, 3],
    id: 'album-1683488134511-926644'
  },
  {
    name: 'Gaia III: Atlantia',
    artist: 'Mago de Oz',
    members: ['Jose Andrea', 'Txus', 'Patricia Tapia', 'Mohamed'],
    songs: [
      'Dies Irae',
      'Fur Immer',
      'Mi hogar eres tu',
      'El violin del Diablo'
    ],
    cover:
      'https://res.cloudinary.com/duzguojrd/image/upload/PROYECTO2%20BUENO/hp4avzrmkl7bplmdijqv.jpg',
    year: 2010,
    genre: 'Folk Metal',
    price: 22,
    stock: [true, 4],
    id: 'album-1683488134511-392544'
  },
  {
    name: 'Surfer Rosa',
    artist: 'Pixies',
    members: ['Black Francis', 'Joey Santiago', 'Kim Deal', 'David Lovering'],
    songs: ['Bone Machine', 'Gigantic', 'Where Is My Mind?', 'Vamos'],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680973951/Rock%20Shop/surfer-ros_wt2kf0.webp',
    year: 1988,
    genre: 'Alternative Rock',
    price: 20,
    stock: [true, 6],
    id: 'album-1683488134511-876898'
  },
  {
    name: 'Boston',
    artist: 'Boston',
    members: [
      'Tom Scholz',
      'Brad Delp',
      'Barry Goudreau',
      'Fran Sheehan',
      'Sib Hashian'
    ],
    songs: [
      'More Than a Feeling',
      'Peace of Mind',
      'Rock & Roll Band',
      'Foreplay / Long Time'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680973951/Rock%20Shop/Boston_ekapes.webp',
    year: 1976,
    genre: 'Rock',
    price: 28,
    stock: [true, 2],
    id: 'album-1683488134511-641359'
  },
  {
    name: 'Led Zeppelin IV',
    artist: 'Led Zeppelin',
    members: ['Jimmy Page', 'Robert Plant', 'John Paul Jones', 'John Bonham'],
    songs: [
      'Black Dog',
      'Rock and Roll',
      'Stairway to Heaven',
      'Going to California'
    ],
    cover:
      'https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg',
    year: 1971,
    genre: 'Hard Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-132811'
  },
  {
    name: 'Toys in the Attic',
    artist: 'Aerosmith',
    members: [
      'Steven Tyler',
      'Joe Perry',
      'Tom Hamilton',
      'Joey Kramer',
      'Brad Whitford'
    ],
    songs: [
      'Toys in the Attic',
      'Walk This Way',
      'Sweet Emotion',
      'You See Me Crying'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1678558193/Rock%20Shop/Toys_in_the_Attic_jiitsh.webp',
    year: 1975,
    genre: 'Hard Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-889807'
  },
  {
    name: 'Eliminator',
    artist: 'ZZ Top',
    members: ['Billy Gibbons', 'Dusty Hill', 'Frank Beard'],
    songs: [
      "Gimme All Your Lovin'",
      'Sharp Dressed Man',
      'Legs',
      'Got Me Under Pressure'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1678558185/Rock%20Shop/Eliminator_x4riil.webp',
    year: 1983,
    genre: 'Hard Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-929779'
  },
  {
    name: 'Appetite for Destruction',
    artist: "Guns N' Roses",
    members: [
      'Axl Rose',
      'Slash',
      'Izzy Stradlin',
      'Duff McKagan',
      'Steven Adler'
    ],
    songs: [
      'Welcome to the Jungle',
      "Sweet Child o' Mine",
      'Paradise City',
      'Nightrain'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1678558185/Rock%20Shop/Appetite_for_Destruction_wqxsgi.webp',
    year: 1987,
    genre: 'Hard Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-489459'
  },
  {
    name: 'Black Holes and Revelations',
    artist: 'Muse',
    members: ['Matthew Bellamy', 'Christopher Wolstenholme', 'Dominic Howard'],
    songs: [
      'Take a Bow',
      'Starlight',
      'Supermassive Black Hole',
      'Map of the Problematique',
      "Soldier's Poem",
      'Invincible',
      'Assassin',
      'Exo-Politics',
      'City of Delusion',
      'Hoodoo',
      'Knights of Cydonia'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1678902392/Rock%20Shop/Black_Holes_and_Revelations_rzadgw.webp',
    year: 2006,
    genre: 'Alternative Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-27842'
  },
  {
    name: 'The Wall',
    artist: 'Pink Floyd',
    members: ['Roger Waters', 'David Gilmour', 'Richard Wright', 'Nick Mason'],
    songs: [
      'In the Flesh?',
      'Another Brick in the Wall (Part 1)',
      'The Happiest Days of Our Lives',
      'Another Brick in the Wall (Part 2)'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680974710/Rock%20Shop/the_wall_ctkubt.webp',
    year: 1979,
    genre: 'Progressive Rock',
    price: 25,
    stock: [true, 3],
    id: 'album-1683488134511-59276'
  },
  {
    name: 'Use Your Illusion',
    artist: "Guns N' Roses",
    members: ['Axl Rose', 'Slash', 'Duff McKagan', 'Matt Sorum'],
    songs: ['November Rain', "Don't Cry", 'Estranged', 'Civil War'],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680974710/Rock%20Shop/Use_Your_Illusion_ihmhdk.webp',
    year: 1991,
    genre: 'Hard Rock',
    price: 30,
    stock: [true, 2],
    id: 'album-1683488134511-435779'
  },
  {
    name: 'Vitalogy',
    artist: 'Pearl Jam',
    members: ['Eddie Vedder', 'Jeff Ament', 'Stone Gossard', 'Mike McCready'],
    songs: ['Corduroy', 'Not for You', 'Better Man', 'Immortality'],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680974710/Rock%20Shop/vitalogy_xfijib.webp',
    year: 1994,
    genre: 'Grunge',
    price: 22,
    stock: [true, 4],
    id: 'album-1683488134511-648205'
  },
  {
    name: 'Nevermind',
    artist: 'Nirvana',
    members: ['Kurt Cobain', 'Krist Novoselic', 'Dave Grohl'],
    songs: [
      'Smells Like Teen Spirit',
      'Come as You Are',
      'Lithium',
      'In Bloom'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680974710/Rock%20Shop/nevermind_a1gsgl.webp',
    year: 1991,
    genre: 'Grunge',
    price: 18,
    stock: [true, 6],
    id: 'album-1683488134511-310257'
  },
  {
    name: 'Fly by Night',
    artist: 'Rush',
    members: ['Geddy Lee', 'Alex Lifeson', 'Neil Peart'],
    songs: [
      'Anthem',
      'Fly by Night',
      'Beneath, Between & Behind',
      'Making Memories'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680974709/Rock%20Shop/fly_by_night_db22im.webp',
    year: 1975,
    genre: 'Progressive Rock',
    price: 24,
    stock: [true, 2],
    id: 'album-1683488134511-229602'
  },
  {
    name: 'Test for Echo',
    artist: 'Rush',
    members: ['Geddy Lee', 'Alex Lifeson', 'Neil Peart'],
    songs: ['Test for Echo', 'Driven', 'Half the World', 'Resist'],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680974710/Rock%20Shop/test_for_echo_ij23qx.webp',
    year: 1996,
    genre: 'Progressive Rock',
    price: 28,
    stock: [true, 1],
    id: 'album-1683488134511-257013'
  },
  {
    name: 'Get a Grip',
    artist: 'Aerosmith',
    members: [
      'Steven Tyler',
      'Joe Perry',
      'Brad Whitford',
      'Tom Hamilton',
      'Joey Kramer'
    ],
    songs: ["Livin' on the Edge", "Cryin'", 'Amazing', 'Crazy'],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680974709/Rock%20Shop/get_a_grip_uyvb3s.webp',
    year: 1993,
    genre: 'Hard Rock',
    price: 26,
    stock: [true, 3],
    id: 'album-1683488134511-915811'
  },
  {
    name: 'Toxicity',
    artist: 'System of a Down',
    members: [
      'Serj Tankian',
      'Daron Malakian',
      'Shavo Odadjian',
      'John Dolmayan'
    ],
    songs: ['Chop Suey!', 'Toxicity', 'Aerials', 'Prison Song'],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680974710/Rock%20Shop/toxicity_nt9yzq.webp',
    year: 2001,
    genre: 'Alternative Metal',
    price: 21,
    stock: [true, 5],
    id: 'album-1683488134511-860363'
  },
  {
    name: 'Hardwired... to Self-Destruct',
    artist: 'Metallica',
    members: [
      'James Hetfield',
      'Lars Ulrich',
      'Kirk Hammett',
      'Robert Trujillo'
    ],
    songs: [
      'Hardwired',
      'Moth into Flame',
      'Atlas, Rise!',
      "Now That We're Dead"
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680974709/Rock%20Shop/Hardwired..._to_Self-Destruct_fwmyso.webp',
    year: 2016,
    genre: 'Heavy metal',
    price: 35,
    stock: [true, 2],
    id: 'album-1683488134511-949097'
  },
  {
    name: 'Jazz',
    artist: 'Queen',
    members: ['Freddie Mercury', 'Brian May', 'Roger Taylor', 'John Deacon'],
    songs: [
      'Mustapha',
      'Fat Bottomed Girls',
      'Bicycle Race',
      "Don't Stop Me Now"
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680974709/Rock%20Shop/jazz_dgeipx.webp',
    year: 1978,
    genre: 'Rock',
    price: 23,
    stock: [true, 4],
    id: 'album-1683488134511-965900'
  },
  {
    name: 'Bandera Negra',
    artist: 'Mago de Oz',
    members: ['Zeta', 'Txus', 'Patricia Tapia'],
    songs: [
      'La isla de las 7 Calaveras',
      'Al Abordaje',
      'La Dama del Mar',
      'Tu madre es una Cabra',
      'La vida Pirata',
      'Bandera Negra',
      'Resacosix en Pandemia'
    ],
    cover:
      'https://res.cloudinary.com/duzguojrd/image/upload/PROYECTO2%20BUENO/leulnyqtbl9lf4vzg4ua.jpg',
    year: 2021,
    genre: 'Folk Metal',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-722865'
  },
  {
    name: 'Revolver',
    artist: 'The Beatles',
    members: [
      'John Lennon',
      'Paul McCartney',
      'George Harrison',
      'Ringo Starr'
    ],
    songs: [
      'Taxman',
      'Eleanor Rigby',
      "I'm Only Sleeping",
      'Love You To',
      'Here, There and Everywhere',
      'Yellow Submarine',
      'She Said She Said',
      'Good Day Sunshine',
      'And Your Bird Can Sing',
      'For No One',
      'Doctor Robert',
      'I Want to Tell You',
      'Got to Get You into My Life',
      'Tomorrow Never Knows'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1678902392/Rock%20Shop/Revolver_hmkgau.webp',
    year: 1966,
    genre: 'Psychedelic Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-760567'
  },
  {
    name: 'La Leyenda de la Mancha',
    artist: 'Mago de Oz',
    members: ['Jose Andrea', 'Txus', 'Mohamed', 'Carlitos', 'Frank'],
    songs: [
      'En un lugar...',
      'El Santo Grial',
      'La Leyenda de la Mancha',
      'Noche Toledana',
      'Molinos de Viento',
      'Dime con quien andas',
      'Maritornes',
      'El Bálsamo de Fierabrás',
      'El Pacto',
      'La insula de Barataria',
      'Requiem'
    ],
    cover:
      'https://res.cloudinary.com/duzguojrd/image/upload/PROYECTO2%20BUENO/zgcdna8ydrb02rfh05ie.jpg',
    year: 1998,
    genre: 'Folk Metal',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-24659'
  },
  {
    name: 'La ciudad de los Arboles',
    artist: 'Mago de Oz',
    members: ['Jose Andrea', 'Txus', 'Mohamed', 'Patricia Tapia'],
    songs: [
      'El Epsiritu del Bosque',
      'La ciudad de los Arboles',
      'Mi nombre es Rock n Roll',
      'El rincon de los Sentidos',
      'Deja de llorar',
      'La cancion de los deseos',
      'Y ahora voy a salir',
      'Runa Llena',
      'Resacosix en la barra',
      'No queda sino batirnos',
      'Sin ti, seria silencio',
      'Si molesto, me quedo',
      'El Espiritu del bosque II'
    ],
    cover:
      'https://res.cloudinary.com/duzguojrd/image/upload/PROYECTO2%20BUENO/regwpepnyfg1fho45kkv.jpg',
    year: 2007,
    genre: 'Folk Metal',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-673891'
  },
  {
    name: 'Wish You Were Here',
    artist: 'Pink Floyd',
    members: ['David Gilmour', 'Roger Waters', 'Richard Wright', 'Nick Mason'],
    songs: [
      'Wish You Were Here',
      'Shine On You Crazy Diamond (Parts I-V)',
      'Welcome to the Machine',
      'Have a Cigar',
      'Shine On You Crazy Diamond (Parts VI-IX)'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1678902392/Rock%20Shop/Wish_You_Were_Here_nlzy5u.webp',
    year: 1975,
    genre: 'Progressive Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-661368'
  },
  {
    name: 'A Night at the Opera',
    artist: 'Queen',
    members: ['Freddie Mercury', 'Brian May', 'Roger Taylor', 'John Deacon'],
    songs: [
      'Death on Two Legs (Dedicated to...)',
      'Lazing on a Sunday Afternoon',
      "I'm in Love with My Car",
      "You're My Best Friend",
      "'39",
      'Sweet Lady',
      'Seaside Rendezvous',
      "The Prophet's Song",
      'Love of My Life',
      'Good Company',
      'Bohemian Rhapsody',
      'God Save the Queen'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1678902392/Rock%20Shop/A_Night_at_the_Opera_oqvcjh.webp',
    year: 1975,
    genre: 'Progressive Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-494342'
  },
  {
    name: 'Highway to Hell',
    artist: 'AC/DC',
    members: [
      'Bon Scott',
      'Angus Young',
      'Malcolm Young',
      'Phil Rudd',
      'Cliff Williams'
    ],
    songs: [
      'Highway to Hell',
      'Girls Got Rhythm',
      "If You Want Blood (You've Got It)",
      'Touch Too Much'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680975214/Rock%20Shop/highwawy_to_hell_ddzp9w.webp',
    year: 1979,
    genre: 'Hard Rock',
    price: 25,
    stock: [true, 8],
    id: 'album-1683488134511-873839'
  },
  {
    name: 'Who Made Who',
    artist: 'AC/DC',
    members: [
      'Brian Johnson',
      'Angus Young',
      'Malcolm Young',
      'Phil Rudd',
      'Cliff Williams'
    ],
    songs: ['Who Made Who', 'D.T.', 'Chase the Ace', 'Ride On'],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680975214/Rock%20Shop/who_made_who_hsjkzc.webp',
    year: 1986,
    genre: 'Hard Rock',
    price: 22,
    stock: [true, 6],
    id: 'album-1683488134511-25741'
  },
  {
    name: 'Diabulus in Opera',
    artist: 'Mago de Oz',
    members: ['Mago de Oz'],
    songs: [
      'Dies Irae',
      'Diabulus in Musica',
      'Alma',
      'Sueños Dormidos',
      'Siempre',
      'A Costa da Morte'
    ],
    cover:
      'https://res.cloudinary.com/duzguojrd/image/upload/PROYECTO2%20BUENO/nfzgeu2zf3dwiybgzgjo.jpg',
    year: 2017,
    genre: 'Folk Metal',
    price: 20,
    stock: [true, 3],
    id: 'album-1683488134511-683861'
  },
  {
    name: 'Love and Oz',
    artist: 'Mago de Oz',
    members: ['Mago de Oz'],
    songs: [
      'El hombre de la mirada triste',
      'In Memoriam',
      'El peso del alma',
      'Adiós, Dulcinea'
    ],
    cover:
      'https://res.cloudinary.com/duzguojrd/image/upload/PROYECTO2%20BUENO/msltclcy1deerubhucbi.jpg',
    year: 2011,
    genre: 'Folk Metal',
    price: 19,
    stock: [true, 2],
    id: 'album-1683488134511-875563'
  },
  {
    name: 'Love and Oz II',
    artist: 'Mago de Oz',
    members: ['Zeta', 'Txus', 'Carlitos', 'Mohamed', 'Josema'],
    songs: [
      'Nos han robado la primavera',
      'Si supieras...',
      'Quiero morirme en ti',
      'Todo lo que soy',
      'No me digas adiós',
      'Espera en el Cielo',
      'Maria Soliña',
      'Siempre',
      'Morire siendo de ti',
      'El templo del Adios',
      'Desde mi cielo'
    ],
    cover:
      'https://res.cloudinary.com/duzguojrd/image/upload/PROYECTO2%20BUENO/q7p7hb8yv3d43ofixchs.jpg',
    year: 2022,
    genre: 'Folk Metal',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-397003'
  },
  {
    name: 'Paranoid',
    artist: 'Black Sabbath',
    members: ['Ozzy Osbourne', 'Tony Iommi', 'Geezer Butler', 'Bill Ward'],
    songs: [
      'War Pigs',
      'Paranoid',
      'Planet Caravan',
      'Iron Man',
      'Electric Funeral',
      'Hand of Doom',
      'Rat Salad',
      'Fairies Wear Boots'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1678902392/Rock%20Shop/Paranoid_jk8k9d.webp',
    year: 1970,
    genre: 'Heavy Metal',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-429386'
  },
  {
    name: 'The Joshua Tree',
    artist: 'U2',
    members: ['Bono', 'The Edge', 'Adam Clayton', 'Larry Mullen Jr.'],
    songs: [
      'Where the Streets Have No Name',
      "I Still Haven't Found What I'm Looking For",
      'With or Without You',
      'Bullet the Blue Sky',
      'Running to Stand Still',
      'Red Hill Mining Town',
      "In God's Country",
      'Trip Through Your Wires',
      'One Tree Hill',
      'Exit',
      'Mothers of the Disappeared'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1678902393/Rock%20Shop/The_Joshua_Tree_ojjmog.webp',
    year: 1987,
    genre: 'Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-749825'
  },
  {
    name: 'Rust in Peace',
    artist: 'Megadeth',
    members: [
      'Dave Mustaine',
      'David Ellefson',
      'Marty Friedman',
      'Nick Menza'
    ],
    songs: [
      'Holy Wars... The Punishment Due',
      'Hangar 18',
      'Take No Prisoners',
      'Five Magics',
      'Poison Was the Cure',
      'Lucretia',
      'Tornado of Souls',
      'Dawn Patrol',
      'Rust in Peace... Polaris'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1679047301/Rock%20Shop/Rust_in_Peace_l3xwmg.webp',
    year: 1990,
    genre: 'Thrash Metal',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-649287'
  },
  {
    name: 'Black Album',
    artist: 'Metallica',
    members: ['James Hetfield', 'Lars Ulrich', 'Kirk Hammett', 'Jason Newsted'],
    songs: [
      'Enter Sandman',
      'Sad but True',
      'Holier Than Thou',
      'The Unforgiven',
      'Wherever I May Roam',
      "Don't Tread on Me",
      'Through the Never',
      'Nothing Else Matters',
      'Of Wolf and Man',
      'The God That Failed',
      'My Friend of Misery',
      'The Struggle Within'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1679047299/Rock%20Shop/Black_Album_mrrxos.webp',
    year: 1991,
    genre: 'Heavy Metal',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-405335'
  },
  {
    name: 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',
    artist: 'David Bowie',
    members: ['David Bowie', 'Mick Ronson', 'Trevor Bolder', 'Mick Woodmansey'],
    songs: [
      'Five Years',
      'Soul Love',
      'Moonage Daydream',
      'Starman',
      "It Ain't Easy",
      'Lady Stardust',
      'Star',
      'Hang on to Yourself',
      'Ziggy Stardust',
      'Suffragette City',
      "Rock 'n' Roll Suicide"
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1679047302/Rock%20Shop/The_Rise_and_Fall_of_Ziggy_Stardust_and_the_Spiders_from_Mars_a7do8a.webp',
    year: 1972,
    genre: 'Glam Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-874527'
  },
  {
    name: 'Purple Rain',
    artist: 'Prince',
    members: ['Prince'],
    songs: [
      "Let's Go Crazy",
      'Take Me with U',
      'The Beautiful Ones',
      'Computer Blue',
      'Darling Nikki',
      'When Doves Cry',
      'I Would Die 4 U',
      "Baby I'm a Star",
      'Purple Rain'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1679047301/Rock%20Shop/Purple_Rain_ri68y3.webp',
    year: 1984,
    genre: 'Funk',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-854635'
  },
  {
    name: 'Led Zeppelin II',
    artist: 'Led Zeppelin',
    members: ['Jimmy Page', 'Robert Plant', 'John Paul Jones', 'John Bonham'],
    songs: [
      'Whole Lotta Love',
      'What Is and What Should Never Be',
      'The Lemon Song',
      'Thank You',
      'Heartbreaker',
      "Living Loving Maid (She's Just a Woman)",
      'Ramble On',
      'Moby Dick',
      'Bring It On Home'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1679047302/Rock%20Shop/Led_Zeppelin_II_augm4k.webp',
    year: 1969,
    genre: 'Hard Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-746032'
  },
  {
    name: 'Electric Ladyland',
    artist: 'Jimi Hendrix',
    members: ['Jimi Hendrix', 'Noel Redding', 'Mitch Mitchell'],
    songs: [
      'And the Gods Made Love',
      'Have You Ever Been (To Electric Ladyland)',
      'Crosstown Traffic',
      'Voodoo Chile',
      'Little Miss Strange',
      'Long Hot Summer Night',
      'Come On (Part I)',
      'Gypsy Eyes',
      'Burning of the Midnight Lamp',
      'Rainy Day, Dream Away',
      '1983... (A Merman I Should Turn to Be)',
      'Moon, Turn the Tides... Gently Gently Away',
      'Still Raining, Still Dreaming',
      'House Burning Down',
      'All Along the Watchtower',
      'Voodoo Child (Slight Return)'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1679047299/Rock%20Shop/Electric_Ladyland_pblfxo.webp',
    year: 1968,
    genre: 'Psychedelic Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-19814'
  },
  {
    name: 'Dark Side of the Moon',
    artist: 'Pink Floyd',
    members: ['David Gilmour', 'Nick Mason', 'Roger Waters', 'Richard Wright'],
    songs: [
      'Speak to Me',
      'Breathe',
      'On the Run',
      'Time',
      'The Great Gig in the Sky',
      'Money',
      'Us and Them',
      'Any Colour You Like',
      'Brain Damage',
      'Eclipse'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1679047299/Rock%20Shop/Dark_Side_of_the_Moon_iqtqcr.webp',
    year: 1973,
    genre: 'Psychedelic Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-523185'
  },
  {
    name: 'Hysteria',
    artist: 'Def Leppard',
    members: [
      'Joe Elliott',
      'Phil Collen',
      'Steve Clark',
      'Rick Savage',
      'Rick Allen'
    ],
    songs: [
      'Women',
      'Rocket',
      'Animal',
      'Love Bites',
      'Pour Some Sugar on Me',
      'Armageddon It',
      'Gods of War',
      "Don't Shoot Shotgun",
      'Run Riot',
      'Hysteria',
      'Excitable',
      'Love and Affection'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1679047301/Rock%20Shop/Hysteria_btnw2q.webp',
    year: 1987,
    genre: 'Hard Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-223440'
  },
  {
    name: 'Backspacer',
    artist: 'Pearl Jam',
    members: [
      'Eddie Vedder',
      'Stone Gossard',
      'Jeff Ament',
      'Mike McCready',
      'Matt Cameron'
    ],
    songs: [
      'Gonna See My Friend',
      'Got Some',
      'The Fixer',
      'Johnny Guitar',
      'Just Breathe',
      'Amongst the Waves',
      'Unthought Known',
      'Supersonic',
      'Speed of Sound',
      'Force of Nature',
      'The End'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1679047300/Rock%20Shop/Backspacer_t0smga.webp',
    year: 2009,
    genre: 'Alternative Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-972443'
  },
  {
    name: 'The Doors',
    artist: 'The Doors',
    members: ['Jim Morrison', 'Ray Manzarek', 'Robby Krieger', 'John Densmore'],
    songs: [
      'Break On Through (To the Other Side)',
      'Soul Kitchen',
      'The Crystal Ship',
      'Twentieth Century Fox',
      'Alabama Song (Whiskey Bar)',
      'Light My Fire',
      'Back Door Man',
      'I Looked at You',
      'End of the Night',
      'Take It as It Comes',
      'The End'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1679047300/Rock%20Shop/The_Doors_uelzyy.webp',
    year: 1967,
    genre: 'Psychedelic Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-53546'
  },
  {
    name: 'Abbey Road',
    artist: 'The Beatles',
    members: [
      'John Lennon',
      'Paul McCartney',
      'George Harrison',
      'Ringo Starr'
    ],
    songs: [
      'Come Together',
      'Something',
      "Maxwell's Silver Hammer",
      'Oh! Darling',
      "Octopus's Garden",
      "I Want You (She's So Heavy)",
      'Here Comes the Sun',
      'Because',
      'You Never Give Me Your Money',
      'Sun King',
      'Mean Mr. Mustard',
      'Polythene Pam',
      'She Came In Through the Bathroom Window',
      'Golden Slumbers',
      'Carry That Weight',
      'The End',
      'Her Majesty'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1679047300/Rock%20Shop/Abbey_Road_ujlfk1.webp',
    year: 1969,
    genre: 'Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-86472'
  },
  {
    name: 'Blood Sugar Sex Magik',
    artist: 'Red Hot Chili Peppers',
    members: ['Anthony Kiedis', 'John Frusciante', 'Flea', 'Chad Smith'],
    songs: [
      'The Power of Equality',
      'If You Have to Ask',
      'Breaking the Girl',
      'Funky Monks',
      'Suck My Kiss',
      'I Could Have Lied',
      'Mellowship Slinky in B Major',
      'The Righteous & The Wicked',
      'Give It Away',
      'Blood Sugar Sex Magik',
      'Under the Bridge',
      'Naked in the Rain',
      'Apache Rose Peacock',
      'The Greeting Song',
      'My Lovely Man',
      'Sir Psycho Sexy',
      "They're Red Hot"
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1679047300/Rock%20Shop/Blood_Sugar_Sex_Magik_iokdef.webp',
    year: 1991,
    genre: 'Alternative Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-859595'
  },
  {
    name: 'Perfect Strangers',
    artist: 'Deep Purple',
    members: [
      'Ian Gillan',
      'Ritchie Blackmore',
      'Roger Glover',
      'Jon Lord',
      'Ian Paice'
    ],
    songs: [
      'Knocking at Your Back Door',
      'Under the Gun',
      "Nobody's Home",
      'Mean Streak'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1681032917/Rock%20Shop/Perfect_Strangers_hxfjx5.webp',
    year: 1984,
    genre: 'Hard Rock',
    price: 25,
    stock: [true, 3],
    id: 'album-1683488134511-235772'
  },
  {
    name: 'Burn',
    artist: 'Deep Purple',
    members: ['David Coverdale', 'Ritchie Blackmore', 'Jon Lord', 'Ian Paice'],
    songs: [
      'Burn',
      'Might Just Take Your Life',
      'Lay Down, Stay Down',
      "What's Goin' on Here"
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1681032917/Rock%20Shop/burn_t7kbwo.webp',
    year: 1974,
    genre: 'Hard Rock',
    price: 20,
    stock: [true, 5],
    id: 'album-1683488134511-569793'
  },
  {
    name: 'Made in Japan',
    artist: 'Deep Purple',
    members: [
      'Ian Gillan',
      'Ritchie Blackmore',
      'Roger Glover',
      'Jon Lord',
      'Ian Paice'
    ],
    songs: ['Highway Star', 'Child in Time', 'Smoke on the Water', 'The Mule'],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1681032917/Rock%20Shop/made_in_japan_npctpt.webp',
    year: 1972,
    genre: 'Hard Rock',
    price: 30,
    stock: [true, 2],
    id: 'album-1683488134511-205815'
  },
  {
    name: 'We Care a Lot',
    artist: 'Faith No More',
    members: ['Chuck Mosley', 'Jim Martin', 'Billy Gould', 'Mike Bordin'],
    songs: [
      'We Care a Lot',
      'As the Worm Turns',
      "Anne's Song",
      'Pills for Breakfast'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1681032917/Rock%20Shop/we_care_a_lot_pwp29h.webp',
    year: 1985,
    genre: 'Funk Metal',
    price: 15,
    stock: [true, 10],
    id: 'album-1683488134511-658167'
  },
  {
    name: 'The Real Thing',
    artist: 'Faith No More',
    members: ['Mike Patton', 'Jim Martin', 'Billy Gould', 'Mike Bordin'],
    songs: [
      'From out of Nowhere',
      'Epic',
      'Falling to Pieces',
      'Zombie Eaters'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1681032918/Rock%20Shop/the_real_thing_tf6wzs.webp',
    year: 1989,
    genre: 'Funk Metal',
    price: 25,
    stock: [true, 4],
    id: 'album-1683488134511-39637'
  },
  {
    name: 'Introduce Yourself',
    artist: 'Faith No More',
    members: [
      'Mike Patton',
      'Billy Gould',
      'Roddy Bottum',
      'Mike Bordin',
      'Jim Martin'
    ],
    songs: [
      'Faster Disco',
      "Anne's Song",
      'Introduce Yourself',
      'Chinese Arithmetic'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1681032917/Rock%20Shop/Introduce_Yourself_ubkyoz.webp',
    year: 1987,
    genre: 'Alternative Metal',
    price: 18,
    stock: [true, 3],
    id: 'album-1683488134511-417857'
  },
  {
    name: 'Green River',
    artist: 'Creedence Clearwater Revival',
    members: ['John Fogerty', 'Tom Fogerty', 'Stu Cook', 'Doug Clifford'],
    songs: [
      'Green River',
      'Commotion',
      'Tombstone Shadow',
      'Wrote a Song for Everyone'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1681032917/Rock%20Shop/Green_River_t7rupm.webp',
    year: 1969,
    genre: 'Swamp Rock',
    price: 25,
    stock: [true, 8],
    id: 'album-1683488134511-44046'
  },
  {
    name: 'Mardi Gras',
    artist: 'Creedence Clearwater Revival',
    members: ['John Fogerty', 'Tom Fogerty', 'Stu Cook', 'Doug Clifford'],
    songs: [
      'Someday Never Comes',
      "Tearin' Up the Country",
      'What Are You Gonna Do?',
      'Hello Mary Lou'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1681032917/Rock%20Shop/mardi_gras_p60fwo.webp',
    year: 1972,
    genre: 'Roots Rock',
    price: 30,
    stock: [true, 6],
    id: 'album-1683488134511-241915'
  },
  {
    name: 'Bayou Country',
    artist: 'Creedence Clearwater Revival',
    members: ['John Fogerty', 'Tom Fogerty', 'Stu Cook', 'Doug Clifford'],
    songs: ['Proud Mary', 'Born on the Bayou', 'Bootleg', 'Graveyard Train'],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680985761/Rock%20Shop/Bayou_Country_ia5sn3.webp',
    year: 1969,
    genre: 'Swamp Rock',
    price: 28,
    stock: [true, 7],
    id: 'album-1683488134511-53220'
  },
  {
    name: 'Surrealistic Pillow',
    artist: 'Jefferson Airplane',
    members: [
      'Grace Slick',
      'Marty Balin',
      'Paul Kantner',
      'Jorma Kaukonen',
      'Jack Casady',
      'Spencer Dryden'
    ],
    songs: ['Somebody to Love', 'White Rabbit', 'Today', "Comin' Back to Me"],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680985761/Rock%20Shop/Surrealistic_Pillow_qfvjqf.webp',
    year: 1967,
    genre: 'Psychedelic Rock',
    price: 22,
    stock: [true, 4],
    id: 'album-1683488134511-711775'
  },
  {
    name: 'Nine Lives',
    artist: 'Aerosmith',
    members: [
      'Steven Tyler',
      'Joe Perry',
      'Brad Whitford',
      'Tom Hamilton',
      'Joey Kramer'
    ],
    songs: [
      'Nine Lives',
      'Falling in Love (Is Hard on the Knees)',
      'Taste of India',
      'Pink'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680985761/Rock%20Shop/Nine_Lives_omnudc.webp',
    year: 1997,
    genre: 'Hard Rock',
    price: 25,
    stock: [true, 8],
    id: 'album-1683488134511-889130'
  },
  {
    name: 'The Division Bell',
    artist: 'Pink Floyd',
    members: ['David Gilmour', 'Nick Mason', 'Richard Wright'],
    songs: [
      'Cluster One',
      'What Do You Want from Me',
      'Poles Apart',
      'Marooned'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680985761/Rock%20Shop/The_Division_Bell_lizd5p.webp',
    year: 1994,
    genre: 'Progressive Rock',
    price: 30,
    stock: [true, 3],
    id: 'album-1683488134511-277713'
  },
  {
    name: 'By the Grace of God',
    artist: 'The Hellacopters',
    members: [
      'Nicke Andersson',
      'Anders Lindström',
      'Robert Dahlqvist',
      'Kenny Håkansson',
      'Samuel Lundberg'
    ],
    songs: [
      'By the Grace of God',
      'All New Low',
      'Down on Freestreet',
      'Better Than You'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680985761/Rock%20Shop/By_the_Grace_of_God_ruiamz.webp',
    year: 2002,
    genre: 'Garage Rock',
    price: 22,
    stock: [true, 6],
    id: 'album-1683488134511-481432'
  },
  {
    name: 'Brutal Planet',
    artist: 'Alice Cooper',
    members: [
      'Alice Cooper',
      'Eric Singer',
      'Ryan Roxie',
      'Greg Smith',
      'Chuck Garric'
    ],
    songs: ['Brutal Planet', 'Wicked Young Man', 'Sanctuary', 'Blow Me a Kiss'],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680985761/Rock%20Shop/Brutal_Planet_yrligx.webp',
    year: 2000,
    genre: 'Hard Rock',
    price: 20,
    stock: [true, 4],
    id: 'album-1683488134511-489336'
  },
  {
    name: 'Hey Stoopid',
    artist: 'Alice Cooper',
    members: ['Alice Cooper', 'Stef Burns', 'Hugh McDonald', 'Mickey Curry'],
    songs: [
      'Hey Stoopid',
      "Love's a Loaded Gun",
      'Snakebite',
      'Dangerous Tonight'
    ],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680985761/Rock%20Shop/Hey_Stoopid_ou132u.webp',
    year: 1991,
    genre: 'Hard Rock',
    price: 18,
    stock: [true, 7],
    id: 'album-1683488134511-251374'
  },
  {
    name: 'The Last Temptation',
    artist: 'Alice Cooper',
    members: [
      'Alice Cooper',
      'Stef Burns',
      'Greg Smith',
      'Derek Sherinian',
      'David Uosikkinen'
    ],
    songs: ['Sideshow', "Nothing's Free", 'Lost in America', 'Bad Place Alone'],
    cover:
      'https://res.cloudinary.com/drsfru9lj/image/upload/v1680985761/Rock%20Shop/The_Last_Temptation_z4ish7.webp',
    year: 1994,
    genre: 'Hard Rock',
    price: 23,
    stock: [true, 2],
    id: 'album-1683488134511-322132'
  }
]

export const cart = {
  products: [],
  addProduct: function (product) {
    this.products.push(product)
  }
}
