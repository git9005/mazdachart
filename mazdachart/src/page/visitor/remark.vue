<template>
    <Form>
        <FormItem label="备注名">
            <Input/>
        </FormItem>
        <FormItem label="客户类别">
            <Select style="width:160px;"></Select>
        </FormItem>
        <FormItem label="手机号">
            <Input/>
        </FormItem>
        <FormItem label="微信">
            <Input/>
        </FormItem>
        <FormItem label="备注">
            <Input/>
        </FormItem>
        <FormItem>
            <Button>保存备注</Button>
        </FormItem>
    </Form>
</template>

<script>
import {Form,FormItem,Input,Select,Button} from 'iview'
export default {
    components:{Form,FormItem,Input,Select,Button}
}
</script>
