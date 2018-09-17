<template>
    <div>
        <div style="margin-bottom:20px;"><el-input v-model="keyword" @blur="endInput" @focus="startInput" placeholder="请输入关键字" prefix-icon="el-icon-search"></el-input></div>
        <div v-if="!showTag">
            <div style="text-align:center;">
            <RadioGroup type="button" class="sel-prm-clr">
            <Radio name="ca" v-for="(model,index) in models" :key="index" v-bind:label="model.productid" class="">{{model.productname}}</Radio>
            </RadioGroup>
            </div>
            <div style="margin-top:10px;padding: 10px;">
                <ul class="buy-point">
                    <li class="buy-point-item" >【易点易评团】万众瞩目的焦点</li>
                    <li class="buy-point-item" >【易点易评团】万众瞩目的焦点</li>
                    <li class="buy-point-item" >【一汽马自达口碑】万众瞩目的焦点</li>
                    <li class="buy-point-item" >【一汽马自达口碑】万众瞩目的焦点</li>
                    <li class="buy-point-item" >【一汽马自达口碑】万众瞩目的焦点</li>
                    <li class="buy-point-item" >【易点易评团】万众瞩目的焦点</li>
                </ul>
            </div>
        </div>
        <div v-if="showTag">
           <i class="kn-tag" @click="endInput(true,'cx4')">CX4</i>
           <i class="kn-tag" @click="endInput(true,'cx4')">阿特兹</i>
           <i class="kn-tag" @click="endInput(true,'cx4')">外观</i>
           <i class="kn-tag" @click="endInput(true,'cx4')">阿特兹</i>
           <i class="kn-tag" @click="endInput(true,'cx4')">外观</i>
           <i class="kn-tag" @click="endInput(true,'cx4')">阿特兹</i>
           <i class="kn-tag" @click="endInput(true,'cx4')">外观</i>
        </div>
    </div>
</template>

<script>
import {Input} from 'element-ui'
import {Button,Tag,Radio,RadioGroup} from 'iview'
export default {
    data(){
        return {showTag:false,models:[],keyword:''}
    },
    components:{Input,Button,Tag,Radio,RadioGroup},
    created(){
        let _models=this.models;
        for(let i=1;i<=3;i++){
            _models.push({productid:i,productname:i+'.0L 手自一体 两驱 蓝天活力版'});
        }
    },
    methods:{
        startInput(){
            this.showTag=true;
        },
        endInput(isSelectTag,val){
            console.log(val)
            if(isSelectTag){
                this.keyword=val;
            }
            if(this.keyword){
                this.showTag=false;
            }
        },
        changsearch(){
            console.log(222);
        }
    }
}
</script>

<style>
.kn-tag{
    font-style:normal;
    background: #F8F8F8;
    border:1px solid #fff;
    padding: 7px 17px;
    border-radius: 15px;
}
.kn-tag:hover{
    background: #eee;
    cursor: pointer;
}
.buy-point-item{
    list-style-type: disc;
    line-height: 40px;height: 40px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    margin-left: 10px;
}
</style>

