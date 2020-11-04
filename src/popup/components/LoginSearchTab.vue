<template>
<div>
    <v-autocomplete
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        color="white"
        v-on:change="itemSelected"
        hide-no-data
        hide-selected
        item-text="Description"
        item-value="CrmId"
        label="Portakal Hesapları"
        placeholder="Aramak için yazınmaya başlayın..."
        prepend-icon="mdi-database-search"
        return-object
      ></v-autocomplete>
</div>
</template>
<script>
  export default {
    name: 'LoginSearchTab',
    data: () => ({
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      model: null,
      search: null,
    }),
    computed: {
      fields () {
        if (!this.model) return []

        return Object.keys(this.model).map(key => {
          return {
            key,
            value: this.model[key] || 'n/a',
          }
        })
      },
      items () {
        return this.entries.map(entry => {
          const Description = entry.Name > this.descriptionLimit
            ? entry.Name.slice(0, this.descriptionLimit) + '...'
            : entry.Name

          return Object.assign({}, entry, { Description })
        })
      },
    },
    watch: {
      search (val) {
        // Items have already been loaded
        if (val.length < 3 || val.length > 15) return

        // Items have already been requested
        if (this.isLoading) return

        this.isLoading = true
        var apiStart = "******";
        // Lazily load input items
        fetch(apiStart + "/restaurant/list/random/5/keyword/" + val)
          .then(res => res.json())
          .then(res => {
            this.entries = res
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      },
    },
    methods: {
      itemSelected(item)  {
      item.type = "setUsernameAndPassword";
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id,item, function(response){
        alert(response);
      });
      });
      },
      parseEventValue (event) {
        if (event.action === 'viewport*') return `width: ${event.value.width}, height: ${event.value.height}`
        if (event.action === 'goto*') return event.href
        if (event.action === 'navigation*') return ''
      }
    }
  }
</script>
<style lang="scss" scoped>


</style>
