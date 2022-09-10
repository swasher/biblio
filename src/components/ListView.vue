<script>
export default {
  name: 'ListView',
  props: {
    book: Object
  }
}
</script>

<template>
  <li>{{ book.name }} - {{ book.id }}</li>
</template>