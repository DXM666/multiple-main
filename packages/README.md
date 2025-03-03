# 子模块目录

此目录用于存放Git子模块项目。每个子模块都是一个独立的Git仓库，通过Git Submodule机制关联到主项目。

## 添加新的子模块

```bash
# 添加新的子模块
git submodule add <子模块Git仓库地址> packages/新模块名称

# 初始化并更新所有子模块
git submodule init
git submodule update
```

## 子模块结构示例

每个子模块应该是一个标准的前端项目，例如：

```
app-one/
├── src/
│   ├── components/
│   ├── pages/
│   └── index.js
├── package.json
├── nx.json (可选)
└── README.md
```

## 使用Nx管理子模块

添加子模块后，可以使用Nx命令将其注册到Nx工作空间：

```bash
nx g @nrwl/workspace:library 子模块名称
```

这将更新workspace.json文件，使Nx能够识别并管理该子模块。
