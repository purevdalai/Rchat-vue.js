<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <h1 class="display-1">4<i class="fas fa-spin fa-cog fa-3x"></i> 4</h1>
            <h1 class="display-3">ERROR</h1>
            <p class="lower-case">Aw !! webpage not found please try to refresh</p>
            <p class="lower-case">Maybe the page is under maintenance</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "NotFound",
}
</script>
<style scoped>
    .display-1 {
        text-align:center;
        color:#e1b7b7;
    }
    .display-1 .fa {
        animation:fa-spin 5s infinite linear;
    }
    .display-3 {
        text-align:center;
        color:#df726a;
    }
    .lower-case {
        text-align:center;
    }
</style>