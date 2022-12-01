(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{476:function(e,s,r){"use strict";r.r(s);var a=r(20),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"mac安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mac安装"}},[e._v("#")]),e._v(" MAC安装")]),e._v(" "),r("h3",{attrs:{id:"homebrew安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#homebrew安装"}},[e._v("#")]),e._v(" homebrew安装")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("bew install redis\nbrew services restart redis\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("h3",{attrs:{id:"启动redis服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动redis服务"}},[e._v("#")]),e._v(" 启动redis服务")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("//方式一：使用brew帮助我们启动软件\nbrew services start redis\n//方式二\nredis-server /usr/local/etc/redis.conf\n//执行以下命令\nredis-server\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br")])]),r("h3",{attrs:{id:"查看redis服务进程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看redis服务进程"}},[e._v("#")]),e._v(" 查看redis服务进程")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ps axu | grep redis\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h3",{attrs:{id:"本地连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本地连接"}},[e._v("#")]),e._v(" 本地连接")]),e._v(" "),r("p",[e._v("redis-cli连接redis服务\nredis默认端口号6379，默认auth为空，输入以下命令即可连接")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("redis-cli -h 127.0.0.1 -p 6379\n\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("启动 redis 客户端，打开终端并输入命令 redis-cli。该命令会连接本地的 redis 服务。")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$redis-cli\nredis 127.0.0.1:6379>\nredis 127.0.0.1:6379> PING\nPONG\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("h2",{attrs:{id:"windows安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows安装"}},[e._v("#")]),e._v(" WINDOWS安装")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://redis.com.cn/redis-installation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考链接"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/rgl/redis/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("软件下载链接"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"_1-msi模式安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-msi模式安装"}},[e._v("#")]),e._v(" 1. msi模式安装")]),e._v(" "),r("p",[e._v("文件介绍：")]),e._v(" "),r("p",[e._v("redis-server.exe：服务端程序，提供 redis 服务")]),e._v(" "),r("p",[e._v("redis-cli.exe: 客户端程序，通过它连接 redis 服务并进行操作")]),e._v(" "),r("p",[e._v("redis-check-dump.exe：RDB 文件修复工具")]),e._v(" "),r("p",[e._v("redis-check-aof.exe：AOF 文件修复工具")]),e._v(" "),r("p",[e._v("redis-benchmark.exe：性能测试工具，用以模拟同时由 N 个客户端发送 M 个 SETs/GETs 查询 (类似于 Apache 的 ab 工具)")]),e._v(" "),r("p",[e._v("redis.windows.conf： 配置文件，将 redis 作为普通软件使用的配置，命令行关闭则 redis 关闭")]),e._v(" "),r("p",[e._v("redis.windows-service.conf：配置文件，将 redis 作为系统服务的配置")]),e._v(" "),r("p",[e._v("单击 redis-server.exe，启动 Redis 服务。")]),e._v(" "),r("h3",{attrs:{id:"_2-直接解压的方式安装-redis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-直接解压的方式安装-redis"}},[e._v("#")]),e._v(" 2. 直接解压的方式安装 redis")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/MSOpenTech/redis/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("链接"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("解压安装包到相应文件夹，任何盘符都行，例如 E:\\tools\\redis-3.2.100。")]),e._v(" "),r("p",[e._v("运行命令")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("redis-server.exe redis.windows.conf \n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("blockquote",[r("p",[e._v("*注：可以把 redis 的路径加到系统的环境变量里，这样就省得再输路径了，后面的那个 redis.windows.conf 可以省略，如果省略，会启用默认的参数。")])]),e._v(" "),r("p",[e._v("安装 redis 到 windows 服务")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("redis-server --service-install redis.windows.conf\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("后执行以下命令启动redis：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("redis-server --service-start\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("停止 redis 服务：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("redis-server --service-stop\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("最后，测试一下 redis 是否能够正常使用：")]),e._v(" "),r("p",[e._v("切换到 redis 目录下：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("redis-cli.exe -h 127.0.0.1 -p 6379\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);