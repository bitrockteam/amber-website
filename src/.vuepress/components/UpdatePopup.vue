<template>
  <SWUpdatePopup>
    <amber-banner
      state="defult"
      title="New content available."
      labels="Refresh"
      active
    />
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from "@vuepress/plugin-pwa/lib/SWUpdatePopup.vue";

export default {
  components: { SWUpdatePopup }
};
</script>
