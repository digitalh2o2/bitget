class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :score, :short_description
end
