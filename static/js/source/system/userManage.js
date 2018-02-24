let userManageData = [{
    userName: '蔡芳',
    img: '../../images/default_group_img.png',
    phoneNumber: '121222311',
    email: '343443@163.com',
    laboratory: '浙江第一中学实验室',
    lock: false
},{
    userName: '李锐',
    img: '../../images/default_group_img.png',
    phoneNumber: '121222311',
    email: '343443@163.com',
    laboratory: '浙江第一中学实验室',
    lock: true
}]

new Vue({
    el: '#app',
    data() {
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
            lockTitle: null
        }
    },
    methods: {
        lockChange(status) {
            if(!status) {
                this.lockTitle = '解锁';
                this.lockWarning = '您确定要解锁此用户吗?';
            } else {
                this.lockTitle = '锁定';
                this.lockWarning = '您确定要锁定此用户吗?';
            }
            this.lockVisible = true;
        }
    }
});