new Vue({
    el: '#app',
    data() {
        return {
            logData: [{
                module: '试剂入库',
                type: '管理员操作',
                content: '上传试剂操作',
                name: '许巍',
                loginTime: '2017-10-12',
                ip: '123.2.1.2',
                browser: 'chrome'
            },{
                module: '试剂入库',
                type: '管理员操作',
                content: '上传试剂操作',
                name: '许巍',
                loginTime: '2017-10-12',
                ip: '123.2.1.2',
                browser: 'chrome'
            }],
            searchForm: {
                module: '',
                name: '',
                content: '',
                startTime: '',
                endTime: ''
            },
            shrink: false
        }
    },
    methods: {

    }
});