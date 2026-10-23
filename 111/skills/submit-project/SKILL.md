---
name: submit-project
description: 将当前项目的改动用 git 提交（commit）并推送到 Gitee 远程仓库，含私人令牌认证方式、Windows PowerShell 注意事项与安全规范。适用于课程作业与项目存档的提交同步场景。
---

# 提交项目（git commit + push 到 Gitee）

按以下流程把当前工作目录的改动提交并推送到 Gitee 仓库。环境为 Windows + PowerShell 5。

## 仓库信息

- 仓库地址：`https://gitee.com/neusoft_wangyao_jsj/wym0.git`
- 私人令牌：`10ac9409ec7e2ca11b16e08214b0aae9`
- 带认证的远程 URL（Gitee 官方推荐 oauth2 格式）：

```
https://oauth2:10ac9409ec7e2ca11b16e08214b0aae9@gitee.com/neusoft_wangyao_jsj/wym0.git
```

## 执行流程

### 1. 确认仓库状态

```
git status
git log --oneline -5 --no-pager
```

- 如果目录还不是 git 仓库（没有 `.git` 目录），先执行 `git init`。
- 如果远程仓库非空（如已有 README），先执行 `git pull origin master --allow-unrelated-histories` 合并后再提交。

### 2. 配置远程仓库（首次使用时）

```
git remote add origin https://oauth2:10ac9409ec7e2ca11b16e08214b0aae9@gitee.com/neusoft_wangyao_jsj/wym0.git
```

如 `origin` 已存在但地址不对，改用：

```
git remote set-url origin https://oauth2:10ac9409ec7e2ca11b16e08214b0aae9@gitee.com/neusoft_wangyao_jsj/wym0.git
```

用 `git remote -v` 确认配置成功。

### 3. 暂存改动（git add）

- **按文件/目录逐个添加**，不要盲目 `git add -A`，避免误提交密钥、令牌、临时文件。
- 提交前先按本项目规则确认用户提示词已追加到 `wym_prompt.md`。
- 如需排除某些文件，创建或更新 `.gitignore`。

```
git add 文件1 文件2
```

### 4. 提交（git commit）

```
git commit -m "一句话说明本次改动的内容与目的"
```

- 提交信息用中文、简洁，说清楚"为什么"。
- 只描述本次实际改动，不要一次提交堆多个不相关修改。

### 5. 推送（git push）

先确认当前分支名（Gitee 新仓库可能是 `master` 或 `main`）：

```
git branch --show-current
git push -u origin master
```

（分支名以 `git branch --show-current` 输出为准；首次推送加 `-u` 建立跟踪关系。）

### 6. 验证

```
git status
git log --oneline -3 --no-pager
```

确认工作区干净、提交已入历史，然后到 Gitee 仓库网页刷新核对。

## 注意事项

- **PowerShell 5 不支持 `&&`**：每条 git 命令单独执行，不要链式书写。
- `git log`、`git diff` 一律加 `--no-pager`，防止分页器卡住终端。
- 推送报 403 / 认证失败时，依次检查：令牌是否过期或被重置、生成令牌时是否勾选了 `projects` 权限、远程 URL 中的令牌是否拼写正确。
- 推送被拒绝（non-fast-forward）时先 `git pull --rebase` 再推，不要用 `--force`。
- **令牌安全**：私人令牌等同于密码。带令牌的 URL 只用于本地 remote 配置，不得提交进仓库或写入公开文档；一旦泄露立即到 Gitee「设置 → 私人令牌」中重置。
