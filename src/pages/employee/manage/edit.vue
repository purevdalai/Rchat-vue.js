<template>
    <div class="container">
        <div class="card mt-5">
            <div class="card-header">
                <h5> <strong> Ажилтан бүртгэх хэсэг </strong></h5>
            </div>
            <div class="card-body">
                <div class="form-group row">
                    <label for="inputEmail3" class="col-2 col-form-label text-right">Овог</label>
                    <div class="col-10">
                        <input type="email" 
                            class="form-control" 
                            placeholder="Ажилтны овог нэр оруулна уу...">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-2 col-form-label text-right">Нэр</label>
                    <div class="col-10">
                        <input type="email" 
                            class="form-control" 
                            placeholder="Ажилтны нэр оруулна уу...">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-2 col-form-label text-right">И-мэйл хаяг</label>
                    <div class="col-10">
                        <input type="email" 
                            class="form-control" 
                            placeholder="И-мэйл хаяг оруулна уу...">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-2 col-form-label text-right">Нууц үг</label>
                    <div class="col-10">
                        <input type="password" 
                            class="form-control" 
                            placeholder="Нууц үг оруулна уу...">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-2 col-form-label text-right">Утасны дугаар</label>
                    <div class="col-10">
                        <input type="email" 
                            class="form-control" 
                            placeholder="Утасны дугаар оруулна уу...">
                    </div>
                </div>

                <div class="row">
                    IMAGE
                </div>

                <fieldset class="form-group">
                    <div class="row">
                        <legend class="col-form-label col-sm-2 pt-0 text-right">Radios</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input 
                                    class="form-check-input" type="radio" 
                                    name="gridRadios" id="gridRadios1" value="option1">
                                <label class="form-check-label" for="gridRadios1">
                                    Ажилтан
                                </label>
                            </div>
                            <div class="form-check">
                                <input 
                                    class="form-check-input" type="radio" 
                                    name="gridRadios" id="gridRadios2" value="option2">
                                <label class="form-check-label" for="gridRadios2">
                                    Админ
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <div class="float-right">
                    <button
                        @click="back" 
                        class="btn btn-secondary mr-2">
                        Буцах
                    </button>
                    <button
                        @click="signup" 
                        class="btn btn-success">
                        Бүртгэх
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import UserService from '../../../services/UserService.js'
export default {
    name: 'CreateUser',

    data: function() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            phone: '',
            image: '',
            role: '',

        }
    },

    methods: {
        back: function() {
            this.$router.push({
                name: 'ManageEmployeeList',
            });
        },

        signup: function() {
            let params = {

            }
            // UserService.storeEmployee(params).then(res => {

            // })
        }
    }
}
</script>
<style scoped>
.btn {
    width: 150px;
}
</style>
