<template>
  <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params:{ id:10 } })">
    <!-- Titulo -->
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">27</span>
        <span class="mx-1 fs-5">Febrero</span>
        <span class="mx-2 fw-light">2023, lunes</span>
    </div>
    <div class="entry-description">
        Ut quis laborum in ea labore est non quis Lorem eu eu duis commodo ut. Eu cupidatat mollit cillum culpa culpa do sunt nisi qui. Fugiat duis officia mollit voluptate do nisi nisi.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
        &:hover{
            background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;

        }
.entry-description{
    font-size: 12px;
}
}


</style>