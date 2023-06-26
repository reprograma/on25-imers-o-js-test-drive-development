const bankAccount = {
	titular: "João",
	saldo: 2000,
	accountLimit: 3000
}

let balance = bankAccount.saldo;
let accountLimit = bankAccount.accountLimit;

// saque
function withdrawMoney(withdraw) {
  if(withdraw <= balance) {
    balance = (balance - withdraw);
    return balance;
  } else if (withdraw > balance && withdraw < accountLimit) {
// =====================================================
 return "Vc entrou no Limite especial."
 // ===================================================== 
  } else {
    return "Operação negada";
  }
}

// console.log(balance);
// console.log(withdrawMoney(500)) // "saldo: 1500"
// console.log(withdrawMoney(2001)) // "Vc entrou no Limite especial."
// console.log(withdrawMoney(5000)) //"Operação negada"


 // Verificar Saldo
function accountBalance() {
  return `O saldo atual de sua conta é R$${balance}.`;
}

// console.log(accountBalance());

// Realizar Deposito 
function depositCash(deposit){
  balance = (balance + deposit)
  return balance;
}

// console.log(depositCash(10000));
// console.log(`O saldo atual é ${balance}`);
// console.log(bankAccount); // retorna oobjeto


// Ajuste em limite bancário

function adjustAccountLimit(ajuste, value) {
  switch(ajuste) {
    case "increase": 
    accountLimit = accountLimit + value;
    return accountLimit;
    break;
    case "decrease":
      accountLimit = accountLimit - value;
      return accountLimit;
    break;
    case "cancel":
      delete bankAccount.accountLimit;
      return "Seu Limite adicional foi desativado."
  }
}

console.log(bankAccount); // retorna oobjeto
console.log(adjustAccountLimit("cancel")); 
console.log(bankAccount); // retorna oobjeto

// console.log(adjustAccountLimit("aumentar", 10));

  module.exports = {withdrawMoney, accountBalance, depositCash, adjustAccountLimit}