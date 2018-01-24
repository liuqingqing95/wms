const reagentData = [{
    number: 'SJ1712200088',
    name: '一氧化碳',
    cas: '133-37-9',
    ics: 'MFCD2837364',
    netWeight: '100g',
    currentWeight: '100g',
    purity: 100,
    specification: '100g',
    warehouse: '第一大仓',
    date: '2017/10/05',
    statue: '已入库'
},{
    number: 'SJ1712200088',
    name: '一氧化碳',
    cas: '133-37-9',
    ics: 'MFCD2837364',
    netWeight: '100g',
    currentWeight: '100g',
    purity: 100,
    specification: '100g',
    warehouse: '第一大仓',
    date: '2017/10/05',
    statue: '已入库'
},{
    number: 'SJ1712200088',
    name: '一氧化碳',
    cas: '133-37-9',
    ics: 'MFCD2837364',
    netWeight: '100g',
    currentWeight: '100g',
    purity: 100,
    specification: '100g',
    warehouse: '第一大仓',
    date: '2017/10/05',
    statue: '已入库'
}]
new Vue({
    el: '#app',
    data() {
        return {
            reagentData: reagentData,
            pagination: {
                currentPage: 1,
                pageSizes: [15,30,60],
                pageSize: 15,
                pageTotal: 20
            },
            searchForm: {

            }
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
})
