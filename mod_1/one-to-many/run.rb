require "pry"
require_relative "bank"
require_relative "account"

chase_bank = Bank.new("Chase")
chase_bank.add_account(8732864539857, "Saul", "F")

citi_bank = Bank.new("Citi")
citi_bank.add_account(9349735, "Angel", "A")
citi_bank.add_account(6824924397, "Wookeun", "S")



# class variables
all = Account.all_accounts


binding.pry

#<Account:0x00007f8a44894d58 @account_number=8732864539857, @first_name="Saul", @last_name="F">
