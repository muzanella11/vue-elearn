<template>
  <div></div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import * as AUTH from '@/store/modules/auth/types'

export default {
  name: 'logout',
  mounted () {
    if (this.isAuthenticated) {
      this.AUTH_DEAUTHENTICATE()
    }
    document.title = `Administrator`
    this.$router.push({name: 'login'})
  },

  computed: {
    ...mapGetters({
      isAuthenticated: AUTH.IS_AUTHENTICATED
    })
  },

  methods: {
    ...mapActions({
      AUTH_DEAUTHENTICATE: AUTH.AUTH_DEAUTHENTICATE
    })
  }
}
</script>
