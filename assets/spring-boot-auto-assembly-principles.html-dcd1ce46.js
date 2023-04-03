const t=JSON.parse('{"key":"v-3386d361","path":"/kb/bakend/system-design/framework/spring/spring-boot-auto-assembly-principles.html","title":"SpringBoot 自动装配原理详解","lang":"zh-CN","frontmatter":{"title":"SpringBoot 自动装配原理详解","category":"框架","tag":["SpringBoot"],"description":"作者：Miki-byte-1024 (https://github.com/Miki-byte-1024) & Snailclimb (https://github.com/Snailclimb) 每次问到 Spring Boot， 面试官非常喜欢问这个问题：“讲述一下 SpringBoot 自动装配原理？”。 我觉得我们可以从以下几个方面回答： 1....","head":[["meta",{"property":"og:url","content":"https://doc.ezfri.com/kb/bakend/system-design/framework/spring/spring-boot-auto-assembly-principles.html"}],["meta",{"property":"og:site_name","content":"轻松星期五"}],["meta",{"property":"og:title","content":"SpringBoot 自动装配原理详解"}],["meta",{"property":"og:description","content":"作者：Miki-byte-1024 (https://github.com/Miki-byte-1024) & Snailclimb (https://github.com/Snailclimb) 每次问到 Spring Boot， 面试官非常喜欢问这个问题：“讲述一下 SpringBoot 自动装配原理？”。 我觉得我们可以从以下几个方面回答： 1...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ezfri.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-03T03:06:39.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"SpringBoot 自动装配原理详解"}],["meta",{"property":"article:author","content":"轻松星期五"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:modified_time","content":"2023-04-03T03:06:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot 自动装配原理详解\\",\\"image\\":[\\"https://doc.ezfri.com/\\"],\\"dateModified\\":\\"2023-04-03T03:06:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"轻松星期五\\",\\"url\\":\\"https://doc.ezfri.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"什么是 SpringBoot 自动装配？","slug":"什么是-springboot-自动装配","link":"#什么是-springboot-自动装配","children":[]},{"level":2,"title":"SpringBoot 是如何实现自动装配的？","slug":"springboot-是如何实现自动装配的","link":"#springboot-是如何实现自动装配的","children":[{"level":3,"title":"@EnableAutoConfiguration:实现自动装配的核心注解","slug":"enableautoconfiguration-实现自动装配的核心注解","link":"#enableautoconfiguration-实现自动装配的核心注解","children":[]},{"level":3,"title":"AutoConfigurationImportSelector:加载自动装配类","slug":"autoconfigurationimportselector-加载自动装配类","link":"#autoconfigurationimportselector-加载自动装配类","children":[]}]},{"level":2,"title":"如何实现一个 Starter","slug":"如何实现一个-starter","link":"#如何实现一个-starter","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1680491199000,"updatedTime":1680491199000,"contributors":[{"name":"chun.zheng","email":"zcilive@gmail.com","commits":1}]},"readingTime":{"minutes":7.3,"words":2189},"filePathRelative":"kb/bakend/system-design/framework/spring/spring-boot-auto-assembly-principles.md","localizedDate":"2023年4月3日","autoDesc":true,"excerpt":""}');export{t as data};
