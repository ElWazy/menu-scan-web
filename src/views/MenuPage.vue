<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.id">
        <img :src="item.image" width="32" height="32" />
        {{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Estado reactivo para almacenar los datos
const data = ref([])

// eslint-disable-next-line no-unused-vars
const fetchData = async () => {
  try {
    const response = await fetch('http://127.0.0.1:3000/users')
    const jsonData = await response.json()
    data.value = jsonData
  } catch (error) {
    console.error('Error al cargar los datos:', error)
  }
}

onMounted(() => {
  fetchData()
})
</script>
