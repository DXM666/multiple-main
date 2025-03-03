# 多仓库前端项目管理方案 (Git Submodule + Nx)

本项目使用 Git Submodule 结合 Nx 工具链来管理多个前端项目，实现了多仓库管理模式。

## 项目结构

```
multiple-main/              # 主项目仓库
├── packages/               # 子模块目录（存放可复用的库）
│   └── multiple-packages/  # 子模块项目 (git submodule)
│       ├── utils/          # 工具函数库
│       └── common/         # 通用组件库
├── apps/                   # 应用程序目录
│   └── demo-app/           # 示例应用（使用子模块中的组件和工具）
├── nx.json                 # Nx配置文件
├── workspace.json          # 工作空间配置
├── package.json            # 主项目依赖
└── README.md               # 项目说明
```

## 特点

- **独立仓库**: 每个子项目都有自己的Git仓库，可以独立开发和版本控制
- **统一构建**: 使用Nx提供统一的构建、测试和部署流程
- **依赖共享**: 可以在子项目间共享和复用代码
- **增量构建**: Nx支持智能缓存和增量构建，提高开发效率
- **清晰职责**: packages目录专门存放子模块（库），apps目录存放应用

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

### 安装依赖

```bash
# 安装所有依赖
pnpm install
```

### 开发命令

```bash
# 启动开发服务器
pnpm start

# 构建所有项目
pnpm build

# 运行测试
pnpm test

# 代码检查
pnpm lint
```

## 添加新的子模块

```bash
# 添加新的子模块
git submodule add <子模块仓库地址> packages/<子模块名称>

# 更新配置
# 1. 在tsconfig.base.json中添加路径映射
# 2. 在workspace.json中添加项目配置（如果需要）
```

## 项目管理模式说明

本项目采用的是多仓库管理模式（git submodule + Nx），而非monorepo模式。主要区别：

1. **多仓库模式**：
   - 每个子项目都有独立的Git仓库
   - 通过Git Submodule引用
   - 适合多团队独立开发的场景
   - 可以精确控制每个子项目的访问权限

2. **Monorepo模式**：
   - 所有代码在同一个Git仓库中
   - 适合紧密协作的团队
   - 更容易共享代码和配置
   - 原子提交和变更

本项目结合了两种模式的优点：使用多仓库保持独立性，同时使用Nx提供统一的工具链和构建流程。
