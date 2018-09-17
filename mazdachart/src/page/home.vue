<template>
    <el-container class="win-wrap">
        <el-aside class="win-aside">
                    
        </el-aside>
        <el-container style="height:100%">
            <el-header class="win-header"></el-header>
            <el-container class="win-container-center">
                <el-aside class="win-aside-users">
                        
                </el-aside>
                <el-container style="width:100%;display:inline-block;padding:5px;">
                    <div class="work-con chart-content">聊天内容区</div>
                    <div class="work-con send-area">
                         <Poptip trigger="hover" fade="false">
                            <i class="icon iconfont icon-tool-cabinet_icon"></i>
                            <div slot="content">
                                <Button @click="dialog(0)">参数表</Button>
                                <Button @click="dialog(1)">金融方案</Button>
                                <Button @click="dialog(2)">经销商查询</Button>
                                <Button @click="dialog(3)">知识库</Button>
                                <Button @click="dialog(4)">我的名片</Button>
                            </div>
                        </Poptip>
                    </div>
                </el-container>
            </el-container>
        </el-container>
        <Modal v-model="isShow" :title="cptitle" width="912">
           <div style="height:430px;overflow-y:auto;padding:10px 10px 10px 10px;">
               <el-components v-bind:is="viewName" :inForm="this"></el-components>
           </div>
           <div slot="footer"></div>
        </Modal>
    </el-container>
</template>

<script>
import {Button,Container,Row,Col,Header,Footer,Aside,Main,components} from 'element-ui'
import {Content,Poptip,Modal} from 'iview'

import paramter from '@/page/toolbox/paramter'
import selectmodel from '@/page/toolbox/selectmodel'
import programme from '@/page/toolbox/programme'
import dealersearch from '@/page/toolbox/dealersearch'
import knowledge from '@/page/toolbox/knowledge'
import mycard from '@/page/toolbox/mycard'
export default {
    data(){return {
        cmpnames:['paramter','programme','dealersearch','knowledge','mycard'],
        cmptitles:['参数表','金融方案','经销商查询','知识库','我的名片'],
        cptitle:'',
        friends:[],isShow:false,viewName:'paramter'
    }},
    components:{Button,Container,Col,Header,Footer,Aside,Main,Row,Content,Poptip,Modal,paramter,programme,dealersearch,knowledge,mycard,selectmodel},
    created(){
        let _friends=this.friends;
        for(let i=1;i<=5;i++){
            _friends.push({name:'好友'+i,status:1,message:'你好，在吗'});
        }
    },
    methods:{
        dialog(index){
            //var _this=this;
            this.isShow=true;
            this.viewName=this.cmpnames[index];
            this.cptitle=this.cmptitles[index];
            //this.$refs.cpload=pgm;
            // this.$layer.iframe({
            //     content:{content:pgm,data:{name:'admin'},
            //     parent:_this},
            //     area:['800px','600px']
            // });
        }
    }
}
</script>
<style scoped>
.win-wrap{
    width: 60%;
    margin: 6% auto;
    border:1px solid #0D0D0E;
    height:80%;
    min-width:800px;
    border-radius: 5px;
}
.win-header{
    background: #616161;
    color: #fff;
}
.win-aside{
    background:#0D0D0E;
    color: #fff;
    width: 100px !important;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.win-container-center{
    height: 100%;
}
.win-aside-users{
    background:#F1F1F1;
    width: 200px !important;
    height: 100%;
}
.user-row{
    height: 50px;
    line-height: 50px;
}
.work-con{
    display: inline-block;
    width: 100%;
}
.chart-content{
    height: 70%;
}
.send-area{
    border-top: 1px solid #eee;
}
.iconfont{
  font-size: 30px;
}
.iconfont:hover{
    border:1px solid #eee;
    cursor: pointer;
    color: rgb(39, 148, 238);
}

.vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

