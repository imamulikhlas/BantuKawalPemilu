<template>
  <div id="donations-container">
    <div class="row">
      <div v-for="donation in donations" :key="donation.id" class="col-md-4 mb-4">
        <div class="card shadow h-100">
          <div class="card-body">
            <h5 class="card-title badge badge-success" style="font-size: 18px;">👑 {{ donation.name }}</h5>
            <p class="card-text">Mendukung: <b>Rp {{ donation.donation }} 💸</b></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      donations: []
    };
  },
  mounted() {
    this.loadDonations();
    setInterval(this.loadDonations, 15000);
  },
  methods: {
    async loadDonations() {
      try {
        const response = await fetch('https://api1.bantukawalpemilu.online/data/donations.json');
        const data = await response.json();
        this.donations = data;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
