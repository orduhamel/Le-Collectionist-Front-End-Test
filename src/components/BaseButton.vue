<script setup>
  defineProps({
    buttonText: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <p class="text-center text-base font-medium text-gray-500">
    <a href="#" class="text-indigo-600 hover:text-indigo-500">
      {{ buttonText }}
    </a>
  </p>
</template>
