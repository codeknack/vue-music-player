<template>
  <v-toolbar flat>
    <v-text-field 
    clearable 
    prepend-icon="search" 
    placeholder="Quick search"
    v-model="searchString" 
    @input="searchPlaylist">
    </v-text-field>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
  export default {
    props: {
      playlist: Array
    },
    data () {
      return {
        searchString: "",
      }
    },
    methods: {
      searchPlaylist () {
        this.playlist.forEach((track) => {
          if (this.searchString) {
            if (!track.title.toLowerCase().includes(this.searchString.toLowerCase()) && !track.artist.toLowerCase().includes(this.searchString.toLowerCase())) {
              track.display = false
            } else {
              track.display = true
            }
          } else if (this.searchString === "" || this.searchString === null) {
            track.display = true
          }
        })
      }
    },
  }
</script>