'use strict';

var borrowData = [{
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
}, {
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
}];

new Vue({
    el: '#app',
    data: function data() {
        return {
            borrowData: borrowData,
            pagination: {
                currentPage: 1,
                pageSizes: [15, 30, 60],
                pageSize: 15,
                pageTotal: 20
            },
            searchForm: {
                cas: '',
                number: '',
                name: '',
                status: ''
            },
            cancelBorrowVisible: false,
            cancelBorrowForm: {
                request: ''
            },
            cancelBorrowRules: {
                request: [{ required: true, message: '请填写取消借用原因', trigger: 'submit' }]
            },
            returnVisible: false,
            returnForm: {
                number: null,
                remark: ''
            },
            returnRules: {
                number: [{ pattern: /^\+?[1-9][0-9]*$/, message: '请输入正整数', trigger: 'blur'
                    /*{required: true, message: '请输入数量', trigger: 'blur'}*/
                }]
            }

        };
    },

    methods: {
        submitRequestForm: function submitRequestForm(form) {
            this.$refs[form].validate(function (valid) {
                if (valid) {
                    console.log('success');
                } else {
                    console.log('fail');
                }
            });
        }
    }
});