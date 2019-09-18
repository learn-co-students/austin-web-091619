class Account
  # Creates a reader for account_number
  # account_number instance variable cannot be changed
  attr_reader :account_number
  # Creates a getter and setter for first_name and last_name
  attr_accessor :first_name, :last_name

  # Class variable
  @@all_accounts = []

  # Runs on Account.new expects 3 variables
  def initialize(account_number, first_name, last_name)
      # Instance variables
      @account_number = account_number
      @first_name = first_name
      @last_name = last_name

      # self is the instance that is being created
      @@all_accounts << self
  end 

  # self is the entire class Account
  # Called Account.all_accounts
  def self.all_accounts
    @@all_accounts
  end
end