require_relative "account"
class User
  attr_accessor :first_name, :last_name, :bank



  def initialize(first_name, last_name, bank)
      @first_name = first_name
      @last_name = last_name
      @bank = bank
  end 


  # joelle.user_accounts
  # return all the accounts for a specific user
  def user_accounts
    # self = joelle
    all_accounts = Account.all_accounts
    all_accounts.select { |account| account.user == self }
  end
end