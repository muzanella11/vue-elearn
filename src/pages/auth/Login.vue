<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        login
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapActions } from 'vuex'
  import * as AUTH from '@/store/modules/auth/types'
  export default {
    name: 'login',
    mounted () {
      console.info('hehe : ', process.env.BASE_URL + '/' + process.env.VERSION + '/')
      this.connectionTest({username: 'indonesia', password: 'berjaya'})
    },
    data () {
      return {
        //
      }
    },
    methods: {
      ...mapActions({
        connectionTest: AUTH.AUTH_CONNECTION
      })
    }
  }
</script>

