class RemoveColumnFromGames < ActiveRecord::Migration[5.0]
  def change
    remove_column :games, :publisher
    remove_column :games, :thumb
    remove_column :games, :platforms
  end
end
