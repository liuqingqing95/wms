const menuList =  [
    {
        "path": "/controller",
        "iconCls": "iconfont icon-home",
        "component": "Home",
        "name": "控制台",
        "leaf": false,
        "children": []
    },
    {
        "path": "/reagentPutIn",
        "iconCls": "iconfont icon-reagent-putIn",
        "component": "Home",
        "name": "试剂入库",
        "leaf": true,
        "children": [
            {
                "path": "/reagentPutIn",
                "component": "reagentPutIn",
                "name": "试剂入库"
            }
        ]
    },
    {
        "path": "/reagentOutput",
        "iconCls": "iconfont icon-reagent-output",
        "component": "Home",
        "name": "试剂出库",
        "leaf": true,
        "children": [
            {
                "path": "/distributionManage",
                "component": "distributionManage",
                "name": "配货管理"
            },
            {
                "path": "/stockManage",
                "component": "stockSManage",
                "name": "出库管理"
            },
            {
                "path": "/stockSearch",
                "component": "stockSearch",
                "name": "出库查询"
            },
            {
                "path": "/deliveryManage",
                "component": "deliveryManage",
                "name": "配送管理"
            },
            {
                "path": "/signIn",
                "component": "signIn",
                "name": "自由签收"
            }
        ]
    },
    {
        "path": "/returnManage",
        "iconCls": "iconfont icon-return-manage",
        "component": "Home",
        "name": "归还管理",
        "leaf": true,
        "children": [
            {
                "path": "/returnReceiving",
                "component": "returnReceiving",
                "name": "归还受理"
            },
            {
                "path": "/returnPutaway",
                "component": "returnPutaway",
                "name": "归还上架"
            },
            {
                "path": "/returnSearch",
                "component": "reagentSearch",
                "name": "归还查询"
            }
        ]
    },
    {
        "path": "/inventoryManage",
        "iconCls": "iconfont icon-inventory-manage",
        "component": "Home",
        "name": "库存管理",
        "leaf": true,
        "children": [
            {
                "path": "/inventoryManage",
                "component": "inventoryManage",
                "name": "库存管理"
            },
            {
                "path": "/scrapManage",
                "component": "returnPutaway",
                "name": "报废管理"
            },
            {
                "path": "/reagentSearch",
                "component": "reagentSearch",
                "name": "试剂查询"
            },
            {
                "path": "/validReagent",
                "component": "validReagent",
                "name": "近效期试剂"
            },
            {
                "path": "/inventoryWarning",
                "component": "inventoryWarning",
                "name": "备库警戒提醒"
            },
            {
                "path": "/visualization",
                "component": "visualization",
                "name": "库存可视化"
            },
            {
                "path": "/initialize",
                "component": "initialize",
                "name": "库存初始化"
            }
        ]
    },
    {
        "path": "/dataManage",
        "iconCls": "iconfont icon-data-manage",
        "component": "Home",
        "name": "基础数据管理",
        "leaf": true,
        "children": [
            {
                "path": "/reagentInfo",
                "component": "reagentInfo",
                "name": "试剂基础信息"
            },
            {
                "path": "/storageManage",
                "component": "storageManage",
                "name": "仓库管理"
            },
            {
                "path": "/laboratoryManage",
                "component": "laboratoryManage",
                "name": "实验室管理"
            },
            {
                "path": "/dataManage",
                "component": "dataManage",
                "name": "常用数据管理"
            }
        ]
    },
    {
        "path": "/systemManage",
        "iconCls": "iconfont icon-setting",
        "component": "Home",
        "name": "系统管理",
        "leaf": true,
        "children": [
            {
                "path": "/userManage",
                "component": "userManage",
                "name": "用户管理"
            },
            {
                "path": "/roleManage",
                "component": "roleManage",
                "name": "角色管理"
            },
            {
                "path": "/loginLog",
                "component": "loginLog",
                "name": "登录日志"
            },
            {
                "path": "/operateLog",
                "component": "operateLog",
                "name": "操作日志"
            },
            {
                "path": "/parameterSetting",
                "component": "parameterSetting",
                "name": "系统参数设置"
            },
            {
                "path": "/liquidWasteDeal",
                "component": "liquidWasteDeal",
                "name": "废液处理选项"
            }
        ]
    },
    {
        "path": "/inventoryStatement",
        "iconCls": "iconfont icon-report",
        "component": "Home",
        "name": "库存报表",
        "leaf": true,
        "children": [
            {
                "path": "/receiveStatistics",
                "component": "receiveStatistics",
                "name": "申领统计"
            },
            {
                "path": "/reagentStatistics",
                "component": "reagentStatistics",
                "name": "试剂统计"
            },
            {
                "path": "/overdueReturn",
                "component": "overdueReturn",
                "name": "超期归还报表"
            }
        ]
    },
    {
        "path": "/reagentApply",
        "iconCls": "iconfont icon-reagent-apply",
        "component": "Home",
        "name": "试剂申领",
        "leaf": true,
        "children": [
            {
                "path": "/reagentApply",
                "component": "reagentApply",
                "name": "试剂申领"
            },
            {
                "path": "/reagentShare",
                "component": "reagentShare",
                "name": "试剂共享"
            },
            {
                "path": "/receive",
                "component": "receive",
                "name": "我的申领"
            },
            {
                "path": "/borrow",
                "component": "borrow",
                "name": "我的借用"
            },
            {
                "path": "/storageTrack",
                "component": "storageTrack",
                "name": "领料车"
            }
        ]
    }
]

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
            user: {
                type: '管理员',
                name: '刘晴晴'
            },
            collapsed: false,
            menuList: [],

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
    created() {
        this.menuList = menuList;
    },
    methods: {
        collapse() {
            this.collapsed = !this.collapsed
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        showMenu(i, status) {
            this.$refs.menuCollapsed.getElementsByClassName('iconfont-' + i)[0].style.display = status ? 'block' : 'none'
        },

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
