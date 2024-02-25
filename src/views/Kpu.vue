<template>
    <div id="page-content">
        <div class="hero-section full-screen has-map has-sidebar">
            <div class="map-wrapper">
                <div id="mapid">
                    <div class="watermark">© BANTUKAWALPEMILU.ONLINE</div>
                </div>

            </div>
            <!--end map-wrapper-->
            <div class="results-wrapper">
                <div class="text-center my-3 font-weight-bold">
                    <h3>Data diambil dari : <a class="font-weight-bold" href="https://pemilu2024.kpu.go.id">KPU.GO.ID</a>
                        <img src="@/assets/img/logokpu.png" class="ml-2" alt="Icon"
                            style="max-width: 40px; max-height: 40px; vertical-align: middle; ">
                    </h3>
                </div>
                <div class="container my-3">
                    <div class="row">
                        <div class="col-12">
                            <div class="card text-center">
                                <div class="card-header bg-secondary" style="color: white;">
                                    <!-- Update Data Terakhir: <b class="badge badge-success" style="font-size: 18px;"><?php echo date('d M Y H:i:s', strtotime($timestamp)); ?> WIB</b> -->
                                </div>
                                <div class="card-body">
                                    <!-- <h5 class="card-title">Total Suara Masuk: <span class="font-weight-bold"> <?php echo $persentaseSuaraMasuk; ?>% </span></h5> -->
                                    <div class="row">
                                        <div class="col-lg-12 mb-3">
                                            <div class="card">
                                                <div class="card-body padding-card-body1">
                                                    <h5 class="card-title">Anies - Muhaimin</h5>
                                                    <img src="@/assets/img/amin.webp" alt="Paslon 2" class="img-fluid mb-3"
                                                        style="max-width: auto; height: 80px;">
                                                    <!-- <p class="card-text"> <?php echo number_format($resultArray['chart']['100025'], 0, '', '.');  ?> </p> -->
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <div class="card">
                                                <div class="card-body padding-card-body1">
                                                    <h5 class="card-title">Prabowo - Gibran</h5>
                                                    <img src="@/assets/img/pragib.webp" alt="Paslon 2" class="img-fluid mb-3"
                                                        style="max-width: auto; height: 80px;">
                                                    <!-- <p class="card-text"> <?php echo number_format($resultArray['chart']['100026'], 0, '', '.');  ?>  </p> -->
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <div class="card">
                                                <div class="card-body padding-card-body1">
                                                    <h5 class="card-title">Ganjar - Mahfud</h5>
                                                    <img src="@/assets/img/gamud.webp" alt="Paslon 2" class="text-center mb-3"
                                                        style="max-width: auto; height: 80px;">
                                                    <!-- <p class="card-text"> <?php echo number_format($resultArray['chart']['100027'], 0, '', '.');  ?> </p> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!--end results-wrapper-->
        </div>
        <!--end hero-section-->
    </div>
    <!--end page-content-->
    <div class="container my-4">
        <div class="card shadow">
            <div class="card-body">
                <h5 class="card-title text-center mb-3">Mengenal Bantukawalpemilu.online</h5>
                <p class="text-justify" style="font-size: 0.9rem; line-height: 1.5;">
                    <strong>Bantukawalpemilu.online</strong> merupakan platform inovatif yang berkomitmen untuk meningkatkan
                    transparansi dan keadilan dalam pemilihan umum Indonesia 2024. Dengan menghimpun data resmi dari
                    <strong>KPU.GO.ID</strong>, <strong>KAWALPEMILU.ORG</strong>, dan <strong>KAWALAMIN.COM</strong>, situs
                    ini menyediakan akses terpadu kepada publik untuk memantau proses pemilu. Melalui visualisasi data yang
                    intuitif dan pembaruan data per Kota/Kabupaten, kami memfasilitasi partisipasi aktif warga dalam
                    mengawasi pemilu, memastikan proses demokrasi berjalan dengan integritas dan keadilan.
                </p>
                <div class="text-center mt-4">
                    <a href="about-us.php" class="btn btn-primary">Pelajari Lebih Lanjut</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 my-3">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title text-center">Distribusi Suara</h5>
                        <canvas id="suaraPaslonPieChart"></canvas>
                    </div>
                </div>
            </div>

            <div class="col-md-6 my-3">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title text-center">Persentase Suara</h5>
                        <!-- Progress Bars Start Here -->
                        <!-- <h6>Anies-Muhaimin</h6>
                            <div class="progress mb-2">
                                <div class="progress-bar" role="progressbar" style="width: <?php echo number_format($persentasePas1, 2); ?>%; background-color: orange;" aria-valuenow="<?php echo number_format($persentasePas1, 2); ?>" aria-valuemin="0" aria-valuemax="100"><?php echo number_format($persentasePas1, 2); ?>%</div>
                            </div>
                            <h6>Prabowo-Gibran</h6>
                            <div class="progress mb-2">
                                <div class="progress-bar" role="progressbar" style="width: <?php echo number_format($persentasePas2, 2); ?>%; background-color: blue;" aria-valuenow="<?php echo number_format($persentasePas2, 2); ?>" aria-valuemin="0" aria-valuemax="100"><?php echo number_format($persentasePas2, 2); ?>%</div>
                            </div>
                            <h6>Ganjar-Mahfud</h6>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: <?php echo number_format($persentasePas3, 2); ?>%; background-color: red;" aria-valuenow="<?php echo number_format($persentasePas3, 2); ?>" aria-valuemin="0" aria-valuemax="100"><?php echo number_format($persentasePas3, 2); ?>%</div>
                            </div> -->
                        <!-- Progress Bars End Here -->
                    </div>
                    <div class="card-body">
                        <!-- <h5 class="card-title text-center font-weight-bold">Total Suara</h5> <h1 class="text-center font-weight-bold"><?php echo number_format($totalSuara, 0, '', '.'); ?></h1> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="card shadow mb-3">
            <div class="card-body">
                <h5 class="card-title text-center mb-3 font-weight-bold">BARISAN RELAWAN DONATUR BANTUKAWALPEMILU.ONLINE
                </h5>
                <!-- Donation -->
                <!-- <DataDonation /> -->

            <h5 class="card-title text-center mb-3">Terimakasih Buat Seluruh Relawan ❤️</h5>
        </div>
    </div>
