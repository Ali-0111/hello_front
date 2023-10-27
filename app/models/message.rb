class Message < ApplicationRecord
  validates :greetings_text, presence: true
end
