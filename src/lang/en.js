export default {
    route: {
      dashboard: 'Dashboard',
      profile: 'Profile',
      introduction: 'Introduction',
      documentation: 'Documentation',
      guide: 'Guide',
      errorPages: 'Error Pages',
      page401: '401',
      page404: '404',
      errorLog: 'Error Log',
      permission: 'Permission',
      pagePermission: 'Page Permission',
      directivePermission: 'Directive Permission',
    },
    login: {
        title: 'Login Form',
        logIn: 'Log in',
        username: 'Username',
        password: 'Password',
        nameTips: 'Please enter the correct user name',
        paswTips: 'The password can not be less than 6 digits',
        allTips: 'The username does not exist or the password is entered incorrectly',
        fialedTips: 'Login failed, please contact the administrator!'
    },
    navbar: {
      profile: 'Profile',
      logOut: 'Log Out',
      dashboard: 'Dashboard',
      github: 'Github',
      theme: 'Theme',
      size: 'Global Size'
    },
    guide: {
      description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
      button: 'Show Guide'
    },
    tagsView: {
      refresh: 'Refresh',
      close: 'Close',
      closeOthers: 'Close Others',
      closeAll: 'Close All'
    },
    permission: {
      roles: 'Your roles',
      switchRoles: 'Switch roles',
      tips: 'In some cases it is not suitable to use v-permission, such as element Tab component or el-table-column and other asynchronous rendering dom cases which can only be achieved by manually setting the v-if.'
    }
}