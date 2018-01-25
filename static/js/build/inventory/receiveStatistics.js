'use strict';

var echartOption = {
    color: ['#FCB200', '#138fff', '#1CBE4E'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#ddd',
                width: 1,
                type: 'dashed'
            }
        }
    },
    legend: {
        right: 20,
        data: ['申请数量', '退库数量', '报废数量']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {},
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#ccc',
                width: 0
            }
        }
    },
    series: [{
        name: '申请数量',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
    }, {
        name: '退库数量',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        name: '报废数量',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410]
    }]
};
var tableData = [{
    xAxis: 33,
    amount: 42
}, {
    xAxis: 21,
    amount: 56
}];
new Vue({
    el: '#app',
    data: function data() {
        return {
            statisticsForm: {
                user: '',
                laboratory: '',
                warehouse: '',
                project: '',
                startTime: '',
                endTime: ''
            },
            tabType: 0,
            form: {
                report: '1',
                place: '1',
                xAxis: '1',
                yAxis: '1',
                type: '1'
            },
            tableData: tableData
        };
    },
    created: function created() {
        this.echartsData();
    },

    methods: {

        submitStatistics: function submitStatistics() {
            console.log(this.statisticsForm);
        },
        resetStatistics: function resetStatistics(formName) {
            this.$refs[formName].resetFields();
        },
        echartsData: function echartsData() {
            setTimeout(function () {
                var myChart = echarts.init(document.getElementById('myChart1'));
                myChart.setOption(echartOption);
            }, 20);
        }
    }
});