export * from './intern';

export const environments = [
	{ browserName: 'internet explorer', version: [ '10.0', '11.0' ], platform: 'Windows 7' },
	{ browserName: 'MicrosoftEdge', platform: 'Windows 10' },
	{ browserName: 'firefox', platform: 'Windows 10' },
	{ browserName: 'chrome', platform: 'Windows 10' },
	/* Having issues with Intern 3.1 and Safari on SauceLabs */
	{ browserName: 'safari', version: '9.0', platform: 'OS X 10.11' },
	{ browserName: 'android', deviceName: 'Google Nexus 7 HD Emulator' },
	{ browserName: 'iphone', version: '7.1' }
];

/* SauceLabs supports more max concurrency */
export const maxConcurrency = 4;

export const tunnel = 'SauceLabsTunnel';
