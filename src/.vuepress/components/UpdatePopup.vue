<template>
  <SWUpdatePopup>
    <section slot-scope="{ reload, message, buttonText, updateEvent, enabled }">
      <amber-banner
        v-bind:title="message"
        v-bind:labels="buttonText"
        v-bind:active="enabled"
        v-on:confirm="reload"
      ></amber-banner>
    </section>    
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from "@vuepress/plugin-pwa/lib/SWUpdatePopup.vue";

export default {
  components: { SWUpdatePopup }
};
</script>
