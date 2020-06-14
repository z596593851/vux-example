module.exports = {
  lintOnSave: false,// 取消 eslint 验证
  configureWebpack: config => {
  	require('@vux/loader').merge(config, {
  	  	plugins: ['vux-ui', {
  	  		name: 'less-theme',
  	  		path: 'src/theme.less'
  	  	}]
  	})
  }
}
