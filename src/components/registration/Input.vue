<template>
    <div class="container">
        <form class="pt-5" @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="param">{{ title }}</label>

                <input :type="type"
                       id="param"
                       class="form-control "
                       :class="{'is-invalid': $v.text.$error}"
                       @blur="$v.text.$touch()"
                       v-model="text"
                       @input="returnProps"
                >
                <div class="invalid-feedback" v-if="!$v.text.required">{{title}} field is required</div>

            </div>
        </form>
    </div>
</template>

<script>
    import { alpha, required, email, minLength, sameAs } from 'vuelidate/lib/validators';

    export default {
        props: ['param','type', 'title','vRules'],
        data(){
            return{
                text: ''
            }
        },
        validations: {
            text: {
                required
            },

            confirmPassword: {
                sameAs: sameAs((vue) => {
                    return vue.password
                })
            }
        },

    }
</script>

<style>

</style>