import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o,c,b as n,a as e,e as i,d as a}from"./app.27c4730f.js";var l="/assets/image-20220730220817.2b1571b2.png";const d={},u=i(`<h2 id="java14" tabindex="-1"><a class="header-anchor" href="#java14" aria-hidden="true">#</a> Java14</h2><h3 id="\u7A7A\u6307\u9488\u5F02\u5E38\u7CBE\u51C6\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u6307\u9488\u5F02\u5E38\u7CBE\u51C6\u63D0\u793A" aria-hidden="true">#</a> \u7A7A\u6307\u9488\u5F02\u5E38\u7CBE\u51C6\u63D0\u793A</h3><p>\u901A\u8FC7 JVM \u53C2\u6570\u4E2D\u6DFB\u52A0<code>-XX:+ShowCodeDetailsInExceptionMessages</code>\uFF0C\u53EF\u4EE5\u5728\u7A7A\u6307\u9488\u5F02\u5E38\u4E2D\u83B7\u53D6\u66F4\u4E3A\u8BE6\u7EC6\u7684\u8C03\u7528\u4FE1\u606F\uFF0C\u66F4\u5FEB\u7684\u5B9A\u4F4D\u548C\u89E3\u51B3\u95EE\u9898\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c<span class="token punctuation">.</span>i <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span> <span class="token comment">// \u5047\u8BBE\u8FD9\u6BB5\u4EE3\u7801\u4F1A\u53D1\u751F\u7A7A\u6307\u9488</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Java 14 \u4E4B\u524D\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Exception</span> in thread <span class="token string">&quot;main&quot;</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>NullPointerException</span>
    at <span class="token class-name">NullPointerExample</span><span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">NullPointerExample</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Java 14 \u4E4B\u540E\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token comment">// \u589E\u52A0\u53C2\u6570\u540E\u63D0\u793A\u7684\u5F02\u5E38\u4E2D\u5F88\u660E\u786E\u7684\u544A\u77E5\u4E86\u54EA\u91CC\u4E3A\u7A7A\u5BFC\u81F4</span>
<span class="token class-name">Exception</span> in thread <span class="token string">&quot;main&quot;</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>NullPointerException</span><span class="token operator">:</span>
        <span class="token class-name">Cannot</span> read field <span class="token char">&#39;c&#39;</span> because <span class="token char">&#39;a.b&#39;</span> is <span class="token keyword">null</span><span class="token punctuation">.</span>
    at <span class="token class-name">Prog</span><span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">Prog</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="switch-\u7684\u589E\u5F3A-\u8F6C\u6B63" tabindex="-1"><a class="header-anchor" href="#switch-\u7684\u589E\u5F3A-\u8F6C\u6B63" aria-hidden="true">#</a> switch \u7684\u589E\u5F3A(\u8F6C\u6B63)</h3><p>Java12 \u5F15\u5165\u7684 switch\uFF08\u9884\u89C8\u7279\u6027\uFF09\u5728 Java14 \u53D8\u4E3A\u6B63\u5F0F\u7248\u672C\uFF0C\u4E0D\u9700\u8981\u589E\u52A0\u53C2\u6570\u6765\u542F\u7528\uFF0C\u76F4\u63A5\u5728 JDK14 \u4E2D\u5C31\u80FD\u4F7F\u7528\u3002</p><p>Java12 \u4E3A switch \u8868\u8FBE\u5F0F\u5F15\u5165\u4E86\u7C7B\u4F3C lambda \u8BED\u6CD5\u6761\u4EF6\u5339\u914D\u6210\u529F\u540E\u7684\u6267\u884C\u5757\uFF0C\u4E0D\u9700\u8981\u591A\u5199 break \uFF0CJava13 \u63D0\u4F9B\u4E86 <code>yield</code> \u6765\u5728 block \u4E2D\u8FD4\u56DE\u503C\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token keyword">switch</span> <span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;W&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;F&quot;</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;MWF&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;T&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;TH&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;S&quot;</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;TTS&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>day<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token keyword">yield</span> <span class="token string">&quot;Please insert a valid day.&quot;</span><span class="token punctuation">;</span>
                <span class="token keyword">else</span>
                    <span class="token keyword">yield</span> <span class="token string">&quot;Looks like a Sunday.&quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9884\u89C8\u65B0\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u9884\u89C8\u65B0\u7279\u6027" aria-hidden="true">#</a> \u9884\u89C8\u65B0\u7279\u6027</h3><h4 id="record-\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#record-\u5173\u952E\u5B57" aria-hidden="true">#</a> record \u5173\u952E\u5B57</h4><p><code>record</code> \u5173\u952E\u5B57\u53EF\u4EE5\u7B80\u5316 <strong>\u6570\u636E\u7C7B</strong>\uFF08\u4E00\u4E2A Java \u7C7B\u4E00\u65E6\u5B9E\u4F8B\u5316\u5C31\u4E0D\u80FD\u518D\u4FEE\u6539\uFF09\u7684\u5B9A\u4E49\u65B9\u5F0F\uFF0C\u4F7F\u7528 <code>record</code> \u4EE3\u66FF <code>class</code> \u5B9A\u4E49\u7684\u7C7B\uFF0C\u53EA\u9700\u8981\u58F0\u660E\u5C5E\u6027\uFF0C\u5C31\u53EF\u4EE5\u5728\u83B7\u5F97\u5C5E\u6027\u7684\u8BBF\u95EE\u65B9\u6CD5\uFF0C\u4EE5\u53CA <code>toString()</code>\uFF0C<code>hashCode()</code>, <code>equals()</code>\u65B9\u6CD5</p><p>\u7C7B\u4F3C\u4E8E\u4F7F\u7528 <code>class</code> \u5B9A\u4E49\u7C7B\uFF0C\u540C\u65F6\u4F7F\u7528\u4E86 lombok \u63D2\u4EF6\uFF0C\u5E76\u6253\u4E0A\u4E86<code>@Getter,@ToString,@EqualsAndHashCode</code>\u6CE8\u89E3</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u8FD9\u4E2A\u7C7B\u5177\u6709\u4E24\u4E2A\u7279\u5F81
 * 1. \u6240\u6709\u6210\u5458\u5C5E\u6027\u90FD\u662Ffinal
 * 2. \u5168\u90E8\u65B9\u6CD5\u7531\u6784\u9020\u65B9\u6CD5\uFF0C\u548C\u4E24\u4E2A\u6210\u5458\u5C5E\u6027\u8BBF\u95EE\u5668\u7EC4\u6210\uFF08\u5171\u4E09\u4E2A\uFF09
 * \u90A3\u4E48\u8FD9\u79CD\u7C7B\u5C31\u5F88\u9002\u5408\u4F7F\u7528record\u6765\u58F0\u660E
 */</span>
<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token keyword">double</span> length<span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token keyword">double</span> width<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">double</span> length<span class="token punctuation">,</span> <span class="token keyword">double</span> width<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> length<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">double</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> length<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">double</span> <span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> width<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 1. \u4F7F\u7528record\u58F0\u660E\u7684\u7C7B\u4F1A\u81EA\u52A8\u62E5\u6709\u4E0A\u9762\u7C7B\u4E2D\u7684\u4E09\u4E2A\u65B9\u6CD5
 * 2. \u5728\u8FD9\u57FA\u7840\u4E0A\u8FD8\u9644\u8D60\u4E86equals()\uFF0ChashCode()\u65B9\u6CD5\u4EE5\u53CAtoString()\u65B9\u6CD5
 * 3. toString\u65B9\u6CD5\u4E2D\u5305\u62EC\u6240\u6709\u6210\u5458\u5C5E\u6027\u7684\u5B57\u7B26\u4E32\u8868\u793A\u5F62\u5F0F\u53CA\u5176\u540D\u79F0
 */</span>
<span class="token keyword">record</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">float</span> length<span class="token punctuation">,</span> <span class="token keyword">float</span> width<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6587\u672C\u5757" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u5757" aria-hidden="true">#</a> \u6587\u672C\u5757</h4><p>Java14 \u4E2D\uFF0C\u6587\u672C\u5757\u4F9D\u7136\u662F\u9884\u89C8\u7279\u6027\uFF0C\u4E0D\u8FC7\uFF0C\u5176\u5F15\u5165\u4E86\u4E24\u4E2A\u65B0\u7684\u8F6C\u4E49\u5B57\u7B26\uFF1A</p><ul><li><code>\\</code> : \u8868\u793A\u884C\u5C3E\uFF0C\u4E0D\u5F15\u5165\u6362\u884C\u7B26</li><li><code>\\s</code> \uFF1A\u8868\u793A\u5355\u4E2A\u7A7A\u683C</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;\u51E1\u5FC3\u6240\u5411\uFF0C\u7D20\u5C65\u6240\u5F80\uFF0C\u751F\u5982\u9006\u65C5\uFF0C\u4E00\u82C7\u4EE5\u822A\u3002&quot;</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>&quot;
        \u51E1\u5FC3\u6240\u5411\uFF0C\u7D20\u5C65\u6240\u5F80\uFF0C \\
        \u751F\u5982\u9006\u65C5\uFF0C\u4E00\u82C7\u4EE5\u822A\u3002<span class="token string">&quot;&quot;</span>&quot;<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u51E1\u5FC3\u6240\u5411\uFF0C\u7D20\u5C65\u6240\u5F80\uFF0C \u751F\u5982\u9006\u65C5\uFF0C\u4E00\u82C7\u4EE5\u822A\u3002</span>
<span class="token class-name">String</span> text <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
        java
        c++\\sphp
        &quot;&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u8F93\u51FA\uFF1A</span>
java
c<span class="token operator">++</span> php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="instanceof-\u589E\u5F3A" tabindex="-1"><a class="header-anchor" href="#instanceof-\u589E\u5F3A" aria-hidden="true">#</a> instanceof \u589E\u5F3A</h4><p>\u4F9D\u7136\u662F<strong>\u9884\u89C8\u7279\u6027</strong> \uFF0CJava 12 \u65B0\u7279\u6027\u4E2D\u4ECB\u7ECD\u8FC7\u3002</p><h3 id="java14-\u5176\u4ED6\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#java14-\u5176\u4ED6\u7279\u6027" aria-hidden="true">#</a> Java14 \u5176\u4ED6\u7279\u6027</h3><ul><li>\u4ECE Java11 \u5F15\u5165\u7684 ZGC \u4F5C\u4E3A\u7EE7 G1 \u8FC7\u540E\u7684\u4E0B\u4E00\u4EE3 GC \u7B97\u6CD5\uFF0C\u4ECE\u652F\u6301 Linux \u5E73\u53F0\u5230 Java14 \u5F00\u59CB\u652F\u6301 MacOS \u548C Window\uFF08\u4E2A\u4EBA\u611F\u89C9\u662F\u7EC8\u4E8E\u53EF\u4EE5\u5728\u65E5\u5E38\u5F00\u53D1\u5DE5\u5177\u4E2D\u5148\u4F53\u9A8C\u4E0B ZGC \u7684\u6548\u679C\u4E86\uFF0C\u867D\u7136\u5176\u5B9E G1 \u4E5F\u591F\u7528\uFF09</li><li>\u79FB\u9664\u4E86 CMS(Concurrent Mark Sweep) \u5783\u573E\u6536\u96C6\u5668\uFF08\u529F\u6210\u800C\u9000\uFF09</li><li>\u65B0\u589E\u4E86 jpackage \u5DE5\u5177\uFF0C\u6807\u914D\u5C06\u5E94\u7528\u6253\u6210 jar \u5305\u5916\uFF0C\u8FD8\u652F\u6301\u4E0D\u540C\u5E73\u53F0\u7684\u7279\u6027\u5305\uFF0C\u6BD4\u5982 linux \u4E0B\u7684<code>deb</code>\u548C<code>rpm</code>\uFF0Cwindow \u5E73\u53F0\u4E0B\u7684<code>msi</code>\u548C<code>exe</code></li></ul><h2 id="java15" tabindex="-1"><a class="header-anchor" href="#java15" aria-hidden="true">#</a> Java15</h2><h3 id="charsequence" tabindex="-1"><a class="header-anchor" href="#charsequence" aria-hidden="true">#</a> CharSequence</h3><p><code>CharSequence</code> \u63A5\u53E3\u6DFB\u52A0\u4E86\u4E00\u4E2A\u9ED8\u8BA4\u65B9\u6CD5 <code>isEmpty()</code> \u6765\u5224\u65AD\u5B57\u7B26\u5E8F\u5217\u4E3A\u7A7A\uFF0C\u5982\u679C\u662F\u5219\u8FD4\u56DE true\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>
  <span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="treemap" tabindex="-1"><a class="header-anchor" href="#treemap" aria-hidden="true">#</a> TreeMap</h3><p><code>TreeMap</code> \u65B0\u5F15\u5165\u4E86\u4E0B\u9762\u8FD9\u4E9B\u65B9\u6CD5\uFF1A</p><ul><li><code>putIfAbsent()</code></li><li><code>computeIfAbsent()</code></li><li><code>computeIfPresent()</code></li><li><code>compute()</code></li><li><code>merge()</code></li></ul><h3 id="zgc-\u8F6C\u6B63" tabindex="-1"><a class="header-anchor" href="#zgc-\u8F6C\u6B63" aria-hidden="true">#</a> ZGC(\u8F6C\u6B63)</h3><p>Java11 \u7684\u65F6\u5019 \uFF0CZGC \u8FD8\u5728\u8BD5\u9A8C\u9636\u6BB5\u3002</p><p>\u5F53\u65F6\uFF0CZGC \u7684\u51FA\u73B0\u8BA9\u4F17\u591A Java \u5F00\u53D1\u8005\u770B\u5230\u4E86\u5783\u573E\u56DE\u6536\u5668\u7684\u53E6\u5916\u4E00\u79CD\u53EF\u80FD\uFF0C\u56E0\u6B64\u5907\u53D7\u5173\u6CE8\u3002</p><p>\u7ECF\u8FC7\u591A\u4E2A\u7248\u672C\u7684\u8FED\u4EE3\uFF0C\u4E0D\u65AD\u7684\u5B8C\u5584\u548C\u4FEE\u590D\u95EE\u9898\uFF0CZGC \u5728 Java 15 \u5DF2\u7ECF\u53EF\u4EE5\u6B63\u5F0F\u4F7F\u7528\u4E86\uFF01</p><p>\u4E0D\u8FC7\uFF0C\u9ED8\u8BA4\u7684\u5783\u573E\u56DE\u6536\u5668\u4F9D\u7136\u662F G1\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u53C2\u6570\u542F\u52A8 ZGC\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ java -XX:+UseZGC className
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="eddsa-\u6570\u5B57\u7B7E\u540D\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#eddsa-\u6570\u5B57\u7B7E\u540D\u7B97\u6CD5" aria-hidden="true">#</a> EdDSA(\u6570\u5B57\u7B7E\u540D\u7B97\u6CD5)</h3><p>\u65B0\u52A0\u5165\u4E86\u4E00\u4E2A\u5B89\u5168\u6027\u548C\u6027\u80FD\u90FD\u66F4\u5F3A\u7684\u57FA\u4E8E Edwards-Curve Digital Signature Algorithm \uFF08EdDSA\uFF09\u5B9E\u73B0\u7684\u6570\u5B57\u7B7E\u540D\u7B97\u6CD5\u3002</p><p>\u867D\u7136\u5176\u6027\u80FD\u4F18\u4E8E\u73B0\u6709\u7684 ECDSA \u5B9E\u73B0\uFF0C\u4E0D\u8FC7\uFF0C\u5B83\u5E76\u4E0D\u4F1A\u5B8C\u5168\u53D6\u4EE3 JDK \u4E2D\u73B0\u6709\u7684\u692D\u5706\u66F2\u7EBF\u6570\u5B57\u7B7E\u540D\u7B97\u6CD5( ECDSA)\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">KeyPairGenerator</span> kpg <span class="token operator">=</span> <span class="token class-name">KeyPairGenerator</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;Ed25519&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">KeyPair</span> kp <span class="token operator">=</span> kpg<span class="token punctuation">.</span><span class="token function">generateKeyPair</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> msg <span class="token operator">=</span> <span class="token string">&quot;test_string&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span>UTF_8<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Signature</span> sig <span class="token operator">=</span> <span class="token class-name">Signature</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;Ed25519&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sig<span class="token punctuation">.</span><span class="token function">initSign</span><span class="token punctuation">(</span>kp<span class="token punctuation">.</span><span class="token function">getPrivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sig<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s <span class="token operator">=</span> sig<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> encodedString <span class="token operator">=</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">getEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">encodeToString</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>encodedString<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>0Hc0lxxASZNvS52WsvnncJOH/mlFhnA8Tc6D/k5DtAX5BSsNVjtPF4R4+yMWXVjrvB2mxVXmChIbki6goFBgAg==
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6587\u672C\u5757-\u8F6C\u6B63" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u5757-\u8F6C\u6B63" aria-hidden="true">#</a> \u6587\u672C\u5757(\u8F6C\u6B63)</h3><p>\u5728 Java 15 \uFF0C\u6587\u672C\u5757\u662F\u6B63\u5F0F\u7684\u529F\u80FD\u7279\u6027\u4E86\u3002</p><h3 id="\u9690\u85CF\u7C7B-hidden-classes" tabindex="-1"><a class="header-anchor" href="#\u9690\u85CF\u7C7B-hidden-classes" aria-hidden="true">#</a> \u9690\u85CF\u7C7B(Hidden Classes)</h3><p>\u9690\u85CF\u7C7B\u662F\u4E3A\u6846\u67B6\uFF08frameworks\uFF09\u6240\u8BBE\u8BA1\u7684\uFF0C\u9690\u85CF\u7C7B\u4E0D\u80FD\u76F4\u63A5\u88AB\u5176\u4ED6\u7C7B\u7684\u5B57\u8282\u7801\u4F7F\u7528\uFF0C\u53EA\u80FD\u5728\u8FD0\u884C\u65F6\u751F\u6210\u7C7B\u5E76\u901A\u8FC7\u53CD\u5C04\u95F4\u63A5\u4F7F\u7528\u5B83\u4EEC\u3002</p><h3 id="\u9884\u89C8\u65B0\u7279\u6027-1" tabindex="-1"><a class="header-anchor" href="#\u9884\u89C8\u65B0\u7279\u6027-1" aria-hidden="true">#</a> \u9884\u89C8\u65B0\u7279\u6027</h3><h4 id="\u5BC6\u5C01\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5BC6\u5C01\u7C7B" aria-hidden="true">#</a> \u5BC6\u5C01\u7C7B</h4><p>Java 15 \u5BF9 Java 14 \u4E2D\u5F15\u5165\u7684\u9884\u89C8\u65B0\u7279\u6027\u8FDB\u884C\u4E86\u589E\u5F3A\uFF0C\u4E3B\u8981\u662F\u5F15\u5165\u4E86\u4E00\u4E2A\u65B0\u7684\u6982\u5FF5 <strong>\u5BC6\u5C01\u7C7B\uFF08Sealed Classes\uFF09\u3002</strong></p><p>\u5BC6\u5C01\u7C7B\u53EF\u4EE5\u5BF9\u7EE7\u627F\u6216\u8005\u5B9E\u73B0\u5B83\u4EEC\u7684\u7C7B\u8FDB\u884C\u9650\u5236\u3002</p><p>\u6BD4\u5982\u62BD\u8C61\u7C7B <code>Person</code> \u53EA\u5141\u8BB8 <code>Employee</code> \u548C <code>Manager</code> \u7EE7\u627F\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">sealed</span> <span class="token keyword">class</span> <span class="token class-name">Person</span>
    <span class="token keyword">permits</span> <span class="token class-name">Employee</span><span class="token punctuation">,</span> <span class="token class-name">Manager</span> <span class="token punctuation">{</span>

    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u5916\uFF0C\u4EFB\u4F55\u6269\u5C55\u5BC6\u5C01\u7C7B\u7684\u7C7B\u672C\u8EAB\u90FD\u5FC5\u987B\u58F0\u660E\u4E3A <code>sealed</code>\u3001<code>non-sealed</code> \u6216 <code>final</code>\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">non-sealed</span> <span class="token keyword">class</span> <span class="token class-name">Manager</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+'" alt="" loading="lazy"></p><p>\u5982\u679C\u5141\u8BB8\u6269\u5C55\u7684\u5B50\u7C7B\u548C\u5C01\u95ED\u7C7B\u5728\u540C\u4E00\u4E2A\u6E90\u4EE3\u7801\u6587\u4EF6\u91CC\uFF0C\u5C01\u95ED\u7C7B\u53EF\u4EE5\u4E0D\u4F7F\u7528 permits \u8BED\u53E5\uFF0CJava \u7F16\u8BD1\u5668\u5C06\u68C0\u7D22\u6E90\u6587\u4EF6\uFF0C\u5728\u7F16\u8BD1\u671F\u4E3A\u5C01\u95ED\u7C7B\u6DFB\u52A0\u4E0A\u8BB8\u53EF\u7684\u5B50\u7C7B\u3002</p><h4 id="instanceof-\u6A21\u5F0F\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#instanceof-\u6A21\u5F0F\u5339\u914D" aria-hidden="true">#</a> instanceof \u6A21\u5F0F\u5339\u914D</h4><p>Java 15 \u5E76\u6CA1\u6709\u5BF9\u6B64\u7279\u6027\u8FDB\u884C\u8C03\u6574\uFF0C\u7EE7\u7EED\u9884\u89C8\u7279\u6027\uFF0C\u4E3B\u8981\u7528\u4E8E\u63A5\u53D7\u66F4\u591A\u7684\u4F7F\u7528\u53CD\u9988\u3002</p><p>\u5728\u672A\u6765\u7684 Java \u7248\u672C\u4E2D\uFF0CJava \u7684\u76EE\u6807\u662F\u7EE7\u7EED\u5B8C\u5584 <code>instanceof</code> \u6A21\u5F0F\u5339\u914D\u65B0\u7279\u6027\u3002</p><h3 id="java15-\u5176\u4ED6\u65B0\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#java15-\u5176\u4ED6\u65B0\u7279\u6027" aria-hidden="true">#</a> Java15 \u5176\u4ED6\u65B0\u7279\u6027</h3><ul><li><strong>Nashorn JavaScript \u5F15\u64CE\u5F7B\u5E95\u79FB\u9664</strong> \uFF1ANashorn \u4ECE Java8 \u5F00\u59CB\u5F15\u5165\u7684 JavaScript \u5F15\u64CE\uFF0CJava9 \u5BF9 Nashorn \u505A\u4E86\u4E9B\u589E\u5F3A\uFF0C\u5B9E\u73B0\u4E86\u4E00\u4E9B ES6 \u7684\u65B0\u7279\u6027\u3002\u5728 Java 11 \u4E2D\u5C31\u5DF2\u7ECF\u88AB\u5F03\u7528\uFF0C\u5230\u4E86 Java 15 \u5C31\u5F7B\u5E95\u88AB\u5220\u9664\u4E86\u3002</li><li><strong>DatagramSocket API \u91CD\u6784</strong></li><li><strong>\u7981\u7528\u548C\u5E9F\u5F03\u504F\u5411\u9501\uFF08Biased Locking\uFF09</strong> \uFF1A \u504F\u5411\u9501\u7684\u5F15\u5165\u589E\u52A0\u4E86 JVM \u7684\u590D\u6742\u6027\u5927\u4E8E\u5176\u5E26\u6765\u7684\u6027\u80FD\u63D0\u5347\u3002\u4E0D\u8FC7\uFF0C\u4F60\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528 <code>-XX:+UseBiasedLocking</code> \u542F\u7528\u504F\u5411\u9501\u5B9A\uFF0C\u4F46\u5B83\u4F1A\u63D0\u793A \u8FD9\u662F\u4E00\u4E2A\u5DF2\u5F03\u7528\u7684 API\u3002</li><li>......</li></ul><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><h3 id="\u5173\u4E8E\u9884\u89C8\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u9884\u89C8\u7279\u6027" aria-hidden="true">#</a> \u5173\u4E8E\u9884\u89C8\u7279\u6027</h3><p>\u5148\u8D34\u4E00\u6BB5 oracle \u5B98\u7F51\u539F\u6587\uFF1A<code>This is a preview feature, which is a feature whose design, specification, and implementation are complete, but is not permanent, which means that the feature may exist in a different form or not at all in future JDK releases. To compile and run code that contains preview features, you must specify additional command-line options.</code></p><p>\u8FD9\u662F\u4E00\u4E2A\u9884\u89C8\u529F\u80FD\uFF0C\u8BE5\u529F\u80FD\u7684\u8BBE\u8BA1\uFF0C\u89C4\u683C\u548C\u5B9E\u73B0\u662F\u5B8C\u6574\u7684\uFF0C\u4F46\u4E0D\u662F\u6C38\u4E45\u6027\u7684\uFF0C\u8FD9\u610F\u5473\u7740\u8BE5\u529F\u80FD\u53EF\u80FD\u4EE5\u5176\u4ED6\u5F62\u5F0F\u5B58\u5728\u6216\u5728\u5C06\u6765\u7684 JDK \u7248\u672C\u4E2D\u6839\u672C\u4E0D\u5B58\u5728\u3002 \u8981\u7F16\u8BD1\u548C\u8FD0\u884C\u5305\u542B\u9884\u89C8\u529F\u80FD\u7684\u4EE3\u7801\uFF0C\u5FC5\u987B\u6307\u5B9A\u5176\u4ED6\u547D\u4EE4\u884C\u9009\u9879\u3002</p><p>\u5C31\u4EE5<code>switch</code>\u7684\u589E\u5F3A\u4E3A\u4F8B\u5B50\uFF0C\u4ECE Java12 \u4E2D\u63A8\u51FA\uFF0C\u5230 Java13 \u4E2D\u5C06\u7EE7\u7EED\u589E\u5F3A\uFF0C\u76F4\u5230 Java14 \u624D\u6B63\u5F0F\u8F6C\u6B63\u8FDB\u5165 JDK \u53EF\u4EE5\u653E\u5FC3\u4F7F\u7528\uFF0C\u4E0D\u7528\u8003\u8651\u540E\u7EED JDK \u7248\u672C\u5BF9\u5176\u7684\u6539\u52A8\u6216\u4FEE\u6539</p><p>\u4E00\u65B9\u9762\u53EF\u4EE5\u770B\u51FA JDK \u4F5C\u4E3A\u6807\u51C6\u5E73\u53F0\u5728\u589E\u52A0\u65B0\u7279\u6027\u7684\u4E25\u8C28\u6001\u5EA6\uFF0C\u53E6\u4E00\u65B9\u9762\u4E2A\u4EBA\u8BA4\u4E3A\u662F\u5BF9\u4E8E\u9884\u89C8\u7279\u6027\u5E94\u8BE5\u91C7\u53D6\u5BA1\u614E\u4F7F\u7528\u7684\u6001\u5EA6\u3002\u7279\u6027\u7684\u8BBE\u8BA1\u548C\u5B9E\u73B0\u5BB9\u6613\uFF0C\u4F46\u662F\u5176\u5B9E\u9645\u4EF7\u503C\u4F9D\u7136\u9700\u8981\u5728\u4F7F\u7528\u4E2D\u53BB\u9A8C\u8BC1</p><h3 id="jvm-\u865A\u62DF\u673A\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#jvm-\u865A\u62DF\u673A\u4F18\u5316" aria-hidden="true">#</a> JVM \u865A\u62DF\u673A\u4F18\u5316</h3><p>\u6BCF\u6B21 Java \u7248\u672C\u7684\u53D1\u5E03\u90FD\u4F34\u968F\u7740\u5BF9 JVM \u865A\u62DF\u673A\u7684\u4F18\u5316\uFF0C\u5305\u62EC\u5BF9\u73B0\u6709\u5783\u573E\u56DE\u6536\u7B97\u6CD5\u7684\u6539\u8FDB\uFF0C\u5F15\u5165\u65B0\u7684\u5783\u573E\u56DE\u6536\u7B97\u6CD5\uFF0C\u79FB\u9664\u8001\u65E7\u7684\u4E0D\u518D\u9002\u7528\u4E8E\u4ECA\u5929\u7684\u5783\u573E\u56DE\u6536\u7B97\u6CD5\u7B49</p><p>\u6574\u4F53\u4F18\u5316\u7684\u65B9\u5411\u662F<strong>\u9AD8\u6548\uFF0C\u4F4E\u65F6\u5EF6\u7684\u5783\u573E\u56DE\u6536\u8868\u73B0</strong></p><p>\u5BF9\u4E8E\u65E5\u5E38\u7684\u5E94\u7528\u5F00\u53D1\u8005\u53EF\u80FD\u6BD4\u8F83\u5173\u6CE8\u65B0\u7684\u8BED\u6CD5\u7279\u6027\uFF0C\u4F46\u662F\u4ECE\u4E00\u4E2A\u516C\u53F8\u89D2\u5EA6\u6765\u8BF4\uFF0C\u5728\u8003\u8651\u662F\u5426\u5347\u7EA7 Java \u5E73\u53F0\u65F6\u66F4\u52A0\u8003\u8651\u7684\u662F<strong>JVM \u8FD0\u884C\u65F6\u7684\u63D0\u5347</strong></p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>',74),r=a("Oracle Java14 record "),k={href:"https://docs.oracle.com/en/java/javase/14/language/records.html",target:"_blank",rel:"noopener noreferrer"},v=a("https://docs.oracle.com/en/java/javase/14/language/records.html"),m=a("java14-features "),h={href:"https://www.techgeeknext.com/java/java14-features",target:"_blank",rel:"noopener noreferrer"},b=a("https://www.techgeeknext.com/java/java14-features"),g=a("Java 14 Features : "),f={href:"https://www.journaldev.com/37273/java-14-features",target:"_blank",rel:"noopener noreferrer"},w=a("https://www.journaldev.com/37273/java-14-features"),y=a("What is new in Java 15: "),j={href:"https://mkyong.com/java/what-is-new-in-java-15/",target:"_blank",rel:"noopener noreferrer"},x=a("https://mkyong.com/java/what-is-new-in-java-15/");function q(J,_){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[r,n("a",k,[v,e(s)])]),n("li",null,[m,n("a",h,[b,e(s)])]),n("li",null,[g,n("a",f,[w,e(s)])]),n("li",null,[y,n("a",j,[x,e(s)])])])])}var E=t(d,[["render",q],["__file","java14-15.html.vue"]]);export{E as default};
