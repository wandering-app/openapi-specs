module.exports = {
	extends: [
		'plugin:yml/standard',
	],
	plugins: [
		'eslint-plugin-yml',
	],
	ignorePatterns: [
		'node_modules/**/*.{yml,yaml}',
	],
	rules: {
		// specs/opengsa/samgov/entity-management.yaml
		// specs/opengsa/samgov/exclusions.yaml
		'yml/no-empty-mapping-value': 'off',
	}
}
