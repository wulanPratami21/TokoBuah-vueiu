<template>
<div class="row">
  <div class="col-lg-4 mt-3" v-for="(item, index) in items" :key="index">
      <div class="card">
  <div class="card-header">{{item.nama}}</div>
  <div class="card-body">
    <h5 class="card-title">{{item.gambar}}</h5>
    <p class="card-text">{{item.harga}}</p>
    <p class="card-text">{{item.stok}}</p>
  </div>
  <div class="card-footer text-muted"> <router-link 
  class="btn btn-primary" 
  :to="{name:'Detailitems', params:{id:
            item.id}}" 
            >Detail</router-link
             >
</div>
</div>
</div>
</div>
</template>

<script>
export default {
props: ["items"],
};
</script>

<style>

</style>