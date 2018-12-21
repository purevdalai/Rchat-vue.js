<template>
    <div>
        <full-calendar 
            :events="fcEvents" 
            locale="en"></full-calendar>
    </div>
</template>
<script>
export default {
    name: 'Meeting',
    data () {
        return {
            fcEvents : [
                {
                    title : 'Sunny Out of Office',
                    start : '2018-12-25',
                    end : '2018-12-27'
                }
            ]
        }
    },
}
</script>
