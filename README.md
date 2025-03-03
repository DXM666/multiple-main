# 多仓库前端项目管理方案 (Git Submodule + Nx)

本项目使用 Git Submodule 结合 Nx 工具链来管理多个前端项目，实现了多仓库管理模式。

## 项目结构

```
multiple-main/              # 主项目仓库
├── packages/               # 子模块目录
│   ├── app-one/            # 子模块项目1 (git submodule)
│   └── app-two/            # 子模块项目2 (git submodule)
├── nx.json                 # Nx配置文件
├── package.json            # 主项目依赖
└── README.md               # 项目说明
```

## 特点

- **独立仓库**: 每个子项目都有自己的Git仓库，可以独立开发和版本控制
- **统一构建**: 使用Nx提供统一的构建、测试和部署流程
- **依赖共享**: 可以在子项目间共享和复用代码
- **增量构建**: Nx支持智能缓存和增量构建，提高开发效率

## 使用方法

### 初始化项目

```bash
# 克隆主项目
git clone <主项目地址>
cd multiple-main

# 初始化并更新子模块
git submodule init
git submodule update
```

### 添加新的子模块

```bash
# 添加子模块
git submodule add <子模块Git地址> packages/new-app

# 更新Nx配置
nx g @nrwl/workspace:library new-app
```

### 开发命令

```bash
# 安装依赖
npm install

# 启动所有项目
npm start

# 构建所有项目
npm run build

# 测试所有项目
npm run test

# 只构建特定项目
nx build app-one
```

## 与Monorepo的区别

相比于Monorepo方案，Git Submodule + Nx的多仓库管理方式有以下特点：

1. **仓库独立性**: 每个子项目都是独立的Git仓库，可以有自己的版本控制和发布周期
2. **权限管理**: 可以对不同子模块设置不同的访问权限
3. **按需克隆**: 可以只克隆需要的子模块，而不必克隆整个代码库
4. **历史记录**: 每个子模块保留自己的完整Git历史

## 注意事项

- 子模块的更新需要额外的Git命令
- 需要正确管理子模块的分支
- 主项目需要记录子模块的具体提交点
