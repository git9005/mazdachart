<template>
    <div>
        <el-table>
               <el-table-column v-for="ver in carlist" v-bind:label="ver.vername"><el-checkbox></el-checkbox></el-table-column> 
        </el-table>
    </div>
</template>

<script>
import {Table,TableColumn,Checkbox} from 'element-ui'
export default {
    data(){
        return {carlist:[]}
    },
    components:{Table,TableColumn,Checkbox},
    created(){
        let _cars=this.carlist;
        for(let i=0;i<=6;i++)
        {
            _cars.push({ver:i+'.0',vername:'蓝天时尚版_'+i});
        }
    }
}
</script>
