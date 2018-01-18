const echartOption = {
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
        data:['申请数量','退库数量','报废数量']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
    },
    xAxis: {
        type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日'],
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
    series: [
        {
            name:'申请数量',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'退库数量',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'报废数量',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        }
    ]
};

/*var zrColor = zrender.color;
var colorList = [
    '#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
    '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0'
];
var itemStyle = {
    normal: {
        color: function(params) {
            if (params.dataIndex < 0) {
                // for legend
                return zrColor.lift(
                    colorList[colorList.length - 1], params.seriesIndex * 0.1
                );
            }
            else {
                // for bar
                return zrColor.lift(
                    colorList[params.dataIndex], params.seriesIndex * 0.1
                );
            }
        }
    }
};*/
const option = {
    toolbox: {
        show: true,
        orient: 'vertical',
        y: 'center'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'百度',
            type:'bar',
            data:[620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name:'谷歌',
            type:'bar',
            data:[120, 132, 101, 134, 290, 230, 220]
        }
    ]
};
new Vue({
    el: '#app',
    data() {
        return {

        }
    },
    created() {
        this.echartsData()
    },
    methods: {
        echartsData() {
            setTimeout(function(){
                var myChart = echarts.init(document.getElementById('myChart1'));
                myChart.setOption(echartOption);

                var myChart2 = echarts.init(document.getElementById('myChart2'));
                myChart2.setOption(option);
            }, 20)
        }


    }
})
