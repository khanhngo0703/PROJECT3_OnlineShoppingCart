<template>
    <!-- NAVBAR -->
    <nav>
        <i class='bx icon-bars fa fa-bars'></i>
        
        <input type="checkbox" id="switch-mode" hidden>
        <label for="switch-mode" class="switch-mode" style="margin-left: 1000px;"></label>
        
        <a href="#" class="profile">
            <img src="img/people.png">
        </a>
    </nav>
    <!-- NAVBAR -->
</template>

<script>

export default {
    name: 'SidebarAdmin',
    components: {

    }
}
</script>
<style scoped>
@import '@/assets/style.css';
</style>