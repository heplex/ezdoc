const e=JSON.parse('{"key":"v-6eda43d9","path":"/develop/database/mysql/transaction-isolation-level.html","title":"MySQL事务隔离级别详解","lang":"zh-CN","frontmatter":{"title":"MySQL事务隔离级别详解","category":"数据库","tag":["MySQL"],"description":"事务隔离级别(图文详解) 什么是事务? 事务是逻辑上的一组操作，要么都执行，要么都不执行。 事务最经典也经常被拿出来说例子就是转账了。假如小明要给小红转账 1000 元，这个转账会涉及到两个关键操作就是：将小明的余额减少 1000 元，将小红的余额增加 1000 元。万一在这两个操作之间突然出现错误比如银行系统崩溃，导致小明余额减少而小红的余额没有增加...","head":[["meta",{"property":"og:url","content":"https://doc.ezfri.com/develop/database/mysql/transaction-isolation-level.html"}],["meta",{"property":"og:site_name","content":"轻松星期五"}],["meta",{"property":"og:title","content":"MySQL事务隔离级别详解"}],["meta",{"property":"og:description","content":"事务隔离级别(图文详解) 什么是事务? 事务是逻辑上的一组操作，要么都执行，要么都不执行。 事务最经典也经常被拿出来说例子就是转账了。假如小明要给小红转账 1000 元，这个转账会涉及到两个关键操作就是：将小明的余额减少 1000 元，将小红的余额增加 1000 元。万一在这两个操作之间突然出现错误比如银行系统崩溃，导致小明余额减少而小红的余额没有增加..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ezfri.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-03T01:52:37.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"MySQL事务隔离级别详解"}],["meta",{"property":"article:author","content":"轻松星期五"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:modified_time","content":"2023-04-03T01:52:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL事务隔离级别详解\\",\\"image\\":[\\"https://doc.ezfri.com/\\"],\\"dateModified\\":\\"2023-04-03T01:52:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"轻松星期五\\",\\"url\\":\\"https://doc.ezfri.com\\"}]}"]]},"headers":[{"level":2,"title":"事务隔离级别(图文详解)","slug":"事务隔离级别-图文详解","link":"#事务隔离级别-图文详解","children":[{"level":3,"title":"什么是事务?","slug":"什么是事务","link":"#什么是事务","children":[]},{"level":3,"title":"事务的特性(ACID)","slug":"事务的特性-acid","link":"#事务的特性-acid","children":[]},{"level":3,"title":"并发事务带来的问题","slug":"并发事务带来的问题","link":"#并发事务带来的问题","children":[]},{"level":3,"title":"事务隔离级别","slug":"事务隔离级别","link":"#事务隔离级别","children":[]},{"level":3,"title":"实际情况演示","slug":"实际情况演示","link":"#实际情况演示","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}]}],"git":{"createdTime":1680486757000,"updatedTime":1680486757000,"contributors":[{"name":"chun.zheng","email":"zcilive@gmail.com","commits":1}]},"readingTime":{"minutes":8.58,"words":2575},"filePathRelative":"develop/database/mysql/transaction-isolation-level.md","localizedDate":"2023年4月3日","autoDesc":true,"excerpt":""}');export{e as data};
