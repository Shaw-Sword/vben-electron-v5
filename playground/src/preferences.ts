import { defineOverridesPreferences } from '@vben/preferences';

/**
 * @description 项目配置文件
 * 只需要覆盖项目中的一部分配置，不需要的配置不用覆盖，会自动使用默认配置
 * !!! 更改配置后请清空缓存，否则可能不生效
 */
export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    enableCheckUpdates: false,
    name: import.meta.env.VITE_APP_TITLE,
  },
  theme: {
    mode: 'light',
    /** 是否开启半深色header（只在theme='light'时生效） */
    semiDarkHeader: true,
    /** 是否开启半深色菜单（只在theme='light'时生效） */
    semiDarkSidebar: true,
  },
  breadcrumb: {
    /** 面包屑首页图标是否可见 */
    showHome: true,
    /** 面包屑图标是否可见 */
    showIcon: true,
    /** 面包屑风格 */
    styleType: 'background',
  },
});
