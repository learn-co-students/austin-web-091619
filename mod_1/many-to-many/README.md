# Many to Many Relationships
We've learned how to create singular models, but it is time to take the next step and look at how to display relationships between models.

Objectives:
Many to Many relationships.
Practice keeping groups of data related to classes on the class as a class variable
Demonstrate single source of truth by not storing collections of objects on other objects
Demonstrate single source of truth by not storing one object in multiple collections
Starting relationship: A Bank has many Accounts

Ending Relationship:

A Bank has many Users 
  - Users should hold the variable bank

A User has many Accounts
  - Accounts should hold the variable user
  
A Bank has many Accounts through Users
  - Accounts should hold the variable bank

