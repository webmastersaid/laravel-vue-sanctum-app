<script>
export default {
    data() {
        return {
            token: null,
        }
    },
    methods: {
        logout() {
            axios.post('/logout')
                .then(res => {
                    localStorage.removeItem('x_xsrf_token')
                    this.$router.push({ name: 'user.login' })
                })
        },
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token')
        }
    },
    mounted() {
        this.getToken()
    },
    updated() {
        this.getToken()
    }
}
</script>
<template>
    <div class="container">
        <nav class="nav">
            <RouterLink class="nav-link" :to="{ name: 'index' }">Index</RouterLink>
            <RouterLink v-if="token" class="nav-link" :to="{ name: 'user.index' }">User</RouterLink>
            <RouterLink v-if="!token" class="nav-link" :to="{ name: 'user.login' }">Login</RouterLink>
            <RouterLink v-if="!token" class="nav-link" :to="{ name: 'user.register' }">Register</RouterLink>
            <a v-if="token" @click.prevent="logout" href="#" class="nav-link">Logout</a>
        </nav>
        <RouterView :key="$route.fullPath"></RouterView>
    </div>
</template>
