(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{536:function(a,t,e){"use strict";e.r(t);var s=e(51),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"示例-通过webhook-机制优化pod-调度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例-通过webhook-机制优化pod-调度"}},[a._v("#")]),a._v(" 示例 - 通过Webhook 机制优化Pod 调度")]),a._v(" "),e("p",[a._v("Fluid结合根据数据集排布的Pod调度策略，通过webhook机制将调度信息注入到Pod可以实现以下功能：")]),a._v(" "),e("p",[a._v("1.支持K8s原生调度器,以及Volcano, Yunikorn等实现 Pod 数据亲和性调度\n2.在全局Fuse的模式下，将Pod优先调度到有数据缓存能力的节点\n3.当Pod不使用数据集时，可以尽量避免调度到有缓存的节点")]),a._v(" "),e("h2",{attrs:{id:"前提条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[a._v("#")]),a._v(" 前提条件")]),a._v(" "),e("p",[a._v("您使用的k8s版本需要支持 admissionregistration.k8s.io/v1beta1（ Kubernetes version > 1.14 )")]),a._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),e("p",[a._v("1.创建命名空间")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("kubectl create ns fluid-system\n")])])]),e("p",[a._v("2.下载 fluid-0.6.0.tgz\n3.使用 Helm 安装 Fluid")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("helm "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --set webhook.enabled"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true fluid fluid-0.6.0.tgz\n")])])]),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),e("p",[e("strong",[a._v("为namespace添加标签")])]),a._v(" "),e("p",[a._v("为namespace添加标签fluid.io/enable-injection后，可以开启此namespace下Pod的调度优化功能")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ kubectl label namespace default fluid.io/enable-injection"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n")])])]),e("p",[a._v("如果该命名空间下的某些Pod，您不希望开启调度优化功能，只需为Pod打上标签fluid.io/enable-injection=false")]),a._v(" "),e("p",[a._v("例如，使用yaml文件方式创建一个nginx Pod时，应对yaml文件做如下修改：")]),a._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Pod\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" nginx\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fluid.io/enable-injection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v("\n")])])]),e("h2",{attrs:{id:"具体使用方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#具体使用方式"}},[a._v("#")]),a._v(" 具体使用方式")]),a._v(" "),e("p",[a._v("针对于Dataset中Fuse不同的部署模式，Fluid调度的Pod都可以提供相应的支持，具体的用例请参考以下文档：")]),a._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/operation/pod_schedule_default.html"}},[a._v("默认部署模式")])],1),a._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/operation/pod_schedule_global.html"}},[a._v("全局部署模式")])],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);