import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o,c as l,b as n,a as e,e as t,d as a}from"./app.65bdb7b8.js";var c="/assets/image-20220808020532.f5be6a4a.png",p="/assets/image-20220808020548.c818f67d.png",d="/assets/image-20220808020606.2196d280.png",u="/assets/image-20220808020627.8b6dfcd2.png",b="/assets/image-20220808020646.dc7d3d6c.png",g="/assets/image-20220808020701.e4f77a85.png",m="/assets/image-20220808020726.a9ac4b82.png";const h={},v=t('<h1 id="rabbitmq-\u5165\u95E8\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#rabbitmq-\u5165\u95E8\u603B\u7ED3" aria-hidden="true">#</a> RabbitMQ \u5165\u95E8\u603B\u7ED3</h1><h2 id="\u4E00-rabbitmq-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4E00-rabbitmq-\u4ECB\u7ECD" aria-hidden="true">#</a> \u4E00 RabbitMQ \u4ECB\u7ECD</h2><p>\u8FD9\u90E8\u5206\u53C2\u8003\u4E86 \u300ARabbitMQ\u5B9E\u6218\u6307\u5357\u300B\u8FD9\u672C\u4E66\u7684\u7B2C 1 \u7AE0\u548C\u7B2C 2 \u7AE0\u3002</p><h3 id="_1-1-rabbitmq-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-1-rabbitmq-\u7B80\u4ECB" aria-hidden="true">#</a> 1.1 RabbitMQ \u7B80\u4ECB</h3><p>RabbitMQ \u662F\u91C7\u7528 Erlang \u8BED\u8A00\u5B9E\u73B0 AMQP(Advanced Message Queuing Protocol\uFF0C\u9AD8\u7EA7\u6D88\u606F\u961F\u5217\u534F\u8BAE\uFF09\u7684\u6D88\u606F\u4E2D\u95F4\u4EF6\uFF0C\u5B83\u6700\u521D\u8D77\u6E90\u4E8E\u91D1\u878D\u7CFB\u7EDF\uFF0C\u7528\u4E8E\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u5B58\u50A8\u8F6C\u53D1\u6D88\u606F\u3002</p><p>RabbitMQ \u53D1\u5C55\u5230\u4ECA\u5929\uFF0C\u88AB\u8D8A\u6765\u8D8A\u591A\u7684\u4EBA\u8BA4\u53EF\uFF0C\u8FD9\u548C\u5B83\u5728\u6613\u7528\u6027\u3001\u6269\u5C55\u6027\u3001\u53EF\u9760\u6027\u548C\u9AD8\u53EF\u7528\u6027\u7B49\u65B9\u9762\u7684\u5353\u8457\u8868\u73B0\u662F\u5206\u4E0D\u5F00\u7684\u3002RabbitMQ \u7684\u5177\u4F53\u7279\u70B9\u53EF\u4EE5\u6982\u62EC\u4E3A\u4EE5\u4E0B\u51E0\u70B9\uFF1A</p><ul><li><strong>\u53EF\u9760\u6027\uFF1A</strong> RabbitMQ\u4F7F\u7528\u4E00\u4E9B\u673A\u5236\u6765\u4FDD\u8BC1\u6D88\u606F\u7684\u53EF\u9760\u6027\uFF0C\u5982\u6301\u4E45\u5316\u3001\u4F20\u8F93\u786E\u8BA4\u53CA\u53D1\u5E03\u786E\u8BA4\u7B49\u3002</li><li><strong>\u7075\u6D3B\u7684\u8DEF\u7531\uFF1A</strong> \u5728\u6D88\u606F\u8FDB\u5165\u961F\u5217\u4E4B\u524D\uFF0C\u901A\u8FC7\u4EA4\u6362\u5668\u6765\u8DEF\u7531\u6D88\u606F\u3002\u5BF9\u4E8E\u5178\u578B\u7684\u8DEF\u7531\u529F\u80FD\uFF0CRabbitMQ \u5DF1\u7ECF\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5185\u7F6E\u7684\u4EA4\u6362\u5668\u6765\u5B9E\u73B0\u3002\u9488\u5BF9\u66F4\u590D\u6742\u7684\u8DEF\u7531\u529F\u80FD\uFF0C\u53EF\u4EE5\u5C06\u591A\u4E2A\u4EA4\u6362\u5668\u7ED1\u5B9A\u5728\u4E00\u8D77\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u673A\u5236\u6765\u5B9E\u73B0\u81EA\u5DF1\u7684\u4EA4\u6362\u5668\u3002\u8FD9\u4E2A\u540E\u9762\u4F1A\u5728\u6211\u4EEC\u8BB2 RabbitMQ \u6838\u5FC3\u6982\u5FF5\u7684\u65F6\u5019\u8BE6\u7EC6\u4ECB\u7ECD\u5230\u3002</li><li><strong>\u6269\u5C55\u6027\uFF1A</strong> \u591A\u4E2ARabbitMQ\u8282\u70B9\u53EF\u4EE5\u7EC4\u6210\u4E00\u4E2A\u96C6\u7FA4\uFF0C\u4E5F\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u60C5\u51B5\u52A8\u6001\u5730\u6269\u5C55\u96C6\u7FA4\u4E2D\u8282\u70B9\u3002</li><li><strong>\u9AD8\u53EF\u7528\u6027\uFF1A</strong> \u961F\u5217\u53EF\u4EE5\u5728\u96C6\u7FA4\u4E2D\u7684\u673A\u5668\u4E0A\u8BBE\u7F6E\u955C\u50CF\uFF0C\u4F7F\u5F97\u5728\u90E8\u5206\u8282\u70B9\u51FA\u73B0\u95EE\u9898\u7684\u60C5\u51B5\u4E0B\u961F\u5217\u4ECD\u7136\u53EF\u7528\u3002</li><li><strong>\u652F\u6301\u591A\u79CD\u534F\u8BAE\uFF1A</strong> RabbitMQ \u9664\u4E86\u539F\u751F\u652F\u6301 AMQP \u534F\u8BAE\uFF0C\u8FD8\u652F\u6301 STOMP\u3001MQTT \u7B49\u591A\u79CD\u6D88\u606F\u4E2D\u95F4\u4EF6\u534F\u8BAE\u3002</li><li><strong>\u591A\u8BED\u8A00\u5BA2\u6237\u7AEF\uFF1A</strong> RabbitMQ\u51E0\u4E4E\u652F\u6301\u6240\u6709\u5E38\u7528\u8BED\u8A00\uFF0C\u6BD4\u5982 Java\u3001Python\u3001Ruby\u3001PHP\u3001C#\u3001JavaScript\u7B49\u3002</li><li><strong>\u6613\u7528\u7684\u7BA1\u7406\u754C\u9762\uFF1A</strong> RabbitMQ\u63D0\u4F9B\u4E86\u4E00\u4E2A\u6613\u7528\u7684\u7528\u6237\u754C\u9762\uFF0C\u4F7F\u5F97\u7528\u6237\u53EF\u4EE5\u76D1\u63A7\u548C\u7BA1\u7406\u6D88\u606F\u3001\u96C6\u7FA4\u4E2D\u7684\u8282\u70B9\u7B49\u3002\u5728\u5B89\u88C5 RabbitMQ \u7684\u65F6\u5019\u4F1A\u4ECB\u7ECD\u5230\uFF0C\u5B89\u88C5\u597D RabbitMQ \u5C31\u81EA\u5E26\u7BA1\u7406\u754C\u9762\u3002</li><li><strong>\u63D2\u4EF6\u673A\u5236\uFF1A</strong> RabbitMQ \u63D0\u4F9B\u4E86\u8BB8\u591A\u63D2\u4EF6\uFF0C\u4EE5\u5B9E\u73B0\u4ECE\u591A\u65B9\u9762\u8FDB\u884C\u6269\u5C55\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u7F16\u5199\u81EA\u5DF1\u7684\u63D2\u4EF6\u3002\u611F\u89C9\u8FD9\u4E2A\u6709\u70B9\u7C7B\u4F3C Dubbo \u7684 SPI\u673A\u5236\u3002</li></ul><h3 id="_1-2-rabbitmq-\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-2-rabbitmq-\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> 1.2 RabbitMQ \u6838\u5FC3\u6982\u5FF5</h3><p>RabbitMQ \u6574\u4F53\u4E0A\u662F\u4E00\u4E2A\u751F\u4EA7\u8005\u4E0E\u6D88\u8D39\u8005\u6A21\u578B\uFF0C\u4E3B\u8981\u8D1F\u8D23\u63A5\u6536\u3001\u5B58\u50A8\u548C\u8F6C\u53D1\u6D88\u606F\u3002\u53EF\u4EE5\u628A\u6D88\u606F\u4F20\u9012\u7684\u8FC7\u7A0B\u60F3\u8C61\u6210\uFF1A\u5F53\u4F60\u5C06\u4E00\u4E2A\u5305\u88F9\u9001\u5230\u90AE\u5C40\uFF0C\u90AE\u5C40\u4F1A\u6682\u5B58\u5E76\u6700\u7EC8\u5C06\u90AE\u4EF6\u901A\u8FC7\u90AE\u9012\u5458\u9001\u5230\u6536\u4EF6\u4EBA\u7684\u624B\u4E0A\uFF0CRabbitMQ\u5C31\u597D\u6BD4\u7531\u90AE\u5C40\u3001\u90AE\u7BB1\u548C\u90AE\u9012\u5458\u7EC4\u6210\u7684\u4E00\u4E2A\u7CFB\u7EDF\u3002\u4ECE\u8BA1\u7B97\u673A\u672F\u8BED\u5C42\u9762\u6765\u8BF4\uFF0CRabbitMQ \u6A21\u578B\u66F4\u50CF\u662F\u4E00\u79CD\u4EA4\u6362\u673A\u6A21\u578B\u3002</p><p>\u4E0B\u9762\u518D\u6765\u770B\u770B\u56FE1\u2014\u2014 RabbitMQ \u7684\u6574\u4F53\u6A21\u578B\u67B6\u6784\u3002</p><p><img src="'+c+'" alt="\u56FE1-RabbitMQ \u7684\u6574\u4F53\u6A21\u578B\u67B6\u6784" loading="lazy"></p><p>\u4E0B\u9762\u6211\u4F1A\u4E00\u4E00\u4ECB\u7ECD\u4E0A\u56FE\u4E2D\u7684\u4E00\u4E9B\u6982\u5FF5\u3002</p><h4 id="_1-2-1-producer-\u751F\u4EA7\u8005-\u548C-consumer-\u6D88\u8D39\u8005" tabindex="-1"><a class="header-anchor" href="#_1-2-1-producer-\u751F\u4EA7\u8005-\u548C-consumer-\u6D88\u8D39\u8005" aria-hidden="true">#</a> 1.2.1 Producer(\u751F\u4EA7\u8005) \u548C Consumer(\u6D88\u8D39\u8005)</h4><ul><li><strong>Producer(\u751F\u4EA7\u8005)</strong> :\u751F\u4EA7\u6D88\u606F\u7684\u4E00\u65B9\uFF08\u90AE\u4EF6\u6295\u9012\u8005\uFF09</li><li><strong>Consumer(\u6D88\u8D39\u8005)</strong> :\u6D88\u8D39\u6D88\u606F\u7684\u4E00\u65B9\uFF08\u90AE\u4EF6\u6536\u4EF6\u4EBA\uFF09</li></ul><p>\u6D88\u606F\u4E00\u822C\u7531 2 \u90E8\u5206\u7EC4\u6210\uFF1A<strong>\u6D88\u606F\u5934</strong>\uFF08\u6216\u8005\u8BF4\u662F\u6807\u7B7E Label\uFF09\u548C <strong>\u6D88\u606F\u4F53</strong>\u3002\u6D88\u606F\u4F53\u4E5F\u53EF\u4EE5\u79F0\u4E3A payLoad ,\u6D88\u606F\u4F53\u662F\u4E0D\u900F\u660E\u7684\uFF0C\u800C\u6D88\u606F\u5934\u5219\u7531\u4E00\u7CFB\u5217\u7684\u53EF\u9009\u5C5E\u6027\u7EC4\u6210\uFF0C\u8FD9\u4E9B\u5C5E\u6027\u5305\u62EC routing-key\uFF08\u8DEF\u7531\u952E\uFF09\u3001priority\uFF08\u76F8\u5BF9\u4E8E\u5176\u4ED6\u6D88\u606F\u7684\u4F18\u5148\u6743\uFF09\u3001delivery-mode\uFF08\u6307\u51FA\u8BE5\u6D88\u606F\u53EF\u80FD\u9700\u8981\u6301\u4E45\u6027\u5B58\u50A8\uFF09\u7B49\u3002\u751F\u4EA7\u8005\u628A\u6D88\u606F\u4EA4\u7531 RabbitMQ \u540E\uFF0CRabbitMQ \u4F1A\u6839\u636E\u6D88\u606F\u5934\u628A\u6D88\u606F\u53D1\u9001\u7ED9\u611F\u5174\u8DA3\u7684 Consumer(\u6D88\u8D39\u8005)\u3002</p><h4 id="_1-2-2-exchange-\u4EA4\u6362\u5668" tabindex="-1"><a class="header-anchor" href="#_1-2-2-exchange-\u4EA4\u6362\u5668" aria-hidden="true">#</a> 1.2.2 Exchange(\u4EA4\u6362\u5668)</h4><p>\u5728 RabbitMQ \u4E2D\uFF0C\u6D88\u606F\u5E76\u4E0D\u662F\u76F4\u63A5\u88AB\u6295\u9012\u5230 <strong>Queue(\u6D88\u606F\u961F\u5217)</strong> \u4E2D\u7684\uFF0C\u4E2D\u95F4\u8FD8\u5FC5\u987B\u7ECF\u8FC7 <strong>Exchange(\u4EA4\u6362\u5668)</strong> \u8FD9\u4E00\u5C42\uFF0C<strong>Exchange(\u4EA4\u6362\u5668)</strong> \u4F1A\u628A\u6211\u4EEC\u7684\u6D88\u606F\u5206\u914D\u5230\u5BF9\u5E94\u7684 <strong>Queue(\u6D88\u606F\u961F\u5217)</strong> \u4E2D\u3002</p><p><strong>Exchange(\u4EA4\u6362\u5668)</strong> \u7528\u6765\u63A5\u6536\u751F\u4EA7\u8005\u53D1\u9001\u7684\u6D88\u606F\u5E76\u5C06\u8FD9\u4E9B\u6D88\u606F\u8DEF\u7531\u7ED9\u670D\u52A1\u5668\u4E2D\u7684\u961F\u5217\u4E2D\uFF0C\u5982\u679C\u8DEF\u7531\u4E0D\u5230\uFF0C\u6216\u8BB8\u4F1A\u8FD4\u56DE\u7ED9 <strong>Producer(\u751F\u4EA7\u8005)</strong> \uFF0C\u6216\u8BB8\u4F1A\u88AB\u76F4\u63A5\u4E22\u5F03\u6389 \u3002\u8FD9\u91CC\u53EF\u4EE5\u5C06RabbitMQ\u4E2D\u7684\u4EA4\u6362\u5668\u770B\u4F5C\u4E00\u4E2A\u7B80\u5355\u7684\u5B9E\u4F53\u3002</p><p><strong>RabbitMQ \u7684 Exchange(\u4EA4\u6362\u5668) \u67094\u79CD\u7C7B\u578B\uFF0C\u4E0D\u540C\u7684\u7C7B\u578B\u5BF9\u5E94\u7740\u4E0D\u540C\u7684\u8DEF\u7531\u7B56\u7565</strong>\uFF1A<strong>direct(\u9ED8\u8BA4)</strong>\uFF0C<strong>fanout</strong>, <strong>topic</strong>, \u548C <strong>headers</strong>\uFF0C\u4E0D\u540C\u7C7B\u578B\u7684Exchange\u8F6C\u53D1\u6D88\u606F\u7684\u7B56\u7565\u6709\u6240\u533A\u522B\u3002\u8FD9\u4E2A\u4F1A\u5728\u4ECB\u7ECD <strong>Exchange Types(\u4EA4\u6362\u5668\u7C7B\u578B)</strong> \u7684\u65F6\u5019\u4ECB\u7ECD\u5230\u3002</p><p>Exchange(\u4EA4\u6362\u5668) \u793A\u610F\u56FE\u5982\u4E0B\uFF1A</p><p><img src="'+p+'" alt="Exchange(\u4EA4\u6362\u5668) \u793A\u610F\u56FE" loading="lazy"></p><p>\u751F\u4EA7\u8005\u5C06\u6D88\u606F\u53D1\u7ED9\u4EA4\u6362\u5668\u7684\u65F6\u5019\uFF0C\u4E00\u822C\u4F1A\u6307\u5B9A\u4E00\u4E2A <strong>RoutingKey(\u8DEF\u7531\u952E)</strong>\uFF0C\u7528\u6765\u6307\u5B9A\u8FD9\u4E2A\u6D88\u606F\u7684\u8DEF\u7531\u89C4\u5219\uFF0C\u800C\u8FD9\u4E2A <strong>RoutingKey \u9700\u8981\u4E0E\u4EA4\u6362\u5668\u7C7B\u578B\u548C\u7ED1\u5B9A\u952E(BindingKey)\u8054\u5408\u4F7F\u7528\u624D\u80FD\u6700\u7EC8\u751F\u6548</strong>\u3002</p><p>RabbitMQ \u4E2D\u901A\u8FC7 <strong>Binding(\u7ED1\u5B9A)</strong> \u5C06 <strong>Exchange(\u4EA4\u6362\u5668)</strong> \u4E0E <strong>Queue(\u6D88\u606F\u961F\u5217)</strong> \u5173\u8054\u8D77\u6765\uFF0C\u5728\u7ED1\u5B9A\u7684\u65F6\u5019\u4E00\u822C\u4F1A\u6307\u5B9A\u4E00\u4E2A <strong>BindingKey(\u7ED1\u5B9A\u5EFA)</strong> ,\u8FD9\u6837 RabbitMQ \u5C31\u77E5\u9053\u5982\u4F55\u6B63\u786E\u5C06\u6D88\u606F\u8DEF\u7531\u5230\u961F\u5217\u4E86,\u5982\u4E0B\u56FE\u6240\u793A\u3002\u4E00\u4E2A\u7ED1\u5B9A\u5C31\u662F\u57FA\u4E8E\u8DEF\u7531\u952E\u5C06\u4EA4\u6362\u5668\u548C\u6D88\u606F\u961F\u5217\u8FDE\u63A5\u8D77\u6765\u7684\u8DEF\u7531\u89C4\u5219\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5C06\u4EA4\u6362\u5668\u7406\u89E3\u6210\u4E00\u4E2A\u7531\u7ED1\u5B9A\u6784\u6210\u7684\u8DEF\u7531\u8868\u3002Exchange \u548C Queue \u7684\u7ED1\u5B9A\u53EF\u4EE5\u662F\u591A\u5BF9\u591A\u7684\u5173\u7CFB\u3002</p><p>Binding(\u7ED1\u5B9A) \u793A\u610F\u56FE\uFF1A</p><p><img src="'+d+'" alt="Binding(\u7ED1\u5B9A) \u793A\u610F\u56FE" loading="lazy"></p><p>\u751F\u4EA7\u8005\u5C06\u6D88\u606F\u53D1\u9001\u7ED9\u4EA4\u6362\u5668\u65F6\uFF0C\u9700\u8981\u4E00\u4E2ARoutingKey,\u5F53 BindingKey \u548C RoutingKey \u76F8\u5339\u914D\u65F6\uFF0C\u6D88\u606F\u4F1A\u88AB\u8DEF\u7531\u5230\u5BF9\u5E94\u7684\u961F\u5217\u4E2D\u3002\u5728\u7ED1\u5B9A\u591A\u4E2A\u961F\u5217\u5230\u540C\u4E00\u4E2A\u4EA4\u6362\u5668\u7684\u65F6\u5019\uFF0C\u8FD9\u4E9B\u7ED1\u5B9A\u5141\u8BB8\u4F7F\u7528\u76F8\u540C\u7684 BindingKey\u3002BindingKey \u5E76\u4E0D\u662F\u5728\u6240\u6709\u7684\u60C5\u51B5\u4E0B\u90FD\u751F\u6548\uFF0C\u5B83\u4F9D\u8D56\u4E8E\u4EA4\u6362\u5668\u7C7B\u578B\uFF0C\u6BD4\u5982fanout\u7C7B\u578B\u7684\u4EA4\u6362\u5668\u5C31\u4F1A\u65E0\u89C6\uFF0C\u800C\u662F\u5C06\u6D88\u606F\u8DEF\u7531\u5230\u6240\u6709\u7ED1\u5B9A\u5230\u8BE5\u4EA4\u6362\u5668\u7684\u961F\u5217\u4E2D\u3002</p><h4 id="_1-2-3-queue-\u6D88\u606F\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#_1-2-3-queue-\u6D88\u606F\u961F\u5217" aria-hidden="true">#</a> 1.2.3 Queue(\u6D88\u606F\u961F\u5217)</h4><p><strong>Queue(\u6D88\u606F\u961F\u5217)</strong> \u7528\u6765\u4FDD\u5B58\u6D88\u606F\u76F4\u5230\u53D1\u9001\u7ED9\u6D88\u8D39\u8005\u3002\u5B83\u662F\u6D88\u606F\u7684\u5BB9\u5668\uFF0C\u4E5F\u662F\u6D88\u606F\u7684\u7EC8\u70B9\u3002\u4E00\u4E2A\u6D88\u606F\u53EF\u6295\u5165\u4E00\u4E2A\u6216\u591A\u4E2A\u961F\u5217\u3002\u6D88\u606F\u4E00\u76F4\u5728\u961F\u5217\u91CC\u9762\uFF0C\u7B49\u5F85\u6D88\u8D39\u8005\u8FDE\u63A5\u5230\u8FD9\u4E2A\u961F\u5217\u5C06\u5176\u53D6\u8D70\u3002</p><p><strong>RabbitMQ</strong> \u4E2D\u6D88\u606F\u53EA\u80FD\u5B58\u50A8\u5728 <strong>\u961F\u5217</strong> \u4E2D\uFF0C\u8FD9\u4E00\u70B9\u548C <strong>Kafka</strong> \u8FD9\u79CD\u6D88\u606F\u4E2D\u95F4\u4EF6\u76F8\u53CD\u3002Kafka \u5C06\u6D88\u606F\u5B58\u50A8\u5728 <strong>topic\uFF08\u4E3B\u9898\uFF09</strong> \u8FD9\u4E2A\u903B\u8F91\u5C42\u9762\uFF0C\u800C\u76F8\u5BF9\u5E94\u7684\u961F\u5217\u903B\u8F91\u53EA\u662Ftopic\u5B9E\u9645\u5B58\u50A8\u6587\u4EF6\u4E2D\u7684\u4F4D\u79FB\u6807\u8BC6\u3002 RabbitMQ \u7684\u751F\u4EA7\u8005\u751F\u4EA7\u6D88\u606F\u5E76\u6700\u7EC8\u6295\u9012\u5230\u961F\u5217\u4E2D\uFF0C\u6D88\u8D39\u8005\u53EF\u4EE5\u4ECE\u961F\u5217\u4E2D\u83B7\u53D6\u6D88\u606F\u5E76\u6D88\u8D39\u3002</p><p><strong>\u591A\u4E2A\u6D88\u8D39\u8005\u53EF\u4EE5\u8BA2\u9605\u540C\u4E00\u4E2A\u961F\u5217</strong>\uFF0C\u8FD9\u65F6\u961F\u5217\u4E2D\u7684\u6D88\u606F\u4F1A\u88AB\u5E73\u5747\u5206\u644A\uFF08Round-Robin\uFF0C\u5373\u8F6E\u8BE2\uFF09\u7ED9\u591A\u4E2A\u6D88\u8D39\u8005\u8FDB\u884C\u5904\u7406\uFF0C\u800C\u4E0D\u662F\u6BCF\u4E2A\u6D88\u8D39\u8005\u90FD\u6536\u5230\u6240\u6709\u7684\u6D88\u606F\u5E76\u5904\u7406\uFF0C\u8FD9\u6837\u907F\u514D\u6D88\u606F\u88AB\u91CD\u590D\u6D88\u8D39\u3002</p><p><strong>RabbitMQ</strong> \u4E0D\u652F\u6301\u961F\u5217\u5C42\u9762\u7684\u5E7F\u64AD\u6D88\u8D39,\u5982\u679C\u6709\u5E7F\u64AD\u6D88\u8D39\u7684\u9700\u6C42\uFF0C\u9700\u8981\u5728\u5176\u4E0A\u8FDB\u884C\u4E8C\u6B21\u5F00\u53D1,\u8FD9\u6837\u4F1A\u5F88\u9EBB\u70E6\uFF0C\u4E0D\u5EFA\u8BAE\u8FD9\u6837\u505A\u3002</p><h4 id="_1-2-4-broker-\u6D88\u606F\u4E2D\u95F4\u4EF6\u7684\u670D\u52A1\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-2-4-broker-\u6D88\u606F\u4E2D\u95F4\u4EF6\u7684\u670D\u52A1\u8282\u70B9" aria-hidden="true">#</a> 1.2.4 Broker\uFF08\u6D88\u606F\u4E2D\u95F4\u4EF6\u7684\u670D\u52A1\u8282\u70B9\uFF09</h4><p>\u5BF9\u4E8E RabbitMQ \u6765\u8BF4\uFF0C\u4E00\u4E2A RabbitMQ Broker \u53EF\u4EE5\u7B80\u5355\u5730\u770B\u4F5C\u4E00\u4E2A RabbitMQ \u670D\u52A1\u8282\u70B9\uFF0C\u6216\u8005RabbitMQ\u670D\u52A1\u5B9E\u4F8B\u3002\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u4E5F\u53EF\u4EE5\u5C06\u4E00\u4E2A RabbitMQ Broker \u770B\u4F5C\u4E00\u53F0 RabbitMQ \u670D\u52A1\u5668\u3002</p><p>\u4E0B\u56FE\u5C55\u793A\u4E86\u751F\u4EA7\u8005\u5C06\u6D88\u606F\u5B58\u5165 RabbitMQ Broker,\u4EE5\u53CA\u6D88\u8D39\u8005\u4ECEBroker\u4E2D\u6D88\u8D39\u6570\u636E\u7684\u6574\u4E2A\u6D41\u7A0B\u3002</p><p><img src="'+u+'" alt="\u6D88\u606F\u961F\u5217\u7684\u8FD0\u8F6C\u8FC7\u7A0B" loading="lazy"></p><p>\u8FD9\u6837\u56FE1\u4E2D\u7684\u4E00\u4E9B\u5173\u4E8E RabbitMQ \u7684\u57FA\u672C\u6982\u5FF5\u6211\u4EEC\u5C31\u4ECB\u7ECD\u5B8C\u6BD5\u4E86\uFF0C\u4E0B\u9762\u518D\u6765\u4ECB\u7ECD\u4E00\u4E0B <strong>Exchange Types(\u4EA4\u6362\u5668\u7C7B\u578B)</strong> \u3002</p><h4 id="_1-2-5-exchange-types-\u4EA4\u6362\u5668\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-2-5-exchange-types-\u4EA4\u6362\u5668\u7C7B\u578B" aria-hidden="true">#</a> 1.2.5 Exchange Types(\u4EA4\u6362\u5668\u7C7B\u578B)</h4><p>RabbitMQ \u5E38\u7528\u7684 Exchange Type \u6709 <strong>fanout</strong>\u3001<strong>direct</strong>\u3001<strong>topic</strong>\u3001<strong>headers</strong> \u8FD9\u56DB\u79CD\uFF08AMQP\u89C4\u8303\u91CC\u8FD8\u63D0\u5230\u4E24\u79CD Exchange Type\uFF0C\u5206\u522B\u4E3A system \u4E0E \u81EA\u5B9A\u4E49\uFF0C\u8FD9\u91CC\u4E0D\u4E88\u4EE5\u63CF\u8FF0\uFF09\u3002</p><h5 id="_1-fanout" tabindex="-1"><a class="header-anchor" href="#_1-fanout" aria-hidden="true">#</a> \u2460 fanout</h5><p>fanout \u7C7B\u578B\u7684Exchange\u8DEF\u7531\u89C4\u5219\u975E\u5E38\u7B80\u5355\uFF0C\u5B83\u4F1A\u628A\u6240\u6709\u53D1\u9001\u5230\u8BE5Exchange\u7684\u6D88\u606F\u8DEF\u7531\u5230\u6240\u6709\u4E0E\u5B83\u7ED1\u5B9A\u7684Queue\u4E2D\uFF0C\u4E0D\u9700\u8981\u505A\u4EFB\u4F55\u5224\u65AD\u64CD\u4F5C\uFF0C\u6240\u4EE5 fanout \u7C7B\u578B\u662F\u6240\u6709\u7684\u4EA4\u6362\u673A\u7C7B\u578B\u91CC\u9762\u901F\u5EA6\u6700\u5FEB\u7684\u3002fanout \u7C7B\u578B\u5E38\u7528\u6765\u5E7F\u64AD\u6D88\u606F\u3002</p><h5 id="_2-direct" tabindex="-1"><a class="header-anchor" href="#_2-direct" aria-hidden="true">#</a> \u2461 direct</h5><p>direct \u7C7B\u578B\u7684Exchange\u8DEF\u7531\u89C4\u5219\u4E5F\u5F88\u7B80\u5355\uFF0C\u5B83\u4F1A\u628A\u6D88\u606F\u8DEF\u7531\u5230\u90A3\u4E9B Bindingkey \u4E0E RoutingKey \u5B8C\u5168\u5339\u914D\u7684 Queue \u4E2D\u3002</p><p><img src="'+b+'" alt="direct \u7C7B\u578B\u4EA4\u6362\u5668" loading="lazy"></p><p>\u4EE5\u4E0A\u56FE\u4E3A\u4F8B\uFF0C\u5982\u679C\u53D1\u9001\u6D88\u606F\u7684\u65F6\u5019\u8BBE\u7F6E\u8DEF\u7531\u952E\u4E3A\u201Cwarning\u201D,\u90A3\u4E48\u6D88\u606F\u4F1A\u8DEF\u7531\u5230 Queue1 \u548C Queue2\u3002\u5982\u679C\u5728\u53D1\u9001\u6D88\u606F\u7684\u65F6\u5019\u8BBE\u7F6E\u8DEF\u7531\u952E\u4E3A&quot;Info\u201D\u6216\u8005&quot;debug\u201D\uFF0C\u6D88\u606F\u53EA\u4F1A\u8DEF\u7531\u5230Queue2\u3002\u5982\u679C\u4EE5\u5176\u4ED6\u7684\u8DEF\u7531\u952E\u53D1\u9001\u6D88\u606F\uFF0C\u5219\u6D88\u606F\u4E0D\u4F1A\u8DEF\u7531\u5230\u8FD9\u4E24\u4E2A\u961F\u5217\u4E2D\u3002</p><p>direct \u7C7B\u578B\u5E38\u7528\u5728\u5904\u7406\u6709\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\uFF0C\u6839\u636E\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u628A\u6D88\u606F\u53D1\u9001\u5230\u5BF9\u5E94\u7684\u961F\u5217\uFF0C\u8FD9\u6837\u53EF\u4EE5\u6307\u6D3E\u66F4\u591A\u7684\u8D44\u6E90\u53BB\u5904\u7406\u9AD8\u4F18\u5148\u7EA7\u7684\u961F\u5217\u3002</p><h5 id="_3-topic" tabindex="-1"><a class="header-anchor" href="#_3-topic" aria-hidden="true">#</a> \u2462 topic</h5><p>\u524D\u9762\u8BB2\u5230direct\u7C7B\u578B\u7684\u4EA4\u6362\u5668\u8DEF\u7531\u89C4\u5219\u662F\u5B8C\u5168\u5339\u914D BindingKey \u548C RoutingKey \uFF0C\u4F46\u662F\u8FD9\u79CD\u4E25\u683C\u7684\u5339\u914D\u65B9\u5F0F\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\u4E0D\u80FD\u6EE1\u8DB3\u5B9E\u9645\u4E1A\u52A1\u7684\u9700\u6C42\u3002topic\u7C7B\u578B\u7684\u4EA4\u6362\u5668\u5728\u5339\u914D\u89C4\u5219\u4E0A\u8FDB\u884C\u4E86\u6269\u5C55\uFF0C\u5B83\u4E0E direct \u7C7B\u578B\u7684\u4EA4\u6362\u5668\u76F8\u4F3C\uFF0C\u4E5F\u662F\u5C06\u6D88\u606F\u8DEF\u7531\u5230 BindingKey \u548C RoutingKey \u76F8\u5339\u914D\u7684\u961F\u5217\u4E2D\uFF0C\u4F46\u8FD9\u91CC\u7684\u5339\u914D\u89C4\u5219\u6709\u4E9B\u4E0D\u540C\uFF0C\u5B83\u7EA6\u5B9A\uFF1A</p><ul><li>RoutingKey \u4E3A\u4E00\u4E2A\u70B9\u53F7\u201C\uFF0E\u201D\u5206\u9694\u7684\u5B57\u7B26\u4E32\uFF08\u88AB\u70B9\u53F7\u201C\uFF0E\u201D\u5206\u9694\u5F00\u7684\u6BCF\u4E00\u6BB5\u72EC\u7ACB\u7684\u5B57\u7B26\u4E32\u79F0\u4E3A\u4E00\u4E2A\u5355\u8BCD\uFF09\uFF0C\u5982 \u201Ccom.rabbitmq.client\u201D\u3001\u201Cjava.util.concurrent\u201D\u3001\u201Ccom.hidden.client\u201D;</li><li>BindingKey \u548C RoutingKey \u4E00\u6837\u4E5F\u662F\u70B9\u53F7\u201C\uFF0E\u201D\u5206\u9694\u7684\u5B57\u7B26\u4E32\uFF1B</li><li>BindingKey \u4E2D\u53EF\u4EE5\u5B58\u5728\u4E24\u79CD\u7279\u6B8A\u5B57\u7B26\u4E32\u201C*\u201D\u548C\u201C#\u201D\uFF0C\u7528\u4E8E\u505A\u6A21\u7CCA\u5339\u914D\uFF0C\u5176\u4E2D\u201C*\u201D\u7528\u4E8E\u5339\u914D\u4E00\u4E2A\u5355\u8BCD\uFF0C\u201C#\u201D\u7528\u4E8E\u5339\u914D\u591A\u4E2A\u5355\u8BCD(\u53EF\u4EE5\u662F\u96F6\u4E2A)\u3002</li></ul><p><img src="'+g+'" alt="topic \u7C7B\u578B\u4EA4\u6362\u5668" loading="lazy"></p><p>\u4EE5\u4E0A\u56FE\u4E3A\u4F8B\uFF1A</p><ul><li>\u8DEF\u7531\u952E\u4E3A \u201Ccom.rabbitmq.client\u201D \u7684\u6D88\u606F\u4F1A\u540C\u65F6\u8DEF\u7531\u5230 Queue1 \u548C Queue2;</li><li>\u8DEF\u7531\u952E\u4E3A \u201Ccom.hidden.client\u201D \u7684\u6D88\u606F\u53EA\u4F1A\u8DEF\u7531\u5230 Queue2 \u4E2D\uFF1B</li><li>\u8DEF\u7531\u952E\u4E3A \u201Ccom.hidden.demo\u201D \u7684\u6D88\u606F\u53EA\u4F1A\u8DEF\u7531\u5230 Queue2 \u4E2D\uFF1B</li><li>\u8DEF\u7531\u952E\u4E3A \u201Cjava.rabbitmq.demo\u201D \u7684\u6D88\u606F\u53EA\u4F1A\u8DEF\u7531\u5230 Queue1 \u4E2D\uFF1B</li><li>\u8DEF\u7531\u952E\u4E3A \u201Cjava.util.concurrent\u201D \u7684\u6D88\u606F\u5C06\u4F1A\u88AB\u4E22\u5F03\u6216\u8005\u8FD4\u56DE\u7ED9\u751F\u4EA7\u8005\uFF08\u9700\u8981\u8BBE\u7F6E mandatory \u53C2\u6570\uFF09\uFF0C\u56E0\u4E3A\u5B83\u6CA1\u6709\u5339\u914D\u4EFB\u4F55\u8DEF\u7531\u952E\u3002</li></ul><h5 id="_4-headers-\u4E0D\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#_4-headers-\u4E0D\u63A8\u8350" aria-hidden="true">#</a> \u2463 headers(\u4E0D\u63A8\u8350)</h5><p>headers \u7C7B\u578B\u7684\u4EA4\u6362\u5668\u4E0D\u4F9D\u8D56\u4E8E\u8DEF\u7531\u952E\u7684\u5339\u914D\u89C4\u5219\u6765\u8DEF\u7531\u6D88\u606F\uFF0C\u800C\u662F\u6839\u636E\u53D1\u9001\u7684\u6D88\u606F\u5185\u5BB9\u4E2D\u7684 headers \u5C5E\u6027\u8FDB\u884C\u5339\u914D\u3002\u5728\u7ED1\u5B9A\u961F\u5217\u548C\u4EA4\u6362\u5668\u65F6\u6307\u5B9A\u4E00\u7EC4\u952E\u503C\u5BF9\uFF0C\u5F53\u53D1\u9001\u6D88\u606F\u5230\u4EA4\u6362\u5668\u65F6\uFF0CRabbitMQ\u4F1A\u83B7\u53D6\u5230\u8BE5\u6D88\u606F\u7684 headers\uFF08\u4E5F\u662F\u4E00\u4E2A\u952E\u503C\u5BF9\u7684\u5F62\u5F0F)\uFF0C\u5BF9\u6BD4\u5176\u4E2D\u7684\u952E\u503C\u5BF9\u662F\u5426\u5B8C\u5168\u5339\u914D\u961F\u5217\u548C\u4EA4\u6362\u5668\u7ED1\u5B9A\u65F6\u6307\u5B9A\u7684\u952E\u503C\u5BF9\uFF0C\u5982\u679C\u5B8C\u5168\u5339\u914D\u5219\u6D88\u606F\u4F1A\u8DEF\u7531\u5230\u8BE5\u961F\u5217\uFF0C\u5426\u5219\u4E0D\u4F1A\u8DEF\u7531\u5230\u8BE5\u961F\u5217\u3002headers \u7C7B\u578B\u7684\u4EA4\u6362\u5668\u6027\u80FD\u4F1A\u5F88\u5DEE\uFF0C\u800C\u4E14\u4E5F\u4E0D\u5B9E\u7528\uFF0C\u57FA\u672C\u4E0A\u4E0D\u4F1A\u770B\u5230\u5B83\u7684\u5B58\u5728\u3002</p><h2 id="\u4E8C-\u5B89\u88C5-rabbitmq" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u5B89\u88C5-rabbitmq" aria-hidden="true">#</a> \u4E8C \u5B89\u88C5 RabbitMQ</h2><p>\u901A\u8FC7 Docker \u5B89\u88C5\u975E\u5E38\u65B9\u4FBF\uFF0C\u53EA\u9700\u8981\u51E0\u6761\u547D\u4EE4\u5C31\u597D\u4E86\uFF0C\u6211\u8FD9\u91CC\u662F\u53EA\u8BF4\u4E00\u4E0B\u5E38\u89C4\u5B89\u88C5\u65B9\u6CD5\u3002</p><p>\u524D\u9762\u63D0\u5230\u4E86 RabbitMQ \u662F\u7531 Erlang\u8BED\u8A00\u7F16\u5199\u7684\uFF0C\u4E5F\u6B63\u56E0\u5982\u6B64\uFF0C\u5728\u5B89\u88C5RabbitMQ \u4E4B\u524D\u9700\u8981\u5B89\u88C5 Erlang\u3002</p><p>\u6CE8\u610F\uFF1A\u5728\u5B89\u88C5 RabbitMQ \u7684\u65F6\u5019\u9700\u8981\u6CE8\u610F RabbitMQ \u548C Erlang \u7684\u7248\u672C\u5173\u7CFB\uFF0C\u5982\u679C\u4E0D\u6CE8\u610F\u7684\u8BDD\u4F1A\u5BFC\u81F4\u51FA\u9519\uFF0C\u4E24\u8005\u5BF9\u5E94\u5173\u7CFB\u5982\u4E0B:</p><p><img src="'+m+`" alt="RabbitMQ \u548C Erlang \u7684\u7248\u672C\u5173\u7CFB" loading="lazy"></p><h3 id="_2-1-\u5B89\u88C5-erlang" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5B89\u88C5-erlang" aria-hidden="true">#</a> 2.1 \u5B89\u88C5 erlang</h3><p><strong>1 \u4E0B\u8F7D erlang \u5B89\u88C5\u5305</strong></p><p>\u5728\u5B98\u7F51\u4E0B\u8F7D\u7136\u540E\u4E0A\u4F20\u5230 Linux \u4E0A\u6216\u8005\u76F4\u63A5\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u4E0B\u8F7D\u5BF9\u5E94\u7684\u7248\u672C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@SnailClimb local<span class="token punctuation">]</span><span class="token comment">#wget https://erlang.org/download/otp_src_19.3.tar.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,62),k=a("erlang \u5B98\u7F51\u4E0B\u8F7D\uFF1A"),_={href:"https://www.erlang.org/downloads",target:"_blank",rel:"noopener noreferrer"},x=a("https://www.erlang.org/downloads"),Q=t(`<p><strong>2 \u89E3\u538B erlang \u5B89\u88C5\u5305</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@SnailClimb local<span class="token punctuation">]</span><span class="token comment">#tar -xvzf otp_src_19.3.tar.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3 \u5220\u9664 erlang \u5B89\u88C5\u5305</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@SnailClimb local<span class="token punctuation">]</span><span class="token comment">#rm -rf otp_src_19.3.tar.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4 \u5B89\u88C5 erlang \u7684\u4F9D\u8D56\u5DE5\u5177</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@SnailClimb local<span class="token punctuation">]</span><span class="token comment">#yum -y install make gcc gcc-c++ kernel-devel m4 ncurses-devel openssl-devel unixODBC-devel</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>5 \u8FDB\u5165erlang \u5B89\u88C5\u5305\u89E3\u538B\u6587\u4EF6\u5BF9 erlang \u8FDB\u884C\u5B89\u88C5\u73AF\u5883\u7684\u914D\u7F6E</strong></p><p>\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@SnailClimb local<span class="token punctuation">]</span><span class="token comment"># mkdir erlang</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5BF9 erlang \u8FDB\u884C\u5B89\u88C5\u73AF\u5883\u7684\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@SnailClimb otp_src_19.3<span class="token punctuation">]</span><span class="token comment"># </span>
./configure --prefix<span class="token operator">=</span>/usr/local/erlang --without-javac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6 \u7F16\u8BD1\u5B89\u88C5</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@SnailClimb otp_src_19.3<span class="token punctuation">]</span><span class="token comment"># </span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>7 \u9A8C\u8BC1\u4E00\u4E0B erlang \u662F\u5426\u5B89\u88C5\u6210\u529F\u4E86</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@SnailClimb otp_src_19.3<span class="token punctuation">]</span><span class="token comment"># ./bin/erl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD0\u884C\u4E0B\u9762\u7684\u8BED\u53E5\u8F93\u51FA\u201Chello world\u201D</p><div class="language-erlang ext-erlang line-numbers-mode"><pre class="language-erlang"><code> <span class="token atom">io</span><span class="token punctuation">:</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello world~n&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5927\u529F\u544A\u6210\uFF0C\u6211\u4EEC\u7684 erlang \u5DF2\u7ECF\u5B89\u88C5\u5B8C\u6210\u3002</p><p><strong>8 \u914D\u7F6E erlang \u73AF\u5883\u53D8\u91CF</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@SnailClimb etc<span class="token punctuation">]</span><span class="token comment"># vim profile</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FFD\u52A0\u4E0B\u5217\u73AF\u5883\u53D8\u91CF\u5230\u6587\u4EF6\u672B\u5C3E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#erlang</span>
<span class="token assign-left variable">ERL_HOME</span><span class="token operator">=</span>/usr/local/erlang
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$ERL_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token builtin class-name">export</span> ERL_HOME <span class="token environment constant">PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u4E0B\u5217\u547D\u4EE4\u4F7F\u914D\u7F6E\u6587\u4EF6<code>profile</code>\u751F\u6548</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@SnailClimb etc<span class="token punctuation">]</span><span class="token comment"># source /etc/profile</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u5165 erl \u67E5\u770B erlang \u73AF\u5883\u53D8\u91CF\u662F\u5426\u914D\u7F6E\u6B63\u786E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@SnailClimb etc<span class="token punctuation">]</span><span class="token comment"># erl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-\u5B89\u88C5-rabbitmq" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5B89\u88C5-rabbitmq" aria-hidden="true">#</a> 2.2 \u5B89\u88C5 RabbitMQ</h3><p><strong>1. \u4E0B\u8F7Drpm</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://www.rabbitmq.com/releases/rabbitmq-server/v3.6.8/rabbitmq-server-3.6.8-1.el7.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216\u8005\u76F4\u63A5\u5728\u5B98\u7F51\u4E0B\u8F7D</p>`,30),f={href:"https://www.rabbitmq.com/install-rpm.html",target:"_blank",rel:"noopener noreferrer"},R=a("https://www.rabbitmq.com/install-rpm.html"),M=t(`<p><strong>2. \u5B89\u88C5rpm</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> --import https://www.rabbitmq.com/rabbitmq-release-signing-key.asc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7D27\u63A5\u7740\u6267\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> rabbitmq-server-3.6.8-1.el7.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E2D\u9014\u9700\u8981\u4F60\u8F93\u5165&quot;y&quot;\u624D\u80FD\u7EE7\u7EED\u5B89\u88C5\u3002</p><p><strong>3 \u5F00\u542F web \u7BA1\u7406\u63D2\u4EF6</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4 \u8BBE\u7F6E\u5F00\u673A\u542F\u52A8</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chkconfig</span> rabbitmq-server on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>5. \u542F\u52A8\u670D\u52A1</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> rabbitmq-server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>6. \u67E5\u770B\u670D\u52A1\u72B6\u6001</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> rabbitmq-server status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>7. \u8BBF\u95EE RabbitMQ \u63A7\u5236\u53F0</strong></p>`,14),q=a("\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF1A"),y={href:"http://xn--ip-0p3ck01akcu41v:15672/",target:"_blank",rel:"noopener noreferrer"},E=a("http://\u4F60\u7684ip\u5730\u5740:15672/"),w=t(`<p>\u9ED8\u8BA4\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF1Aguest/guest; \u4F46\u662F\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF1Aguest\u7528\u6237\u53EA\u662F\u88AB\u5BB9\u8BB8\u4ECElocalhost\u8BBF\u95EE\u3002\u5B98\u7F51\u6587\u6863\u63CF\u8FF0\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u201Cguest\u201D user can only connect via localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u89E3\u51B3\u8FDC\u7A0B\u8BBF\u95EE RabbitMQ \u8FDC\u7A0B\u8BBF\u95EE\u5BC6\u7801\u9519\u8BEF</strong></p><p>\u65B0\u5EFA\u7528\u6237\u5E76\u6388\u6743</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@SnailClimb rabbitmq<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl add_user root root</span>
Creating user <span class="token string">&quot;root&quot;</span> <span class="token punctuation">..</span>.
<span class="token punctuation">[</span>root@SnailClimb rabbitmq<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl set_user_tags root administrator</span>

Setting tags <span class="token keyword">for</span> user <span class="token string">&quot;root&quot;</span> to <span class="token punctuation">[</span>administrator<span class="token punctuation">]</span> <span class="token punctuation">..</span>.
<span class="token punctuation">[</span>root@SnailClimb rabbitmq<span class="token punctuation">]</span><span class="token comment"># </span>
<span class="token punctuation">[</span>root@SnailClimb rabbitmq<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl set_permissions -p / root &quot;.*&quot; &quot;.*&quot; &quot;.*&quot;</span>
Setting permissions <span class="token keyword">for</span> user <span class="token string">&quot;root&quot;</span> <span class="token keyword">in</span> vhost <span class="token string">&quot;/&quot;</span> <span class="token punctuation">..</span>.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),B=a("\u518D\u6B21\u8BBF\u95EE:"),C={href:"http://xn--ip-0p3ck01akcu41v:15672/",target:"_blank",rel:"noopener noreferrer"},S=a("http://\u4F60\u7684ip\u5730\u5740:15672/"),K=a(" ,\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF1Aroot root");function P(T,z){const s=r("ExternalLinkIcon");return o(),l("div",null,[v,n("p",null,[k,n("a",_,[x,e(s)])]),Q,n("p",null,[n("a",f,[R,e(s)])]),M,n("p",null,[q,n("a",y,[E,e(s)])]),w,n("p",null,[B,n("a",C,[S,e(s)]),K])])}var H=i(h,[["render",P],["__file","rabbitmq-intro.html.vue"]]);export{H as default};
