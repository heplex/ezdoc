import{_ as n,W as e,X as s,a1 as a}from"./framework-b609eea8.js";const t={},o=a(`<h1 id="三斜线指令" tabindex="-1"><a class="header-anchor" href="#三斜线指令" aria-hidden="true">#</a> 三斜线指令</h1><p>三斜线指令是包含单个XML标签的单行注释。 注释的内容会做为编译器指令使用。</p><p>三斜线指令仅可放在包含它的文件的最顶端。 一个三斜线指令的前面只能出现单行或多行注释，这包括其它的三斜线指令。 如果它们出现在一个语句或声明之后，那么它们会被当做普通的单行注释，并且不具有特殊的涵义。</p><h2 id="reference-path" tabindex="-1"><a class="header-anchor" href="#reference-path" aria-hidden="true">#</a> <code>/// &lt;reference path=&quot;...&quot; /&gt;</code></h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/// &lt;reference path=&quot;...&quot; /&gt;</span><span class="token template-punctuation string">\`</span></span>指令是三斜线指令中最常见的一种。 它用于声明文件间的依赖。

三斜线引用告诉编译器在编译过程中要引入的额外的文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当使用<code>--out</code>或<code>--outFile</code>时，它也可以做为调整输出内容顺序的一种方法。 文件在输出文件内容中的位置与经过预处理后的输入顺序一致。</p><h3 id="预处理输入文件" tabindex="-1"><a class="header-anchor" href="#预处理输入文件" aria-hidden="true">#</a> 预处理输入文件**</h3><p>编译器会对输入文件进行预处理来解析所有三斜线引用指令。 在这个过程中，额外的文件会加到编译过程中。</p><p>这个过程会以一些根文件开始； 它们是在命令行中指定的文件或是在<code>tsconfig.json</code>中的<code>&quot;files&quot;</code>列表里的文件。 这些根文件按指定的顺序进行预处理。 在一个文件被加入列表前，它包含的所有三斜线引用都要被处理，还有它们包含的目标。 三斜线引用以它们在文件里出现的顺序，使用深度优先的方式解析。</p><p>一个三斜线引用路径是相对于包含它的文件的，如果不是根文件。</p><h3 id="错误" tabindex="-1"><a class="header-anchor" href="#错误" aria-hidden="true">#</a> 错误</h3><p>引用不存在的文件会报错。 一个文件用三斜线指令引用自己会报错。</p><h3 id="使用-noresolve" tabindex="-1"><a class="header-anchor" href="#使用-noresolve" aria-hidden="true">#</a> 使用 <code>--noResolve</code></h3><p>如果指定了<code>--noResolve</code>编译选项，三斜线引用会被忽略；它们不会增加新文件，也不会改变给定文件的顺序。</p><h2 id="reference-types" tabindex="-1"><a class="header-anchor" href="#reference-types" aria-hidden="true">#</a> <code>/// &lt;reference types=&quot;...&quot; /&gt;</code></h2><p>与<code>/// &lt;reference path=&quot;...&quot; /&gt;</code>指令相似，这个指令是用来声明依赖的； 一个<code>/// &lt;reference path=&quot;...&quot; /&gt;</code>指令声明了对<code>@types</code>包的一个依赖。</p><p>在声明文件里包含<code>/// &lt;reference types=&quot;node&quot; /&gt;</code>，表明这个文件使用了<code>@types/node/index.d.ts</code>里面声明的名字； 并且，这个包要在编译阶段与声明文件一起被包含进来。</p><p>解析@types包的名字的过程与解析import语句里模块名的过程类似。 所以可以简单的把三斜线类型引用指令想像成针对包的import声明。</p><p>仅当在你需要写一个<code>d.ts</code>文件时才使用这个指令。</p><p>对于那些在编译阶段生成的声明文件，编译器会自动地添加<code>/// &lt;reference types=&quot;...&quot; /&gt;</code>； 当且仅当结果文件中使用了引用的<code>@types</code>包里的声明时才会在生成的声明文件里添加<code>/// &lt;reference types=&quot;...&quot; /&gt;</code>语句。</p><p>若要在<code>.ts</code>文件里声明一个对<code>@types</code>包的依赖，使用<code>--types</code>命令行选项或在<code>tsconfig.json</code>里指定。 查看在<code>tsconfig.json</code>里使用<code>@types</code>，<code>typeRoots</code>和<code>types</code>了解详情。</p><h2 id="reference-no-default-lib-true" tabindex="-1"><a class="header-anchor" href="#reference-no-default-lib-true" aria-hidden="true">#</a> <code>/// &lt;reference no-default-lib=&quot;true&quot;/&gt;</code></h2><p>这个指令把一个文件标记成默认库。 你会在<code>lib.d.ts</code>文件和它不同的变体的顶端看到这个注释。</p><p>这个指令告诉编译器在编译过程中不要包含这个默认库（比如，<code>lib.d.ts</code>）。 这与在命令行上使用<code>--noLib</code>相似。</p><p>还要注意，当传递了<code>--skipDefaultLibCheck</code>时，编译器只会忽略检查带有<code>/// &lt;reference no-default-lib=&quot;true&quot;/&gt;</code>的文件。</p><h2 id="amd-module" tabindex="-1"><a class="header-anchor" href="#amd-module" aria-hidden="true">#</a> <code>/// &lt;amd-module /&gt;</code></h2><p>默认情况下生成的AMD模块都是匿名的。 但是，当一些工具需要处理生成的模块时会产生问题，比如<code>r.js</code>。</p><p><code>amd-module</code>指令允许给编译器传入一个可选的模块名：</p><p><strong>amdModule.ts</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">///&lt;amd-module name=&#39;NamedModule&#39;/&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这会将<code>NamedModule</code>传入到AMD <code>define</code>函数里：</p><p><strong>amdModule.js</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&quot;NamedModule&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;require&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;exports&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">require</span><span class="token punctuation">,</span> exports<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token constant">C</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">function</span> <span class="token constant">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token constant">C</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    exports<span class="token punctuation">.</span><span class="token constant">C</span> <span class="token operator">=</span> <span class="token constant">C</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="amd-dependency" tabindex="-1"><a class="header-anchor" href="#amd-dependency" aria-hidden="true">#</a> <code>/// &lt;amd-dependency /&gt;</code></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>注意：这个指令被废弃了。使用<code>import &quot;moduleName&quot;;</code>语句代替。</p></div><p><code>/// &lt;amd-dependency path=&quot;x&quot; /&gt;</code>告诉编译器有一个非TypeScript模块依赖需要被注入，做为目标模块<code>require</code>调用的一部分。</p><p><code>amd-dependency</code>指令也可以带一个可选的<code>name</code>属性；它允许我们为amd-dependency传入一个可选名字：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/// &lt;amd-dependency path=&quot;legacy/moduleA&quot; name=&quot;moduleA&quot;/&gt;</span>
<span class="token keyword">declare</span> <span class="token keyword">var</span> moduleA<span class="token operator">:</span>MyType
moduleA<span class="token punctuation">.</span><span class="token function">callStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成的JavaScript代码：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;require&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;exports&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;legacy/moduleA&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">require</span><span class="token punctuation">,</span> exports<span class="token punctuation">,</span> moduleA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    moduleA<span class="token punctuation">.</span><span class="token function">callStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),c=[o];function p(d,i){return e(),s("div",null,c)}const l=n(t,[["render",p],["__file","triple-slash-directives.html.vue"]]);export{l as default};
