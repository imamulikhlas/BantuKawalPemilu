<script setup>
import Header from "@/layout/Header.vue"; 
import Topbar from "@/layout/Topbar.vue";
import Footer from "@/layout/Footer.vue";
</script>

<template>
<head>
<Header/>
</head>

<body class="homepage">

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W4T8S7DD"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <!-- <div id="loadingIndicator" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255, 255, 255, 1); display: flex; justify-content: center; align-items: center; z-index: 9999;">
        <img src="@/assets/img/loading1001.gif" alt="Loading..." />
    </div> -->

    <div class="page-wrapper">
        <header id="page-header">
            <Topbar/>
        </header>
        <!--end page-header-->

        <slot/>
        
        <footer id="page-footer">
            <Footer/>
        </footer>
        <!--end page-footer-->
    </div>
    <!--end page-wrapper-->
</body>

</template>

<script>
</script>