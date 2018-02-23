const reagentData = [{
    number: 'SJ1712200088',
    name: '一氧化碳',
    cas: '133-37-9',
    ics: 'MFCD2837364',
    netWeight: '100g',
    currentWeight: '100g',
    purity: 100,
    specification: '100g',
    warehouse: '第一大仓',
    date: '2017/10/05',
    status: '已入库'
},{
    number: 'SJ1712200088',
    name: '一氧化碳',
    cas: '133-37-9',
    ics: 'MFCD2837364',
    netWeight: '100g',
    currentWeight: '100g',
    purity: 100,
    specification: '100g',
    warehouse: '第一大仓',
    date: '2017/10/05',
    status: '已入库'
},{
    number: 'SJ1712200088',
    name: '一氧化碳',
    cas: '133-37-9',
    ics: 'MFCD2837364',
    netWeight: '100g',
    currentWeight: '100g',
    purity: 100,
    specification: '100g',
    warehouse: '第一大仓',
    date: '2017/10/05',
    status: '已入库'
}]
new Vue({
    el: '#app',
    data() {
        return {
            reagentData: reagentData,
            pagination: {
                currentPage: 1,
                pageSizes: [15,30,60],
                pageSize: 15,
                pageTotal: 20
            },
            searchForm: {
                number: '',
                name: '',
                cas: '',
                purity: '',
                specification: '',
                provider: '',
                warehouse: '',
                allocation: '',
                ics: '',
                purchaseNote: '',
                batch: '',
                status: '0'
            },
            putInForm: {
                compound: '',
                netWeight: '',
                netWeightSelect: 'g',
                warehouse: '',
                bottles: '',
                bottleCount: '',
                effectiveDate: '',

                source: '',
                status: '',
                specification: '',
                purity: '',

                purchaseNote: '',
                price: '',
                provider: '',
                batch: '',
                producer: '',
                productionNumber: '',
                explain: ''
            },
            putInFormRules: {
                compound: [
                    {required: true, message: '请输入化合物', trigger: 'blur'}
                ],
                netWeight: [
                    {required: true, message: '请填写净重', trigger: 'change'}
                ],
                warehouse: [
                    {required: true, message: '请选择仓库', trigger: 'change'}
                ],
                bottles: [
                    {required: true, message: '请填写瓶重', trigger: 'blur'}
                ],
                source: [
                    {required: true, message: '请选择来源', trigger: 'change'}
                ],
                status: [
                    {required: true, message: '请输入理化状态、固态、液化', trigger: 'blur'}
                ],
                specification: [
                    {required: true, message: '请输入规格', trigger: 'blur'}
                ],
                purity: [
                    {required: true, message: '请选择纯度', trigger: 'change'}
                ],
                purchaseNote: [
                    {required: true, message: '请输入采购单号', trigger: 'blur'}
                ],
                price: [
                    {required: true, message: '请输入单价', trigger: 'blur'},
                    {pattern: /^0\.([1-9]|\d[1-9])$|^[1-9]\d{0,8}\.\d{0,2}$|^[1-9]\d{0,8}$/, message: '单价为正数，整数部分最多为8位，小数部分最多为2位', trigger: 'blur' }
                ],
                provider: [
                    {required: true, message: '请输入供应商', trigger: 'blur'}
                ],
                batch: [
                    {required: true, message: '请输入批号', trigger: 'blur'}
                ]

            },
            shrink: false,
            putInFormVisible: false
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        submitPutInForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this[formName]);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        cancelPutInDialog(formName) {
            this.resetForm(formName);
            this.putInFormVisible = false
        }
    }
})
