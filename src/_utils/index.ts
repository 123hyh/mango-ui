import { prefixCls } from "../settings/designSetting"

/**
 * 获取 class 的命名空间
 * @param name 
 * @returns 
 */
export const getClsNameSpace = (name:  string)=> `${prefixCls}-${name}`;