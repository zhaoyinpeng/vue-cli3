1. git如何找回本地被覆盖的代码
  1. 执行命令 git reflog获取提交的版本号 这里可以显示你的具体操作有哪些，前面会有版本号
  2. git reset --hard 版本号 回退

2. 删除本地分支
  git branch -d mybr
3. 删除远程分支
 git push origin --delete new_a

4. git 使用过程中，如果你在开发着业务，突然另一个分支有一个 bug 要改，你怎么办
git stash //将本次修改存到暂存区（紧急切换分支时）
git stash pop //将所有暂存区的内容取出来

5. git fetch && git pull
git pull 自动完成了 fetch 最新远程版本，并且和本地进行 merge
git fetch 获得远程分支，要继续手动 merge 合并