const e=JSON.parse('{"key":"v-38dd46da","path":"/zh/develop/java/collection/source-analysis/concurrent-hash-map-source-code.html","title":"ConcurrentHashMap源码&底层数据结构分析","lang":"zh-CN","frontmatter":{"title":"ConcurrentHashMap源码&底层数据结构分析","category":"Java","tag":["Java集合"],"description":"本文来自公众号：末读代码的投稿，原文地址：https://mp.weixin.qq.com/s/AHWzboztt53ZfFZmsSnMSw 。 上一篇文章介绍了 HashMap 源码，反响不错，也有很多同学发表了自己的观点，这次又来了，这次是 ConcurrentHashMap 了，作为线程安全的HashMap ，它的使用频率也是很高。那么它的存储结...","head":[["meta",{"property":"og:url","content":"https://doc.ezfri.com/zh/develop/java/collection/source-analysis/concurrent-hash-map-source-code.html"}],["meta",{"property":"og:site_name","content":"轻松星期五"}],["meta",{"property":"og:title","content":"ConcurrentHashMap源码&底层数据结构分析"}],["meta",{"property":"og:description","content":"本文来自公众号：末读代码的投稿，原文地址：https://mp.weixin.qq.com/s/AHWzboztt53ZfFZmsSnMSw 。 上一篇文章介绍了 HashMap 源码，反响不错，也有很多同学发表了自己的观点，这次又来了，这次是 ConcurrentHashMap 了，作为线程安全的HashMap ，它的使用频率也是很高。那么它的存储结..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ezfri.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-30T10:01:14.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"ConcurrentHashMap源码&底层数据结构分析"}],["meta",{"property":"article:author","content":"轻松星期五"}],["meta",{"property":"article:tag","content":"Java集合"}],["meta",{"property":"article:modified_time","content":"2023-03-30T10:01:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ConcurrentHashMap源码&底层数据结构分析\\",\\"image\\":[\\"https://doc.ezfri.com/\\"],\\"dateModified\\":\\"2023-03-30T10:01:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"轻松星期五\\",\\"url\\":\\"https://doc.ezfri.com\\"}]}"]]},"headers":[{"level":2,"title":"1. ConcurrentHashMap 1.7","slug":"_1-concurrenthashmap-1-7","link":"#_1-concurrenthashmap-1-7","children":[{"level":3,"title":"1. 存储结构","slug":"_1-存储结构","link":"#_1-存储结构","children":[]},{"level":3,"title":"2. 初始化","slug":"_2-初始化","link":"#_2-初始化","children":[]},{"level":3,"title":"3. put","slug":"_3-put","link":"#_3-put","children":[]},{"level":3,"title":"4. 扩容 rehash","slug":"_4-扩容-rehash","link":"#_4-扩容-rehash","children":[]},{"level":3,"title":"5. get","slug":"_5-get","link":"#_5-get","children":[]}]},{"level":2,"title":"2. ConcurrentHashMap 1.8","slug":"_2-concurrenthashmap-1-8","link":"#_2-concurrenthashmap-1-8","children":[{"level":3,"title":"1. 存储结构","slug":"_1-存储结构-1","link":"#_1-存储结构-1","children":[]},{"level":3,"title":"2. 初始化 initTable","slug":"_2-初始化-inittable","link":"#_2-初始化-inittable","children":[]},{"level":3,"title":"3. put","slug":"_3-put-1","link":"#_3-put-1","children":[]},{"level":3,"title":"4. get","slug":"_4-get","link":"#_4-get","children":[]}]},{"level":2,"title":"3.  总结","slug":"_3-总结","link":"#_3-总结","children":[]}],"git":{"createdTime":1680170474000,"updatedTime":1680170474000,"contributors":[{"name":"chun.zheng","email":"zcilive@gmail.com","commits":1}]},"readingTime":{"minutes":14.25,"words":4275},"filePathRelative":"zh/develop/java/collection/source-analysis/concurrent-hash-map-source-code.md","localizedDate":"2023年3月30日","autoDesc":true,"excerpt":""}');export{e as data};
