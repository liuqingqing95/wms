let reagentData = [{
    img: '../../images/structure.png',
    CHName: 'N-乙氧羰基-4-托品酮',
    ENName: 'Atropine sulfate monohydrate',
    CAS: '135-02-4',
    molecularFormula: 'C7H13NO2',
    ICS: '50-8-75799',
    molecularWeight: '143.1840',
    children: [{
        specification: '100g',
        purity: '80%',
        netWeight: '8g',
        number: '10瓶',
        provider: '泰坦科技'
    },{
        specification: '100g',
        purity: '80%',
        netWeight: '8g',
        number: '10瓶',
        provider: '泰坦科技'
    },{
        specification: '100g',
        purity: '80%',
        netWeight: '8g',
        number: '10瓶',
        provider: '泰坦科技'
    },{
        specification: '100g',
        purity: '80%',
        netWeight: '8g',
        number: '10瓶',
        provider: '泰坦科技'
    }]
},{
    img: '../../images/structure.png',
    CHName: 'N-乙氧羰基-4-托品酮',
    ENName: 'Atropine sulfate monohydrate',
    CAS: '135-02-4',
    molecularFormula: 'C7H13NO2',
    ICS: '50-8-75799',
    molecularWeight: '143.1840'
},{
    img: '../../images/structure.png',
    CHName: 'N-乙氧羰基-4-托品酮',
    ENName: 'Atropine sulfate monohydrate',
    CAS: '135-02-4',
    molecularFormula: 'C7H13NO2',
    ICS: '50-8-75799',
    molecularWeight: '143.1840',
    children: [{
        specification: '100g',
        purity: '80%',
        netWeight: '8g',
        number: '10瓶',
        provider: '泰坦科技'
    }]
}]

new Vue({
    el: '#app',
    data() {
        return {
            reagentData: reagentData,
            shrink: false,
            pagination: {
                currentPage: 1,
                pageSizes: [15,30,60],
                pageSize: 15,
                pageTotal: 20
            },
            shoppingCartCount: 0,
            shoppingCart: []
        }

    },
    methods: {
        joinCart(row) {
            console.log(row)
            this.shoppingCart.push(row);
            this.shoppingCartCount =  this.shoppingCart.length;
        }
    }
})