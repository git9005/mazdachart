<template>
<div>
            <Form>
                <FormItem label="选择车型" :label-width="80">
                    <Select style="width:200px;">
                        <Option v-bind:on-change="changeCarModel" v-for="(cm,index) in carmodels" :key="index" :value="cm.typeid">{{cm.name}}</Option>
                    </Select>
                    <Select style="width:200px;"></Select>
                </FormItem>
                <FormItem label="裸车价格" :label-width="80">
                    <Input placeholder="祼车价格" style="width:200px;"/>
                </FormItem>
                <Divider/>
                <FormItem label="省份城市" :label-width="80">
                    <Select style="width:200px;">
                        <Option v-bind:on-change="changeCarModel" v-for="(cm,index) in carmodels" :key="index" :value="cm.typeid">{{cm.name}}</Option>
                    </Select>
                    <Select style="width:200px;"></Select>
                </FormItem>
                <FormItem label="金融方案" :label-width="80">
                    <RadioGroup>
                       <Radio label="qsd">轻松贷</Radio>
                       <Radio label="axd">安心贷</Radio>
                       <Radio label="jyd">简易货</Radio>
                    </RadioGroup>
                    <Divider type="vertical"/>
                    尾款型低利息贷款：贷款金额期末一次性还清，每月只还较低利息
                </FormItem>
                <FormItem label="金融机构" :label-width="80">
                    <Select style="width:200px;"></Select>
                </FormItem>
                <FormItem label="首付比例" :label-width="80">
                   <RadioGroup>
                       <Radio label="30">30%</Radio>
                       <Radio label="50">50%</Radio>
                   </RadioGroup>
                </FormItem>
                <FormItem label="选择期款" :label-width="80">
                    <RadioGroup>
                       <Radio label="12">12期</Radio>
                       <Radio label="18">18期</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem :label-width="80">
                    <div>首付金额：<span>167,153元</span>贷款金额：<span>167,153元</span>月供金额<span>167,153元</span>手续费：<span>167,153元</span>利息：<span>167,153元</span></div>
                </FormItem>
                <Divider/>
                <FormItem label="购置税" :label-width="80">
                    <Input placeholder="购置税" style="width:200px;"/>
                    <Divider type="vertical"/>
                    购置税=购车数/(1+17%)*购置税率(10%)，根据国家政策，1.6L以下车型购置税减半
                </FormItem>
                <FormItem label="上牌费用" :label-width="80">
                    <Input placeholder="上牌费用" style="width:200px;"/>
                    <Divider type="vertical"/>
                    通常商家提供的一条龙服务收费约500元，个人办理约373元，其中工商验证、出库150元、移动证30元、环保卡3元、拓号费40元、行驶证相片20元、托盘130元
                </FormItem>
                <FormItem label="车船使用税" :label-width="80">
                    <Select style="width:150px;"></Select>
                    <Input placeholder="车船使用税" style="width:200px;"/>
                    <Divider type="vertical"/>
                    各省不统一，以北京为例（单位/年）。<br/>
                    1.0L(含)以下300元；1.0-1.6L(含)420元；1.6-2.0L(含)480元；2.0-2.5L(含)900元；2.5-3.0L(含)1920元；3.0-4.0L(含)3480元；<br/>
                    4.0以上5280元；不足一年按当年剩余月算
                </FormItem>
                <FormItem label="交强险" :label-width="80">
                    <RadioGroup>
                       <Radio label="jydown">家用6座以下</Radio>
                       <Radio label="jyup">家用6座及以上</Radio>
                   </RadioGroup>
                    <Divider type="vertical"/>
                    家用6座以下950/年，家用6座及以上1100元/年
                </FormItem>
            </Form>
        </div>
</template>

<script>
import {RadioGroup,Radio,Select,Form,FormItem,Input,InputNumber,Divider} from 'iview'
export default {
    data(){
        return {typelist:[],carmodels:[],carverlist:[{verid:'ver1',vername:'2.0L版 手自一体'}]}
    },
    components:{
        RadioGroup,Radio,Select,Form,FormItem,Input,InputNumber,Divider
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
