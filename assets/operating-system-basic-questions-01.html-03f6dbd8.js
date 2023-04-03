const e=JSON.parse('{"key":"v-3e8a247a","path":"/develop/cs-basics/operating-system/operating-system-basic-questions-01.html","title":"操作系统常见面试题总结","lang":"zh-CN","frontmatter":{"title":"操作系统常见面试题总结","category":"计算机基础","tag":["操作系统"],"description":"很多读者抱怨计算操作系统的知识点比较繁杂，自己也没有多少耐心去看，但是面试的时候又经常会遇到。所以，我带着我整理好的操作系统的常见问题来啦！这篇文章总结了一些我觉得比较重要的操作系统相关的问题比如进程管理、内存管理、虚拟内存等等。 文章形式通过大部分比较喜欢的面试官和求职者之间的对话形式展开。另外，Guide 哥 也只是在大学的时候学习过操作系统，不过...","head":[["meta",{"property":"og:url","content":"https://doc.ezfri.com/develop/cs-basics/operating-system/operating-system-basic-questions-01.html"}],["meta",{"property":"og:site_name","content":"轻松星期五"}],["meta",{"property":"og:title","content":"操作系统常见面试题总结"}],["meta",{"property":"og:description","content":"很多读者抱怨计算操作系统的知识点比较繁杂，自己也没有多少耐心去看，但是面试的时候又经常会遇到。所以，我带着我整理好的操作系统的常见问题来啦！这篇文章总结了一些我觉得比较重要的操作系统相关的问题比如进程管理、内存管理、虚拟内存等等。 文章形式通过大部分比较喜欢的面试官和求职者之间的对话形式展开。另外，Guide 哥 也只是在大学的时候学习过操作系统，不过..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ezfri.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-03T01:52:37.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"操作系统常见面试题总结"}],["meta",{"property":"article:author","content":"轻松星期五"}],["meta",{"property":"article:tag","content":"操作系统"}],["meta",{"property":"article:modified_time","content":"2023-04-03T01:52:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"操作系统常见面试题总结\\",\\"image\\":[\\"https://doc.ezfri.com/\\"],\\"dateModified\\":\\"2023-04-03T01:52:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"轻松星期五\\",\\"url\\":\\"https://doc.ezfri.com\\"}]}"]]},"headers":[{"level":2,"title":"一 操作系统基础","slug":"一-操作系统基础","link":"#一-操作系统基础","children":[{"level":3,"title":"1.1 什么是操作系统？","slug":"_1-1-什么是操作系统","link":"#_1-1-什么是操作系统","children":[]},{"level":3,"title":"1.2 系统调用","slug":"_1-2-系统调用","link":"#_1-2-系统调用","children":[]}]},{"level":2,"title":"二 进程和线程","slug":"二-进程和线程","link":"#二-进程和线程","children":[{"level":3,"title":"2.1 进程和线程的区别","slug":"_2-1-进程和线程的区别","link":"#_2-1-进程和线程的区别","children":[]},{"level":3,"title":"2.2 进程有哪几种状态?","slug":"_2-2-进程有哪几种状态","link":"#_2-2-进程有哪几种状态","children":[]},{"level":3,"title":"2.3 进程间的通信方式","slug":"_2-3-进程间的通信方式","link":"#_2-3-进程间的通信方式","children":[]},{"level":3,"title":"2.4 线程间的同步的方式","slug":"_2-4-线程间的同步的方式","link":"#_2-4-线程间的同步的方式","children":[]},{"level":3,"title":"2.5 进程的调度算法","slug":"_2-5-进程的调度算法","link":"#_2-5-进程的调度算法","children":[]},{"level":3,"title":"2.6 什么是死锁","slug":"_2-6-什么是死锁","link":"#_2-6-什么是死锁","children":[]},{"level":3,"title":"2.7 死锁的四个条件","slug":"_2-7-死锁的四个条件","link":"#_2-7-死锁的四个条件","children":[]},{"level":3,"title":"2.8 解决死锁的方法","slug":"_2-8-解决死锁的方法","link":"#_2-8-解决死锁的方法","children":[]}]},{"level":2,"title":"三 操作系统内存管理基础","slug":"三-操作系统内存管理基础","link":"#三-操作系统内存管理基础","children":[{"level":3,"title":"3.1 内存管理介绍","slug":"_3-1-内存管理介绍","link":"#_3-1-内存管理介绍","children":[]},{"level":3,"title":"3.2 常见的几种内存管理机制","slug":"_3-2-常见的几种内存管理机制","link":"#_3-2-常见的几种内存管理机制","children":[]},{"level":3,"title":"3.3 快表和多级页表","slug":"_3-3-快表和多级页表","link":"#_3-3-快表和多级页表","children":[]},{"level":3,"title":"3.4 分页机制和分段机制的共同点和区别","slug":"_3-4-分页机制和分段机制的共同点和区别","link":"#_3-4-分页机制和分段机制的共同点和区别","children":[]},{"level":3,"title":"3.5 逻辑(虚拟)地址和物理地址","slug":"_3-5-逻辑-虚拟-地址和物理地址","link":"#_3-5-逻辑-虚拟-地址和物理地址","children":[]},{"level":3,"title":"3.6 CPU 寻址了解吗?为什么需要虚拟地址空间?","slug":"_3-6-cpu-寻址了解吗-为什么需要虚拟地址空间","link":"#_3-6-cpu-寻址了解吗-为什么需要虚拟地址空间","children":[]}]},{"level":2,"title":"四 虚拟内存","slug":"四-虚拟内存","link":"#四-虚拟内存","children":[{"level":3,"title":"4.1 什么是虚拟内存(Virtual Memory)?","slug":"_4-1-什么是虚拟内存-virtual-memory","link":"#_4-1-什么是虚拟内存-virtual-memory","children":[]},{"level":3,"title":"4.2 局部性原理","slug":"_4-2-局部性原理","link":"#_4-2-局部性原理","children":[]},{"level":3,"title":"4.3 虚拟存储器","slug":"_4-3-虚拟存储器","link":"#_4-3-虚拟存储器","children":[]},{"level":3,"title":"4.4 虚拟内存的技术实现","slug":"_4-4-虚拟内存的技术实现","link":"#_4-4-虚拟内存的技术实现","children":[]},{"level":3,"title":"4.5 页面置换算法","slug":"_4-5-页面置换算法","link":"#_4-5-页面置换算法","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1680486757000,"updatedTime":1680486757000,"contributors":[{"name":"chun.zheng","email":"zcilive@gmail.com","commits":1}]},"readingTime":{"minutes":40.76,"words":12229},"filePathRelative":"develop/cs-basics/operating-system/operating-system-basic-questions-01.md","localizedDate":"2023年4月3日","autoDesc":true,"excerpt":""}');export{e as data};
