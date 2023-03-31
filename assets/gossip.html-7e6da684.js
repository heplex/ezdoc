const e=JSON.parse('{"key":"v-5a63d112","path":"/zh/develop/distributed-system/theoremANDalgorithmANDprotocol/gossip.html","title":"","lang":"zh-CN","frontmatter":{"description":"背景 在分布式系统中，不同的节点进行数据/信息共享是一个基本的需求。 一种比较简单粗暴的方法就是 集中式发散消息，简单来说就是一个主节点同时共享最新信息给其他所有节点，比较适合中心化系统。这种方法的缺陷也很明显，节点多的时候不光同步消息的效率低，还太依赖与中心节点，存在单点风险问题。 于是，分散式发散消息 的 Gossip 协议 就诞生了。 Gossi...","head":[["meta",{"property":"og:url","content":"https://doc.ezfri.com/zh/develop/distributed-system/theoremANDalgorithmANDprotocol/gossip.html"}],["meta",{"property":"og:site_name","content":"轻松星期五"}],["meta",{"property":"og:description","content":"背景 在分布式系统中，不同的节点进行数据/信息共享是一个基本的需求。 一种比较简单粗暴的方法就是 集中式发散消息，简单来说就是一个主节点同时共享最新信息给其他所有节点，比较适合中心化系统。这种方法的缺陷也很明显，节点多的时候不光同步消息的效率低，还太依赖与中心节点，存在单点风险问题。 于是，分散式发散消息 的 Gossip 协议 就诞生了。 Gossi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ezfri.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-30T10:01:14.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"property":"article:author","content":"轻松星期五"}],["meta",{"property":"article:modified_time","content":"2023-03-30T10:01:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"https://doc.ezfri.com/\\"],\\"dateModified\\":\\"2023-03-30T10:01:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"轻松星期五\\",\\"url\\":\\"https://doc.ezfri.com\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"Gossip 协议介绍","slug":"gossip-协议介绍","link":"#gossip-协议介绍","children":[]},{"level":2,"title":"Gossip 协议应用","slug":"gossip-协议应用","link":"#gossip-协议应用","children":[]},{"level":2,"title":"Gossip 协议消息传播模式","slug":"gossip-协议消息传播模式","link":"#gossip-协议消息传播模式","children":[{"level":3,"title":"反熵(Anti-entropy)","slug":"反熵-anti-entropy","link":"#反熵-anti-entropy","children":[]},{"level":3,"title":"谣言传播(Rumor mongering)","slug":"谣言传播-rumor-mongering","link":"#谣言传播-rumor-mongering","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"Gossip 协议优势和缺陷","slug":"gossip-协议优势和缺陷","link":"#gossip-协议优势和缺陷","children":[]},{"level":2,"title":"总结","slug":"总结-1","link":"#总结-1","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1680170474000,"updatedTime":1680170474000,"contributors":[{"name":"chun.zheng","email":"zcilive@gmail.com","commits":1}]},"readingTime":{"minutes":7.1,"words":2131},"filePathRelative":"zh/develop/distributed-system/theoremANDalgorithmANDprotocol/gossip.md","localizedDate":"2023年3月30日","autoDesc":true,"excerpt":""}');export{e as data};
