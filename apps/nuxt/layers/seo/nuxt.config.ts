import path from 'node:path'
import process from 'node:process'

import { defineLocalBusiness } from 'nuxt-schema-org/schema'

// TODO: Fill in seo data
export default defineNuxtConfig({
  alias: {
    '@payload': path.resolve(__dirname, '../payload/src'),
    '@payload-types': path.resolve(__dirname, '../payload'),
    '~base': path.resolve(__dirname, '../base'),
  },

  extends: [
    '../base',
  ],

  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org',
  ],
  schemaOrg: {
    identity: defineLocalBusiness({
      // Basic Information
      'name': 'Template',
      '@type': 'EmploymentAgency',
      'address': {
        addressCountry: 'Belgium',
        addressLocality: 'Diepenbeek',
        addressRegion: 'Flanders',
        postalCode: '3590',
        streetAddress: 'Watertorenstraat 2',
      },
      'logo': '/logo.png',
      'url': 'https://wisemen.digital',
    }),
  },
  site: {
    title: 'Template',
    description: 'Fill this in!',
    url: 'https://wisemen.digital',
  },

  sitemap: {
    cacheMaxAgeSeconds: 1 * 60 * 60 * 24,
    experimentalCompression: true,
    experimentalWarmUp: true,
    sources: [
      `${process.env.NUXT_PUBLIC_CMS_BASE_URL}/api/sitemap?locale=nl`,
      `${process.env.NUXT_PUBLIC_CMS_BASE_URL}/api/sitemap?locale=en`,
      `${process.env.NUXT_PUBLIC_CMS_BASE_URL}/api/sitemap?locale=fr`,
    ],
  },

})
