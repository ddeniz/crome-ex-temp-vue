<template>
  <v-app>
  <div class="portakalplus">
    <div class="header">
      <a href="#" @click="goHome">
        Deniz <span class="text-muted"><small>{{version}}</small></span>
      </a>
      <div class="left">
        <a href="#" @click="toggleShowHelp" class="header-button">
          <img src="/images/help.svg" alt="help" width="18px">
        </a>
        <a href="#" @click="openOptions" class="header-button">
          <img src="/images/settings.svg" alt="settings" width="18px">
        </a>
      </div>
    </div>
    <div class="main">
      <div class="tabs" v-show="!showHelp">
        <LoginSearchTab  v-show="!showResultsTab"/>
        <div class="recording-footer" v-show="!showResultsTab">
          <fishbone-badge></fishbone-badge>
        </div>
      </div>
      <HelpTab v-show="showHelp"></HelpTab>
    </div>
  </div>
 </v-app>
</template>

<script>
  import { version } from '../../../package.json'
  import LoginSearchTab from './LoginSearchTab.vue'
  import HelpTab from './HelpTab.vue'
  import FishboneBadge from './FishboneBadge.vue'

  

export default {
    name: 'App',
    components: {  LoginSearchTab, HelpTab, FishboneBadge },
    data () {
      return {
        options: {},
        showResultsTab: false,
        showHelp: false,
        version,
        currentResultTab: null
      }
    },
    mounted () {
    },
    methods: {
      openOptions () {
        this.trackEvent('Options')
        if (this.$chrome.runtime.openOptionsPage) {
          this.$chrome.runtime.openOptionsPage()
        }
      },
      goHome () {
        this.showResultsTab = false
        this.showHelp = false
      },
      toggleShowHelp () {
        this.trackEvent('Help')
        this.showHelp = !this.showHelp
      },
      trackEvent (event) {
        if (this.options && this.options.extension && this.options.extension.telemetry) {
          if (window._gaq) window._gaq.push(['_trackEvent', event, 'clicked'])
        }
      }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
  @import "~styles/_animations.scss";
  @import "~styles/_variables.scss";
  @import "~styles/_mixins.scss";
  .portakalplus {
    font-size: 14px;

    .header {
      @include header();

      a {
        color: $gray-dark;
      }

      .left {
        margin-left: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .recording-badge {
          color: $brand-danger;
          .red-dot {
            height: 9px;
            width: 9px;
            background-color: $brand-danger;
            border-radius: 50%;
            display: inline-block;
            margin-right: .4rem;
            vertical-align: middle;
            position: relative;
          }
        }

        .header-button {
          margin-left: $spacer;
          img {
            vertical-align: middle;
          }
        }
      }
    }

    .recording-footer {
      @include footer();
      img {
        margin-left: 8px;
        width: 80px;
        vertical-align: middle;
      }
    }
    .results-footer {
      @include footer()
    }
  }
</style>
