class Account
  attr_reader :account_number, :bank
  attr_accessor :type, :user

  @@all_accounts = []

  def initialize(account_number, type, user, bank)
      @account_number = account_number
      @type = type
      @bank = bank
      @user = user

      @@all_accounts << self
  end 

  def self.all_accounts
    @@all_accounts
  end
end