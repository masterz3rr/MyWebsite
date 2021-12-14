<template>
    <div class="image" id="mainscreen">
        <header class="masterhead" id="section-a" ref="profile">
            <profile-first/>
        </header>
        <section class="page-section" id="section-b" ref="about">
            <about-website/>
        </section>
        <home-scroll/>
    </div>
</template>

<script>
    import ProfileFirst from './ProfileFirst.vue'
    import AboutWebsite from './AboutWebsite.vue'
    import HomeScroll from './HomeScroll.vue'

    export default {
        name: 'Homescreen',
        components: {
            'profile-first': ProfileFirst,
            'about-website': AboutWebsite,
            'home-scroll': HomeScroll
        }
    }

</script>
<style>
    html {
        scroll-behavior: smooth;
        transition: opacity 0.4s ease-in-out;
    }

    body {
        overflow: hidden;
    }

    .image {
        background-image: url('/images/mypic.png');
        background-size: 100vh;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    #mainscreen {
        background-position: 140px 5px;
    }

</style>
