(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{468:function(s,e,a){"use strict";a.r(e);var t=a(30),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker设置自动启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker设置自动启动"}},[s._v("#")]),s._v(" docker设置自动启动")]),s._v(" "),a("h2",{attrs:{id:"docker服务设置自动启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker服务设置自动启动"}},[s._v("#")]),s._v(" docker服务设置自动启动")]),s._v(" "),a("p",[s._v("查看已启动的服务")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl list-units --type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看是否设置开机启动")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl list-unit-files "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("设置开机启动")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("关闭开机启动")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl disable docker.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"docker容器设置自动启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker容器设置自动启动"}},[s._v("#")]),s._v(" docker容器设置自动启动")]),s._v(" "),a("p",[s._v("启动时加 --restart=always")]),s._v(" "),a("ul",[a("li",[s._v("no 不自动重启容器. (默认value)")]),s._v(" "),a("li",[s._v("on-failure 容器发生error而退出(容器退出状态不为0)重启容器")]),s._v(" "),a("li",[s._v("unless-stopped 在容器已经stop掉或Docker stoped/restarted的时候才重启容器")]),s._v(" "),a("li",[s._v("always 在容器已经stop掉或Docker stoped/restarted的时候才重启容器")])]),s._v(" "),a("p",[s._v("如果是已经启动的容器，可以使用update更新")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker update --restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always 容器名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);