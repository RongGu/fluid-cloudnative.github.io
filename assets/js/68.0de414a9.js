(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{537:function(a,e,s){"use strict";s.r(e);var t=s(51),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"fluid问题诊断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fluid问题诊断"}},[a._v("#")]),a._v(" Fluid问题诊断")]),a._v(" "),s("p",[a._v("您可能会在部署、开发Fluid的过程中遇到各种问题，而查看日志可以协助我们定位问题原因。但在分布式环境下，Fluid底层的分布式缓存引擎（Runtime）运行在不同主机的容器上，手动收集这些容器的日志效率低下。因此，Fluid提供了shell脚本"),s("a",{attrs:{href:"https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid.sh",target:"_blank",rel:"noopener noreferrer"}},[a._v("diagnose-fluid.sh"),s("OutboundLink")],1),a._v("，帮助使用者快速收集Fluid系统和Runtime容器的日志信息。")]),a._v(" "),s("h2",{attrs:{id:"如何使用脚本收集日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使用脚本收集日志"}},[a._v("#")]),a._v(" 如何使用脚本收集日志")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("首先，确保shell脚本有运行权限")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" a+x diagnose-fluid.sh\n")])])])]),a._v(" "),s("li",[s("p",[a._v("查看帮助信息")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./diagnose-fluid.sh \nUsage:\n    ./diagnose-fluid.sh COMMAND "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nCOMMAND:\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v("\n        Display this "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v(" message.\n    collect\n        Collect pods logs of controller and runtime.\nOPTIONS:\n    -r, --name name\n        Set the name of runtime.\n    -n, --namespace name\n        Set the namespace of runtime.\n")])])])]),a._v(" "),s("li",[s("p",[a._v("收集日志")]),a._v(" "),s("p",[a._v("运行"),s("code",[a._v("diagnose-fluid.sh")]),a._v("，"),s("code",[a._v("--name")]),a._v("指定了Runtime的name，"),s("code",[a._v("--namespace")]),a._v("指定了Runtime的namespace")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./diagnose-fluid.sh collect --name cifar10 --namespace default\n")])])]),s("p",[a._v("shell脚本会将收集的日志信息打包到执行路径下的一个压缩包里。")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);