<template>
    <div class="image">
        <img :src="image" class="img-fluid img" />
        <p class="mt-1 text-center"><strong>Зураг хуулах</strong></p>
        <input type="file" accept="image/*" @change="handleSelect" id="image" name="file" ref="file" required />
    </div>
</template>
<script>
export default {
    name: 'SelectImageForm',
    
    data: function() {
        return {
            image: 'https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg'
        }
    },

    created: function() {
        this.$root.$on('resetImage', this.reset)
        this.$root.$on('setImageSrc', this.setImageSrc)
    },

    methods: {
        handleSelect: function(e) {
            let file = e.target.files[0]
            let tmp_path = window.URL.createObjectURL(file)
            this.image = tmp_path
            this.$emit('setImage', file)
        },

        reset: function() {
            this.image = 'https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg'
        },

        setImageSrc: function(src) {
            this.image = src
        },
    }
}
</script>
<style scoped>
.image {
    height: 100%;
    width: 100%;
}
input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
}
</style>
