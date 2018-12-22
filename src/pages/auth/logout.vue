<template>
</template>
<script>
export default {
    created: function() {
        this.$store.dispatch('clearAuthUser')
        this.$store.dispatch('clearProfileUser')
        localStorage.setItem('auth', null)
        this.$router.push({ name: "login" })
    }
}
</script>
