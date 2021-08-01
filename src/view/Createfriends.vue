<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add item</h5>
     <form class="row g-3" @submit.prevent="store">
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
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form>
  </div>
</div>
</template>
<script>
import { reactive,ref,onMounted } from "vue";
import { useRouter } from "vue-router"
import axios from "axios"
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



    function store(){
     let nama = item.nama;
      let gambar = item.gambar;
      let harga = item.harga;
      let stok = item.stok;
      

      axios
      .post("http://127.0.0.1:8000/api/items/", {
        nama: nama,
        gambar: gambar,
        harga: harga,
        stok: stok,
        
      })
      .then(() => {
        router.push({
          name:"Home"
        });
      })
      .catch(error => {
        validation.value = error.response.data
      });
    }
    return {
      item,
      validation,
      router, 
      store,
    };
  },
};
</script>