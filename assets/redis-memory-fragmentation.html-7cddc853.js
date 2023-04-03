const e=JSON.parse('{"key":"v-6dff6d0d","path":"/bakend/database/redis/redis-memory-fragmentation.html","title":"Redis 内存碎片详解","lang":"zh-CN","frontmatter":{"title":"Redis 内存碎片详解","category":"数据库","tag":["Redis"],"description":"什么是内存碎片? 你可以将内存碎片简单地理解为那些不可用的空闲内存。 举个例子：操作系统为你分配了 32 字节的连续内存空间，而你存储数据实际只需要使用 24 字节内存空间，那这多余出来的 8 字节内存空间如果后续没办法再被分配存储其他数据的话，就可以被称为内存碎片。 内存碎片 Redis 内存碎片虽然不会影响 Redis 性能，但是会增加内存消耗。 ...","head":[["meta",{"property":"og:url","content":"https://doc.ezfri.com/bakend/database/redis/redis-memory-fragmentation.html"}],["meta",{"property":"og:site_name","content":"轻松星期五"}],["meta",{"property":"og:title","content":"Redis 内存碎片详解"}],["meta",{"property":"og:description","content":"什么是内存碎片? 你可以将内存碎片简单地理解为那些不可用的空闲内存。 举个例子：操作系统为你分配了 32 字节的连续内存空间，而你存储数据实际只需要使用 24 字节内存空间，那这多余出来的 8 字节内存空间如果后续没办法再被分配存储其他数据的话，就可以被称为内存碎片。 内存碎片 Redis 内存碎片虽然不会影响 Redis 性能，但是会增加内存消耗。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ezfri.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-03T02:05:22.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Redis 内存碎片详解"}],["meta",{"property":"article:author","content":"轻松星期五"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:modified_time","content":"2023-04-03T02:05:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 内存碎片详解\\",\\"image\\":[\\"https://doc.ezfri.com/\\"],\\"dateModified\\":\\"2023-04-03T02:05:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"轻松星期五\\",\\"url\\":\\"https://doc.ezfri.com\\"}]}"]]},"headers":[{"level":2,"title":"什么是内存碎片?","slug":"什么是内存碎片","link":"#什么是内存碎片","children":[]},{"level":2,"title":"为什么会有 Redis 内存碎片?","slug":"为什么会有-redis-内存碎片","link":"#为什么会有-redis-内存碎片","children":[]},{"level":2,"title":"如何查看 Redis 内存碎片的信息？","slug":"如何查看-redis-内存碎片的信息","link":"#如何查看-redis-内存碎片的信息","children":[]},{"level":2,"title":"如何清理 Redis 内存碎片？","slug":"如何清理-redis-内存碎片","link":"#如何清理-redis-内存碎片","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1680487522000,"updatedTime":1680487522000,"contributors":[{"name":"chun.zheng","email":"zcilive@gmail.com","commits":1}]},"readingTime":{"minutes":4.62,"words":1387},"filePathRelative":"bakend/database/redis/redis-memory-fragmentation.md","localizedDate":"2023年4月3日","autoDesc":true,"excerpt":""}');export{e as data};
