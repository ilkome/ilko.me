<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
</script>

<template>
  <h1>{{ t('welcome') }}</h1>
  <button @click="setLocale('en')">Set en Locale</button>
  <button @click="setLocale('ru')">Set ru Locale</button>
</template>