</div></template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

export default {
  name: 'KpuMap',
  data() {
    return {
      map: null,
    };
  },
  beforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },
  mounted() {
    this.initMap();
    this.fetchDataAndAddLayers();
  },
  methods: {
    initMap() {
      const awalLokasi = [-2.548926, 118.0148634];
      const awalZoom = 5;

      this.map = L.map('mapid').setView(awalLokasi, awalZoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(this.map);

      this.addCustomControl();
    },
    addCustomControl() {
      const controlDiv = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
      controlDiv.innerHTML = '<button style="background-color: #fff; border: none; cursor: pointer; width: 30px; height: 30px; text-align: center;"><i class="fa fa-home"></i></button>';
      controlDiv.title = "Kembali ke awal";
      controlDiv.onclick = () => {
        if (this.map) {
          this.map.flyTo([-2.548926, 118.0148634], 5);
        }
      };

      const customControl = L.Control.extend({
        options: {
          position: 'topleft',
        },
        onAdd: () => controlDiv,
      });

      this.map.addControl(new customControl());
    },
    async fetchDataAndAddLayers() {
      if (!this.map) return;

      try {
        const dataProvKpuUrl = 'https://bantukawalpemilu.online/mantap.php';
        const geojsonUrl = 'https://bantukawalpemilu.online/mantap1.php';

        const hasilPemilu = await axios.get(dataProvKpuUrl).then(res => res.data);
        const geojsonData = await axios.get(geojsonUrl).then(res => res.data);

        this.addGeojsonLayer(geojsonData, hasilPemilu);
      } catch (error) {
        console.error('Error loading data:', error);
        // Tambahkan penanganan error di sini
      }
    },
    addGeojsonLayer(geojsonData, hasilPemilu) {
      if (!this.map) return;

      L.geoJson(geojsonData, {
        style: feature => {
          const kodeProvinsi = feature.properties.kode.toString();
          const dataProvinsi = hasilPemilu.table[kodeProvinsi];
          return {
            color: 'white',
            weight: 1,
            fillColor: this.getColor(dataProvinsi),
            fillOpacity: 0.8,
          };
        },
        onEachFeature: (feature, layer) => {
          const kodeProvinsi = feature.properties.kode.toString();
          const dataProvinsi = hasilPemilu.table[kodeProvinsi];
          if (dataProvinsi) {
            layer.bindPopup(this.getPopupContent(feature, dataProvinsi));
          }
        },
      }).addTo(this.map);
    },
    getColor(dataProvinsi) {
      // Logika untuk menentukan warna
      if (!dataProvinsi) return 'grey';
      const { '100025': pas1, '100026': pas2, '100027': pas3 } = dataProvinsi;
      const max = Math.max(pas1, pas2, pas3);
      if (max === pas1) return 'orange';
      if (max === pas2) return 'blue';
      if (max === pas3) return 'red';
      return 'grey';
    },
    getPopupContent(feature, dataProvinsi) {
      // Pastikan dataProvinsi tersedia
      if (!dataProvinsi) {
        return `<strong>${feature.properties.Propinsi}</strong><br>Data tidak tersedia`;
      }

      const { '100025': pas1, '100026': pas2, '100027': pas3 } = dataProvinsi;
      const totalSuara = pas1 + pas2 + pas3;
      const persenPas1 = ((pas1 / totalSuara) * 100).toFixed(2);
      const persenPas2 = ((pas2 / totalSuara) * 100).toFixed(2);
      const persenPas3 = ((pas3 / totalSuara) * 100).toFixed(2);

      return `
        <strong>${feature.properties.Propinsi}</strong><br>
        Paslon 1: ${pas1} suara (${persenPas1}%)<br>
        Paslon 2: ${pas2} suara (${persenPas2}%)<br>
        Paslon 3: ${pas3} suara (${persenPas3}%)`;
    },
  },
};
</script>

