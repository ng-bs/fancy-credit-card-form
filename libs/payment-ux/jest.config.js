module.exports = {
  name: 'payment-ux',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/payment-ux',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
