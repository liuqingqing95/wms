var borrowData = [{
    number: 'SJ171220088',
    structure: '../../images/structure.png',
    name: '对三氟甲氧基苯甲醛',
    cas: '135-83-12',
    ics: '50-83-13322',
    boilingPoint: '232℃ ',
    meltingPoint: '132℃',
    dangerous: '是',
    toxic: '是',
    createUser: '蔡芳',
    describe: '-'
}, {
    number: 'SJ171220088',
    structure: '../../images/structure.png',
    name: '对三氟甲氧基苯甲醛',
    cas: '135-83-12',
    ics: '50-83-13322',
    boilingPoint: '232℃',
    meltingPoint: '132℃',
    dangerous: '是',
    toxic: '是',
    createUser: '蔡芳',
    describe: '-'
}];

new Vue({
    el: '#app',
    data() {
        return {
            borrowData: borrowData,
            searchForm: {
                name: '',
                cas: '',
                chemicalName: '',
                type: '',
                toxic: '',
                dangerous: '',

            },
            shrink: false
        }
    }
})