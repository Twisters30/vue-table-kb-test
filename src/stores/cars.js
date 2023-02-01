import { ref } from "vue";
import { defineStore } from "pinia";
// import carsOne from "@/data/cars-1.json";

export const useCarsStore = defineStore("carsStore", () => {
  const totalPages = 5;
  const countPages = ref(0);
  const isLoader = ref(false);
  const cars = ref([]);
  const onLoadCars = () => {
    if (isLoader.value || countPages.value > totalPages) return;
    isLoader.value = true;
    setTimeout(async () => {
      const loadData = (await import(`@/data/cars-${++countPages.value}.json`))
        .default;
      loadData.forEach((element) => {
        cars.value.push(element);
      });
      isLoader.value = false;
    }, 300);
  };
  return { cars, isLoader, onLoadCars, countPages, totalPages };
});
