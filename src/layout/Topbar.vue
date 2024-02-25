<template>
    <nav>
        <div class="text-center">
            <h3 class="font-weight-bold">PETA SEBARAN SUARA PEMILU 2024 🇮🇩</h3>
            <div class="primary-nav has-mega-menu" style="border-right:0px !important;">
                <ul class="navigation">
                    <li>
                        <!-- KPU Link -->
                        <router-link 
                            to="/" 
                            exact 
                            :class="['', { 'btn rounded btn-xs btn-danger': $route.name === 'kpu' }]" >
                            <img src="@/assets/img/logokpu.png" alt="Icon"
                                style="max-width: 20px; max-height: 20px; vertical-align: middle; margin-right: 5px;">
                            KPU
                        </router-link>
                    </li>
                    <li>
                        <!-- Kawal Pemilu Link -->
                        <router-link 
                            to="/kawalpemilu" 
                            exact 
                            :class="['', { 'btn rounded btn-xs btn-danger': $route.name === 'kawalpemilu' }]">
                            <img src="@/assets/img/logokawalpemilu.png" alt="Icon"
                            style="max-width: 20px; max-height: 20px; vertical-align: middle; margin-right: 5px; background-color: white; border-radius: .5rem; ">
                            Kawal Pemilu
                        </router-link>
                    </li>
                    <li>
                        <!-- KawalAmin Link -->
                        <router-link 
                            to="/kawalamin" 
                            exact 
                            :class="['', { 'btn rounded btn-xs btn-danger': $route.name === 'kawalamin' }]">
                            <img src="@/assets/img/amin.webp" alt="Icon"
                            style="max-width: 20px; max-height: 20px; vertical-align: middle; margin-right: 5px; background-color: white; border-radius: .5rem; ">
                            KawalAmin
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
</script>
