<template>
    <p>{{ getting }}</p>
</template>

<script>
    module.exports = {
        data: function(){
            return {
                getting: 'hello'
            }
        }
    }
</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>