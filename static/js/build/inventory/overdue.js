'use strict';

var overdueData = [{
    number: 'SJ171220088',
    reagentNumber: 'SJ171220088',
    name: '对三氟甲氧基苯甲醛',
    cas: '135-83-12',
    receiver: '蔡芳',
    receiveWeight: '60g',
    predictUse: '100g',
    currentWeight: '100g',
    specification: '100g',
    warehouse: '第一仓',
    slotting: '01层22位',
    receiveDate: '2017/10/21',
    remark: '使用中',
    laboratory: '化学组'
}, {
    number: 'SJ171220088',
    reagentNumber: 'SJ171220088',
    name: '对三氟甲氧基苯甲醛',
    cas: '135-83-12',
    receiver: '蔡芳',
    receiveWeight: '60g',
    predictUse: '100g',
    currentWeight: '100g',
    specification: '100g',
    warehouse: '第一仓',
    slotting: '01层22位',
    receiveDate: '2017/10/21',
    remark: '使用中',
    laboratory: '化学组'
}];

new Vue({
    el: '#app',
    data: function data() {
        return {
            overdueData: overdueData,
            searchForm: {
                receiver: '',
                laboratory: '',
                warehouse: '',
                project: '',
                startTime: '',
                endTime: ''
            },
            shrink: false
        };
    }
});