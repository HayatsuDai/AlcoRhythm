// TODO: .envのインポート
export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  eslint: {
    config: {
      stylistic: {
        indent: 'tab',
        semi: true,
        // ...
      }
    }
  },
  app: {
    head: {
      title: "アルコリズム",
      script: [
        {
          src: 'https://unpkg.com/vue3-google-map',
        },
        {
          // src: `https://maps.googleapis.com/maps/api/js?key=` + GOOGLE_MAPS_API_KEY,
          async: true,
          defer: true
        }
      ]
    }
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: 'アルコリズム',
      short_name: 'アルコリズム',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'icons/エンニュート.png',
          sizes: '36x36',
          type: 'image/png',
        },
        {
          src: 'icons/エンニュート色.png',
          sizes: '48x48',
          type: 'image/png',
        },
        {
          src: "icons/エンニュート.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "icons/エンニュート色.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "icons/エンニュート.png",
          sizes: "128x128",
          type: "image/png"
        },
        {
          src: "icons/エンニュート色.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "icons/エンニュート.png",
          sizes: "152x152",
          type: "image/png"
        },
        {
          src: "icons/エンニュート色.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "icons/エンニュート.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "icons/エンニュート色.png",
          sizes: "384x384",
          type: "image/png"
        },
        {
          src: 'icons/エンニュート.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      navigateFallback: '/'
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 3600,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
  components: [
    {
      path: "@/components",
      pathPrefix: false,
    },
  ],
})