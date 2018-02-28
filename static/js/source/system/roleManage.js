let roleData = [{
    key: 1,
    name: '采购员',
    role: 'APPLY',
    describe: '采购药品',
    lock: false,
    type: '拓展'
},{
    key: 2,
    name: '配送员',
    role: 'CHECK',
    describe: '配送试剂',
    lock: true,
    type: '拓展'
}]
let id = 1000
new Vue({
    el: '#app',
    data() {
        return {
            roleData: roleData,
            roleVisible: false,
            roleForm: {
                key: null,
                name: '',
                describe: ''
            },
            role: {
                title: '新增角色',
                type: 'add'
            },
            configRoleVisible: true,
            configRole: [{
                id: 1,
                label: '全部',
                children: [{
                    id: 2,
                    label: '试剂入库',
                    children: [{
                        id: 4,
                        label: '试剂入库',
                    }]
                },{
                    id: 3,
                    label: '试剂出库',
                    children: [{
                        id: 5,
                        label: '出库管理',
                    },{
                        id: 6,
                        label: '出库查询',
                    },{
                        id: 7,
                        label: '配送管理',
                    },{
                        id: 8,
                        label: '自由签收',
                    },{
                        id: 9,
                        label: '配货管理',
                    }]
                },{
                    id: 4,
                    label: '归还管理',
                    children: [{
                        id: 4,
                        label: '试剂入库',
                    }]
                }]
            }]
        }
    },
    methods: {
        lockChange(status){

        },
        submitRole(type,form) {
            var that = this;
            this.$refs[form].validate(function(valid) {
                if (valid) {
                    if(type === 'edit') {
                        roleData.forEach(item => {
                            if(item.key === that[form].key) {
                                item.name = that[form].name;
                                item.describe = that[form].describe;
                            }
                        })
                    } else {

                        roleData.push({
                            key: roleData.length+1,
                            name: that[form].name,
                            role: 'APPLY',
                            describe: that[form].describe,
                            lock: false,
                            type: '拓展'
                        });
                    }

                    console.log('success')
                } else {
                    console.log('fail')
                }
            });
            this.roleVisible = false;
        },
        roleClick(type,row) {
            if(type === 'add') {
                this.role.title = '新增角色';
            } else {
                this.roleForm.name = row.name;
                this.roleForm.describe = row.describe;
                this.roleForm.key = row.key;
                this.role.title = '编辑角色'
            }
            this.roleVisible = true;
            this.role.type = type
            console.log(row)
        }
    }
});