
let allData = [{
    number: 'SJ1712200088',
    CHName: '一氧化碳',
    cas: '133-37-9',
    purity: '100',
    receive: '100g',
    project: '002项目',
    time: '2017/10/22',
    status: '待审批',
    position: '第一大仓',
    share: false,
    detail: '-',
    operate: [{
        type: '1',
        name: '归还'
    },{
        type: '2',
        name: '存放'
    },{
        type: '3',
        name: '报废'
    }]
},{
    number: 'SJ1712200088',
    CHName: '一氧化碳',
    cas: '133-37-9',
    purity: '100',
    receive: '100g',
    project: '002项目',
    time: '2017/10/22',
    status: '已退库',
    position: '第一大仓',
    share: '-',
    detail: '-',
    operate: [{
        type: '1',
        name: '归还'
    },{
        type: '2',
        name: '存放'
    },{
        type: '3',
        name: '报废'
    }]
},{
    number: 'SJ1712200088',
    CHName: '一氧化碳',
    cas: '133-37-9',
    purity: '100',
    receive: '100g',
    project: '002项目',
    time: '2017/10/22',
    status: '已签收',
    position: '第一大仓',
    share: true,
    detail: '查看详情',
    operate: []
}];
let approveData = [{
    name: '李萌',
    time: '2017/12/22',
    status: '待审批',
    opinion: '要求不合理，拒绝请求'
},{
    name: '方丽',
    time: '2017/12/22',
    status: '待审批',
    opinion: '同意请求'
}]
let process = [{
    time: '2017-12-21 20:22',
    opinion: '吴伟拒绝了试剂申领请求',
},{
    time: '2017-12-11 20:22',
    opinion: '方丽提交了试剂申领信息',
}]
new Vue({
    el: '#app',
    data() {
        return {
            activeName: '0',
            searchForm: {
                number: '',
                startTime: '',
                endTime: ''
            },
            pagination: {
                currentPage: 1,
                pageSizes: [15,30,60],
                pageSize: 15,
                pageTotal: 20
            },
            allData: allData,
            requestFormVisible: false,
            storeFormVisible: false,
            scrapFormVisible: false,
            requestForm: {
                request: ''
            },
            requestRules: {
                request: [{ required: true, message: '请填写归还申请', trigger: 'submit' }]
            },
            storeForm: {
                request: ''
            },
            storeRules: {
                request: [{ required: true, message: '请填写存放位置', trigger: 'submit' }]
            },
            scrapForm: {
                request: ''
            },
            scrapRules: {
                request: [{ required: true, message: '请填写报废原因', trigger: 'submit' }]
            },
            approveFormVisible: false,
            approveData: approveData,
            process: process
        }
    },
    mounted() {

    },
    methods: {
        tabChange(tab, event) {

        },
        submitRequestForm(form) {
            this.$refs[form].validate(function(valid) {
                if (valid) {
                    console.log('success')
                } else {
                    console.log('fail')
                }
            });
        }
    }

})