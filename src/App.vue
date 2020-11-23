<template>
    <div>导航栏 |
        <router-link to='/'>Luna</router-link>
        |
        <router-link to="/xxx">Luna2</router-link>
    </div>
    <hr/>
    <router-view/>
</template>

<script>

    export default {
        name: 'App',
    }
</script>
