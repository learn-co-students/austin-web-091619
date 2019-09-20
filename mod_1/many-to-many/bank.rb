require_relative "account"

class Bank

  

    attr_accessor :name, :interest_rate

    def initialize(name)
      @name = name
      @interest_rate = 5.5
    end

    # chase_bank.add_account
    def add_account(account_number, type, user)
      new_account = Account.new(account_number, type, user, self)
    end

    # chase_bank.add_user
    def add_user(first_name, last_name)
      # self = chase_bank
      new_user = User.new(first_name, last_name, self)
    end

    def show_accounts 
      all_accounts = Account.all_accounts

      all_accounts.select{ |account| account.bank == self }
    end
end