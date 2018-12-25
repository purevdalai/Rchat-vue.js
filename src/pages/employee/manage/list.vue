<template>
    <div class="container">
        <div class="card mt-5">
            <div class="card-header">
                <h5 class="float-left"><strong> Ажилчидийн мэдээлэл </strong></h5>
                <div class="float-right">
                    <button 
                        @click="create"
                        class="btn btn-success">
                        <i class="fas fa-plus"></i>
                        Ажилтан бүртгэх
                    </button>
                </div>
            </div>
            <div class="card-body">
                <div class="row col-12 mb-3 m-0 p-0">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                        <input
                            v-model="search" 
                            type="text" class="form-control" 
                            placeholder="Хэрэглэгчийн овог нэрээр хайх..."/>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr class="text-center">
                                <th scope="col">#</th>
                                <th scope="col">Ажилтны код</th>
                                <th scope="col">Овог</th>
                                <th scope="col">Нэр</th>
                                <th scope="col">И-мэйл хаяг</th>
                                <th scope="col">Утасны дугаар</th>
                                <th scope="col">Эрх</th>
                                <th scope="col">Үйлдэл</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="filterData.length == 0">
                                <td colspan="6" class="text-center"> Бүртгэлтэй хэрэглэгч алга байна </td>
                            </tr>
                            <tr class="text-center" v-for="(user, index) in filterData" :key="index">
                                <th scope="row">
                                    {{ user.id }}
                                </th>
                                <td>
                                    {{ user.code }}
                                </td>
                                <td>
                                    {{ user.last_name }}
                                </td>
                                <td>
                                    {{ user.first_name }}
                                </td>
                                <td>
                                    {{ user.email }}
                                </td>
                                <td>
                                    {{ user.phone }}
                                </td>
                                <td>
                                    {{ user.role_id == 2 ? 'Ажилтан' : 'Админ' }}
                                </td>
                                <td>
                                    <button
                                        v-if="user.role_id == 2"
                                        @click="edit(user.id)" 
                                        class="btn btn-primary mr-2">
                                        <i class="fas fa-user-edit"></i>
                                        Засах
                                    </button>
                                    
                                    <!-- <button
                                        v-if="user.role_id == 2"
                                        @click="show(user.id)" 
                                        class="btn btn-success">
                                        <i class="fas fa-folder"></i>
                                        Дэлгэрэнгүй
                                    </button> -->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import UserService from './../../../services/UserService.js'
export default {
    name: 'ManageEmployee',

    data: function() {
        return {
            userList: [],
            search: '',
        }
    },

    mounted: function() {
        this.fetchData();
        if ( this.auth && this.auth.role_id == 2 ) {
            this.$router.push({
                name: 'Home'
            });
        }
    },

    computed: {
        ...mapState({
            auth: state => state.userStore.profile
        }),

        filterData: function() {
            return this.userList.filter(user => {
                let username = user.first_name + ' ' + user.last_name
                return username.toLowerCase().includes(this.search.toLowerCase()) && this.auth.id !== user.id
            })
        },
    },

    methods: {
        fetchData: function() {
            UserService.getEmployeeList().then(res => {
                if ( res && res.status == 200 ) this.userList = res.data
            })
            .catch(err => {
                console.log('err when fetch user list => ', err)
            })
        },

        create: function() {
            this.$router.push({
                name: 'EmployeeCreate'
            });
        },

        edit: function(id) {
            this.$router.push({
                name: 'EmployeeEdit',
                params: {
                    id: id
                }
            });
        },

        show: function(id) {
            this.$router.push({
                name: 'EmployeeShow',
                params: {
                    id: id
                }
            });
        }
    }
}
</script>

