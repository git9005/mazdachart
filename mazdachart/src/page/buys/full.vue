<template>
            <div>
                <Form>
                <FormItem label="选择车型" :label-width="80" label-position="left">
                    <Select style="width:200px;">
                        <Option v-bind:on-change="changeCarModel" v-for="cm in carmodels" :value="cm.typeid">{{cm.name}}</Option>
                    </Select>
                    <Select style="width:200px;"></Select>
                </FormItem>
                <FormItem label="裸车价格" :label-width="80">
                    <Input placeholder="祼车价格" style="width:200px;"/>
                </FormItem>
                <Divider/>
                <FormItem label="购置税" label-position="left" :label-width="80" >
                    <Input style="width:200px;" placeholder="购置税" />
                    <Divider type="vertical"/>
                    购置税=购车数/(1+17%)*购置税率(10%)，根据国家政策，1.6L以下车型购置税减半
                </FormItem>
                <FormItem label="上牌费用" :label-width="80">
                    <Input style="width:200px;" placeholder="上牌费用" />
                    <Divider type="vertical"/>
                    通常商家提供的一条龙服务收费约500元，个人办理约373元，其中工商验证、出库150元、移动证30元、环保卡3元、拓号费40元、行驶证相片20元、托盘130元
                </FormItem>
                <FormItem label="车船使用税" :label-width="80">
                    <Select style="width:200px;"></Select>
                    <Input style="width:200px;" placeholder="车船使用税"/>
                    <Divider type="vertical"/>
                    各省不统一，以北京为例（单位/年）。<br/>
                    1.0L(含)以下300元；1.0-1.6L(含)420元；1.6-2.0L(含)480元；2.0-2.5L(含)900元；2.5-3.0L(含)1920元；3.0-4.0L(含)3480元；<br/>
                    4.0以上5280元；不足一年按当年剩余月算
                </FormItem>
                <FormItem label="交强险" :label-width="90">
                    <RadioGroup>
                       <Radio label="jydown">家用6座以下</Radio>
                       <Radio label="jyup">家用6座及以上</Radio>
                   </RadioGroup>
                    <Divider type="vertical"/>
                    家用6座以下950/年，家用6座及以上1100元/年
                </FormItem>
                <Divider/>
                <FormItem label="购置税" :label-width="90">
                     <Checkbox>第三者责任保险</Checkbox>
                     <RadioGroup>
                       <Radio label="jydo3wn">5万</Radio>
                       <Radio label="jyd4own">10万</Radio>
                       <Radio label="jydo5wn">20万</Radio>
                       <Radio label="jydo6wn">50万</Radio>
                       <Radio label="jyd7own">100万</Radio>
                   </RadioGroup>
                   <Input style="width:200px;" placeholder="购置税"/>
                </FormItem>
                <FormItem :label-width="90">
                    <Checkbox>车辆损失险</Checkbox>
                   <Input style="width:200px;" placeholder="车辆损失险"/>
                </FormItem>
                <FormItem :label-width="90">
                    <Checkbox>全车盗抢险</Checkbox>
                   <Input style="width:200px;" placeholder="全车盗抢险"/>
                </FormItem>
                <FormItem :label-width="90">
                    <Checkbox>玻璃单独破碎险</Checkbox>
                     <RadioGroup>
                       <Radio label="jydo3w3n">进口</Radio>
                       <Radio label="jydo43wn">国产</Radio>
                   </RadioGroup>
                   <Input style="width:200px;" placeholder="玻璃单独破碎险"/>
                </FormItem>
                <FormItem :label-width="90">
                    <Checkbox>自然损失险</Checkbox>
                    <Input style="width:200px;" placeholder="自然损失险"/>
                </FormItem>
                <FormItem :label-width="90">
                    <Checkbox>不计免赔特约险</Checkbox>
                    <Input style="width:200px;" placeholder="不计免赔特约险"/>
                </FormItem>
                <FormItem :label-width="90">
                    <Checkbox>无过责任险</Checkbox>
                    <Input style="width:200px;" placeholder="无过责任险"/>
                </FormItem>
                <FormItem :label-width="90">
                    <Checkbox>车上人员责任险</Checkbox>
                    <Input style="width:200px;" placeholder="车上人员责任险"/>
                </FormItem>
                <FormItem :label-width="90">
                    <Checkbox>车身划痕险</Checkbox>
                     <RadioGroup>
                       <Radio label="jydo3w3n">2千</Radio>
                       <Radio label="jydo43wn">5千</Radio>
                       <Radio label="jydo35wn">1万</Radio>
                       <Radio label="jydo36wn">2万</Radio>
                   </RadioGroup>
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
