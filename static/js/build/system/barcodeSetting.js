'use strict';

var barcodeData = [{
    type: 1,
    name: '条码尺寸',
    content: '宽,高（逗号分隔），单位px',
    label: '180,60'
}, {
    type: 2,
    name: '自定义前缀',
    content: '条码使用的自定义前缀',
    label: 'Integle'
}, {
    type: 3,
    name: '条码前缀规则',
    content: '是否使用仓库字母前两位做为前缀，否则使用',
    label: '否'
}];
new Vue({
    el: '#app',
    data: function data() {
        return {
            activeName: 'first',
            barcodeData: barcodeData,
            barcodeVisible: false,
            barcodeForm: {
                content: '宽,高（逗号分隔），单位px',
                selectSize: '',
                size: [{
                    value: [{ width: '180px', height: '60px' }],
                    label: '180,60'
                }, {
                    value: [{ width: '210px', height: '70px' }],
                    label: '210,70'
                }, {
                    value: [{ width: '240px', height: '80px' }],
                    label: '240,80'
                }],
                newSize: [{
                    width: '',
                    height: ''
                }]
            },
            barcodeRules: {
                newSize: [{ required: true, message: '宽度、高度不能为空', trigger: 'blur' }],
                width: [{ required: true, message: '宽度不能为空', trigger: 'blur' }],
                height: [{ required: true, message: '高度不能为空', trigger: 'blur' }]

            },
            prefixVisible: false,
            prefixForm: {
                content: '条码使用的自定义前缀',
                value: ''
            },
            prefixRuleVisible: false,
            prefixRule: {
                content: '是否使用仓库字母前两位做为前缀，否则使用',
                rule: '',
                defaultRule: true
            }
        };
    },

    methods: {
        handleSelectionChange: function handleSelectionChange(val) {
            console.log(val);
        },
        tabChange: function tabChange(tab, event) {
            //console.log(tab, event);
        },
        addBarcodeSize: function addBarcodeSize(e, index) {
            if (e.className === 'icon-add') {
                this.barcodeForm.newSize.push({
                    width: '',
                    height: '',
                    key: Date.now()
                });
            } else {
                this.barcodeForm.newSize.splice(index, 1);
            }
        },
        submitBarcodeForm: function submitBarcodeForm(form) {
            this.$refs[form].validate(function (valid) {
                if (valid) {}
            });
        },
        submitPrefixForm: function submitPrefixForm(form) {}
    },
    watch: {
        'barcodeForm.newSize': {
            handler: function handler(value) {
                console.log(value);
            },

            deep: true
        }
    }
});