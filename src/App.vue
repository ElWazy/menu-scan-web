<script>
import NavMenu from '@/components/NavMenu.vue'
export default {
  components: { NavMenu }
}
</script>

<template>
  <NavMenu />
  <div class="">
    <router-view></router-view>
  </div>
</template>
