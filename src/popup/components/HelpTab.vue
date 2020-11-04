<template>
  <div class="tab help-tab">
    <div class="content">
      <h4>Giriş</h4>
      <ul>
        <li>Karşınıza çıkan kutuya aramak istediğiniz  <strong>kelimeyi</strong> yazın.</li>
        <li>Gelen seçenekler arasından giriş yapacğınız restorantın üstüne tıklayın.</li>
      </ul>
    </div>
  </div>
  
</template>
<script>
  export default {
    name: 'HelpTab'
  }
</script>
<style lang="scss" scoped>
  @import "~styles/_variables.scss";
  @import "~styles/_mixins.scss";
  @import "~styles/_utils.scss";


  .help-tab {
    .content {
      padding: $spacer;
      text-align: left;

      ul {
        padding-left: 1rem;
      }

      pre {
        background: #272822;
        color: white;
        font-family: monospace;
        padding: 1rem;
        border-radius: 4px;
      }
    }

    .help-footer {
      @include footer();
      font-weight: normal;
      justify-content: flex-end;
      img {
        margin-left: 8px;
        width: 60px;
        vertical-align: middle;
      }
    }
  }
</style>
