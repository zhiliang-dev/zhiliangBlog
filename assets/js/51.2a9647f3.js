(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{458:function(t,i,s){"use strict";s.r(i);var e=s(20),r=Object(e.a)({},(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("strong",[t._v("git init")])]),t._v(" "),s("p",[t._v("通过git bash 命令切换到需要提交的目录下，git init 初始化整个项目仓库。")]),t._v(" "),s("p",[s("strong",[t._v("git add")])]),t._v(" "),s("p",[t._v("git add .提交整个项目目录下文件到缓存区。")]),t._v(" "),s("p",[s("strong",[t._v("git commit")])]),t._v(" "),s("p",[t._v('通过git commit -m "" 命令将代码提交到本地仓库。')]),t._v(" "),s("p",[s("strong",[t._v("git remote add  origin XX")])]),t._v(" "),s("p",[t._v("github上创建要提交的仓库，拿到地址，通过git remote add origin XX 的命令关联到github上")]),t._v(" "),s("p",[s("strong",[t._v("git push")])]),t._v(" "),s("p",[t._v("提交本地仓库项目到远程仓库")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("执行完后，如果没有异常，等待执行完就上传成功了，中间可能会让你输入Username和Password，你只要输入github的账号和密码就行了。但是在这一步很多人执行会报错，报类似failed to push some refs to......的错误，那是因为本地代码目录缺失README.md文件。我们只需要先")]),t._v(" "),s("p",[t._v("通过如下命令进行代码合并【注：pull=fetch+merge]")]),t._v(" "),s("p",[t._v("git pull --rebase origin master\n执行成功后，发现已经把github远端仓库的的代码克隆下来了\n此时再执行语句 git push -u origin master即可完成代码上传到github")]),t._v(" "),s("p",[t._v("git push -u origin master")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("git push --set-upstream origin master的原因以及解决方法\n我们在首次创建远程仓库，提交代码的时候一般有如下步骤：")]),t._v(" "),s("ol",[s("li",[t._v("git init")]),t._v(" "),s("li",[t._v("git remote add origin https://XX")]),t._v(" "),s("li",[t._v("git add .")]),t._v(" "),s("li",[t._v("git remote add origin")]),t._v(" "),s("li",[t._v("git push\n但是会报错：")])]),t._v(" "),s("p",[t._v("fatal: The current branch wangxiao has no upstream branch.\nTo push the current branch and set the remote as upstream\n这是因为本地的分支没有和远程分支建立联系，需要执行以下代码就可以正常push了：")]),t._v(" "),s("p",[t._v("git push --set-upstream origin master（master可以根据子的需要自定义，就是当前分支在远程分支对应的名称）")])])])}),[],!1,null,null,null);i.default=r.exports}}]);