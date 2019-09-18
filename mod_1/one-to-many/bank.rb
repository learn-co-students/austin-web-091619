require_relative "account"

class Bank
    # Creates getters and setters for name and interest_rate 
    attr_accessor :name, :interest_rate

    # Runs when Bank.new is called
    # Creates a new Bank can passin a name
    def initialize(name)
      # !!!!!!!!!Test without a name
      # Set name instance variable to name that was passed in
      @name = name
      # Sets the instance variable interest_rate to 5.5 
      # For every instance
      # !!!!!!!!!!Test this!
      @interest_rate = 5.5
    end

    def add_account(account_number, first_name, last_name)
      # self is the instance that called add_account (chase_bank or citi_bank)
      new_account = Account.new(account_number, first_name, last_name, self)
    end

    # Returns an list of accounts for 1 bank (chase_bank.show_accounts)
    def show_accounts 
      # list of all Accounts
      all_accounts = Account.all_accounts

      # self is the instance of bank (chase_bank or citi_bank)
      all_accounts.select{ |account| account.bank == self }
    end


    # name and name=  are not needed 
    # because we have the attr_accessor
    # def name 
      # !!!!!!!!!!Test this later
      # @name
    # end

    def name=(new_name)
      @name = new_name
    end
end