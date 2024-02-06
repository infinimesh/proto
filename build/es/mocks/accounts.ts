import { createRouterTransport } from '@connectrpc/connect'
import { AccountsService } from '../node/node_connect'
import { Access } from '../node/access/access_pb'
import { Account, Accounts } from '../node/accounts/accounts_pb'

export const transport = createRouterTransport(({ service }) => {
  service(AccountsService, {
    list() {
      return new Accounts({
        accounts: Array.from({ length: 10 }).map((_, i) => {
          const account = Math.random().toString(16).slice(2)
          const namespace = `${Math.floor(Math.random() * 10)}`
          const role = Math.floor(Math.random() * 2 + 1)
          const level = Math.floor(Math.random() * 4 + 1)

          const accountItem = new Account({
            uuid: account,
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
