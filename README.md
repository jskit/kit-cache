# kit-cache

实现类似memcache缓存功能，可配置支持以下功能

- [ ] 支持缓存数据持久化
  - [ ] Storage localStorage ~ 5MB
  - [ ] Session sessionStorage
  - [ ] 当不能支持时(空间已满)，降级支持
- [ ] 支持配置缓存有效时间 lscache
- [ ] 支持配置缓存api接口数据 fetch-unless-cached
- [ ] 支持最近最少使用原则 js-lru

数据支持优先级依次降低

```conf
Cache
          /  localStorage   \
indexDB -                     - Memory
          \  sessionStorage /
```

## 用法

** Storage **

```js
import Storage from 'kit-cache/Storage';

// 默认是 localStorage
const storage = new Storage();

// 也支持使用 sessionStorage
// const session = new Storage('session');

// 具体用法支持 set get remove
storage.set('user', user, 86400*10);
storage.get('user');
storage.remove('user');
```

参考

- https://github.com/pamelafox/lscache
- https://github.com/rsms/js-lru
- https://www.npmjs.com/package/lru-fast
- https://github.com/HQarroum/timed-cache
- https://github.com/isaacs/node-lru-cache
- https://github.com/RonenNess/ExpiredStorage
- https://github.com/jagdeep-singh/jsCache
- https://github.com/yarkovaleksei/vue2-storage
