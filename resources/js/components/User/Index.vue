<script>
export default {
    data() {
        return {
            user: {
                id: null,
                name: null,
                email: null,
            }
        }
    },
    methods: {
        getUser() {
            axios.get('/api/user')
                .then(res => {
                    this.user = res.data.data
                })
        }
    },
    mounted() {
        this.getUser()
    }
}
</script>
<template>
    <div>
        <h1>{{user.name}}</h1>
        <small># {{ user.id }}</small>
        <div>Email: {{ user.email }}</div>
    </div>
</template>