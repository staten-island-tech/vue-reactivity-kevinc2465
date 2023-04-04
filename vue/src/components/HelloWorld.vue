<template>
  <div class="product">
    <div class="itemCards" v-for="item in items">
      <h2 class="name">{{ item.name }}</h2>
      <img :src="item.img" alt="item image" />
      <h3>Anime name: {{ item.origin }}</h3>
      <h3>IQ: {{ item.Iq }}</h3>
      <h3>Cost: ${{ item.cost }}</h3>
      <button @click.prevent="notify">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    name: 'Yoshiko Hanabatake',
    img: 'https://pm1.narvii.com/6557/15f6a8bf04d4c9ec8e62d596dbe23da2be91fe8e_hq.jpg',
    Iq: '10',
    origin: 'Aho-Girl',
    cost: '0.01'
  },
  {
    name: 'Aqua',
    img: 'https://thicc.mywaifulist.moe/waifus/554/5c01014e09976442d991d0913bdb3c7f28e4f17be08fcb39e4e8dc67cc043fe5_thumb.png',
    Iq: '40',
    origin: 'Konosuba',
    cost: '0.04'
  },
  {
    name: 'Erwin',
    img: 'https://pbs.twimg.com/media/E62SrdEXsAUXJp5.jpg:large',
    Iq: '150',
    origin: 'Attack on Titan',
    cost: '1.50'
  },
  {
    name: 'Narsus',
    img: 'https://pm1.narvii.com/6314/24e229f9894c5c4bb34b9edf18ee16adad092c9c_00.jpg',
    Iq: '154',
    origin: 'The Heroic Legend of Arslan',
    cost: '1.54'
  },
  {
    name: 'Satou',
    img: 'https://pm1.narvii.com/6082/06c96220718657336e38f0b5141d69e0ec98d91e_00.jpg',
    Iq: '166',
    origin: 'Death March to the Parallel World Rhapsody',
    cost: '1.66'
  },
  {
    name: 'Shiroe',
    img: 'https://i.pinimg.com/originals/1d/80/18/1d8018a6ce75d8728db2a1c8b4eef5e4.jpg',
    Iq: '170',
    origin: 'Log Horizon',
    cost: '1.70'
  },
  {
    name: 'Keima Katsuragi',
    img: 'https://pm1.narvii.com/6071/e015973be1d4b164700dab7a757d32e498f87505_00.jpg',
    Iq: '177',
    origin: 'The World God Only Knows',
    cost: '1.77'
  },
  {
    name: 'Jabami Yumeko',
    img: 'https://pm1.narvii.com/7182/bd57a61c4b94d7a868cd0eaeaac44b287a6a1ef7r1-855-672v2_00.jpg',
    Iq: '180',
    origin: 'Kakegurui - Compulsive Gambler',
    cost: '1.80'
  },
  {
    name: 'Tokuchi Toua',
    img: 'https://i.pinimg.com/474x/14/a0/c3/14a0c3c9d3b44f3b6cb4b7b33be97cc2--saitama-sports.jpg',
    Iq: '184',
    origin: 'One Outs',
    cost: '1.84'
  },
  {
    name: 'Renner',
    img: 'https://randomc.net/image/Overlord/Overlord%20IV%20-%2013%20-%20Large%2034.jpg',
    Iq: '188',
    origin: 'Overlord',
    cost: '1.88'
  },
  {
    name: 'Makise Kurisu',
    img: 'https://w0.peakpx.com/wallpaper/626/637/HD-wallpaper-steins-gate-kurisu-makise-thumbnail.jpg',
    Iq: '193',
    origin: 'Steins;Gate',
    cost: '1.93'
  },
  {
    name: 'Ash Lynx',
    img: 'https://cdnb.artstation.com/p/assets/images/images/054/737/177/large/edo-sama-ashlynx.jpg?1665246633',
    Iq: '200',
    origin: 'Banana Fish',
    cost: '2.00'
  },
  {
    name: 'Inaho Kaizuka',
    img: 'https://cdn.myanimelist.net/images/characters/10/259923.jpg',
    Iq: '205',
    origin: 'Aldnoah. Zero',
    cost: '2.05'
  },
  {
    name: 'Senku Ishigami',
    img: 'https://w0.peakpx.com/wallpaper/966/5/HD-wallpaper-senku-dr-stone-dr-stone-ishigami-drstone-edit-mangaart-edits-fanart-manga-anime.jpg',
    Iq: '350',
    origin: 'Dr. Stone',
    cost: '3.50'
  },
  {
    name: 'Koro Sensei',
    img: 'https://i.pinimg.com/originals/9d/ee/96/9dee9649497189b4171101ecdc700928.jpg',
    Iq: '366',
    origin: 'Assassination Classroom',
    cost: '3.66'
  },
  {
    name: 'Meruem',
    img: 'https://cdn.myanimelist.net/images/characters/6/243861.jpg',
    Iq: '400',
    origin: 'Hunter x Hunter',
    cost: '4.00'
  },
  {
    name: 'Saiki Kusuo',
    img: 'https://thicc.mywaifulist.moe/pending/waifus/hNZKFDaQdMWG5iXSRYz4usTjiKQ8rJKXcTNHRZkI.png',
    Iq: '900',
    origin: 'The Disastrous Life of Saiki K',
    cost: '9.00'
  },
  {
    name: 'Kokoro Akechi',
    img: 'https://cosplayfu-website.s3.amazonaws.com/_Photo/character/mini/11418.jpg',
    Iq: '1,300',
    origin: 'Tantei Opera Milky Holmes',
    cost: '13.00'
  },
  {
    name: 'Kei',
    img: 'https://s1.narvii.com/image/4bumhdpdhqr4ea2ev7nyde7w2nle44hu_00.jpg',
    Iq: '50,000',
    origin: 'Gantz',
    cost: '500'
  },
  {
    name: 'Aoi Todo',
    img: 'https://practicaltyping.com/wp-content/uploads/2022/01/todo-1.jpg',
    Iq: '530,000',
    origin: 'Jujutsu Kaisen',
    cost: '5,300'
  },
  {
    name: 'Washu Hakubi',
    img: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/04/Bleach-Washu-Feature.jpg',
    Iq: '1,000,000',
    origin: 'Tenchi Muyo',
    cost: '10,000'
  }
]

function notify() {
  alert('Sorry, the website was taken down due to the involvement of DCJS')
}
</script>
<style scoped>
.items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.itemCards {
  background: #364652;
  margin-bottom: 1rem;
  width: 30%;
  text-align: center;
  border-radius: 5%;
  box-shadow: 10px 10px 10px black;
}
.itemCards img {
  width: 40%;
}

.itemCards h2 {
  color: #c7dbe6;
  font-size: 2rem;
}

.itemCards h3 {
  font-size: 1.5rem;
}
</style>
