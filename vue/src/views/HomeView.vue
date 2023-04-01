<template>
  <div class="home">
    <p v-for="item in items">{{ item.name }}</p>
    <!-- <Card v-for="item in items" :key="item.name" :title="item.name"></Card> -->
  </div>
</template>

<script>
import Card from '../components/itemCard.vue'

export default {
  name: 'Home',
  components: {
    Card
  },
  data() {
    return {
      selected: '',
      items: [
        {
          name: 'Yoshiko Hanabatake',
          img: 'https://pm1.narvii.com/6557/15f6a8bf04d4c9ec8e62d596dbe23da2be91fe8e_hq.jpg',
          IQ: '10',
          Origin: 'Aho-Girl'
        },
        {
          name: 'Aqua',
          img: 'https://thicc.mywaifulist.moe/waifus/554/5c01014e09976442d991d0913bdb3c7f28e4f17be08fcb39e4e8dc67cc043fe5_thumb.png',
          IQ: '40',
          Origin: 'Konosuba'
        },
        {
          name: 'Erwin',
          img: 'https://pbs.twimg.com/media/E62SrdEXsAUXJp5.jpg:large',
          IQ: '150',
          Origin: 'Attack on Titan'
        },
        {
          name: 'Narsus',
          img: 'https://pm1.narvii.com/6314/24e229f9894c5c4bb34b9edf18ee16adad092c9c_00.jpg',
          IQ: '154',
          Origin: 'The Heroic Legend of Arslan'
        },
        {
          name: 'Satou',
          img: 'https://pm1.narvii.com/6082/06c96220718657336e38f0b5141d69e0ec98d91e_00.jpg',
          IQ: '166',
          Origin: 'Death March to the Parallet World Rhapsody'
        },
        {
          name: 'Shiroe',
          img: 'https://i.pinimg.com/originals/1d/80/18/1d8018a6ce75d8728db2a1c8b4eef5e4.jpg',
          IQ: '170',
          Origin: 'Log Horizon'
        },
        {
          name: 'Keima Katsuragi',
          img: 'https://pm1.narvii.com/6071/e015973be1d4b164700dab7a757d32e498f87505_00.jpg',
          IQ: '177',
          Origin: 'The World God Only Knows'
        },
        {
          name: 'Jabami Yumeko',
          img: 'https://pm1.narvii.com/7182/bd57a61c4b94d7a868cd0eaeaac44b287a6a1ef7r1-855-672v2_00.jpg',
          IQ: '180',
          Origin: 'Kakegurui - Compulsive Gambler'
        },
        {
          name: 'Tokuchi Toua',
          img: 'https://i.pinimg.com/474x/14/a0/c3/14a0c3c9d3b44f3b6cb4b7b33be97cc2--saitama-sports.jpg',
          IQ: '184',
          Origin: 'One Outs'
        },
        {
          name: 'Renner',
          img: 'https://randomc.net/image/Overlord/Overlord%20IV%20-%2013%20-%20Large%2034.jpg',
          IQ: '188',
          Origin: 'Overlord'
        },
        {
          name: 'Makise Kurisu',
          img: 'https://w0.peakpx.com/wallpaper/626/637/HD-wallpaper-steins-gate-kurisu-makise-thumbnail.jpg',
          IQ: '193',
          Origin: 'Steins;Gate'
        },
        {
          name: 'Ash Lynx',
          img: 'https://cdnb.artstation.com/p/assets/images/images/054/737/177/large/edo-sama-ashlynx.jpg?1665246633',
          IQ: '200',
          Origin: 'Banana Fish'
        },
        {
          name: 'Inaho Kaizuka',
          img: 'https://cdn.myanimelist.net/images/characters/10/259923.jpg',
          IQ: '205',
          Origin: 'Aldnoah. Zero'
        },
        {
          name: 'Senku Ishigami',
          img: 'https://w0.peakpx.com/wallpaper/966/5/HD-wallpaper-senku-dr-stone-dr-stone-ishigami-drstone-edit-mangaart-edits-fanart-manga-anime.jpg',
          IQ: '350',
          Origin: 'Dr. Stone'
        },
        {
          name: 'Koro Sensei',
          img: 'https://i.pinimg.com/originals/9d/ee/96/9dee9649497189b4171101ecdc700928.jpg',
          IQ: '366',
          Origin: 'Assassination Classroom'
        },
        {
          name: 'Meruem',
          img: 'https://cdn.myanimelist.net/images/characters/6/243861.jpg',
          IQ: '400',
          Origin: 'Hunter x Hunter'
        },
        {
          name: 'Saiki Kusuo',
          img: 'https://thicc.mywaifulist.moe/pending/waifus/hNZKFDaQdMWG5iXSRYz4usTjiKQ8rJKXcTNHRZkI.png',
          IQ: '900',
          Origin: 'The Disastrous Life of Saiki K'
        },
        {
          name: 'Kokoro Akechi',
          img: 'https://cosplayfu-website.s3.amazonaws.com/_Photo/character/mini/11418.jpg',
          IQ: '1,300',
          Origin: 'Tantei Opera Milky Holmes'
        },
        {
          name: 'Kei',
          img: 'https://s1.narvii.com/image/4bumhdpdhqr4ea2ev7nyde7w2nle44hu_00.jpg',
          IQ: '50,000',
          Origin: 'Gantz'
        },
        {
          name: 'Aoi Todo',
          img: 'https://practicaltyping.com/wp-content/uploads/2022/01/todo-1.jpg',
          IQ: '530,000',
          Origin: 'Jujutsu Kaisen'
        },
        {
          name: 'Washu Hakubi',
          img: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/04/Bleach-Washu-Feature.jpg',
          IQ: '1,000,000',
          Origin: 'Tenchi Muyo'
        }
      ]
    }
  }
}
</script>
<!-- <script setup>
import { ref } from 'vue'
import TodoItem from '../components/TodoItem.vue'

const groceryList = ref([
  { id: 0, text: 'Vegetables' },
  { id: 1, text: 'Cheese' },
  { id: 2, text: 'Whatever else humans are supposed to eat' }
])
</script>

<template>
  <ol>
    <TodoItem v-for="item in groceryList" :todo="item" :key="item.id"></TodoItem>
  </ol>
</template> -->
