import{_ as n,W as s,X as a,a1 as e}from"./framework-b609eea8.js";const t={},p=e(`<h1 id="枚举-enum" tabindex="-1"><a class="header-anchor" href="#枚举-enum" aria-hidden="true">#</a> 枚举(enum)</h1><h2 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h2><p>使用枚举我们可以定义一些有名字的数字常量。 枚举通过<code>enum</code>关键字来定义。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    Down<span class="token punctuation">,</span>
    Left<span class="token punctuation">,</span>
    Right
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个枚举类型可以包含零个或多个枚举成员。 枚举成员具有一个数字值，它可以是常数或是计算得出的值 当满足如下条件时，枚举成员被当作是常数：</p><ul><li>不具有初始化函数并且之前的枚举成员是常数。 在这种情况下，当前枚举成员的值为上一个枚举成员的值加1。 但第一个枚举元素是个例外。 如果它没有初始化方法，那么它的初始值为<code>0</code>。</li><li>枚举成员使用常数枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。 当一个表达式满足下面条件之一时，它就是一个常数枚举表达式： <ul><li>数字字面量</li><li>引用之前定义的常数枚举成员（可以是在不同的枚举类型中定义的） 如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用。</li><li>带括号的常数枚举表达式</li><li><code>+</code>, <code>-</code>, <code>~</code> 一元运算符应用于常数枚举表达式</li><li><code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>&lt;&lt;</code>, <code>&gt;&gt;</code>, <code>&gt;&gt;&gt;</code>, <code>&amp;</code>, <code>|</code>, <code>^</code>二元运算符，常数枚举表达式做为其一个操作对象。 若常数枚举表达式求值后为NaN或Infinity，则会在编译阶段报错。</li></ul></li></ul><p>所有其它情况的枚举成员被当作是需要计算得出的值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> FileAccess <span class="token punctuation">{</span>
    <span class="token comment">// constant members</span>
    None<span class="token punctuation">,</span>
    Read    <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
    Write   <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">,</span>
    ReadWrite  <span class="token operator">=</span> Read <span class="token operator">|</span> Write<span class="token punctuation">,</span>
    <span class="token comment">// computed member</span>
    <span class="token constant">G</span> <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>枚举是在运行时真正存在的一个对象。 其中一个原因是因为这样可以从枚举值到枚举名进行反向映射。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Enum <span class="token punctuation">{</span>
    <span class="token constant">A</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> Enum<span class="token punctuation">.</span><span class="token constant">A</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> nameOfA <span class="token operator">=</span> Enum<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &quot;A&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">var</span> Enum<span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>Enum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Enum<span class="token punctuation">[</span>Enum<span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Enum <span class="token operator">||</span> <span class="token punctuation">(</span>Enum <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> Enum<span class="token punctuation">.</span><span class="token constant">A</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> nameOfA <span class="token operator">=</span> Enum<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &quot;A&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成的代码中，枚举类型被编译成一个对象，它包含双向映射（<code>name</code> -&gt; <code>value</code>）和（<code>value</code> -&gt; <code>name</code>）。 引用枚举成员总会生成一次属性访问并且永远不会内联。 在大多数情况下这是很好的并且正确的解决方案。 然而有时候需求却比较严格。 当访问枚举值时，为了避免生成多余的代码和间接引用，可以使用常数枚举。 常数枚举是在<code>enum</code>关键字前使用<code>const</code>修饰符。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token keyword">enum</span> Enum <span class="token punctuation">{</span>
    <span class="token constant">A</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token constant">B</span> <span class="token operator">=</span> <span class="token constant">A</span> <span class="token operator">*</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常数枚举只能使用常数枚举表达式并且不同于常规的枚举的是它们在编译阶段会被删除。 常数枚举成员在使用的地方被内联进来。 这是因为常数枚举不可能有计算成员。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token keyword">enum</span> Directions <span class="token punctuation">{</span>
    Up<span class="token punctuation">,</span>
    Down<span class="token punctuation">,</span>
    Left<span class="token punctuation">,</span>
    Right
<span class="token punctuation">}</span>

<span class="token keyword">let</span> directions <span class="token operator">=</span> <span class="token punctuation">[</span>Directions<span class="token punctuation">.</span>Up<span class="token punctuation">,</span> Directions<span class="token punctuation">.</span>Down<span class="token punctuation">,</span> Directions<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> Directions<span class="token punctuation">.</span>Right<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成后的代码为：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">var</span> directions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token comment">/* Up */</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token comment">/* Down */</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token comment">/* Left */</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token comment">/* Right */</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="外部枚举" tabindex="-1"><a class="header-anchor" href="#外部枚举" aria-hidden="true">#</a> 外部枚举</h2><p>外部枚举用来描述已经存在的枚举类型的形状。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">enum</span> Enum <span class="token punctuation">{</span>
    <span class="token constant">A</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token constant">B</span><span class="token punctuation">,</span>
    <span class="token constant">C</span> <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。</p>`,22),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","enums.html.vue"]]);export{d as default};
