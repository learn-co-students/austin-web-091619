require "pry"
require_relative "bank"
require_relative "account"

chase_bank = Bank.new("Chase")
# puts "=========== Chase Bank ==========="
# puts chase_bank
# puts chase_bank.name

saul = Account.new(8732864539857, "Saul", "F")
angel = Account.new(9349735, "Angel", "A")
wookeun = Account.new(9349735, "Wookeun", "S")
# puts "=========== Saul's Account ==========="
# puts saul
puts saul.first_name
puts saul.account_number

# class variables
all = Account.all_accounts
puts "=========== All accounts ==========="
puts all

binding.pry

#<Account:0x00007f8a44894d58 @account_number=8732864539857, @first_name="Saul", @last_name="F">
