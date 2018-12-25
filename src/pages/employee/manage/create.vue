<template>
    <div class="container">
        <div class="card mt-5">
            <div class="card-header">
                <h5> <strong> Ажилтан бүртгэх хэсэг </strong></h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-2">
                        <small v-if="!$v.image.required" class="invalid-feedback">
                            Заавал зураг оруулна уу!
                        </small>
                        <select-image
                            @setImage="image = $event"
                        ></select-image>
                    </div>
                    <div class="col-10">
                        <div class="form-group row">
                            <label class="col col-form-labe">Овог</label>
                            <div class="col-11">
                                <input type="text"
                                    v-model="last_name" 
                                    class="form-control" 
                                    placeholder="Ажилтны овог нэр оруулна уу...">
                                <small v-if="!$v.last_name.required" class="invalid-feedback">
                                    Овог нэрээ заавал оруулна уу!
                                </small>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col col-form-label">Нэр</label>
                            <div class="col-11">
                                <input type="text" 
                                    v-model="first_name"
                                    class="form-control" 
                                    placeholder="Ажилтны нэр оруулна уу...">
                                <small v-if="!$v.first_name.required" class="invalid-feedback">
                                    Нэрээ заавал оруулна уу!
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-2 col-form-label text-right">И-мэйл хаяг</label>
                    <div class="col-10">
                        <input 
                            type="email" v-model="email" 
                            class="form-control" 
                            placeholder="И-мэйл хаяг оруулна уу...">
                        <small v-if="!$v.email.required" class="invalid-feedback">
                            И-мэйл хаяг заавал оруулна уу!
                        </small>
                        <small v-if="!$v.email.email && $v.email.required" class="invalid-feedback">
                            И-мэйл хаягаа зөв оруулна уу!
                        </small>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-2 col-form-label text-right">Нууц үг</label>
                    <div class="col-10">
                        <input type="password" 
                            v-model="password"
                            class="form-control" 
                            placeholder="Нууц үг оруулна уу...">
                        <small v-if="!$v.password.required" class="invalid-feedback">
                            Нууц үг заавал оруулна уу!
                        </small>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-2 col-form-label text-right">Утасны дугаар</label>
                    <div class="col-10">
                        <input 
                            type="text" v-model="phone" 
                            class="form-control" 
                            placeholder="Утасны дугаар оруулна уу...">
                            <small v-if="!$v.password.required" class="invalid-feedback">
                                Утасны дугаар заавал оруулна уу!
                            </small>
                    </div>
                </div>

                <fieldset class="form-group">
                    <div class="row">
                        <legend class="col-form-label col-sm-2 pt-0 text-right">Эрх</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    type="radio"
                                    id="option1" 
                                    name="role"
                                    v-model="role"
                                    value="2">
                                <label class="form-check-label" for="option1">
                                    Ажилтан
                                </label>
                            </div>
                            <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    type="radio" 
                                    id="option2"
                                    name="role"
                                    v-model="role"
                                    value="1">
                                <label class="form-check-label" for="option2">
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
import { required, email} from "vuelidate/lib/validators"
import UserService from '../../../services/UserService.js'
import SelectImage from './../../../components/form/image.vue'

export default {
    name: 'CreateUser',

    components: {
        'select-image': SelectImage
    },

    data: function() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            phone: '',
            image: '',
            role: 1,

        }
    },

    methods: {
        back: function() {
            this.$router.push({
                name: 'ManageEmployeeList',
            });
        },

        signup: function() {
            if ( !this.$v.$invalid ) {
                let params = new FormData();
                params.append('first_name', this.first_name)
                params.append('last_name', this.last_name)
                params.append('email', this.email)
                params.append('password', this.password)
                params.append('image', this.image)
                params.append('phone', this.phone)
                params.append('role', this.role)
                
                UserService.storeEmployee(params).then(res => {
                    if ( res && res.status == 201 ) {
                        if ( res.data.status ) {
                            this.$router.push({
                                name: 'ManageEmployeeList'
                            });
                        }
                    }
                })
                .catch(err => {
                    console.log('err when store new user => ', err)
                })
            }
            else {
                this.$v.first_name.$touch();
                this.$v.last_name.$touch();
                this.$v.email.$touch();
                this.$v.password.$touch();
                this.$v.image.$touch();
                this.$v.phone.$touch();
            }
        }
    },

    validations: {
        email: {
            required,
            email
        },

        password: {
            required
        },

        first_name: {
            required
        },

        last_name: {
            required
        },

        image: {
            required
        },

        phone: {
            required
        },
    }
}
</script>
<style scoped>
.btn {
    width: 150px;
}
.invalid-feedback {
    display: block
}
</style>
