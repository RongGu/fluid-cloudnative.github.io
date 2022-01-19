(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{540:function(t,a,s){"use strict";s.r(a);var e=s(51),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E9%83%A8%E7%BD%B2-prometheus-%E5%92%8C-grafana-%E7%9B%91%E6%8E%A7-fluid-%E5%BA%94%E7%94%A8"}},[t._v("部署 prometheus 和 grafana 监控 Fluid 应用")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#1-%E9%83%A8%E7%BD%B2%E6%88%96%E9%85%8D%E7%BD%AE-prometheus"}},[t._v("1. 部署或配置 Prometheus")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#2-%E9%83%A8%E7%BD%B2-grafana"}},[t._v("2. 部署 grafana")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#3-%E9%85%8D%E7%BD%AE-grafana"}},[t._v("3. 配置 grafana")])])])])]),t._v(" "),s("p",[t._v("Created by "),s("a",{attrs:{href:"https://github.com/ekalinin/github-markdown-toc",target:"_blank",rel:"noopener noreferrer"}},[t._v("gh-md-toc"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"部署-prometheus-和-grafana-监控-fluid-应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署-prometheus-和-grafana-监控-fluid-应用"}},[t._v("#")]),t._v(" 部署 prometheus 和 grafana 监控 Fluid 应用")]),t._v(" "),s("p",[t._v("注：prometheus 需要In-Cluster部署")]),t._v(" "),s("h4",{attrs:{id:"_1-部署或配置-prometheus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-部署或配置-prometheus"}},[t._v("#")]),t._v(" 1. 部署或配置 Prometheus")]),t._v(" "),s("p",[t._v("如果集群内无 prometheus:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" fluid\n$ kubectl apply -f integration/prometheus/prometheus.yaml\n")])])]),s("p",[t._v("如集群内有 prometheus,可将以下配置写到 prometheus 配置文件中:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scrape_configs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alluxio runtime'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metrics_path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /metrics/prometheus\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kubernetes_sd_configs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("role")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" endpoints\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("relabel_configs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("source_labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("__meta_kubernetes_service_label_monitor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("regex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" alluxio_runtime_metrics\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keep\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("source_labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("__meta_kubernetes_endpoint_port_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("regex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" web\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keep\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("source_labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("__meta_kubernetes_namespace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target_label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" namespace\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replacement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $1\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" replace\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("source_labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("__meta_kubernetes_service_label_release"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target_label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluid_runtime\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replacement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $1\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" replace\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("source_labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("__meta_kubernetes_endpoint_address_target_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target_label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pod\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replacement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $1\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" replace\n")])])]),s("h4",{attrs:{id:"_2-部署-grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-部署-grafana"}},[t._v("#")]),t._v(" 2. 部署 grafana")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker 部署")]),t._v("\n$ docker run -d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v(":3000 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("grafana "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --restart"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --name grafana "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  grafana/grafana\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# In-CLuster 部署")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" fluid\n$ kubectl apply -f integration/prometheus/grafana.yaml \n")])])]),s("h4",{attrs:{id:"_3-配置-grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置-grafana"}},[t._v("#")]),t._v(" 3. 配置 grafana")]),t._v(" "),s("ol",[s("li",[t._v("登录 grafana\n如果以docker 方式部署，访问 "),s("code",[t._v("http://$grafana-node-ip:3000")]),t._v(";以 In-CLuster 方式部署，访问"),s("code",[t._v("http://$grafana-node-ip:NodePort")]),t._v("，默认账号密码 "),s("code",[t._v("admin:admin")]),t._v(":")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 查看 NodePort\n$ kubectl describe svc monitoring-grafana -n kube-system\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("首先查看 prometheus svc 端口")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ kubectl get svc -n kube-system | grep prometheus-svc\nprometheus-svc             NodePort    10.100.0.144   <none>        9090:31245/TCP           22h\n$ kubectl describe svc prometheus-svc -n kube-system\nName:                     prometheus-svc\nNamespace:                kube-system\nLabels:                   kubernetes.io/name=Prometheus\n                          name=prometheus-svc\nAnnotations:              kubectl.kubernetes.io/last-applied-configuration:\n                            {"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"kubernetes.io/name":"Prometheus","name":"prometheus-svc"},"nam...\nSelector:                 app=prometheus\nType:                     NodePort\nIP:                       10.100.0.144\nPort:                     prometheus  9090/TCP\nTargetPort:               9090/TCP\nNodePort:                 prometheus  31245/TCP\nEndpoints:                10.99.224.138:9090\nSession Affinity:         None\nExternal Traffic Policy:  Cluster\nEvents:                   <none>\n')])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("配置 prometheus data source")])]),t._v(" "),s("p",[t._v("注: 如果 grafana In-Cluster 部署， URL 填写 Service Endpoints 即可；如果以 docker 方式部署，URL 填写prometheus 部署节点 ip:NodePort 即可\n导入完成后点击Save & Test 显示 Data source is working 即可")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[t._v("导入模板文件\ngrafana 选择导入模板 Json 文件 "),s("code",[t._v("fluid-prometheus-grafana-monitor.json")]),t._v(", 它的位置是"),s("code",[t._v("integration/prometheus/fluid-prometheus-grafana-monitor.json")])])]),t._v(" "),s("li",[s("p",[t._v("启动 fluid 任务")])])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("$ cat<<EOF "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("dataset.yaml\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Dataset\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" spark\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mounts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//mirrors.bit.edu.cn/apache/spark/\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" spark\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AlluxioRuntime\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" spark\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tieredstore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("levels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mediumtype")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MEM\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /dev/shm\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("quota")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1Gi\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("high")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.95"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("low")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.7"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认在v0.5.0版本之后，alluxio runtime已经开启了Prometheous数据，如果需要关闭可以主动设置disablePrometheus: true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# disablePrometheus: false  ")]),t._v("\nEOF\n")])])]),s("blockquote",[s("p",[t._v("注意：默认Prometheous是开启的。如果需要关闭Prometheous，可以设置 disablePrometheus: true, 默认为 false")])]),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[t._v("查看监控\n在 grafana HOME 中知道名为Fluid-Prometheus-Grafana-Monitor视图即可，如下所示:")])]),t._v(" "),s("p",[t._v("注：User of runtime 对应Fluid Alluxio runtime user; fluid_runtime 对应Fluid runtime name; namespace 对应Fluid runtime namespace")])])}),[],!1,null,null,null);a.default=n.exports}}]);