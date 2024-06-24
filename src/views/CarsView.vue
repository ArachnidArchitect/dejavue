<template lang="">
    <div class='grid'>
        <card-comp v-for="car in displayCars()" :key="car">
            <template #cmake>{{car.make}}</template>
            <template #cmodel>{{car.model}}</template>
            <template #cyear>{{car.year}}</template>
            <template #ccolor>{{car.color}}</template>
            <template #cprice>{{car.price}}</template>
        </card-comp>
    </div>
</template>
<script>
import CardComp from '../components/CardComp.vue'
export default {
    components:{
        CardComp
    },
    methods:{
        displayCars(){
            return this.$store.state.cars
        }
    },
    computed:{
        getData(){
            return this.$store.dispatch('getData')
        }
    }, mounted(){
        this.getData
    }
}
</script>
<style>
    .grid{
        display: grid;
        grid-template-columns: repeat(auto-fit, minMax(500px, 1fr));
    }
    .grid > * {
        border: 1px solid black;
    }
</style>