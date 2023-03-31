import{_ as i,W as l,X as p,$ as n,a0 as a,Z as e,a1 as t,C as o}from"./framework-b609eea8.js";const c={},r=n("h1",{id:"服务器通过docker部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#服务器通过docker部署","aria-hidden":"true"},"#"),a(" 服务器通过docker部署")],-1),d=n("h2",{id:"注意事项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#注意事项","aria-hidden":"true"},"#"),a(" 注意事项")],-1),u={href:"https://hub.docker.com/r/seataio/seata-server/tags",target:"_blank",rel:"noopener noreferrer"},v=t(`<h2 id="镜像包的保存与载入" tabindex="-1"><a class="header-anchor" href="#镜像包的保存与载入" aria-hidden="true">#</a> 镜像包的保存与载入</h2><p>说明：镜像包需要一台可以连上网且已安装好docker的电脑先从dockerhub上pull下需要进行安装的软件镜像，然后保存镜像包并上传到内网服务器中，再进行安装，软件安装均基于离线镜像包进行。</p><p>例：</p><p>需要安装nginx，打一个nginx的镜像包</p><p>步骤：</p><ol><li><p>联网电脑：pull下镜像，docker pull nginx</p></li><li><p>联网电脑：查看镜像，docker pull nginx</p></li><li><p>联网电脑：保存镜像，docker save -o nginx.tar nginx:latest</p><p>格式：docker save -o 镜像包名.tar 镜像名:tag版本号</p></li><li><p>内网电脑：上传镜像包</p></li><li><p>内网电脑：镜像载入，docker load -i nginx.tar</p></li></ol><h2 id="容器启动" tabindex="-1"><a class="header-anchor" href="#容器启动" aria-hidden="true">#</a> 容器启动</h2><p>默认已经具有镜像包</p><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h3><p>nginx需要进行物理路径挂载，如果本机文件中没有nginx配置文件，则需要从镜像中先拷出一份到本机再进行映射</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 运行一个基础容器用于复制出初始配置文件</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 nginx:latest
<span class="token comment"># 创建进行复制的物理机配置文件路径</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/data/nginx/<span class="token punctuation">{</span>config,data,logs<span class="token punctuation">}</span>
<span class="token comment"># 从镜像中复制文件到物理路径中</span>
<span class="token function">docker</span> <span class="token function">cp</span> nginx:/etc/nginx /home/data/nginx/config/ 
<span class="token function">docker</span> <span class="token function">cp</span> nginx:/usr/share/nginx/html /home/data/nginx/data/
<span class="token function">docker</span> <span class="token function">cp</span> nginx:/var/log/nginx /home/data/nginx/logs/
<span class="token comment"># 删除用以复制的容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> nginx
<span class="token comment"># 重新启动一个新的容器并挂载映射路径</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/data/nginx/config/nginx/:/etc/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/data/nginx/data/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/data/nginx/logs/:/var/log/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h3><h4 id="单实例启动" tabindex="-1"><a class="header-anchor" href="#单实例启动" aria-hidden="true">#</a> 单实例启动</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动命令</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">--name</span> redis <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/data/redis/redis.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/data/redis/data:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> redis redis-server /etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">--appendonly</span> <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="集群部署" tabindex="-1"><a class="header-anchor" href="#集群部署" aria-hidden="true">#</a> 集群部署</h4><ol><li><p>docker内网集群部署</p><ol><li><p>创建3个redis容器,映射不同的ip</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> create <span class="token parameter variable">--name</span> redis-node1 <span class="token parameter variable">-v</span> /home/data/redis-data/node1:/data <span class="token parameter variable">-p</span> <span class="token number">36379</span>:6379 redis:5.0.7 --cluster-enabled <span class="token function">yes</span> --cluster-config-file nodes-node-1.conf

<span class="token function">docker</span> create <span class="token parameter variable">--name</span> redis-node2 <span class="token parameter variable">-v</span> /home/data/redis-data/node2:/data <span class="token parameter variable">-p</span> <span class="token number">36380</span>:6379 redis:5.0.7 --cluster-enabled <span class="token function">yes</span> --cluster-config-file nodes-node-2.conf

<span class="token function">docker</span> create <span class="token parameter variable">--name</span> redis-node3 <span class="token parameter variable">-v</span> /home/data/redis-data/node3:/data <span class="token parameter variable">-p</span> <span class="token number">36381</span>:6379 redis:5.0.7 --cluster-enabled <span class="token function">yes</span> --cluster-config-file nodes-node-3.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动容器，查看3个容器的docker内网ip</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动容器</span>
<span class="token function">docker</span> start redis-node1 redis-node2 redis-node3

<span class="token comment"># 查看容器内ip</span>
<span class="token function">docker</span> inspect redis-node1  
<span class="token number">172.17</span>.0.10

<span class="token function">docker</span> inspect redis-node2  
<span class="token number">172.17</span>.0.9

<span class="token function">docker</span> inspect redis-node3  
<span class="token number">172.17</span>.0.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>进入一个节点组建集群</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入容器内部</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis-node1 /bin/bash

<span class="token comment"># 组建集群</span>
redis-cli <span class="token parameter variable">--cluster</span> create <span class="token number">172.17</span>.0.10:6379  <span class="token number">172.17</span>.0.9:6379  <span class="token number">172.17</span>.0.8:6379 --cluster-replicas <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>进行部署测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 连接redis</span>
redis-cli <span class="token parameter variable">-c</span>

<span class="token comment"># 设置值，之后会跳转至其他节点</span>
<span class="token builtin class-name">set</span> <span class="token builtin class-name">test</span> <span class="token number">123123</span>

<span class="token comment"># 获取值，查看集群组建是否正常</span>
get <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>基于host模式</p><ol><li><p>创建基于host模式的容器（差异为映射端口变为指定端口）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> create <span class="token parameter variable">--name</span> redis-node1 <span class="token parameter variable">--net</span> <span class="token function">host</span> <span class="token parameter variable">-v</span> /home/data/redis-data/node1:/data redis:5.0.7 --cluster-enabled <span class="token function">yes</span> --cluster-config-file nodes-node-1.conf <span class="token parameter variable">--port</span> <span class="token number">36379</span>

<span class="token function">docker</span> create <span class="token parameter variable">--name</span> redis-node2 <span class="token parameter variable">--net</span> <span class="token function">host</span> <span class="token parameter variable">-v</span> /home/data/redis-data/node2:/data redis:5.0.7 --cluster-enabled <span class="token function">yes</span> --cluster-config-file nodes-node-2.conf <span class="token parameter variable">--port</span> <span class="token number">36380</span>

<span class="token function">docker</span> create <span class="token parameter variable">--name</span> redis-node3 <span class="token parameter variable">--net</span> <span class="token function">host</span> <span class="token parameter variable">-v</span> /home/data/redis-data/node3:/data redis:5.0.7 --cluster-enabled <span class="token function">yes</span> --cluster-config-file nodes-node-3.conf <span class="token parameter variable">--port</span> <span class="token number">36381</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动容器并组建集群</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动命令</span>
<span class="token function">docker</span> start redis-node1 redis-node2 redis-node3

<span class="token comment"># 进入某一个容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis-node1 /bin/bash

<span class="token comment"># 组建集群,172.1.1.199为当前物理机的ip地址</span>
redis-cli <span class="token parameter variable">--cluster</span> create <span class="token number">172.1</span>.1.199:36379  <span class="token number">172.1</span>.1.199:36380  <span class="token number">172.1</span>.1.199:36381 --cluster-replicas <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>进行部署测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 连接redis,指定ip和端口</span>
redis-cli <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">36379</span> <span class="token parameter variable">-c</span> 

<span class="token comment"># 设置值，之后会跳转至其他节点</span>
<span class="token builtin class-name">set</span> <span class="token builtin class-name">test</span> <span class="token number">123123</span>

<span class="token comment"># 获取值，查看集群组建是否正常</span>
get <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol><h3 id="nacos" tabindex="-1"><a class="header-anchor" href="#nacos" aria-hidden="true">#</a> nacos</h3><ul><li><p>创建目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/data/nacos/<span class="token punctuation">{</span>logs,conf<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 单例模式</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span>  <span class="token parameter variable">--name</span> nacos <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">9848</span>:9848 <span class="token parameter variable">-p</span> <span class="token number">9849</span>:9849 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">8848</span>:8848 <span class="token parameter variable">--env</span> <span class="token assign-left variable">MODE</span><span class="token operator">=</span>standalone <span class="token punctuation">\\</span>
<span class="token parameter variable">--env</span> <span class="token assign-left variable">NACOS_SERVER_IP</span><span class="token operator">=</span><span class="token number">172.1</span>.1.101 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/data/nacos/logs:/home/nacos/logs <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/data/nacos/conf/application.properties:/home/nacos/conf/application.properties <span class="token punctuation">\\</span>
nacos/nacos-server

<span class="token comment"># 使用mysql  且2.*版本</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span>  <span class="token parameter variable">--name</span> nacos <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">9848</span>:9848 <span class="token parameter variable">-p</span> <span class="token number">9849</span>:9849 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">8848</span>:8848 <span class="token parameter variable">--env</span> <span class="token assign-left variable">MODE</span><span class="token operator">=</span>standalone <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/data/nacos/logs:/home/nacos/logs <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/data/nacos/conf/application.properties:/home/nacos/conf/application.properties <span class="token punctuation">\\</span>
nacos/nacos-server:v2.0.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka" aria-hidden="true">#</a> kafka</h3><h4 id="单独部署" tabindex="-1"><a class="header-anchor" href="#单独部署" aria-hidden="true">#</a> 单独部署</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># kafka是依赖于zookeeper的 所以需要先安装一个zp，以下基于这两个镜像包</span>
<span class="token function">docker</span> pull wurstmeister/kafka
<span class="token function">docker</span> pull wurstmeister/zookeeper
<span class="token comment"># 查看容器ip命令：</span>
<span class="token function">docker</span> inspect 容器ID


<span class="token comment">#单机方式</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> zookeeper <span class="token parameter variable">-p</span> <span class="token number">2181</span>:2181 <span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime wurstmeister/zookeeper

KAFKA_ZOOKEEPER_CONNECT 配置本地的ES的地址
KAFKA_ADVERTISED_HOST_NAME 配置kafka所在服务器的地址
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> kafka <span class="token parameter variable">-p</span> <span class="token number">9092</span>:9092 <span class="token punctuation">\\</span>
<span class="token parameter variable">--link</span> zookeeper <span class="token punctuation">\\</span>
<span class="token parameter variable">--env</span> <span class="token assign-left variable">KAFKA_ZOOKEEPER_CONNECT</span><span class="token operator">=</span><span class="token number">172.1</span>.1.199:2181 <span class="token punctuation">\\</span>
<span class="token parameter variable">--env</span> <span class="token assign-left variable">KAFKA_ADVERTISED_HOST_NAME</span><span class="token operator">=</span><span class="token number">172.1</span>.1.199 <span class="token punctuation">\\</span>
<span class="token parameter variable">--env</span> <span class="token assign-left variable">KAFKA_ADVERTISED_PORT</span><span class="token operator">=</span><span class="token number">9092</span>  <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime <span class="token punctuation">\\</span>
wurstmeister/kafka
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="docker-compose部署集群-yml配置" tabindex="-1"><a class="header-anchor" href="#docker-compose部署集群-yml配置" aria-hidden="true">#</a> docker-compose部署集群 yml配置</h4><ul><li><p>创建映射文件目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/data/zookeeper/zoo<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span><span class="token punctuation">}</span>/<span class="token punctuation">{</span>logs,data,conf<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>建立docker-compose的配置文件（注意修改成对应ip）</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token key atrule">zoo1</span><span class="token punctuation">:</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> wurstmeister/zookeeper
        <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
        <span class="token key atrule">container_name</span><span class="token punctuation">:</span> zoo1
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;2181:2181&quot;</span>
        <span class="token key atrule">environment</span><span class="token punctuation">:</span>
            <span class="token key atrule">ZOO_MY_ID</span><span class="token punctuation">:</span> <span class="token number">1</span>
            <span class="token key atrule">ZOO_SERVERS</span><span class="token punctuation">:</span> server.1=0.0.0.0<span class="token punctuation">:</span>2888<span class="token punctuation">:</span>3888 server.2=zoo2<span class="token punctuation">:</span>2888<span class="token punctuation">:</span>3888 server.3=zoo3<span class="token punctuation">:</span>2888<span class="token punctuation">:</span><span class="token number">3888</span>
        <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
           <span class="token punctuation">-</span> <span class="token string">&quot;/home/data/zookeeper/zoo1/logs:/datalog&quot;</span>
           <span class="token punctuation">-</span> <span class="token string">&quot;/home/data/zookeeper/zoo1/data:/data&quot;</span>
           <span class="token punctuation">-</span> <span class="token string">&quot;/home/data/zookeeper/zoo1/conf:/conf&quot;</span>
    <span class="token key atrule">zoo2</span><span class="token punctuation">:</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> wurstmeister/zookeeper
        <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
        <span class="token key atrule">container_name</span><span class="token punctuation">:</span> zoo2
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;2182:2181&quot;</span>
        <span class="token key atrule">environment</span><span class="token punctuation">:</span>
            <span class="token key atrule">ZOO_MY_ID</span><span class="token punctuation">:</span> <span class="token number">2</span>
            <span class="token key atrule">ZOO_SERVERS</span><span class="token punctuation">:</span> server.1=zoo1<span class="token punctuation">:</span>2888<span class="token punctuation">:</span>3888 server.2=0.0.0.0<span class="token punctuation">:</span>2888<span class="token punctuation">:</span>3888 server.3=zoo3<span class="token punctuation">:</span>2888<span class="token punctuation">:</span><span class="token number">3888</span>
        <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
           <span class="token punctuation">-</span> <span class="token string">&quot;/home/data/zookeeper/zoo2/logs:/datalog&quot;</span>
           <span class="token punctuation">-</span> <span class="token string">&quot;/home/data/zookeeper/zoo2/data:/data&quot;</span>
           <span class="token punctuation">-</span> <span class="token string">&quot;/home/data/zookeeper/zoo2/conf:/conf&quot;</span>
    <span class="token key atrule">zoo3</span><span class="token punctuation">:</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> wurstmeister/zookeeper
        <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
        <span class="token key atrule">container_name</span><span class="token punctuation">:</span> zoo3
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;2183:2181&quot;</span>
        <span class="token key atrule">environment</span><span class="token punctuation">:</span>
            <span class="token key atrule">ZOO_MY_ID</span><span class="token punctuation">:</span> <span class="token number">3</span>
            <span class="token key atrule">ZOO_SERVERS</span><span class="token punctuation">:</span> server.1=zoo1<span class="token punctuation">:</span>2888<span class="token punctuation">:</span>3888 server.2=zoo2<span class="token punctuation">:</span>2888<span class="token punctuation">:</span>3888 server.3=0.0.0.0<span class="token punctuation">:</span>2888<span class="token punctuation">:</span><span class="token number">3888</span>
        <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
           <span class="token punctuation">-</span> <span class="token string">&quot;/home/data/zookeeper/zoo3/logs:/datalog&quot;</span>
           <span class="token punctuation">-</span> <span class="token string">&quot;/home/data/zookeeper/zoo3/data:/data&quot;</span>
           <span class="token punctuation">-</span> <span class="token string">&quot;/home/data/zookeeper/zoo3/conf:/conf&quot;</span>
    <span class="token key atrule">kafka1</span><span class="token punctuation">:</span>
        <span class="token key atrule">container_name</span><span class="token punctuation">:</span> kafka1
        <span class="token key atrule">image</span><span class="token punctuation">:</span> wurstmeister/kafka
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token string">&quot;9092:9092&quot;</span>
        <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> zoo1
          <span class="token punctuation">-</span> zoo2
          <span class="token punctuation">-</span> zoo3
        <span class="token key atrule">environment</span><span class="token punctuation">:</span>
          <span class="token key atrule">KAFKA_ADVERTISED_HOST_NAME</span><span class="token punctuation">:</span> kafka1                    <span class="token comment">## 修改:宿主机IP</span>
          <span class="token key atrule">KAFKA_ADVERTISED_LISTENERS</span><span class="token punctuation">:</span> PLAINTEXT<span class="token punctuation">:</span>//主机ip<span class="token punctuation">:</span><span class="token number">9092</span>    <span class="token comment">## 修改:宿主机IP</span>
          <span class="token key atrule">KAFKA_ZOOKEEPER_CONNECT</span><span class="token punctuation">:</span> 主机ip<span class="token punctuation">:</span><span class="token number">2181</span><span class="token punctuation">,</span>主机ip<span class="token punctuation">:</span><span class="token number">2182</span><span class="token punctuation">,</span>主机ip<span class="token punctuation">:</span><span class="token number">2183</span>
          <span class="token key atrule">KAFKA_ADVERTISED_PORT</span><span class="token punctuation">:</span> <span class="token number">9092</span>
          <span class="token key atrule">KAFKA_BROKER_ID</span><span class="token punctuation">:</span> <span class="token number">1</span>
          <span class="token key atrule">KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR</span><span class="token punctuation">:</span> <span class="token number">1</span>
          
    <span class="token key atrule">kafka2</span><span class="token punctuation">:</span>
        <span class="token key atrule">container_name</span><span class="token punctuation">:</span> kafka2
        <span class="token key atrule">image</span><span class="token punctuation">:</span> wurstmeister/kafka
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token string">&quot;9093:9093&quot;</span>
        <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> zoo1
          <span class="token punctuation">-</span> zoo2
          <span class="token punctuation">-</span> zoo3
        <span class="token key atrule">environment</span><span class="token punctuation">:</span>
          <span class="token key atrule">KAFKA_ADVERTISED_HOST_NAME</span><span class="token punctuation">:</span> kafka2                    <span class="token comment">## 修改:宿主机IP</span>
          <span class="token key atrule">KAFKA_ADVERTISED_LISTENERS</span><span class="token punctuation">:</span> PLAINTEXT<span class="token punctuation">:</span>//主机ip<span class="token punctuation">:</span><span class="token number">9093</span>    <span class="token comment">## 修改:宿主机IP</span>
          <span class="token key atrule">KAFKA_ZOOKEEPER_CONNECT</span><span class="token punctuation">:</span> 主机ip<span class="token punctuation">:</span><span class="token number">2181</span><span class="token punctuation">,</span>主机ip<span class="token punctuation">:</span><span class="token number">2182</span><span class="token punctuation">,</span>主机ip<span class="token punctuation">:</span><span class="token number">2183</span>
          <span class="token key atrule">KAFKA_ADVERTISED_PORT</span><span class="token punctuation">:</span> <span class="token number">9093</span>
          <span class="token key atrule">KAFKA_BROKER_ID</span><span class="token punctuation">:</span> <span class="token number">2</span>
          <span class="token key atrule">KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR</span><span class="token punctuation">:</span> <span class="token number">1</span>

    <span class="token key atrule">kafka3</span><span class="token punctuation">:</span>
        <span class="token key atrule">container_name</span><span class="token punctuation">:</span> kafka3
        <span class="token key atrule">image</span><span class="token punctuation">:</span> wurstmeister/kafka
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token string">&quot;9094:9094&quot;</span>
        <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> zoo1
          <span class="token punctuation">-</span> zoo2
          <span class="token punctuation">-</span> zoo3
        <span class="token key atrule">environment</span><span class="token punctuation">:</span>
          <span class="token key atrule">KAFKA_ADVERTISED_HOST_NAME</span><span class="token punctuation">:</span> kafka3                    <span class="token comment">## 修改:宿主机IP</span>
          <span class="token key atrule">KAFKA_ADVERTISED_LISTENERS</span><span class="token punctuation">:</span> PLAINTEXT<span class="token punctuation">:</span>//主机ip<span class="token punctuation">:</span><span class="token number">9094</span>    <span class="token comment">## 修改:宿主机IP</span>
          <span class="token key atrule">KAFKA_ZOOKEEPER_CONNECT</span><span class="token punctuation">:</span> 主机ip<span class="token punctuation">:</span><span class="token number">2181</span><span class="token punctuation">,</span>主机ip<span class="token punctuation">:</span><span class="token number">2182</span><span class="token punctuation">,</span>主机ip<span class="token punctuation">:</span><span class="token number">2183</span>
          <span class="token key atrule">KAFKA_ADVERTISED_PORT</span><span class="token punctuation">:</span> <span class="token number">9094</span>
          <span class="token key atrule">KAFKA_BROKER_ID</span><span class="token punctuation">:</span> <span class="token number">3</span>
          <span class="token key atrule">KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">kafkamanager</span><span class="token punctuation">:</span>
        <span class="token key atrule">container_name</span><span class="token punctuation">:</span> kafka<span class="token punctuation">-</span>manager
        <span class="token key atrule">image</span><span class="token punctuation">:</span> sheepkiller/kafka<span class="token punctuation">-</span>manager
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token string">&quot;8000:9000&quot;</span>
        <span class="token key atrule">environment</span><span class="token punctuation">:</span>
          <span class="token key atrule">ZK_HOSTS</span><span class="token punctuation">:</span> 主机ip<span class="token punctuation">:</span><span class="token number">2181</span><span class="token punctuation">,</span>主机ip<span class="token punctuation">:</span><span class="token number">2182</span><span class="token punctuation">,</span>主机ip<span class="token punctuation">:</span><span class="token number">2183</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h3><h4 id="初始容器启动" tabindex="-1"><a class="header-anchor" href="#初始容器启动" aria-hidden="true">#</a> 初始容器启动</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
 <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
 <span class="token parameter variable">--name</span> mysql <span class="token punctuation">\\</span>
 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>123456a <span class="token punctuation">\\</span>
 <span class="token parameter variable">-d</span> mysql:8.0.28 <span class="token punctuation">\\</span>
 <span class="token parameter variable">--default_authentication_plugin</span><span class="token operator">=</span>mysql_native_password <span class="token punctuation">\\</span>
 --character-set-server<span class="token operator">=</span>utf8mb4 <span class="token punctuation">\\</span>
 --collation-server<span class="token operator">=</span>utf8mb4_general_ci <span class="token punctuation">\\</span>
 <span class="token parameter variable">--lower_case_table_names</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复制默认配置至宿主机目录" tabindex="-1"><a class="header-anchor" href="#复制默认配置至宿主机目录" aria-hidden="true">#</a> 复制默认配置至宿主机目录</h4><ol><li><p>创建挂载目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/data/mysql/<span class="token punctuation">{</span>conf,logs,data<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>复制容器配置文件至挂载目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> mysql:/etc/mysql/my.cnf /home/data/mysql/conf/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除原有容器</p></li><li><p>通过挂载启动容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /home/data/mysql/conf/my.cnf:/etc/mysql/my.cnf <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /home/data/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /home/data/mysql/logs:/var/log/mysql <span class="token punctuation">\\</span>
 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
 <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
 <span class="token parameter variable">--name</span> mysql <span class="token punctuation">\\</span>
 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>123456a <span class="token punctuation">\\</span>
 <span class="token parameter variable">-d</span> mysql:8.0.28 <span class="token punctuation">\\</span>
 <span class="token parameter variable">--default_authentication_plugin</span><span class="token operator">=</span>mysql_native_password <span class="token punctuation">\\</span>
 --character-set-server<span class="token operator">=</span>utf8 <span class="token punctuation">\\</span>
 --collation-server<span class="token operator">=</span>utf8_general_ci <span class="token punctuation">\\</span>
 <span class="token parameter variable">--lower_case_table_names</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="gitlab" tabindex="-1"><a class="header-anchor" href="#gitlab" aria-hidden="true">#</a> Gitlab</h3><ol><li><p>创建挂载目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/data/gitlab/<span class="token punctuation">{</span>etc,log,opt<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>运行容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-id</span> <span class="token parameter variable">-p</span> <span class="token number">3000</span>:3000 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">9922</span>:9922 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/data/gitlab/etc:/etc/gitlab <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/data/gitlab/log:/var/log/gitlab <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/data/gitlab/opt:/var/opt/gitlab <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> gitlab gitlab/gitlab-ce:14.7.6-ce.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置gitlab服务器访问地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /home/data/gitlab/etc/gitlab.rb

<span class="token comment"># 两个端口号一个是web访问，一个是ssh</span>
<span class="token comment"># 配置http协议所使用的访问地址，推荐配置成域名或不变的ip，端口不配则默认80</span>
external_url <span class="token string">&#39;http://192.168.5.233:3000&#39;</span>
<span class="token comment"># https需要下面这句</span>
<span class="token comment"># nginx[&#39;redirect_http_to_https_port&#39;] = 3000</span>
<span class="token comment"># 配置ssh端口号</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_shell_ssh_port&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">9922</span>

<span class="token comment"># 保存后重启gitlab</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>进入容器初始化配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab /bin/bash
gitlab-ctl reconfigure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gitlab-ctl restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看初始密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/data/gitlab/etc/gitlab
<span class="token function">cat</span> initial_root_password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="seata" tabindex="-1"><a class="header-anchor" href="#seata" aria-hidden="true">#</a> Seata</h3><h4 id="seata-docker部署" tabindex="-1"><a class="header-anchor" href="#seata-docker部署" aria-hidden="true">#</a> seata docker部署</h4>`,33),m={href:"http://seata.io/zh-cn/docs/ops/deploy-by-docker.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<h5 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h5><p><strong>启动seata-server实例</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">--name</span> seata-server <span class="token parameter variable">-p</span> <span class="token number">8091</span>:8091 seataio/seata-server:1.4.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>指定seata-server IP和端口 启动</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">--name</span> seata-server <span class="token punctuation">\\</span>
        <span class="token parameter variable">-p</span> <span class="token number">8091</span>:8091 <span class="token punctuation">\\</span>
        <span class="token parameter variable">-e</span> <span class="token assign-left variable">SEATA_IP</span><span class="token operator">=</span><span class="token number">172.1</span>.1.199 <span class="token punctuation">\\</span>
        <span class="token parameter variable">-e</span> <span class="token assign-left variable">SEATA_PORT</span><span class="token operator">=</span><span class="token number">8091</span> <span class="token punctuation">\\</span>
        seataio/seata-server:1.4.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用自定义文档配置" tabindex="-1"><a class="header-anchor" href="#使用自定义文档配置" aria-hidden="true">#</a> 使用自定义文档配置</h5><p>自定义配置文件需要通过挂载文件的方式实现，将宿主机上的 <code>registry.conf</code> 和 <code>file.conf</code> 挂载到容器中相应的目录</p><ul><li>指定 registry.conf</li></ul><p>使用自定义配置文件时必须指定环境变量 <code>SEATA_CONFIG_NAME</code>, 并且值需要以<code>file:</code>开始, 如: <code>file:/root/seata-config/registry</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">--name</span> seata-server <span class="token punctuation">\\</span>
        <span class="token parameter variable">-p</span> <span class="token number">8091</span>:8091 <span class="token punctuation">\\</span>
        <span class="token parameter variable">-e</span> <span class="token assign-left variable">SEATA_IP</span><span class="token operator">=</span><span class="token number">172.1</span>.1.199 <span class="token punctuation">\\</span>
        <span class="token parameter variable">-e</span> <span class="token assign-left variable">SEATA_PORT</span><span class="token operator">=</span><span class="token number">8091</span> <span class="token punctuation">\\</span>
        <span class="token parameter variable">-e</span> <span class="token assign-left variable">SEATA_CONFIG_NAME</span><span class="token operator">=</span>file:/root/seata-config/registry <span class="token punctuation">\\</span>
        <span class="token parameter variable">-v</span> /home/data/seata/config:/root/seata-config  <span class="token punctuation">\\</span>
        seataio/seata-server:1.4.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>-e</code> 用于配置环境变量， <code>-v</code> 用于挂载宿主机的目录</p><ul><li>指定 file.conf</li></ul><p>如果需要同时指定 <code>file.conf</code> 配置文件，则需要在 <code>registry.conf</code> 文件中将 <code>config</code> 配置改为以下内容，<code>name</code> 的值为容器中对应的路径</p><div class="language-seata line-numbers-mode" data-ext="seata"><pre class="language-seata"><code>config {
  type = &quot;file&quot;

  file {
    name = &quot;file:/root/seata-config/file.conf&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h5><p>seata-server 支持以下环境变量：</p><ul><li><strong>SEATA_IP</strong></li></ul><blockquote><p>可选, 指定seata-server启动的IP, 该IP用于向注册中心注册时使用, 如eureka等</p></blockquote><ul><li><strong>SEATA_PORT</strong></li></ul><blockquote><p>可选, 指定seata-server启动的端口, 默认为 <code>8091</code></p></blockquote><ul><li><strong>STORE_MODE</strong></li></ul><blockquote><p>可选, 指定seata-server的事务日志存储方式, 支持<code>db</code> ,<code>file</code>,redis(Seata-Server 1.3及以上版本支持), 默认是 <code>file</code></p></blockquote><ul><li><strong>SERVER_NODE</strong></li></ul><blockquote><p>可选, 用于指定seata-server节点ID, 如 <code>1</code>,<code>2</code>,<code>3</code>..., 默认为 <code>根据ip生成</code></p></blockquote><ul><li><strong>SEATA_ENV</strong></li></ul><blockquote><p>可选, 指定 seata-server 运行环境, 如 <code>dev</code>, <code>test</code> 等, 服务启动时会使用 <code>registry-dev.conf</code> 这样的配置</p></blockquote><ul><li><strong>SEATA_CONFIG_NAME</strong></li></ul><blockquote><p>可选, 指定配置文件位置, 如 <code>file:/root/registry</code>, 将会加载 <code>/root/registry.conf</code> 作为配置文件，如果需要同时指定 <code>file.conf</code>文件，需要将<code>registry.conf</code>的<code>config.file.name</code>的值改为类似<code>file:/root/file.conf</code>：</p></blockquote><h4 id="seata-docker-compose-部署" tabindex="-1"><a class="header-anchor" href="#seata-docker-compose-部署" aria-hidden="true">#</a> Seata docker-compose 部署</h4><h5 id="快速开始-1" tabindex="-1"><a class="header-anchor" href="#快速开始-1" aria-hidden="true">#</a> 快速开始</h5>`,30),b={href:"http://seata.io/zh-cn/docs/ops/deploy-by-docker-compose.html#file-file",target:"_blank",rel:"noopener noreferrer"},h={href:"http://seata.io/zh-cn/docs/ops/deploy-by-docker-compose.html#file-db",target:"_blank",rel:"noopener noreferrer"},g={href:"http://seata.io/zh-cn/docs/ops/deploy-by-docker-compose.html#nacos-db",target:"_blank",rel:"noopener noreferrer"},f={href:"http://seata.io/zh-cn/docs/ops/deploy-by-docker-compose.html#ha-nacos-db",target:"_blank",rel:"noopener noreferrer"},y=t(`<h5 id="无注册中心-file存储" tabindex="-1"><a class="header-anchor" href="#无注册中心-file存储" aria-hidden="true">#</a> 无注册中心，file存储</h5><p>该模式下，不需要注册中心，也不需要任何第三方存储中心。</p><p>docker-compose.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.1&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">seata-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> seataio/seata<span class="token punctuation">-</span>server<span class="token punctuation">:</span>$<span class="token punctuation">{</span>latest<span class="token punctuation">-</span>release<span class="token punctuation">-</span>version<span class="token punctuation">}</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>server
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8091:8091&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> SEATA_PORT=8091
      <span class="token punctuation">-</span> STORE_MODE=file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="无注册中心-db存储" tabindex="-1"><a class="header-anchor" href="#无注册中心-db存储" aria-hidden="true">#</a> 无注册中心，DB存储</h5>`,5),_={href:"https://github.com/seata/seata/tree/develop/script/server/db",target:"_blank",rel:"noopener noreferrer"},q=n("p",null,[n("strong",null,"（1）准备file.conf配置文件")],-1),x={href:"https://github.com/seata/seata/blob/develop/script/config-center/config.txt",target:"_blank",rel:"noopener noreferrer"},A=t(`<div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 存储模式</span>
<span class="token key attr-name">store.mode</span><span class="token punctuation">=</span><span class="token value attr-value">db</span>

<span class="token key attr-name">store.db.datasource</span><span class="token punctuation">=</span><span class="token value attr-value">druid</span>
<span class="token key attr-name">store.db.dbType</span><span class="token punctuation">=</span><span class="token value attr-value">mysql</span>
<span class="token comment"># 需要根据mysql的版本调整driverClassName</span>
<span class="token comment"># mysql8及以上版本对应的driver：com.mysql.cj.jdbc.Driver</span>
<span class="token comment"># mysql8以下版本的driver：com.mysql.jdbc.Driver</span>
<span class="token key attr-name">store.db.driverClassName</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token comment"># 注意根据生产实际情况调整参数host和port</span>
<span class="token key attr-name">store.db.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&amp;characterEncoding=utf8&amp;connectTimeout=1000&amp;socketTimeout=3000&amp;autoReconnect=true&amp;useSSL=false</span>
<span class="token comment"># 数据库用户名</span>
<span class="token key attr-name">store.db.user</span><span class="token punctuation">=</span>
<span class="token comment"># 用户名密码</span>
<span class="token key attr-name">store.db.password</span><span class="token punctuation">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）准备registry.conf文件</strong></p>`,2),E={href:"https://seata.io/zh-cn/docs/user/registry/index.html",target:"_blank",rel:"noopener noreferrer"},T={href:"https://seata.io/zh-cn/docs/user/configuration/index.html",target:"_blank",rel:"noopener noreferrer"},S=t(`<p>直连模式（无注册中心）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>registry {
  type = &quot;file&quot;
}

config {
  type = &quot;file&quot;
  
  file {
    name=&quot;file:/root/seata-config/file.conf&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）准备docker-compose.yaml文件</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.1&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">seata-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> seataio/seata<span class="token punctuation">-</span>server<span class="token punctuation">:</span>$<span class="token punctuation">{</span>latest<span class="token punctuation">-</span>release<span class="token punctuation">-</span>version<span class="token punctuation">}</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>server
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8091:8091&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> SEATA_PORT=8091
      <span class="token punctuation">-</span> SEATA_CONFIG_NAME=file<span class="token punctuation">:</span>/root/seata<span class="token punctuation">-</span>config/registry
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token comment"># 需要把file.conf和registry.conf都放到./seata-server/config文件夹中</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;./seata-server/config:/root/seata-config&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="nacos注册中心-db存储" tabindex="-1"><a class="header-anchor" href="#nacos注册中心-db存储" aria-hidden="true">#</a> nacos注册中心，db存储</h5>`,5),O={href:"https://github.com/seata/seata/tree/develop/script/server/db",target:"_blank",rel:"noopener noreferrer"},z=n("p",null,[n("strong",null,"（1）准备registry.conf文件")],-1),I=n("p",null,"nacos注册中心。",-1),R={href:"https://seata.io/zh-cn/docs/user/registry/index.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://seata.io/zh-cn/docs/user/configuration/index.html",target:"_blank",rel:"noopener noreferrer"},K=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>registry {
  type = &quot;nacos&quot;
  
  nacos {
  # seata服务注册在nacos上的别名，客户端通过该别名调用服务
    application = &quot;seata-server&quot;
  # 请根据实际生产环境配置nacos服务的ip和端口
    serverAddr = &quot;127.0.0.1:8848&quot;
  # nacos上指定的namespace
    namespace = &quot;&quot;
    cluster = &quot;default&quot;
    username = &quot;nacos&quot;
    password = &quot;nacos&quot;
  }
}

config {
  type = &quot;nacos&quot;
  
  nacos {
    # 请根据实际生产环境配置nacos服务的ip和端口
    serverAddr = &quot;127.0.0.1:8848&quot;
    # nacos上指定的namespace
    namespace = &quot;&quot;
    group = &quot;SEATA_GROUP&quot;
    username = &quot;nacos&quot;
    password = &quot;nacos&quot;
  # 从v1.4.2版本开始，已支持从一个Nacos dataId中获取所有配置信息,你只需要额外添加一个dataId配置项
    dataId: &quot;seataServer.properties&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>准备nacos配置中心配置</strong></p>`,2),D={href:"https://github.com/seata/seata/blob/develop/script/config-center/config.txt",target:"_blank",rel:"noopener noreferrer"},P=t(`<blockquote><p>你需要在nacos新建配置，此处dataId为seataServer.properties</p></blockquote><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 存储模式</span>
<span class="token key attr-name">store.mode</span><span class="token punctuation">=</span><span class="token value attr-value">db</span>

<span class="token key attr-name">store.db.datasource</span><span class="token punctuation">=</span><span class="token value attr-value">druid</span>
<span class="token key attr-name">store.db.dbType</span><span class="token punctuation">=</span><span class="token value attr-value">mysql</span>
<span class="token comment"># 需要根据mysql的版本调整driverClassName</span>
<span class="token comment"># mysql8及以上版本对应的driver：com.mysql.cj.jdbc.Driver</span>
<span class="token comment"># mysql8以下版本的driver：com.mysql.jdbc.Driver</span>
<span class="token key attr-name">store.db.driverClassName</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token comment"># 注意根据生产实际情况调整参数host和port</span>
<span class="token key attr-name">store.db.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&amp;characterEncoding=utf8&amp;connectTimeout=1000&amp;socketTimeout=3000&amp;autoReconnect=true&amp;useSSL=false</span>
<span class="token comment"># 数据库用户名</span>
<span class="token key attr-name">store.db.user</span><span class="token punctuation">=</span>
<span class="token comment"># 用户名密码</span>
<span class="token key attr-name">store.db.password</span><span class="token punctuation">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>准备docker-compose.yaml文件</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.1&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">seata-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> seataio/seata<span class="token punctuation">-</span>server<span class="token punctuation">:</span>$<span class="token punctuation">{</span>latest<span class="token punctuation">-</span>release<span class="token punctuation">-</span>version<span class="token punctuation">}</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>server
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8091:8091&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token comment"># 指定seata服务启动端口</span>
      <span class="token punctuation">-</span> SEATA_PORT=8091
      <span class="token comment"># 注册到nacos上的ip。客户端将通过该ip访问seata服务。</span>
      <span class="token comment"># 注意公网ip和内网ip的差异。</span>
      <span class="token punctuation">-</span> SEATA_IP=127.0.0.1
      <span class="token punctuation">-</span> SEATA_CONFIG_NAME=file<span class="token punctuation">:</span>/root/seata<span class="token punctuation">-</span>config/registry
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token comment"># 因为registry.conf中是nacos配置中心，只需要把registry.conf放到./seata-server/config文件夹中</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;./seata-server/config:/root/seata-config&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="高可用部署" tabindex="-1"><a class="header-anchor" href="#高可用部署" aria-hidden="true">#</a> 高可用部署</h5><blockquote><p>seata高可用依赖于注册中心、数据库，可不依赖配置中心。</p></blockquote>`,6),F={href:"https://github.com/seata/seata/tree/develop/script/server/db",target:"_blank",rel:"noopener noreferrer"},C=n("p",null,[n("strong",null,"（1）准备file.conf配置文件")],-1),j={href:"https://github.com/seata/seata/blob/develop/script/config-center/config.txt",target:"_blank",rel:"noopener noreferrer"},w=t(`<div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 存储模式</span>
<span class="token key attr-name">store.mode</span><span class="token punctuation">=</span><span class="token value attr-value">db</span>

<span class="token key attr-name">store.db.datasource</span><span class="token punctuation">=</span><span class="token value attr-value">druid</span>
<span class="token key attr-name">store.db.dbType</span><span class="token punctuation">=</span><span class="token value attr-value">mysql</span>
<span class="token comment"># 需要根据mysql的版本调整driverClassName</span>
<span class="token comment"># mysql8及以上版本对应的driver：com.mysql.cj.jdbc.Driver</span>
<span class="token comment"># mysql8以下版本的driver：com.mysql.jdbc.Driver</span>
<span class="token key attr-name">store.db.driverClassName</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token comment"># 注意根据生产实际情况调整参数host和port</span>
<span class="token key attr-name">store.db.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&amp;characterEncoding=utf8&amp;connectTimeout=1000&amp;socketTimeout=3000&amp;autoReconnect=true&amp;useSSL=false</span>
<span class="token comment"># 数据库用户名</span>
<span class="token key attr-name">store.db.user</span><span class="token punctuation">=</span>
<span class="token comment"># 用户名密码</span>
<span class="token key attr-name">store.db.password</span><span class="token punctuation">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）准备registry.conf文件</strong></p><p>nacos注册中心。</p>`,3),V={href:"https://seata.io/zh-cn/docs/user/registry/index.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://seata.io/zh-cn/docs/user/configuration/index.html",target:"_blank",rel:"noopener noreferrer"},L=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>registry {
  type = &quot;nacos&quot;
  
  nacos {
  # seata服务注册在nacos上的别名，客户端通过该别名调用服务
    application = &quot;seata-server&quot;
  # nacos服务的ip和端口
    serverAddr = &quot;127.0.0.1:8848&quot;
  # nacos上指定的namespace
    namespace = &quot;&quot;
    cluster = &quot;default&quot;
    username = &quot;nacos&quot;
    password = &quot;nacos&quot;
  }
}

config {
  type = &quot;file&quot;
  
  file {
    name=&quot;file:/root/seata-config/file.conf&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）准备docker-compose.yaml文件</strong></p>`,2),Z={href:"https://seata.io/zh-cn/docs/ops/deploy-ha.html",target:"_blank",rel:"noopener noreferrer"},G=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.1&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token comment"># seata服务1</span>
  <span class="token key atrule">seata-server-1</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> seataio/seata<span class="token punctuation">-</span>server<span class="token punctuation">:</span>$<span class="token punctuation">{</span>latest<span class="token punctuation">-</span>release<span class="token punctuation">-</span>version<span class="token punctuation">}</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>server
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8091:8091&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token comment"># 指定seata服务启动端口</span>
      <span class="token punctuation">-</span> SEATA_PORT=8091
      <span class="token comment"># 注册到nacos上的ip。客户端将通过该ip访问seata服务。</span>
      <span class="token comment"># 注意公网ip和内网ip的差异。</span>
      <span class="token punctuation">-</span> SEATA_IP=127.0.0.1
      <span class="token punctuation">-</span> SEATA_CONFIG_NAME=file<span class="token punctuation">:</span>/root/seata<span class="token punctuation">-</span>config/registry
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token comment"># 需要把file.conf和registry.conf都放到./seata-server/config文件夹中</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;./seata-server/config:/root/seata-config&quot;</span>
  <span class="token comment"># seata服务2</span>
  <span class="token key atrule">seata-server-2</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> seataio/seata<span class="token punctuation">-</span>server<span class="token punctuation">:</span>$<span class="token punctuation">{</span>latest<span class="token punctuation">-</span>release<span class="token punctuation">-</span>version<span class="token punctuation">}</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>server
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8092:8092&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token comment"># 指定seata服务启动端口</span>
      <span class="token punctuation">-</span> SEATA_PORT=8092
      <span class="token comment"># 注册到nacos上的ip。客户端将通过该ip访问seata服务。</span>
      <span class="token comment"># 注意公网ip和内网ip的差异。</span>
      <span class="token punctuation">-</span> SEATA_IP=127.0.0.1
      <span class="token punctuation">-</span> SEATA_CONFIG_NAME=file<span class="token punctuation">:</span>/root/seata<span class="token punctuation">-</span>config/registry
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token comment"># 需要把file.conf和registry.conf都放到./seata-server/config文件夹中</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;./seata-server/config:/root/seata-config&quot;</span>
  
  <span class="token comment"># seata服务3......seata服务N</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="seata环境变量" tabindex="-1"><a class="header-anchor" href="#seata环境变量" aria-hidden="true">#</a> seata环境变量</h5><p>seata-server 支持以下环境变量：</p><ul><li><strong>SEATA_IP</strong></li></ul><blockquote><p>可选, 指定seata-server启动的IP, 该IP用于向注册中心注册时使用, 如eureka等</p></blockquote><ul><li><strong>SEATA_PORT</strong></li></ul><blockquote><p>可选, 指定seata-server启动的端口, 默认为 <code>8091</code></p></blockquote><ul><li><strong>STORE_MODE</strong></li></ul><blockquote><p>可选, 指定seata-server的事务日志存储方式, 支持<code>db</code>, <code>file</code>, <code>redis</code>(Seata-Server 1.3及以上版本支持), 默认是 <code>file</code></p></blockquote><ul><li><strong>SERVER_NODE</strong></li></ul><blockquote><p>可选, 用于指定seata-server节点ID, 如 <code>1</code>,<code>2</code>,<code>3</code>..., 默认为 <code>根据ip生成</code></p></blockquote><ul><li><strong>SEATA_ENV</strong></li></ul><blockquote><p>可选, 指定 seata-server 运行环境, 如 <code>dev</code>, <code>test</code> 等, 服务启动时会使用 <code>registry-dev.conf</code> 这样的配置</p></blockquote><ul><li><strong>SEATA_CONFIG_NAME</strong></li></ul><blockquote><p>可选, 指定配置文件位置, 如 <code>file:/root/registry</code>, 将会加载 <code>/root/registry.conf</code> 作为配置文件，如果需要同时指定 <code>file.conf</code>文件，需要将<code>registry.conf</code>的<code>config.file.name</code>的值改为类似<code>file:/root/file.conf</code>：</p></blockquote><h3 id="jenkins" tabindex="-1"><a class="header-anchor" href="#jenkins" aria-hidden="true">#</a> jenkins</h3><ol><li><p>拉取镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
  <span class="token function">docker</span> pull jenkins/jenkins:2.341
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建映射目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/data/jenkins/jenkins_home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> jenkins <span class="token punctuation">\\</span>
<span class="token parameter variable">--user</span> root <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">8050</span>:8080 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">50000</span>:50000 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/data/jenkins/jenkins_home:/var/jenkins_home <span class="token punctuation">\\</span>
jenkins/jenkins:2.341
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /home/data/jenkins/jenkins_home/secrets/initialAdminPassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入对应的web页面查看</p><ol><li>上面端口映射的为8050</li><li>将查看的密码输入</li><li>选择安装建议的插件</li></ol></li></ol><h3 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch" aria-hidden="true">#</a> elasticsearch</h3><h4 id="单节点部署" tabindex="-1"><a class="header-anchor" href="#单节点部署" aria-hidden="true">#</a> 单节点部署</h4><ol><li>本地映射文件准备</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建本地映射文件夹</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/data/elasticsearch/<span class="token punctuation">{</span>config,data,plugins<span class="token punctuation">}</span>
<span class="token comment"># 将对应配置写入</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;http.host: 0.0.0.0&quot;</span> <span class="token operator">&gt;&gt;</span> /home/data/elasticsearch/config/elasticsearch.yml
<span class="token comment"># 修改映射文件权限，如果没权限会启动失败</span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /home/data/elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>容器启动</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">docker</span> run <span class="token parameter variable">--name</span> elasticsearch <span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 <span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token string">&quot;discovery.type=single-node&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms64m -Xmx512m&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /home/data/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /home/data/elasticsearch/data:/usr/share/elasticsearch/data <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /home/data/elasticsearch/plugins:/usr/share/elasticsearch/plugins <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> elasticsearch:7.12.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kibana" tabindex="-1"><a class="header-anchor" href="#kibana" aria-hidden="true">#</a> kibana</h3><ol><li>映射文件准备</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建本地映射文件</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/data/elasticsearch/kibana/config/
<span class="token comment"># 修改配置文件信息</span>
<span class="token function">vim</span> /home/data/elasticsearch/kibana/config/kibana.yml
<span class="token comment"># 将下面信息写入</span>
server.name: kibana
server.host: <span class="token string">&quot;0&quot;</span>
elasticsearch.hosts: <span class="token punctuation">[</span> <span class="token string">&quot;http://172.1.1.199:9200&quot;</span> <span class="token punctuation">]</span>
xpack.monitoring.ui.container.elasticsearch.enabled: <span class="token boolean">true</span>
<span class="token comment">#(172.1.1.199为实际ip地址，根据自己的地址进行修改。）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>容器启动</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>kibana <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-p</span> <span class="token number">5601</span>:5601 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /home/data/elasticsearch/kibana/config/kibana.yml:/usr/share/kibana/config/kibana.yml <span class="token punctuation">\\</span>
  kibana:7.12.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zipkin" tabindex="-1"><a class="header-anchor" href="#zipkin" aria-hidden="true">#</a> zipkin</h3><ol><li>容器启动</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span> always <span class="token parameter variable">-p</span> <span class="token number">9411</span>:9411 <span class="token parameter variable">--name</span> zipkin openzipkin/zipkin:2.23
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h3><ol><li><p>由于需要使用外部数据库，需要使用宿主机网络，加上参数<code>--net=host</code></p></li><li><p>由于使用了目录映射，-v，需要将执行的jar包放入对应的目录下，及宿主机目录，其实质的地址与dockerfile中的命令有关</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run --net=host --name aos-config \\
-v /home/data/aos/config:/aos/config \\
-v /home/data/aos/logback:/aos/logback \\
-v /etc/localtime:/etc/localtime \\
aos-config:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,33);function $(B,H){const s=o("ExternalLinkIcon");return l(),p("div",null,[r,d,n("ul",null,[n("li",null,[a("避免直接拉取latest版本镜像，latest版本并不一定是released版本，为避免不必要的问题，请到"),n("a",u,[a("docker镜像仓库"),e(s)]),a("确定要拉取的镜像版本。")])]),v,n("blockquote",null,[n("p",null,[a("官方docker 部署文档 "),n("a",m,[a("http://seata.io/zh-cn/docs/ops/deploy-by-docker.html"),e(s)])])]),k,n("ul",null,[n("li",null,[n("a",b,[a("无注册中心，file存储"),e(s)])]),n("li",null,[n("a",h,[a("无注册中心，db存储"),e(s)])]),n("li",null,[n("a",g,[a("nacos注册中心，db存储"),e(s)])]),n("li",null,[n("a",f,[a("高可用部署"),e(s)])])]),y,n("blockquote",null,[n("p",null,[a("db模式需要在数据库创建对应的表结构，["),n("a",_,[a("建表脚本]"),e(s)]),a("。")])]),q,n("p",null,[a("更多存储模式支持可参考"),n("a",x,[a("更多存储模式"),e(s)])]),A,n("p",null,[a("更多注册中心支持可参考"),n("a",E,[a("注册中心"),e(s)])]),n("p",null,[a("更多配置中心支持可参考"),n("a",T,[a("配置中心"),e(s)])]),S,n("blockquote",null,[n("p",null,[a("db模式需要在数据库创建对应的表结构，["),n("a",O,[a("建表脚本]"),e(s)]),a("。")])]),z,I,n("p",null,[a("更多注册中心支持可参考"),n("a",R,[a("注册中心"),e(s)])]),n("p",null,[a("更多配置中心支持可参考"),n("a",N,[a("配置中心"),e(s)])]),K,n("p",null,[a("更多存储模式支持可参考"),n("a",D,[a("更多存储模式"),e(s)])]),P,n("blockquote",null,[n("p",null,[a("db模式需要在数据库创建对应的表结构，["),n("a",F,[a("建表脚本]"),e(s)]),a("。")])]),C,n("p",null,[a("更多存储模式支持可参考"),n("a",j,[a("更多存储模式"),e(s)])]),w,n("p",null,[a("更多注册中心支持可参考"),n("a",V,[a("注册中心"),e(s)])]),n("p",null,[a("更多配置中心支持可参考"),n("a",M,[a("配置中心"),e(s)])]),L,n("blockquote",null,[n("p",null,[a("只要保持配置一致，seata服务可在一台机器上部署多实例，也可同时部署在多台不同的主机下面实现服务高可用。 "),n("a",Z,[a("高可用部署"),e(s)])])]),G])}const Y=i(c,[["render",$],["__file","container-dep.html.vue"]]);export{Y as default};
