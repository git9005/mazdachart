<template>
    <Content>
        <div style="text-align:right;"><Button>发送</Button></div>
        <div style="width:450px;height:186px;border:1px solid #eee;border-radius:10px;color:#fff;background:#434343;margin:50px auto;padding:10px;">
                <div>
                <span>
                    <img style="border-radius:30px;" width="55" height="55" src="../assets/defaultuser.png"/>
                </span>
                <span>田玉婷</span>
                <span>首席顾问</span>
                </div>
                <div>从业经验<span>7</span>年</div>
                <p>北京首汽腾达</p>
                <p>北京市丰台区莲花池西里11号(八一电影制片厂)</p>
                <img src="../assets/defaultcode.png"/>
            </div>
        <div style="text-align:center;margin-top:10px;"><Button>编辑名片</Button></div>
    </Content>
</template>

<script>
import {Content,Card} from 'iview'
export default {
    components:{Content,Card}
}
</script>
