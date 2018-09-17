<template>
    <div>
        <div style="text-align:right;">
            <Button type="error" @click="sendPrm">发送参数</Button>
        </div>
        <div style="text-align:center;width:100%;">
                <li class="carmodel-item" v-for="(model,index) in carmodels" :key="index" v-bind:class="{'carmodel-selected':model==currentModel}" @click="currentModel=model;">{{model.name}}</li>
        </div>
        <div style="clear:left;display:block;padding-top:20px;">
            <table CellPadding="0px" cellspacing="0" style="border:1px solid #eee;width:100%;margin-top:10px;border-right:none;border-bottom:none;" class="tbParamter">
                <tr>
                    <td>全新阿特兹<Checkbox>隐藏相同</Checkbox></td><td v-for="(car,index) in carlist"><Checkbox @click.native="choosePrm(index,car)">{{car.vername}}</Checkbox> </td>
                </tr>
                <tr>
                    <td>官方报价</td><td v-for="(car,index) in carlist" class="ft-center">￥{{car.salePrice}}</td>
                </tr>
                <tr class="" style="line-height:30px;height:30px;background:#676767;">
                    <td :colspan="(1+carlist.length)" style="padding-left:20px;color:#fff;">整车参数</td>
                </tr>
                <tr>
                    <td>轴距</td><td v-for="(car,index) in carlist" class="ft-center">{{car.zsize}}</td>
                </tr>
                <tr>
                    <td>前／后轮距</td><td v-for="(car,index) in carlist" class="ft-center">{{car.qhsize}}</td>
                </tr>
                <tr>
                    <td>前／后悬</td><td v-for="(car,index) in carlist" class="ft-center">{{car.qhx}}</td>
                </tr>
                <tr>
                    <td>空载最小离地间隙(mm)</td><td v-for="(car,index) in carlist" class="ft-center">{{car.zxjx}}</td>
                </tr>
                <tr>
                    <td>最小转变半径</td><td v-for="(car,index) in carlist" class="ft-center">{{car.zxbj}}</td>
                </tr>
                <tr>
                    <td>轮胎规格</td><td v-for="(car,index) in carlist" class="ft-center">{{car.lg}}</td>
                </tr>
                <tr>
                    <td>油箱容积(L)</td><td v-for="(car,index) in carlist" class="ft-center">{{car.rj}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import {Table,TableColumn,Checkbox} from 'element-ui'
export default {
    data(){
        return {isChecked:false,carmodels:[{name:'全新阿特兹',isSelected:true},{name:'CX-4',isSelected:false}],carlist:[],currentModel:null,alreadyChoose:[]}
    },
    props:['inForm'],
    components:{Table,TableColumn,Checkbox},
    created(){
        let _cars=this.carlist;
        for(let i=0;i<=4;i++)
        {
            _cars.push({isChecked:false,qhsize:2830,zsize:'1285/1757',qhx:'955/1085',zxjx:163,zxbj:'6.0',lg:'225/55r17 17英寸铝合金轮皾',rj:(i+1)*28,size:(i+1)*102+'*'+(i+2)*158+'*'+(i+3)*152+'*',ver:i+'.0',vername:'蓝天时尚版_'+i,salePrice:(2*i*10000)+105000});
        }
    },
    methods:{
        choosePrm(index,model){
            model.isChecked=!model.isChecked;
            var _list=[];
            console.log(model.isChecked);
            if(model.isChecked){
                this.alreadyChoose.push(model);
            }
            else{
                for(let i=0;i<this.alreadyChoose.length;i++){
                    if(this.alreadyChoose[i]!=model){
                        _list.push(this.alreadyChoose[i]);
                    }
                }
            }
            this.alreadyChoose=_list;
        },
        sendPrm(){
            
        this.inForm.viewName='selectmodel';
        }
    }
}
</script>

<style>
.carmodel-item{
display: inline-block;
border:1px solid #eee;
padding:5px 20px;
margin-right: 10px;
list-style-type: none;
cursor: pointer;
color: #333;
}
.carmodel-selected{
    padding: 10px 30px;
    background: #CD1B0F;
    color: #fff;
    margin-top: -5px;
}
.tbParamter tr{
    line-height: 40px;
}
.tbParamter tr td{
    border-right:1px solid #eee;
    border-bottom: 1px solid #eee;
    padding:0px 10px;
}
.tbParamter tr td:first-child{
    font-weight: bold;
}
.tbParamter tr:first-child{
    font-weight: bold;
}

.ft-center{
    text-align: center;
}
</style>

