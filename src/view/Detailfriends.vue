<template>
  <div class="card text-center mt-4" v-for="f in item" :key="f.id">
  <div class="card-header">Detail item</div>
  <div class="card-body">
    <h5 class="card-title">{{ f.nama }}</h5>
    <p class="card-text">{{ f.gambar }}</p>
    <p class="card-text">{{ f.harga }}</p>
    <p class="card-text">{{ f.stok }}</p>


  </div>
  <div class="card-footer">
    <router-link class="btn btn-success" :to="{name:'Edititems', params:{id:
            f.id}}" 
            >Edit</router-link
             >
        <button @click.prevent="itemDelete(f.id)" class="btn btn-danger">Delete</button>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  setup() {

      let item = ref([]);
    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/items/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama);

        item.value = response.data.data;
      })
      .catch((error) =>{
        console.log(error.response.data)
      });
    });

    function itemDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/items/${id}`)
      .then(()=>{
          router.go(-1)
      }).catch((error) => {
        console.log(error);
      });
    }
    return {
      item,
      router, 
      itemDelete,
      route,
    };
  },
};
</script>

<style>

</style>