class AddFavoritesToGames < ActiveRecord::Migration[5.0]
  def change
    add_column :games, :favorites, :integer, default: 0
  end
end
