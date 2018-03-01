let settingData = [{
    type: 1,
    name: '试剂近效期提醒',
    content: '试剂近效期提醒',
    value: '是',
    dialogTitle: '化合物备库预警配置'
}, {
    type: 2,
    name: '化合物备库预警',
    content: '化合物库存预警（达到警戒值）',
    value: '是',
    dialogTitle: '试剂近效期提醒配置'
},{
    type: 3,
    name: '帐号有效期提醒',
    content: '是否使用仓库字母前两位做为前缀，否则使用',
    value: '否',
    dialogTitle: '帐号有效期提醒配置'
}, {
    type: 4,
    name: '试剂近效期提醒时间',
    content: '试剂近效期提醒时间，以天为单位',
    value: '1',
    dialogTitle: '试剂近效期提醒时间配置'
}, {
    type: 5,
    name: '账号有效期提醒时间',
    content: '账号有效期提醒时间，以天为单位',
    value: '30',
    dialogTitle: '账号有效期提醒时间配置'
}, {
    type: 6,
    name: '退库超期提醒',
    content: '退库超期提醒',
    value: '是',
    dialogTitle: '退库超期提醒配置'
},{
    type: 7,
    name: '退库超期时间',
    content: '退库超期时间，以天数为单位',
    value: '3',
    dialogTitle: '退库超期时间配置'
}]
new Vue({
    el: '#app',
    data() {
        return {
            activeName: 'second',
            settingData: settingData,
            form: {
                type: null,
                dialogTitle: null,
                content: null,
                value: null
            },
            dialogVisible: false
        }
    },
    methods: {
        handleSelectionChange(val) {
            console.log(val)
        },
        openRuleDialog(row) {
            this.form.type = row.type;
            this.form.content = row.content;
            if(row.value === '是') {
                this.form.value = true;
            } else if(row.value === '否') {
                this.form.value = false;
            } else {
                this.form.value = row.value;
            }
            this.form.dialogTitle = row.dialogTitle;
            this.dialogVisible = true;
        },
        submitSetting(form) {
            let that = this;
            this.$refs[form].validate(function(valid) {
                if (valid) {
                    let value;
                    that.settingData.forEach((item,index) => {
                        if(that.form.type === item.type) {
                            switch (that.form.value) {
                                case false:
                                    value = '否';
                                    break;
                                case true:
                                    value = '是';
                                    break;
                                default:
                                    value = that.form.value;
                                    break;
                            }
                            that.settingData[index].value = value;
                            return;
                        }
                    })
                }
            });
            this.dialogVisible = false;
        }
    }
});