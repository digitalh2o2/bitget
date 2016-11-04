class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
        t.string :title
        t.string :score
        t.string :publisher
        t.string :short_description
        t.string :platforms
        t.string :thumb
      t.timestamps
    end
  end
end
