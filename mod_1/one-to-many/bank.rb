class Bank

    attr_accessor :name, :interest_rate

    def initialize(name)
        @name = name
        @interest_rate = 5.5
    end
end