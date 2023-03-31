const e=JSON.parse('{"key":"v-54be4b74","path":"/zh/develop/system-design/framework/spring/spring-knowledge-and-questions-summary.html","title":"Spring常见问题总结","lang":"zh-CN","frontmatter":{"title":"Spring常见问题总结","category":"框架","tag":["Spring"],"description":"这篇文章主要是想通过一些问题，加深大家对于 Spring 的理解，所以不会涉及太多的代码！ 下面的很多问题我自己在使用 Spring 的过程中也并没有注意，自己也是临时查阅了很多资料和书籍补上的。网上也有一些很多关于 Spring 常见问题/面试题整理的文章，我感觉大部分都是互相 copy，而且很多问题也不是很好，有些回答也存在问题。所以，自己花了一周...","head":[["meta",{"property":"og:url","content":"https://doc.ezfri.com/zh/develop/system-design/framework/spring/spring-knowledge-and-questions-summary.html"}],["meta",{"property":"og:site_name","content":"轻松星期五"}],["meta",{"property":"og:title","content":"Spring常见问题总结"}],["meta",{"property":"og:description","content":"这篇文章主要是想通过一些问题，加深大家对于 Spring 的理解，所以不会涉及太多的代码！ 下面的很多问题我自己在使用 Spring 的过程中也并没有注意，自己也是临时查阅了很多资料和书籍补上的。网上也有一些很多关于 Spring 常见问题/面试题整理的文章，我感觉大部分都是互相 copy，而且很多问题也不是很好，有些回答也存在问题。所以，自己花了一周..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ezfri.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-30T10:01:14.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Spring常见问题总结"}],["meta",{"property":"article:author","content":"轻松星期五"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:modified_time","content":"2023-03-30T10:01:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring常见问题总结\\",\\"image\\":[\\"https://doc.ezfri.com/\\"],\\"dateModified\\":\\"2023-03-30T10:01:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"轻松星期五\\",\\"url\\":\\"https://doc.ezfri.com\\"}]}"]]},"headers":[{"level":2,"title":"什么是 Spring 框架?","slug":"什么是-spring-框架","link":"#什么是-spring-框架","children":[]},{"level":2,"title":"列举一些重要的 Spring 模块？","slug":"列举一些重要的-spring-模块","link":"#列举一些重要的-spring-模块","children":[]},{"level":2,"title":"Spring,Spring MVC,Spring Boot 之间什么关系?","slug":"spring-spring-mvc-spring-boot-之间什么关系","link":"#spring-spring-mvc-spring-boot-之间什么关系","children":[]},{"level":2,"title":"Spring IOC & AOP","slug":"spring-ioc-aop","link":"#spring-ioc-aop","children":[{"level":3,"title":"谈谈自己对于 Spring IoC 的了解","slug":"谈谈自己对于-spring-ioc-的了解","link":"#谈谈自己对于-spring-ioc-的了解","children":[]},{"level":3,"title":"谈谈自己对于 AOP 的了解","slug":"谈谈自己对于-aop-的了解","link":"#谈谈自己对于-aop-的了解","children":[]},{"level":3,"title":"Spring AOP 和 AspectJ AOP 有什么区别？","slug":"spring-aop-和-aspectj-aop-有什么区别","link":"#spring-aop-和-aspectj-aop-有什么区别","children":[]}]},{"level":2,"title":"Spring Bean","slug":"spring-bean","link":"#spring-bean","children":[{"level":3,"title":"什么是 Spring Bean？","slug":"什么是-spring-bean","link":"#什么是-spring-bean","children":[]},{"level":3,"title":"将一个类声明为 Bean 的注解有哪些?","slug":"将一个类声明为-bean-的注解有哪些","link":"#将一个类声明为-bean-的注解有哪些","children":[]},{"level":3,"title":"@Component 和 @Bean 的区别是什么？","slug":"component-和-bean-的区别是什么","link":"#component-和-bean-的区别是什么","children":[]},{"level":3,"title":"注入 Bean 的注解有哪些？","slug":"注入-bean-的注解有哪些","link":"#注入-bean-的注解有哪些","children":[]},{"level":3,"title":"@Autowired 和 @Resource 的区别是什么？","slug":"autowired-和-resource-的区别是什么","link":"#autowired-和-resource-的区别是什么","children":[]},{"level":3,"title":"Bean 的作用域有哪些?","slug":"bean-的作用域有哪些","link":"#bean-的作用域有哪些","children":[]},{"level":3,"title":"单例 Bean 的线程安全问题了解吗？","slug":"单例-bean-的线程安全问题了解吗","link":"#单例-bean-的线程安全问题了解吗","children":[]},{"level":3,"title":"Bean 的生命周期了解么?","slug":"bean-的生命周期了解么","link":"#bean-的生命周期了解么","children":[]}]},{"level":2,"title":"Spring MVC","slug":"spring-mvc","link":"#spring-mvc","children":[{"level":3,"title":"说说自己对于 Spring MVC 了解?","slug":"说说自己对于-spring-mvc-了解","link":"#说说自己对于-spring-mvc-了解","children":[]},{"level":3,"title":"SpringMVC 工作原理了解吗?","slug":"springmvc-工作原理了解吗","link":"#springmvc-工作原理了解吗","children":[]}]},{"level":2,"title":"Spring 框架中用到了哪些设计模式？","slug":"spring-框架中用到了哪些设计模式","link":"#spring-框架中用到了哪些设计模式","children":[]},{"level":2,"title":"Spring 事务","slug":"spring-事务","link":"#spring-事务","children":[{"level":3,"title":"Spring 管理事务的方式有几种？","slug":"spring-管理事务的方式有几种","link":"#spring-管理事务的方式有几种","children":[]},{"level":3,"title":"Spring 事务中哪几种事务传播行为?","slug":"spring-事务中哪几种事务传播行为","link":"#spring-事务中哪几种事务传播行为","children":[]},{"level":3,"title":"Spring 事务中的隔离级别有哪几种?","slug":"spring-事务中的隔离级别有哪几种","link":"#spring-事务中的隔离级别有哪几种","children":[]},{"level":3,"title":"@Transactional(rollbackFor = Exception.class)注解了解吗？","slug":"transactional-rollbackfor-exception-class-注解了解吗","link":"#transactional-rollbackfor-exception-class-注解了解吗","children":[]}]},{"level":2,"title":"JPA","slug":"jpa","link":"#jpa","children":[{"level":3,"title":"如何使用 JPA 在数据库中非持久化一个字段？","slug":"如何使用-jpa-在数据库中非持久化一个字段","link":"#如何使用-jpa-在数据库中非持久化一个字段","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1680170474000,"updatedTime":1680170474000,"contributors":[{"name":"chun.zheng","email":"zcilive@gmail.com","commits":1}]},"readingTime":{"minutes":22.95,"words":6886},"filePathRelative":"zh/develop/system-design/framework/spring/spring-knowledge-and-questions-summary.md","localizedDate":"2023年3月30日","autoDesc":true,"excerpt":""}');export{e as data};
