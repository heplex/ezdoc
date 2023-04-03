const e=JSON.parse('{"key":"v-3743d6a9","path":"/kb/bakend/java/concurrent/atomic-classes.html","title":"Atomic 原子类总结","lang":"zh-CN","frontmatter":{"title":"Atomic 原子类总结","category":"Java","tag":["Java并发"],"description":"Atomic 原子类介绍 Atomic 翻译成中文是原子的意思。在化学上，我们知道原子是构成一般物质的最小单位，在化学反应中是不可分割的。在我们这里 Atomic 是指一个操作是不可中断的。即使是在多个线程一起执行的时候，一个操作一旦开始，就不会被其他线程干扰。 所以，所谓原子类说简单点就是具有原子/原子操作特征的类。 并发包 java.util.co...","head":[["meta",{"property":"og:url","content":"https://doc.ezfri.com/kb/bakend/java/concurrent/atomic-classes.html"}],["meta",{"property":"og:site_name","content":"轻松星期五"}],["meta",{"property":"og:title","content":"Atomic 原子类总结"}],["meta",{"property":"og:description","content":"Atomic 原子类介绍 Atomic 翻译成中文是原子的意思。在化学上，我们知道原子是构成一般物质的最小单位，在化学反应中是不可分割的。在我们这里 Atomic 是指一个操作是不可中断的。即使是在多个线程一起执行的时候，一个操作一旦开始，就不会被其他线程干扰。 所以，所谓原子类说简单点就是具有原子/原子操作特征的类。 并发包 java.util.co..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ezfri.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-03T03:06:39.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Atomic 原子类总结"}],["meta",{"property":"article:author","content":"轻松星期五"}],["meta",{"property":"article:tag","content":"Java并发"}],["meta",{"property":"article:modified_time","content":"2023-04-03T03:06:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Atomic 原子类总结\\",\\"image\\":[\\"https://doc.ezfri.com/\\"],\\"dateModified\\":\\"2023-04-03T03:06:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"轻松星期五\\",\\"url\\":\\"https://doc.ezfri.com\\"}]}"]]},"headers":[{"level":2,"title":"Atomic 原子类介绍","slug":"atomic-原子类介绍","link":"#atomic-原子类介绍","children":[]},{"level":2,"title":"基本类型原子类","slug":"基本类型原子类","link":"#基本类型原子类","children":[{"level":3,"title":"基本类型原子类介绍","slug":"基本类型原子类介绍","link":"#基本类型原子类介绍","children":[]},{"level":3,"title":"AtomicInteger 常见方法使用","slug":"atomicinteger-常见方法使用","link":"#atomicinteger-常见方法使用","children":[]},{"level":3,"title":"基本数据类型原子类的优势","slug":"基本数据类型原子类的优势","link":"#基本数据类型原子类的优势","children":[]},{"level":3,"title":"AtomicInteger 线程安全原理简单分析","slug":"atomicinteger-线程安全原理简单分析","link":"#atomicinteger-线程安全原理简单分析","children":[]}]},{"level":2,"title":"数组类型原子类","slug":"数组类型原子类","link":"#数组类型原子类","children":[{"level":3,"title":"数组类型原子类介绍","slug":"数组类型原子类介绍","link":"#数组类型原子类介绍","children":[]},{"level":3,"title":"AtomicIntegerArray 常见方法使用","slug":"atomicintegerarray-常见方法使用","link":"#atomicintegerarray-常见方法使用","children":[]}]},{"level":2,"title":"引用类型原子类","slug":"引用类型原子类","link":"#引用类型原子类","children":[{"level":3,"title":"引用类型原子类介绍","slug":"引用类型原子类介绍","link":"#引用类型原子类介绍","children":[]},{"level":3,"title":"AtomicReference 类使用示例","slug":"atomicreference-类使用示例","link":"#atomicreference-类使用示例","children":[]},{"level":3,"title":"AtomicStampedReference 类使用示例","slug":"atomicstampedreference-类使用示例","link":"#atomicstampedreference-类使用示例","children":[]},{"level":3,"title":"AtomicMarkableReference 类使用示例","slug":"atomicmarkablereference-类使用示例","link":"#atomicmarkablereference-类使用示例","children":[]}]},{"level":2,"title":"对象的属性修改类型原子类","slug":"对象的属性修改类型原子类","link":"#对象的属性修改类型原子类","children":[{"level":3,"title":"对象的属性修改类型原子类介绍","slug":"对象的属性修改类型原子类介绍","link":"#对象的属性修改类型原子类介绍","children":[]},{"level":3,"title":"AtomicIntegerFieldUpdater 类使用示例","slug":"atomicintegerfieldupdater-类使用示例","link":"#atomicintegerfieldupdater-类使用示例","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1680491199000,"updatedTime":1680491199000,"contributors":[{"name":"chun.zheng","email":"zcilive@gmail.com","commits":1}]},"readingTime":{"minutes":11.42,"words":3427},"filePathRelative":"kb/bakend/java/concurrent/atomic-classes.md","localizedDate":"2023年4月3日","autoDesc":true,"excerpt":""}');export{e as data};
