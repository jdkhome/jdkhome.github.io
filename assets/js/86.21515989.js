(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{494:function(s,a,t){"use strict";t.r(a);var e=t(30),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nexus搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nexus搭建"}},[s._v("#")]),s._v(" nexus搭建")]),s._v(" "),t("h2",{attrs:{id:"需求和背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需求和背景"}},[s._v("#")]),s._v(" 需求和背景")]),s._v(" "),t("p",[s._v("我需要一个maven私仓 和 一个docker私仓，那么用nexus就正好能够完美满足我的需求。")]),s._v(" "),t("p",[s._v("由于docker客户端拉镜像默认都是https 所以我需要弄个开启ssl的nexus。")]),s._v(" "),t("p",[s._v("官方的nexus镜像默认也是没有ssl的，开启需要自己修改实现，比较麻烦。")]),s._v(" "),t("p",[s._v("于是我找到了"),t("a",{attrs:{href:"https://hub.docker.com/r/bradbeck/nexus-https",target:"_blank",rel:"noopener noreferrer"}},[s._v("bradbeck/nexus-https"),t("OutboundLink")],1),s._v(" "),t("strong",[s._v("给这为老哥点赞")])]),s._v(" "),t("blockquote",[t("p",[s._v("网上大部分教程 要么是套一个nginx 要么是改包 /// 所以应该没有比我这更全更简单的了")])]),s._v(" "),t("h2",{attrs:{id:"搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建"}},[s._v("#")]),s._v(" 搭建")]),s._v(" "),t("h3",{attrs:{id:"准备ssl证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备ssl证书"}},[s._v("#")]),s._v(" 准备ssl证书")]),s._v(" "),t("p",[s._v("可以是自己生成，也可以是从证书服务商去申请。")]),s._v(" "),t("p",[s._v("简单说下两者优缺点：")]),s._v(" "),t("p",[s._v("自己生成的证书不要钱，并且证书有效期可以设的非常长(比如99年)，缺点就是新装的机器不认可你的证书，每个要使用该服务的机器都需要配置信任证书才能使用，比较麻烦。")]),s._v(" "),t("p",[s._v("服务商申请的证书，其实也有免费的版本，不过每个域名有数量限制。但优点就是，新机器可以直接从证书服务商那里验证证书，不需要每台机器都配置。虽然申请的证书有有效期，但是是可以续期的。")]),s._v(" "),t("p",[s._v("综合考虑下，我这里用的是申请的证书，"),t("strong",[s._v("但如果是公司内网使用，强烈建议用自己生成的")]),s._v("。")]),s._v(" "),t("p",[s._v("我将证书放置到了 /data/ssl 目录")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pwd")]),s._v("\n/data/ssl\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\ncacert.pem  cakey.pem\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("PS1: cakey.pem 这个文件原来的后缀应该是.key 但是我用到的nexus docker镜像的作者的默认值是cakey.pem 那这里就以他为准")]),s._v(" "),t("li",[s._v("PS2: nexus需要的是jks格式的证书，常见的pem格式还有key格式的需要转换才可使用，这里镜像作者已经提供了转换，所以准备pem格式的即可")])]),s._v(" "),t("h3",{attrs:{id:"使用docker部署nexus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用docker部署nexus"}},[s._v("#")]),s._v(" 使用docker部署nexus")]),s._v(" "),t("p",[s._v("避免踩坑，这里直接给个最大权限")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mkidr -p /data/nexus-data\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -R "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" /data/nexus-data\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker run -d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name nexus "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v(":8081 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),s._v(":8443 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8543")]),s._v(":8543 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /data/nexus-data:/nexus-data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /data/ssl:/opt/sonatype/nexus/etc/ssl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PUBLIC_CERT_SUBJ")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/CN"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("证书对应的域名或者ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PRIVATE_KEY_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("生成jks证书的密码，自定义即可"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nbradbeck/nexus-https\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("启动后在 /data/nexus-data/admin.password 中查看admin账号的密码")]),s._v(" "),t("h2",{attrs:{id:"docker私仓配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker私仓配置"}},[s._v("#")]),s._v(" docker私仓配置")]),s._v(" "),t("p",[s._v("maven私仓默认就有，无需配置，这里说下docker私仓")]),s._v(" "),t("p",[s._v("首先创建一个存储区，名字可以自定，我这里是docker-hub")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://res.jdkhome.com/40DDEB73-339F-4C19-BD59-31531E0AA70A.png",alt:""}})]),s._v(" "),t("p",[s._v("接着创建docker镜像仓库")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://res.jdkhome.com/C130E205-6CE4-45B9-BD87-42FD0B332F4D.png",alt:""}})]),s._v(" "),t("p",[s._v("如图所示，进去之后类型选择 docker(hosted)")]),s._v(" "),t("p",[s._v("前面启动镜像多加的8543端口就是为了这里设置时使用")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://res.jdkhome.com/E414A942-6A63-4676-913A-196DB8A52508.png",alt:""}})]),s._v(" "),t("p",[s._v("开启登陆权限")]),s._v(" "),t("h2",{attrs:{id:"maven私仓添加阿里云仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maven私仓添加阿里云仓库"}},[s._v("#")]),s._v(" maven私仓添加阿里云仓库")]),s._v(" "),t("blockquote",[t("p",[s._v("依赖时先去私服依赖包，假如私服没有，私服去阿里云找包，找到后返回给依赖方")])]),s._v(" "),t("p",[s._v("如下图，点击Repositories，右边点击Create repository，在接下来的页面选择“maven2 proxy”")]),s._v(" "),t("p",[s._v("在具体配置页面取名aliyun-repository")]),s._v(" "),t("p",[s._v("URL输入：http://maven.aliyun.com/nexus/content/groups/public/，其他默认值即可。")]),s._v(" "),t("h2",{attrs:{id:"验证-使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证-使用"}},[s._v("#")]),s._v(" 验证/使用")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker login hub.jdkhome.com:8543")]),s._v("\nAuthenticating with existing credentials"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nWARNING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" Your password will be stored unencrypted "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /root/.docker/config.json.\nConfigure a credential helper to remove this warning. See\nhttps://docs.docker.com/engine/reference/commandline/login/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#credentials-store")]),s._v("\n\nLogin Succeeded\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("推镜像需要登陆，拉不需要(可设置)")]),s._v(" "),t("p",[s._v("如果你希望得到更全面的镜像管理能力，可以使用harbor。不过这个对我来说已经够用了。")])])}),[],!1,null,null,null);a.default=n.exports}}]);