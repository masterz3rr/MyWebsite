<template>
    <div class="container" data-aos="fade" data-aos-delay="100">
        <div class="about">
            <div class="row justify-content-end">
                <div class="col-md-8 text-center">
                    <a href="#section-a" class="arrow">
                        <i class="fas fa-long-arrow-alt-up fa-2x"></i>
                    </a><br>
                </div>
                <div class="col-md-8 content">

                    <p>Hi, I am JERRY ALE from the Philippines living in the central part of the country named Bohol. I
                        created this simple profile website from scratch using the following tools and frameworks</p>
                </div>
            </div>
            <div class="row justify-content-end">
                <div class="col-md-4 text-center image-tools">
                    <img class="image-des" src="/images/photoshop.png" alt="Image here" data-aos="fade-up"
                        data-aos-duration="2000">
                    <img class="image-des bot" src="/images/illustrator.png" alt="Image here" data-aos="fade-down"
                        data-aos-duration="2000">
                    <img class="image-des" src="/images/xd.png" alt="Image here" data-aos="fade-left"
                        data-aos-duration="2000">
                    <p>DESIGN</p>
                </div>
                <div class="col-md-4 text-center image-tools" v-scrollanimation>
                    <img class="image-des" src="/images/laravel.png" alt="Image here" data-aos="fade-up"
                        data-aos-duration="2000">
                    <img class="image-des bot" src="/images/vue.png" alt="Image here" data-aos="fade-down"
                        data-aos-duration="2000">
                    <img class="image-des" src="/images/javascript.png" alt="Image here" data-aos="fade-left"
                        data-aos-duration="2000">
                    <img class="image-des bot" src="/images/html.png" alt="Image here" data-aos="fade-right"
                        data-aos-duration="2000">
                    <img class="image-des" src="/images/bootstrap.png" alt="Image here" data-aos="fade-up"
                        data-aos-duration="2000">
                    <p>DEVELOPMENT</p>
                </div>
            </div>

            <div class="row justify-content-end">
                <div class="col-md-8 text-center">
                    <p>Click here to see my profile</p>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }

</script>
<style>
    .about {
        position: relative;
        height: 100vh;
        width: 100%;
        padding: 20vh 0;
    }

    .about .content {
        text-align: center;
    }

    .image-des {
        height: 60px;
        width: auto;
    }

    .bot {
        margin-top: 200px;
    }

    .image-tools p {
        margin-top: 30px;
        font-weight: 700;
    }

    .click {
        position: relative;
        background-color: #282828;
        color: #fff;
        padding: 5px 25px;
        width: fit-content;
        margin: 80px auto;
    }

    .before-enter {
        opacity: 0;
        transition: opacity 1s ease-in;
    }

    .enter {
        opacity: 1;
    }

    .arrow {
        display: block;
        padding: 5px 10px;
        margin: 3px;
    }

</style>
