const e=JSON.parse('{"key":"v-4fa9a838","path":"/bakend/system-design/schedule-task.html","title":"Java 定时任务详解","lang":"zh-CN","frontmatter":{"description":"为什么需要定时任务？ 我们来看一下几个非常常见的业务场景： 1. 某系统凌晨要进行数据备份。 2. 某电商平台，用户下单半个小时未支付的情况下需要自动取消订单。 3. 某媒体聚合平台，每 10 分钟动态抓取某某网站的数据为自己所用。 4. 某博客平台，支持定时发送文章。 5. 某基金平台，每晚定时计算用户当日收益情况并推送给用户最新的数据。 6. .....","head":[["meta",{"property":"og:url","content":"https://doc.ezfri.com/bakend/system-design/schedule-task.html"}],["meta",{"property":"og:site_name","content":"轻松星期五"}],["meta",{"property":"og:title","content":"Java 定时任务详解"}],["meta",{"property":"og:description","content":"为什么需要定时任务？ 我们来看一下几个非常常见的业务场景： 1. 某系统凌晨要进行数据备份。 2. 某电商平台，用户下单半个小时未支付的情况下需要自动取消订单。 3. 某媒体聚合平台，每 10 分钟动态抓取某某网站的数据为自己所用。 4. 某博客平台，支持定时发送文章。 5. 某基金平台，每晚定时计算用户当日收益情况并推送给用户最新的数据。 6. ....."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ezfri.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-03T02:05:22.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Java 定时任务详解"}],["meta",{"property":"article:author","content":"轻松星期五"}],["meta",{"property":"article:modified_time","content":"2023-04-03T02:05:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 定时任务详解\\",\\"image\\":[\\"https://doc.ezfri.com/\\"],\\"dateModified\\":\\"2023-04-03T02:05:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"轻松星期五\\",\\"url\\":\\"https://doc.ezfri.com\\"}]}"]]},"headers":[{"level":2,"title":"为什么需要定时任务？","slug":"为什么需要定时任务","link":"#为什么需要定时任务","children":[]},{"level":2,"title":"单机定时任务技术选型","slug":"单机定时任务技术选型","link":"#单机定时任务技术选型","children":[{"level":3,"title":"Timer","slug":"timer","link":"#timer","children":[]},{"level":3,"title":"ScheduledExecutorService","slug":"scheduledexecutorservice","link":"#scheduledexecutorservice","children":[]},{"level":3,"title":"Spring Task","slug":"spring-task","link":"#spring-task","children":[]},{"level":3,"title":"时间轮","slug":"时间轮","link":"#时间轮","children":[]}]},{"level":2,"title":"分布式定时任务技术选型","slug":"分布式定时任务技术选型","link":"#分布式定时任务技术选型","children":[{"level":3,"title":"Quartz","slug":"quartz","link":"#quartz","children":[]},{"level":3,"title":"Elastic-Job","slug":"elastic-job","link":"#elastic-job","children":[]},{"level":3,"title":"XXL-JOB","slug":"xxl-job","link":"#xxl-job","children":[]},{"level":3,"title":"PowerJob","slug":"powerjob","link":"#powerjob","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1680487522000,"updatedTime":1680487522000,"contributors":[{"name":"chun.zheng","email":"zcilive@gmail.com","commits":1}]},"readingTime":{"minutes":12.28,"words":3683},"filePathRelative":"bakend/system-design/schedule-task.md","localizedDate":"2023年4月3日","autoDesc":true,"excerpt":""}');export{e as data};
