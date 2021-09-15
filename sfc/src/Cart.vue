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
        <shop-list v-bind:shopping-items="items"></shop-list>
        <cart-input v-on:add-item="addItem"></cart-input>
        <input type="checkbox" v-model="showOption">산 물건 보기
        <bought-list v-bind:bought-items="items"
            v-show="showOption"
            v-on:remove-item="removeItem"></bought-list>
        <cart-footer></cart-footer>
    </div>
</template>

<script>
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import ShopList from './components/ShopList';
import BoughtList from './components/BoughtList';
import CartInput from './components/CartInput';
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
        "cart-footer": CartFooter,
        "shop-list": ShopList,
        "bought-list": BoughtList,
        "cart-input": CartInput
    },
    methods: {
        addItem: function(item) {
            console.log("추가할 아이템:", item);
            //  배열에 아이템 추가
            this.items.push({
                name: item,
                buy: false
            })
        },
        removeItem: function(item) {
            var index = this.items.indexOf(item);
            if (index > -1) {   //  인덱스
                //  배열에서 요소 삭제
                this.items.splice(index, 1);
            }
        }
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
