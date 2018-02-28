'use strict';

new Vue({
    el: '#app',
    data: function data() {
        return {
            searchForm: {
                startTime: '',
                endTime: ''
            },
            logData: [{
                name: '许巍',
                loginTime: '2017-10-12',
                ip: '123.2.1.2',
                browser: 'chrome'
            }, {
                name: '许巍',
                loginTime: '2017-10-12',
                ip: '123.2.1.2',
                browser: 'chrome'
            }]
        };
    },

    methods: {
        submitRequestForm: function submitRequestForm(form) {
            this.$refs[form].validate(function (valid) {
                if (valid) {
                    console.log('success');
                } else {
                    console.log('fail');
                }
            });
        },
        resetForm: function resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
});