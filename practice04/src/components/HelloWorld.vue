<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to the Vuetify 3 Beta
        </h1>
        <h2 class="display-2 font-weight-bold mb-3">
          안녕하세요! vuecli 적용 프로젝트입니다!
        </h2>


        <p class="subheading font-weight-bold">
          2024.04 ~ ing
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_self"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          Important Link
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    importantLinks: [
      {
        text: 'Github',
        href: 'https://github.com/white-kite/vueprac_2024',
      },
      /*
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
      */
    ],
    whatsNext: [
      {
        text: '1st week',
        href: '/factorialSetup',
      },
      {
        text: '2nd week',
        href: '/search',
      },
      {
        text: '3rd week',
        href: '/timegame',
      },
      {
        text: '4th week : css start',
        href: '/',
      },
      {
        text: '5th week',
        href: '/cssPrac',
      },
    ],
  }),
}
</script>
