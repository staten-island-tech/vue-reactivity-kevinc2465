<template>
  <main>
    <TheWelcome />
  </main>
  <div class="items">
    <div class="itemCards" v-for="item in items">
      <h2>{{ item.name }}</h2>
      <img src="item.image" alt="item image" />
      <p>{{ item.Iq }}</p>
      <p>{{ item.origin }}</p>
    </div>
  </div>
</template>

<script setup>
import TheWelcome from '../components/TheWelcome.vue'

const items = [
  {
    name: 'Yoshiko Hanabatake',
    img: 'https://pm1.narvii.com/6557/15f6a8bf04d4c9ec8e62d596dbe23da2be91fe8e_hq.jpg',
    Iq: '10',
    origin: 'Aho-Girl'
  },
  {
    name: 'Aqua',
    img: 'https://thicc.mywaifulist.moe/waifus/554/5c01014e09976442d991d0913bdb3c7f28e4f17be08fcb39e4e8dc67cc043fe5_thumb.png',
    Iq: '40',
    origin: 'Konosuba'
  },
  {
    name: 'Erwin',
    img: 'https://pbs.twimg.com/media/E62SrdEXsAUXJp5.jpg:large',
    Iq: '150',
    origin: 'Attack on Titan'
  },
  {
    name: 'Narsus',
    img: 'https://pm1.narvii.com/6314/24e229f9894c5c4bb34b9edf18ee16adad092c9c_00.jpg',
    Iq: '154',
    origin: 'The Heroic Legend of Arslan'
  },
  {
    name: 'Satou',
    img: 'https://pm1.narvii.com/6082/06c96220718657336e38f0b5141d69e0ec98d91e_00.jpg',
    Iq: '166',
    origin: 'Death March to the Parallet World Rhapsody'
  },
  {
    name: 'Shiroe',
    img: 'https://i.pinimg.com/originals/1d/80/18/1d8018a6ce75d8728db2a1c8b4eef5e4.jpg',
    Iq: '170',
    origin: 'Log Horizon'
  },
  {
    name: 'Keima Katsuragi',
    img: 'https://pm1.narvii.com/6071/e015973be1d4b164700dab7a757d32e498f87505_00.jpg',
    Iq: '177',
    origin: 'The World God Only Knows'
  },
  {
    name: 'Jabami Yumeko',
    img: 'https://pm1.narvii.com/7182/bd57a61c4b94d7a868cd0eaeaac44b287a6a1ef7r1-855-672v2_00.jpg',
    Iq: '180',
    origin: 'Kakegurui - Compulsive Gambler'
  },
  {
    name: 'Tokuchi Toua',
    img: 'https://i.pinimg.com/474x/14/a0/c3/14a0c3c9d3b44f3b6cb4b7b33be97cc2--saitama-sports.jpg',
    Iq: '184',
    origin: 'One Outs'
  },
  {
    name: 'Renner',
    img: 'https://randomc.net/image/Overlord/Overlord%20IV%20-%2013%20-%20Large%2034.jpg',
    Iq: '188',
    origin: 'Overlord'
  },
  {
    name: 'Makise Kurisu',
    img: 'https://w0.peakpx.com/wallpaper/626/637/HD-wallpaper-steins-gate-kurisu-makise-thumbnail.jpg',
    Iq: '193',
    origin: 'Steins;Gate'
  },
  {
    name: 'Ash Lynx',
    img: 'https://cdnb.artstation.com/p/assets/images/images/054/737/177/large/edo-sama-ashlynx.jpg?1665246633',
    Iq: '200',
    origin: 'Banana Fish'
  },
  {
    name: 'Inaho Kaizuka',
    img: 'https://cdn.myanimelist.net/images/characters/10/259923.jpg',
    Iq: '205',
    origin: 'Aldnoah. Zero'
  },
  {
    name: 'Senku Ishigami',
    img: 'https://w0.peakpx.com/wallpaper/966/5/HD-wallpaper-senku-dr-stone-dr-stone-ishigami-drstone-edit-mangaart-edits-fanart-manga-anime.jpg',
    Iq: '350',
    origin: 'Dr. Stone'
  },
  {
    name: 'Koro Sensei',
    img: 'https://i.pinimg.com/originals/9d/ee/96/9dee9649497189b4171101ecdc700928.jpg',
    Iq: '366',
    origin: 'Assassination Classroom'
  },
  {
    name: 'Meruem',
    img: 'https://cdn.myanimelist.net/images/characters/6/243861.jpg',
    Iq: '400',
    origin: 'Hunter x Hunter'
  },
  {
    name: 'Saiki Kusuo',
    img: 'https://thicc.mywaifulist.moe/pending/waifus/hNZKFDaQdMWG5iXSRYz4usTjiKQ8rJKXcTNHRZkI.png',
    Iq: '900',
    origin: 'The Disastrous Life of Saiki K'
  },
  {
    name: 'Kokoro Akechi',
    img: 'https://cosplayfu-website.s3.amazonaws.com/_Photo/character/mini/11418.jpg',
    Iq: '1,300',
    origin: 'Tantei Opera Milky Holmes'
  },
  {
    name: 'Kei',
    img: 'https://s1.narvii.com/image/4bumhdpdhqr4ea2ev7nyde7w2nle44hu_00.jpg',
    Iq: '50,000',
    origin: 'Gantz'
  },
  {
    name: 'Aoi Todo',
    img: 'https://practicaltyping.com/wp-content/uploads/2022/01/todo-1.jpg',
    Iq: '530,000',
    origin: 'Jujutsu Kaisen'
  },
  {
    name: 'Washu Hakubi',
    img: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/04/Bleach-Washu-Feature.jpg',
    Iq: '1,000,000',
    origin: 'Tenchi Muyo'
  }
]
</script>

<style scoped>
.items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}
.itemCards {
  background: red;
  margin-bottom: 1rem;
  width: 30rem;
}
</style>
