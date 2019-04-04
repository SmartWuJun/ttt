module.exports={
  prompts:{
      name: {
          type: 'string',
          required: true,
          message: 'Project name',
      },
      author: {
          type: 'string',
          message: 'Author',
      },
      description: {
          type: 'string',
          required: false,
          message: 'Project description',
          default: '构建一个lib',
      },
      lint: {
          "type": "confirm",
          "message": "是否用tslint"
      },
  },
  

 filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit || e2e',
    'build/webpack.test.conf.js': "unit && runner === 'karma'",
    'test/unit/**/*': 'unit',
    'test/unit/index.js': "unit && runner === 'karma'",
    'test/unit/jest.conf.js': "unit && runner === 'jest'",
    'test/unit/karma.conf.js': "unit && runner === 'karma'",
    'test/unit/specs/index.js': "unit && runner === 'karma'",
    'test/unit/setup.js': "unit && runner === 'jest'",
    'test/e2e/**/*': 'e2e',
    'src/router/**/*': 'router',
     
  }
}
