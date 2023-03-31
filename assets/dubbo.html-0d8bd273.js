const e=JSON.parse('{"key":"v-2230be3e","path":"/zh/develop/distributed-system/rpc/dubbo.html","title":"Dubbo知识点&面试题总结","lang":"zh-CN","frontmatter":{"description":"这篇文章是我根据官方文档以及自己平时的使用情况，对 Dubbo 所做的一个总结。欢迎补充！ RPC基础 何为 RPC? RPC（Remote Procedure Call） 即远程过程调用，通过名字我们就能看出 RPC 关注的是远程调用而非本地调用。 为什么要 RPC ？ 因为，两个不同的服务器上的服务提供的方法不在一个内存空间，所以，需要通过网络编程...","head":[["meta",{"property":"og:url","content":"https://doc.ezfri.com/zh/develop/distributed-system/rpc/dubbo.html"}],["meta",{"property":"og:site_name","content":"轻松星期五"}],["meta",{"property":"og:title","content":"Dubbo知识点&面试题总结"}],["meta",{"property":"og:description","content":"这篇文章是我根据官方文档以及自己平时的使用情况，对 Dubbo 所做的一个总结。欢迎补充！ RPC基础 何为 RPC? RPC（Remote Procedure Call） 即远程过程调用，通过名字我们就能看出 RPC 关注的是远程调用而非本地调用。 为什么要 RPC ？ 因为，两个不同的服务器上的服务提供的方法不在一个内存空间，所以，需要通过网络编程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ezfri.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-30T10:01:14.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Dubbo知识点&面试题总结"}],["meta",{"property":"article:author","content":"轻松星期五"}],["meta",{"property":"article:modified_time","content":"2023-03-30T10:01:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dubbo知识点&面试题总结\\",\\"image\\":[\\"https://doc.ezfri.com/\\"],\\"dateModified\\":\\"2023-03-30T10:01:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"轻松星期五\\",\\"url\\":\\"https://doc.ezfri.com\\"}]}"]]},"headers":[{"level":2,"title":"RPC基础","slug":"rpc基础","link":"#rpc基础","children":[{"level":3,"title":"何为 RPC?","slug":"何为-rpc","link":"#何为-rpc","children":[]},{"level":3,"title":"RPC 的原理是什么?","slug":"rpc-的原理是什么","link":"#rpc-的原理是什么","children":[]}]},{"level":2,"title":"Dubbo基础","slug":"dubbo基础","link":"#dubbo基础","children":[{"level":3,"title":"什么是 Dubbo?","slug":"什么是-dubbo","link":"#什么是-dubbo","children":[]},{"level":3,"title":"为什么要用 Dubbo?","slug":"为什么要用-dubbo","link":"#为什么要用-dubbo","children":[]}]},{"level":2,"title":"分布式基础","slug":"分布式基础","link":"#分布式基础","children":[{"level":3,"title":"什么是分布式?","slug":"什么是分布式","link":"#什么是分布式","children":[]},{"level":3,"title":"为什么要分布式?","slug":"为什么要分布式","link":"#为什么要分布式","children":[]}]},{"level":2,"title":"Dubbo 架构","slug":"dubbo-架构","link":"#dubbo-架构","children":[{"level":3,"title":"Dubbo 架构中的核心角色有哪些？","slug":"dubbo-架构中的核心角色有哪些","link":"#dubbo-架构中的核心角色有哪些","children":[]},{"level":3,"title":"Dubbo 中的 Invoker 概念了解么？","slug":"dubbo-中的-invoker-概念了解么","link":"#dubbo-中的-invoker-概念了解么","children":[]},{"level":3,"title":"Dubbo 的工作原理了解么？","slug":"dubbo-的工作原理了解么","link":"#dubbo-的工作原理了解么","children":[]},{"level":3,"title":"Dubbo 的 SPI 机制了解么？ 如何扩展 Dubbo 中的默认实现？","slug":"dubbo-的-spi-机制了解么-如何扩展-dubbo-中的默认实现","link":"#dubbo-的-spi-机制了解么-如何扩展-dubbo-中的默认实现","children":[]},{"level":3,"title":"Dubbo 的微内核架构了解吗？","slug":"dubbo-的微内核架构了解吗","link":"#dubbo-的微内核架构了解吗","children":[]},{"level":3,"title":"关于Dubbo架构的一些自测小问题","slug":"关于dubbo架构的一些自测小问题","link":"#关于dubbo架构的一些自测小问题","children":[]}]},{"level":2,"title":"Dubbo 的负载均衡策略","slug":"dubbo-的负载均衡策略","link":"#dubbo-的负载均衡策略","children":[{"level":3,"title":"什么是负载均衡？","slug":"什么是负载均衡","link":"#什么是负载均衡","children":[]},{"level":3,"title":"Dubbo 提供的负载均衡策略有哪些？","slug":"dubbo-提供的负载均衡策略有哪些","link":"#dubbo-提供的负载均衡策略有哪些","children":[]}]},{"level":2,"title":"Dubbo序列化协议","slug":"dubbo序列化协议","link":"#dubbo序列化协议","children":[{"level":3,"title":"Dubbo 支持哪些序列化方式呢？","slug":"dubbo-支持哪些序列化方式呢","link":"#dubbo-支持哪些序列化方式呢","children":[]},{"level":3,"title":"谈谈你对这些序列化协议了解？","slug":"谈谈你对这些序列化协议了解","link":"#谈谈你对这些序列化协议了解","children":[]}]}],"git":{"createdTime":1680170474000,"updatedTime":1680170474000,"contributors":[{"name":"chun.zheng","email":"zcilive@gmail.com","commits":1}]},"readingTime":{"minutes":21.81,"words":6543},"filePathRelative":"zh/develop/distributed-system/rpc/dubbo.md","localizedDate":"2023年3月30日","autoDesc":true,"excerpt":""}');export{e as data};
