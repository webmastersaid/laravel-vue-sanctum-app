<script>
export default {
}
</script>
<template>
    <div class="container">
        <nav class="nav">
            <RouterLink class="nav-link" :to="{ name: 'index' }">Index</RouterLink>
            <RouterLink class="nav-link" :to="{ name: 'user.index' }">User</RouterLink>
            <RouterLink class="nav-link" :to="{ name: 'user.login' }">Login</RouterLink>
            <RouterLink class="nav-link" :to="{ name: 'user.register' }">Register</RouterLink>
        </nav>
        <RouterView></RouterView>
    </div>
</template>
