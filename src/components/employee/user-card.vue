<template>
    <div class="card m-3">
        <div class="card-body">
            <div class="row">
                <div class="col info">
                    <div class="header mb-2">
                        Ажилтаны код: 
                        <code> {{ user.code }} </code>
                    </div>
                    <div class="username">
                        <h3>
                            {{ username }}
                        </h3>
                    </div>
                    <div class="phone" style="margin-top: 80px;">
                        <span>
                            Утас: {{ user.phone }}
                        </span>
                    </div>
                    <div class="email">
                        <span>
                            И-мэйл хаяг: {{ user.email }}
                        </span>
                    </div>
                </div>
                <div class="col">
                    <img :src="user.profile_img" class="img-fluid profile-img">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'EmployeeUserCard',
    
    props: {
        user: {
            type: Object,
            required: true
        }
    },

    computed: {
        username() {
            return this.user.first_name + ' ' + this.user.last_name; 
        }
    }
}
</script>
<style scoped>
.profile-img {
    border-radius: 50%;
}
.profile-img:hover {
    cursor: pointer;
    padding: 4px;
    border: 1px solid #2ff012;
}
.info {
    font-size: 0.9em;
}
.card {
    color: white;
    background: #32465a;
}
</style>
