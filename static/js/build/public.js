"use strict";

var menuList = [{
    "path": "/controller",
    "iconCls": "iconfont icon-home",
    "component": "Home",
    "name": "控制台",
    "leaf": false,
    "children": []
}, {
    "path": "/reagentPutIn",
    "iconCls": "iconfont icon-reagent-putIn",
    "component": "Home",
    "name": "试剂入库",
    "leaf": true,
    "children": [{
        "path": "/reagentPutIn",
        "component": "reagentPutIn",
        "name": "试剂入库"
    }]
}, {
    "path": "/reagentOutput",
    "iconCls": "iconfont icon-reagent-output",
    "component": "Home",
    "name": "试剂出库",
    "leaf": true,
    "children": [{
        "path": "/distributionManage",
        "component": "distributionManage",
        "name": "配货管理"
    }, {
        "path": "/stockManage",
        "component": "stockSManage",
        "name": "出库管理"
    }, {
        "path": "/stockSearch",
        "component": "stockSearch",
        "name": "出库查询"
    }, {
        "path": "/deliveryManage",
        "component": "deliveryManage",
        "name": "配送管理"
    }, {
        "path": "/signIn",
        "component": "signIn",
        "name": "自由签收"
    }]
}, {
    "path": "/returnManage",
    "iconCls": "iconfont icon-return-manage",
    "component": "Home",
    "name": "归还管理",
    "leaf": true,
    "children": [{
        "path": "/returnReceiving",
        "component": "returnReceiving",
        "name": "归还受理"
    }, {
        "path": "/returnPutaway",
        "component": "returnPutaway",
        "name": "归还上架"
    }, {
        "path": "/returnSearch",
        "component": "reagentSearch",
        "name": "归还查询"
    }]
}, {
    "path": "/inventoryManage",
    "iconCls": "iconfont icon-inventory-manage",
    "component": "Home",
    "name": "库存管理",
    "leaf": true,
    "children": [{
        "path": "/inventoryManage",
        "component": "inventoryManage",
        "name": "库存管理"
    }, {
        "path": "/scrapManage",
        "component": "returnPutaway",
        "name": "报废管理"
    }, {
        "path": "/reagentSearch",
        "component": "reagentSearch",
        "name": "试剂查询"
    }, {
        "path": "/validReagent",
        "component": "validReagent",
        "name": "近效期试剂"
    }, {
        "path": "/inventoryWarning",
        "component": "inventoryWarning",
        "name": "备库警戒提醒"
    }, {
        "path": "/visualization",
        "component": "visualization",
        "name": "库存可视化"
    }, {
        "path": "/initialize",
        "component": "initialize",
        "name": "库存初始化"
    }]
}, {
    "path": "/dataManage",
    "iconCls": "iconfont icon-data-manage",
    "component": "Home",
    "name": "基础数据管理",
    "leaf": true,
    "children": [{
        "path": "/reagentInfo",
        "component": "reagentInfo",
        "name": "试剂基础信息"
    }, {
        "path": "/storageManage",
        "component": "storageManage",
        "name": "仓库管理"
    }, {
        "path": "/laboratoryManage",
        "component": "laboratoryManage",
        "name": "实验室管理"
    }, {
        "path": "/dataManage",
        "component": "dataManage",
        "name": "常用数据管理"
    }]
}, {
    "path": "/systemManage",
    "iconCls": "iconfont icon-setting",
    "component": "Home",
    "name": "系统管理",
    "leaf": true,
    "children": [{
        "path": "/userManage",
        "component": "userManage",
        "name": "用户管理"
    }, {
        "path": "/roleManage",
        "component": "roleManage",
        "name": "角色管理"
    }, {
        "path": "/loginLog",
        "component": "loginLog",
        "name": "登录日志"
    }, {
        "path": "/operateLog",
        "component": "operateLog",
        "name": "操作日志"
    }, {
        "path": "/parameterSetting",
        "component": "parameterSetting",
        "name": "系统参数设置"
    }, {
        "path": "/liquidWasteDeal",
        "component": "liquidWasteDeal",
        "name": "废液处理选项"
    }]
}, {
    "path": "/inventoryStatement",
    "iconCls": "iconfont icon-report",
    "component": "Home",
    "name": "库存报表",
    "leaf": true,
    "children": [{
        "path": "/receiveStatistics",
        "component": "receiveStatistics",
        "name": "申领统计"
    }, {
        "path": "/reagentStatistics",
        "component": "reagentStatistics",
        "name": "试剂统计"
    }, {
        "path": "/overdueReturn",
        "component": "overdueReturn",
        "name": "超期归还报表"
    }]
}];

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
            user: {
                type: '管理员',
                name: '刘晴晴'
            },
            collapsed: false,
            menuList: [],

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
        this.menuList = menuList;
        this.echartsData();
    },

    methods: {
        collapse: function collapse() {
            this.collapsed = !this.collapsed;
        },
        handleOpen: function handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose: function handleClose(key, keyPath) {
            console.log(key, keyPath);
        },

        handleSelect: function handleSelect(a, b) {},
        showMenu: function showMenu(i, status) {
            this.$refs.menuCollapsed.getElementsByClassName('iconfont-' + i)[0].style.display = status ? 'block' : 'none';
        },
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