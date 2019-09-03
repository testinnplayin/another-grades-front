<template>
    <nav class="main-nav">
        <ul class="main-nav-ul">

            <li class="main-nav-item">
                <router-link 
                    tag="button"
                    to="/"
                    class="main-nav-btn"
                    :class="($route.name === 'home') ? 'main-nav-active' : null">Home</router-link>
            </li>

            <li class="main-nav-item">
                <b-dropdown
                    class="main-nav-dd"
                    id="class-dd"
                    text="Classes">

                </b-dropdown>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name : "MainNav"
}
</script>
