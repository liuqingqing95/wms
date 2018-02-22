'use strict';

var warehouseData = [{
    warehouse: '第一大仓',
    creator: '袁琼',
    creationTime: '2017/10/24',
    explain: '这是说明这是说明'
}, {
    warehouse: '第一大仓',
    creator: '袁琼',
    creationTime: '2017/10/24',
    explain: '这是说明这是说明'
}, {
    warehouse: '第一大仓',
    creator: '袁琼',
    creationTime: '2017/10/24',
    explain: '这是说明这是说明'
}];
var id = 1000;
var userData = [{
    key: '1',
    label: '总经办',
    tree: [{
        id: '1',
        label: '总经办',
        children: [{
            id: '1-1',
            label: '李先念',
            email: 'lixiannian@integle'
        }, {
            id: '1-2',
            label: '张三丰',
            email: 'zhangsanfeng@intgle'
        }, {
            id: '1-9',
            label: '王五',
            email: 'wangwu@integle.co'
        }]
    }]
    /*,{
        key: '2',
        label: '人事行政',
        tree: [{
            id: '2',
            label: '人事行政',
            children: [{
                id: '2-1',
                label: '张老吉',
                email: 'zhanglaoji@integ'
            }, {
                id: '2-2',
                label: '张莉',
                email: 'zhangli@integle.c'
            }]
        }]
    }, {
        key: '3',
        label: '财务部',
        tree: [ {
            id: '3',
            label: '财务部',
            children: [{
                id: '3-1',
                label: '张岳伦',
                email: 'zhangyuelun@inte'
            }]
        }]
    }, {
        key: '4',
        label: 'InDraw项目组',
        tree: [{
            id: '4',
            label: 'InDraw项目组',
            children: []
        }]
    }*/ }];
new Vue({
    el: '#app',
    data: function data() {
        /*const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
                data.push({
                    key: i,
                    label: `备选项 ${ i }`,
                    disabled: i % 4 === 0
                });
            }
            return data;
        };*/
        return {
            warehouseData: warehouseData,
            pagination: {
                currentPage: 1,
                pageSizes: [15, 30, 60],
                pageSize: 15,
                pageTotal: 20
            },
            activeName: 'first',
            configureUsersVisible: false,

            userData: userData,
            selectedList: [4],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        };
    },

    methods: {
        handleSizeChange: function handleSizeChange(val) {
            console.log('\u6BCF\u9875 ' + val + ' \u6761');
        },
        handleCurrentChange: function handleCurrentChange(val) {
            console.log('\u5F53\u524D\u9875: ' + val);
        },
        resetForm: function resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        submitPutInForm: function submitPutInForm(formName) {
            var _this = this;

            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    console.log(_this[formName]);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        cancelPutInDialog: function cancelPutInDialog(formName) {
            this.resetForm(formName);
            this.putInFormVisible = false;
        },
        tabChange: function tabChange(tab, event) {
            console.log(tab, event);
        },
        transferChange: function transferChange(value, direction, movedKeys) {
            console.log(value);
        },
        handleNodeClick: function handleNodeClick(data) {
            console.log("dd", data);
        },
        handleChange: function handleChange(val) {
            console.log(val);
        },
        renderFunc: function renderFunc(h, option) {
            console.log(option);
            var that = this;
            var a = h('div', {}, [h('el-tree', {
                attrs: { 'show-checkbox': true, 'default-expand-all': true },
                props: { data: option.tree, 'node-key': id++ + '', 'expand-on-click-node': false, props: this.defaultProps },
                'on': { 'node-click': function nodeClick() {
                        that.handleNodeClick;
                    } }
            }, [])]);
            return a;

            //return h('span', {}, [option.label])
            /* return h('span', { attrs: { style: 'flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;' } }, [
                 h('span', {}, [
                     h('span', {}, [node.label])
                 ]),
                 h('span', { attrs: { style: 'font-size: 12px;' } }, [
                     h('el-button', {attrs: {size: 'mini', style: 'font-size: 12px;', type: 'text'}, on: { click: () => {this.append(data)}}}, ['Append']),
                     h('el-button', {attrs: {size: 'mini', style: 'font-size: 12px;', type: 'text'}, on: { click: () => {this.remove(node, data)}}}, ['Delete'])
                 ])
             ]);*/
        }
    }
});