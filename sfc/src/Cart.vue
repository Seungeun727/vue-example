<template>
    <div id="app">
        <cart-header></cart-header>
        <div v-show="showAll">
            <h2>전체 목록</h2>
            <ul>
                <li v-for="(item, index) in items"
                    v-bind:key="index">{{ item.name }}</li>
            </ul>
        </div>
        <cart-footer></cart-footer>
    </div>
</template>

<script>
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
export default {
    data: () => {
        return {
            items: [
                { name: "무", buy: false },
                { name: "배추", buy: false },
                { name: "쪽파", buy: true },
                { name: "고춧가루", buy: true } 
            ],
            showAll: true,
            showOption: true
        }
    },
    components: {
        "cart-header": CartHeader,
        "cart-footer": CartFooter
    }
}
</script>

<style>
li {
    list-style: none;
    height: 30px;
}
li button {
    float: right;
}
</style>