class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { minimum: 3 }
    validates :email, presence: true
    validates :email, uniqueness: true

    # Should handle regex email validation
    
end
