'use strict';

var roleData = [{
    key: '1',
    name: '采购员',
    role: 'APPLY',
    describe: '采购药品',
    lock: false,
    type: '拓展'
}, {
    key: '2',
    name: '配送员',
    role: 'CHECK',
    describe: '配送试剂',
    lock: true,
    type: '拓展'
}];

new Vue({
    el: '#app',
    data: function data() {
        return {
            roleData: roleData,
            roleVisible: false,
            roleForm: {
                key: '',
                name: '',
                describe: ''
            },
            roleTitle: '新增角色'
        };
    },

    methods: {
        lockChange: function lockChange(status) {},
        submitRole: function submitRole(form) {
            var that = this;
            this.$refs[form].validate(function (valid) {
                if (valid) {
                    roleData.forEach(function (item) {
                        if (item.key === that[form].key) {
                            item.name = that[form].name;
                            item.describe = that[form].describe;
                        }
                    });
                    console.log('success');
                } else {
                    console.log('fail');
                }
            });
            this.roleVisible = false;
        },
        role: function role(type, row) {
            if (type === 'add') {
                this.roleTitle = '新增角色';
            } else {
                this.roleForm.name = row.name;
                this.roleForm.describe = row.describe;
                this.roleForm.key = row.key;
                this.roleTitle = '编辑角色';
            }
            this.roleVisible = true;
            console.log(row);
        }
    }
});