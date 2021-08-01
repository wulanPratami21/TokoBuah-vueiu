<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit items</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama</label>
    <input type="string" class="form-control" id="inputEmail4" 
    v-model="item.nama" />
      <div class="alert alert-danger" v-if="validation.nama">
        {{ validation.nama[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Gambar</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="item.gambar"/>
    <div class="alert alert-danger" v-if="validation.gambar">
        {{ validation.gambar[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Harga</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="item.harga" />
    <div class="alert alert-danger" v-if="validation.harga">
        {{ validation.harga[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Stok</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="item.stok" />
    <div class="alert alert-danger" v-if="validation.stok">
        {{ validation.stok[0] }}
      </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Edit</button>
  </div>
</form>
  </div>
</div>
</template>
<script>
import { onMounted, reactive,  ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from 'axios'
export default {
  setup() {
    const item = reactive({
      nama: "",
      gambar: "",
      harga: "",
      stok: "",
      
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/items/${route.params.id}/edit`)
      .then(response => {
        console.log(response.data.data.nama)

        item.nama = response.data.data.nama;
        item.gambar = response.data.data.gambar;
        item.harga = response.data.data.harga;
        item.stok = response.data.data.stok;
        
        
      }).catch(error =>{
        console.log(error.response.data)
      });
      axios
      .catch(error => {
        console.log(error);
      });
    });

    function update(){
      let nama = item.nama;
      let gambar = item.gambar;
      let harga = item.harga;
      let stok = item.stok;
      

      axios.put(`http://127.0.0.1:8000/api/items/${route.params.id}`, {
        nama: nama,
        gambar: gambar,
        harga: harga,
        stok: stok,
      
      })
      .then(() => {
        router.push({
          name:"Home",
        });
      })
      .catch(error => {
        validation.value = error.response.data;
        console.log(error)
      });
    }
    return {
      item,
      validation,
      router, 
      update,
      route,
    };
  },
};
</script>