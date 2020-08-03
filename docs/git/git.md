1. git如何找回本地被覆盖的代码
  1. 执行命令 git reflog获取提交的版本号 这里可以显示你的具体操作有哪些，前面会有版本号
  2. git reset --hard 版本号 回退

2. 删除本地分支
  git branch -d mybr
3. 删除远程分支
 git push origin --delete new_a