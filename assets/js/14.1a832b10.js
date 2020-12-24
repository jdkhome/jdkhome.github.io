(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{423:function(s,t,a){"use strict";a.r(t);var e=a(30),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"超级-ftp服务搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超级-ftp服务搭建"}},[s._v("#")]),s._v(' "超级" ftp服务搭建')]),s._v(" "),a("h2",{attrs:{id:"话不多说-先放成果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#话不多说-先放成果"}},[s._v("#")]),s._v(" 话不多说, 先放成果")]),s._v(" "),a("ul",[a("li",[s._v("启动一个docker容器即可获得开箱即用的ftp服务，这个ftp服务"),a("strong",[s._v("自带5TB的存储空间")]),s._v("。")]),s._v(" "),a("li",[s._v("容器是"),a("strong",[s._v("无状态")]),s._v("的，你上传到这个ftp中的内容不会因为你删除了容器而丢失。")])]),s._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("blockquote",[a("p",[s._v("写在前面: "),a("strong",[s._v("5T 的空间是由微软的OneDrive提供的，你需要注册并购买.")])])]),s._v(" "),a("p",[s._v("最近发现一个开源项目: "),a("a",{attrs:{href:"https://github.com/jstaf/onedriver",target:"_blank",rel:"noopener noreferrer"}},[s._v("jstaf/onedriver"),a("OutboundLink")],1),a("br"),s._v("\njstaf/onedriver 实现了一个网络文件系统 并能够将 OneDrive 挂载至本地目录")]),s._v(" "),a("p",[s._v("jstaf的想法非常棒！这正是我想要的 我在这位大佬的基础上加上了 docker 和 vsftpd")]),s._v(" "),a("p",[s._v("于是我最终实现了 "),a("a",{attrs:{href:"https://github.com/jdkhome/onedrive-ftp",target:"_blank",rel:"noopener noreferrer"}},[s._v("onedrive-ftp"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("当然，你也可以直接使用jstaf/onedriver ,封装成ftp服务只是因为我个人有一些其他需求 😃")]),s._v(" "),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),a("h3",{attrs:{id:"启动容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[s._v("#")]),s._v(" 启动容器")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run -d -it "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--privileged "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":20 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":21 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47400")]),s._v("-47470:47400-47470 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FTP_USER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FTP_PASS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASV_ADDRESS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".12.144 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ftp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always jdkhome/onedrive-ftp:0.0.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"查看日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看日志"}},[s._v("#")]),s._v(" 查看日志")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker logs -f "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ftp")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("根据日志提示，复制 "),a("strong",[s._v("Please visit the following URL:")]),s._v(" 下方的链接 至你的浏览器")]),s._v(" "),a("p",[s._v("在网页中登陆你的onedrive账号 然后页面会自动跳转, 复制跳转到的链接")]),s._v(" "),a("h3",{attrs:{id:"进入到容器控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入到容器控制台"}},[s._v("#")]),s._v(" 进入到容器控制台")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker attach "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ftp")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("粘贴前面复制的链接然后 回车")]),s._v(" "),a("p",[s._v("当控制台打印："),a("strong",[s._v("Sync complete!")]),s._v(" 即代表onedrive授权成功了。")]),s._v(" "),a("p",[s._v("退出容器控制台\nCtrl+p Ctrl+q")]),s._v(" "),a("h3",{attrs:{id:"重启容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启容器"}},[s._v("#")]),s._v(" 重启容器")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker restart "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ftp")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("大概15s 后ftp服务会启动。")]),s._v(" "),a("h3",{attrs:{id:"附图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附图"}},[s._v("#")]),s._v(" 附图")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://res.jdkhome.com/20200612151352.png",alt:""}})]),s._v(" "),a("p",[s._v("至此部署已完成。\n以后无论怎么重启容器都不需要再做上面的操作了。")])])}),[],!1,null,null,null);t.default=r.exports}}]);