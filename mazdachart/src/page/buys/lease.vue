<template>
        <div>
            <Form>
                <FormItem label="选择车型" :label-width="80">
                    <Select style="width:200px;">
                        <Option v-bind:on-change="changeCarModel" v-for="cm in carmodels" :value="cm.typeid">{{cm.name}}</Option>
                    </Select>
                    <Select style="width:200px;"></Select>
                </FormItem>
                <FormItem label="裸车价格" :label-width="80">
                    <Input placeholder="祼车价格" style="width:200px;"/>
                </FormItem>
                <Divider/>
                <FormItem label="购置税" :label-width="80">
                    <Input placeholder="购置税" style="width:200px;"/>
                    <Divider type="vertical"/>
                    购置税=购车数/(1+17%)*购置税率(10%)，根据国家政策，1.6L以下车型购置税减半
                </FormItem>
                <FormItem label="保险费" :label-width="80">
                    <Input placeholder="购置税" style="width:200px;"/>
                </FormItem>
                <Divider/>
                <FormItem label="省份城市" :label-width="80">
                    <Select style="width:200px;">
                        <Option v-bind:on-change="changeCarModel" v-for="cm in carmodels" :value="cm.typeid">{{cm.name}}</Option>
                    </Select>
                    <Select style="width:200px;"></Select>
                </FormItem>
                <FormItem label="金融方案" :label-width="80">
                    <RadioGroup>
                       <Radio label="qsd">轻松租</Radio>
                       <Radio label="axd">一证租、两证租</Radio>
                       <Radio label="jyd">开走吧</Radio>
                    </RadioGroup>
                    <Divider type="vertical"/>
                    尾款型低利息贷款：贷款金额期末一次性还清，每月只还较低利息
                </FormItem>
                <FormItem label="金融机构" :label-width="80">
                    <Select style="width:200px;"></Select>
                </FormItem>
                <FormItem label="GPS类型" :label-width="80">
                    <Select style="width:200px;"></Select> <Input placeholder="GPS类型费用" style="width:200px;"/>
                </FormItem>
                <FormItem label="加装费用" :label-width="80">
                   <Input placeholder="加装费用" style="width:200px;"/>
                </FormItem>
                <FormItem label="账户管理费" :label-width="80">
                    <Input placeholder="账户管理费" style="width:200px;"/>
                </FormItem>
                <FormItem label="首付比例" :label-width="80">
                    <RadioGroup>
                       <Radio label="q3sd">30%</Radio>
                       <Radio label="5jyd">50%</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="选择期款" :label-width="80">
                    <RadioGroup>
                       <Radio label="3434">12期</Radio>
                       <Radio label="5545jyd">18期</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem :label-width="80">
                    <div>首付金额：<span>167,153元</span>贷款金额：<span>167,153元</span>月供金额<span>167,153元</span>手续费：<span>167,153元</span>利息：<span>167,153元</span></div>
                </FormItem>
            </Form>
        </div>
</template>

<script>
import {RadioGroup,Radio,Select,Form,FormItem,Input,InputNumber,Divider,Checkbox} from 'iview'
export default {
    data(){
        return {typelist:[],carmodels:[],carverlist:[{verid:'ver1',vername:'2.0L版 手自一体'}]}
    },
    components:{
        RadioGroup,Radio,Select,Form,FormItem,Input,InputNumber,Divider,Checkbox
    },
    created(){
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
           
        }
    }
}
</script>
