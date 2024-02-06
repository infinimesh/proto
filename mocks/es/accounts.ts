import { createRouterTransport } from '@connectrpc/connect'
import { AccountsService } from '../../build/es/node/node_connect'
import { Access } from '../../build/es/node/access/access_pb'
import { Account, Accounts } from '../../build/es/node/accounts/accounts_pb'
import { v4 as uuidv4 } from 'uuid'

export const transport = createRouterTransport(({ service }) => {
  service(AccountsService, {
    list() {
      return new Accounts({
        accounts: Array.from({ length: 10 }).map((_, i) => {
          const namespace = `${Math.floor(Math.random() * 10)}`
          const role = Math.floor(Math.random() * 2 + 1)
          const level = Math.floor(Math.random() * 4 + 1)

          const accountItem = new Account({
            uuid: uuidv4(),
            title: `Account ${i + 1}`,
            access: new Access({ namespace, level, role }),
            enabled: true,
            config: {}
          })

          return accountItem
        })
      })
    }
  })
})
