/// <reference types="vitest" />
import { defineConfig } from 'vite'
import {fileURLToPath, URL} from "node:url";

export default defineConfig({
    test: {
        alias:{
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
        // 默认情况下，vitest 不显式提供全局 API。
        globals: true,
        // 测试环境，模拟浏览器环境的库jsdom
        environment: 'jsdom',
        // 用于输出的自定义 reporters 。 Reporters 可以是 一个 Reporter 实例 或选择内置的 reporters 字符串
        reporters: ['default', 'html'],
        coverage: {
            // 是否启用收集测试覆盖率是否启用收集测试覆盖率
            enabled: true,
            // 使用 provider 选择收集测试覆盖率的工具。
            provider: 'v8',
            // 监视重新运行时是否清除覆盖率报告
            cleanOnRerun: true,
            // 配置要使用的测试覆盖率报告器
            reporter: ['text', 'json', 'html'],
        },

    },
})