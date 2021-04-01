<template>
  <div class="q-pa-md row justify-center  q-gutter-lg">

    <q-card class="my-card  bg-primary shadow-15 text-white">
      <!-- <q-card-section>
        <div class="text-h3">Feedback</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section> -->

      <q-card-section>
         <div class="text-h6 text-center"> Bagaimana Kepuasan Anda ? :)</div>
         <br>
         <br>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 text-center text-body1 ">
            1. Kualitas Data
          </div>
          <div class="col-12 col-md-6 text-center ">
            <q-rating v-model="ratingKualitas" size="3.5em" color="secondary" icon="star_border" icon-selected="star" />
          </div>

          <div class="col-12 col-md-6 text-center text-body1">
            2. Pelayanan Data
          </div>
          <div class="col-12 col-md-6 text-center ">
            <q-rating v-model="ratingPelayanan" size="3.5em" color="secondary" icon="star_border" icon-selected="star" />
          </div>

          <div class="col-12 col-md-6 text-center text-body1">
            3. Akses Data
          </div>
          <div class="col-12 col-md-6 text-center ">
            <q-rating v-model="ratingAkses" size="3.5em" color="secondary" icon="star_border" icon-selected="star" />
          </div>

          <div class="col-12 col-md-6 text-center text-body1">
            4. Sarana dan Prasarana Layanan
          </div>
          <div class="col-12 col-md-6 text-center ">
            <q-rating v-model="ratingSarana" size="3.5em" color="secondary" icon="star_border" icon-selected="star" />
          </div>

          <div class="col-12 col-md-6 text-center text-body1">
            5. Data BPS Menjadi Rujukan Utama ?
          </div>
          <div class="col-12 col-md-6 text-center text-body1">
            <q-btn-toggle v-model="model" toggle-color="secondary" color="white"  text-color="primary" toggle-text-color="white" :options="[
                    {label: 'Iya', value: 'iya'},
                    {label: 'Ngga', value: 'tidak'},
                ]" />
          </div>

        </div>
        <br>
        <q-btn color="secondary" text-color="white" label="Simpan" class="full-width" icon="send" @click="simpan()" />
      </q-card-section>
    </q-card>

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6"  text-color="primary" >Terima Kasih :)</div>
        </q-card-section>

        <q-card-section class="q-pt-none"  text-color="primary" >
          Terima kasih atas respon anda :)
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>

</template>

<script>
  // import axios from '../../../spesial/src/boot/axios'
  export default {
    data () {
      return {
        lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        ratingKualitas: null,
        ratingPelayanan: null,
        ratingAkses: null,
        ratingSarana: null,
        model: null,
        alert: false

      }
    },
    firestore () {
      // var user = this.$firebase.auth().currentUser
      return {

        // pesans: this.$firebase.firestore().collection('pesans').where('status', '==', true),
        feedbacks: this.$firebase.firestore().collection('feedbacks')

        // user_arsip: this.$firebase.firestore().collection('data_arsip').where('user_id', '==', user.uid)
      }
    },
    methods: {
      async simpan () {
        console.log(this.model)
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        const currentTime = new Date().toLocaleString('en-US', {
          timeZone: timezone
        })
        await this.$firestore.feedbacks.add({

          ratingKualitas: this.ratingKualitas,
          ratingPelayanan: this.ratingPelayanan,
          ratingAkses: this.ratingAkses,
          ratingSarana: this.ratingSarana,
          rujukan: this.model,
          time: currentTime
        })
        this.alert = true
      }
    }
  }

</script>
<style lang="sass" scoped>
.my-card
  border-radius: 20px
  width: 800px

</style>
