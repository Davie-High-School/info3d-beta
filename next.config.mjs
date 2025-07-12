import { withNextra } from 'nextra/config'

export default withNextra({
  // no more `theme` or `themeConfig`
  output: 'export',
  // if you still need a custom content dir:
  // contentDirBasePath: 'docs',
  experimental: {
    // ensure you’re on the App Router
    appDir: true
  },
  basePath: '/info3d',
  trailingSlash: true,
  images: { unoptimized: true }
})
