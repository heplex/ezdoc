const e=JSON.parse('{"key":"v-8aab7c06","path":"/RD/java/jvm/memory-area/page.html","title":"Java \u5185\u5B58\u533A\u57DF\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"title":"Java \u5185\u5B58\u533A\u57DF\u8BE6\u89E3","category":["Java"],"tag":["JVM"],"summary":"\u524D\u8A00 \u5BF9\u4E8E Java \u7A0B\u5E8F\u5458\u6765\u8BF4\uFF0C\u5728\u865A\u62DF\u673A\u81EA\u52A8\u5185\u5B58\u7BA1\u7406\u673A\u5236\u4E0B\uFF0C\u4E0D\u518D\u9700\u8981\u50CF C/C++\u7A0B\u5E8F\u5F00\u53D1\u7A0B\u5E8F\u5458\u8FD9\u6837\u4E3A\u6BCF\u4E00\u4E2A new \u64CD\u4F5C\u53BB\u5199\u5BF9\u5E94\u7684 delete/free \u64CD\u4F5C\uFF0C\u4E0D\u5BB9\u6613\u51FA\u73B0\u5185\u5B58\u6CC4\u6F0F\u548C\u5185\u5B58\u6EA2\u51FA\u95EE\u9898\u3002\u6B63\u662F\u56E0\u4E3A Java \u7A0B\u5E8F\u5458\u628A\u5185\u5B58\u63A7\u5236\u6743\u5229\u4EA4\u7ED9 Java \u865A\u62DF\u673A\uFF0C\u4E00\u65E6\u51FA\u73B0\u5185\u5B58\u6CC4\u6F0F\u548C\u6EA2\u51FA\u65B9\u9762\u7684\u95EE\u9898\uFF0C\u5982\u679C\u4E0D\u4E86\u89E3\u865A\u62DF\u673A\u662F\u600E\u6837\u4F7F\u7528\u5185\u5B58\u7684\uFF0C\u90A3\u4E48\u6392\u67E5\u9519\u8BEF\u5C06\u4F1A\u662F\u4E00\u4E2A\u975E\u5E38\u8270","head":[["meta",{"property":"og:url","content":"https://www.ezfri.com/RD/java/jvm/memory-area/page.html"}],["meta",{"property":"og:site_name","content":"EzFri"}],["meta",{"property":"og:title","content":"Java \u5185\u5B58\u533A\u57DF\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.ezfri.com/"}],["meta",{"property":"og:updated_time","content":"2022-12-02T13:59:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Java \u5185\u5B58\u533A\u57DF\u8BE6\u89E3"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:modified_time","content":"2022-12-02T13:59:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00","children":[]},{"level":2,"title":"\u8FD0\u884C\u65F6\u6570\u636E\u533A\u57DF","slug":"\u8FD0\u884C\u65F6\u6570\u636E\u533A\u57DF","children":[{"level":3,"title":"\u7A0B\u5E8F\u8BA1\u6570\u5668","slug":"\u7A0B\u5E8F\u8BA1\u6570\u5668","children":[]},{"level":3,"title":"Java \u865A\u62DF\u673A\u6808","slug":"java-\u865A\u62DF\u673A\u6808","children":[]},{"level":3,"title":"\u672C\u5730\u65B9\u6CD5\u6808","slug":"\u672C\u5730\u65B9\u6CD5\u6808","children":[]},{"level":3,"title":"\u5806","slug":"\u5806","children":[]},{"level":3,"title":"\u65B9\u6CD5\u533A","slug":"\u65B9\u6CD5\u533A","children":[]},{"level":3,"title":"\u8FD0\u884C\u65F6\u5E38\u91CF\u6C60","slug":"\u8FD0\u884C\u65F6\u5E38\u91CF\u6C60","children":[]},{"level":3,"title":"\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60","slug":"\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60","children":[]},{"level":3,"title":"\u76F4\u63A5\u5185\u5B58","slug":"\u76F4\u63A5\u5185\u5B58","children":[]}]},{"level":2,"title":"HotSpot \u865A\u62DF\u673A\u5BF9\u8C61\u63A2\u79D8","slug":"hotspot-\u865A\u62DF\u673A\u5BF9\u8C61\u63A2\u79D8","children":[{"level":3,"title":"\u5BF9\u8C61\u7684\u521B\u5EFA","slug":"\u5BF9\u8C61\u7684\u521B\u5EFA","children":[]},{"level":3,"title":"\u5BF9\u8C61\u7684\u5185\u5B58\u5E03\u5C40","slug":"\u5BF9\u8C61\u7684\u5185\u5B58\u5E03\u5C40","children":[]},{"level":3,"title":"\u5BF9\u8C61\u7684\u8BBF\u95EE\u5B9A\u4F4D","slug":"\u5BF9\u8C61\u7684\u8BBF\u95EE\u5B9A\u4F4D","children":[]}]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","children":[]}],"git":{"createdTime":1669989598000,"updatedTime":1669989598000,"contributors":[{"name":"chun.zheng","email":"zcilive@gmail.com","commits":1}]},"readingTime":{"minutes":22.34,"words":6701},"filePathRelative":"RD/java/jvm/memory-area/page.md","localizedDate":"2022\u5E7412\u67082\u65E5"}');export{e as data};
