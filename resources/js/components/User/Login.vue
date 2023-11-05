<script>
export default {
    data() {
        return {
            user: {
                email: null,
                password: null,
            },
            message: null,
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/login', this.user)
                        .then(res => {
                            localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                            this.$router.push({ name: 'user.index' })
                        })
                        .catch(e => {
                            this.message = e.message
                        })
                });
        }
    }
}
</script>
<template>
    <div>
        <h1>Login page</h1>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="user.email" type="email" id="email" placeholder="name@localhost" class="form-control">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="user.password" type="password" id="password" placeholder="password" class="form-control">
        </div>
        <div v-if="message" class="mb-3">
            <div class="alert alert-danger" role="alert">
                {{ message }}
            </div>
        </div>
        <div class="mb-3">
            <input @click.prevent="login" type="submit" class="btn btn-primary" value="Login">
        </div>
    </div>
</template>