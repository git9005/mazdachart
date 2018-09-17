<template>
    <div>
        <div style="text-align:right;">
            <Button type="error">发送</Button>
        </div>
        <RadioGroup vertical class="sel-prm-clr" style="width:100%;">
            <Radio name="ca" v-for="(model,index) in models" :key="index" v-bind:label="model.productid" class="car-model">{{model.productname}}</Radio>
        </RadioGroup>
    </div>
</template>

<script>
import {Radio,RadioGroup,Button} from 'iview'
export default {
    data(){
        return {models:[]}
    },
    components:{RadioGroup,Radio,Button},
    created(){
        let _models=this.models;
        for(let i=1;i<=5;i++){
            _models.push({productid:i,productname:i+'.0L 手自一体 两驱 蓝天活力版'});
        }
    }
}
</script>

<style >
.sel-prm-send{
    float: right;
}
.sel-prm-clr{
    clear: both;
}
.car-model{
    border-bottom:1px solid #eee;
}
.ivu-radio-group-vertical .ivu-radio-wrapper{
    height: 60px;
    line-height: 60px;
}
</style>

