#!/usr/bin/env sh
###
 # @Descripttion: 
 # @version: 3.x.x
 # @Author: canguang.liu
 # @Date: 2021-01-12 19:20:23
 # @LastEditors: canguang.liu
 # @LastEditTime: 2021-08-16 13:51:48
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
# echo 'b.xugaoyi.com' > CNAME
git init
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:zhiliang-dev/zhiliangBlog.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://zhiliang-dev:${GITHUB_TOKEN}@github.com/zhiliang-dev/zhiliangBlog.git
  git config user.name "canguang.liu"
  git config user.email "canguang.liu@unre.com"
fi
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

# deploy to coding
# echo 'www.xugaoyi.com\nxugaoyi.com' > CNAME  # 自定义域名
# echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

# if [ -z "$GITEE_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
#   msg='gitee deploy'
#   codingUrl=git@gitee.com:bluetone/bluetone.git
#   git config user.name "canguang.liu"
#   git config user.email "canguang.liu@unre.com"
# else
#   msg='来自gitee actions的自动部署'
#   codingUrl=https://bluetone:${GITEE_TOKEN}@gitee.com/bluetone/bluetone.git
# fi
# git push -f $codingUrl master # 推送到coding

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
