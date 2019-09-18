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

    # name and name=  are not needed 
    # because we have the attr_accessor
    def name 
      # !!!!!!!!!!Test this later
      @name
    end

    def name=(new_name)
      @name = new_name
    end
end