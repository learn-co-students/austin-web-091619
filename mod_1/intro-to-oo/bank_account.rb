require 'pry'
class BankAccount
    # attr_reader :balance
    # attr_writer :balance
    attr_accessor :balance

    @@all = []

    def self.all
        #somehow return all bank accounts
        @@all
    end

    def +(ba)
        self.balance + ba.balance
    end

    def initialize(balance)
        @balance = balance
        @@all << self
    end

    def deposit(amount)
        @balance += amount
    end
    def withdraw(amount)
        @balance -= amount
    end
    # def balance 
    #     @balance
    # end
    # def balance= (num)
    #     @balance = num
    # end
end

b = BankAccount.new(5)
binding.pry
puts "hiwo"