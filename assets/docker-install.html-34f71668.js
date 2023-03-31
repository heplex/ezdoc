import{_ as r,W as l,X as c,$ as e,a0 as n,Z as i,a1 as a,C as o}from"./framework-b609eea8.js";const t={},d=e("h2",{id:"离线安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#离线安装","aria-hidden":"true"},"#"),n(" 离线安装")],-1),u=e("h3",{id:"安装包下载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装包下载","aria-hidden":"true"},"#"),n(" 安装包下载")],-1),v=e("li",null,"从下载地址下载docker的离线tgz包，下最新即可，命令里改成对应的文件名；",-1),m={href:"https://download.docker.com/linux/static/stable/",target:"_blank",rel:"noopener noreferrer"},p=a(`<h3 id="安装离线包" tabindex="-1"><a class="header-anchor" href="#安装离线包" aria-hidden="true">#</a> 安装离线包</h3><ol><li><p>命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> docker-20.10.9.tgz
<span class="token function">cp</span> docker/* /usr/bin/
<span class="token function">vim</span> docker.service     <span class="token comment">#将2中的内容复制到docker.service中，并保存</span>
<span class="token function">cp</span> docker.service /usr/lib/systemd/system/

以上命令执行完后就已可以使用，使用以下命令启动并查看安装情况
systemctl start <span class="token function">docker</span>
<span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>docker.service 文件内容</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target firewalld.service
Wants=network-online.target

[Service]
Type=notify
# the default is not to use systemd for cgroups because the delegate issues still
# exists and systemd currently does not support the cgroup feature set required
# for containers run by docker
ExecStart=/usr/bin/dockerd
ExecReload=/bin/kill -s HUP $MAINPID
# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
# Uncomment TasksMax if your systemd version supports it.
# Only systemd 226 and above support this version.
#TasksMax=infinity
TimeoutStartSec=0
# set delegate yes so that systemd does not reset the cgroups of docker containers
Delegate=yes
# kill only the docker process, not all processes in the cgroup
KillMode=process
# restart the docker process if it exits prematurely
Restart=on-failure
StartLimitBurst=3
StartLimitInterval=60s

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="安装docker-compose" tabindex="-1"><a class="header-anchor" href="#安装docker-compose" aria-hidden="true">#</a> 安装docker-compose</h3>`,3),b={href:"https://github.com/docker/compose/releases",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载docker-compose</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;http://172.1.1.199/download/docker-compose-linux-x86_64-v2.2.3&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose

<span class="token comment"># 对二进制文件应用可执行权限</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose

<span class="token comment"># 创建链接</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/docker-compose /usr/bin/docker-compose

<span class="token comment"># 查看版本</span>
<span class="token function">docker-compose</span> <span class="token parameter variable">--version</span>
Docker Compose version v2.2.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在线安装" tabindex="-1"><a class="header-anchor" href="#在线安装" aria-hidden="true">#</a> 在线安装</h2><p>​ todo</p>`,3);function h(f,g){const s=o("ExternalLinkIcon");return l(),c("div",null,[d,u,e("ul",null,[v,e("li",null,[n("下载地址："),e("a",m,[n("https://download.docker.com/linux/static/stable/"),i(s)])])]),p,e("blockquote",null,[e("p",null,[n("官方下载地址："),e("a",b,[n("https://github.com/docker/compose/releases"),i(s)])])]),k])}const x=r(t,[["render",h],["__file","docker-install.html.vue"]]);export{x as default};
