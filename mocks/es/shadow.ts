import { createRouterTransport } from '@connectrpc/connect'
import { ShadowService } from '../../build/es/node/node_connect';

export const transport = createRouterTransport(({ service }) => {
    service(ShadowService, {
        get() {
            return { shadows: [] }
        }
    })
})
