const t=JSON.parse('{"key":"v-647eb31c","path":"/kb/bakend/database/mysql/some-thoughts-on-database-storage-time.html","title":"MySQL数据库时间类型数据存储建议","lang":"zh-CN","frontmatter":{"title":"MySQL数据库时间类型数据存储建议","category":"数据库","tag":["MySQL"],"description":"我们平时开发中不可避免的就是要存储时间，比如我们要记录操作表中这条记录的时间、记录转账的交易时间、记录出发时间等等。你会发现时间这个东西与我们开发的联系还是非常紧密的，用的好与不好会给我们的业务甚至功能带来很大的影响。所以，我们有必要重新出发，好好认识一下这个东西。 这是一篇短小精悍的文章，仔细阅读一定能学到不少东西！ 1.切记不要用字符串存储日期 我...","head":[["meta",{"property":"og:url","content":"https://doc.ezfri.com/kb/bakend/database/mysql/some-thoughts-on-database-storage-time.html"}],["meta",{"property":"og:site_name","content":"轻松星期五"}],["meta",{"property":"og:title","content":"MySQL数据库时间类型数据存储建议"}],["meta",{"property":"og:description","content":"我们平时开发中不可避免的就是要存储时间，比如我们要记录操作表中这条记录的时间、记录转账的交易时间、记录出发时间等等。你会发现时间这个东西与我们开发的联系还是非常紧密的，用的好与不好会给我们的业务甚至功能带来很大的影响。所以，我们有必要重新出发，好好认识一下这个东西。 这是一篇短小精悍的文章，仔细阅读一定能学到不少东西！ 1.切记不要用字符串存储日期 我..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ezfri.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-03T03:06:39.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"MySQL数据库时间类型数据存储建议"}],["meta",{"property":"article:author","content":"轻松星期五"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:modified_time","content":"2023-04-03T03:06:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL数据库时间类型数据存储建议\\",\\"image\\":[\\"https://doc.ezfri.com/\\"],\\"dateModified\\":\\"2023-04-03T03:06:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"轻松星期五\\",\\"url\\":\\"https://doc.ezfri.com\\"}]}"]]},"headers":[{"level":3,"title":"1.切记不要用字符串存储日期","slug":"_1-切记不要用字符串存储日期","link":"#_1-切记不要用字符串存储日期","children":[]},{"level":3,"title":"2.Datetime 和 Timestamp 之间抉择","slug":"_2-datetime-和-timestamp-之间抉择","link":"#_2-datetime-和-timestamp-之间抉择","children":[]},{"level":3,"title":"3 再看 MySQL 日期类型存储空间","slug":"_3-再看-mysql-日期类型存储空间","link":"#_3-再看-mysql-日期类型存储空间","children":[]},{"level":3,"title":"4.数值型时间戳是更好的选择吗？","slug":"_4-数值型时间戳是更好的选择吗","link":"#_4-数值型时间戳是更好的选择吗","children":[]},{"level":3,"title":"5.总结","slug":"_5-总结","link":"#_5-总结","children":[]}],"git":{"createdTime":1680491199000,"updatedTime":1680491199000,"contributors":[{"name":"chun.zheng","email":"zcilive@gmail.com","commits":1}]},"readingTime":{"minutes":5.35,"words":1605},"filePathRelative":"kb/bakend/database/mysql/some-thoughts-on-database-storage-time.md","localizedDate":"2023年4月3日","autoDesc":true,"excerpt":""}');export{t as data};
