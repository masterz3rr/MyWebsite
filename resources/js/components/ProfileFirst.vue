<template>
    <div class="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease" 
    data-aos-once="false">
        <div class="hero-main">
            <div class="row justify-content-end">
                <div class="col-md-8 main-title align-middle">
                    <p class="j-am">I AM</p>
                    <p class="j-name">Jerry Ale</p>
                    <p class="j-title">WEB DEVELOPER/DESIGNER + GRAPHIC ARTIST</p>

                    <a href="#section-b" class="arrow">
                        <i class="fas fa-long-arrow-alt-down fa-2x"></i>
                    </a>
                    
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
    .hero-main {
        position: relative;
        height: 100vh;
        width: 100%;
        background-image: url("/images/mypic.png") cover no-repeat;
    }

   

    .main-title {
        position: relative;
        height: 100vh;
        width: auto;
        text-align: center;
        padding: 300px 0;
        line-height: 30px;
    }
 
    .j-title {
        position: relative;
        background-color: 	#282828;
        color: #fff;
        padding: 5px 25px;
        width: fit-content;
        margin: 100px auto;
    }
    .j-name {
        font-family: "dontheus";
        font-size: 10em;
    }
    .j-am {
        text-align: left;
        margin-left: 10px;
    }

    .arrow {
        color: #000;
    }

    .arrow:hover {
        color: 	#282828;
    }
</style>
