const e=JSON.parse('{"key":"v-3d2f2d5a","path":"/zh/develop/java/jvm/class-file-structure/page.html","title":"类文件结构详解","lang":"zh-CN","frontmatter":{"category":"Java","tag":["JVM"],"description":"一 概述 在 Java 中，JVM 可以理解的代码就叫做字节码（即扩展名为 .class 的文件），它不面向任何特定的处理器，只面向虚拟机。Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以 Java 程序运行时比较高效，而且，由于字节码并不针对一种特定的机器，因此，Java 程序...","head":[["meta",{"property":"og:url","content":"https://doc.ezfri.com/zh/develop/java/jvm/class-file-structure/page.html"}],["meta",{"property":"og:site_name","content":"轻松星期五"}],["meta",{"property":"og:title","content":"类文件结构详解"}],["meta",{"property":"og:description","content":"一 概述 在 Java 中，JVM 可以理解的代码就叫做字节码（即扩展名为 .class 的文件），它不面向任何特定的处理器，只面向虚拟机。Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以 Java 程序运行时比较高效，而且，由于字节码并不针对一种特定的机器，因此，Java 程序..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ezfri.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-30T10:01:14.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"类文件结构详解"}],["meta",{"property":"article:author","content":"轻松星期五"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:modified_time","content":"2023-03-30T10:01:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类文件结构详解\\",\\"image\\":[\\"https://doc.ezfri.com/\\"],\\"dateModified\\":\\"2023-03-30T10:01:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"轻松星期五\\",\\"url\\":\\"https://doc.ezfri.com\\"}]}"]]},"headers":[{"level":2,"title":"一 概述","slug":"一-概述","link":"#一-概述","children":[]},{"level":2,"title":"二 Class 文件结构总结","slug":"二-class-文件结构总结","link":"#二-class-文件结构总结","children":[{"level":3,"title":"2.1 魔数（Magic Number）","slug":"_2-1-魔数-magic-number","link":"#_2-1-魔数-magic-number","children":[]},{"level":3,"title":"2.2 Class 文件版本号（Minor&Major Version）","slug":"_2-2-class-文件版本号-minor-major-version","link":"#_2-2-class-文件版本号-minor-major-version","children":[]},{"level":3,"title":"2.3 常量池（Constant Pool）","slug":"_2-3-常量池-constant-pool","link":"#_2-3-常量池-constant-pool","children":[]},{"level":3,"title":"2.4 访问标志(Access Flags)","slug":"_2-4-访问标志-access-flags","link":"#_2-4-访问标志-access-flags","children":[]},{"level":3,"title":"2.5 当前类（This Class）、父类（Super Class）、接口（Interfaces）索引集合","slug":"_2-5-当前类-this-class-、父类-super-class-、接口-interfaces-索引集合","link":"#_2-5-当前类-this-class-、父类-super-class-、接口-interfaces-索引集合","children":[]},{"level":3,"title":"2.6 字段表集合（Fields）","slug":"_2-6-字段表集合-fields","link":"#_2-6-字段表集合-fields","children":[]},{"level":3,"title":"2.7 方法表集合（Methods）","slug":"_2-7-方法表集合-methods","link":"#_2-7-方法表集合-methods","children":[]},{"level":3,"title":"2.8 属性表集合（Attributes）","slug":"_2-8-属性表集合-attributes","link":"#_2-8-属性表集合-attributes","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1680170474000,"updatedTime":1680170474000,"contributors":[{"name":"chun.zheng","email":"zcilive@gmail.com","commits":1}]},"readingTime":{"minutes":8.19,"words":2457},"filePathRelative":"zh/develop/java/jvm/class-file-structure/page.md","localizedDate":"2023年3月30日","autoDesc":true,"excerpt":""}');export{e as data};
