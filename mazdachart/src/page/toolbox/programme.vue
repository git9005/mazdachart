<template>
        <div>
            <div style="text-align:center;margin-bottom:20px;">
                <RadioGroup type="button">
                <Radio v-for="(type,index) in typelist" v-bind:label="index" :key="index" @click.native="loadtpl(index)">{{type}}</Radio>
            </RadioGroup>
            </div>
            <div>
               <Components v-bind:is="tplname"></Components>
            </div>
        </div>
</template>

<script>
import {RadioGroup,Radio,Select,Form,FormItem,Input,InputNumber,Divider,components,Scroll} from 'iview'

import full from '@/page/buys/full'
import lease from '@/page/buys/lease'
import loan from '@/page/buys/loan'
export default {
    data(){
        return {
            tplname:'full',
            typelist:[],carmodels:[],carverlist:[{verid:'ver1',vername:'2.0L版 手自一体'}],
            buytpls:['full','lease','loan']
        }
    },
    props:['inForm'],
    components:{
        RadioGroup,Radio,Select,Form,FormItem,Input,InputNumber,Divider,Scroll,full,lease,loan
    },
    created(){
        console.log(this.inForm);
        this.typelist=['全款购车','贷款购车','金融租赁'];
        let _carmodels=this.carmodels;
        for(let i=1;i<=10;i++){
            _carmodels.push({typeid:'type'+i,name:'北京现代'+i,vers:[]});
        }
        for(let i=1;i<_carmodels.length;i++){
            _carmodels[i].vers.push({verid:'ver'+i,vername:i+'.0L版 手自一体'});
        }
    },
    methods:{
        changeCarModel(){
           
        },
        loadtpl(index){
            this.tplname=this.buytpls[index];
        }
    }
}
</script>
