'use strict';

var userManageData = [{
    userName: '蔡芳',
    img: '../../images/default_group_img.png',
    phoneNumber: '121222311',
    email: '343443@163.com',
    laboratory: '浙江第一中学实验室',
    lock: false
}, {
    userName: '李锐',
    img: '../../images/default_group_img.png',
    phoneNumber: '121222311',
    email: '343443@163.com',
    laboratory: '浙江第一中学实验室',
    lock: true
}];
var roleData = [{
    key: '1',
    label: '申领审批员1'
}, {
    key: '2',
    label: '采购员2'
}, {
    key: '3',
    label: '项目管理员3'
}, {
    key: '4',
    label: '配送专员4'
}, {
    key: '5',
    label: '申购员5'
}, {
    key: '6',
    label: '申购审判员6'
}, {
    key: '7',
    label: '库管员7'
}, {
    key: '8',
    label: '废液管理员8'
}, {
    key: '9',
    label: '申购员9'
}];
var warehouseData = [{
    key: '1',
    label: '上海第一大仓'
}, {
    key: '2',
    label: '上海小仓'
}, {
    key: '3',
    label: '上海第二大仓'
}, {
    key: '4',
    label: '四川第一大仓'
}, {
    key: '5',
    label: '四川第二大仓'
}, {
    key: '6',
    label: '南京第一大仓'
}, {
    key: '7',
    label: '杭州小仓'
}, {
    key: '8',
    label: '沧州第一大仓'
}, {
    key: '9',
    label: '杭州大仓'
}];
new Vue({
    el: '#app',
    data: function data() {
        return {
            userManageData: userManageData,
            searchForm: {
                userName: '',
                phoneNumber: '',
                email: '',
                laboratory: ''
            },
            shrink: false,
            lockVisible: false,
            lockWarning: null,
            lockTitle: null,
            configureRoleVisible: false,
            roleData: roleData,
            selectedList: [],
            warehouseVisible: false,
            warehouseData: warehouseData,
            selectedWList: [],
            laboratoryVisible: false,
            laboratoryForm: {
                user: [],
                selectLaboratory: '',
                laboratory: [{
                    value: '1',
                    label: '实验室1',
                    user: [{
                        key: 'wl',
                        name: '王丽'
                    }, {
                        key: 'dw',
                        name: '德文'
                    }, {
                        key: 'zyf',
                        name: '张一凡'
                    }]
                }, {
                    value: '2',
                    label: '实验室2',
                    user: [{
                        key: 'wl',
                        name: '王丽'
                    }, {
                        key: 'dw',
                        name: '德文'
                    }]
                }, {
                    value: '3',
                    label: '实验室3',
                    user: [{
                        key: 'dw',
                        name: '德文'
                    }]
                }]
            }
        };
    },

    methods: {
        lockChange: function lockChange(status) {
            if (!status) {
                this.lockTitle = '解锁';
                this.lockWarning = '您确定要解锁此用户吗?';
            } else {
                this.lockTitle = '锁定';
                this.lockWarning = '您确定要锁定此用户吗?';
            }
            this.lockVisible = true;
        },
        transferChange: function transferChange(value, direction, movedKeys) {
            console.log(value, direction, movedKeys);
        },
        submitConfigureRole: function submitConfigureRole(form) {
            console.log(this[form]);
        },
        submitWarehouse: function submitWarehouse(form) {
            console.log(this[form]);
        },
        changeLaboratory: function changeLaboratory(value) {
            var that = this;
            this.laboratoryForm.laboratory.forEach(function (item) {
                if (item.value === value) {
                    that.laboratoryForm.user = item.user;
                    return;
                }
            });
        },
        handleTagClose: function handleTagClose(tag) {
            var _this = this;

            this.laboratoryForm.user.forEach(function (item, index) {
                if (tag.key === item.key) {
                    _this.laboratoryForm.user.splice(index, 1);
                    return;
                }
            });
        }
    },
    watch: {
        'laboratoryForm.selectLaboratory': 'changeLaboratory'
    }
});