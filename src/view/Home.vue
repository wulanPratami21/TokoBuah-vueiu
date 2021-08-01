<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/createitems"
      >Add items</router-link>

    <Carditems :items="items"/>





    <table class="table">
  <thead>
    <tr>
      <th scope="col">nama</th>
      <th scope="col">Gambar</th>
      <th scope="col">Harga</th>
      <th scope="col">Stok</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in items" :key="index">
      <td>{{ item.nama }}</td>
      <td>{{ item.gambar }}</td>
      <td>{{ item.harga }}</td>
      <td>{{ item.stok }}</td>
      <td>
       <router-link class="btn btn-success" :to="{name:'Edititems', params:{id:
            item.id}}" 
            >Edit</router-link
             >
        <button @click.prevent="itemDelete(item.id)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Carditems from "@/components/Carditems.vue";
import { ref, onMounted } from 'vue';

export default {
  name: "Home",
  components: {
    Slider,
    Carditems,
  },
  setup(){
    let items = ref([])

    onMounted(() => {
      axios.get(`http://127.0.0.1:8000/api/items`)
      .then(response => {
        items.value = response.data.data;
      })
      .catch((error) => {
        console.log(error)
      });
    });

    function itemDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/items/${id}`)
      .then(()=>{
        let z = this.items.map((items) => items.id).indexOf(id);
        this.items.splice(z, 1);
      }).catch((error) => {
        console.log(error);
      });
    }

      return {
      items,
      itemDelete
    };
  },
};
</script>