import cloud from "./cloud";

/**
 * 注册
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns {Promise<ICloud.IUser>} 用户信息
 */
export const register = (username, password) =>
  cloud.invoke("register", { username, password });

  /**
   * 登录
   * @param {string} username 用户名
   * @param {string} password 密码
   * @returns {Promise<ICloud.IUser>} 用户信息
   */
export const login = (username, password) =>
  cloud.invoke("login", { username, password }).then((res) => {
    localStorage.setItem("access_token", res.access_token);
    return res;
  });
