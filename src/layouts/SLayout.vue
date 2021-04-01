
<template>
  <q-layout view="hHh LpR fFf">

    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title align="center">
          <q-avatar>
            <!-- <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"> -->
          </q-avatar>
          Survei Kepuasan Konsumen
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="justify" narrow-indicator
        dense>
        <q-route-tab to="/dashboard" class="text-white text-capitalize" name="dashboard" icon="dashboard" label="Dashboard" />
        <q-route-tab to="/" class="text-white text-capitalize" name="mails" icon="feedback" label="Feedback" />
        <q-route-tab to="/report" class="text-white text-capitalize" name="report" icon="table_chart" label="Report" />
      </q-tabs>
    </q-header>

    <q-page-container class="bg-info">
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-primary text-center text-white">
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar> -->
           [ ] dengan  <span class="animate__animated animate__fadeIn animate__infinite text-negative" > ❤ </span>
                <!-- <q-spinner-hearts class="animated 2s infinite fadeIn" color="red" size="2.5em" /> -->
                di Palu
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
