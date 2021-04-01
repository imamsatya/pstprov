<template>

  <div class="">
    <br>
    <br>

    <!-- <div class="q-pa-md row items-start bg-blue-1 q-gutter-lg"> -->
    <div class="row justify-around q-col-gutter-lg">
      <div class="col-12 col-md-6 column items-center futura">
        <q-card class="my-card  shadow-15">
          <q-card-section>
            <div class="row q-col-gutter-md">
              <canvas id="kualitas-data">

              </canvas>
            </div>
            <br>
          </q-card-section>
        </q-card>

      </div>
      <div class="col-12 col-md-6 column items-center futura">
        <q-card class="my-card shadow-15">
          <q-card-section>
            <div class="row q-col-gutter-md">
              <canvas id="pelayanan-data">

              </canvas>
            </div>
            <br>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-6 column items-center futura">
        <q-card class="my-card shadow-15">
          <q-card-section>
            <div class="row q-col-gutter-md">
              <canvas id="akses-data">

              </canvas>
            </div>
            <br>
          </q-card-section>
        </q-card>
      </div>
       <div class="col-12 col-md-6 column items-center futura">
        <q-card class="my-card shadow-15">
          <q-card-section>
            <div class="row q-col-gutter-md">
              <canvas id="sarana-data">

              </canvas>
            </div>
            <br>
          </q-card-section>
        </q-card>
      </div>
       <div class="col-12 col-md-12 column items-center futura">
        <q-card class="my-card shadow-15">
          <q-card-section>
            <div class="row q-col-gutter-md">
              <p class="justify-center" align="center">Rujukan Data</p>
              <canvas id="rujukan-data">

              </canvas>
            </div>
            <br>
          </q-card-section>
        </q-card>
      </div>
      <!-- <div class="col-12 col-md-6 column items-center futura">
        <q-card class="my-card shadow-15">
          <q-card-section>
            <div class="row q-col-gutter-md">
              <canvas id="sarana-data">

              </canvas>
            </div>
            <br>
          </q-card-section>
        </q-card>
      </div> -->
    </div>
    <br>
    <br>

    <!-- </div> -->
    <div>

    </div>

  </div>
</template>

