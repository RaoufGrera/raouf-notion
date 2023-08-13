import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '799f104d52a94479b25c6b5b02b809a5',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Abdalraouf Grera blog',
  domain: 'Grera.ly',
  author: 'Abdalraouf Grera',

  // open graph metadata (optional)
  description: 'Blog talking about programming language and explore AI',

  // social usernames (optional)
  twitter: 'raoufgr',
  github: 'RaoufGrera',
  linkedin: 'raoufgr',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  // navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '614babd8c53647628c45398002d99453'
    },
    //   {
    //     title: 'Contact',
    //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    //   }
  ]
})
