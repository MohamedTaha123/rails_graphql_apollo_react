class Item < ApplicationRecord
  belongs_to :user
  validates :title, :description, :image_url, presence: true
  validates :description, length: { minimum: 10 }, allow_blank: true

end