<script>
  // export default {
  //   name: 'PageIndex'
  // }

  import Chart from 'chart.js'

  // import { Chart } from 'highcharts-vue'
  export default {
    // components: {
    //   highcharts: Chart
    // },
    data () {
      return {
        ChartDataKualitas: {
          type: 'horizontalBar',
          data: {
            labels: ['5', '4', '3', '2', '1'],
            datasets: [{ // one line graph
                label: 'Kualitas Data',
                // 5,4,3,2,1
                data: [0, 0, 0, 0, 0],
                backgroundColor: [
                  'rgb(229,49,112)', // Blue
                  'rgb(229,49,112)',
                  'rgb(229,49,112)',
                  'rgb(229,49,112)',
                  'rgb(229,49,112)'
                ],
                borderColor: [
                  '#b3174d',
                  '#b3174d',
                  '#b3174d',
                  '#b3174d',
                  '#b3174d'
                ],
                borderWidth: 3

              }

            ]
          },
          options: {
            legend: {
            labels: {
                // This more specific font property overrides the global property

            }
        },
            responsive: true,
            lineTension: 1,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }]
            }
          }
        },
        ChartDataPelayanan: {
          type: 'horizontalBar',
          data: {
            labels: ['5', '4', '3', '2', '1'],
            datasets: [{ // one line graph
                label: 'Pelayanan Data',
                // 5,4,3,2,1
                data: [0, 0, 0, 0, 0],
                backgroundColor: [
                  'rgb(229,49,112)', // Blue
                  'rgb(229,49,112)',
                  'rgb(229,49,112)',
                  'rgb(229,49,112)',
                  'rgb(229,49,112)'
                ],
                borderColor: [
                  '#b3174d',
                  '#b3174d',
                  '#b3174d',
                  '#b3174d',
                  '#b3174d'
                ],
                borderWidth: 3
              }
              // { // another line graph
              //   label: 'Planet Mass (x1,000 km)',
              //   data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
              //   backgroundColor: [
              //     'rgba(71, 183,132,.5)' // Green
              //   ],
              //   borderColor: [
              //     '#47b784'
              //   ],
              //   borderWidth: 3
              // }
            ]
          },
          options: {
            responsive: true,
            lineTension: 1,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }]
            }
          }
        },
         ChartDataAkses: {
          type: 'horizontalBar',
          data: {
            labels: ['5', '4', '3', '2', '1'],
            datasets: [{ // one line graph
                label: 'Akses Data',
                // 5,4,3,2,1
                data: [0, 0, 0, 0, 0],
                backgroundColor: [
                  'rgb(229,49,112)', // Blue
                  'rgb(229,49,112)',
                  'rgb(229,49,112)',
                  'rgb(229,49,112)',
                  'rgb(229,49,112)'
                ],
                borderColor: [
                  '#b3174d',
                  '#b3174d',
                  '#b3174d',
                  '#b3174d',
                  '#b3174d'
                ],
                borderWidth: 3
              }
              // { // another line graph
              //   label: 'Planet Mass (x1,000 km)',
              //   data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
              //   backgroundColor: [
              //     'rgba(71, 183,132,.5)' // Green
              //   ],
              //   borderColor: [
              //     '#47b784'
              //   ],
              //   borderWidth: 3
              // }
            ]
          },
          options: {
            responsive: true,
            lineTension: 1,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }]
            }
          }
        },
        ChartDataSarana: {
          type: 'horizontalBar',
          data: {
            labels: ['5', '4', '3', '2', '1'],
            datasets: [{ // one line graph
                label: 'Sarana dan Prasarana',
                // 5,4,3,2,1
                data: [0, 0, 0, 0, 0],
                backgroundColor: [
                  'rgb(229,49,112)', // Blue
                  'rgb(229,49,112)',
                  'rgb(229,49,112)',
                  'rgb(229,49,112)',
                  'rgb(229,49,112)'
                ],
                borderColor: [
                  '#b3174d',
                  '#b3174d',
                  '#b3174d',
                  '#b3174d',
                  '#b3174d'
                ],
                borderWidth: 3
              }
              // { // another line graph
              //   label: 'Planet Mass (x1,000 km)',
              //   data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
              //   backgroundColor: [
              //     'rgba(71, 183,132,.5)' // Green
              //   ],
              //   borderColor: [
              //     '#47b784'
              //   ],
              //   borderWidth: 3
              // }
            ]
          },
          options: {
            responsive: true,
            lineTension: 1,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }]
            }
          }
        },
        ChartDataRujukan: {
          type: 'doughnut',
          data: {
            labels: ['iya', 'tidak'],
            datasets: [{ // one line graph
                label: 'Rujukan',
                // 5,4,3,2,1
                data: [0, 0],
                backgroundColor: [
                  '#3170e5', // Blue
                  'rgb(229,49,112)'
                ],
                borderColor: [
                  '#1d4389',
                  '#b3174d'
                ],
                borderWidth: 3
              }
              // { // another line graph
              //   label: 'Planet Mass (x1,000 km)',
              //   data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
              //   backgroundColor: [
              //     'rgba(71, 183,132,.5)' // Green
              //   ],
              //   borderColor: [
              //     '#47b784'
              //   ],
              //   borderWidth: 3
              // }
            ]
          },
          options: {
            responsive: true,
            lineTension: 1
            // scales: {
            //   yAxes: [{
            //     ticks: {
            //       beginAtZero: true,
            //       padding: 25
            //     }
            //   }]
            // }

          }
        },
        ratingKualitas: {
          series: [{
            data: [] // sample data
          }]
        },
        ratingPelayanan: {
          series: [{
            data: [] // sample data
          }]
        },
        ratingAkses: {
          series: [{
            data: [] // sample data
          }]
        }
      }
    },
    created () {
      this.$q.addressbarColor.set('#7861a9')
    },
    firestore () {
      // var user = this.$firebase.auth().currentUser
      return {

        // pesans: this.$firebase.firestore().collection('pesans').where('status', '==', true),
        feedbacks: this.$firebase.firestore().collection('feedbacks')

        // user_arsip: this.$firebase.firestore().collection('data_arsip').where('user_id', '==', user.uid)

      }
    },
    mounted () {
      console.log('feedbacks mounted', this.feedbacks)
      this.getdataKualitasData()
      this.getdataPelayananData()
      this.getdataAksesData()
      this.getdataSaranaData()
      this.getdataRujukanData()
    },
    methods: {
      async getdataKualitasData () {
        await this.$binding('feedbacks', this.$firebase.firestore().collection('feedbacks'))
          .then((feedbacks) => {
            feedbacks.forEach(element => {
              // console.log(element.ratingAkses)
              // console.log('dataset', this.ChartData.data.datasets[0].data[0])
              switch (element.ratingKualitas) {
                case 5:
                  this.ChartDataKualitas.data.datasets[0].data[0]++
                  break
                case 4:
                  this.ChartDataKualitas.data.datasets[0].data[1]++
                  break
                case 3:
                  this.ChartDataKualitas.data.datasets[0].data[2]++
                  break
                case 2:
                  this.ChartDataKualitas.data.datasets[0].data[3]++
                  break
                case 1:
                  this.ChartDataKualitas.data.datasets[0].data[4]++
                  break

                default:
                  break
              }
              // this.ratingKualitas.series[0].data.push(element.ratingKualitas)
            })
            // => __ob__: Observer
            this.createChart('kualitas-data', this.ChartDataKualitas)
          })
      },
      async getdataPelayananData () {
        await this.$binding('feedbacks', this.$firebase.firestore().collection('feedbacks'))
          .then((feedbacks) => {
            feedbacks.forEach(element => {
              // console.log(element.ratingAkses)
              // console.log('dataset', this.ChartData.data.datasets[0].data[0])
              switch (element.ratingPelayanan) {
                case 5:
                  this.ChartDataPelayanan.data.datasets[0].data[0]++
                  break
                case 4:
                  this.ChartDataPelayanan.data.datasets[0].data[1]++
                  break
                case 3:
                  this.ChartDataPelayanan.data.datasets[0].data[2]++
                  break
                case 2:
                  this.ChartDataPelayanan.data.datasets[0].data[3]++
                  break
                case 1:
                  this.ChartDataPelayanan.data.datasets[0].data[4]++
                  break

                default:
                  break
              }
              // this.ratingKualitas.series[0].data.push(element.ratingKualitas)
            })
            // => __ob__: Observer
            this.createChart('pelayanan-data', this.ChartDataPelayanan)
          })
      },
      async getdataAksesData () {
        await this.$binding('feedbacks', this.$firebase.firestore().collection('feedbacks'))
          .then((feedbacks) => {
            feedbacks.forEach(element => {
              // console.log(element.ratingAkses)
              // console.log('dataset', this.ChartData.data.datasets[0].data[0])
              switch (element.ratingAkses) {
                case 5:
                  this.ChartDataAkses.data.datasets[0].data[0]++
                  break
                case 4:
                  this.ChartDataAkses.data.datasets[0].data[1]++
                  break
                case 3:
                  this.ChartDataAkses.data.datasets[0].data[2]++
                  break
                case 2:
                  this.ChartDataAkses.data.datasets[0].data[3]++
                  break
                case 1:
                  this.ChartDataAkses.data.datasets[0].data[4]++
                  break

                default:
                  break
              }
              // this.ratingKualitas.series[0].data.push(element.ratingKualitas)
            })
            // => __ob__: Observer
            this.createChart('akses-data', this.ChartDataAkses)
          })
      },
      async getdataSaranaData () {
        await this.$binding('feedbacks', this.$firebase.firestore().collection('feedbacks'))
          .then((feedbacks) => {
            feedbacks.forEach(element => {
              // console.log(element.ratingAkses)
              // console.log('dataset', this.ChartData.data.datasets[0].data[0])
              switch (element.ratingSarana) {
                case 5:
                  this.ChartDataSarana.data.datasets[0].data[0]++
                  break
                case 4:
                  this.ChartDataSarana.data.datasets[0].data[1]++
                  break
                case 3:
                  this.ChartDataSarana.data.datasets[0].data[2]++
                  break
                case 2:
                  this.ChartDataSarana.data.datasets[0].data[3]++
                  break
                case 1:
                  this.ChartDataSarana.data.datasets[0].data[4]++
                  break

                default:
                  break
              }
              // this.ratingKualitas.series[0].data.push(element.ratingKualitas)
            })
            // => __ob__: Observer
            this.createChart('sarana-data', this.ChartDataSarana)
          })
      },
       async getdataRujukanData () {
        await this.$binding('feedbacks', this.$firebase.firestore().collection('feedbacks'))
          .then((feedbacks) => {
            feedbacks.forEach(element => {
              // console.log(element.ratingAkses)
              // console.log('dataset', this.ChartData.data.datasets[0].data[0])
              switch (element.rujukan) {
                case 'iya':
                  this.ChartDataRujukan.data.datasets[0].data[0]++
                  break
                case 'tidak':
                  this.ChartDataRujukan.data.datasets[0].data[1]++
                  break
                default:
                  break
              }
              // this.ratingKualitas.series[0].data.push(element.ratingKualitas)
            })
            // => __ob__: Observer
            this.createChart('rujukan-data', this.ChartDataRujukan)
          })
      },
      createChart (chartId, chartData) {
        const ctx = document.getElementById(chartId)
        const myChart = new Chart(ctx, {
          type: chartData.type,
          data: chartData.data,
          options: chartData.options
        })
        console.log(myChart)
      },
      a () {
        this.chartOptions.series[0].data.push(9)
        console.log('feedbacks', this.feedbacks)
        console.log(this.chartOptions.series[0].data)
      }
    }

  }

</script>
<style lang="sass" scoped>
  .my-card
    border-radius: 20px
    // max-width: 550px
    // max-height: 400px
    width: 550px
    max-height: 400px

</style>
