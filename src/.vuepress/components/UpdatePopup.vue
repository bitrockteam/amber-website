<template>
  <SWUpdatePopup>
    <amber-banner
      title="New content available."
      labels="Refresh"
      active
      slot-scope="{ reload }"
      @confirm="reload"
    />
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from "@vuepress/plugin-pwa/lib/SWUpdatePopup.vue";

export default {
  components: { SWUpdatePopup }
};
</script>
