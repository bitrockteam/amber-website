<template>
  <SWUpdatePopup>
    <amber-banner
      title="New content available."
      labels="Refresh"
      active
      @confirm="refresh"
    />
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from "@vuepress/plugin-pwa/lib/SWUpdatePopup.vue";

export default {
  components: { SWUpdatePopup },
  methods: {
    refresh() {
      location.reload();
    }
  }
};
</script>
