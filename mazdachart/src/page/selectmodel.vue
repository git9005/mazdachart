<template>
    <div>
        <div>
            <Button class="sel-prm-send" type="error">发送</Button>
        </div>
        <RadioGroup vertical class="sel-prm-clr">
            <Radio name="ca" v-for="model in models" v-bind:label="model.productid" class="">{{model.productname}}</Radio>
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
</style>

