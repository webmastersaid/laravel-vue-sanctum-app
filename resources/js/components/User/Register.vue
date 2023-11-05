<script>
export default {
    data() {
        return {
            user: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            },
            message: null,
        }
    },
    methods: {
        register() {
            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/register', this.user)
                        .then(res => {
                            this.$router.push({ name: 'user.index' })
                        })
                        .catch(e => {
                            this.message = e.message
                        })
                })
        }
    }
}
</script>
<template>
    <div>
        <h1>Register page</h1>
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input v-model="user.name" type="text" id="name" placeholder="Bob" class="form-control">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="user.email" type="email" id="email" placeholder="name@localhost" class="form-control">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="user.password" type="password" id="password" placeholder="password" class="form-control">
        </div>
        <div class="mb-3">
            <label for="password_confirmation" class="form-label">Confirm password</label>
            <input v-model="user.password_confirmation" type="password" id="password_confirmation"
                placeholder="confirm password" class="form-control">
        </div>
        <div v-if="message" class="mb-3">
            <div class="alert alert-danger" role="alert">
                {{ message }}
            </div>
        </div>
        <div class="mb-3">
            <input @click.prevent="register" type="submit" class="btn btn-primary" value="Login">
        </div>
    </div>
</template>