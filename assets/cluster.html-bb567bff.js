import{_ as l,W as r,X as c,$ as n,a0 as s,Z as i,a1 as e,C as d}from"./framework-b609eea8.js";const o={},t=e(`<h1 id="生产集群部署" tabindex="-1"><a class="header-anchor" href="#生产集群部署" aria-hidden="true">#</a> 生产集群部署</h1><blockquote><p>以下所有仅为配置，默认已经安装好基础应用</p></blockquote><h2 id="redis集群" tabindex="-1"><a class="header-anchor" href="#redis集群" aria-hidden="true">#</a> redis集群</h2><blockquote><p>基于redis-6.2.6版本，三主从集群，6节点</p></blockquote><ol><li><p>前置环境</p><ol><li>默认已经安装redis-6.2.6版本，并可正常使用，示例安装目录为/usr/local/redis/redis-6.2.6</li><li>三台服务器环境，示例ip分别为 192.168.1.251，192.168.1.252，192.168.1.253</li></ol></li><li><p>redis集群单主机创建</p><ol><li>创建配置文件及存储路径 <ol><li>root用户增加权限</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chmod -R 777 /etc/redis/cluster
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/redis/cluster <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /etc/redis/cluster
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><p>创建模板文件（注意更改每台绑定的主机ip）</p><ol><li>vim redis-cluster.tmpl</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bind 192.168.1.251
port \${PORT}
daemonize yes
pidfile &quot;/var/run/redis_\${PORT}.pid&quot;
logfile &quot;/etc/redis/cluster/\${PORT}/redis.log&quot;
dir &quot;/etc/redis/cluster/\${PORT}/data&quot;
masterauth &quot;123456&quot;
requirepass &quot;123456&quot;
appendonly yes
cluster-enabled yes
cluster-config-file nodes_\${PORT}.conf
cluster-node-timeout 15000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建对应的配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">port</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">7001</span> <span class="token number">7002</span><span class="token variable">\`</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token punctuation">\\</span>
    <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ./<span class="token variable">\${port}</span>/conf <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">PORT</span><span class="token operator">=</span><span class="token variable">\${port}</span> envsubst <span class="token operator">&lt;</span> ./redis-cluster.tmpl <span class="token operator">&gt;</span> ./<span class="token variable">\${port}</span>/conf/redis.conf <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ./<span class="token variable">\${port}</span>/data<span class="token punctuation">;</span> <span class="token punctuation">\\</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">port</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">7001</span> <span class="token number">7002</span><span class="token variable">\`</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token punctuation">\\</span>
    redis-server /etc/redis/cluster/<span class="token variable">\${port}</span>/conf/redis.conf<span class="token punctuation">;</span> <span class="token punctuation">\\</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将上面操作在所有主机之间都操作一次</p></li><li><p>其余排查命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token comment"># 查看当前redis进程</span>
  <span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> redis

  <span class="token comment"># 关闭当台服务器所有redis进程</span>
  <span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> redis <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span>
  
  <span class="token comment"># 防火墙 firewalld iptables</span>
  <span class="token comment"># 查看防火墙状态</span>
  systemctl status firewalld
  <span class="token comment"># 关闭防火墙服务</span>
  systemctl stop firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>构建集群</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    redis-cli <span class="token parameter variable">-a</span> <span class="token number">123456</span> <span class="token parameter variable">--cluster</span> create <span class="token number">192.168</span>.1.251:7001 <span class="token number">192.168</span>.1.251:7002 <span class="token number">192.168</span>.1.252:7001 <span class="token number">192.168</span>.1.252:7002 <span class="token number">192.168</span>.1.252:7001 <span class="token number">192.168</span>.1.252:7002 --cluster-replicas <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="nacos集群" tabindex="-1"><a class="header-anchor" href="#nacos集群" aria-hidden="true">#</a> nacos集群</h2><blockquote><p>3节点集群，nginx作为vip</p></blockquote>`,7),p=e(`<li><p>nginx可以正常使用</p></li><li><p>配置好jdk1.8，如果使用mysql作为数据库，则版本要求5.7以上</p><ol><li><code>tar -zxvf jdk-8u311-linux-x64.tar.gz -C /opt/</code></li><li><code>vim /etc/profile</code></li><li>补充到末尾<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   export JAVA_HOME=/opt/jdk1.8.0_311
   export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
   export PATH=$PATH:$JAVA_HOME/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>生效jdk配置<code>source /etc/profile</code></li></ol></li>`,2),v={href:"https://github.com/alibaba/nacos/releases%EF%BC%8C%E7%A4%BA%E4%BE%8B%E4%B8%BA2.0.3%E7%89%88%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},u=n("li",null,[n("p",null,"解压，并配置可以启动")],-1),m=n("li",null,[n("p",null,"示例三台服务器，示例ip分别为 192.168.1.251，192.168.1.252，192.168.1.253")],-1),b=n("li",null,[n("p",null,"部署三台nacos节点的配置如下"),n("ol",null,[n("li",null,"192.168.1.251:18848"),n("li",null,"192.168.1.252:18848"),n("li",null,"192.168.1.253:18848")])],-1),k=e(`<li>将服务包解压到对应路径 <ol><li>tar -zxvf nacos-server-2.0.3.tar.gz -C /usr/local/ &amp;&amp; cd /usr/local/nacos/conf</li></ol></li><li>增加集群配置文件<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> conf
<span class="token function">vim</span> cluster.conf

<span class="token comment"># 填入下面的ip</span>
<span class="token number">192.168</span>.1.251:18848
<span class="token number">192.168</span>.1.252:18848
<span class="token number">192.168</span>.1.253:18848
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>修改端口配置 <ol><li>修改<code>conf/application.properties</code>中的端口8848为18848</li></ol></li><li>启动单节点 <ol><li>使用内置数据库 <ol><li>启动命令：<code>sh startup.sh -p embedded</code></li><li>tail -f 日志路径 ctrl + c 退出</li></ol></li><li>使用mysql <ol><li>创建对应数据库</li><li>导入表，脚本位于conf文件夹nacos-mysql.sql</li><li>配置<code>conf/application.properties</code>中数据库连接相关内容</li><li>启动节点 <code>sh startup.sh</code></li></ol></li></ol></li><li>对三台节点服务器做以上相同步骤</li>`,5),h=e(`<ol><li>增加多环境配置文件夹 <ol><li><code>mkdir -p /usr/local/nginx/conf.d &amp;&amp; cd /usr/local/nginx/conf.d</code></li></ol></li><li>补充 <code>vim /usr/local/nginx/conf/nginx.conf</code><ol><li>include /usr/local/nginx/conf.d/*.conf;</li></ol></li><li>在/usr/local/nginx/conf.d/ 增加以下配置</li></ol><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>upstream nacos {
    server 127.0.0.1:18848;
    server 127.0.0.1:28848;
    server 127.0.0.1:38848;
}

server {
    listen 8848;
    server_name localhost;
    location / {
        proxy_pass http://nacos;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),g={start:"4"},f={href:"http://ip:8848/nacos%E6%9F%A5%E7%9C%8B%E5%AF%B9%E5%BA%94%E7%9A%84%E9%9B%86%E7%BE%A4%E6%98%AF%E5%90%A6%E6%AD%A3%E5%B8%B8",target:"_blank",rel:"noopener noreferrer"},_=e(`<h2 id="nginx-集群搭建" tabindex="-1"><a class="header-anchor" href="#nginx-集群搭建" aria-hidden="true">#</a> nginx 集群搭建</h2><blockquote><p>两台服务器安装nginx作为主备，示例主机ip 主nginx：192.168.1.251,备nginx：192.168.1.252，虚拟ip为192.168.1.250</p></blockquote><ol><li><p>前置准备</p><ol><li>安装keepalived</li><li>安装nginx</li></ol></li><li><p>nginx安装可用，不做其余配置</p></li><li><p>keepalive配置</p><ol><li>主nginx <code>vim /etc/keepalived/keepalived.conf</code></li></ol><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>! Configuration File for keepalived
vrrp_script chk_nginx {
    script &quot;/etc/keepalived/nginx_check.sh&quot; #运行脚本，脚本内容下面有，就是起到一个nginx宕机以后，自动开启服务
    interval 2 #检测时间间隔
    weight -20 #如果条件成立的话，则权重 -20
}
# 定义虚拟路由，VI_1 为虚拟路由的标示符，自己定义名称
vrrp_instance VI_1 {
    state MASTER #来决定主从
    interface ens33 # 绑定虚拟 IP 的网络接口，根据自己的机器填写
    virtual_router_id 121 # 虚拟路由的 ID 号， 两个节点设置必须一样
    mcast_src_ip 192.168.1.251 #填写本机ip
    priority 100 # 节点优先级,主要比从节点优先级高
    nopreempt # 优先级高的设置 nopreempt 解决异常恢复后再次抢占的问题
    advert_int 1 # 组播信息发送间隔，两个节点设置必须一样，默认 1s
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    # 将track_script块加入instance 配置块
    track_script {
        chk_nginx #执行Nginx监控的服务
    }

    virtual_ipaddress {
        192.168.1.250 #虚拟ip
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>备nginx的keepalive配置</li></ol><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>! Configuration File for keepalived
vrrp_script chk_nginx {
    script &quot;/etc/keepalived/nginx_check.sh&quot; #运行脚本，脚本内容下面有，就是起到一个nginx宕机以后，自动开启服务
    interval 2 #检测时间间隔
    weight -20 #如果条件成立的话，则权重 -20
}
# 定义虚拟路由，VI_1 为虚拟路由的标示符，自己定义名称
vrrp_instance VI_1 {
    state MASTER #来决定主从
    interface ens33 # 绑定虚拟 IP 的网络接口，根据自己的机器填写
    virtual_router_id 121 # 虚拟路由的 ID 号， 两个节点设置必须一样
    mcast_src_ip 192.168.1.252 #填写本机ip
    priority 100 # 节点优先级,主要比从节点优先级高
    nopreempt # 优先级高的设置 nopreempt 解决异常恢复后再次抢占的问题
    advert_int 1 # 组播信息发送间隔，两个节点设置必须一样，默认 1s
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    # 将track_script块加入instance 配置块
    track_script {
        chk_nginx #执行Nginx监控的服务
    }

    virtual_ipaddress {
        192.168.1.250 #虚拟ip
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>检测脚本（主备都要加以下检测脚本）</p><ol><li><code>vim /etc/keepalived/nginx_check.sh</code></li><li>配置</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-C</span> nginx —no-header <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$A</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    /usr/local/nginx/sbin/nginx
    <span class="token function">sleep</span> <span class="token number">2</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-C</span> nginx --no-header <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token function">killall</span> keepalived
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>赋予权限 <code>chmod a+x /etc/keepalived/nginx_check.sh</code></li></ol></li></ol>`,3);function x(y,q){const a=d("ExternalLinkIcon");return r(),c("div",null,[t,n("ol",null,[n("li",null,[s("前置准备 "),n("ol",null,[p,n("li",null,[n("p",null,[s("下载安装包"),n("a",v,[s("https://github.com/alibaba/nacos/releases，示例为2.0.3版本"),i(a)])])]),u,m,b])]),n("li",null,[s("单台启动 "),n("ol",null,[k,n("li",null,[s("配置nginx进行负载 "),h,n("ol",g,[n("li",null,[s("启动nginx，访问"),n("a",f,[s("http://ip:8848/nacos查看对应的集群是否正常"),i(a)])])])])])])]),_])}const E=l(o,[["render",x],["__file","cluster.html.vue"]]);export{E as default};
