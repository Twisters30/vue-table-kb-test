<template>
  <div>
    <table class="table">
      <thead class="table__row--head">
        <tr>
          <th scope="col">НАЗВАНИЕ</th>
          <th scope="col">РАСХОД ТОПЛИВА МЛ/Г</th>
          <th scope="col">ЦИЛИНДРЫ</th>
          <th scope="col">РАБОЧИЙ ОБЬЁМ</th>
          <th scope="col">Л.C</th>
          <th scope="col">ВЕС</th>
          <th scope="col">УСКОРЕНИЕ М/С2</th>
          <th scope="col">ГОД ВЫПУСКА</th>
          <th scope="col">ПРОИЗВОДСТВО</th>
        </tr>
      </thead>
      <tbody>
        <TableItem
          v-for="(car, i) in carsStore.cars"
          :key="i"
          :tableItem="car"
        />
      </tbody>
    </table>
  </div>
</template>
<script>
import TableItem from "./TableItem.vue";
import { useCarsStore } from "@/stores/cars.js";

export default {
  components: { TableItem },
  created() {
    this.carsStore = useCarsStore();
    this.carsStore.onLoadCars();
    window.addEventListener("scroll", this.onScrollTable);
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScrollTable);
  },
  methods: {
    onScrollTable() {
      const isScrollEnd =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
      if (isScrollEnd) {
        setTimeout(() => {
          this.carsStore.onLoadCars();
          console.log("странница ", this.carsStore.countPages);
        }, 10);
      }
      if (this.carsStore.countPages >= this.carsStore.totalPages) {
        window.removeEventListener("scroll", this.onScrollTable);
      }
    },
  },
};
</script>
