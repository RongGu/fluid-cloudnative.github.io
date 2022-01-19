(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{501:function(e,a,t){"use strict";t.r(a);var s=t(51),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fluid-development-environment-with-kind-on-macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fluid-development-environment-with-kind-on-macos"}},[e._v("#")]),e._v(" Fluid Development Environment with Kind on MacOS")]),e._v(" "),t("h1",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("ul",[t("li",[e._v("kind (version > v0.10.0)")]),e._v(" "),t("li",[e._v("docker")]),e._v(" "),t("li",[e._v("MacOS")])]),e._v(" "),t("p",[t("code",[e._v("csi-driver")]),e._v(" and "),t("code",[e._v("node-driver-registrar")]),e._v("(sidecar) need to communicate with kubelet,"),t("br"),e._v("\nso run them in kind container")]),e._v(" "),t("h2",{attrs:{id:"set-up-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-up-steps"}},[e._v("#")]),e._v(" Set up steps")]),e._v(" "),t("h3",{attrs:{id:"_1-download-go-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-download-go-source-code"}},[e._v("#")]),e._v(" 1. download go source code")]),e._v(" "),t("p",[e._v("In order to run "),t("code",[e._v("csi-driver")]),e._v(" and "),t("code",[e._v("node-driver-registrar")]),e._v(" code in kind container"),t("br"),e._v("\ndownload it from "),t("a",{attrs:{href:"https://golang.org/dl/go1.16.3.linux-amd64.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[e._v("go1.16.3.linux-amd64.tar.gz"),t("OutboundLink")],1),e._v("\ndecompress it and put it in "),t("code",[e._v("~/go/local/")]),e._v(" directory")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  ~/go\n    |__bin\n    |__pkg\n    |__src\n    |   |__ github.com\n    |   |__ sigs.k8s.io\n    |   |__ k8s.io\n    |__local\n    |  |__go \n")])])]),t("h3",{attrs:{id:"_2-create-kind-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-kind-cluster"}},[e._v("#")]),e._v(" 2. create kind cluster")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ kind create cluster --config"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("cluster.yaml\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# cluster.yaml\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nname: fluid-dev\nnodes:\n- role: control-plane\n  image: kindest/node:v1.16.1\n  extraMounts:\n  - hostPath: /your/Mac/go/path # GOPATH value on Mac\n    containerPath: /home/work/go\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# check kind cluster node")]),e._v("\n$ kubectl get nodes\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("NAME                      STATUS   ROLES    AGE   VERSION\nfluid-dev-control-plane   Ready    master   74s   v1.16.15\n")])])]),t("h3",{attrs:{id:"_3-create-fluid-crds-and-csi-driver-to-kind-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-fluid-crds-and-csi-driver-to-kind-cluster"}},[e._v("#")]),e._v(" 3. create fluid crds and csi driver to kind cluster")]),e._v(" "),t("ul",[t("li",[e._v("alluxioruntimes.data.fluid.io")]),e._v(" "),t("li",[e._v("databackups.data.fluid.io")]),e._v(" "),t("li",[e._v("dataloads.data.fluid.io")]),e._v(" "),t("li",[e._v("datasets.data.fluid.io")]),e._v(" "),t("li",[e._v("jindoruntimes.data.fluid.io")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/fluid-cloudnative/fluid/blob/master/charts/fluid/fluid/templates/csi/driver.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("fuse.csi.fluid.io"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/go/src/github.com/fluid-cloudnative/fluid\n$ kustomize build config/crd/ "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" kubectl apply -f -\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("customresourcedefinition.apiextensions.k8s.io/alluxioruntimes.data.fluid.io created\ncustomresourcedefinition.apiextensions.k8s.io/databackups.data.fluid.io created\ncustomresourcedefinition.apiextensions.k8s.io/dataloads.data.fluid.io created\ncustomresourcedefinition.apiextensions.k8s.io/datasets.data.fluid.io created\ncustomresourcedefinition.apiextensions.k8s.io/jindoruntimes.data.fluid.io created\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("k apply -f csi.yaml\nk get csidriver\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("NAME                CREATED AT\nfuse.csi.fluid.io   2021-04-24T15:30:38Z\n")])])]),t("h3",{attrs:{id:"_4-run-csi-driver-and-node-driver-registrar-code-in-kind-node-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-run-csi-driver-and-node-driver-registrar-code-in-kind-node-container"}},[e._v("#")]),e._v(" 4. run csi-driver and node-driver-registrar code in kind node container")]),e._v(" "),t("p",[e._v("start fluid csi driver")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker exec -ti fluid-dev-control-plane /bin/bash\ncd /home/work/go/src/github.com/fluid-cloudnative/fluid/cmd/csi && sh start.sh\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('### \n### start.sh\n### \n#! /bin/bash\nset -x\nexport TMPDIR=/root/go/tmp\nexport GO111MODULE=on\nexport GOMODCACHE=/root/go/pkg/mod\nexport GOPROXY=https://goproxy.io\nexport GOPATH=/home/work/go\nexport GOROOT=/home/work/go/local/go\nexport GOBIN=/home/work/go/bin\nexport PATH=$PATH:$GOBIN:$GOROOT/bin\nif [ ! -d $TMPDIR ]; then\n  mkdir -p $TMPDIR\nfi\n# delete reg socket if exist\nrm -rf /var/lib/kubelet/plugins_registry/fuse.csi.fluid.io-reg.sock\ngo run main.go \\\n   --kubelet-registration-path="/var/lib/kubelet/csi-plugins/fuse.csi.fluid.io/csi.sock" \\\n   --csi-address="/var/lib/kubelet/csi-plugins/fuse.csi.fluid.io/csi.sock" \\\n   --reg-path="/var/lib/kubelet/plugins_registry" \\\n   --v=5\n')])])]),t("p",[e._v("start node-driver-registrar")]),e._v(" "),t("blockquote",[t("p",[e._v("I made a small change to "),t("a",{attrs:{href:"https://github.com/kubernetes-csi/node-driver-registrar/tree/v1.3.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("node-driver-registrar"),t("OutboundLink")],1),e._v(" based on v1.3.0,"),t("br"),e._v("\nIt can be downloaded from "),t("a",{attrs:{href:"https://github.com/allenhaozi/node-driver-registrar/tree/feat/fluid-dev-v1.3.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("fluid-dev-v1.3.0"),t("OutboundLink")],1),t("br"),e._v("\nThe only change is to allow passing "),t("code",[e._v("reg-path")]),e._v(" in arguments"),t("br"),e._v("\nDoes not affect the csi-driver online")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker exec -ti fluid-dev-control-plane /bin/bash\n$ cd /home/work/go/src/github.com/allenhaozi/node-driver-registrar/cmd/csi-node-driver-registrar && sh start.sh\n\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('###\n### start.sh\n###\n#! /bin/bash\nset -x\nexport TMPDIR=/root/go/tmp\nexport GO111MODULE=on\nexport GOMODCACHE=/root/go/pkg/mod\nexport GOPROXY=https://goproxy.io\nexport GOPATH=/home/work/go\nexport GOROOT=/home/work/go/local/go\nexport GOBIN=/home/work/go/bin\nexport PATH=$PATH:$GOBIN:$GOROOT/bin\nif [ ! -d $TMPDIR ]; then\n  mkdir -p $TMPDIR\nfi\nrm -f /var/lib/kubelet/csi-plugins/fuse.csi.fluid.io/csi.sock\nmkdir -p /var/lib/kubelet/csi-plugins/fuse.csi.fluid.io\ncp /home/work/go/src/github.com/fluid-cloudnative/fluid/csi/shell/check_mount.sh /usr/local/bin/check_mount.sh && chmod +x /usr/local/bin/check_mount.sh\ngo run main.go start \\\n --endpoint="unix://var/lib/kubelet/csi-plugins/fuse.csi.fluid.io/csi.sock" \\\n    --nodeid="fluid-dev-control-plane" \\\n --kubeconfig=/etc/kubernetes/kubelet.conf \\\n --v=5\n')])])]),t("h3",{attrs:{id:"_5-start-alluxio-and-dataset-on-mac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-start-alluxio-and-dataset-on-mac"}},[e._v("#")]),e._v(" 5. start alluxio and dataset on Mac")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/go/src/github.com/fluid-cloudnative/fluid/cmd/alluxio "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" start.sh\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("###\n### start.sh\n###\n#! /bin/bash\n\nexport ALLUXIO_INIT_IMAGE_ENV=registry.cn-hangzhou.aliyuncs.com/fluid/init-users:v0.4.0-a8ba7c9\nexport MOUNT_ROOT=/alluxio-mnt\ngo run main.go start\n\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/go/src/github.com/fluid-cloudnative/fluid/cmd/dataset "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" start.sh\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("###\n### start.sh\n###\n#! /bin/bash\n\nexport ALLUXIO_INIT_IMAGE_ENV=registry.cn-hangzhou.aliyuncs.com/fluid/init-users:v0.4.0-a8ba7c9\ngo run main.go start \\\n   --metrics-addr=127.0.0.1:8082\n")])])]),t("h3",{attrs:{id:"_6-load-image-to-kind-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-load-image-to-kind-cluster"}},[e._v("#")]),e._v(" 6. load image to kind cluster")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kind load docker-image registry.cn-hangzhou.aliyuncs.com/fluid/init-users:v0.4.0-a8ba7c9 --name=fluid-dev\nkind load docker-image registry.cn-huhehaote.aliyuncs.com/alluxio/alluxio:2.3.0-SNAPSHOT-2c41226 --name=fluid-dev\nkind load docker-image registry.cn-huhehaote.aliyuncs.com/alluxio/alluxio-fuse:2.3.0-SNAPSHOT-2c41226 --name=fluid-dev                                 \nkind load docker-image nginx:latest --name=fluid-dev\n")])])]),t("h3",{attrs:{id:"_7-run-fluid-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-run-fluid-demo"}},[e._v("#")]),e._v(" 7. run fluid demo")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ kubectl apply -f dataset.yaml\n$ kubectl apply -f runtime.yaml\n$ kubectl apply -f pod.yaml\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# check pod list\nNAME                READY   STATUS    RESTARTS   AGE\ndemo-app            1/1     Running   0          31m\ndemo-fuse-ksdsr     1/1     Running   0          31m\ndemo-master-0       2/2     Running   0          36m\ndemo-worker-k2xhh   2/2     Running   0          31m\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# check data")]),e._v("\n$ kubectl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -ti demo-app "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" /data/spark/\n\nSparkR_3.0.2.tar.gz   spark-3.0.2-bin-hadoop2.7-hive1.2.tgz  spark-3.0.2-bin-hadoop3.2.tgz  spark-3.0.2.tgz\npyspark-3.0.2.tar.gz  spark-3.0.2-bin-hadoop2.7.tgz      spark-3.0.2-bin-without-hadoop.tgz\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);