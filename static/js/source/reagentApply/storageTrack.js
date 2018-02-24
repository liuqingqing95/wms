let storageData = [{
    name: '对三氟甲氧基苯甲醛',
    remark: '泰坦科技有限公司',
    cas: '135-83-12',
    purity: '79%',
    specification: '100g',
    totalInventory: 80,
    predictReceive: 0,
    dosage: 0,
    project: [{
        value: '1',
        label: '科迪亚资产未来研发'
    },{
        value: '2',
        label: '上海鹰谷'
    },{
        value: '3',
        label: '上海鹰谷信息科技'
    }],
    selectedProject: '1',
    status: false,
    timeTemaining: '10:11'
},{
    name: '对三氟甲氧基苯甲醛',
    remark: '科迪亚资产未来研发',
    cas: '135-83-12',
    purity: '79%',
    specification: '100g',
    totalInventory: 80,
    predictReceive: 3,
    dosage: 10,
    project: [{
        value: '1',
        label: '科迪亚资产未来研发'
    },{
        value: '2',
        label: '上海鹰谷'
    },{
        value: '3',
        label: '上海鹰谷信息科技'
    }],
    selectedProject: '2',
    status: true,
    timeTemaining: '20:22'
}]
new Vue({
    el: '#app',
    data() {
        return {
            storageData: storageData,
        }
    }
});