const Token = artifacts.require("PABLO");

module.exports = async function (deployer) {
  await deployer.deploy(Token);
};
