// [#16471] feat: v6 - Environment API
// https://vite.dev/guide/migration.html#advanced
// https://github.com/vitejs/vite/issues/19114

import type { Plugin, EnvironmentModuleNode } from 'vite'

export default function hmrReload(): Plugin {
  return {
    name: 'hmr-reload',
    enforce: 'post',
    hotUpdate: {
      order: 'post',
      handler({ modules, server, timestamp }) {
        if (this.environment.name !== 'ssr') return

        let hasSsrOnlyModules = false

        const invalidatedModules = new Set<EnvironmentModuleNode>()
        for (const mod of modules) {
          if (mod.id == null) continue
          const clientModule =
            server.environments.client.moduleGraph.getModuleById(mod.id)
          if (clientModule != null) continue

          this.environment.moduleGraph.invalidateModule(
            mod,
            invalidatedModules,
            timestamp,
            true,
          )
          hasSsrOnlyModules = true
        }

        if (hasSsrOnlyModules) {
          server.ws.send({ type: 'full-reload' })
          return []
        }
      },
    },
  }
}