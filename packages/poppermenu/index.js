/*
 * @Date: 2020-08-26 11:23:08
 * @LastEditTime: 2020-08-26 11:31:42
 * @Description: file content
 */
import Poppermenu from '../menu/src/Poppermenu';

/* istanbul ignore next */
Poppermenu.install = function(Vue) {
  Vue.component(Poppermenu.name, Poppermenu);
};

export default Poppermenu;
