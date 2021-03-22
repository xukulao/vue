<template>
    <div class="block">
        <span class="demonstration">带快捷选项</span>
        <el-date-picker
                v-model="value2"
                type="datetimerange"
                :shortcuts="shortcuts"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
        </el-date-picker>
    </div>
    <el-button type="danger" @click="test">危险按钮</el-button>
</template>

<script>
    export default {
        methods:{
            test(){
                console.log(this.value2[0]);
            }
        },
        data() {
            return {
                shortcuts: [{
                    text: '最近一周',
                    value: (() => {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        return [start, end]
                    })()
                }, {
                    text: '最近一个月',
                    value: (() => {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        return [start, end]
                    })()
                }, {
                    text: '最近三个月',
                    value: (() => {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        return [start, end]
                    })()
                }],
                value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                value2: ''
            };
        },
        props:['date']
    };
</script>

<style scoped>

</style>