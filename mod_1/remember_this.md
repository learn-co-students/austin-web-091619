# Cheatsheet

## Class Variables
  - `@@` 
  - Account.all_accounts
  - NO!! saul.all_accounts (Instances cannot access class variables)

## Instance variable
  - `@`
  - NO!!! Account.first_name
  - saul.first_name

## Account.rb initialize method
  1. Account.new(953659483, "Vanessa", "B", <Bank>)
  2. `initialize` runs
  3. All 4 instance variables are set
  4. Take new account instance (Vanessa's account) put it in the class variable `all_accounts`

## Class methods
 - Start with `self.`
 - Account.all_accounts
  - NO!! saul.all_accounts (Instances cannot access class variables)

## Instance Methods
  - Do not start with `self`

## Require Relative
  - `require_relative "account"`
  - Need when using `Account`

## .select
  - Iterates through every value in an array
  - creates a variable `|account|`
  - test the condition `account.bank == self` and keeps the ones that are true
  - Returns a new array
[
  <Account
    bank: <Bank>
    account_number
    first_name
  >
  <Account
    bank: <Bank>
    account_number
    first_name
  >
  <Account
    bank: <Bank>
    account_number
    first_name
  >
]