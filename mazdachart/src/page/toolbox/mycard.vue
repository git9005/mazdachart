<template>
    <Content>
        <div style="text-align:right;"><Button type="error">发送</Button></div>
        <div style="position: relative;width:450px;height:186px;border:1px solid #eee;border-radius:10px;color:#fff;background:#434343;margin:50px auto;padding:10px;">
                <div>
                    <div>
                        <img style="border-radius:30px;float: left;" width="55" height="55" src="../../assets/defaultuser.png"/>
                        <span style="line-height: 30px;margin-left: 15px;display: inline-block;font-size: 14px;">
                            <label >田玉婷&nbsp;&nbsp;<i class="icon iconfont icon-woman card-icon"></i></label><br/>
                            <label >首席顾问</label>
                        </span>
                    </div>
                    <div style="font-size: 16px;margin-top: 10px;margin-left: 5px;">从业经验<span>7</span>年</div>
                    <img style="display:block;position: absolute;top:15px;right: 30px;border-radius: 3px;" src="../../assets/defaultcode.png"/>
                </div>
                <p style="font-size: 16px;margin-top:15px;margin-left: 5px;"><i class="icon iconfont icon-dianpu card-icon"></i>北京首汽腾达</p>
                <p style="font-size: 16px;margin-left: 5px;margin-top: 5px;"><i class="icon iconfont icon-location card-icon"></i>北京市丰台区莲花池西里11号(八一电影制片厂)</p>
            </div>
        <div style="text-align:center;margin-top:10px;"><Button type="error">编辑名片</Button></div>
    </Content>
</template>

<script>
import {Content,Card,Icon} from 'iview'
export default {
    components:{Content,Card,Icon}
}
</script>

<style>
    .card-icon{
        color: #DC4845;
        margin-right: 10px;
    }
</style>
