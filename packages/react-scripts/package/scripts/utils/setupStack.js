// @remove-file-on-eject
// Add Redux stack dependencies and additional developer dependencies
'use strict';
const spawn = require('react-dev-utils/crossSpawn');
const config = require('./stack.json');

function installDependencies(useYarn, verbose, dependencies, dev) {
  let command;
  let args;

  if (useYarn) {
    command = 'yarnpkg';
    args = ['add', dev && '--dev'].filter(e => e);
  } else {
    command = 'npm';
    args = [
      'install',
      dev ? '--save-dev' : '--save',
      verbose && '--verbose',
    ].filter(e => e);
  }
  args.concat(dependencies);

  console.log(
    `Installing ${config.dependencies.join(', ')} using ${command}...`
  );
  console.log();

  const proc = spawn.sync(command, args, { stdio: 'inherit' });
  if (proc.status !== 0) {
    console.error(`\`${command} ${args.join(' ')}\` failed`);
  }

  return proc.status;
}

function installAllDependencies(useYarn, verbose) {
  let status;

  // Install dependencies
  status = installDependencies(useYarn, verbose, config.dependencies);
  if (status !== 0) {
    return status;
  }

  // Install dev dependencies
  status = installDependencies(useYarn, verbose, config.devDependencies, true);
  if (status !== 0) {
    return status;
  }
}

function addExtraConfiguration(appPackage) {
  return Object.assign(appPackage, config.packageConfig);
}

module.exports = {
  installDependencies: installAllDependencies,
  addExtraConfiguration: addExtraConfiguration,
};
