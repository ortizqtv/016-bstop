module.exports = async () => {
  return {
    moduleNameMapper: {
      '\\.(s?[as]ss?)$/i': 'identity-obj-proxy'
    },
    modulePathIgnorePatterns: [
      '<rootDir>/src/__tests__/__transformers__',
      '<rootDir>/src/__tests__/__mocks__',
      '<rootDir>/node__modules'
    ],
    transform: {
      '\\.(png|svg|jpg|jpeg|gir)$':
        '<rootDir>/src/__tests__/__transformers__/assetTransformer.js',
      '\\.(vue|[jt]sx?)$': 'babel-jest'
    },
    verbose: true
  };
};
