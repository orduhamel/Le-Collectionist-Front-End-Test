<script setup>
  defineProps({
    buttonText: {
      type: String,
      required: true
    },
    buttonUrl: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="ml-10 space-x-4">
    <router-link :to="buttonUrl" class="inline-block py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-gray-50">
      {{ buttonText }}
    </router-link>
  </div>
</template>
