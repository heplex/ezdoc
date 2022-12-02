const e=JSON.parse('{"key":"v-509d5fbe","path":"/RD/system-design/basis/refactoring.html","title":"\u91CD\u6784","lang":"zh-CN","frontmatter":{"title":"\u91CD\u6784","category":["\u4EE3\u7801\u8D28\u91CF"],"summary":"\u524D\u6BB5\u65F6\u95F4\u91CD\u8BFB\u4E86\u300A\u91CD\u6784\uFF1A\u6539\u5584\u4EE3\u7801\u65E2\u6709\u8BBE\u8BA1\u300B\uFF0C\u6536\u8D27\u9887\u591A\u3002\u4E8E\u662F\uFF0C\u7B80\u5355\u5199\u4E86\u4E00\u7BC7\u6587\u7AE0\u6765\u804A\u804A\u6211\u5BF9\u91CD\u6784\u7684\u770B\u6CD5\u3002 \u4F55\u8C13\u91CD\u6784\uFF1F \u5B66\u4E60\u91CD\u6784\u5FC5\u770B\u7684\u4E00\u672C\u795E\u4E66\u300A\u91CD\u6784\uFF1A\u6539\u5584\u4EE3\u7801\u65E2\u6709\u8BBE\u8BA1\u300B\u4ECE\u4E24\u4E2A\u89D2\u5EA6\u7ED9\u51FA\u4E86\u91CD\u6784\u7684\u5B9A\u4E49\uFF1A\\r\\" - \u91CD\u6784\uFF08\u540D\u8BCD\uFF09\uFF1A\u5BF9\u8F6F\u4EF6\u5185\u90E8\u7ED3\u6784\u7684\u4E00\u79CD\u8C03\u6574\uFF0C\u76EE\u7684\u662F\u5728\u4E0D\u6539\u53D8\u8F6F\u4EF6\u53EF\u89C2\u5BDF\u884C\u4E3A\u7684\u524D\u63D0\u4E0B\uFF0C\u63D0\u9AD8\u5176\u53EF\u7406\u89E3\u6027\uFF0C\u964D\u4F4E\u5176\u4FEE\u6539\u6210\u672C\u3002\\"\\r\\" - \u91CD\u6784\uFF08\u52A8\u8BCD\uFF09\uFF1A\u4F7F\u7528\u4E00\u7CFB\u5217\u91CD\u6784\u624B\u6CD5\uFF0C\u5728\u4E0D\u6539\u53D8","head":[["meta",{"property":"og:url","content":"https://www.ezfri.com/ezdoc/RD/system-design/basis/refactoring.html"}],["meta",{"property":"og:site_name","content":"EzFri"}],["meta",{"property":"og:title","content":"\u91CD\u6784"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.ezfri.com/ezdoc/"}],["meta",{"property":"og:updated_time","content":"2022-12-02T13:59:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"\u91CD\u6784"}],["meta",{"property":"article:modified_time","content":"2022-12-02T13:59:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4F55\u8C13\u91CD\u6784\uFF1F","slug":"\u4F55\u8C13\u91CD\u6784","children":[]},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u8981\u91CD\u6784\uFF1F","slug":"\u4E3A\u4EC0\u4E48\u8981\u91CD\u6784","children":[]},{"level":2,"title":"\u4F55\u65F6\u8FDB\u884C\u91CD\u6784\uFF1F","slug":"\u4F55\u65F6\u8FDB\u884C\u91CD\u6784","children":[{"level":3,"title":"\u63D0\u4EA4\u4EE3\u7801\u4E4B\u524D","slug":"\u63D0\u4EA4\u4EE3\u7801\u4E4B\u524D","children":[]},{"level":3,"title":"\u5F00\u53D1\u4E00\u4E2A\u65B0\u529F\u80FD\u4E4B\u540E&\u4E4B\u524D","slug":"\u5F00\u53D1\u4E00\u4E2A\u65B0\u529F\u80FD\u4E4B\u540E-\u4E4B\u524D","children":[]},{"level":3,"title":"Code Review \u4E4B\u540E","slug":"code-review-\u4E4B\u540E","children":[]},{"level":3,"title":"\u6361\u5783\u573E\u5F0F\u91CD\u6784","slug":"\u6361\u5783\u573E\u5F0F\u91CD\u6784","children":[]},{"level":3,"title":"\u9605\u8BFB\u7406\u89E3\u4EE3\u7801\u7684\u65F6\u5019","slug":"\u9605\u8BFB\u7406\u89E3\u4EE3\u7801\u7684\u65F6\u5019","children":[]}]},{"level":2,"title":"\u91CD\u6784\u6709\u54EA\u4E9B\u6CE8\u610F\u4E8B\u9879\uFF1F","slug":"\u91CD\u6784\u6709\u54EA\u4E9B\u6CE8\u610F\u4E8B\u9879","children":[{"level":3,"title":"\u5355\u5143\u6D4B\u8BD5\u662F\u91CD\u6784\u7684\u4FDD\u62A4\u7F51","slug":"\u5355\u5143\u6D4B\u8BD5\u662F\u91CD\u6784\u7684\u4FDD\u62A4\u7F51","children":[]},{"level":3,"title":"\u4E0D\u8981\u4E3A\u4E86\u91CD\u6784\u800C\u91CD\u6784","slug":"\u4E0D\u8981\u4E3A\u4E86\u91CD\u6784\u800C\u91CD\u6784","children":[]},{"level":3,"title":"\u9075\u5FAA\u65B9\u6CD5","slug":"\u9075\u5FAA\u65B9\u6CD5","children":[]}]},{"level":2,"title":"\u5982\u4F55\u7EC3\u4E60\u91CD\u6784\uFF1F","slug":"\u5982\u4F55\u7EC3\u4E60\u91CD\u6784","children":[]}],"git":{"createdTime":1669989598000,"updatedTime":1669989598000,"contributors":[{"name":"chun.zheng","email":"zcilive@gmail.com","commits":1}]},"readingTime":{"minutes":8.07,"words":2421},"filePathRelative":"RD/system-design/basis/refactoring.md","localizedDate":"2022\u5E7412\u67082\u65E5"}');export{e as data};
