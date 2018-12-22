<template>
    <div class="container">
        <div class="row">
            <div class="col-6 mx-auto">
                <div class="card my-5 p-3">
                    <div class="card-body">
                        <h4 class="card-title text-center">
                            Нэвтрэх
                        </h4>
                        <hr class="my-4">
                        <div class="form-group row">
                            <label class="col-3 col-form-label text-right"> И-мэйл хаяг</label>
                            <div class="col-9">
                                <input type="email" 
                                    class="form-control" 
                                    v-model="email"
                                    placeholder="И-мэйл хаяг" 
                                    required autofocus />

                                <small v-if="!$v.email.required" class="invalid-feedback">
                                    Та и-мэйл хаягаа заавал оруулна уу!
                                </small>
                                <small v-if="!$v.email.email && $v.email.required" class="invalid-feedback">
                                    Та и-мэйл хаягаа зөв оруулна уу!
                                </small>
                            </div>
                        </div>
                            <div class="form-group row">
                                <label class="col-3 col-form-label text-right"> Нууц үг</label>
                                <div class="col-9">
                                    <input type="password"
                                        v-model="password"
                                        class="form-control"
                                        placeholder="Нууц үг" required >
                                    <small v-if="!$v.password.required" class="invalid-feedback">
                                        Та нууц үг ээ заавал оруулна уу!
                                    </small>
                                </div>
                            </div>

                            <button 
                                @click.prevent="handleLogin"
                                class="btn btn-lg btn-primary btn-block mt-4" >
                                Нэвтрэх
                            </button>

                            <div 
                                v-if="error"
                                class="text-danger text-center mt-1">
                                <small> {{ error }} </small>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { required, email} from "vuelidate/lib/validators"
import { grantType, clientId, clientSecret } from '../../constant/env.js'
import UserService from '../../services/UserService.js'
export default {
    name: 'LoginPage',

    data: function() {
        return {
            email: 'quitzon.elwin@example.net',
            password: 'secret',
            error: null
        }
    },

    created: function() {
        if ( localStorage.getItem('auth') ) {
            this.$router.push({ 
                name: 'Home'
            });
        }
    },

    methods: {
        handleLogin() {
            if ( !this.$v.$invalid ) {
                const postData = {
                    grant_type: grantType,
                    client_id: clientId,
                    client_secret: clientSecret,
                    username: this.email,
                    password: this.password,
                    scope: ''
                }
                let auth = {}
                UserService.login(postData).then(response => {
                    if ( response && response.status === 200 ) {
                        this.error = null
                        auth.access_token = response.data.access_token
                        auth.refresh_token = response.data.refresh_token
                        this.$store.dispatch('setAuthObject', auth)
                        localStorage.setItem('auth', JSON.stringify(auth))
                        
                        UserService.getAuthUser().then(response => {
                            if ( response && response.status === 200 ) {
                                this.$store.dispatch('setProfileObject', response.data)
                                this.$router.push({ 
                                    name: 'Home'
                                });
                            }
                        })
                    }
                    else {
                        this.error = 'Та и-мэйл хаяг болон нууц үг ээ зөв эсэхийг шалгана уу!'
                    }
                })
                .catch(err => {
                    this.error = 'Та и-мэйл хаяг болон нууц үг ээ зөв эсэхийг шалгана уу!'
                    console.log(err)
                })
            }
            else {
                this.$v.email.$touch();
                this.$v.password.$touch();
            }
        },
    },

    validations: {
        email: {
            required,
            email
        },
        password: {
            required
        }
    }
}
</script>

<style scoped>
.card {
    border-radius: 1.5rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}
.btn {
    border-radius: 1.5rem;
}

input {
    border-radius: 1.5rem;
}

.invalid-feedback {
    display: block
}
</style>