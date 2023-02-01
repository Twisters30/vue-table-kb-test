<template>
  <tr>
    <TableTh
      v-for="(value, name, index) in tableItem"
      :key="index"
      :content="value"
    />
  </tr>
</template>
<script>
import TableTh from "@/components/table/TableTh.vue";
export default {
  components: { TableTh },
  props: ["tableItem"],
};
</script>
