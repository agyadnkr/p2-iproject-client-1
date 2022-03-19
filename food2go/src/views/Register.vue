<template>
  <div>
    <div class="w-full min-h-screen px-16 flex flex-row">
      <div class="w-7/12 flex justify-center items-center">
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_YnsM0o.json"
          background="transparent"
          speed="1"
          style="width: 100%; height: 100%"
          loop
          autoplay
        ></lottie-player>
      </div>
      <div class="w-5/12">
        <div
          class="w-3/4 my-12 mx-12 bg-white rounded-3xl h-auto pb-8 border border-slate-400 flex flex-col"
        >
          <p
            style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
            class="text-4xl py-8"
          >
            Register
          </p>
          <form @submit.prevent="registerSubmit">
            <div
              class="py-4 px-12 text-xl font-bold flex flex-col text-left gap-y-2"
            >
              <label class="pl-4">Username</label>
              <input
                v-model="user.username"
                type="text"
                placeholder="Input Username Here"
                class="border rounded-lg py-4 px-4 text-md font-sans font-normal"
              />
            </div>
            <div
              class="py-4 px-12 text-xl font-bold flex flex-col text-left gap-y-2"
            >
              <label class="pl-4">Email</label>
              <input
                v-model="user.email"
                type="text"
                placeholder="Input Email Here"
                class="border rounded-lg py-4 px-4 text-md font-sans font-normal"
              />
            </div>
            <div
              class="pt-4 pb-8 px-12 text-xl font-bold flex flex-col text-left gap-y-2"
            >
              <label class="pl-4">Password</label>
              <input
                v-model="user.password"
                type="password"
                placeholder="Input Password Here"
                class="border rounded-lg py-4 px-4 text-md font-sans font-normal"
              />
            </div>
            <div
              class="pt-4 pb-8 px-12 text-xl font-bold flex flex-col text-left gap-y-2"
            >
              <label class="pl-4">I'm a</label>
              <select
                v-model="user.role"
                class="border rounded-lg py-4 px-4 text-md font-sans font-normal"
              >
                <option value="">Select here</option>
                <option value="Customer">Customer</option>
                <option value="Owner">Restaurant Owner</option>
              </select>
            </div>
            <ButtonMd :text="'Register'" :isLoading="isLoading"></ButtonMd>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonMd from "../components/buttons/ButtonMd.vue";
import { mapActions } from "vuex";
export default {
  name: "Register",
  components: {
    ButtonMd,
  },
  data() {
    return {
      isLoading: false,
      user: {
        email: "",
        username: "",
        password: "",
        role: "",
      },
    };
  },
  methods: {
    ...mapActions(["registerHandler"]),
    async registerSubmit() {
      this.isLoading = true;
      const response = await this.registerHandler(this.user);
      this.isLoading = false;
      if (response) {
        this.$router.push({ name: "Login" });
        this.user.email = "";
        this.user.password = "";
        this.user.username = "";
        this.user.role = "";
      }
    },
  },
};
</script>

<style></style>
