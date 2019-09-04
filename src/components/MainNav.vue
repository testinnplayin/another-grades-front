<template>
    <b-navbar class="main-nav" toggleable="md" type="dark">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
        <b-collapse id="nav-collapse" is-nav>
            
            <b-navbar-nav class="main-nav-left">
                <b-nav-item 
                    to="/"
                    class="main-nav-btn"
                    :class="($route.name === 'home') ? 'main-nav-active' : null">Home</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav>

                <b-nav-item-dropdown
                    id="class-dd"
                    right
                    text="Classes">
                    <b-dropdown-item v-for="(cItem, i) of classDDItems"
                        :key="`class-dd-${i}`"
                        :to="cItem.route"
                        tag="li"
                        class="main-nav-dd-item">
                        {{cItem.name}}
                    </b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown
                    id="student-dd"
                    right
                    text="Students">
                    <b-dropdown-item v-for="(sItem, i) of studentDDItems"
                        :key="`student-dd-${i}`"
                        :to="sItem.route"
                        tag="li"
                        class="main-nav-dd-item">
                        {{sItem.name}}
                    </b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item
                    right
                    to="/stats"
                    class="main-nav-btn"
                    :class="($route.name === 'stats') ? 'main-nav-active' : null">Stats</b-nav-item>

                <b-nav-item 
                    right
                    to="/logout"
                    class="main-nav-btn"
                    :class="($route.name === 'logout') ? 'main-nav-active' : null">Logout</b-nav-item>

            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
/** @module MainNav */

/** @exports MainNav */
export default {
    name : "MainNav",
    /** @namespace data */
    data () {
        return {
            /** @property {Object[]} data.classDDItems - array of objects defining class dropdown */
            classDDItems : [
                {
                    name : "Class Templates",
                    route : "/class-templates"
                },
                                {
                    name : "Class Overview",
                    route : "/class-overview"
                },
                {
                    name : "Current Classes",
                    route : "/current-classes"
                },
                {
                    name : "Other Class Years",
                    route : "/other-classes"
                }
            ],
            /** @property {Object[]} data.studentDDItems - array of objects defining student dropdown */
            studentDDItems : [
                {
                    name : "Student Directory",
                    route : "/students"
                },
                {
                    name : "Grades",
                    route : "/grades"
                }
            ]
        };
    }
}
</script>
