let settingData = [{
    type: 1,
    name: '申领有效期时间',
    content: '申领有效期时间，以小时为单位',
    value: '24',
    dialogTitle: '申领有效期时间配置'
}, {
    type: 2,
    name: '提交是否发送邮件',
    content: '申领提交，给审批者发邮件配置',
    value: '否',
    dialogTitle: '试剂近效期提醒配置'
},{
    type: 3,
    name: '审批是否发送邮件',
    content: '审批，给提交者发邮件配置',
    value: '否',
    dialogTitle: '审批是否发送邮件配置'
}, {
    type: 4,
    name: '借用是否查看申领记录',
    content: '发布试剂借用时，能否查看其它人员的申领记',
    value: '是',
    dialogTitle: '借用是否查看申领记录配置'
}]
new Vue({
    el: '#app',
    data() {
        return {
            activeName: 'third',
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