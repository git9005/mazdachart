<template>
    <Layout style="background:#fff;">
        <div style="margin-bottom:10px;"><Button style="float:right;" type="error">发送</Button></div>
        <div style="">
            <Select style="width:260px;" placeholder="选择省份"></Select>
            <Select style="width:260px;" placeholder="选择城市"></Select>
        </div>
        <Content class="dealer-content">
            <div class="dealer-con-left" style="float:left;">
                <img src="../assets/defaultmp.png" alt="">
            </div>
                <div class="dealer-con-right" style="float:left;margin-left:10px;width:43%;">
                    <ul>
                        <li class="dealer" v-for="(dealer,index) in dealers" @click="selectItem(index)" v-bind:class="{'deal-item-selected':dealer.isSelected}">
                            <div style="width: 40px;float: left;line-height: 80px;">
                                <i class="icon iconfont icon-gouxuan"></i>
                            </div>
                            <div style="float: left;">
                                <div style="font-size: 14px;font-weight: bold;">{{dealer.company}}</div>
                                <div><i class="icon iconfont icon-location card-icon"></i>{{dealer.address}}</div>
                                <div><i class="icon iconfont icon-dianhua card-icon"></i>{{dealer.phone}}</div>
                                <i class="icon iconfont icon-topbar-dingwei"></i>
                            </div>
                        </li>
                    </ul>
                    <div style="text-align:center;"><Button style="margin-right:10px;">上一页</Button><Button>下一页</Button></div>
            </div>
        </Content>
    </Layout>
</template>

<script>
import {Layout,Header,Content,Select,Split,Button} from 'iview'
export default {
    data(){
        return {dealers:[]}
    },
    components:{Layout,Header,Content,Select,Split,Button},
    created(){
        this.dealers.push({isSelected:false,company:'北京华日通汽车销售服务有限公司',address:'北京市朝阳区花虎沟2号34幢一层局部北京市朝阳区花虎沟2',phone:'010-62387998'});
        this.dealers.push({isSelected:false,company:'北京博瑞翔汽车销售服务有限公司',address:'北京市朝阳区花虎沟2号34幢一层局部',phone:'010-62387998'});
        this.dealers.push({isSelected:false,company:'北京东仁隆达汽车销售服务有限公司',address:'北京市朝阳区花虎沟2号34幢一层局部',phone:'010-62387998'});
    },
    methods:{
        selectItem(index){
            for(let i=0;i<this.dealers.length;i++){
                this.dealers[i].isSelected=false;
            }
            this.dealers[index].isSelected=true;
        }
    }
}
</script>
<style>
.dealer-content{
    margin-top: 20px;
    width: 100%;
}
.dealer{
    min-height: 80px;
    display: flex;
    border:1px solid #eee;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 5px;
    position: relative;
    cursor: pointer;
}
.dealer:hover{
    background: #eee;
}
.icon-topbar-dingwei{
    color: #DC4845;
    right: 10px;
    position:absolute;
    top: 10px;
}
.icon-gouxuan{
    font-size: 2em;
}
.deal-item-selected .icon-gouxuan{
    color: red;
}
</style>

