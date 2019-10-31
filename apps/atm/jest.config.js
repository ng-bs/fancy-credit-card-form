module.exports = {
  name: 'atm',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/atm',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
