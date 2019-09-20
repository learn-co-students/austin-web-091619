require "pry"
require_relative "bank"
require_relative "account"
require_relative "user"

chase_bank = Bank.new("Chase")
joelle = chase_bank.add_user("Joelle", "H")
joelle2 = chase_bank.add_user("Joelle", "G")
chase_bank.add_account(72487426784, "checking", joelle)
citi_bank = Bank.new("Citi")
citi_bank.add_account(645356, "checking", joelle2)



# class variables
all = Account.all_accounts


binding.pry

#<Account:0x00007f8a44894d58 @account_number=8732864539857, @first_name="Saul", @last_name="F">
