/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
 export function validUsername(str: string) {
  const validMap: string[] = ['admin', 'editor']
  return validMap.indexOf(str.trim()) >= 0
}
