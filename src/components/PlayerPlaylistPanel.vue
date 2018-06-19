<template>
  <v-card height="330" :class="{playlist}">
    <v-list>
      <v-list-tile 
        v-for="(track, index) in playlist" 
        :key="track.title"
        v-show="track.display"
        :class="[{selected: track === selectedTrack}, {even: index % 2 == 0}]">
        <v-list-tile-content @click="selectTrack(track)" @dblclick="playTrack()">
          <v-list-tile-title>{{ index | numbers }} {{ track.artist }} - {{ track.title }}</v-list-tile-title>
        </v-list-tile-content>
        <v-spacer></v-spacer>
        {{ track.howl.duration() | minutes }}
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    props: {
      playlist: Array,
      selectedTrack: Object
    },
    methods: {
      selectTrack (track) {
        this.$emit('selecttrack', track)
      },
      playTrack(index) {
        this.$emit('playtrack', index)
      }
    } 
  }
</script>

<style scoped>
  .selected {
    background-color:  orange !important;
  }
  .even {
    background-color: #505050
  }
  .playlist {
    overflow: auto
  }
</style>