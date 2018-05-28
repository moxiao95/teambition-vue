# teambition-vue

模仿teambition写的后台管理：
技术栈：vue全家桶、Node.js、mongodb数据库
依赖：axios、body-parser、cors、iview、js-cookie、mongoose、vue、vue-router、vuex
功能实现：
1. 用户注册：在用户使用时根据数据中存储的数据来判断是否已经注册，
2. 用户登录：在用户登录的时候在数据中查询，如果没有给用户就不能登录，如果有的话跳转路由，并且缓存本地cookie，用户id缓存本地localStorage中；
3. 用户退出：用户点击退出之后，清除本地cookie，页面跳转至login页面；
4. 用户任务：
  - 添加：用户可以点击添加任务按钮进行任务添加；
    - 添加任务的信息：title、info、star、del、userId、_id（自动生成）
  - 星标：点击星星可以让当前任务成为星标任务，星标项目在专门的星标项目中展示；
  - 删除：用户可以删除当前任务，删除的项目可以在项目回收站中找到，并且可以恢复项目和彻底删除项目；
  - 修改：用户可以修改当前任务的信息，例如：title、info；
  - 查看任务详情：用户可以点击当前任务查看当前任务的具体情况；
5.用户详情：
  - 添加：用户在查看任务详情时可以为当前任务添加具体的分类型项目；
     - 添加任务分类项信息：title、itemId、_id
  -  删除：用户在查看任务详情时可以删除当前任务具体的分类型项目；
  - 修改：用户查看时任务详情时可以修改当前任务具体项的信息；
6. 任务具体项：
  - 添加：用户在具体项中可以为当前具体项添加小任务模块；
     - 添加小任务模块信息：title、time、detailsId、_id
  - 删除：用户可以删除当前具体项中的某一个小任务模块；
  - 修改：用户可以修改当前具体项中小任务模块的信息；
