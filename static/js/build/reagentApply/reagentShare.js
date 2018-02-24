'use strict';

var allShareData = [{
    number: 'SJ171220088',
    structure: '../../images/structure.png',
    name: '对三氟甲氧基苯甲醛',
    cas: '135-83-12',
    specification: '100g',
    purity: '79%',
    currentWeight: '10g',
    validityPeriod: '2017/10/21',
    sharer: '蔡芳',
    timeShare: '2017/10/21'
}, {
    number: 'SJ171220088',
    structure: '../../images/structure.png',
    name: '对三氟甲氧基苯甲醛',
    cas: '135-83-12',
    specification: '100g',
    purity: '79%',
    currentWeight: '10g',
    validityPeriod: '2017/10/21',
    sharer: '蔡芳',
    timeShare: '2017/10/21'
}];
var myShareData = [{
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
    status: '已共享'
}, {
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
    status: '待确认'
}];
var auditData = [{
    number: 'SJ171220088',
    structure: '../../images/structure.png',
    name: '对三氟甲氧基苯甲醛',
    cas: '135-83-12',
    laboratory: '上海第一实验室',
    project: '01项目',
    borrower: '王婷',
    remark: '都打饭打翻',
    popoverVisible: false
}, {
    number: 'SJ171220088',
    structure: '../../images/structure.png',
    name: '对三氟甲氧基苯甲醛',
    cas: '135-83-12',
    laboratory: '上海第一实验室',
    project: '01项目',
    borrower: '王婷',
    remark: '',
    popoverVisible: false
}];
new Vue({
    el: '#app',
    data: function data() {
        return {
            activeName: 'first',
            shrink: false,
            allShareData: allShareData,
            pagination: {
                currentPage: 1,
                pageSizes: [15, 30, 60],
                pageSize: 15,
                pageTotal: 20
            },
            searchForm: {
                cas: '',
                name: '',
                status: '',
                startTime: '',
                endTime: ''
            },
            borrowFormVisible: false,
            borrowForm: {
                projectName: '',
                remark: ''
            },

            myShareData: myShareData,
            rejectVisible: false,
            agreeVisible: false,

            auditData: auditData,
            remarkMsg: ''
        };
    },

    methods: {
        tabChange: function tabChange(tab, event) {
            console.log(tab, event);
        },
        submitRemarkMsg: function submitRemarkMsg(row) {
            row.remark = this.remarkMsg;
            row.popoverVisible = false;
        },
        popoverRemark: function popoverRemark(remark) {
            this.remarkMsg = remark;
        },
        watchRemark: function watchRemark(value, old) {
            console.log(value);
        }
    },
    watch: {
        'auditData.remark': 'watchRemark'
    }
});