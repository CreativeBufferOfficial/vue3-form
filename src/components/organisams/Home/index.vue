<template>
  <HeaderLayout />
  <FormContent />
  <FormInput />
  <FooterLayout />
</template>

<script>
import FormInput from "@/components/organisams/Home/formview/";
import FormContent from "@/components/organisams/Home/formcontent/";
import HeaderLayout from "@/components/layouts/header.vue";
import FooterLayout from "@/components/layouts/footer.vue";

export default {
  name: "form-page",
  components: {
    FormInput,
    HeaderLayout,
    FooterLayout,
    FormContent,
  },
  props: {},
};
</script>
