json.extract! card, :id, :image, :name, :created_at, :updated_at
json.url card_url(card, format: :json)
