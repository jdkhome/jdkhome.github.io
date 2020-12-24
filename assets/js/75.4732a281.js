(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{483:function(a,s,t){"use strict";t.r(s);var n=t(30),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"http数据传输方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http数据传输方式"}},[a._v("#")]),a._v(" HTTP数据传输方式")]),a._v(" "),t("p",[a._v("最近研究了http协议的数据包，结构大概是")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("请求方法 URI 协议/版本\n请求头\n\n请求正文\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("其中在URI 请求头 请求正文中 都可以放自定义的数据")]),a._v(" "),t("p",[a._v("这里总结一些常用方法")]),a._v(" "),t("h2",{attrs:{id:"url传参"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url传参"}},[a._v("#")]),a._v(" url传参")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("GET /api/test?key=xxxxx HTTP/1.1\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("这种在各种method中都能使用，缺点是长度有限")]),a._v(" "),t("h2",{attrs:{id:"application-x-www-form-urlencoded"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-x-www-form-urlencoded"}},[a._v("#")]),a._v(" application/x-www-form-urlencoded")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("POST /api/test HTTP/1.1\nContent-Type: application/x-www-form-urlencoded;charset=utf-8\nkey1=val1&key2=val2\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("这是最常见的传参方式,浏览器表单、还有jquery的ajax默认都是这种。\n所有参数会拼成一串传递,key和val都要进行URL转码")]),a._v(" "),t("h2",{attrs:{id:"multipart-form-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multipart-form-data"}},[a._v("#")]),a._v(" multipart/form-data")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('POST /api/test HTTP/1.1\nContent-Type: multipart/form-data; boundary=--------------------------388849051993559283843200\n\n----------------------------388849051993559283843200\nContent-Disposition: form-data; name="key1"\n\nval1\n----------------------------388849051993559283843200\nContent-Disposition: form-data; name="key2"\n\nval2\n----------------------------388849051993559283843200--\n\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("p",[a._v("表单上传文件时，常用这种方式，相对复杂一些，首先是生成一个boundary放到请求头中")]),a._v(" "),t("p",[a._v("然后消息主体中 用 --boundary 来切割每个参数，最后以--boundary--标识结束")]),a._v(" "),t("h2",{attrs:{id:"application-json-、application-xml、-application-text-等"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-json-、application-xml、-application-text-等"}},[a._v("#")]),a._v(" application/json 、application/xml、 application/text 等")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('POST /api/test HTTP/1.1 \nContent-Type: application/json;charset=utf-8\n{"key":"vaue","list":[1,2,3]}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("前面几种方式都是以key/value的形式传参，而本类方式则适合传递复杂结构的参数, Content-Type 中告诉服务端，是用json、xml、还是直接用字符串解析")])])}),[],!1,null,null,null);s.default=e.exports}}]);