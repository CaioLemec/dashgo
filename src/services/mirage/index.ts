import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker'

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer () {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name (i: number) {
                    return `Usuário teste ${i + 1}`
                },
                email () {
                    return faker.internet.email().toLowerCase(); // usando faker para popular dados aleatóriamente
                },
                createdAt () {
                    return faker.date.recent(10); // usando faker para popular datas com 10 dias da data.
                },
            })
        },

        seeds(server) {
            server.createList('user', 10)
        },

        routes() {
            this.namespace = 'api';
            this.timing = 750;
            this.get('/users');
            this.post('/users');
            this.namespace = ''; // voltando para estado anterior visando não conflitar com pasta api.
            this.passthrough() 
        }
    })

    return server;
}