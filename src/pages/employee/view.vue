<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-6" v-for="(emp, index) in employee" :key="index">
                <user-card
                    v-if="emp"
                    :user="emp"
                ></user-card>
            </div>
        </div>
    </div>
</template>
<script>
import UserService from './../../services/UserService.js'
import UserCard from '../../components/employee/user-card.vue' 

export default {
    name: 'EmployeeList',

    components: {
        'user-card': UserCard
    },

    data: function() {
        return {
            employee: []
        }
    },

    created: function() {
        this.fetchData();
    },

    methods: {
        fetchData: function() {
            UserService.getEmployeeList().then(res => {
                if ( res && res.status === 200 ) {
                    this.employee = res.data
                }
            })
            .catch(err => {
                console.log('err when fetch user list => ', err)
            })
        }
    }
}
</script>
