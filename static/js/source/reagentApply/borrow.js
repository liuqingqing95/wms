let allShareData = [{
    number: 'SJ171220088',
    structure: '../../images/structure.png',
    name: '对三氟甲氧基苯甲醛',
    cas: '135-83-12',
    specification: '100g',
    purity: '79%',
    currentWeight: '10g',
    validityPeriod: '2017/10/21',
    sharer: '蔡芳',
    timeShare: '2017/10/21',
    shareStatus: '待确认'
},{
    number: 'SJ171220088',
    structure: '../../images/structure.png',
    name: '对三氟甲氧基苯甲醛',
    cas: '135-83-12',
    specification: '100g',
    purity: '79%',
    currentWeight: '10g',
    receive: '8g',
    validityPeriod: '2017/10/21',
    sharer: '蔡芳',
    timeShare: '2017/10/21',
    shareStatus: '已共享'
}]

new Vue({
    el: '#app',
    data() {
        return {
            allShareData: allShareData,
            pagination: {
                currentPage: 1,
                pageSizes: [15,30,60],
                pageSize: 15,
                pageTotal: 20
            },
            searchForm: {
                cas: '',
                number: '',
                name: '',
                status: ''
            }
        }
    },
    methods: {
    }
})