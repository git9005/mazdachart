<template>
    <Layout style="background:#fff;">
        <div style="margin-bottom:10px;"><Button style="float:right;">发送</Button></div>
        <Header>
            <Select style="width:260px;" placeholder="选择省份"></Select>
            <Select style="width:260px;" placeholder="选择城市"></Select>
        </Header>
        <Content class="dealer-content">
            <div class="dealer-con-left" style="float:left;">
                <img src="../assets/defaultmp.png" alt="">
            </div>
                <div class="dealer-con-right" style="float:left;margin-left:10px;width:43%;">
                    <ul>
                        <li class="dealer" v-for="dealer in dealers">{{dealer.company}}</li>
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
        this.dealers.push({company:'北京华日通汽车销售服务有限公司'});
        this.dealers.push({company:'北京博瑞翔汽车销售服务有限公司'});
        this.dealers.push({company:'北京东仁隆达汽车销售服务有限公司'});
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
    display: block;
    border:1px solid #eee;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 5px;
}
</style>

