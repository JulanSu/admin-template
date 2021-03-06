const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  name: state => state.user.name,
  roles: state => state.user.roles,
  isPermissionUpdate: state => state.sys.isPermissionUpdate,
  isFromUserCenter: state => state.app.isFromUserCenter
};
export default getters;
