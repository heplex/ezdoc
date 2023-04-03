const e=JSON.parse('{"key":"v-1cb58765","path":"/bakend/database/redis/redis-questions-01.html","title":"Redis知识点&面试题总结","lang":"zh-CN","frontmatter":{"title":"Redis知识点&面试题总结","category":"数据库","tag":["Redis"],"description":"Redis 基础 简单介绍一下 Redis! 简单来说 Redis 就是一个使用 C 语言开发的数据库，不过与传统数据库不同的是 Redis 的数据是存在内存中的 ，也就是它是内存数据库，所以读写速度非常快，因此 Redis 被广泛应用于缓存方向。 另外，Redis 除了做缓存之外，也经常用来做分布式锁，甚至是消息队列。 Redis 提供了多种数据类型...","head":[["meta",{"property":"og:url","content":"https://doc.ezfri.com/bakend/database/redis/redis-questions-01.html"}],["meta",{"property":"og:site_name","content":"轻松星期五"}],["meta",{"property":"og:title","content":"Redis知识点&面试题总结"}],["meta",{"property":"og:description","content":"Redis 基础 简单介绍一下 Redis! 简单来说 Redis 就是一个使用 C 语言开发的数据库，不过与传统数据库不同的是 Redis 的数据是存在内存中的 ，也就是它是内存数据库，所以读写速度非常快，因此 Redis 被广泛应用于缓存方向。 另外，Redis 除了做缓存之外，也经常用来做分布式锁，甚至是消息队列。 Redis 提供了多种数据类型..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ezfri.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-03T02:05:22.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Redis知识点&面试题总结"}],["meta",{"property":"article:author","content":"轻松星期五"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:modified_time","content":"2023-04-03T02:05:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis知识点&面试题总结\\",\\"image\\":[\\"https://doc.ezfri.com/\\"],\\"dateModified\\":\\"2023-04-03T02:05:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"轻松星期五\\",\\"url\\":\\"https://doc.ezfri.com\\"}]}"]]},"headers":[{"level":2,"title":"Redis 基础","slug":"redis-基础","link":"#redis-基础","children":[{"level":3,"title":"简单介绍一下 Redis!","slug":"简单介绍一下-redis","link":"#简单介绍一下-redis","children":[]},{"level":3,"title":"分布式缓存常见的技术选型方案有哪些？","slug":"分布式缓存常见的技术选型方案有哪些","link":"#分布式缓存常见的技术选型方案有哪些","children":[]},{"level":3,"title":"说一下 Redis 和 Memcached 的区别和共同点","slug":"说一下-redis-和-memcached-的区别和共同点","link":"#说一下-redis-和-memcached-的区别和共同点","children":[]},{"level":3,"title":"缓存数据的处理流程是怎样的？","slug":"缓存数据的处理流程是怎样的","link":"#缓存数据的处理流程是怎样的","children":[]},{"level":3,"title":"为什么要用 Redis/为什么要用缓存？","slug":"为什么要用-redis-为什么要用缓存","link":"#为什么要用-redis-为什么要用缓存","children":[]},{"level":3,"title":"Redis 除了做缓存，还能做什么？","slug":"redis-除了做缓存-还能做什么","link":"#redis-除了做缓存-还能做什么","children":[]},{"level":3,"title":"Redis 可以做消息队列么？","slug":"redis-可以做消息队列么","link":"#redis-可以做消息队列么","children":[]}]},{"level":2,"title":"Redis 常见数据结构","slug":"redis-常见数据结构","link":"#redis-常见数据结构","children":[{"level":3,"title":"string","slug":"string","link":"#string","children":[]},{"level":3,"title":"list","slug":"list","link":"#list","children":[]},{"level":3,"title":"hash","slug":"hash","link":"#hash","children":[]},{"level":3,"title":"set","slug":"set","link":"#set","children":[]},{"level":3,"title":"sorted set","slug":"sorted-set","link":"#sorted-set","children":[]},{"level":3,"title":"bitmap","slug":"bitmap","link":"#bitmap","children":[]}]},{"level":2,"title":"Redis 线程模型","slug":"redis-线程模型","link":"#redis-线程模型","children":[{"level":3,"title":"Redis 单线程模型了解吗？","slug":"redis-单线程模型了解吗","link":"#redis-单线程模型了解吗","children":[]},{"level":3,"title":"Redis6.0 之前为什么不使用多线程？","slug":"redis6-0-之前为什么不使用多线程","link":"#redis6-0-之前为什么不使用多线程","children":[]},{"level":3,"title":"Redis6.0 之后为何引入了多线程？","slug":"redis6-0-之后为何引入了多线程","link":"#redis6-0-之后为何引入了多线程","children":[]}]},{"level":2,"title":"Redis 内存管理","slug":"redis-内存管理","link":"#redis-内存管理","children":[{"level":3,"title":"Redis 给缓存数据设置过期时间有啥用？","slug":"redis-给缓存数据设置过期时间有啥用","link":"#redis-给缓存数据设置过期时间有啥用","children":[]},{"level":3,"title":"Redis 是如何判断数据是否过期的呢？","slug":"redis-是如何判断数据是否过期的呢","link":"#redis-是如何判断数据是否过期的呢","children":[]},{"level":3,"title":"过期的数据的删除策略了解么？","slug":"过期的数据的删除策略了解么","link":"#过期的数据的删除策略了解么","children":[]},{"level":3,"title":"Redis 内存淘汰机制了解么？","slug":"redis-内存淘汰机制了解么","link":"#redis-内存淘汰机制了解么","children":[]}]},{"level":2,"title":"Redis 持久化机制","slug":"redis-持久化机制","link":"#redis-持久化机制","children":[{"level":3,"title":"怎么保证 Redis 挂掉之后再重启数据可以进行恢复？","slug":"怎么保证-redis-挂掉之后再重启数据可以进行恢复","link":"#怎么保证-redis-挂掉之后再重启数据可以进行恢复","children":[]},{"level":3,"title":"什么是 RDB 持久化？","slug":"什么是-rdb-持久化","link":"#什么是-rdb-持久化","children":[]},{"level":3,"title":"什么是 AOF 持久化？","slug":"什么是-aof-持久化","link":"#什么是-aof-持久化","children":[]},{"level":3,"title":"AOF 重写了解吗？","slug":"aof-重写了解吗","link":"#aof-重写了解吗","children":[]},{"level":3,"title":"Redis 4.0 对于持久化机制做了什么优化？","slug":"redis-4-0-对于持久化机制做了什么优化","link":"#redis-4-0-对于持久化机制做了什么优化","children":[]}]},{"level":2,"title":"Redis 事务","slug":"redis-事务","link":"#redis-事务","children":[{"level":3,"title":"如何使用 Redis 事务？","slug":"如何使用-redis-事务","link":"#如何使用-redis-事务","children":[]},{"level":3,"title":"Redis 支持原子性吗？","slug":"redis-支持原子性吗","link":"#redis-支持原子性吗","children":[]},{"level":3,"title":"如何解决 Redis 事务的缺陷？","slug":"如何解决-redis-事务的缺陷","link":"#如何解决-redis-事务的缺陷","children":[]}]},{"level":2,"title":"Redis 性能优化","slug":"redis-性能优化","link":"#redis-性能优化","children":[{"level":3,"title":"Redis bigkey","slug":"redis-bigkey","link":"#redis-bigkey","children":[]},{"level":3,"title":"大量 key 集中过期问题","slug":"大量-key-集中过期问题","link":"#大量-key-集中过期问题","children":[]}]},{"level":2,"title":"Redis 生产问题","slug":"redis-生产问题","link":"#redis-生产问题","children":[{"level":3,"title":"缓存穿透","slug":"缓存穿透","link":"#缓存穿透","children":[]},{"level":3,"title":"缓存雪崩","slug":"缓存雪崩","link":"#缓存雪崩","children":[]},{"level":3,"title":"如何保证缓存和数据库数据的一致性？","slug":"如何保证缓存和数据库数据的一致性","link":"#如何保证缓存和数据库数据的一致性","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1680487522000,"updatedTime":1680487522000,"contributors":[{"name":"chun.zheng","email":"zcilive@gmail.com","commits":1}]},"readingTime":{"minutes":40.89,"words":12266},"filePathRelative":"bakend/database/redis/redis-questions-01.md","localizedDate":"2023年4月3日","autoDesc":true,"excerpt":""}');export{e as data};
