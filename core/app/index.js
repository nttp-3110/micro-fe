import { createApp } from 'frint';

import RootComponent from '../components/root';
import Foo from '../services/foo';
import Bar from '../services/bar';
import Baz from '../services/baz';

export default createApp({
  name: 'MicroFeApp',
  providers: [
    {
      name: 'component',
      useValue: RootComponent
    },
    {
      name: 'foo',
      useClass: Foo,
      cascade: true, // the same instance will be shared with children
      deps: ['app'],
    },
    {
      name: 'bar',
      useClass: Bar,
      cascade: true,
      scoped: true, // the same class, will be shared with children, but with fresh new instance scoped by Child
      deps: ['app'],
    },
    {
      name: 'baz',
      useClass: Baz,
      cascade: false, // will not be shared with children at all
      deps: ['app'],
    },
  ],
});
