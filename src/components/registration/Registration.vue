<template>
        <div>
            <Input :param="name"
                   title="Name"
                   type="text"
                   v-rules="{required}"
            />

            <Input :param="email"
                   title="Email"
                   type="email"
            />

            <Input :param="password"
                   title="Password"
                   type="password"
            />
        </div>


            <!--<div class="form-group">-->
                <!--<label for="email">Email</label>-->
                <!--<input type="email"-->
                       <!--id="email"-->
                       <!--class="form-control "-->
                       <!--:class="{'is-invalid': $v.email.$error}"-->
                       <!--@blur="$v.email.$touch()"-->
                       <!--v-model="email"-->
                <!--&gt;-->
                <!--<div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>-->
                <!--<div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>-->
                <!--<div class="invalid-feedback" v-if="!$v.email.uniqEmail">This email is already exists</div>-->
            <!--</div>-->

            <!--<div class="form-group">-->
                <!--<label for="password">Password</label>-->
                <!--<input type="password"-->
                       <!--id="password"-->
                       <!--class="form-control "-->
                       <!--:class="{'is-invalid': $v.password.$error}"-->
                       <!--@blur="$v.password.$touch()"-->
                       <!--v-model="password"-->
                <!--&gt;-->
                <!--<div class="invalid-feedback" v-if="!$v.password.required">Password field is required</div>-->
                <!--<div class="invalid-feedback" v-if="!$v.password.minLength">-->
                    <!--Min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}.-->
                <!--</div>-->
            <!--</div>-->

            <!--<div class="form-group">-->
                <!--<label for="confirm">Confirm password</label>-->
                <!--<input type="password"-->
                       <!--id="confirm"-->
                       <!--class="form-control "-->
                       <!--:class="{'is-invalid': $v.confirmPassword.$error}"-->
                       <!--@blur="$v.confirmPassword.$touch()"-->
                       <!--v-model="confirmPassword"-->
                <!--&gt;-->
                <!--<div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">Password should match-->
                <!--</div>-->
            <!--</div>-->

            <!--<button class="btn btn-success"-->
                    <!--type="submit"-->
                    <!--:disabled="$v.$invalid"-->
            <!--&gt;Submit</button>-->

</template>

<script>
    import { alpha, required, email, minLength, sameAs } from 'vuelidate/lib/validators';
    import Input from './Input'

    export default {
        data() {
            return{
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        methods: {
            changedData(event){
                // console.log(event)
              this.name =  event

            },
            onSubmit (){
                console.log('Email', this.email);
                console.log('Password', this.password)
            }
        },
        watch:{
            name(){
                console.log(this.name)
            }
        },
        // validations: {
        //     name:{
        //         required,
        //         alpha
        //     },
        //     email: {
        //         required,
        //         email,
        //     },
        //     password: {
        //         required,
        //         minLength: minLength(6)
        //     },
        //     confirmPassword: {
        //         sameAs: sameAs((vue) => {
        //             return vue.password
        //         })
        //     }
        // },
        components: {
            Input
        }

    }
</script>

<style>

</style>
